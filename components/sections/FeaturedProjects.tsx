import Button, { ArrowIcon } from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { featuredProjects } from "@/content/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  const items = featuredProjects.slice(0, 5);
  return (
    <section className="bg-surface py-20 md:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Projects" title="Recent work" highlight="from our sites." className="mb-0 md:mb-0" />
          <Button href="/projects" variant="outline">
            All projects <ArrowIcon />
          </Button>
        </div>
        <div className="mt-12 grid auto-rows-[280px] gap-4 md:mt-16 md:grid-cols-3 md:auto-rows-[300px]">
          {items.map((p, n) => (
            <Reveal key={p.slug} delay={n * 0.06} className={n === 0 ? "md:col-span-2 md:row-span-2" : ""}>
              <ProjectCard project={p} large={n === 0} className="h-full" />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
