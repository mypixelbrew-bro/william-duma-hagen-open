# Website Specification: Hon. William Duma MP
## Member for Hagen Open · Minister for State Enterprises · Party Leader, United Resources Party

**Purpose:** This document is the complete build specification for a 13-page campaign and incumbency website for Hon. William Duma. It contains every piece of content, every layout instruction, and every component definition needed to (a) render page-by-page visual mockups in Claude Design, and (b) build a working Astro static site via Claude Code in VS Code, deployed to Vercel.

**Target audience for the finished site:** voters in Hagen Open electorate, journalists at Post-Courier / The National / EMTV / NBC, party officials, diaspora in Australian cities, and the MP's own staff.

**Critical constraint — PNG field conditions:** The site must load fast on a cheap Android phone on a weak Digicel 3G signal. Every design decision serves this constraint. No autoplay video. No client-side rendering of content. No third-party scripts above the fold. Target: first contentful paint under 1.5 seconds on Slow 3G simulation. Total first-load payload under 250KB excluding user-initiated media.

---

## DESIGN SYSTEM

This section defines every visual element. It is referenced by every page spec below. The system is modelled on the institutional approach of whitehouse.gov — one typeface, one house colour, flat surfaces, real photography, no decoration.

### Colour tokens

| Token | Hex | Usage |
|---|---|---|
| `--white` | `#FFFFFF` | Page ground |
| `--paper` | `#F2F1EE` | Panel backgrounds, card grid ground, alternating table rows |
| `--ink` | `#1B1B1B` | Primary text, headings, rules |
| `--muted` | `#5B5751` | Secondary text, captions, metadata |
| `--rule` | `#DAD7D0` | Borders, table rules, dividers |
| `--navy` | `#0A2458` | Utility bar, nav brand mark, buttons, footer, links |
| `--red` | `#B3122A` | Single accent — primary CTA button only, heroeyebrow label |
| `--gold` | `#B78A2E` | Status indicator (Delivered), sparingly |
| `--status-underway` | `#0A2458` | Status dot for underway projects (navy) |
| `--status-notstarted` | `#DAD7D0` | Status dot outline for not-started projects |

No gradients. No shadows. No opacity overlays except on the hero video poster.

### Typography

One typeface family: **Public Sans** (Google Fonts, or self-hosted WOFF2 subset in production).

| Role | Weight | Size (mobile) | Size (desktop) |
|---|---|---|---|
| Page heading (h1) | 800 | 28px | 38px |
| Section heading (h2) | 800 | 20px | 24px |
| Card heading (h3) | 700 | 15px | 16px |
| Body | 400 | 14px | 15px |
| Caption / metadata | 600 | 11px | 11px |
| Button label | 700 | 13px | 13px |
| Table data | 400 | 13px | 14px |
| Utility bar | 600 | 10.5px | 11px |

Letter-spacing: headings at -0.005em, body at 0, captions/utility at 0.02–0.06em.
Line-height: headings 1.15, body 1.55, captions 1.4.
No italics anywhere. Emphasis is done with weight, not style.
Numbers in tables and costs use `font-variant-numeric: tabular-nums`.

### Layout

- **Max content width:** 960px, centred.
- **Page margin (mobile):** 16px.
- **Page margin (desktop):** auto (centred within viewport).
- **Section spacing:** 48px between major sections on mobile, 64px on desktop.
- **Card grid:** 1 column on mobile, 2 columns on desktop, 12px gap.
- **Table:** full-width, no horizontal scroll — columns are Project (flexible) and Status (auto-width, right-aligned).

### Components

#### Utility bar
Full-width, `--navy` background, white text. Left: "Hagen Open Electorate". Right: "Office hours 8am–4pm". Height: ~32px. Always the first element on the page. Sticky on scroll: NO (saves rendering cost).

#### Navigation
Below utility bar. White background, bottom border 1px `--rule`. Left: brand mark (30×30px navy square with inset border) + "William Duma MP" (bold) / "Hagen Open" (muted caption) stacked. Right: hamburger icon (☰) on mobile, horizontal text links on desktop: Home, The Record, Priorities, About, State Enterprises, News, Contact. Active link underlined with 2px `--navy` border-bottom. Height: ~56px.

#### Hero (homepage only)
Full-width container. Contains a photo (aspect ratio 16:10 on mobile, 16:7 on desktop) with a dark overlay at 40% opacity. Over the image: eyebrow label in `--red` uppercase, h1 heading in white, one-line description in white at 90% opacity, and a CTA button. Below the image: no content in the hero container — the next section follows immediately.

#### Section heading
Left-aligned h2 in `--ink`, with an optional right-aligned metadata span in `--muted` (e.g. "38 entries", "2022–2026"). Below: one-line subtitle in `--muted`. Below that: a 1.5px `--ink` rule spanning full content width.

#### Card
White background, 1px `--rule` border, no border-radius. Contains: photo placeholder (aspect 4:3), then padding with h3, one or two lines of body text in `--muted`, and a text link in `--navy` ("View projects →"). No shadow. No hover effect except underline on the link.

#### Record table row
Two-column layout. Left cell: project name (bold, 14px) on first line, metadata (ward, date) in caption style below. Right cell: status indicator — a small square dot (8×8px, no border-radius) followed by status text. Dot colours: `--gold` for Delivered, `--navy` for Underway, outline-only `--rule` for Not started. Row separated by 1px `--rule` bottom border. First row preceded by a 1.5px `--ink` header rule under the column labels ("Project" left, "Status" right).

#### Button
Rectangular, no border-radius. Padding: 11px 18px. Label: 13px, weight 700, uppercase tracking 0.01em. Primary: `--navy` background, white text. Accent: `--red` background, white text (used once per page maximum). Outline: transparent background, `--navy` 1.5px border, `--navy` text.

#### Quote block
Left border 3px `--red`. Padding-left 14px. Quote text: 15px, weight 600. Attribution below: caption style, `--muted`.

#### Footer
Full-width, `--navy` background. Two-column link grid (h4 category labels in muted blue-grey, links in near-white). Below: address block, authorisation statement, thin top border at 18% white opacity. Padding: 22px 16px.

#### Breadcrumb (inner pages only)
Caption-style text: "Home / The Record / Kunai Primary School". Separator: " / ". Links in `--navy`, current page in `--muted`, no link. Sits between nav and page heading, padding 12px 16px.

---

## PLACEHOLDER MEDIA

