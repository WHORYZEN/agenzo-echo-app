In the `PartnersGrid` ("Our Relationships") section, the company name tiles currently lift up on hover via `whileHover={hoverLiftSm}`, which only applies a `y: -4` translation. The user sees a grey shadow/undertone underneath on hover and wants it changed to the brand blue color.

Change: Replace `whileHover={hoverLiftSm}` on each tile with a custom Framer Motion hover animation that preserves the `y: -4` lift and adds a blue `boxShadow` using the brand blue color (`oklch(0.66 0.21 265 / 0.55)`).

File: `src/components/site/HomeBelowFold.tsx` (lines 529-537 in the `PartnersGrid` component).