import { WhatsAppIcon } from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import QuoteForm from "./QuoteForm";

export function ContactChannels() {
  const channels = [
    { label: "WhatsApp, fastest reply", value: site.whatsappDisplay, href: whatsappLink(), wa: true },
    { label: "Call the office", value: site.phone, href: site.phoneHref },
    { label: "Instagram", value: site.instagram.handle, href: site.instagram.url },
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "Office", value: site.address.full, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.full)}` },
  ];
  return (
    <ul className="divide-y divide-line border-y border-line">
      {channels.map((c) => (
        <li key={c.label}>
          <a
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 py-5"
          >
            <span className="min-w-0">
              <small className="block text-sm text-muted">{c.label}</small>
              <b className={`mt-1 block break-words font-display text-xl font-semibold sm:text-2xl ${c.wa ? "text-wa" : "group-hover:text-gold"}`}>
                {c.value}
              </b>
            </span>
            {c.wa ? <WhatsAppIcon className="h-6 w-6 shrink-0 text-wa" /> : <span className="text-gold">→</span>}
          </a>
        </li>
      ))}
    </ul>
  );
}

/** Home page contact block: channels + quote form. */
export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading eyebrow="Contact" title="Talk to us" highlight="today." lede={`Office hours: ${site.hours}`} className="mb-10 md:mb-10" />
          <ContactChannels />
        </div>
        <QuoteForm />
      </Container>
    </section>
  );
}
