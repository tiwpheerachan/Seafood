# Design System — Ra Beung Lay Seafood

> Coastal, warm, generous. The opposite of A KEEN HOUSE's premium minimalism. Build the site to feel like sitting on the beach with a beer at golden hour.

---

## Color palette

Derived from the restaurant's own logo (terracotta orange), the beach setting (sand, ocean blue), the bamboo/thatched architecture (warm wood), and the southern Thai food palette.

```
PRIMARY
--terracotta:    #C8542B    Their logo orange — use for accents, CTAs, highlights.
--terracotta-deep: #A33D1F  Hover state for terracotta elements.
--sand:          #F2E9D8    Warm cream background — softer than white.
--sand-light:    #F9F4E9    Lightest neutral, for cards on sand background.
--ink:           #2A2520    Deep warm brown for body text — not black.

SUPPORTING
--ocean:         #2E6B7A    Muted sea blue — for sky/water section accents.
--ocean-deep:    #1F4D5A    For darker treatments, footer.
--bamboo:        #A6824B    Warm woven-bamboo brown.
--leaf:          #5C7341    Muted palm green for accents.

UI / FUNCTIONAL
--line:          #E0D4BD    Subtle dividers and card outlines.
--shadow-warm:   rgba(82, 50, 25, 0.10)
--success:       #6B8E47    Muted green confirmation.
--error:         #B14A2C    Earthy red — fits palette.
```

**Background hierarchy:** `--sand` is the default page background. White feels too sterile for this brand. The footer should be `--ocean-deep` for contrast and visual weight.

## Typography

A serif/sans pairing that feels handmade and coastal — not industrial.

```
HEADLINES & DISPLAY
"Cormorant Garamond", serif      (Google Fonts, free)
or "DM Serif Display", serif     (alternative, more dramatic)
Weight: 400-600
Letter-spacing: 0 to -0.005em on large sizes
Italic variants used liberally — feels more humanist

BODY & UI
"Plus Jakarta Sans", sans-serif  (Google Fonts, free)
or "Manrope" as alternative
Weight: 400 body, 500 strong, 600 nav
```

**Why Cormorant:** It has the warmth and slight irregularity of an old printed menu. Pairs well with the rustic-coastal positioning.

**For Thai content:** Pair with **"IBM Plex Sans Thai"** for body, **"Sarabun"** for fallback. Both free on Google Fonts. For display Thai, use **"Mali"** (handwritten feel) or **"Charm"** (display serif).

## Type scale

```
Display 1:  72-88px    line-height: 1.0     letter-spacing: -0.01em
Display 2:  56-64px    line-height: 1.05
H1:         40-48px    line-height: 1.15
H2:         32-36px    line-height: 1.2
H3:         24px       line-height: 1.3
Body lg:    18-19px    line-height: 1.65
Body:       16px       line-height: 1.7
Small:      14px       line-height: 1.6
Caption:    12px       line-height: 1.5     letter-spacing: 0.05em (uppercase)
```

## Spacing & layout

- **Base unit:** 8px
- **Section padding (desktop):** 96px top/bottom
- **Section padding (mobile):** 56px
- **Container max-width:** 1280px (with 32px gutter)
- **Reading column:** 680px max for body copy
- **Generous whitespace** — but not as restrained as A KEEN HOUSE. This brand fills the space with photography.

## Visual motifs

These show up in the location and brand DNA. Pull them into the site:

1. **Wave / curl motifs** — their logo features a stylized wave. Use this as a section divider, footer flourish, and CTA underline. Avoid generic SVG dividers.
2. **Bamboo and rattan textures** — subtle background patterns on dark sections. Don't overuse, but a section with a rattan-texture overlay would feel right.
3. **Hand-drawn / paper feel** — the menu cards could have very subtle paper-texture backgrounds and rounded irregular borders to feel less "designed."
4. **The horizon line** — every photo of the place features a strong horizon. Crop hero images to emphasize it. A horizontal line motif (1px terracotta rule, full width) used as a section divider is on-brand.
5. **Asymmetric photo layouts** — instead of perfect grids, slightly offset image collages feel more alive and human.

