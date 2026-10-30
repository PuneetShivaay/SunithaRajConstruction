import Link from "next/link";
import Container from "@/components/shared/Container";
import Media from "@/components/shared/Media";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { services } from "@/content/services";

export default function ServicesGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        {heading && (
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="What we do" title="One crew for the" highlight="whole build." className="mb-0 md:mb-0" />
            <p className="max-w-sm text-muted">Four disciplines under one roof: fewer handovers, tighter timelines, single accountability.</p>
          </div>
        )}
        <div className="grid gap-px bg-line md:grid-cols-2">
          {services.map((s, n) => (
            <Reveal key={s.slug} delay={(n % 2) * 0.1} className="bg-bg">
              <Link href={`/services/${s.slug}`} className="group relative block h-full overflow-hidden bg-bg">
                <div className="relative h-64 overflow-hidden">
                  <Media
                    src={s.image}
                    alt={`${s.title} work by Sunitharaj Construction`}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="h-full w-full [&_img]:grayscale-[40%] [&_img]:transition [&_img]:duration-700 group-hover:[&_img]:scale-105 group-hover:[&_img]:grayscale-0"
                    label={s.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent" />
                </div>
                <div className="relative -mt-12 p-8">
                  <span className="font-display text-sm text-gold">0{n + 1}</span>
                  <h3 className="mt-2 font-display text-3xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-muted">{s.summary}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {s.subServices.slice(0, 4).map((x) => (
                      <li key={x.name} className="border border-line px-3 py-1.5 text-xs text-muted">
                        {x.name}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                    Explore service <span className="transition group-hover:translate-x-1">→</span>
                  </span>
                </div>
                <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gold-grad transition duration-500 group-hover:scale-x-100" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
