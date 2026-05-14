# Ra Beung Lay Seafood — Website Build Brief

> Master brief for building a website for **Ra Beung Lay Seafood Restaurant** (ร้านอาหารระเบียงเล ซีฟู้ด), a beachfront Thai seafood restaurant in Krabi. This file is the entry point — everything else lives in `/data`, `/content`, `/design`, and `/images`.

---

## TL;DR for the AI agent

You are building a marketing website for **Ra Beung Lay Seafood** (literally "Sea Veranda Seafood"), a single-location open-air Thai seafood restaurant on Aqua Beach near Ao Nang, Krabi. They have **3,087 Google reviews at 4.8★** — the highest review count of any lead in our pipeline — but only a Facebook page. Their customers are predominantly international tourists who research restaurants on Google before visiting Krabi, and right now those searches don't surface Ra Beung Lay's own digital storefront.

The site you build will be presented as a **gift demo** to win them as a paying client. **70% complete and atmospheric beats 100% complete and generic.**

**Goal:** A site that makes a tourist Googling "best seafood Ao Nang" stop scrolling and book a tuk-tuk.

---

## Critical context — this is NOT A KEEN HOUSE

If you've also seen the A KEEN HOUSE brief, set aside its design instincts. That was premium urban minimalism. This is the opposite:

- **Brand:** Family-run beach seafood restaurant, not a designed brand
- **Aesthetic:** Sun-bleached, rustic, generous, alive — bamboo, terracotta, ocean blue, sand
- **Voice:** Warm, direct, bilingual (Thai-first feel even in English), unpretentious
- **Audience:** International tourists planning trips + Thai families on holiday
- **Site personality:** It should feel like a place you'd want to spend three hours over a long lunch

If the A KEEN HOUSE site whispers, this site **invites you in**.

---

## Site goals (in priority order)

1. **Convert Google searches into reservations.** Tourists search "best seafood Krabi" or "Ao Nang restaurants on the beach" — this site needs to win them.
2. **Show the location is the experience.** The beachfront setting *is* the brand. Hero imagery should sell the sunset view, not the menu.
3. **Make the menu legible to non-Thai readers.** Bilingual menu. Photos for every signature dish. Pricing in THB with USD/EUR equivalents on hover or alongside.
4. **One-tap directions and call.** Tourists need this. Test it on mobile first.
5. **Capture pre-arrival traffic.** SEO for "Ao Nang seafood", "Krabi beach restaurant", "Ra Beung Lay" (English + Thai).
6. **Funnel to social proof.** 3,087 ★ reviews is their best marketing asset — don't bury it.

---

## Recommended sitemap

```
/                       — Home (atmosphere hero, signature dishes, the view, reservation CTA)
/menu                   — Bilingual full menu with photos, organized by category
/the-beach              — Photo-led storytelling page about the location/setting
/visit                  — Address, map, hours, directions, parking, phone, FAQ
```

Four pages. Don't over-build — single-location restaurants don't need more.

---

## Recommended tech stack

**Recommended:** Astro + Tailwind CSS — content-heavy, image-heavy, no need for heavy JS, easier handoff to non-dev later.

**Alternative:** Next.js + Tailwind if you'd rather, but Astro is the better fit for this content profile.

Add:
- A reservation widget (DM via Facebook for now — the demo can use a simple "Reserve via FB" button. Phase 2 can add a proper booking system.)
- Bilingual support: TH/EN toggle with `next-intl` or Astro i18n.
- Image-heavy = lazy load everything below the fold.

---

## File map

```
Ra_Beung_Lay_brief/
├── BRIEF.md                      ← you are here
├── data/
│   ├── brand.json                ← brand identity, social, contacts
│   ├── location.json             ← address, hours, phone, lat/lng pattern, parking
│   └── menu.json                 ← full menu structured by category, bilingual fields
├── content/
│   ├── about.md                  ← brand story (English) — keep warm and direct
│   ├── about-th.md               ← brand story in Thai (placeholder — verify with owner)
│   ├── menu.md                   ← human-readable menu in markdown
│   ├── location.md               ← location detail with travel info for tourists
│   └── reviews.md                ← sentiment + sample testimonials
├── design/
│   ├── design-system.md          ← colors, type, motifs — coastal/Thai aesthetic
│   └── image-references.md       ← URLs to source photos from
└── images/                       ← drop downloaded photos here
```

---

## Build order (suggested)

1. **Read `data/brand.json` first.** Single source of truth.
2. **Read `design/design-system.md`** — palette is terracotta + ocean + sand, not dark wood.
3. Build the **homepage** with a wide-format atmosphere hero (the beach setting is the hero, not food). Get the photography right before doing anything else.
4. Build the **menu** with bilingual labels and prices.
5. Build the **visit/location** page with map, directions, and a clear call to action.
6. Add the **/the-beach** atmosphere page last — it's the least functional but the most differentiated.
7. Polish, mobile QA, deploy.

---

## What to source at build time

- **Hero photography:** Beach + restaurant ambient shots from Google Image Search and TripAdvisor. See `design/image-references.md`.
- **Logo:** The terracotta orange circle with "ระเบียงเล / Ra-Beung-Lay Seafood" wordmark. Available on their Facebook profile picture and Google business listing.
- **Map embed:** `<iframe>` from Google Maps. No API key needed.
- **Reservation:** For demo, link to their Facebook page DM. Production can integrate Hungry Hub / Eatigo / direct form.

---

## What NOT to build (yet)

- Online ordering — they're a sit-down beachfront experience, not a delivery business. Don't dilute the brand.
- Loyalty program — tourists rarely come twice. Pointless.
- Blog — premature.
- Long history/founder story unless verified — fabrication risk is real.
- Wine/cocktail menu unless you can verify it from a primary source.

---

## Tone of voice

**Warm. Direct. Generous. Coastal.** Not premium. Not minimalist. Not corporate.

| Element             | Avoid                                      | Prefer                                                     |
|---------------------|--------------------------------------------|------------------------------------------------------------|
| Hero copy           | "Fine dining experience by the sea"        | "Seafood by the sea. Family-run since [year]."             |
| Menu intros         | "Curated tasting selections"               | "What's been on the menu for years, and what's new today." |
| Reservation CTA     | "Reserve your culinary journey"            | "Hold a table tonight"                                     |
| About               | Long brand mission statement               | Short paragraph. "We're a family-run restaurant on Aqua Beach. Come hungry." |

When in doubt, write like you're talking to a friend who's just landed in Krabi and asked where to eat tonight.

---

## The pitch context (why this matters)

The user is a Bangkok web agency targeting Ra Beung Lay as a high-value lead — 3,087 reviews represents enormous unrealized SEO potential currently captured by TripAdvisor and Wongnai instead of by Ra Beung Lay's own domain. The pitch is: *"You're the most-reviewed seafood restaurant in this area but the second-best option for someone Googling for it. A website fixes that overnight."*

The demo needs to look like something tourists would screenshot and share — not like a corporate restaurant chain site.

---

## Source freshness

- **Data scraped:** May 2026
- **Sources:** Google knowledge panel, Google Image Search, TripAdvisor, Wongnai, Trip.com, AutoReserve listings
- **Verify before launch:** prices, hours, exact address (sources disagree slightly between "Sai Thai" and "Ao Nang" districts), wine/alcohol availability, and any recent menu changes.
