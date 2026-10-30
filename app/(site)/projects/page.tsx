import CTA from "@/components/sections/CTA";
import PageHero from "@/components/sections/PageHero";
import ProjectsGallery from "@/components/sections/ProjectsGallery";
import Container from "@/components/shared/Container";
import JsonLd from "@/components/shared/JsonLd";
import { projects } from "@/content/projects";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Projects",
  description: "Buildings, roads, STP/WTP civil works, interiors and waterproofing projects by Sunitharaj Construction across Lucknow and Uttar Pradesh.",
  path: "/projects",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Work that"
        highlight="stands up."
        lede="A selection of government and private projects — from homes and malls to roads and treatment plants."
        crumbs={crumbs}
      />
      <section className="py-16 md:py-24">
        <Container>
          <ProjectsGallery projects={projects} />
        </Container>
      </section>
      <CTA title="Your project could be next." />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
