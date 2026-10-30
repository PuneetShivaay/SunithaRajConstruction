# 03: Architecture

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) + React 19 + TypeScript (strict) |
| Styling | Tailwind CSS v4 (tokens in `app/globals.css` via `@theme`) |
| UI primitives | shadcn/ui (Radix): Dialog, Tabs, Accordion, Sheet |
| Animation | Motion + Lenis |
| Forms | React Hook Form + Zod |
| Email | Resend (via Server Action) |
| Content | Typed TS/JSON data in `content/` (Phase 1); Sanity CMS optional (Phase 4) |
| Images | `next/image` (AVIF/WebP, blur placeholders) |
| SEO | Metadata API, `app/sitemap.ts`, `app/robots.ts`, JSON-LD |
| Analytics | GA4 or Vercel Analytics |
| Hosting | Vercel (Netlify is an alternative) |
| Quality | ESLint, Prettier, TypeScript `noEmit` check |

## Folder structure (target)

```
app/
  layout.tsx              # fonts, Header, Footer, providers, base metadata
  page.tsx                # Home
  globals.css             # Tailwind + design tokens
  services/
    page.tsx              # Services overview
    [slug]/page.tsx       # Service detail (SSG via generateStaticParams)
  projects/
    page.tsx              # Projects gallery + filters
    [slug]/page.tsx       # Project case study
  about/page.tsx          # Story, team, machinery, clients
  contact/page.tsx        # Form, map, WhatsApp
  preview/page.tsx        # Theme preview (temporary)
  sitemap.ts
  robots.ts
  not-found.tsx
  actions/
    send-quote.ts         # Server Action → Resend + validation
components/
  ui/                     # shadcn primitives (button, dialog, ...)
  layout/                 # Header, Footer, MobileBar, Container
  sections/               # Hero, Stats, ServicesGrid, ProcessTimeline, CTA, FAQ ...
  shared/                 # Eyebrow, SectionHeading, Reveal, SkylineMark, Lightbox
content/
  site.ts                 # Company info, phone, WhatsApp, address, socials
  services.ts             # Service[]
  projects.ts             # Project[]
  team.ts, machinery.ts, faq.ts, testimonials.ts, clients.ts
lib/
  types.ts                # Content types
  utils.ts                # cn(), formatters
  whatsapp.ts             # buildWhatsAppLink(message)
  seo.ts                  # JSON-LD builders
public/
  images/{hero,services,projects,team,clients}/
  fonts/ClashDisplay-*.woff2
docs/
```

## Rendering strategy
- All marketing pages are **static (SSG)**.
- Dynamic routes use `generateStaticParams` from `content/`.
- **Server Components by default.** Use `"use client"` only for interactive parts (filters, lightbox, form, motion wrappers, mobile menu).
- With a CMS later, switch to ISR (`revalidate`) or on-demand revalidation.

## Content model (`lib/types.ts`)

```ts
type Service = {
  slug: string; title: string; summary: string; description: string;
  image: string; subServices: { name: string; description?: string }[];
  faqs?: { q: string; a: string }[];
};

type Project = {
  slug: string; title: string; category: 'building' | 'roads-civil' | 'waterproofing' | 'interiors' | 'electrical';
  service: Service['slug']; location: string; year?: number; client?: string;
  cover: string; gallery: string[]; summary: string; scope?: string[];
  featured?: boolean;
};

type TeamMember = { name: string; role: string; photo?: string; featured?: boolean };
type Machine = { name: string; detail: string; count?: number };
type Testimonial = { name: string; role?: string; quote: string };
```

## Lead flow
1. User fills in the QuoteForm (name, phone, service, location, message), which is validated by Zod on client and server.
2. The Server Action sends an email via Resend to the company inbox.
3. On success, a "Continue on WhatsApp" link opens with a prefilled message.
4. A plain WhatsApp/Call button is always available (sticky bar on mobile).

## Conventions
- Components: `PascalCase.tsx`; one component per file.
- Use the `@/` path alias for imports.
- No hard-coded copy in components. It comes from `content/`.
- Use Tailwind classes with `cn()` for conditionals; no inline styles except CSS variables.
- Images: always set `width`/`height` or `fill` + `sizes`.
- Commits: Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`).

## Environment variables
```
RESEND_API_KEY=
QUOTE_TO_EMAIL=
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_GA_ID=
```
