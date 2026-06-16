# Keenwayˢᵐ — Local SEO Plan (gokeenway.com)

Goal: get found and hired by people and businesses in Los Angeles County who need
same-day, scheduled, and final-mile pickup & delivery. Owner-operated voice — no
"team/fleet/network" or fake claims.

## What was implemented on the site (this branch)
- **Structured data (JSON-LD):**
  - `index.html` — `LocalBusiness` with NAP, `areaServed` (LA County + cities), and a
    `hasOfferCatalog` of all services. Helps Google understand who you are, where you
    serve, and what you offer (feeds "near me" / map results).
  - `services.html` and `how-it-works.html` — visible **FAQ sections** + matching
    `FAQPage` schema (eligible for FAQ rich results).
- **Already in place from the prior pass:** canonical → `https://www.gokeenway.com`,
  apex→www redirect, HTTPS, unique titles/meta/OG on all 9 pages, sitemap.xml, robots.txt,
  expanded internal linking, unique Services/About/Contact pages, owner-operated copy.

## NAP — confirmed from Google Business Profile and synced site-wide
Synced the site (footer, contact page, and `LocalBusiness` schema) to match the GBP exactly:
- **Name:** Keenway (legal: Keenway LLC)
- **Phone:** (858) 533-6929 — now in the homepage footer, contact page, and schema.
- **Address:** 400 Corporate Pointe, Suite 300, Culver City, CA 90230
- **Service areas:** Los Angeles County, San Fernando Valley, San Bernardino County (added to copy + schema).
- **Hours:** Mon–Fri 8:00 AM–3:00 PM (in footer, contact page, and schema).
- **Category:** Delivery service. **Instagram** (instagram.com/keenwaykeenway) added to schema `sameAs`.

Note: the booking form's phone field placeholder `(213) 478-2091` is just an example for the
customer's own number — not the business line — so it was left as-is.

## Keyword → page map (target terms by page)
| Page | Primary keyword | Supporting terms |
|---|---|---|
| `/` (Home) | los angeles county delivery service | final-mile delivery los angeles, same-day delivery LA |
| `/services` | delivery services los angeles county | auto parts delivery LA, medical courier los angeles, cargo van delivery, bulky item delivery |
| `/how-it-works` | how same-day delivery works | proof of delivery, scheduled pickup and delivery |
| `/about` | owner-operated delivery service los angeles | CDL courier, reliable local courier |
| `/contact` | contact los angeles courier | book a courier los angeles county |
| `/schedule-a-delivery` | book pickup and delivery los angeles | schedule a delivery LA |

### Optional next pages (only if you want to chase specific demand — say the word)
High-intent, low-competition local pages worth adding as unique content (not thin
duplicates): `same-day-delivery-los-angeles`, `auto-parts-delivery-los-angeles`,
`cargo-van-delivery-los-angeles`, `medical-courier-los-angeles`, and a
`north-hollywood-delivery` neighborhood page. Each ~400–600 unique words. I did **not**
auto-create these to avoid thin pages — tell me which match real jobs you want.

## Do-it-yourself list (off-site — often matters MORE than the website for local hire)
1. **Google Business Profile (highest ROI):** create/claim at business.google.com.
   - Category: *Courier service* / *Delivery service*. Set as a **service-area business**,
     list LA County + your top cities. Add services, hours, and real photos (van, deliveries).
   - This is what surfaces you in Google Maps and the local "3-pack." I can't create it for
     you (needs your Google login + verification), but I'll supply the exact field text.
2. **Reviews:** ask every happy customer for a Google review with a direct link. Even
   10–20 genuine reviews dramatically improve local ranking and trust. (No fake reviews.)
3. **Citations / directories:** list identical NAP on Yelp, Bing Places, Apple Business
   Connect, and a few LA business directories. Consistency is the ranking signal.
4. **Search Console + analytics:** add gokeenway.com to Google Search Console (verify via
   DNS or the existing Vercel domain), submit `https://www.gokeenway.com/sitemap.xml`, and
   watch *Performance* for the queries that find you. Add a privacy-light analytics tool
   (e.g., Vercel Analytics or Plausible) — avoid heavy scripts to keep the site fast.
5. **Backlinks (legit only):** local chamber, suppliers/shops you serve, and any press.
   No bought links, no spam.

## Measurement — "can people find me?" becomes a number
- Search Console → Performance: impressions & clicks by query and page.
- Google Business Profile → calls, direction requests, website clicks.
- Validate the structured data anytime at search.google.com/test/rich-results.
