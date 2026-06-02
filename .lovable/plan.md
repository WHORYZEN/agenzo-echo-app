## Color system

Source of truth = Framer Clone Craft accent: `hsl(228 100% 66%)` (~#5271FF).

Update `src/styles.css` `:root` tokens (keep `oklch`, mapped from that HSL):

- `--brand-blue: oklch(0.66 0.21 265)` — full strength, used for emphasized heading words, link hovers, focus rings.
- `--background: oklch(0.975 0.018 250)` — very light tint of brand blue (replaces current beige).
- `--paper: oklch(0.985 0.012 250)` — slightly lighter card surface.
- `--muted: oklch(0.94 0.022 250)`, `--accent: oklch(0.92 0.03 250)`, `--border: oklch(0.88 0.025 250)` — re-tinted to sit on the new background.
- `--foreground`, `--primary`, `--primary-foreground` unchanged (buttons stay black-on-white as today, matching the Framer template's neutral `.btn-primary`).

Glass + hover tint:
- `.glass` background stays white-translucent (unchanged) so the blur is preserved.
- Nav pill item hover: replace `hover:bg-white/70` with a new utility `.hover-tint-blue` → `background: color-mix(in oklab, var(--brand-blue) 10%, transparent)`. Low enough opacity to keep the glass effect visible.

## Logo

- Copy `src/assets/logo_digifrenzy_white.png` from Framer Clone Craft into this project's `src/assets/`.
- Replace the text-based `DigiFrenzy®` wordmark inside `src/components/site/Nav.tsx` with `<img src={logo} alt="DigiFrenzy" />`. Apply `filter: invert(1)` (or the dark sibling if present) so the white-on-dark source renders correctly on the new light-blue background. Keep the existing `layoutId="digifrenzy-logo"` so the scroll merge animation still works.
- Footer logo (`SiteFooter`) keeps the same image, no invert (footer is dark).

## Heading emphasis (blue accent)

Rule: in each major H1/H2 on the site, the **key/last word** is wrapped in `<span class="text-brand">` (new utility mapped to `--brand-blue`). Paragraph copy is untouched. Concretely:

- Hero: `DigiFrenzy` → `Digi` foreground + `Frenzy` brand-blue. SplitText per-letter stays; the `Frenzy` letters get the brand color.
- `SelectedWork` H2: "Selected **Work**."
- `Testimonials` H2: "Trusted By **Many**."
- `Pricing` H2: "**Pricing**."
- `services.tsx` H1: "Our **Services**"
- `pricing.tsx` H1: "Our **Pricing**"
- `WhyChooseUs`, `Achievements`, `FAQ`, `Contact`, `ShowReel` overlay get the same treatment on their final word.

(Section eyebrows, body paragraphs, and small section headers stay neutral.)

## Remove ® trademark

Strip every `<sup>®</sup>` (and the literal ® character) from:

- `Nav.tsx` (logo + any menu copy)
- Hero wordmark and SplitText `suffix` prop usages in `index.tsx`, `services.tsx`, `pricing.tsx`
- `SiteFooter`, `Contact`, `FAQ`, page metadata titles (`"— DigiFrenzy® Digital Agency"` → `"— DigiFrenzy Digital Agency"`)

## Remove (NN) annotations

Drop the parenthesised numeric counters everywhere on the home page:

- Nav menu: remove the `(04)` next to "Work" in `Nav.tsx` (delete the `n` field on menu items + the `<sup>` render).
- Home sections (`SelectedWork`, `WhyChooseUs`, `StatsTrio`, `Achievements`, `Testimonials`, `Pricing`, `Process` if present): remove the `(01)…(NN)` labels next to section titles / cards.
- Keep numeric counters that are part of stats (e.g. "120+", "98%") — those are not annotations.

## Files touched

- `src/styles.css` — new tokens, `.text-brand`, `.hover-tint-blue`, retire beige values.
- `src/components/site/Nav.tsx` — logo image, blue hover tint, drop `(04)` and ®.
- `src/components/site/SiteFooter.tsx` — drop ®.
- `src/components/site/SplitText.tsx` — accept a `coloredFrom`/`brandWord` prop OR just inline a colored span around the relevant letters (whichever is cleaner; SplitText already supports a `suffix`, we'll add `accentFrom`).
- `src/routes/index.tsx` — Hero `Frenzy` accent, H2 accents, drop all `(NN)` annotations + ®.
- `src/routes/services.tsx` — H1 accent, remove ® suffix, remove the `(01)…(04)` chips above each service row.
- `src/routes/pricing.tsx` — H1 accent, remove ® suffix.
- `src/components/site/Contact.tsx`, `FAQ.tsx` — heading accent, drop ®/annotations if present.
- `src/assets/logo_digifrenzy_white.png` — copied from Framer Clone Craft.

## Out of scope

- Button styling, motion timings, layout/spacing, copy, route structure — all unchanged.
- No dark mode work.
