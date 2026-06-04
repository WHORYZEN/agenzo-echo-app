Create a 3D Animation & Branding service detail page mirroring the SMM / Website Development / SEO pages, then wire the Services index card to route to it.

**New files:**
- `src/routes/services.3d-animation-branding.tsx` — Route config with SEO meta (title "3D Animation & Branding — DIGIFRENZY.", description, OG tags).
- `src/routes/services.3d-animation-branding.lazy.tsx` — Full page component using the same layout/sections/animations as the other service pages, content swapped for 3D Animation & Branding:
  - Hero eyebrow: "— Service / Branding"
  - Hero headline: "3D Animation & Branding" with SplitText accent
  - Overview split with `3d-branding.jpeg` image and copy about immersive 3D visuals + cohesive identity systems
  - 2×2 glass feature cards: 3D Product Rendering, Motion Graphics, Brand Identity Systems, Visual Storytelling
  - 4-step process (Discover → Concept → Produce → Deliver)
  - Tools/Technologies chip section (Blender, Cinema 4D, Octane, Redshift, After Effects, Figma, Illustrator, Photoshop)
  - 3 stat cards (e.g., "120+ Brands Crafted", "4K Render Quality", "30+ Award-Worthy Films")
  - CTA band + lazy-loaded FAQ/Contact/SiteFooter
  - Uses motion helpers (`fadeUp`, `staggerParent`, `viewportOnce`, `hoverLift`, `easeOut`) and tokens (`glass`, `container-x`, `tighter`, `text-brand`)

**Updated files:**
- `src/routes/services.index.lazy.tsx` — Change the 3D Animation & Branding entry's `href` from `/#contact` to `/services/3d-animation-branding`. The existing `motion.div onClick` + `PillButton href={s.href}` pattern already handles both whole-card and button navigation.

**Notes:**
- TanStack file-based routing auto-registers the new route; `routeTree.gen.ts` regenerates on dev reload.
- No new assets or packages needed (`3d-branding.jpeg` already exists).
