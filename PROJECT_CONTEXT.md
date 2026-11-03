# PROJECT CONTEXT — Arched (arched.in)

## 1. Project Overview & Institutional Identity
- **Product Name**: Arched
- **Primary Domain**: https://arched.in
- **Organization**: Arched
- **Corporate Address**:
  20-2-472/9F, Revenue Ward No. 20,
  Korlagunta Main Road,
  Tirupati, Andhra Pradesh - 517501, India.
- **Support Contact**:
  - Phone: +91 93728 25114
  - Email: support@arched.in / info@arched.in

Arched is an educational technology ecosystem specifically engineered for Architecture students and spatial design disciplines. The platform unifies architectural competitions, assessment engines, 3D/virtual spatial environments (Archiverse), professional distance learning, guest lectures, an interactive Admin Origin Tracking Map, and a peer portfolio community.

---

## 2. Platform Vision, Mission & Pedagogical Ontology
### Vision
Empowering architecture students through creativity, sustainability, diversity, and innovation by connecting traditional spatial thinking with digital and emerging technologies.

### Mission
- Foster critical thinking, architectural inquiry, and ethical design.
- Address pressing macroeconomic and planetary imperatives, including global warming, carbon-neutral construction, and climate-responsive architecture.
- Offer practical, portfolio-driven education that bridges the gap between academic curricula and professional practice.

### Architectural Philosophies
1. **Le Corbusier** — Mastery of forms assembled in the light; high-fidelity visual and spatial rendering.
2. **Norman Foster** — Future-oriented design informed by historical awareness and technological progress.
3. **Nari Gandhi** — Simplicity as the ultimate sophistication; minimalist, intuitive, uncluttered UI/UX.
4. **B.V. Doshi** — Architecture as a living state of being; spatial immersion through virtual worlds (Archiverse).
5. **Raj Rewal** — Contextual design absorbing geographical and cultural essence; environmental responsiveness.

### Five-Step Organizational Workflow
1. **01 Client Needs**: Identifying constraints, brief analysis, contextual parameters.
2. **02 Direction**: Vectorizing design parameters and conceptual development.
3. **03 Design**: Creative synthesis of form, function, and spatial aesthetics.
4. **04 Develop**: Technical drafting, working drawings, BIM, structural coordination.
5. **05 Value**: Assessment of societal, environmental, and spatial community impact.

---

## 3. User Roles & Permission Model
The system enforces strict server-side Role-Based Access Control (RBAC):

| Role | Permissions & Functional Scope |
|---|---|
| **Guest (Unauthenticated)** | Public page browsing (`/`, `/about`, `/what-we-do`, `/competition`, `/courses`, `/guest-lecture`, legal pages), contact submission, initiate authentication. Cannot view private submissions, test scores, or internal dashboards. |
| **Registered Student (Understudy)** | Profile and portfolio management, competition registrations, drawing submissions (A2 PDF format), quiz participation, score history, course enrollment, video learning, progress tracking, certificates, community posts, likes, comments, study groups. Cannot self-assign jury/admin privileges. |
| **Jury / Evaluator** | Access to assigned competition submissions only; review anonymized candidate drawings (plans, elevations, sections); submit rubric-based scores and architectural critiques; jury dashboard. Blind review enforced until reveal schedules. |
| **System Administrator** | Executive administration accessible via `support@arched.in` and PIN `7777`. Interactive Origin Map with Leaflet and GPS pins, demographic age breakdown, student count per college, user management, and registration cancellation. |

---

## 4. Complete Page Inventory (14 SRS Pages + Dashboards)
Every legacy URL is supported alongside clean modern routes:

1. **Homepage** (`/` & `/index.html`): Editorial architectural hero with YouTube background video (`uySn1BZiWWs`), audio toggle, Tirupati coordinates, vision & mission, four core instruments, theorists quotes carousel, studio workflow, CTA.
2. **About Us** (`/about` & `/about.html`): Institutional manifesto, 5-stage workflow, architectural philosophies (Corbusier, Foster, Gandhi, Doshi, Rewal).
3. **What We Do** (`/what-we-do` & `/what-we-do.html`): Directory of core services (Competitions, Quizzes, Archiverse, Courses, Guest Lectures, Social Interface).
4. **Contact** (`/contact` & `/contact.html`): Corporate address in Tirupati, phone, email, asynchronous validated contact submission form writing to database.
5. **Competition Hub (Unstop Experience)** (`/competition` & `/competition.html`): Unstop-style catalog with live status pills, category filters (Design, Urbanism, Interior, Innovation), search bar, prize pool, and complimentary access.
6. **Competition Registration** (`/competition/register` & `/compitition/register.php`): Split-layout fast registration with approved COA colleges datalist, HTML5 Geolocation Auto-Detection (`lat`/`lng`), direct PostgreSQL write, and no fee structure.
7. **Quizzes** (`/quizzes` & `/quizzes.html`): Interactive timed architectural assessments, multi-format questions, server-side scoring, instant feedback, real-time leaderboard, student history.
8. **Archiverse** (`/archiverse`, `/metaverse` & `/metaverse.html`): Virtual architecture environment and 3D spatial stage powered by WebGL/Three.js, 3D model visualization (glTF/GLB/OBJ), spatial portfolio presentation.
9. **Courses** (`/courses` & `/courses.html`): Distance discovery learning platform, categorised course catalog, syllabus, video lessons, progress tracking, certificate generation.
10. **Guest Lectures** (`/guest-lectures`, `/guest-lecture` & `/guest-lecture.html`): Expert insights gallery, visiting speaker profiles, recorded sessions, live webinar schedules, calendar reminders.
11. **Social Interface** (`/social`, `/social-interface` & `/social-interface.html`): Architectural student community hub, digital portfolio showcase, project showcases, architectural critiques, likes, comments, study groups.
12. **Terms and Conditions** (`/terms` & `/terms.html`): Platform usage, IP rights over submitted architectural designs, competition guidelines, student code of conduct.
13. **Privacy Policy** (`/privacy`, `/privacy-policy` & `/privacy_policy.html`): Data governance, telemetry, cookie tracking disclosure, student privacy rights under India's DPDP and GDPR.
14. **Returns and Refund Policy** (`/refund`, `/refund-policy` & `/refund_policy.html`): Commercial terms, competition fee policies, course refund conditions.
15. **Dashboards**:
    - `/dashboard/student`: Enrolled courses, competition submissions, quiz attempts, portfolio.
    - `/dashboard/jury`: Assigned competitions, submission evaluation queue, scoring interface.
    - `/dashboard/admin` & `/admin`: Executive administration console protected by `support@arched.in` and PIN `7777`. Features Leaflet origin tracking map, college registrations distribution, age demographics, and participant cancellation.

