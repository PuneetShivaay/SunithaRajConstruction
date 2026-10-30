# 06: Decision Log

| # | Date | Decision | Reason |
|---|---|---|---|
| 1 | 2026-10-30 | Use Next.js 15 (App Router) + TypeScript | SEO, SSG, modern DX |
| 2 | 2026-10-30 | Use Tailwind CSS v4 | Fast styling with design tokens |
| 3 | 2026-10-30 | Dark "Gold & Steel" theme | Matches the metallic gold/steel logo; premium feel |
| 4 | 2026-10-30 | Clash Display for headings, Inter for body | Modern, bold, architectural |
| 5 | 2026-10-30 | Multi-page site | Better local SEO and clearer service pages |
| 6 | 2026-10-30 | Build a preview page before the full build | Validate the look early |
| 7 | 2026-10-30 | Remove the copy-protection / devtools-blocking script | Hurts UX and accessibility; doesn't stop copying |
| 8 | 2026-10-30 | Defer logo redesign | Not blocking; do it after the site build |
| 9 | 2026-10-30 | Content in typed TS files first; CMS optional later | Simple to start; can migrate to Sanity |
| 10 | 2026-10-30 | Load Clash Display + General Sans from Fontshare CDN (supersedes Inter in #4) | Same family as the approved preview; no local font files needed |
| 11 | 2026-10-30 | Skip shadcn/ui; use native `<details>`, `<dialog>` and small custom components | Fewer dependencies; the needs are simple |
| 12 | 2026-10-30 | `(site)` route group for the main layout; `/preview` stays outside | Preview keeps its own theme toggle without the site header/footer |
| 13 | 2026-10-30 | `Media` component with a branded placeholder fallback | The site works before real photos arrive |
| 14 | 2026-10-30 | Quote form: Server Action + Resend; logs the enquiry if keys are missing, then offers WhatsApp handoff | Works in dev without keys; WhatsApp is the main channel |
| 15 | 2026-10-30 | Central image map `content/images.ts` with temporary Unsplash stock photos | Removes 404s for missing local files; one place to swap in real photos |
| 16 | 2026-10-30 | Ship **both** themes (Dark "Gold & Steel" default + "Stone Light") with a user toggle (supersedes the single-theme part of #3) | Client wants both modes from the preview |
| 17 | 2026-10-30 | `/preview` is the visual reference; real pages must match it | Approved design; avoids drift |
| 18 | 2026-10-30 | Remote images use `unoptimized`; only local `/public` images are optimised | The server-side image fetch failed on this network |
| 19 | 2026-10-30 | Real contact details from the live site (WhatsApp, office phone, Instagram, email, Husariya address) | They were placeholders before |
| 20 | 2026-10-30 | Home page also shows Machinery, Team, all FAQs and a Contact section (as on the old site) | Keep all of the old site's content on the home page |
| 21 | 2026-10-30 | `Reveal` is fail-safe: content is visible by default and only hidden when below the fold with JS running, plus a 4s safety timeout | Sections were staying invisible on the home page |
| 22 | 2026-10-30 | Team section lives only on the About page (removed from Home; supersedes the Team part of #20) | Team is company-profile content, not a home-page conversion section |

<!-- Add new decisions below. If one replaces an earlier decision, note "Supersedes #N". -->
