# Design System Audit & Refinement Plan

**Site:** markchivere.com
**Phase:** Prompt 3 — premium design system, visual refinement and QA
**Status:** Audit and proposals. No design changes have been made yet.

---

## 1. Benchmark: verified observations

`https://sholarichards.com/` was fetched and its page content read. The following
is what the delivered markup and copy actually showed.

### Verified

| Observation | Evidence in the page |
| --- | --- |
| A single dominant conversion goal | "Check Shola's Availability" appears four separate times down one homepage. |
| Two hero actions, clearly ranked | "Watch Shola in Action" (video) and "Check Shola's Availability" (booking). |
| Credentials placed directly under the name | "Workplace Kindness Expert / International Keynote Speaker / Best-selling Author". |
| Social proof before self-description | A testimonial wall and a "Trusted By" logo row appear in the first screenfuls, ahead of any biography. |
| Testimonials carry name and role | e.g. "MELISSA MAHONEY — CEO, IAAP", "STEPHANIE LOUIE CRAIG — Director, Microsoft". |
| Typographic device: mixed roman/italic emphasis inside headings | "Rave Reviews", "Creating a New Reality", "Strong Enough to Be Kind". |
| Long-form argumentative homepage | Problem (rise of incivility) → cost → reframe (kindness with backbone) → resolution. |
| Numbered method presentation | "01. Start Within / 02. Just Today / 03. Go First". |
| Book, podcast and assessment offers as distinct sections | Each with its own CTA. |
| Trademark-protected frameworks and phrases | "Strong Enough to Be Kind™", "The Courage To Go Together™", "Unstoppable Resilience™". |
| Repeated CTA band at multiple scroll depths | The booking link recurs rather than appearing once at the end. |

### Not verified — and therefore not claimed

The fetch returned page content, not styling. I did **not** verify their font
families, type scale, colour values, spacing tokens, grid, breakpoints, border
radii, shadow definitions, animation or interaction behaviour. No claim is made
about any of these.

### What we deliberately do not take

Shola's site is a speaker's commercial engine: one audience, one offer, heavy
proof, high CTA density, vivid proprietary frameworks. MarkChivere.com is a
professional authority platform spanning writing, facilitation, consulting and
entrepreneurship. Copying the structure would misrepresent it.

**Adopted in principle (structure only, not assets):** credentials stated early
and plainly; two ranked hero actions; social proof only where genuine; a
recurring, consistent primary CTA; proof placed before biography.

**Not adopted:** the testimonial carousel, the logo wall, the trademarked
frameworks, the multi-offer density, the single-goal funnel, the italic-roman
display treatment.

**Rejected in full:** their copy, imagery, layouts, wording and brand assets.

---

## 2. Design system audit

### 2.1 Typography

