import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { testimonials } from "@/content/company";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32">
      <Container>
        <SectionHeading eyebrow="Client voices" title="Trusted by homeowners," highlight="businesses and departments." />
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, n) => (
            <Reveal key={n} delay={n * 0.08}>
              <figure className="flex h-full flex-col rounded-[6px] border border-line bg-surface p-8">
                <span aria-hidden className="font-display text-6xl leading-none text-gold">“</span>
                <blockquote className="mt-2 flex-1 text-lg leading-relaxed text-text/90">{t.quote}</blockquote>
                <figcaption className="mt-8 border-t border-line pt-5">
                  <b className="block font-semibold">{t.name}</b>
                  <span className="text-sm text-muted">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