All media below is placeholder. Every reference is clearly marked. In production these are replaced with commissioned photography and approved video from the MP's office.

### Images

| ID | Described content | Caption template | Reused on |
|---|---|---|---|
| `IMG-01` | Wide landscape shot of Mount Hagen township from an elevated position, showing buildings against highland valley and mountains | "[Caption varies by page]" | Homepage hero, Electorate Profile |
| `IMG-02` | A completed primary school building — single-storey, painted, with a corrugated iron roof, children visible in the yard | "[Caption varies by page]" | Homepage card grid (Education), Record single project page |
| `IMG-03` | A rural health aid post — small building with a red cross painted on the wall, a few people waiting outside | "[Caption varies by page]" | Homepage card grid (Health), Record entries |
| `IMG-04` | Sealed road section through highland terrain, fresh dark bitumen, no vehicles | "[Caption varies by page]" | Homepage card grid (Roads), Record entries |
| `IMG-05` | Portrait-style photo of a man in a suit at a podium or desk — used as MP portrait placeholder | "Hon. William Duma MP — placeholder, replace with official portrait" | Biography, Press Kit, Nav (small), About section |

### Video

| ID | Described content | Notes |
|---|---|---|
| `VID-01` | 15-second muted loop of highland landscape — clouds moving over Mount Hagen valley | Poster frame = `IMG-01`. Click-to-play only. File target: ≤3MB H.264. Used on homepage hero only. On mobile, show poster image only — do not load video file at all. |

---

## PAGE SPECIFICATIONS

---

### Page 1: HOME

**Route:** `/`
**Purpose:** First impression. Establish who he is, what he's delivered, and what's coming. Drive to the Record page.

**Layout, top to bottom:**

1. **Utility bar** — as defined
2. **Navigation** — as defined
3. **Hero section**
   - Background: `IMG-01` with dark overlay
   - Desktop: `VID-01` muted loop behind overlay, poster `IMG-01` shown until click
   - Mobile: `IMG-01` only, no video loaded
   - Eyebrow (over image): `THE RECORD — 2002 TO 2026`
   - Heading (over image): `Six terms. One electorate. Every project accounted for.`
   - Description (over image): `A complete record of funded and delivered infrastructure across every ward of Hagen Open.`
   - CTA button (over image): `View the full record →` (links to /record/) — `--red` accent button
   - Photo caption below image: `Mount Hagen township, Western Highlands Province — placeholder image`

4. **Summary statistics strip**
   - `--paper` background, full width
   - Three columns on desktop, stacked on mobile
   - Column 1: `87` (large, bold) / `Projects funded` (caption below)
   - Column 2: `K 42.6m` (large, bold) / `Total committed` (caption below)
   - Column 3: `40` (large, bold) / `Wards covered` (caption below)
   - Note: these figures are fabricated placeholders

5. **Priority areas — card grid**
   - Section heading: `Priority areas`
   - Subtitle: `Delivery by sector, updated as projects close out.`
   - 2×2 card grid:
     - Card 1: `IMG-02` / **Education** / "32 classroom and library projects across 18 wards, including six new double-classroom buildings completed in 2024." / `View education projects →`
     - Card 2: `IMG-03` / **Health** / "12 aid posts rebuilt or upgraded, three new rural water supply systems, two ambulance stations." / `View health projects →`
     - Card 3: `IMG-04` / **Roads** / "38 kilometres of road sealed, four bridges completed, six feeder roads graded and maintained." / `View road projects →`
     - Card 4: `IMG-01` (reused) / **Water & Sanitation** / "14 gravity-fed water systems serving 23 villages, six institutional water tanks at schools and aid posts." / `View water projects →`

6. **Latest from the record — table preview**
   - Section heading: `Latest entries` / right-aligned: `87 total`
   - Subtitle: `Most recently updated projects in Hagen Open.`
   - Show 5 rows from the fabricated record (see Record page for full list), most recent first:

   | Project | Status |
   |---|---|
   | **Togoba Market shelter — 12 stalls** · Ward 28 · Jun 2026 · K 186,000 | ● Underway |
   | **Ogelbeng Primary — 4 classrooms** · Ward 20 · May 2026 · K 320,000 | ● Delivered |
   | **Kik water system — gravity-fed, 4 villages** · Ward 6 · Apr 2026 · K 145,000 | ● Delivered |
   | **Baisu–Koibuga feeder road — 3.2km gravel** · Ward 31 · Mar 2026 · K 210,000 | ● Underway |
   | **Kumunga aid post — staff housing** · Ward 1 · Feb 2026 · K 95,000 | ○ Not started |

   - Below table: outline button — `View the full record →` (links to /record/)

7. **Latest statement — preview**
   - Section heading: `Latest statement`
   - Card (full-width, `--paper` background):
     - Date: `18 July 2026`
     - Heading: `Minister Duma addresses SOE reform progress at PNG Investment Conference`
     - Excerpt: `"Performance-based contracts have now been introduced across the State-owned enterprise portfolio. All board and CEO appointments are undertaken through an independent recruitment process, ensuring transparency and merit-based selection."`
     - Link: `Read the full statement →` (links to /news/soe-reform-investment-conference/)

8. **Quote block**
   - Quote: `"The record has to hold up on its own, project by project, whether the news is finished or not. A community that can see what was funded and what was built does not need to take anyone's word for it."`
   - Attribution: `Hon. William Duma MP, Member for Hagen Open`

9. **Footer** — as defined

---

### Page 2: THE RECORD

**Route:** `/record/`
**Purpose:** The core of the site. A complete, filterable, honest ledger of every DSIP and PSIP project funded in Hagen Open.

**Layout:**

1. Utility bar
2. Navigation
3. Breadcrumb: `Home / The Record`
4. Page heading:
   - h1: `The Record`
   - Subtitle: `Every project funded through DSIP and PSIP in Hagen Open since 2022, with cost, contractor, dates and status. Including the ones that are not finished.`
   - Right metadata: `87 entries`

5. **Filter bar** (this is one of two interactive islands on the site)
   - Horizontal scrolling chips on mobile, inline row on desktop
   - Chips: `All` (active by default), `Education`, `Health`, `Roads`, `Water`, `Markets`, `Administration`
   - Second row (optional, desktop only): Ward filter dropdown — "All wards" default, then Ward 1–40
   - Filtering is client-side JS, operating on the full HTML table already rendered server-side. Progressive enhancement — with JS disabled, the full unfiltered table is visible and usable.