| Property | Current value | Where |
| --- | --- | --- |
| Body family | Inter (variable), latin subset, `display: swap` | [layout.tsx](file:///Users/MarkHD/markchivere.com/src/app/layout.tsx#L13-L17) |
| Heading family | Inter Tight (variable) | [layout.tsx](file:///Users/MarkHD/markchivere.com/src/app/layout.tsx#L19-L23) |
| Serif / accent | None | — |
| Tailwind mapping | `--font-sans`, `--font-heading` | [globals.css](file:///Users/MarkHD/markchivere.com/src/app/globals.css#L31-L32) |
| Weights in use | 300, 400, 500, 600, 700 | components |
| Weights unused | 800, 900 | — |

Two typefaces, both from the same superfamily. They are close enough in
character that the pairing reads as one typeface used slightly tighter — the
heading/body distinction is carried almost entirely by weight and size rather
than by contrast.

**Observed sizes** (mobile → desktop):

| Role | Mobile | Desktop |
| --- | --- | --- |
| Hero h1 | 40px | 60 → 72px |
| Page h1 | 36px | 60px |
| Section h2 | 30px | 36px |
| Card title | 20px | 20–36px |
| Body | 16–18px | 18–20px |
| Nav | 14px | 14px |
| Eyebrow label | 12px | 12px |
| Meta / caption | 12px | 12px |

**Issues**

1. **Section headings are under-scaled.** A 72px hero resolving to a 36px section
   heading is a 2:1 drop. Sections read as captions to the hero rather than as
   peers. The proposed range (40–52px) is not met.
2. **A missing step in the scale.** `text-4xl md:text-6xl` jumps 36 → 60px with
   nothing in between, so headings look small on tablet and large on desktop.
3. **No negative tracking on display text.** Headings use `tracking-tight`
   (`-0.025em`) which is right for 36px but under-tracked at 60–72px.
4. **Body copy lacks a measure constraint in places.** [Introduction.tsx](file:///Users/MarkHD/markchivere.com/src/components/ui/Introduction.tsx)
   is capped at `max-w-3xl` (768px) which at 20px body text is roughly 80
   characters — above the 65–75 target.
5. **`text-wrap: balance` is not used anywhere**, so headings produce orphaned
   words at certain widths.
6. **Eyebrow labels are all-caps with `tracking-[0.25em]` at 12px** on almost
   every section. Used six times on the homepage alone, it stops being an accent.

### 2.2 Colour

Defined tokens ([globals.css](file:///Users/MarkHD/markchivere.com/src/app/globals.css#L3-L17)):

| Token | Value | Role |
| --- | --- | --- |
| `--midnight-blue` | `#0B1C2D` | Foreground default, dark surfaces, primary buttons |
| `--royal-purple` | `#4B2E83` | Active nav, eyebrow labels, hover state, card accents |
| `--electric-cyan` | `#2EE6D6` | Mobile CTA fill, footer headings, external badges, mobile-menu accent |
| `--off-white` | `#F6F7F9` | Body background (rarely visible — most sections are `bg-white`) |
| `--charcoal` | `#1A1A1A` | Body text default (overridden to midnight-blue in practice) |

Tailwind's default grey ramp is used extensively alongside these
(`gray-50` → `gray-700`).

**Issues**

1. **Electric cyan has five unrelated jobs.** It is a button fill in the mobile
   menu, a heading colour in the footer, a badge colour on article cards, a
   decorative blur orb, and a link-arrow accent. An accent colour should have
   one job.
2. **Five non-brand colours compete with the brand.** `blue-900/10` shadows,
   `gray-200/50` shadows, `gray-200/40` shadows and `#0077b5` (LinkedIn hover)
   all appear. Shadow hue is inconsistent.
3. **Contrast failures.**
   - `text-gray-400` on white for article dates — approx. 2.6:1. **Fails AA.**
   - `text-gray-500` on midnight-blue in the footer bottom bar — approx. 3.2:1.
     **Fails AA** for small text.
   - `text-gray-300` on midnight-blue in the footer body — approx. 6.4:1. Passes.
   - Electric cyan is never used as text on a light background, which is correct.
4. **Gradient orbs repeat in three places** (newsletter, subscribe block, 404)
   with the same purple+cyan recipe, and the article card carries both a
   navy→purple→navy gradient *and* a radial cyan glow. This is the most
   template-like element on the site.
5. **`bg-off-white` is defined as the body background but almost every section
   paints `bg-white`**, so the token is effectively unused and the warm/cool
   intent it implies is lost.

### 2.3 Layout and spacing

| Property | Current state |
| --- | --- |
| Container | Tailwind `container` + `mx-auto`, breakpoint-capped at 1536px on `2xl` |
| Page gutters | `px-4 md:px-6` on most pages, `px-6 md:px-12 lg:px-24` in the hero |
| Widest content | `max-w-6xl` (1152px) |
| Reading column | `max-w-3xl` (768px) and `max-w-4xl` (896px), used interchangeably |
| Header offset | `main` carries a global `pt-24` (96px) for the 80px fixed header |
| Section padding | `py-16 md:py-24` (64 → 96px) |
| Page header | `pt-16 pb-16 md:pt-24 md:pb-20` |
| Max content widths in use | 2xl, 3xl, 4xl, 5xl, 6xl — 79 occurrences across 29 files |

**Issues**

1. **Two different gutter systems** (hero vs everything else) mean the hero's
   text does not align with the section headings below it at `lg` and above.
2. **Content width is decided per section, not per page.** About uses 3xl for
   body and 4xl for its header; My Work uses 3xl for body but 5xl for its
   interests grid; Contact uses 4xl for its header and 6xl for its form grid.
3. **Compound top spacing.** `main pt-24` plus a page header `pt-16`/`pt-24`
   gives 160–192px of empty space above every page title on desktop.
4. **Section spacing is capped at 96px**, at the low end of the proposed 88–120px.
5. **No named spacing tokens.** Every section re-declares `py-16 md:py-24`.

### 2.4 Components

**Buttons — no shared component.** Six different recipes exist:

| Where | Padding | Radius | Notes |
| --- | --- | --- | --- |
| Hero primary | `px-8 py-4` | `rounded-full` | + `shadow-lg hover:shadow-xl` |
| Hero secondary | `px-8 py-4` | `rounded-full` | 2px outline, no shadow |
| Header CTA | `px-6 py-2.5`, 14px text | `rounded-full` | no shadow |
| Mobile menu CTA | `py-4` | `rounded-full` | cyan fill, `font-bold` |
| Contact form submit | `py-4` | `rounded-lg` | different radius from everything else |
| Text link + arrow | — | — | consistent and good; used widely |

**Cards — four recipes:** ArticleCard (`rounded-2xl`, `shadow-lg shadow-gray-200/50`,
lift on hover), BlogCard (`rounded-3xl`, `shadow-xl`, `rounded-3xl` container),
homepage ventures (`rounded-2xl`, `shadow-sm`), Offerings (`rounded-2xl`,
`bg-gray-50`, no shadow).

**Border radii in use:** `rounded-lg` (8), `rounded-xl` (12), `rounded-2xl` (16),
`rounded-3xl` (24), `rounded-full`. Five values.

**Images — three aspect conventions:** hero and About portrait `4/5`,
FeaturedWriting `16/10`, MeetMark `4/3`–`1/1`, article cards a fixed pixel height
(`h-52`) rather than an aspect ratio.

**Focus and hover states.** Explicit `focus-visible:ring-2 ring-royal-purple` on
the article card and the writing filters, and focus rings on form inputs.
Everything else — hero CTAs, header nav, header CTA, footer links, the text-link
pattern — falls back to the browser default outline. Hover states are consistent
and good: 300ms, colour shift to royal purple, arrows translate 4px.

**Animation.** Framer Motion is used only in three components
([WritingLibrary](file:///Users/MarkHD/markchivere.com/src/components/writing/WritingLibrary.tsx),
ArticleSubscribe, BlogList) and only for filter transitions and list entry.
Everything else is CSS transitions at 300ms. `transition-all` is applied where
only colour changes, which animates more properties than intended.

### 2.5 Header and footer

**Header.** Fixed, 80px, white with `shadow-sm` at all scroll positions (no
scrolled state). Desktop logo is the wide lock-up; mobile swaps stacked → white
when the menu opens. Active state is exact-pathname match only — so `/insights`
highlights nothing and `/insights/<slug>` highlights nothing. The mobile menu is
a full-screen navy overlay with a large headline and the CTA. The toggle has
`aria-label` but no `aria-expanded` or `aria-controls`.

**Footer.** Four columns (brand, Navigate, Ventures + Legal, Stay Updated) —
the generic footer-link-farm shape. It contains a newsletter form, and the
homepage also ends with a full newsletter section, so one visitor can meet two
capture forms within a screen of each other. Column headings are electric cyan.
Bottom bar includes `text-gray-500` on navy (contrast failure).

### 2.6 Responsive and other

- Breakpoints used: `sm`, `md`, `lg` only. `xl` and `2xl` are unused.
- No horizontal-overflow bugs found; grids collapse to single column correctly.
- No `prefers-reduced-motion` handling anywhere, including in the Framer Motion
  components (no `useReducedMotion`).
- No skip-to-content link.
- `scroll-smooth` is set on `<html>` — good.
- Four orphaned components remain from the pre-repositioning homepage and are
  imported nowhere: `MeetMark.tsx`, `Offerings.tsx`, `HowIWork.tsx`, `Impact.tsx`.

---

## 3. Identified inconsistencies (summary)

1. Section headings are 36px while the hero is 72px — no usable middle weight.
2. Body measure varies between 768px and 896px with no rule.
3. Two gutter systems (hero vs all other pages).
4. Six button recipes, two radii, no single primary CTA style.
5. Four card recipes.
6. Five border radii.
7. Three image aspect conventions plus one fixed-height image.
8. Electric cyan serving five unrelated roles.
9. Two newsletter capture forms reachable in one viewport.
10. Shadow hue inconsistent (`blue-900/10`, `gray-200/50`, `gray-200/40`).
11. Inconsistent page-header composition across About / Writing / Speaking /
    My Work / Contact.
12. `text-gray-400` on white and `text-gray-500` on navy both fail WCAG AA.
13. No reduced-motion support; no skip link.

---

## 4. Proposed typography system

**Recommendation: adopt Manrope for headings and keep Inter for body.**

Inter stays because it is already loaded, is excellent at small sizes, and
carries the navigation, metadata and form UI. Manrope for headings introduces a
geometric, slightly warmer display voice that reads as art-directed rather than
default, and it is a second Google font (variable, same delivery mechanism), so
there is no new dependency.

Newsreader is **not** recommended. A serif accent would add a third typeface for
a single decorative role — against the "no more than two primary typefaces"
rule and against the understated direction.

### Proposed scale

| Role | Size | Line height | Tracking | Weight |
| --- | --- | --- | --- | --- |
| Display (hero) | `clamp(2.75rem, 6vw, 5rem)` | 1.02 | `-0.03em` | 600 |
| H1 (page) | `clamp(2.25rem, 4.5vw, 3.5rem)` | 1.08 | `-0.025em` | 600 |
| H2 (section) | `clamp(1.875rem, 3vw, 2.75rem)` | 1.15 | `-0.02em` | 600 |
| H3 (subsection) | `clamp(1.375rem, 2vw, 1.75rem)` | 1.25 | `-0.015em` | 600 |
| Lead paragraph | `1.25rem` | 1.6 | normal | 300 |
| Body | `1.0625rem` (17px) | 1.7 | normal | 400 |
| Small / UI | `0.875rem` | 1.5 | normal | 500 |
| Eyebrow | `0.75rem` | 1.2 | `0.18em` | 600 |
| Caption | `0.8125rem` | 1.5 | normal | 400 |

Rules: headings get `text-wrap: balance`; paragraphs get `text-wrap: pretty`;
display tracking tightens as size increases; no arbitrary one-off sizes.

---

## 5. Proposed colour system

**Recommendation: keep the existing brand palette. Change only how it is used.**

`#0B1C2D`, `#4B2E83` and `#F6F7F9` are already distinctive and are the
established identity. Replacing them with the illustrative navy/ivory/bronze
palette would break brand continuity for no functional gain and would contradict
the Prompt 1 and 2 decisions.

`#927C5B` (bronze) and `#46525A` (slate) are not adopted — a warm metallic accent
alongside royal purple plus cyan would give three accents, which is one too many.

### Changes

| Element | Change |
| --- | --- |
| Roles per colour | Midnight blue = surfaces and primary CTA. Royal purple = interaction only (hover, focus, active). Cyan = reserved solely as the dark-surface accent. |
| Neutrals | One grey family, tinted cool to sit with midnight blue. Replace ad-hoc `gray-*` picks in new components with named neutral tokens. |
| Cyan usage | Removed as a button fill in the mobile menu (becomes a purple/navy primary), removed as the footer heading colour, kept as the dark-surface accent only. |
| Text on light | Minimum `gray-600` equivalent for any text carrying meaning. Dates and metadata move off `gray-400`. |
| Footer bottom bar | Lightened to meet AA on navy. |
| Gradients | Replaced with a single quiet treatment: a subtle tinted wash, not two blurred orbs. |
| Shadows | One hue, derived from midnight blue, at three defined steps. |
| Contrast | All text pairs verified at AA or better; target AA for 4.5:1 body and 3:1 for large text. |

---

## 6. Layout and spacing system

### Tokens to introduce

| Token | Value | Replaces |
| --- | --- | --- |
| `--container-page` | 1200px | ad-hoc `max-w-6xl` |
| `--container-reading` | 720px | ad-hoc `max-w-3xl` / `max-w-4xl` |
| `--container-narrow` | 900px | ad-hoc `max-w-4xl` for headers |
| `--gutter` | `1.25rem` mobile / `2.5rem` desktop | `px-4 md:px-6` and the hero's `px-6 md:px-12 lg:px-24` |
| `--section-y` | `5.5rem` mobile / `7.5rem` desktop | `py-16 md:py-24` |
| `--radius-sm` | 8px | `rounded-lg` |
| `--radius-md` | 12px | `rounded-xl`, `rounded-2xl`, `rounded-3xl` |
| `--radius-pill` | full | unchanged |

Radii collapse from five values to two plus pills. Card padding and section
padding become tokens so pages stop re-declaring them.

### Changes

- One gutter for the whole site, so the hero and every section align on the same
  left edge.
- Page headers lose their own top padding; the header offset moves into the
  layout so pages no longer stack `pt-24` with `pt-16`.
- Desktop section spacing moves to 120px; readers currently get 96px.
- Reading measure standardised at 720px with 17px body text ≈ 68 characters.

---

## 7. Page-by-page refinement plan

| Page | Composition | Changes |
| --- | --- | --- |
| **Home** | Keep all seven sections. No new sections. | Hero: stronger portrait treatment, two ranked actions, tightened headline. Introduction: wider measure, drop-cap or larger lead sentence instead of the purple rule. Featured writing: asymmetric layout — one lead article plus two stacked, replacing the three-equal-columns row. Areas of interest: keep the numbered two-column rule. My Work: reduce to a single editorial band rather than two cards. Speaking: keep centred but reduce its height. Newsletter: replace the orb treatment with a quiet wash. |
| **About** | Editorial long-form. | Portrait moves to a wider asymmetric placement. Section headings adopt the new H2 scale. Body at the 720px measure throughout. Remove the duplicated CTA styling. |
| **Writing** | Publication index. | Filters restyled as a quiet underline row rather than pills. Featured article becomes the lead with a real image priority. Card metadata aligned to a single baseline row. Card radius and shadow unified. |
| **Speaking** | Two-part: topics, then enquiry. | Topics as a numbered editorial list at reading width. Formats as a compact inline row instead of a grid. Form fields brought onto the same tokens as Contact. |
| **My Work** | Two ventures + interests. | Venture blocks become full-width editorial bands with the heading over the copy, removing the two-card symmetry. Broader-interests grid stays but picks up the shared card recipe. |
| **Contact** | Form + details. | Form panel loses the card-and-shadow treatment in favour of a bordered column. Sidebar aligned to the new gutter. |
| **Header** | — | One primary CTA style. Active state covers nested routes. Add `aria-expanded`. Add a scrolled state instead of a permanent shadow. |
| **Footer** | — | Four columns reduced to three (brand, navigate, legal) with the newsletter promoted to the section above, removing the double subscribe form. Cyan headings move to a neutral. |
| **404 / legal** | — | Pick up the new tokens only. No structural change. |

---

## 8. What will not change

- Positioning, copy voice, navigation labels and order.
- Route structure, canonical URLs, SEO metadata and JSON-LD.
- The Substack integration and its fallbacks.
- HubSpot forms, tracking and consent behaviour.
- Article content and existing URLs.
- The decision that Treamio owns organisational consulting.

## 9. Implementation order

1. Tokens and typography (fonts, scale, measure, `text-wrap`).
2. Colour roles, contrast fixes, gradient and shadow cleanup.
3. Shared `Button` and card recipes; replace the six button variants.
4. Layout: one gutter, container and section tokens; page-header fix.
5. Header and footer refinement.
6. Page-by-page composition changes.
7. Motion: reduced-motion support, remove `transition-all` where unnecessary.
8. Remove the four orphaned components.
9. QA at 360 / 390 / 768 / 1024 / 1440 and full build verification.
