import Container from "@/components/shared/Container";
import JsonLd from "@/components/shared/JsonLd";
import SectionHeading from "@/components/shared/SectionHeading";
import type { FAQ as FAQItem } from "@/lib/types";

export default function FAQ({ items, title = "Good to know" }: { items: FAQItem[]; title?: string }) {
  return (
    <section className="border-t border-line py-20 md:py-32">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading eyebrow="Questions" title={title} highlight="before you call." />
        <div>
          {items.map((f, n) => (
            <details key={f.q} className="group border-t border-line last:border-b" open={n === 0}>
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 font-display text-xl font-semibold [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden className="mt-1 text-2xl leading-none text-gold transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-6 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
    </section>
  );
}
