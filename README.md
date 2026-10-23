# Mark Chivere

Professional authority platform for Mark Chivere — writing, speaking and ventures
(Founder of Treamio and GrantsHub.eu).

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **UI**: React 19, Tailwind CSS v4
- **Deployment**: Vercel

## Structure
- `/` — homepage
- `/about` — professional narrative
- `/writing` — editorial article library
- `/speaking` — speaking topics, formats and enquiry form
- `/my-work` — Treamio and GrantsHub.eu
- `/contact` — general enquiries
- `/insights/[slug]` — canonical article pages

The legacy consulting routes (`/services`, `/approach`, `/impact`, `/workshops`,
`/sales-training`, `/events`) are retained and indexed. Any redirection to
Treamio is pending approval.

## Configuration

Set these in `.env.local` (development) and in the Vercel project settings
(production). All are read at build time.

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_HUBSPOT_PORTAL_ID` | Yes | HubSpot portal ID for tracking and forms |
| `NEXT_PUBLIC_HUBSPOT_CONTACT_FORM_ID` | Yes | Contact and speaking enquiry form |
| `NEXT_PUBLIC_HUBSPOT_NEWSLETTER_FORM_ID` | Yes | Newsletter signup form |
| `NEXT_PUBLIC_HUBSPOT_WORKSHOP_FORM_ID` | No | Workshop enquiry form |
| `NEXT_PUBLIC_HUBSPOT_SPEAKING_FORM_ID` | No | Dedicated speaking form; falls back to the contact form |
| `NEXT_PUBLIC_HUBSPOT_MEETING_LINK` | No | Meeting scheduler; falls back to `https://meetings-eu1.hubspot.com/mchivere` |
| `NEXT_PUBLIC_SUBSTACK_PUBLICATION_URL` | No | Substack publication URL, e.g. `https://example.substack.com` |

### Substack

Substack is the intended primary publication for new personal thought-leadership
articles. The publication URL has not yet been supplied, so
`NEXT_PUBLIC_SUBSTACK_PUBLICATION_URL` is intentionally unset.

Until it is configured:
- the `/writing` library shows locally published articles only, and
- the subscribe block falls back to the existing HubSpot newsletter form.

Once the URL is set, the site derives `/feed`, `/subscribe` and `/embed` from it:
articles are read server-side from the public RSS feed (cached hourly, tag
`substack-feed`) and the subscribe block switches to the Substack embed. No
browser-side feed requests are made and the feed is not scraped.

## Scripts
- `npm run dev` — development server
- `npm run build` — regenerates `public/sitemap.xml` and `public/robots.txt`, then builds
- `npm run lint` — ESLint
