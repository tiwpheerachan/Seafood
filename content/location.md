# Location & Visit — Human-Readable

> Mirrors `data/location.json` for content authoring. Single beachfront location near Ao Nang, Krabi.

---

## Ra Beung Lay Seafood Restaurant
*ระเบียงเล ซีฟู้ด*

A beachfront, family-run Thai seafood restaurant on Aqua Beach (also known as Ao Nam Mao Beach) — a short tuk-tuk ride from Ao Nang, with direct sea views and the famous Krabi karst formations on the horizon.

- **Address:** 10 Moo 5, Sai Thai, Mueang Krabi District, Krabi 81000, Thailand
- **Also referenced as:** Aqua Beach, Ao Nang area (sources disagree slightly — both reach the same place)
- **Phone:** 081 516 3950 (or +66 81 516 3950 international)
- **Hours:** Daily, 11:00 AM – 9:30 PM
- **Google rating:** 4.8 ★ (3,087 reviews — the most-reviewed restaurant in our entire lead pipeline)
- **Best for:** Sunset dinner, long lunches, Railay day-trip wrap-up
- **Reservations:** Recommended for sunset hours. Call or DM via Facebook.

---

## How to get there

| Coming from           | Travel info                                                  |
|-----------------------|--------------------------------------------------------------|
| **Ao Nang Beach**     | 10–15 min by tuk-tuk or taxi (~150–200 THB)                  |
| **Krabi Town**        | 20–25 min by car (~350–500 THB taxi)                         |
| **Krabi Airport (KBV)** | 30–35 min by taxi (~500–700 THB)                            |
| **Railay Beach**      | Boat to Ao Nam Mao pier, then 5 min walk along the beach     |
| **Klong Muang Beach** | 35–40 min by car around the headland                         |

**Parking:** On-site parking available — verify capacity for tour buses with the restaurant.

**Accessibility note:** Sand-floor seating exists; not all tables are wheelchair-accessible. The thatched-roof platform tables are the easiest for guests with mobility needs.

---

## What the place feels like

Open-air. Bamboo and thatched roofing over long communal wooden tables. Low Thai-style mats on raised wood platforms with cushions for the more relaxed crowd. Tables right on the sand for sunset. Direct ocean view with Krabi karst formations visible in the distance.

The best seats are the ones closest to the waterline at sunset. Arrive by 5:30 PM in high season to claim them.

---

## Map embed pattern

For the visit page, use this iframe (no API key required):

```html
<iframe
  src="https://www.google.com/maps?q=Ra+Beung+Lay+Seafood+Krabi&output=embed"
  width="100%"
  height="500"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

## Click-to-call pattern

```html
<a href="tel:+66815163950">081 516 3950</a>
```

## Directions link

```html
<a href="https://www.google.com/maps/dir/?api=1&destination=Ra+Beung+Lay+Seafood+Krabi">
  Get directions
</a>
```

## Schema.org snippet

Add this in `<head>` as `<script type="application/ld+json">`:

```json
{
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Ra Beung Lay Seafood Restaurant",
  "alternateName": "ระเบียงเล ซีฟู้ด",
  "image": "[hero image URL]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "10 Moo 5, Sai Thai",
    "addressLocality": "Mueang Krabi District",
    "addressRegion": "Krabi",
    "postalCode": "81000",
    "addressCountry": "TH"
  },
  "telephone": "+66815163950",
  "openingHours": "Mo-Su 11:00-21:30",
  "priceRange": "฿฿",
  "servesCuisine": ["Thai", "Seafood", "Southern Thai"],
  "acceptsReservations": true,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": 4.8,
    "reviewCount": 3087
  }
}
```