6. **Full record table**
   - Column headers: `Project` (left) / `Cost` (right) / `Status` (right)
   - Each row shows: project name (bold), ward + sector + date (caption below), cost in kina (tabular-nums), status dot + label
   - Sorted by date, most recent first

**Fabricated record — 30 entries (representative sample, more can be added):**

| # | Project name | Ward | Sector | Date | Cost (K) | Contractor | Status |
|---|---|---|---|---|---|---|---|
| 1 | Togoba Market shelter — 12 stalls | 28 | Markets | Jun 2026 | 186,000 | Hagen Building Contractors | Underway |
| 2 | Ogelbeng Primary — 4 classrooms | 20 | Education | May 2026 | 320,000 | Kumba Construction Ltd | Delivered |
| 3 | Kik water system — gravity-fed, 4 villages | 6 | Water | Apr 2026 | 145,000 | PNG Water Solutions | Delivered |
| 4 | Baisu–Koibuga feeder road — 3.2km gravel | 31 | Roads | Mar 2026 | 210,000 | Niugini Civil Works | Underway |
| 5 | Kumunga aid post — staff housing | 1 | Health | Feb 2026 | 95,000 | Duma Holdings Ltd | Not started |
| 6 | Kelua 2 Primary — library block | 3 | Education | Jan 2026 | 175,000 | Mount Hagen Builders | Delivered |
| 7 | Pits–Kogmul road bridge | 27 | Roads | Dec 2025 | 480,000 | Pacific Bridge Corp | Underway |
| 8 | Mulga Community School — 2 classrooms | 23 | Education | Nov 2025 | 160,000 | Kumba Construction Ltd | Delivered |
| 9 | Kagamuga Rural water tanks — 6 schools | 29 | Water | Oct 2025 | 112,000 | PNG Water Solutions | Delivered |
| 10 | Kenta health centre upgrade | 34 | Health | Sep 2025 | 285,000 | Hagen Building Contractors | Delivered |
| 11 | Anga Primary — 3 classrooms + teacher house | 21 | Education | Aug 2025 | 240,000 | Mount Hagen Builders | Delivered |
| 12 | Waninga footbridge | 38 | Roads | Jul 2025 | 65,000 | Community Works Program | Delivered |
| 13 | Korobuk aid post rebuild | 11 | Health | Jun 2025 | 190,000 | Duma Holdings Ltd | Delivered |
| 14 | Palim 1 gravity water — 3 villages | 16 | Water | May 2025 | 130,000 | PNG Water Solutions | Delivered |
| 15 | Koglamp–Tiling road seal — 4.8km | 8 | Roads | Apr 2025 | 520,000 | Niugini Civil Works | Delivered |
| 16 | Minimp Primary — 2 classrooms | 19 | Education | Mar 2025 | 155,000 | Kumba Construction Ltd | Delivered |
| 17 | Pungaminga aid post — new build | 25 | Health | Feb 2025 | 210,000 | Mount Hagen Builders | Delivered |
| 18 | Gabina market shelter — 8 stalls | 14 | Markets | Jan 2025 | 95,000 | Hagen Building Contractors | Delivered |
| 19 | Kiliga Community School — teacher house | 2 | Education | Dec 2024 | 85,000 | Community Works Program | Delivered |
| 20 | Pulgimp water system — gravity-fed, 2 villages | 22 | Water | Nov 2024 | 98,000 | PNG Water Solutions | Delivered |
| 21 | Tega–Koglamp road grading — 6.1km | 7 | Roads | Oct 2024 | 180,000 | Niugini Civil Works | Delivered |
| 22 | Biaprui Primary — 4 classrooms | 12 | Education | Sep 2024 | 310,000 | Kumba Construction Ltd | Delivered |
| 23 | Keltiga aid post — medical supplies store | 13 | Health | Aug 2024 | 75,000 | Mount Hagen Builders | Delivered |
| 24 | Togoba No.1 water tanks — 4 aid posts | 28 | Water | Jul 2024 | 88,000 | PNG Water Solutions | Delivered |
| 25 | Koge 1 Primary — library block | 17 | Education | Jun 2024 | 170,000 | Kumba Construction Ltd | Delivered |
| 26 | Palim 2 footbridge | 15 | Roads | May 2024 | 72,000 | Community Works Program | Delivered |
| 27 | Kingalrui 1 aid post rebuild | 10 | Health | Apr 2024 | 195,000 | Hagen Building Contractors | Delivered |
| 28 | Wimbuka Community School — 3 classrooms | 32 | Education | Mar 2024 | 225,000 | Mount Hagen Builders | Delivered |
| 29 | Kilam–Kenta road seal — 2.4km | 33 | Roads | Feb 2024 | 340,000 | Niugini Civil Works | Delivered |
| 30 | Kuguma water system — gravity-fed, 5 villages | 4 | Water | Jan 2024 | 155,000 | PNG Water Solutions | Delivered |

7. Below table: `Showing 30 of 87 entries. Full dataset available on request from the district office.`
8. Footer

---

### Page 3: SINGLE PROJECT (template)

**Route:** `/record/[slug]/` — e.g. `/record/ogelbeng-primary-4-classrooms/`
**Purpose:** One project, all its detail. The URL journalists and auditors will share.

**Example project used for the template:**

**Layout:**

1. Utility bar
2. Navigation
3. Breadcrumb: `Home / The Record / Ogelbeng Primary — 4 classrooms`
4. Page heading:
   - h1: `Ogelbeng Primary School — four classrooms`
   - Subtitle: `Ward 20, Mount Hagen Rural LLG · Education`

5. **Status strip**
   - `--paper` background, full width
   - Three columns:
     - `Status` — gold dot + "Delivered"
     - `Cost` — K 320,000
     - `Completed` — May 2026

