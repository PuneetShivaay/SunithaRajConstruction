"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Button, { ArrowIcon, WhatsAppIcon } from "@/components/shared/Button";
import Container from "@/components/shared/Container";
import Media from "@/components/shared/Media";
import { images } from "@/content/images";
import { whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const slides = [
  { src: images.hero[0], alt: "Multi-storey building by Sunitharaj Construction" },
  { src: images.hero[1], alt: "Construction site with crew at work" },
  { src: images.hero[2], alt: "Foundation and piling works at a commercial site" },
];

export default function Hero() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 6000);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-32 md:pb-24">
      <motion.div style={{ y }} className="absolute inset-0">
        {slides.map((s, n) => (
          <div key={s.src} className={cn("absolute inset-0 transition-opacity duration-[1400ms]", n === i ? "opacity-100" : "opacity-0")}>
            <Media src={s.src} alt={s.alt} priority={n === 0} className="h-full w-full" label=" " />
          </div>
        ))}
      </motion.div>
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
      <div className="grid-bg absolute inset-0 opacity-20" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-3xl"
        >
          <span className="eyebrow mb-6">Gomti Nagar · Lucknow</span>
          <h1 className="font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-[104px]">
            Building <span className="text-gold-grad">ambitions</span> into landmarks.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted">
            Civil construction, interiors, electrical works and waterproofing — one accountable team from first sketch to final handover.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact">
              Start your project <ArrowIcon />
            </Button>
            <Button href={whatsappLink()} variant="wa">
              <WhatsAppIcon /> WhatsApp us
            </Button>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted">
            {["Government & private projects", "Own machinery & testing", "Design to commissioning"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rotate-45 bg-gold" /> {t}
              </li>
            ))}
          </ul>
        </motion.div>
      </Container>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 gap-2 md:flex" role="group" aria-label="Hero slides">
        {slides.map((s, n) => (
          <button
            key={s.src}
            aria-pressed={n === i}
            aria-label={`Show slide ${n + 1}`}
            onClick={() => setI(n)}
            className={cn("h-1 transition-all", n === i ? "w-10 bg-gold" : "w-5 bg-steel/40")}
          />
        ))}
      </div>

      <div className="absolute bottom-8 right-6 hidden border-l-2 border-gold bg-surface/80 px-5 py-4 backdrop-blur md:block">
        <div className="font-display text-sm font-semibold">Now building</div>
        <div className="text-xs text-muted">Residential tower, Gomti Nagar</div>
      </div>
    </section>
  );
}
