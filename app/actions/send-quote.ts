"use server";

import { Resend } from "resend";
import { quoteSchema, type QuoteInput } from "@/lib/quote-schema";

export type QuoteResult = { ok: true } | { ok: false; error: string };

const esc = (s = "") => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function sendQuote(input: QuoteInput): Promise<QuoteResult> {
  const parsed = quoteSchema.safeParse(input);
  if (!parsed.success) return { ok: false, error: "Please check the form and try again." };
  const d = parsed.data;
  if (d.company) return { ok: true }; // bot – silently accept

  const key = process.env.RESEND_API_KEY;
  const to = process.env.QUOTE_TO_EMAIL;
  if (!key || !to) {
    console.warn("[sendQuote] RESEND_API_KEY / QUOTE_TO_EMAIL not set — enquiry not emailed:", d);
    return { ok: true };
  }

  try {
    const resend = new Resend(key);
    const rows: [string, string | undefined][] = [
      ["Name", d.name],
      ["Phone", d.phone],
      ["Email", d.email],
      ["Service", d.service],
      ["Location", d.location],
      ["Message", d.message],
    ];
    const { error } = await resend.emails.send({
      from: process.env.QUOTE_FROM_EMAIL ?? "Sunitharaj Website <onboarding@resend.dev>",
      to,
      replyTo: d.email || undefined,
      subject: `New quote request: ${d.service} — ${d.name}`,
      html: `<h2>New quote request</h2><table cellpadding="6">${rows
        .filter(([, v]) => v)
        .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v).replace(/\n/g, "<br>")}</td></tr>`)
        .join("")}</table>`,
    });
    if (error) throw error;
    return { ok: true };
  } catch (e) {
    console.error("[sendQuote]", e);
    return { ok: false, error: "We couldn't send your request. Please try WhatsApp or call us." };
  }
}