6. **Project details — two-column layout on desktop, stacked on mobile**

   Left column (wide):
   - **Description:**
     `Four permanent classrooms built at Ogelbeng Primary School to replace aging bush-material structures that had been in use since 1998. The new buildings are single-storey steel-frame construction with corrugated iron roofing, concrete slab floors, glazed louvre windows, and painted internal and external walls. Each classroom accommodates 40 students. The project included installation of a 5,000-litre rainwater tank and construction of a two-drop pit latrine to serve the new wing.`

     `Ogelbeng Primary serves approximately 480 students drawn from Wards 19, 20 and 21. Prior to this project, upper-primary classes were being held in a church building 600 metres from the school grounds due to lack of classroom space. The new wing eliminates that arrangement and brings all classes back to the one campus.`

   - **Photo gallery — 3 images**
     - `IMG-02` — caption: `Completed classrooms at Ogelbeng Primary School, May 2026 — placeholder image`
     - `IMG-02` (reused) — caption: `Interior showing desks and louvre windows — placeholder image`
     - `IMG-04` (reused) — caption: `Access road to the school, sealed under a separate DSIP project in 2024 — placeholder image`

   Right column (narrow, sidebar):
   - **Project information panel** (`--paper` background, no border-radius)
     - **Funded:** November 2025
     - **Started:** January 2026
     - **Completed:** May 2026
     - **Cost:** K 320,000
     - **Funding source:** DSIP 2025
     - **Contractor:** Kumba Construction Ltd
     - **Ward:** 20 — Ogelbeng
     - **LLG:** Mount Hagen Rural
     - **Sector:** Education
     - **Beneficiaries:** ~480 students, 12 teachers

7. **Related projects**
   - Section heading: `Other education projects`
   - Show 3 rows from the record table, filtered to Education sector, excluding the current project
   - Link: `View all education projects →`

8. Footer

---

### Page 4: PRIORITIES

**Route:** `/priorities/`
**Purpose:** Forward-looking commitments for the next term. Structured by sector.

**Layout:**

1. Utility bar
2. Navigation
3. Breadcrumb: `Home / Priorities`
4. Page heading:
   - h1: `Priorities for 2027–2032`
   - Subtitle: `What the next term will focus on, based on the needs identified across the electorate and the delivery gaps in the current record.`

5. **Introduction paragraph:**
   `The priorities below are drawn from three sources: ward-level consultations held between March and June 2026, an audit of unfinished and unfunded projects from the current DSIP cycle, and the policy platform of the United Resources Party. They are commitments, not promises — each one is costed, and the total fits within a realistic five-year DSIP and PSIP envelope for a single open electorate.`

6. **Sector sections — four blocks, each with the same structure:**

   **Education**
   - `IMG-02` full-width photo, caption: `Biaprui Primary School classrooms, completed September 2024 — placeholder image`
   - Body: `Hagen Open has 47 primary schools. Of those, 31 still operate with at least one bush-material classroom. The current term delivered 32 classroom projects; the next term targets the remaining 15 schools that have not yet received any DSIP classroom funding. Priority will be given to schools where student-to-classroom ratios exceed 60:1. A secondary priority is teacher housing — 22 schools in the electorate have no on-site teacher accommodation, which is the single largest driver of teacher absenteeism in rural wards.`
   - Commitments list:
     - 15 new classroom blocks at unfunded schools — estimated K 2.4 million
     - 10 teacher housing units at schools with the highest absenteeism — estimated K 850,000
     - Library and reading-resource supply to all 47 schools — estimated K 280,000

   **Health**
   - `IMG-03` full-width photo, caption: `Korobuk aid post after rebuild, June 2025 — placeholder image`
   - Body: `The electorate has 14 designated aid post sites. All 14 now have a permanent structure — the last three were completed in 2025. The next term shifts focus from buildings to staffing and supply. Eight of the 14 aid posts are currently unstaffed or staffed fewer than three days per week. Medical supply delivery is unreliable, with most aid posts reporting stockouts of basic items (antimalarials, oral rehydration salts, basic wound care) lasting two weeks or more per quarter. The priority is a reliable supply chain and a staffing incentive that keeps health workers posted in rural wards rather than gravitating to Mount Hagen General Hospital.`
   - Commitments list:
     - Staff housing at eight unstaffed aid posts — estimated K 640,000
     - Cold-chain storage upgrade at four aid posts for vaccine delivery — estimated K 180,000
     - Quarterly medical supply run funded and scheduled through the district health office — estimated K 120,000 per year

   **Roads & Bridges**
   - `IMG-04` full-width photo, caption: `Koglamp–Tiling road seal, completed April 2025 — placeholder image`
   - Body: `38 kilometres of road have been sealed in the current term, connecting 11 wards to the Mount Hagen urban core and the Highlands Highway. The next term focuses on feeder roads — the unpaved connections between the sealed network and individual communities. There are 26 identified feeder-road segments totalling approximately 64 kilometres that are currently impassable for more than three months per year during the wet season. Grading and basic drainage on these segments is cheaper per kilometre than sealing and delivers immediate, measurable improvement in market access for cash-crop farmers.`
   - Commitments list:
     - 26 feeder-road segments graded and drained — estimated K 1.8 million
     - Two permanent bridge replacements (Pits–Kogmul, Kuguramp crossing) — estimated K 960,000
     - Routine maintenance fund for sealed roads — estimated K 200,000 per year

   **Water & Sanitation**
   - `IMG-01` (reused) full-width photo, caption: `Highland valley near Hagen Open — placeholder image`
   - Body: `Gravity-fed water systems are the most cost-effective infrastructure investment in the electorate. The current term delivered 14 systems serving 23 villages. The next term targets the 17 villages in the upper wards (Wards 35–40) that currently rely entirely on creek water. These wards have the highest rates of waterborne illness in the electorate according to district health data. Each gravity-fed system costs between K 80,000 and K 155,000 depending on distance from the source, and serves an average of 200–400 people.`
   - Commitments list:
     - 12 new gravity-fed water systems in Wards 35–40 — estimated K 1.4 million
     - Institutional water tanks at 10 schools without rainwater collection — estimated K 150,000
     - Community-managed sanitation program (pit latrines) at 20 villages — estimated K 300,000

7. **Total cost summary**
   - `--paper` background panel
   - `Estimated five-year total: K 9.3 million`
   - `Average annual DSIP allocation for an open electorate: K 2.0–2.5 million`
   - `These commitments fit within the expected funding envelope without supplementary appropriation.`

8. Footer

---

### Page 5: NEWS & STATEMENTS

**Route:** `/news/`
**Purpose:** Reverse-chronological index of public statements, press releases and updates.

**Layout:**

1. Utility bar
2. Navigation
3. Breadcrumb: `Home / News & Statements`
4. Page heading:
   - h1: `News & Statements`
   - Subtitle: `Official statements and updates from the office of the Member for Hagen Open.`

