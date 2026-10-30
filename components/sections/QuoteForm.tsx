"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { sendQuote } from "@/app/actions/send-quote";
import { WhatsAppIcon } from "@/components/shared/Button";
import { quoteSchema, serviceOptions, type QuoteInput } from "@/lib/quote-schema";
import { whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const field =
  "mt-2 block w-full rounded-[4px] border border-line bg-bg px-4 py-3.5 text-[16px] text-text placeholder:text-muted/70 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30";

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const [lastMessage, setLastMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<QuoteInput>({ resolver: zodResolver(quoteSchema), defaultValues: { service: undefined } });

  const onSubmit = async (data: QuoteInput) => {
    const msg = [
      `Hello Sunitharaj Construction, I'd like a quote.`,
      `Name: ${data.name}`,
      `Service: ${data.service}`,
      data.location && `Location: ${data.location}`,
      data.message && `Details: ${data.message}`,
    ]
      .filter(Boolean)
      .join("\n");
    setLastMessage(msg);
    const res = await sendQuote(data);
    if (res.ok) {
      setStatus("sent");
      reset();
    } else {
      setStatus("error");
      setServerError(res.error);
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-[6px] border border-gold/40 bg-surface p-8" role="status">
        <span className="eyebrow mb-4">Request received</span>
        <h3 className="font-display text-3xl font-semibold">Thank you — we&apos;ll be in touch shortly.</h3>
        <p className="mt-3 text-muted">For a faster reply, continue the conversation on WhatsApp.</p>
        <a
          href={whatsappLink(lastMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-[4px] bg-wa px-6 py-3.5 font-semibold text-white"
        >
          <WhatsAppIcon /> Continue on WhatsApp
        </a>
        <button type="button" onClick={() => setStatus("idle")} className="ml-4 text-sm text-muted underline">
          Send another
        </button>
      </div>
    );
  }

  const Err = ({ name }: { name: keyof QuoteInput }) =>
    errors[name] ? (
      <span id={`${name}-error`} className="mt-1.5 block text-sm text-red-400">
        {errors[name]?.message as string}
      </span>
    ) : null;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="rounded-[6px] border border-line bg-surface p-6 md:p-9">
      <h2 className="font-display text-3xl font-semibold">Request a quote</h2>
      <p className="mt-2 text-muted">Takes under a minute. We usually reply the same day.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium">
          Name *
          <input {...register("name")} autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby="name-error" />
          <Err name="name" />
        </label>
        <label className="text-sm font-medium">
          Phone *
          <input {...register("phone")} type="tel" inputMode="tel" autoComplete="tel" className={field} aria-invalid={!!errors.phone} aria-describedby="phone-error" />
          <Err name="phone" />
        </label>
        <label className="text-sm font-medium">
          Email
          <input {...register("email")} type="email" autoComplete="email" className={field} aria-invalid={!!errors.email} aria-describedby="email-error" />
          <Err name="email" />
        </label>
        <label className="text-sm font-medium">
          Service *
          <select {...register("service")} defaultValue="" className={field} aria-invalid={!!errors.service} aria-describedby="service-error">
            <option value="" disabled>
              Choose a service
            </option>
            {serviceOptions.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <Err name="service" />
        </label>
        <label className="text-sm font-medium sm:col-span-2">
          Site location
          <input {...register("location")} placeholder="e.g. Gomti Nagar, Lucknow" className={field} />
        </label>
        <label className="text-sm font-medium sm:col-span-2">
          Project details
          <textarea {...register("message")} rows={4} placeholder="Plot size, floors, timeline, budget…" className={cn(field, "resize-y")} />
        </label>
        <input {...register("company")} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      </div>

      {status === "error" && (
        <p role="alert" className="mt-5 text-sm text-red-400">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 w-full rounded-[4px] bg-gold-grad py-4 font-semibold text-[#0e0f11] transition hover:brightness-110 disabled:opacity-60"
      >
        {isSubmitting ? "Sending…" : "Send request"}
      </button>
      <p className="mt-4 text-center text-xs text-muted">We never share your details.</p>
    </form>
  );
}
