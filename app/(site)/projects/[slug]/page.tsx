import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTA from "@/components/sections/CTA";
import PageHero from "@/components/sections/PageHero";
import ProjectCard from "@/components/sections/ProjectCard";
import Container from "@/components/shared/Container";
import JsonLd from "@/components/shared/JsonLd";
import Lightbox from "@/components/shared/Lightbox";
import Media from "@/components/shared/Media";
import SectionHeading from "@/components/shared/SectionHeading";
import { getProject, projects } from "@/content/projects";
import { getService } from "@/content/services";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return pageMetadata({ title: `${p.title}, ${p.location}`, description: p.summary, path: `/projects/${p.slug}`, image: p.cover });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const service = getService(p.service);
  const related = projects.filter((x) => x.slug !== p.slug && x.category === p.category).slice(0, 3);
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: p.title, path: `/projects/${p.slug}` },
  ];

  const facts = [
    { k: "Location", v: p.location },
    { k: "Sector", v: p.sector },
    { k: "Service", v: service?.title ?? "" },
    ...(p.year ? [{ k: "Year", v: String(p.year) }] : []),
    ...(p.client ? [{ k: "Client", v: p.client }] : []),
  ];

  return (
    <>
      <PageHero eyebrow={`${p.sector} project`} title={p.title} lede={p.summary} crumbs={crumbs} />

      <section className="py-16 md:py-24">
        <Container>
          <Media src={p.cover} alt={`${p.title}, ${p.location}`} priority sizes="(min-width: 1240px) 1240px, 100vw" className="aspect-[16/8] rounded-[6px] border border-line" label={p.title} />

          <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <dl className="divide-y divide-line border-y border-line">
              {facts.map((f) => (
                <div key={f.k} className="flex justify-between gap-6 py-4">
                  <dt className="text-sm uppercase tracking-[0.2em] text-muted">{f.k}</dt>
                  <dd className="text-right font-medium">
                    {f.k === "Service" && service ? (
                      <Link href={`/services/${service.slug}`} className="text-gold hover:underline">
                        {f.v}
                      </Link>
                    ) : (
                      f.v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <div>
              <h2 className="font-display text-3xl font-semibold">Scope of work</h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {p.scope.map((s) => (
                  <li key={s} className="flex items-center gap-3 rounded-[4px] border border-line bg-surface px-5 py-4">
                    <span className="h-2 w-2 rotate-45 bg-gold" /> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {p.gallery.length > 0 && (
        <section className="bg-surface py-16 md:py-24">
          <Container>
            <SectionHeading eyebrow="Gallery" title="From the" highlight="site." />
            <Lightbox images={p.gallery} title={p.title} />
          </Container>
        </section>
      )}

      {related.length > 0 && (
        <section className="py-16 md:py-24">
          <Container>
            <SectionHeading eyebrow="More work" title="Related" highlight="projects." />
            <div className="grid auto-rows-[300px] gap-4 md:grid-cols-3">
              {related.map((r) => (
                <ProjectCard key={r.slug} project={r} className="h-full" />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTA />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