5. **Statement list — 6 entries:**

   Each entry is a horizontal card: date on the left (day, month, year stacked), title (linked, `--navy`), and two-line excerpt in `--muted`. Separated by 1px `--rule` border.

   1. **18 July 2026** — `Minister Duma addresses SOE reform progress at PNG Investment Conference`
      Excerpt: The Minister outlined the government's progress on performance-based contracts and independent recruitment processes across all State-owned enterprises.

   2. **3 July 2026** — `Statement on the completion of Togoba Market shelter construction`
      Excerpt: Construction of the 12-stall market shelter at Togoba is on track for completion in August. The project provides covered market space for vendors from Wards 28 and 29.

   3. **19 June 2026** — `Ogelbeng Primary School classrooms officially handed over`
      Excerpt: Four new classrooms at Ogelbeng Primary School were officially handed over to the school board in a ceremony attended by the district education coordinator.

   4. **2 May 2026** — `Minister Duma welcomes passage of SOE Governance Amendment Bill`
      Excerpt: The State Enterprises Minister described the bill as an essential step toward transparent and accountable management of state assets, including PNG Power and Air Niugini.

   5. **14 March 2026** — `Hagen Open ward consultation schedule announced for 2026`
      Excerpt: The Member's office will conduct ward-level consultations across all 40 wards between March and June 2026 to inform DSIP priorities for the next parliamentary term.

   6. **28 January 2026** — `Statement on the Pits–Kogmul road bridge contract award`
      Excerpt: The contract for the Pits–Kogmul road bridge has been awarded to Pacific Bridge Corp following a competitive tender. Construction is scheduled to begin in the second quarter of 2026.

6. Below list: `Showing 6 of 24 statements. Older statements available on request from the district office.`
7. Footer

---

### Page 6: SINGLE STATEMENT (template)

**Route:** `/news/[slug]/` — e.g. `/news/soe-reform-investment-conference/`
**Purpose:** A single citable statement. This is the URL journalists will quote from.

**Example statement used for the template:**

**Layout:**

1. Utility bar
2. Navigation
3. Breadcrumb: `Home / News & Statements / SOE reform progress`
4. **Date:** `18 July 2026`
5. **h1:** `Minister Duma addresses SOE reform progress at PNG Investment Conference`
6. **Body text — full statement:**

   `The Minister for State Enterprises, Hon. William Duma, today addressed the 2026 PNG Investment Conference in Sydney on the government's reform agenda for State-owned enterprises.`

   `Minister Duma outlined the structural changes implemented across the SOE portfolio since 2022, including the introduction of performance-based contracts for all SOE chief executives, the establishment of independent board appointment processes managed by an external recruitment firm, and the publication of quarterly financial statements for PNG Power, Air Niugini and PNG Ports.`

   `"The question we are asked most often by investors is whether governance standards in our State enterprises can be trusted," Minister Duma said. "The answer is in the structure, not in the assurance. Independent boards, published accounts, and contracts tied to measurable outcomes — that is the system we are building, and it does not depend on any one minister or any one government."`

   `The Minister confirmed that the SOE Governance Amendment Bill, passed by Parliament in May 2026, provides the legislative framework for these reforms to continue beyond the current term. Key provisions of the bill include mandatory competitive tendering for SOE board appointments, annual public disclosure of SOE financial performance, and the establishment of an independent SOE Performance Review Panel reporting to the Public Accounts Committee.`

   `Minister Duma also addressed the restructuring of PNG Power's generation assets and the ongoing negotiations with independent power producers in the Highlands region, noting that the goal is to reduce Mount Hagen's reliance on diesel generation by 40 percent within five years through a combination of mini-hydro and solar installations.`

   `"Our people pay too much for unreliable power," he said. "The highlands have water and sunlight in abundance. Using imported diesel to generate electricity in Mount Hagen is an economic failure that this government intends to correct."`

   `The PNG Investment Conference is held annually and brings together investors, government officials and industry representatives from across the Asia-Pacific region.`

7. **Share / cite block**
   - `--paper` background panel
   - `Cite this statement:`
   - `Office of Hon. William Duma MP, Minister for State Enterprises, 18 July 2026.`
   - `URL: williamduma.com.pg/news/soe-reform-investment-conference/`

8. **Previous / Next navigation**
   - Left: `← Statement on Togoba Market completion` (3 Jul 2026)
   - Right: (none — this is the most recent)

9. Footer

---

### Page 7: BIOGRAPHY

**Route:** `/about/`
**Purpose:** Full background. Career, education, family, party leadership.

**Layout:**

1. Utility bar
2. Navigation
3. Breadcrumb: `Home / About`

4. **Portrait and intro — two-column on desktop**
   - Left (narrow): `IMG-05` portrait, full height of the text block. Caption: `Hon. William Duma MP — placeholder, replace with official portrait`
   - Right (wide):
     - h1: `Hon. William Marra Duma, LLB, LLM, CMG, MP`
     - Subtitle: `Member for Hagen Open · Minister for State Enterprises · Party Leader, United Resources Party`
     - Intro paragraph: `William Duma has represented the people of Hagen Open in the National Parliament since 2002. He is currently serving his fifth consecutive term, making him one of the longest-serving sitting members in the Parliament. He holds the portfolio of Minister for State Enterprises in the Marape-Rosso cabinet, with oversight of Papua New Guinea's major state-owned entities including Air Niugini, PNG Power, PNG Ports, and the Kumul Consolidated Holdings group.`

5. **Career section**
   - h2: `Parliamentary career`
   - Body:
     `William Duma was first elected to the National Parliament in the 2002 General Elections, winning the Hagen Open seat as an independent candidate. He subsequently joined the United Resources Party, rising to become Party Leader — a position he continues to hold.`

     `His ministerial career spans four portfolios across multiple governments:`

     - Minister for Environment and Conservation — Somare-Marat cabinet, 2003
     - Minister for Petroleum and Energy — Somare-Temu cabinet, 2007; O'Neill-Namah cabinet, 2011; O'Neill-Dion cabinet, 2012–2014
     - Minister for Public Enterprise and State Investment — 2014–2017
     - Minister for State Enterprises — Marape-Rosso cabinet, 2020–present

     `As Minister for Petroleum and Energy, he oversaw the regulatory framework during the construction phase of the PNG LNG project. As Minister for State Enterprises, he has led the government's SOE governance reform agenda, introducing performance-based contracts for SOE executives, independent recruitment for board appointments, and mandatory public financial reporting.`

6. **Education section**
   - h2: `Education`
   - Body:
     `William Duma holds a Bachelor of Laws (LLB) from the University of Papua New Guinea and a Master of Laws (LLM) from the University of Sydney. Before entering politics, he practiced as a barrister and solicitor of the National and Supreme Courts of Papua New Guinea.`

