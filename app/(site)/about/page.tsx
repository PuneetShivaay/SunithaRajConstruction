import ClientStrip from "@/components/sections/ClientStrip";
import CTA from "@/components/sections/CTA";
import PageHero from "@/components/sections/PageHero";
import { Stats } from "@/components/sections/Stats";
import { Machinery, Team } from "@/components/sections/TeamAndMachinery";
import WhyUs from "@/components/sections/WhyUs";
import Container from "@/components/shared/Container";
import JsonLd from "@/components/shared/JsonLd";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Us",
  description: "Meet the Sunitharaj Construction team in Gomti Nagar, Lucknow — our story, people, machinery and the brands we work with.",
  path: "/about",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="A Lucknow builder with"
        highlight="one promise."
        lede="Sunitharaj Construction brings civil, interiors, electrical and waterproofing expertise together, so every project has one accountable team from first sketch to final handover."
        crumbs={crumbs}
      />
      <Stats />

      <section className="py-20 md:py-32">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionHeading eyebrow="Our story" title="Built from the" highlight="ground up." className="mb-0 md:mb-0" />
          <Reveal className="prose-site text-lg">
            {/* TODO(client): replace with the real company story, founding year and milestones. */}
            <p>
              Founded by Rajkumar Sharma in Gomti Nagar, Lucknow, Sunitharaj Construction grew from residential civil work
              into a multi-disciplinary firm delivering homes, commercial complexes, roads and treatment plants.
            </p>
            <p>
              Today we combine our own machinery, qualified engineers and specialist crews to serve government
              departments, businesses and families across Uttar Pradesh.
            </p>
          </Reveal>
        </Container>
      </section>

      <WhyUs />
      <Team />
      <Machinery />
      <ClientStrip />
      <CTA />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
