# CHANGELOG — Arched (arched.in)

All notable architectural and technical changes to this project are recorded chronologically in this file.

---

## [Cloudflare Pages & Workers Deployment Readiness] — 2026-11-03
### Added & Configured
- **OpenNext Cloudflare Adapter Integration (`@opennextjs/cloudflare`)**:
  - Integrated Cloudflare's official Next.js 15 adapter (`@opennextjs/cloudflare` v1.20.15) with OpenNext v4 engine.
  - Created `open-next.config.ts` configuring standard Cloudflare edge runtime integration with `defineCloudflareConfig`.
  - Created `wrangler.jsonc` specifying Cloudflare Workers & Pages asset bindings (`env.ASSETS`), compatibility flags (`nodejs_compat`), and compatibility date (`2024-09-23`).
  - Added build and deployment convenience scripts to `package.json`:
    - `npm run cloudflare:build` (`opennextjs-cloudflare build`)
    - `npm run preview` (`opennextjs-cloudflare preview`)
    - `npm run deploy` (`opennextjs-cloudflare deploy`)
- **Cloudflare Static Assets & Edge Worker Bundle Generation**:
  - Successfully compiled all 26 static pages, dynamic route handlers, and server actions into `.open-next/worker.js` and `.open-next/assets`.
  - Configured `.gitignore` to safely exclude `.open-next/`, `.wrangler/`, and `.vercel/` build output caches.
- **Verification**:
  - `opennextjs-cloudflare build`: **Exit Code 0** (26/26 routes bundled into Cloudflare worker).
  - `wrangler deploy --dry-run`: **Exit Code 0** (92 static assets validated, total upload 5.59 MB, asset binding verified).
  - Automated integration test suite: **42/42 tests PASSED (100% success rate)**.

---

## [Homepage Color Harmonization & Gradual Silver Polish Sheen] — 2026-11-03
### Added & Updated
- **Gradual Silver Polish Ambient Background (`app/globals.css`, `app/page.tsx`)**:
  - Implemented `@keyframes silverPolishGradient` with 20s smooth ambient shifting across titanium silver (`#ffffff`, `#f8f9fa`, `#edf1f6`, `#e2e8f0`, `#edf2f7`, `#ffffff`).
  - Added `.bg-silver-polish` and `.bg-silver-brushed` metallic gradient textures across the entire homepage canvas.
  - 1px hairline polished silver dividers (`#dbe2e8` / `#cbd5e1`).
- **Signature Architectural Steel Blue & Charcoal Accents**:
  - Harmonized with the new `ArchEd` logo identity:
    - Primary action buttons, active indicator pills, numbers, and iconography in architectural steel blue (`#155995`).
    - Structural headlines and high-contrast typography in deep charcoal (`#1a1a1a`, `#383a3b`).
  - Four Core Instrument cards feature polished silver metallic surfaces with dynamic hover border transitions (`hover:border-[#155995]`).
  - Guiding Voices quote container enhanced with brushed silver gradient backdrop.
  - 5-Step Studio Pipeline cards finished with silver hairline borders and steel blue sequence numbering.
- **Verification**:
  - Full production build: 26/26 routes compiled cleanly with 0 errors.
  - Automated integration test suite: **42/42 tests PASSED (100% success rate)**.


---

## [ArchEd Identity Mark Vectorization & Alignment] — 2026-11-03
### Added & Updated
- **Official ArchEd Brand Identity Mark (`components/ArchedLogo.tsx`)**:
  - Replaced former emblem with the exact dual-tone typographic mark provided:
    - **`Arch`** in deep charcoal `#383a3b` (`#ffffff` on dark background).
    - **`Ed`** in signature architectural steel blue `#155995` (`#38bdf8` on dark background).
  - Engineered pixel-for-pixel mathematical vector SVG paths (`public/arched-logo.svg`, `public/logo.svg`, `app/icon.svg`) for razor-sharp rendering on Retina and 4K displays with 0 pixelation.
  - Implemented dynamic sizing (`sm`: 24px, `md`: 32px, `lg`: 41px, `xl`: 54px) and context-aware theme contrast across Header, Footer, Admin Portal, Registration, and Auth Gateway.
- **Verification**:
  - Full production build: 26/26 routes compiled cleanly with 0 errors.
  - Integration test suite: **42/42 tests PASSED (100% success rate)**.


---