7. **Party leadership section**
   - h2: `United Resources Party`
   - Body:
     `William Duma is the Party Leader of the United Resources Party (URP). The party currently holds 10 seats in the National Parliament following the 2022 General Elections, making it one of the significant coalition partners in the Marape-Rosso government. URP members hold seats across five provinces — Western Highlands, Eastern Highlands, Morobe, East New Britain, and Enga. Under Duma's leadership, the party's platform centres on resource sector governance, equitable distribution of resource revenues to landowner communities, and infrastructure investment in rural electorates.`

8. **Electorate connection section**
   - h2: `Hagen Open`
   - Body:
     `William Duma was born and raised in the Mount Hagen area. He has won the Hagen Open seat in every general election since 2002 — the 2002, 2007, 2012, 2017 and 2022 elections — a record that reflects sustained support across the electorate's 40 wards. His office operates from the district headquarters at Mount Hagen, and he maintains a regular schedule of ward-level consultations. The full record of DSIP and PSIP projects delivered under his tenure is published on this website.`

9. Footer

---

### Page 8: ELECTORATE PROFILE

**Route:** `/electorate/`
**Purpose:** Give voters, journalists and officials a clear picture of what Hagen Open is and how it's structured.

**Layout:**

1. Utility bar
2. Navigation
3. Breadcrumb: `Home / Electorate Profile`
4. Page heading:
   - h1: `Hagen Open Electorate`
   - Subtitle: `Mount Hagen District, Western Highlands Province`

5. **Overview section**
   - Body:
     `Hagen Open is one of four open electorates in Western Highlands Province, covering the Mount Hagen District. The electorate includes the rural and peri-urban areas surrounding Mount Hagen, the provincial capital and the largest city in the Highlands region. It is administered through two local-level governments: Mount Hagen Rural LLG (40 wards) and a portion of Mount Hagen Urban LLG.`

     `The electorate's population was approximately 123,000 at the 2011 census. The economy is based on coffee production, fresh-produce agriculture, and small-scale trade centred on Mount Hagen's markets. The electorate has road access via the Highlands Highway, which connects Mount Hagen to Lae and the coast, and via Kagamuga Airport, which services domestic flights to Port Moresby, Lae, and other Highlands centres.`

6. **Key facts panel** (`--paper` background)
   - Province: Western Highlands
   - District: Mount Hagen
   - Capital: Mount Hagen
   - LLGs: Mount Hagen Rural, Mount Hagen Urban (part)
   - Wards: 40+ (Mount Hagen Rural LLG)
   - Population: ~123,000 (2011 census)
   - Main economic activity: Coffee, fresh produce, trade
   - Access: Highlands Highway, Kagamuga Airport

7. **Ward listing**
   - h2: `Wards — Mount Hagen Rural LLG`
   - Simple three-column table (mobile: single column):

   | Ward | Name | Projects (current term) |
   |---|---|---|
   | 1 | Kumunga | 3 |
   | 2 | Kiliga | 2 |
   | 3 | Kelua 2 | 2 |
   | 4 | Kuguma | 2 |
   | 5 | Kelua 1 | 1 |
   | 6 | Kik | 2 |
   | 7 | Tega | 1 |
   | 8 | Koglamp | 2 |
   | 9 | Tiling | 1 |
   | 10 | Kingalrui 1 | 2 |
   | 11 | Korobuk | 2 |
   | 12 | Biaprui | 2 |
   | 13 | Keltiga | 1 |
   | 14 | Gabina | 2 |
   | 15 | Palim 2 | 1 |
   | 16 | Palim 1 | 2 |
   | 17 | Koge 1 | 2 |
   | 18 | Koge 2 | 1 |
   | 19 | Minimp | 2 |
   | 20 | Ogelbeng | 3 |
   | 21 | Anga | 2 |
   | 22 | Pulgimp | 2 |
   | 23 | Mulga | 2 |
   | 24 | Kitiga | 1 |
   | 25 | Pungaminga | 2 |
   | 26 | Kogmul | 1 |
   | 27 | Pits | 2 |
   | 28 | Togoba No.1 | 3 |
   | 29 | Kagamuga | 2 |
   | 30 | Kingalrui 2 | 1 |
   | 31 | Baisu | 2 |
   | 32 | Wimbuka | 2 |
   | 33 | Kilam | 2 |
   | 34 | Kenta | 2 |
   | 35 | Koibuga | 1 |
   | 36 | Kagamuga Rural | 1 |
   | 37 | Kugl | 1 |
   | 38 | Waninga | 1 |
   | 39 | Kuguramp | 1 |
   | 40 | Togoba 2 | 1 |

   - Below table: `Project counts link to the full record, filtered by ward.`

8. `IMG-01` — full-width landscape photo. Caption: `Mount Hagen township, Western Highlands Province — placeholder image`

9. Footer

---

### Page 9: STATE ENTERPRISES

**Route:** `/state-enterprises/`
**Purpose:** Dedicated page for the ministerial portfolio. Unique to Duma — this justifies the flagship tier.

**Layout:**

1. Utility bar
2. Navigation
3. Breadcrumb: `Home / State Enterprises`
4. Page heading:
   - h1: `Minister for State Enterprises`
   - Subtitle: `Oversight of Papua New Guinea's major State-owned entities and the government's SOE reform agenda.`

5. **Introduction:**
   `Hon. William Duma has served as Minister for State Enterprises since 2020, with responsibility for the governance and performance of Papua New Guinea's State-owned enterprise portfolio. The portfolio includes some of the country's largest employers and most critical service providers.`

6. **Portfolio entities — card grid (2×2 on desktop, stacked on mobile)**

   Each card: `--paper` background, no image, h3 entity name, description paragraph, key figure in bold.

   - **Air Niugini** — Papua New Guinea's national airline, operating domestic and international services. The airline connects all major provincial centres and serves international routes to Australia, Singapore, the Philippines, Japan, Fiji and the Solomon Islands. Employees: ~1,800.

   - **PNG Power** — The national electricity utility, responsible for generation, transmission and distribution across the country. Serves approximately 13% of the national population through grid-connected supply. Employees: ~2,200.

   - **PNG Ports Corporation** — Operator of the country's four major ports: Port Moresby, Lae, Rabaul and Kimbe. Handles the vast majority of Papua New Guinea's international trade by volume. Employees: ~600.

   - **Kumul Consolidated Holdings** — The state's investment holding company, managing government equity in major resource projects and commercial enterprises. Portfolio includes stakes in Oil Search (now Santos PNG), Newcrest (now Newmont PNG) and other resource-sector entities.

