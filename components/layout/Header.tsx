"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SkylineMark from "@/components/SkylineMark";
import Container from "@/components/shared/Container";
import { ThemeSegmented, ThemeSwitch } from "@/components/shared/ThemeSwitch";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "border-b border-line bg-bg/90 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <Container className="flex h-[76px] items-center gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <SkylineMark className="h-8" />
          <span className="leading-none">
            <span className="block font-display text-[17px] font-semibold tracking-[0.25em] text-gold-grad">SUNITHARAJ</span>
            <span className="block text-[10px] uppercase tracking-[0.45em] text-muted">Construction</span>
          </span>
        </Link>

        <nav aria-label="Main" className="ml-auto hidden items-center gap-8 md:flex">
          {site.nav.map((n) => {
            const active = pathname.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative py-1 text-[15px] font-medium transition-colors hover:text-gold",
                  active ? "text-gold" : "text-text/85"
                )}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <ThemeSwitch className="ml-auto hidden md:ml-0 md:grid" />

        <Link
          href="/contact"
          className="hidden bg-gold-grad px-5 py-2.5 text-sm font-semibold text-black md:inline-flex"
        >
          Get a quote
        </Link>

        <ThemeSwitch className="ml-auto md:hidden" />

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 place-items-center rounded-[4px] border border-line md:hidden"
        >
          <span className="relative block h-3 w-5">
            <span className={cn("absolute left-0 top-0 h-0.5 w-5 bg-text transition", open && "top-1.5 rotate-45")} />
            <span className={cn("absolute bottom-0 left-0 h-0.5 w-5 bg-text transition", open && "bottom-1 -rotate-45")} />
          </span>
        </button>
      </Container>

      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100svh-76px)] overflow-y-auto border-t border-line bg-bg md:hidden"
      >
        <Container className="flex flex-col py-6">
          {[{ label: "Home", href: "/" }, ...site.nav].map((n) => (
            <Link key={n.href} href={n.href} className="border-b border-line py-5 font-display text-3xl font-semibold">
              {n.label}
            </Link>
          ))}
          <div className="mt-8 grid gap-3">
            <ThemeSegmented />
            <Link href="/contact" className="rounded-[4px] bg-gold-grad py-4 text-center font-semibold text-[#0e0f11]">
              Get a quote
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="rounded-[4px] bg-wa py-4 text-center font-semibold text-white">
              WhatsApp us
            </a>
          </div>
        </Container>
      </div>
    </header>
  );
}