## Imagery direction

- **The beach is the brand.** At least 60% of imagery should show the setting — water, karsts, sunset, tables on sand — not just food.
- **Food photography:** wide tabletop shots with multiple dishes (the family-style "feast" look), not single-dish overhead beauty shots. The brand is generosity.
- **People:** customers visible at tables, hands reaching for food, a barefoot waiter — humanity is on-brand. Different from A KEEN HOUSE which avoided people.
- **Color grading:** warm, golden-hour bias on every shot. Pull cool blues toward cyan. Pull whites toward warm cream.
- **Avoid:** stock photo seafood platters, perfectly arranged restaurant photoshoots, generic Thai food beauty shots.

## Logo usage

- **Primary:** Circular terracotta emblem with Thai script "ระเบียงเล" curved on top, English "Ra-Beung-Lay Seafood" curved on bottom, wave motif in center.
- **Use the full circular logo** in nav and footer.
- **Wordmark-only** version (just "ระเบียงเล / Ra-Beung-Lay Seafood") for tight horizontal spaces.
- **Always reproduce in `--terracotta`** on light backgrounds, or `--sand` on dark.
- **Source:** their Facebook profile picture is the cleanest available version. Recreate as SVG via Figma if a vector isn't available.

## Motion & interactivity

- **Slow and warm.** Fade-ins should be 0.7-1.0s with `easeOut` — not snappy.
- **Subtle parallax** on the hero (10-20% movement on the sea/horizon).
- **Hover states:** color shift to `--terracotta`, slight scale (1.02) on cards. No flashy hover effects.
- **Image reveals:** when scrolling past a photo, slight upward translation + fade looks intentional and non-cheesy.

## Microcopy voice

| Element              | Avoid                          | Prefer                                |
|----------------------|--------------------------------|---------------------------------------|
| Reservation CTA      | "Book a table now"             | "Hold a table for sunset →"           |
| Menu CTA             | "Explore our menu"             | "See what's on the table"             |
| Directions CTA       | "Get directions"               | "Find your way down to the beach"     |
| Loading state        | "Loading..."                   | "Setting the table..."                |
| 404 page             | "Page not found"               | "This dish is off the menu. Try the home page →" |
| Newsletter           | "Subscribe"                    | "Quiet emails about new dishes."      |
| Bilingual toggle     | "EN / TH"                      | "EN / ไทย" (use Thai script for Thai) |

## Accessibility checklist

- [ ] Color contrast ≥ 4.5:1 for body text — verify `--ink` on `--sand` (should be fine; verify `--terracotta` on `--sand` for headlines, may need darker variant)
- [ ] All food images have descriptive alt text in both English and Thai for screen readers
- [ ] Map embed has a text fallback (the address)
- [ ] All interactive elements keyboard-navigable
- [ ] Focus states visible — use a 2px outline in `--terracotta-deep`
- [ ] Thai language attribute set on Thai content blocks
- [ ] Reservation CTA reachable from any page in 1 tap on mobile

## Differences from A KEEN HOUSE design system at a glance

| Dimension       | A KEEN HOUSE                    | Ra Beung Lay                       |
|-----------------|---------------------------------|------------------------------------|
| Background      | Cream + dark navy ink           | Warm sand + deep brown ink         |
| Accent          | Warm gold, restrained           | Terracotta orange, generous        |
| Photography     | Single subjects, dark moods     | Wide tabletops, golden hour        |
| Type display    | Fraunces (clean modern serif)   | Cormorant (warmer, slightly older) |
| Voice           | Confident, restrained           | Generous, direct, warm             |
| Whitespace      | Heavy — luxurious               | Moderate — alive                   |
| People in photos | Avoided                        | Welcomed                           |
| Brand promise   | "Brewed to perfection"          | "Seafood by the sea"               |