7. **Reform agenda section**
   - h2: `SOE governance reform`
   - Body:
     `The reform agenda introduced under Minister Duma's oversight has four pillars:`

     `Performance-based contracts. All SOE chief executives now operate under contracts tied to measurable performance outcomes. These contracts are publicly registered and reviewed annually by the SOE Performance Review Panel.`

     `Independent board appointments. Board vacancies are filled through a competitive recruitment process managed by an external executive search firm. The Minister retains the power of appointment but selects only from a shortlist produced by the independent process.`

     `Public financial reporting. PNG Power, Air Niugini and PNG Ports now publish quarterly financial statements, available on their respective corporate websites. Prior to 2022, none of the three published financial results outside of their annual reports to Parliament.`

     `Legislative framework. The SOE Governance Amendment Bill, passed by Parliament in May 2026, codifies these reforms into law, ensuring they continue beyond any single ministerial tenure.`

8. Quote block:
   - Quote: `"The structure has to outlast the minister. Independent boards, published accounts, contracts with consequences — that is a system, not a favour."`
   - Attribution: `Hon. William Duma MP, PNG Investment Conference, July 2026`

9. Footer

---

### Page 10: CONTACT

**Route:** `/contact/`
**Purpose:** How to reach the office. Physical, phone, online.

**Layout:**

1. Utility bar
2. Navigation
3. Breadcrumb: `Home / Contact`
4. Page heading:
   - h1: `Contact the office`
   - Subtitle: `The district office is open weekdays. The parliamentary office operates during sitting weeks.`

5. **Two-column layout on desktop, stacked on mobile:**

   **District office (primary)**
   - h2: `Hagen Open District Office`
   - Address: `Mount Hagen District Headquarters, Mount Hagen, Western Highlands Province`
   - Phone: `+675 542 XXXX` (placeholder)
   - Hours: `Monday to Friday, 8:00am – 4:00pm`
   - Note: `Walk-in enquiries welcome. For project-related questions, please bring your ward number and any reference documents.`

   **Parliamentary office**
   - h2: `Parliament Office`
   - Address: `National Parliament, Parliament House, Waigani, NCD, Papua New Guinea`
   - Phone: `+675 327 7650` (from public record)
   - Hours: `During sitting weeks only`

6. **Other channels**
   - Facebook: `facebook.com/williamdumaMP` (placeholder)
   - Email: `office@williamduma.com.pg` (placeholder)
   - Note: `For media enquiries, see the Press Kit page.`

7. Footer

---

### Page 11: CONSTITUENT SERVICES

**Route:** `/services/`
**Purpose:** A form for constituents to lodge requests with the district office.

**Layout:**

1. Utility bar
2. Navigation
3. Breadcrumb: `Home / Constituent Services`
4. Page heading:
   - h1: `Request office assistance`
   - Subtitle: `Report a service issue or request help from the district office. You will receive a reference number to follow up with.`

5. **How it works — three numbered steps**

   Step 1: **Tell us what is happening**
   Choose a category (education, health, roads, water, other) and describe the issue in your own words.

   Step 2: **Add your ward**
   Select your ward from the list. This helps the office route your request to the right officer.

   Step 3: **Get a reference number**
   A reference number is generated immediately. Use it to follow up at the district office or by phone.

6. **Request form** (this is the second interactive island)
   - Category dropdown: Education, Health, Roads, Water, Markets, Administration, Other
   - Ward dropdown: Ward 1 (Kumunga) through Ward 40 (Togoba 2)
   - Description: textarea, 500-character limit
   - Name: text input
   - Phone number: text input
   - Submit button: `Submit request` (`--navy` primary button)
   - Note: `This form sends your request to the district office. It is not monitored outside of office hours (Monday–Friday, 8am–4pm). For emergencies, call the office directly.`
   - Privacy note: `Your name, phone number and request details are sent only to the district office. They are not published or shared.`

   **On submission:** display a confirmation panel with a generated reference number (format: `HO-2026-XXXX`), the category, ward and date, and the instruction "Save this reference number. You can use it to follow up at the district office or by phone."

7. Footer

---

### Page 12: MEDIA / PRESS KIT

**Route:** `/media/`
**Purpose:** Everything a journalist needs to file a story on deadline. Portraits, bio, citable URLs.

**Layout:**

1. Utility bar
2. Navigation
3. Breadcrumb: `Home / Media`
4. Page heading:
   - h1: `Press kit`
   - Subtitle: `Approved portraits, biography in three lengths, and direct links to all public statements. For media enquiries, contact the office at office@williamduma.com.pg.`

5. **Official portrait section**
   - h2: `Official portrait`
   - `IMG-05` displayed at two sizes:
     - Full-resolution (placeholder: 1200×1600, for print)
     - Web-resolution (placeholder: 400×533, for online)
   - Caption: `Hon. William Duma MP — placeholder, replace with official portrait. High-resolution download available.`
   - Download button: `Download portrait (high resolution)` — outline button
   - Usage note: `This portrait may be used without permission for news reporting purposes. Credit: Office of Hon. William Duma MP.`

6. **Biography — three lengths**
   - h2: `Biography`

   **One-line (for captions and bylines):**
   `Hon. William Duma, LLB, LLM, CMG, MP, is the Member for Hagen Open, Minister for State Enterprises, and Party Leader of the United Resources Party.`

   **Short (for news stories, ~80 words):**
   `Hon. William Duma is the Member for Hagen Open in the National Parliament of Papua New Guinea, a seat he has held since 2002. He currently serves as Minister for State Enterprises in the Marape-Rosso cabinet, with oversight of Air Niugini, PNG Power, PNG Ports and Kumul Consolidated Holdings. He is Party Leader of the United Resources Party. He holds a Bachelor of Laws from the University of Papua New Guinea and a Master of Laws from the University of Sydney.`

   **Full (for profiles and features, ~200 words):**
   `Hon. William Marra Duma, LLB, LLM, CMG, MP, has represented the electorate of Hagen Open in the National Parliament of Papua New Guinea since 2002 and is currently serving his fifth consecutive term. He holds the portfolio of Minister for State Enterprises in the Marape-Rosso cabinet, with responsibility for the governance and performance of Papua New Guinea's major state-owned entities, including Air Niugini, PNG Power, PNG Ports Corporation, and the Kumul Consolidated Holdings group. He is also Party Leader of the United Resources Party, which holds 10 seats in the current Parliament. His previous ministerial portfolios include Environment and Conservation (2003), Petroleum and Energy (2007–2014), and Public Enterprise and State Investment (2014–2017). Prior to entering politics, he practiced as a barrister and solicitor of the National and Supreme Courts of Papua New Guinea. He holds a Bachelor of Laws from the University of Papua New Guinea and a Master of Laws from the University of Sydney. He was born and raised in the Mount Hagen area, Western Highlands Province.`