---

## 5. UI/UX Design System (Charcoal Architectural Palette on Crisp White Canvas)
- **Brand Identity & Logo**: Minimalist architectural vector emblem designed according to the **Golden Ratio** ($\Phi \approx 1.618$). Integrates a logarithmic golden spiral, nested proportion arches ($1 : 1.618$), and keystone coordinate focal points with clean modernist typography `arched.in`.
- **Ceeras.in Footer DNA**: Structured following `ceeras.in` design: Left brand logo and slogan, 3 neat columns (Quick Links, Support, Contact with telephone `+91 93728 25114`, email `support@arched.in`, location `Tirupati, Andhra Pradesh, India`, and WhatsApp/LinkedIn SVGs), and clean bottom bar (`© 2026 Arched. All rights reserved.`). Zero legal clutter.
- **Competitions Hub (Buildner & Unstop Standard)**: Inspired by `https://architecturecompetitions.com/` (Buildner) and Unstop. Features a Flagship Challenge spotlight, prize fund breakdown, 4-step timeline, search bar, filter chips, curated Jury panel showcase (CEPT, SPA Delhi, JJ College, Harvard GSD), and a 4-pillar evaluation matrix.
- **NO SHADOWS ANYWHERE**: 100% strict prohibition of box-shadows, drop-shadows, and text-shadows (`box-shadow: none !important; drop-shadow: none !important; text-shadow: none !important;`). Depth is achieved strictly through delicate 1px hairline border lines (`#e0e4e8`), crisp contrast, and generous negative space.
- **NO EMOJIS ANYWHERE**: Emojis are strictly forbidden across all text, headers, badges, and UI elements. Professional Lucide icons are used exclusively.
- **Color Tokens**:
  - Background Canvas: `#ffffff` (pure white canvas) and `#f4f5f7` / `#fafbfc` (subtle slate grey surface).
  - Primary Charcoal / Dark Slate: `#2c3e50` (structural headers, action buttons, card borders).
  - Dark Charcoal Text: `#1a1a1a` / `#333333` (high readability typographic body).
  - Muted Slate: `#7f8c8d` (subtle labels, metadata, captions).
  - Border Hairline: `#e0e4e8` (architectural 1px dividers).
  - Accent Crimson: `#a10f0f` (geolocation map pins, critical alerts).
- **Admin Geolocation Tracking**: Powered by Leaflet.js with standard open-source OpenStreetMap (OSM) tiles (100% free, requiring 0 API keys), plotting participants' origin coordinates captured via HTML5 GPS detection. Displays student counts per institution, age demographics, and participant deletion. Zero dummy data.
- **Student Dashboard Gate**: Gated behind candidate verification and Neon Auth (Google OAuth); automatically restores registered student sessions without mock data.
- **Hero Visual Section**: Embedded YouTube architectural background (`uySn1BZiWWs`) with autoplay, looping, charcoal overlays, interactive audio control, and Tirupati geographic coordinates (`N 13.628° • E 79.419°`).
- **Imagery**: Authentic high-resolution architectural photography, blueprints, structural maquettes, and spatial designs with meaningful `alt` text.

---

## 6. Technology Stack
- **Framework**: Next.js (App Router), React, TypeScript.
- **Styling**: Tailwind CSS (customized with 0px shadows, precision borders).
- **Icons**: Lucide React.
- **Database**: Neon Serverless PostgreSQL with Drizzle ORM.
- **Authentication**: Neon Auth (Managed Better Auth with Google OAuth shared keys and email/password).
- **3D / Virtual Environments**: Three.js / WebGL.
- **Maps**: Leaflet.js with standard OpenStreetMap (OSM) tiles for participant origin tracking (zero API key prompts).
- **Validation**: Zod schema validation for all frontend and API inputs.
- **API Architecture**: RESTful API endpoints under `/api/v1/...` for web and administrative systems.
- **Edge Deployment**: Cloudflare Workers & Pages via `@opennextjs/cloudflare` and `wrangler` CLI (`wrangler deploy` / `npm run deploy`). Zero cold starts, global edge caching, and asset binding.
