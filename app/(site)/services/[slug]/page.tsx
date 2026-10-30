import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import PageHero from "@/components/sections/PageHero";
import ProjectCard from "@/components/sections/ProjectCard";
import Button, { ArrowIcon, WhatsAppIcon } from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import JsonLd from "@/components/shared/JsonLd";
import Media from "@/components/shared/Media";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { projects } from "@/content/projects";
import { getService, services } from "@/content/services";
import { breadcrumbJsonLd, pageMetadata, serviceJsonLd } from "@/lib/seo";
import { enquiryMessage, whatsappLink } from "@/lib/whatsapp";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return pageMetadata({
    title: `${s.title} in Lucknow`,
    description: s.summary,
    path: `/services/${s.slug}`,
    image: s.image,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();

  const related = projects.filter((p) => p.service === s.slug).slice(0, 3);
  const others = services.filter((x) => x.slug !== s.slug);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: s.title, path: `/services/${s.slug}` },
  ];

  return (
    <>
      <PageHero eyebrow={s.tagline} title={s.title} lede={s.summary} crumbs={crumbs}>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/contact">
            Get a {s.title.toLowerCase()} quote <ArrowIcon />
          </Button>
          <Button href={whatsappLink(enquiryMessage(s.title.toLowerCase()))} variant="wa">
            <WhatsAppIcon /> Enquire on WhatsApp
          </Button>
        </div>
      </PageHero>

      <section className="py-20 md:py-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <Media src={s.image} alt={`${s.title} work`} sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[4/3] rounded-[6px] border border-line" label={s.title} />
          </Reveal>
          <Reveal delay={0.1} className="prose-site">
            <span className="eyebrow mb-6">Overview</span>
            {s.description.map((p) => (
              <p key={p} className="text-lg">
                {p}
              </p>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <Container>
          <SectionHeading eyebrow="What we do" title={`${s.title}`} highlight="services." />
          <ul className="grid gap-px overflow-hidden rounded-[6px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {s.subServices.map((x, n) => (
              <li key={x.name} className="group bg-surface p-8 transition-colors hover:bg-raised">
                <span className="font-display text-sm font-semibold text-gold">{String(n + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-display text-2xl font-semibold">{x.name}</h3>
                <p className="mt-2 text-muted">{x.description}</p>
                <a
                  href={whatsappLink(enquiryMessage(x.name.toLowerCase()))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-wa"
                >
                  <WhatsAppIcon /> Enquire
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="py-20 md:py-28">
          <Container>
            <SectionHeading eyebrow="Related work" title="Recent" highlight={`${s.title.toLowerCase()} projects.`} />
            <div className="grid auto-rows-[300px] gap-4 md:grid-cols-3">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} className="h-full" />
              ))}
            </div>
          </Container>
        </section>
      )}

      <FAQ items={s.faqs} title={`${s.title}:`} />

      <section className="border-t border-line py-16">
        <Container>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-muted">Other services</p>
          <div className="grid gap-4 md:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="group flex items-center justify-between rounded-[6px] border border-line p-6 transition-colors hover:border-gold/60">
                <span className="font-display text-2xl font-semibold">{o.title}</span>
                <ArrowIcon className="h-5 w-5 text-gold transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTA />
      <JsonLd data={serviceJsonLd(s.title, s.summary, `/services/${s.slug}`)} />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
