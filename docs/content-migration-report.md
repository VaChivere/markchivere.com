# Content Migration Report

**Site:** markchivere.com
**Phase:** Prompt 2 — internal pages, Substack and content architecture
**Status:** Recommendations only. **No articles have been deleted, moved or redirected.**

---

## 1. Classification key

| Class | Meaning |
| --- | --- |
| **A** | Personal thought leadership suitable for Substack |
| **B** | Commercial content better suited to Treamio |
| **C** | Evergreen content worth retaining on MarkChivere.com |
| **D** | Outdated or redundant content requiring review |

## 2. Existing articles

All five articles are live and indexed. Each currently has exactly one canonical
URL on this site — the `/insights/<slug>` detail page — and each is surfaced in
the new `/writing` library under an editorial theme.

| # | Title | Canonical URL | Class | Theme | Recommendation |
| --- | --- | --- | --- | --- | --- |
| 1 | Actually Doing It | `/insights/actually-doing-it` | **A** | Personal Reflections | Strongest personal-essay voice in the set. Keep the current URL as canonical. This is the natural piece to *reference* from Substack, not to duplicate there. |
| 2 | The Difficult Conversations That Build Trust | `/insights/difficult-conversations-that-build-trust` | **C** (B secondary) | Leadership & Behaviour | Evergreen leadership practice. Worth retaining here indefinitely. Also relevant to Treamio's leadership offering if a commercial version is ever wanted. |
| 3 | The Meetings Where Trust Actually Happens | `/insights/meetings-where-trust-actually-happens` | **C** | Organisations & Performance | Evergreen. Retain as is. |
| 4 | Trust Isn't Built in Workshops | `/insights/trust-isnt-built-in-workshops` | **C** | Learning & Capability | Evergreen. Retain as is. |
| 5 | The Coffee Break Where the Real Strategy Happened | `/insights/coffee-break-strategy` | **B** (C secondary) | Organisations & Performance | Drawn directly from a client strategy workshop. Closest of the set to commercial content; consider a Treamio-aligned version rather than removing this one. |

**Class D articles: none.** No existing article was found to be outdated or
redundant enough to warrant removal.

### Notes on the article set

- Articles 2–5 form one four-part series on trust. They are internally linked and
  should either be kept together or migrated together.
- Article 1 opens with links to Parts 1–3 of the series. Any change to those URLs
  requires updating that article body first.
- The `category` values in `blog-data.ts` (`Leadership`, `Team Effectiveness`,
  `Culture`) are legacy labels. The `/writing` library reads a separate editorial
  theme (`writingCategory`) instead, so the legacy values can stay as they are.
- One unverifiable audience claim ("Join 4,300+ leaders") has been replaced on the
  article detail page and the legacy `/insights` index with neutral copy.

## 3. Legacy pages

These pages are live and indexed. They are **not** part of the new navigation.
No redirect has been implemented.

| Page | Class | Suggested destination | Rationale |
| --- | --- | --- | --- |
| `/services` | B | `https://treamio.com` | Commercial services offering. |
| `/approach` | B | `https://treamio.com` | Consulting methodology. |
| `/impact` | B | `https://treamio.com` | Client results. |
| `/workshops` | B | `https://treamio.com` | Commercial workshop offering. |
| `/sales-training` | B | `https://treamio.com` | Commercial training product. |
| `/events` | D | `/speaking` | Superseded by the speaking page, which carries the same calendar. |
| `/insights` | D | `/writing` | Superseded by the writing library, but still holds inbound links. |

## 4. Proposed URL mappings (awaiting approval)

None of these are implemented. They are recorded here so the decision can be made
deliberately, and so that no redirect chain is introduced.

| From | To | Type |
| --- | --- | --- |
| `/services` | `https://treamio.com` | 301 permanent |
| `/approach` | `https://treamio.com` | 301 permanent |
| `/impact` | `https://treamio.com` | 301 permanent |
| `/workshops` | `https://treamio.com` | 301 permanent |
| `/sales-training` | `https://treamio.com` | 301 permanent |
| `/events` | `/speaking` | 301 permanent |
| `/insights` | `/writing` | 301 permanent (optional — keeps the index live for now) |
| `/insights/<slug>` | **no change** | Each article keeps its canonical URL |

Considerations before approving:

1. `/insights` is already indexed in Google Search Console and is currently in the
   sitemap. Redirecting it is a decision about existing search equity, not just
   tidiness.
2. Redirecting five consulting pages to an external domain means the site loses
   that traffic from its own property. Treamio should be able to serve those
   intents before the redirect is switched on.
3. `/events` and `/speaking` present the same Luma calendar. Redirecting `/events`
   to `/speaking` removes duplication without losing content.

## 5. What has changed in this phase

- `/writing` is live as the editorial library with theme filtering.
- Every article has a canonical URL, Open Graph metadata and `Article` +
  `BreadcrumbList` structured data.
- The sitemap now lists canonical `www` URLs only, matching the canonical tags.
- All five articles retain their existing URLs and content.
- Nothing has been deleted, and no redirect has been added.

## 6. Decisions required

1. Approve or reject the redirects in section 4.
2. Confirm whether articles 2–5 should stay solely on MarkChivere.com, or whether
   Treamio should publish parallel commercial versions.
3. Supply the Substack publication URL so `NEXT_PUBLIC_SUBSTACK_PUBLICATION_URL`
   can be set and the feed integration activated.
