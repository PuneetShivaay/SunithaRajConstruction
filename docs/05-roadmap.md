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

## Phase 1: Foundation
- [ ] Add Clash Display (local) + Inter via `next/font`
- [ ] Move design tokens into `globals.css` `@theme`
- [ ] Install shadcn/ui, Motion, Lenis, clsx/tailwind-merge
- [ ] Create `lib/` (types, utils, whatsapp, seo)
- [ ] Create `content/` data files from current site copy
- [ ] Layout: Header (desktop + mobile sheet), Footer, StickyMobileBar
- [ ] Shared: Container, Eyebrow, SectionHeading, Reveal, Button variants
- [ ] ESLint + Prettier setup

## Phase 2: Pages
- [ ] Home
- [ ] Services overview + 4 detail pages
- [ ] Projects gallery (filters + lightbox)
- [ ] Project detail page
- [ ] About
- [ ] Contact
- [ ] 404 page

## Phase 3: Leads, SEO and Performance
- [ ] QuoteForm (RHF + Zod) + Server Action + Resend
- [ ] WhatsApp prefilled links
- [ ] Metadata per page + OG images
- [ ] `sitemap.ts`, `robots.ts` (allow indexing)
- [ ] JSON-LD: LocalBusiness, Service, BreadcrumbList
- [ ] Image optimisation + blur placeholders
- [ ] Analytics
- [ ] Lighthouse / accessibility audit pass

## Phase 4: Launch and Later
- [ ] Deploy to Vercel + custom domain
- [ ] Google Search Console + Business Profile link
- [ ] Remove `/preview` route
- [ ] (Optional) Sanity CMS for projects/testimonials
- [ ] (Later) Logo redesign: SVG, flat version, favicon
