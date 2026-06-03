Create an SEO & Performance service detail page mirroring the existing Social Media Marketing and Website Development pages, then wire the Services index card button to route to it.

**New files:**
- `src/routes/services.seo-performance.tsx` — Route config with SEO meta (title "SEO & Performance — DIGIFRENZY", description, OG tags).
- `src/routes/services.seo-performance.lazy.tsx` — Full page component with identical layout/sections/animations, content swapped for SEO & Performance:
  - Hero eyebrow: "— Service / Optimization"
  - Hero headline: "SEO & Performance" with SplitText accent
  - Overview split with `seo-performance.jpeg` image and copy about data-driven SEO
  - 2×2 glass feature cards: Technical SEO Audits, Keyword Research & Strategy, On-Page Optimization, Core Web Vitals
  - 4-step process (Discover → Audit → Optimize → Report)
  - Tools/Technologies chip section (Google Search Console, GA4, Screaming Frog, Ahrefs, SEMrush, PageSpeed Insights, Lighthouse, Schema Markup)
  - 3 stat cards (e.g., "Top 3 Rankings", "200% Traffic Lift", "40+ Sites Optimized")
  - CTA band + lazy-loaded FAQ/Contact/SiteFooter
  - All motion helpers: `fadeUp`, `staggerParent`, `viewportOnce`, `hoverLift`, `easeOut`
  - All design tokens: `glass`, `container-x`, `tighter`, `text-brand`

**Updated files:**
- `src/routes/services.index.lazy.tsx` — Change SEO & Performance card `href` from `/#contact` to `/services/seo-performance`. No other changes needed; the existing `motion.div onClick` + `PillButton href={s.href}` pattern already handles whole-card and button navigation.

**Notes:**
- TanStack file-based routing will auto-register the new route.
- `routeTree.gen.ts` regenerates on dev server reload.
- No new design tokens, assets, or packages needed.