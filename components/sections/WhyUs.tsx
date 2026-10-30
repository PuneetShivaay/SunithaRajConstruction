import Container from "@/components/shared/Container";
import Media from "@/components/shared/Media";
import Reveal from "@/components/shared/Reveal";
import { values } from "@/content/company";
import { images } from "@/content/images";

/** Contrast band: light on the dark theme, dark on the light theme (as in the preview). */
export default function WhyUs() {
  return (
    <section className="bg-alt-bg py-20 text-alt-text md:py-28">
      <Container className="grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">Why Sunitharaj</span>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
            Built on sincerity, delivered with precision.
          </h2>
          <p className="mt-6 text-alt-muted">
            Our holistic approach, matched by solutions customised to each client, sets the ground for long-term
            relationships. We build infrastructure for government and private projects with durability, efficiency and
            timely delivery.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="border-t-2 border-gold pt-4">
                <b className="block font-semibold">{v.title}</b>
                <span className="mt-1 block text-sm text-alt-muted">{v.text}</span>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1} className="relative">
          <Media src={images.whyUs} alt="Sunitharaj crew at work on site" sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[4/5] w-full" />
          <div className="absolute -bottom-6 -left-6 bg-gold-grad p-8 text-black">
            {/* TODO(client): verify years in business */}
            <div className="font-display text-5xl font-semibold">15+</div>
            <div className="text-sm font-medium">years building Lucknow</div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
