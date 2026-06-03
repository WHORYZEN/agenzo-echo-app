## Website Development service page

Mirror the Social Media Marketing page structure for a new `/services/website-development` route, and wire the Services page card + "Get started" button to it.

### New files

- `src/routes/services.website-development.tsx` — route config + SEO head (title, description, og tags tailored to Website Development).
- `src/routes/services.website-development.lazy.tsx` — page component, identical layout/sections/animations to the Social Media Marketing page, content swapped for web dev.

### Page wireframe (same as SMM page)

- **Nav** (shared)
- **Hero**: eyebrow "— Service / Development", `SplitText` headline "Website Development" with brand accent on "Development", subhead, two PillButtons ("Get a quote" → `/#contact`, "View pricing" → `/pricing`).
- **Overview split**: copy about pixel-perfect, high-performance sites; reuse `forma-studio.jpeg` (already imported in services index for this service) as the hero image.
- **What's included** (4 glass cards, 2x2):
  - Custom Web Applications (Code2 icon)
  - SaaS Software Solutions (Layers icon)
  - Responsive Design (Smartphone icon)
  - CMS Integration (Database icon)
- **Process** (4 steps): Discover → Design → Build → Launch & Iterate.
- **Tech stack chips** (replaces "Platforms"): React, Next.js, TanStack, TypeScript, Tailwind, Node.js, Supabase, Shopify, Webflow, Headless CMS.
- **Stats strip** (3 cards): e.g. "100/100" Lighthouse, "2x" conversion lift, "50+" sites shipped.
- **CTA band**: "Ready to launch something exceptional?" + PillButton → `/#contact`.
- **FAQ + Contact + SiteFooter** (lazy, same as SMM page).

All sections use the existing `fadeUp`, `staggerParent`, `viewportOnce`, `hoverLift`, `easeOut` motion helpers and `glass`, `container-x`, `tighter`, `text-brand` tokens — zero new design tokens or assets.

### Services index wiring

In `src/routes/services.index.lazy.tsx`, change the Website Development entry's `href` from `/#contact` to `/services/website-development`. The existing `motion.div onClick` + `PillButton href={s.href}` pattern already handles whole-card + button navigation, so no other changes needed.

### Notes

- TanStack file-based routing picks up the new `services.website-development.*` files automatically; `routeTree.gen.ts` regenerates on dev server reload.
- SEO & Performance and 3D Animation & Branding remain pointing at `/#contact` for now (next iterations).
