import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { steps } from "@/content/company";

export default function Process() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title="Concept to"
          highlight="commissioning."
          lede="Every project follows the same six stages, so you always know what happens next."
        />
        <ol className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-6">
          {steps.map((s, n) => (
            <li key={s.title} className="group bg-bg p-6 transition hover:bg-surface">
              <span className="font-display text-4xl font-semibold text-steel/30 transition group-hover:text-gold">0{n + 1}</span>
              <h3 className="mt-6 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
