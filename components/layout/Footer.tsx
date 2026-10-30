import Link from "next/link";
import SkylineMark from "@/components/SkylineMark";
import Container from "@/components/shared/Container";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { whatsappLink } from "@/lib/whatsapp";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface pb-28 pt-20 md:pb-10">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <SkylineMark className="h-9" />
              <span className="font-display text-lg font-semibold tracking-[0.25em] text-gold-grad">SUNITHARAJ</span>
            </Link>
            <p className="mt-5 max-w-sm text-muted">{site.tagline}</p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-muted hover:text-text">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Company</h3>
            <ul className="space-y-2.5">
              {site.nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-muted hover:text-text">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Contact</h3>
            <address className="space-y-2.5 not-italic text-muted">
              <p>{site.address.full}</p>
              <p><a href={site.phoneHref} className="hover:text-text">{site.phone}</a></p>
              <p><a href={`mailto:${site.email}`} className="hover:text-text">{site.email}</a></p>
              <p><a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="text-wa hover:brightness-125">WhatsApp {site.whatsappDisplay}</a></p>
              <p><a href={site.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-text">Instagram {site.instagram.handle}</a></p>
              <p>{site.hours}</p>
            </address>
          </div>
        </div>

        <p aria-hidden className="outline-text mt-16 select-none text-center font-display text-[clamp(56px,14vw,200px)] font-semibold leading-[0.85] tracking-tight">
          SUNITHARAJ
        </p>

        <div className="mt-8 flex flex-wrap justify-between gap-3 border-t border-line pt-6 text-sm text-muted">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a
              href="https://otical.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gold hover:underline"
            >
              Otical
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
