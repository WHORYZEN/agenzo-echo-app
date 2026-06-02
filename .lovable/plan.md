## Goal

Make the frosted/blur glass effect on the header (and other `.glass` surfaces) render reliably in the published build, not just in the dev preview.

## Root cause

`src/styles.css` defines `.glass` and `.glass-dark` with both the standard `backdrop-filter` and a hand-written `-webkit-backdrop-filter` immediately after it, with identical values:

```css
.glass {
  background: rgba(255,255,255,0.55);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);  /* ← the problem */
  border: 1px solid rgba(255,255,255,0.4);
}
```

In production, Lightning CSS dedupes the two same-value declarations and keeps the last one in source order (the `-webkit-` form), dropping the standard `backdrop-filter`. Chrome does not honor `-webkit-backdrop-filter` (Safari-only prefix), so the glass effect silently disappears for Chrome users on the published site — which matches "doesn't work seamlessly in the header." Dev preview is fine because Lightning CSS optimization doesn't run the same way.

## Fix

Remove the hand-written `-webkit-backdrop-filter` lines. The build pipeline auto-prefixes for Safari, so the standard property alone is correct and safe.

### Edit `src/styles.css`

```css
.glass {
  background: rgba(255,255,255,0.55);
  backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255,255,255,0.4);
}

.glass-dark {
  background: rgba(10,10,10,0.7);
  backdrop-filter: blur(20px);
}
```

No changes to `Nav.tsx` — all the `glass` / `backdrop-blur-md` usages there are already correct.

## Verification

- View the header in the preview (default scroll and scrolled state) — pill should show a translucent frosted blur over hero content.
- Confirm in the published URL after deploy that the header glass renders in Chrome (this is the case Lightning CSS broke).
