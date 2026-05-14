# Image References & Sourcing Guide

> Direct links to public image sources. Most photos are on TripAdvisor, Google Maps, and customer-posted on Facebook. Build for atmosphere first — the beach setting is the hero.

---

## Primary sources

### Google Image Search — bulk visuals

This is the densest source. Hundreds of public photos of the restaurant, the beach setting, and the food.

- **All shots:** https://www.google.com/search?q=%22Ra+Beung+Lay%22+Krabi+seafood&udm=2
- **Beach / atmosphere shots:** https://www.google.com/search?q=%22Ra+Beung+Lay%22+beach+sunset&udm=2
- **Food shots:** https://www.google.com/search?q=%22Ra+Beung+Lay%22+seafood+dishes&udm=2
- **Logo source:** https://www.google.com/search?q=%22Ra+Beung+Lay%22+%22%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%9A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B9%80%E0%B8%A5%22+logo&udm=2

### Google Maps — owner + customer photos

Each Google Maps listing has a "Photos" tab with owner-uploaded images plus 3,000+ review photos:

- **Photos URL:** Search "Ra Beung Lay Seafood Krabi" on https://maps.google.com → Photos tab
- **Best categories on the Photos tab:** "By owner" (cleaner) and "Latest" (recent menu items)
- These are perfect for: signature dishes, multiple table view angles, exterior signage, sunset shots

### TripAdvisor

Editorial-quality photos plus customer-posted shots:

- https://www.tripadvisor.com/Search?q=Ra+Beung+Lay+Seafood
- TripAdvisor often has the cleanest food close-ups

### Wongnai

Thai-focused review platform with structured listings:

- https://www.wongnai.com/search?keyword=Ra+Beung+Lay

### Facebook page

Owner's primary content channel — go straight to the source for the most recent photos:

- Search: https://www.facebook.com/search/top?q=Ra+Beung+Lay+Seafood+Aqua+Beach
- Note: Facebook auth wall may require login. The Google Image Search results often surface the same photos without auth.

### TikTok / Instagram (UGC)

Heavy customer-generated content — sunset reels are abundant:

- TikTok: https://www.tiktok.com/search?q=ra%20beung%20lay
- Instagram tag: https://www.instagram.com/explore/tags/rabeunglay/

---

## Logo asset

- **Source:** Their Facebook profile picture is the cleanest version of the circular logo.
- **Description:** Terracotta orange circle, Thai script "ระเบียงเล" curved on top, English "Ra-Beung-Lay Seafood" curved on bottom, decorative wave motif in center.
- **Workflow:** Save as PNG from FB profile, then trace in Figma/Illustrator to recreate as a clean SVG. Or commission a graphic designer for a 30-min recreation if precision matters.
- **Format needed:** SVG ideally. Failing that, 512×512 PNG with transparent background.

---

## Required image inventory for the demo

| Slot                              | Quantity | Notes                                                            |
|-----------------------------------|---------:|------------------------------------------------------------------|
| Hero (homepage)                   | 1        | Wide sunset shot of beach + tables + karst silhouette            |
| Atmosphere gallery (beach page)   | 6-8      | Mix of: tables on sand, thatched roofs, hammocks, sunset patrons |
| Signature dishes                  | 6        | One per signature (mussels, crab, tom yum, fish, shrimp curry, khao yum) |
| Menu category headers             | 5        | One ambient shot per category — small, atmospheric               |
| Location / map page hero          | 1        | Wide overhead/exterior or sign-on-the-beach shot                 |
| Footer / texture background       | 1        | Bamboo/rattan texture or sea horizon                             |
| Logo (SVG)                        | 1        | Vector recreation of the circular emblem                         |
| Open Graph / social share         | 1        | 1200×630 — sunset beach hero is ideal                            |

**Total:** ~21–25 images. More than A KEEN HOUSE because the location-as-experience needs more visual proof.

---

## Photography that doesn't exist (yet) — flag for the pitch

For the demo this isn't critical, but flag it for the production phase:

- **Drone shots of the restaurant from the sea** — would be a hero-level differentiator
- **Time-lapse of sunset across the karsts** — for the homepage video background
- **Behind-the-counter chef shots** — humanity = trust
- **Close-ups of the dipping sauces and condiments** — easy add, big visual reward
- **Group photos of multi-generational diners** — the "family-run" promise visualized

A modest commissioned half-day shoot (~5,000-10,000 THB locally in Krabi) would solve all of these and dramatically lift the production site.

---

## Image optimization checklist for production

- [ ] Compress all hero images to <300KB JPEG or <150KB AVIF
- [ ] Generate 3 sizes per image (mobile / tablet / desktop)
- [ ] Lazy-load below-the-fold imagery
- [ ] Use `loading="eager" fetchpriority="high"` on hero only
- [ ] Color-grade all photos toward warm/golden — many customer photos are too flat or too cool

---

## ⚠️ Rights / fair use note

For the **demo / pitch**, using public photos from Google Image Search and the restaurant's own Facebook page is reasonable — it's their own visual content used to sell them their own website. Disclose in the pitch DM: *"the demo uses your existing public photos as placeholders — we'll commission a fresh shoot if you'd like."*

For **production**, the contract should secure either:
- Photo rights from the owner (their own photos), OR
- A commissioned new shoot, OR
- An ongoing UGC widget with explicit user consent (live Google reviews / hashtag-based IG embed)

Customer photos from Google reviews should NOT be reused in production marketing without permission, even if they're publicly visible. The license you get from Google Maps doesn't transfer to your website.