## [Ceeras.in Footer DNA, ArchitectureCompetitions.com (Buildner) Elevation & Platform Polish] — 2026-11-03
### Added & Updated
- **Ceeras.in Styled Footer (`components/Footer.tsx`)**:
  - Implemented the exact structural DNA of `ceeras.in`:
    - Brand block: `ArchedLogo`, slogan *"Precision Architectural Education & Spatial Systems"*.
    - 3 clean columns: **Quick Links** (`/`, `/competition`, `/archiverse`, `/what-we-do`, `/about`), **Support** (`/competition/register`, `/dashboard/student`, `/dashboard/admin`, `/quizzes`, `/courses`), and **Contact** (`+91 93728 25114`, `support@arched.in`, `Tirupati, Andhra Pradesh, India`, with circular SVG buttons for WhatsApp and LinkedIn).
    - Clean bottom bar: `© 2026 Arched. All rights reserved.` and Tirupati coordinate label.
    - Completely removed all unnecessary legal clutter, governance links, and cluttered admin email tags.
- **Competitions Page Elevation (`https://architecturecompetitions.com/` / Buildner Standard)**:
  - Redesigned `app/competition/page.tsx` with international architectural competition standards:
    - **Header & Metrics Strip**: Total Prize Pool (₹3,90,000 INR), Complimentary Entry (Waived), 100% Blind Anonymity, All Architecture Colleges.
    - **Featured Flagship Challenge Spotlight**: Split layout with high-res photography, status pills (`REGISTRATION OPEN`, `STUDENT EDITION 2026`), prize breakdown (1st ₹50,000, 2nd ₹30,000, 3rd ₹20,000 + Trophy), and 4-step timeline strip (Registration, Submissions, Jury Review, Results).
    - **Unstop Search Bar & Filter Chips**: Real-time searching across briefs, categories (All, Live, Coming Soon, Design, Urbanism, Interior, Innovation).
    - **Eminent Jury & Advisory Council**: Showcase of distinguished professors and studio principals from CEPT University, SPA Delhi, Sir J.J. College of Architecture, and Harvard GSD / Studio Arched with portraits and disciplines.
    - **4-Pillar Standardized Evaluation Matrix**: Spatial Concept (25%), Tectonic Feasibility (25%), Bioclimatic Strategy (25%), and Drawing Precision (25%).
    - **Blind Submission Protocol**: Explaining candidate codes (`ARCH-2026-XXXX`) and zero entry fees.
- **Complete Page-by-Page Audit & Polish**:
  - Harmonized `about`, `what-we-do`, `courses`, `quizzes`, `guest-lecture`, `social-interface`, `metaverse`, `contact`, `dashboard/jury`, `dashboard/student`, and `dashboard/admin`.
  - Migrated any remaining stone/terracotta palette to the crisp white canvas with charcoal accents (`#2c3e50`, `#1a1a1a`), 1px borders (`#e0e4e8`), and muted slate (`#7f8c8d`).
  - Removed all mock student names ("Karthik Verma") from public UI components.
  - Strictly zero shadows (`box-shadow: none !important`) and zero emojis across all pages.
- **Verification & Testing**:
  - Full production build: 25/25 Next.js routes compiled cleanly with 0 errors.
  - Production server running on `http://localhost:3000`.
  - Automated integration test suite: **42/42 tests PASSED (100% success rate)**.


---

## [Zero Dummy Data, OpenStreetMap Engine, Student Google Auth Gate & Footer Streamline] — 2026-11-03
### Added & Updated
- **Zero Dummy Data Everywhere**:
  - Eliminated mock/fake student participants from Admin Portal and database seed stores. The system starts with 0 registrations and dynamically populates in real-time as users submit registrations.
  - Social interface, courses, and admin stats updated to show genuine candidate states.
