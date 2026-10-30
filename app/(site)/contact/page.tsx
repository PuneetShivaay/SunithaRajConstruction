import { ContactChannels } from "@/components/sections/ContactSection";
import PageHero from "@/components/sections/PageHero";
import QuoteForm from "@/components/sections/QuoteForm";
import Container from "@/components/shared/Container";
import JsonLd from "@/components/shared/JsonLd";
import { site } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact & Get a Quote",
  description: "Request a quote from Sunitharaj Construction, Gomti Nagar, Lucknow. Call, WhatsApp or send your project details.",
  path: "/contact",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build"
        highlight="something solid."
        lede="Tell us about your site and requirement. We'll respond with next steps and an honest estimate."
        crumbs={crumbs}
      />

      <section className="py-16 md:py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <ContactChannels />
            <p className="mt-6 text-muted">{site.hours}</p>

            <iframe
              title="Sunitharaj Construction location on Google Maps"
              src={site.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="mt-8 aspect-[4/3] w-full rounded-[6px] border border-line grayscale invert-[0.9] hue-rotate-180"
            />
          </div>

          <QuoteForm />
        </Container>
      </section>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
