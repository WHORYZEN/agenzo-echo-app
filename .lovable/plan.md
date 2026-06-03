## Plan: Social Media Marketing service page

Create a dedicated landing page for Social Media Marketing, reusing the homepage's design language (Nav, glass cards, SplitText hero, motion variants from `@/lib/motion`, PillButton, FAQ, Contact, SiteFooter). Wire the Services page card and its "Get started" button to link there.

### New files
- `src/routes/services.social-media-marketing.tsx` — route config + SEO head meta (title, description, og tags).
- `src/routes/services.social-media-marketing.lazy.tsx` — page component.

URL: `/services/social-media-marketing`.

### Page wireframe (top → bottom)

1. **Nav** (shared component)
2. **Hero** — eyebrow "— Service / Marketing", huge `SplitText` headline "Social Media Marketing" with brand-colored accent, supporting paragraph, two PillButtons ("Get a quote" → `/#contact`, "View pricing" → `/pricing`).
3. **Overview split section** — left: heading + descriptive copy about scroll-stopping social strategy; right: hero image (`quantstamp-social.jpeg`) in rounded-3xl glass frame.
4. **What's included** — 2x2 grid of glass feature cards: Content Strategy & Calendar, Paid Ad Campaigns, Community Management, Analytics & Reporting. Each with icon (lucide), title, short description.
5. **Process** — 4-step numbered list (Discover → Strategize → Create → Optimize) using stagger motion, matching homepage process visual style.
6. **Platforms we manage** — pill-style chips: Instagram, TikTok, LinkedIn, X, YouTube, Facebook, Threads, Pinterest.
7. **Metrics strip** — 3 large stat blocks (e.g., "5x avg engagement", "200%+ follower growth", "40+ brands scaled"). Reuses big-number typography from home.
8. **CTA band** — full-width dark glass card with headline "Ready to dominate the feed?" + PillButton to contact.
9. **FAQ** (shared lazy component)
10. **Contact** (shared lazy)
11. **SiteFooter** (shared lazy)

All sections use existing motion variants (`fadeUp`, `staggerParent`, `viewportOnce`, `hoverLift`) and tailwind tokens (`glass`, `container-x`, `text-brand`, `eyebrow`) — no custom colors.

### Services page wiring (`src/routes/services.lazy.tsx`)
- Add `href` field to each `SERVICES` entry (Social Media Marketing → `/services/social-media-marketing`, others left as `/#contact` for now).
- Wrap the card's image+content in a `Link to={s.href}` so the whole card is clickable (cursor-pointer + group hover preserved).
- Change the `PillButton` "Get started" inside the card to use `href={s.href}` so it routes to the service page.

### Future-proofing
The same route file pattern + SERVICES `href` mapping makes it trivial to add `/services/seo-performance`, `/services/website-development`, `/services/3d-animation-branding` later.

### Technical notes
- TanStack Router file-based routing: dots = slashes, so `services.social-media-marketing.tsx` produces `/services/social-media-marketing`.
- Lazy split via `services.social-media-marketing.lazy.tsx` matching the existing pattern.
- Head meta set in the non-lazy route file (title "Social Media Marketing — DIGIFRENZY.", unique description, og:title/description).
- No new assets required (reuse `quantstamp-social.jpeg`).
