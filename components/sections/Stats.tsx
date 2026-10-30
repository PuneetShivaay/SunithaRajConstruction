import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import { marquee, stats } from "@/content/company";

export function Marquee() {
  return (
    <div className="overflow-hidden border-b border-line py-6" aria-hidden>
      <div className="marquee flex w-max gap-12 whitespace-nowrap font-display text-4xl font-semibold text-steel/60">
        {[0, 1].flatMap((k) =>
          marquee.map((w) => (
            <span key={w + k} className="flex items-center gap-12">
              {w}
              <span className="text-gold">◆</span>
            </span>
          ))
        )}
      </div>
    </div>
  );
}

export function Stats() {
  return (
    <section className="border-y border-line bg-surface">
      <Container className="grid grid-cols-2 lg:grid-cols-4">
        {stats.map((s, n) => (
          <Reveal key={s.label} delay={n * 0.08} className={n ? "py-10 lg:border-l lg:border-line lg:pl-10" : "py-10"}>
            <div className="font-display text-5xl font-semibold text-gold-grad">{s.value}</div>
            <div className="mt-2 text-sm uppercase tracking-[0.2em] text-muted">{s.label}</div>
          </Reveal>
        ))}
      </Container>
    </section>
  );
}
