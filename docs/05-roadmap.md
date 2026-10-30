# 05: Roadmap and Progress Tracker

Legend: `[x]` done · `[ ]` to do · `[~]` in progress

## Phase 0: Discovery and Preview ✅
- [x] Review current site (lustrous-kheer-dffc23.netlify.app)
- [x] Choose tech stack
- [x] Choose theme: Dark "Gold & Steel", Clash Display headings
- [x] Decide on a multi-page site
- [x] Scaffold Next.js 15 + Tailwind v4 project
- [x] Build `/preview` theme page
- [x] Write project docs (`/docs`)

## Phase 1: Foundation ✅ (code complete, untested)
- [x] Fonts: Clash Display + General Sans via Fontshare (see decision #10)
- [x] Design tokens in `globals.css` (`@theme inline`), focus ring, Lenis CSS
- [x] Install Motion, Lenis, clsx, tailwind-merge (no shadcn, see decision #11)
- [x] `lib/`: types, utils, whatsapp, seo, quote-schema
- [x] `content/`: site, services, projects, company (stats, team, machinery, FAQ, testimonials, clients)
- [x] Layout: Header (desktop + mobile menu), Footer, MobileBar, skip link, `(site)` route group
- [x] Shared: Container, SectionHeading, Reveal, Button, Media (fallback), Breadcrumbs, JsonLd, SmoothScroll, Lightbox
- [x] ESLint (flat config) + Prettier + `typecheck` script

## Phase 2: Pages ✅ (code complete, untested)
- [x] Home
- [x] Services overview + 4 detail pages (SSG)
- [x] Projects gallery (filters)
- [x] Project detail page (facts, scope, lightbox gallery, related)
- [x] About (story, values, team, machinery, clients)
- [x] Contact (channels, map, quote form)
- [x] 404 page

## Phase 3: Leads, SEO and Performance ✅ (code complete, untested)
- [x] QuoteForm (RHF + Zod) + Server Action + Resend + honeypot
- [x] WhatsApp prefilled links (global, per service, per sub-service, after form submit)
- [x] Metadata per page + generated OG image + SVG favicon
- [x] `sitemap.ts`, `robots.ts` (indexing allowed, `/preview` disallowed)
- [x] JSON-LD: GeneralContractor, Service, BreadcrumbList, FAQPage
- [x] Image optimisation (AVIF/WebP) + branded placeholder fallback
- [x] GA4 (enabled when `NEXT_PUBLIC_GA_ID` is set)

## Fixes log
- [x] **2026-10-30: Image 404s.** Content pointed to `/images/...jpg` files that didn't exist yet, so the image optimiser logged 404 / "isn't a valid image" errors. All image URLs now come from `content/images.ts`, which uses temporary Unsplash stock photos (the same ones as `/preview`). Swap in real photos there later.
- [x] **2026-10-30: Images still blank + design drifted from preview + light theme missing.**
  - Images: `next/image` was downloading the remote photos on the server, which failed on this network. Remote URLs now use `unoptimized` and load in the browser like `/preview`; local photos are still optimised.
  - Themes: added a site-wide **Gold & Steel / Stone Light** switch (header icon + mobile-menu toggle), saved in `localStorage`, applied before paint (`lib/theme.ts`).
  - Design: Hero, Stats, Marquee, Services, Process, Why Us, CTA, header/footer brand and buttons restyled to match the approved `/preview`.
- [x] **2026-10-30: Missing content + invisible sections.**
  - Added real contact details (WhatsApp +91 88743 63616, office +91 98393 73331, Instagram, email, Husariya address).
  - Home now includes Machinery, Team, all FAQs and a Contact section; Team and Machinery are shared components, also used on About.
  - Rewrote `Reveal` to be fail-safe so content can't stay at `opacity: 0`.

## Phase 4: Testing ← NEXT
- [~] Dev server runs; home page renders (`npm run dev`)
- [ ] `npm run typecheck`, `npm run lint`, `npm run build`
- [ ] Manual check of every page (desktop + mobile)
- [ ] Quote form end to end (with Resend keys in `.env.local`)
- [ ] Lighthouse / accessibility audit pass

## Phase 5: Content and Launch
- [ ] Replace stock photos with real site photos (`content/images.ts`, see `public/images/README.md`)
- [ ] Verify phone, WhatsApp, email, address, stats, testimonials (`TODO(client)` in `content/`)
- [ ] Deploy to Vercel + custom domain + env vars
- [ ] Google Search Console + Business Profile link
- [ ] Remove `/preview` route
- [ ] (Optional) Sanity CMS for projects/testimonials
- [ ] (Later) Logo redesign: SVG, flat version, favicon
