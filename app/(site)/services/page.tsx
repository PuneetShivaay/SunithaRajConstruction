import CTA from "@/components/sections/CTA";
import PageHero from "@/components/sections/PageHero";
import Process from "@/components/sections/Process";
import ServicesGrid from "@/components/sections/ServicesGrid";
import JsonLd from "@/components/shared/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services: Construction, Interiors, Electrical & Waterproofing",
  description:
    "Civil construction, interior design, electrical works and waterproofing in Lucknow, delivered by one accountable team.",
  path: "/services",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything your build needs,"
        highlight="under one roof."
        lede="Four specialist teams — construction, interiors, electrical and waterproofing — coordinated by one project lead."
        crumbs={crumbs}
      />
      <ServicesGrid heading={false} />
      <Process />
      <CTA />
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
