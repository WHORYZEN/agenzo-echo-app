# Hero section vertical padding adjustment

**File:** `src/routes/index.tsx` (line 77)

Change the Hero `<section>` classes:

- `pt-28` (112px) → `pt-40` (160px) — gives ≥150px above the H1 from the section's top edge
- `pb-10` (40px) → `pb-4` (16px) — tightens the gap below the CTA buttons, shortening the section from the bottom

Resulting line:
```tsx
<section className="relative min-h-screen pt-40 pb-4 px-6 md:px-10 overflow-hidden">
```

No other files change.
