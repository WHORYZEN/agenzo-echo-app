## Plan

Update the billing period label on the Starter plan pricing card from "Monthly" to "Monthly + GST" on both the pricing page and the home page pricing section. Also fix the spacing on Growth and Premium plans from "Monthly +GST" to "Monthly + GST" on the pricing page.

### Files to edit
- `src/routes/pricing.lazy.tsx` — change all `days` fields from "Monthly +GST" to "Monthly + GST"
- `src/components/site/HomeBelowFold.tsx` — change Starter plan `days` from "Monthly" to "Monthly + GST"