7. **Statements archive link**
   - `All public statements are published at williamduma.com.pg/news/ and are citable at their individual URLs.`
   - Link: `View all statements →`

8. **Contact for media**
   - Email: `office@williamduma.com.pg`
   - Phone: `+675 542 XXXX`
   - Note: `The office aims to respond to media enquiries within 24 hours during sitting weeks and within 48 hours at other times.`

9. Footer

---

### Page 13: AUTHORISATION & PRIVACY

**Route:** `/authorisation/`
**Purpose:** Legal compliance. Authorisation statement required for campaign material, plus a basic privacy notice.

**Layout:**

1. Utility bar
2. Navigation
3. Breadcrumb: `Home / Authorisation & Privacy`
4. Page heading:
   - h1: `Authorisation and privacy`

5. **Authorisation statement**
   - h2: `Authorisation`
   - Body:
     `This website is authorised by [AGENT NAME], [AGENT ADDRESS], for and on behalf of Hon. William Duma MP, Member for Hagen Open.`

     `[PLACEHOLDER: This authorisation statement must be reviewed and updated to comply with the current requirements of the Papua New Guinea Electoral Commission before the site is published. The format, required disclosures, and placement may be subject to regulations that have been updated since this specification was written. Confirm current requirements with a PNG lawyer before launch.]`

6. **Privacy notice**
   - h2: `Privacy`
   - Body:
     `This website does not use cookies, does not serve advertisements, and does not track visitors using third-party analytics tools. Basic, anonymised traffic statistics (page views, referral sources, country of origin) are collected using Vercel Analytics, which does not use cookies or collect personally identifiable information.`

     `The constituent services request form (at williamduma.com.pg/services/) collects your name, phone number, ward and request description. This information is sent directly to the district office and is used solely to process your request. It is not shared with any third party, not published on this website, and not used for campaign or marketing purposes.`

     `For questions about how your information is handled, contact the district office at office@williamduma.com.pg.`

7. Footer

---

## BUILD NOTES FOR CLAUDE CODE

### Framework & deployment
- **Astro** with static output (`output: 'static'` in astro.config)
- Deploy to **Vercel** via GitHub integration
- No server-side rendering, no API routes in the MVP
- The constituent services form stores submissions locally or sends to a simple endpoint — for MVP, a Vercel serverless function that emails the office is sufficient

### Performance constraints (enforce in build or CI)
- Total first-load payload (HTML + CSS + fonts + above-fold images): ≤ 250KB
- No JavaScript loaded on any page except `/record/` (filter) and `/services/` (form) — these are Astro islands
- Images: AVIF with WebP and JPEG fallback, processed at build time via Astro's image pipeline, hard cap 100KB per image
- Fonts: Public Sans, self-hosted WOFF2, subset to Latin, ≤ 25KB total
- No third-party requests on first paint — no Google Fonts CDN, no analytics script above the fold, no embedded iframes

### Content structure
```
src/
  pages/
    index.astro              → Home
    record/
      index.astro            → The Record (filterable list)
      [slug].astro           → Single project (dynamic route from content collection)
    priorities.astro          → Priorities
    news/
      index.astro            → News & Statements list
      [slug].astro           → Single statement
    about.astro              → Biography
    electorate.astro         → Electorate Profile
    state-enterprises.astro  → State Enterprises
    contact.astro            → Contact
    services.astro           → Constituent Services
    media.astro              → Press Kit
    authorisation.astro      → Authorisation & Privacy
  content/
    projects/                → Markdown files, one per project (30 files)
    statements/              → Markdown files, one per statement (6 files)
  components/
    UtilityBar.astro
    Nav.astro
    Footer.astro
    Breadcrumb.astro
    Hero.astro
    SectionHead.astro
    Card.astro
    RecordTable.astro
    RecordFilter.tsx          → React island for client-side filtering
    StatusDot.astro
    QuoteBlock.astro
    Button.astro
    RequestForm.tsx           → React island for the constituent services form
  layouts/
    BaseLayout.astro          → HTML shell, meta tags, font loading, global CSS
    PageLayout.astro          → Base + utility bar + nav + footer
  styles/
    global.css                → All tokens, all component styles, one file
  assets/
    images/                   → Placeholder images (5 files, clearly named)
    video/                    → Placeholder poster frame (1 file)
```

### Meta tags (per page)
- `<title>` — "[Page name] — Hon. William Duma MP, Hagen Open"
- `<meta name="description">` — unique per page, under 155 characters
- Open Graph tags: `og:title`, `og:description`, `og:image` (use `IMG-01` as default), `og:url`
- `<meta name="viewport" content="width=device-width, initial-scale=1">`
- `<link rel="canonical" href="https://williamduma.com.pg/[path]/">`
- Language: `<html lang="en">`

### Accessibility baseline
- All images have descriptive alt text
- Keyboard focus visible on all interactive elements (2px `--navy` outline)
- `prefers-reduced-motion` respected — disable any CSS transitions/animations
- Colour contrast ≥ 4.5:1 on all text (already met by the token system)
- Form inputs have associated labels
- Skip-to-content link as first focusable element

---

## PLACEHOLDER IMAGE GUIDANCE FOR CLAUDE DESIGN

When rendering page mockups, represent placeholder images as:
- Solid rectangles in a muted blue-grey (`#2B4258`) at the specified aspect ratio
- A small caption centred inside the rectangle in white, 10px: "Placeholder — [described content]"
- Do NOT attempt to generate photographic content — use flat coloured rectangles only

For the video hero on the homepage:
- Render as a static image (`IMG-01` placeholder) with a small "▶ Play video" button centred over it
- The button should be a white circle, 48px diameter, with a navy play triangle inside

---

*End of specification. All content in this document is fabricated for demonstration purposes. Project names, costs, dates, contractor names and ward-level details are realistic but fictional. They must be replaced with verified data before any version of this site is published.*
