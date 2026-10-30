import Link from "next/link";
import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import { whatsappLink } from "@/lib/whatsapp";

export default function CTA({ title = "Let's build something that lasts." }: { title?: string; text?: string }) {
  return (
    <section className="bg-gold-grad py-24 text-black">
      <Container>
        <Reveal className="flex flex-wrap items-end justify-between gap-10">
          <h2 className="max-w-3xl font-display text-5xl font-semibold leading-[0.95] sm:text-7xl">{title}</h2>
          <div className="flex flex-wrap gap-4">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="bg-wa px-7 py-4 font-semibold text-white">
              WhatsApp Us
            </a>
            <Link href="/contact" className="bg-black px-7 py-4 font-semibold text-white">
              Request a Quote →
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