- **Student Portal Access Gate & Google Authentication**:
  - Protected [`/dashboard/student`](file:///c:/Users/poorn/OneDrive/Desktop/Arched/app/dashboard/student/page.tsx) so it can only be accessed by registered students or authenticated users.
  - Integrated **Continue with Google** via Neon Managed Better Auth (`https://ep-green-darkness-az4sl6f1.neonauth.c-3.ap-southeast-1.aws.neon.tech/neondb/auth`).
  - Added instant candidate code/email verification lookup.
  - Automatically saves registration session on completion of `/competition/register` so students seamlessly transition into their portal.
- **OpenStreetMap Standard Tile Integration**:
  - Replaced CartoDB tiles with 100% open-source standard **OpenStreetMap (OSM)** tiles (`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`).
  - Completely eliminates any API key prompts or external key dependencies.
- **Footer Streamlining**:
  - Removed Governance column (Terms, Privacy, Refund, Domain) and the bottom bar (Copyright and Admin link) as explicitly requested.
- **Verification**:
  - Full automated integration test suite: **42/42 PASSED (100% success rate)**.

## [Rebrand to Arched, Golden Ratio Logo, Admin Geolocation Dashboard, Unstop Competitions & Fast Registration] — 2026-11-03
### Added & Updated
- **Permanent Rebranding to Arched (`arched.in`)**:
  - Removed all occurrences of the old name ("The Ar Achiever", "thearachiever.com").
  - Removed "Powered by TST", "TST", and "Thanneeru Software Technologies" across headers, footers, about pages, contact forms, legal terms, and metadata.
  - Standardized domain to `arched.in` and official communications to `support@arched.in` and `info@arched.in`.
- **Golden Ratio Architectural Logo (`components/ArchedLogo.tsx`)**:
  - Designed vector SVG mark based on the Golden Ratio ($\Phi \approx 1.618$).
  - Constructed with logarithmic golden spiral, nested proportion arches ($1:1.618$), structural baseline divider, and keystone focus coordinates.
  - Integrated into Header, Footer, Admin Portal, Registration Hero, and Auth screens.
- **Charcoal Architectural Theme & Pure White Background**:
  - Transitioned theme to crisp white canvas (`#ffffff`), dark charcoal / slate (`#2c3e50`, `#1a1a1a`), subtle border dividers (`#e0e4e8`), and muted slate (`#7f8c8d`).
  - Removed unnecessary clutter and tags on top of headings and in the footer.
  - Strictly zero shadows and zero emojis maintained across all components.
- **Competitions Page (Unstop Aesthetic)**:
  - Redesigned `app/competition/page.tsx` with Unstop layout: search bar, category tabs (All, Live, Coming Soon, Design, Urbanism, Interior), eligibility tags, team size, prize pool citations, and live status pills.
  - Replaced all dummy dates with "Coming Soon".
- **Simplified Fast Registration Page**:
  - Redesigned `app/competition/register/page.tsx` with split-screen layout.
  - Removed complex fee structures and payment tiers (complimentary open access).
  - Integrated full COA approved colleges `<datalist id="approved-colleges">` with 150+ architectural institutions across India.
  - Implemented HTML5 Geolocation with "Auto-Detect My Location" button capturing latitude and longitude.
  - Direct PostgreSQL submission via `/api/v1/competitions/register`, generating unique registration codes (`ARCH-2026-XXXX`).
- **Admin Dashboard & Participant Origin Map**:
  - Created `/dashboard/admin` and alias `/admin` protected by Email `support@arched.in` and PIN `7777`.
  - Leaflet.js interactive map (`#adminMap`) with CartoDB Positron architectural tiles and crimson circle markers (`#a10f0f`) plotting registered candidates.
  - 3-Column Stats Grid: Total Registrations, Age Demographics (Under 18, 18-22, 23-28, 29+), and Top Colleges with exact student counts.
  - Registered Participants Table with "View GPS" Google Maps search links and "Cancel" delete action connected to PostgreSQL API (`/api/v1/admin/registrations`).
- **Neon Managed Better Auth & Google OAuth**:
  - Configured endpoint `https://ep-green-darkness-az4sl6f1.neonauth.c-3.ap-southeast-1.aws.neon.tech/neondb/auth`.
  - Verified real user sign-up and session retrieval via test script (`test-neon-auth.js`).
- **Testing & Verification**:
  - Automated integration test suite (`test-suite.ps1`): **42/42 tests PASSED (100% success rate)**.

## [Ar Achiever / Lovable Visual Style Alignment & Hero Video Background] — 2026-11-03
### Added
- **Visual Design System Alignment**: Scraped and extracted the complete visual aesthetic of `https://arachievers.lovable.app/`:
  - **Color Tokens**: Architectural plaster cream `--paper: #F5F1EA`, warm charcoal `--ink: #1C1917`, terracotta/camel `--bronze: #B87B4E`, soft camel `--bronze-soft: #CBB29C`, subtle hairline dividers `--rule: #DDD6CC`.
  - **Typography**: Display serif `Cormorant Garamond` (300/400/500/600), body `Inter`, technical eyebrows and monospaced codes `JetBrains Mono`.
  - **Pattern Blueprints**: Implemented `.pattern-blueprint`, `.dark-pattern-blueprint`, `.pattern-dots`, `.pattern-diagonal`, and radial gradient mask overlays `.mask-fade-edges`.
  - **Strict Rules Maintained**: Absolutely zero box-shadows, drop-shadows, or text-shadows anywhere (`box-shadow: none !important`), and zero emojis across all pages.
- **Hero Video Background**:
  - Embedded YouTube video `https://youtu.be/uySn1BZiWWs?si=cV2l85SLqiukGzUM` (ID `uySn1BZiWWs`) as the background of the Hero section.
  - Implemented muted autoplay, seamless looping, custom dark gradient overlays, blueprint grid mask, and an interactive mute/unmute audio button.
  - Added geographic coordinates indicator `N 13.628° • E 79.419°` (Tirupati, AP).
- **Homepage Section Implementations**:
  - **"Now Open" Marquee Ticker**: Continuous animated ticker highlighting active competitions, Archiverse cohort, and guest lectures.
  - **Four Key Metrics Bar**: Dots pattern backdrop with 40+ countries, 12k submissions, 60 jurors, and 24/7 Archiverse access.
  - **Four Instruments Grid**: Signature hover interaction where cards slide up in deep ink `#1C1917` with light text and bronze arrow transitions.
  - **Cinematic Archiverse Quote Section**: *"Inhabit the drawing. Walk the section. Test the light before it is built."*
  - **Guiding Voices / Theorists Carousel**: Interactive quotes by Le Corbusier, Norman Foster, Nari Gandhi, B.V. Doshi, and Raj Rewal (*"A building must absorb the essence of the place in which it stands."*).
  - **Studio Pipeline Workflow**: 5-step studio process (*Client Needs, Direction, Design, Develop, Value*) paired with architectural foam-core massing study maquette.
  - **Dark CTA Banner**: *"Bring your practice into a global studio."* with bronze register button.
- **Platform-wide Harmonization (All 14 SRS Pages + 3 Dashboards)**:
  - Header (`components/Header.tsx`): Light paper cream bar with `Ar Achiever / The ArchEd` branding, top-level navigation, and registration action button.
  - Footer (`components/Footer.tsx`): Dark ink background (`#151412`), subtle architectural backdrop, 5 organized columns, legal links, and copyright attribution.
  - Sidebar (`components/AllServicesSidebar.tsx`): Cream panel with clean border, active tab indicators, and student portal shortcut.
  - All pages (`/about`, `/what-we-do`, `/competition`, `/competition/register`, `/metaverse`, `/quizzes`, `/courses`, `/guest-lecture`, `/social-interface`, `/contact`, `/terms`, `/privacy-policy`, `/refund-policy`, `/auth`, and 3 dashboards) updated to match the paper cream & dark ink palette.
- **Enhanced Routing & Aliases**:
  - Added direct rewrites for `/archiverse` -> `/metaverse`, `/guest-lectures` -> `/guest-lecture`, `/social` -> `/social-interface`, `/privacy` -> `/privacy-policy`, `/refund` -> `/refund-policy` alongside legacy `.html` and `.php` aliases.
- **Automated Verification**:
  - Next.js production build (`next build`) succeeded with 24/24 static pages generated with 0 errors.
  - Integration test suite (`test-suite.ps1`) executed against local server: **40/40 tests PASSED (100% success rate)**.

---

## [Initial Architecture, Full Web Platform Implementation & Test Suite] — 2026-11-03
### Added
- **SRS Ingestion**: Completed thorough architectural review of the 18-page Software Requirements Specification (`ArchEd.pdf`). Extracted business entities, corporate details (Tirupati, AP, TST partnership), pedagogical philosophies (Corbusier, Foster, Gandhi, Doshi, Rewal), and full 14-page inventory.
- **Neon Agent Skills**: Installed Neon agent skills into Antigravity agent configuration via `neon skills -y -a antigravity`.
- **Neon Auth Documentation**: Acquired official Neon Auth skill documentation (`NEON_AUTH_SKILL.md`) and Managed Better Auth reference (`NEON_AUTH_MANAGED_AUTH.md`).
- **Global Tooling**: Installed Neon CLI `neon@8.17.1` globally.
- **Permanent Project Memory**: Created `AGENTS.md`, `PROJECT_CONTEXT.md`, `IMPLEMENTATION_STATUS.md`, `CHANGELOG.md`, and technical documentation under `docs/`.
- **Strict UI/UX Rules Enforced**: Zero shadows and zero emojis.
- **Full 14-Page SRS Implementation & 3 Dashboards**:
  - Competitions, Quizzes, Archiverse, Courses, Guest Lectures, Social Interface, Legal policies, and Role-Based Dashboards (Student, Jury, Admin).
- **Database Architecture**: Defined complete relational schema with Drizzle ORM in `lib/db/schema.ts` covering 10 entities.
