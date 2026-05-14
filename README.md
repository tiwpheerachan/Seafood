# Ra Beung Lay Seafood — Website Build Brief

A complete, structured brief for an AI agent (Claude Code, Cursor, etc.) to build a marketing website for **Ra Beung Lay Seafood Restaurant** (ระเบียงเล ซีฟู้ด), a beachfront Thai seafood restaurant in Krabi.

## Quick start

1. Read `BRIEF.md` first — master overview.
2. Read `design/design-system.md` before writing CSS — coastal/warm/generous, NOT premium minimalist.
3. Pull structured data from `data/*.json` — single source of truth.
4. Pull copy from `content/*.md`.
5. Source imagery using `design/image-references.md`.

## File index

```
.
├── README.md                   ← you are here
├── BRIEF.md                    ← master brief (start here)
│
├── data/                       ← structured data (machine-readable)
│   ├── brand.json
│   ├── location.json
│   └── menu.json
│
├── content/                    ← human-authored copy
│   ├── about.md
│   ├── menu.md
│   ├── location.md
│   └── reviews.md
│
├── design/                     ← visual identity & sourcing
│   ├── design-system.md
│   └── image-references.md
│
└── images/                     ← drop image files here as you fetch them
    └── .gitkeep
```

## Recommended starter prompt for the AI agent

> Read `BRIEF.md`, `data/brand.json`, and `design/design-system.md` first. Then build an Astro + Tailwind marketing site for Ra Beung Lay Seafood. Start with the homepage — atmosphere hero (sunset beach + tables), brand story, signature dishes, location preview with map, reservation CTA, footer. Then build the bilingual menu page using `data/menu.json`. The site is a Trojan Horse demo to win them as a paying client, so atmosphere matters more than completeness. Use the terracotta + sand + ocean palette per the design system. Bilingual (English + Thai). Do not invent facts — if data isn't in the JSON, mark it as TBD or omit it.

## Key differences from A KEEN HOUSE brief

If you've also worked on the A KEEN HOUSE brief, set aside its design instincts:

| Dimension       | A KEEN HOUSE                    | Ra Beung Lay                       |
|-----------------|---------------------------------|------------------------------------|
| Brand           | Premium urban coffee chain      | Family-run beachfront restaurant   |
| Locations       | 4 (Bangkok malls + original)    | 1 (Krabi waterfront)               |
| Audience        | Urban professionals             | International tourists + Thai families |
| Aesthetic       | Dark wood, premium minimalist   | Terracotta, sand, ocean, generous  |
| Voice           | Confident, restrained           | Warm, direct, generous             |
| Site language   | English-led with Thai accents   | Bilingual EN/TH equal weight       |
| Site personality | Whispers                       | Invites you in                     |
| Hero subject    | The brand identity              | The location/setting               |
| Menu prominence | Coffee program                  | Seafood freshness + curries        |

## Source freshness

Brief generated: **2026-05-11**. Verify menu prices, hours, and exact subdistrict before pitching.

## What makes this lead special

3,087 Google reviews at 4.8★ — the most-reviewed restaurant in the entire 22-lead pipeline. Massive captured demand currently funneling to TripAdvisor, Wongnai, and Facebook instead of to a domain Ra Beung Lay actually owns. The pitch writes itself.
# Seafood
