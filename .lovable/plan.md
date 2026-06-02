## Changes

1. **`src/routes/__root.tsx`** — strip the two remaining ® marks from the default meta `title` and `og:title` (`"DigiFrenzy® — Digital Agency"` → `"DigiFrenzy — Digital Agency"`).

2. **`src/components/site/SiteFooter.tsx`** — the footer currently has no image logo, just a text "© DigiFrenzy" line. Add the Framer Clone Craft logo:
   - Import `logo from "@/assets/logo_digifrenzy_white.png"`.
   - Replace the plain text in the bottom copyright row with `<img src={logo} alt="DigiFrenzy" className="h-6 w-auto" />` followed by `© {year}. All rights reserved.`
   - Footer background is the light page background, so the white-on-transparent PNG needs `style={{ filter: "invert(1)" }}` (same treatment as Nav) so it shows as dark.

3. **`src/components/site/Nav.tsx`** — already uses this same asset; no change needed beyond confirming it's the only logo source.

4. Confirm no other `®` characters or alternate wordmark variants remain anywhere in `src/`.

## Out of scope
- The giant "Let's talk" footer headline stays (it's a CTA, not a logo).
- No color, layout, or motion changes.
