## Goal

Keep the Agenzo template's visual system (colors, fonts, glass pill nav with scroll-merge logo, marquees, hero slider, transitions) and swap all copy, brand, and data to **DigiFrenzy®** — pulled from the *Framer Clone Craft* project.

## Brand & global

- Rename brand everywhere: `Agenzo®` → `DigiFrenzy®`.
- Update root SEO (`src/routes/__root.tsx`): title "DigiFrenzy® — Digital Agency", meta description from the tagline.
- Footer email: `support@digifrenzy.com`; socials: Instagram, LinkedIn; © 2025 DigiFrenzy.
- Nav items: Studio → **Home**, Project → **Work**, Service → **Services** (link `/services`), Blog → **Pricing** (link `/pricing`). CTA pill "Meet" → "Get in touch".

## Section-by-section data mapping (home `/`)

| Current section | New content |
|---|---|
| Hero | Wordmark `DigiFrenzy®` · eyebrow "DIGITAL AGENCY" · tagline: "We craft bold brands, high-performance websites, and data-driven marketing strategies that move the needle." · buttons "View Our Work" / "Contact Us" |
| WhyChooseUs | Heading "Transforming Brands Digitally." · body from DigiFrenzy intro card · stat tiles: **299+ Clients Served**, **10+ Years** |
| PartnerMarquee | Replace LOGOS arrays with DigiFrenzy client/brand words (MYAI500, MYNX, JOURI LAW, MYCA500, ACT CLINIC, etc.) |
| FactSection | "90+ Projects Delivered" · subline "For clients across industries globally." |
| SelectedWork | 4 projects: MYAI500 (2025 · Portfolio, AI Voice Assistant), MYNX Softwares Inc (2024 · IT Services, Software Dev), Jouri Law (2024 · Law Firm, Accident Cases), MYCA500 (2024 · AI Voice, SaaS). Reuse generated project images. |
| TeamSection | Reframe as **"Meet the Minds Behind the Work."** with 3 role cards: Strategy Lead, Design Lead, Growth Lead (placeholder names kept generic since source has no team data) |
| Testimonials | Featured quote = Aarav Sharma. Small cards = Priya Iyer, Rohan Mehta, Ananya Reddy (full text + roles) |
| StatsTrio | 10+ Years in the Industry · 90+ Projects Delivered · 50+ Client Satisfaction (descriptions from source) |
| PartnersGrid | Keep visual; re-label as "Trusted by brands worldwide" |
| ShowReel | Heading "Every Pixel Crafted." · sub from Photography section copy |
| Achievements | Repurpose as **Why Choose DigiFrenzy**: "30 minutes to launch", "All in one platform", "24/6 support", "From 0 to 100" |
| ProcessSection | 3 steps: 01 Strategy & Planning (FREE badge), 02 Design & Development, 03 Launch & Growth — full descriptions from ApproachSection |
| Pricing | 3 plans verbatim: Starter ₹29,999, Growth ₹49,999/month + GST, Premium ₹89,999/month + GST — full feature lists, badges |
| FooterCTA | "Ready to Elevate?" CTA + footer with DigiFrenzy email/socials |

## New sections to add on home

- **FAQ section** (8 Q&As from source) before FooterCTA.
- **Contact form section** (id `contact`) with the same fields (name, email, mobile, businessName, businessType, services), zod validation, Web3Forms submit (key `361d4c5a-21f6-46c9-91d0-d6045017fef5`), styled in Agenzo's glass card look. Requires installing `zod` and `sonner` if not present, plus mounting `<Toaster />` in `__root.tsx`.

## New routes

- `src/routes/services.tsx` — page listing the 4 services with their descriptions, feature bullets, images. Reuses Nav + FooterCTA + FAQ + Contact.
- `src/routes/pricing.tsx` — page with the same 3 plans + FAQ + Contact.

(Individual `/services/<slug>` detail pages from the source are out of scope unless requested — main /services page covers them in expanded blocks.)

## Style preservation

- No changes to `src/styles.css` tokens, fonts, glass utilities, marquee/slider keyframes, or the `Nav` scroll-merge bubble logic.
- All images stay as existing generated assets in `src/assets/` (no new image generation in this pass).

## Out of scope

- Backend/DB.
- New imagery / re-shooting hero photos.
- Individual service detail subpages (`/services/social-media-marketing`, etc.).
- Animating numbers / extra effects beyond what's already in the template.

Ready to implement on approval.