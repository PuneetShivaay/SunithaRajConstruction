import ClientStrip from "@/components/sections/ClientStrip";
import ContactSection from "@/components/sections/ContactSection";
import CTA from "@/components/sections/CTA";
import FAQ from "@/components/sections/FAQ";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Hero from "@/components/sections/Hero";
import Process from "@/components/sections/Process";
import ServicesGrid from "@/components/sections/ServicesGrid";
import { Marquee, Stats } from "@/components/sections/Stats";
import { Machinery } from "@/components/sections/TeamAndMachinery";
import Testimonials from "@/components/sections/Testimonials";
import WhyUs from "@/components/sections/WhyUs";
import { faqs } from "@/content/company";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <ClientStrip />
      <ServicesGrid />
      <FeaturedProjects />
      <Process />
      <WhyUs />
      <Machinery />
      <Testimonials />
      <FAQ items={faqs} />
      <ContactSection />
      <CTA />
    </>
  );
}
