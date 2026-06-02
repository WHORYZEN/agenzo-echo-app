Fix: Apply blue background + white text to the correct "90+" component

## Issue
The previous edit mistakenly applied the blue background to the FactSection (the large image + 90+ layout). The user wants the change on the StatsTrio card — the middle "Projects Delivered / 90+" tile that sits directly above the "Our Relationships" section.

## Changes

1. Revert the FactSection edit (restore the right-side text area to its original transparent/glass styling without blue background).

2. Add an optional `highlighted?: boolean` prop to the `BigStat` component.
   - When `highlighted=true`: blue background, all text white.
   - When `highlighted=false` (default): keep existing glass styling.

3. Pass `highlighted` to only the middle `BigStat` call in `StatsTrio`:
   ```
   <BigStat label="Projects Delivered" value="90+" hint="..." highlighted />
   ```

## Result
Only the middle stat card in the three-column StatsTrio row becomes blue with white text and number. The other two cards (10+, 50+) remain unchanged.