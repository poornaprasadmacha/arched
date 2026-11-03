# AGENTS.md — Permanent Workspace Instructions for Google Antigravity

This document is the permanent operating standard for **The ArchEd** codebase. Every AI agent (including Google Antigravity and subagents) assigned to this workspace must strictly follow these instructions across all sessions.

---

## 1. Mandatory Pre-Execution Protocol
Before proposing, writing, or modifying any code or architecture:
1. **Read `PROJECT_CONTEXT.md`**: Understand the full business domain, architectural philosophy, technological stack, user roles, and constraints.
2. **Read `IMPLEMENTATION_STATUS.md`**: Confirm the verified state of every module. Never assume an unlisted or listed feature is complete without reviewing its status.
3. **Read Relevant Technical Documentation**:
   - `docs/architecture.md`
   - `docs/database-schema.md`
   - `docs/authentication.md`
   - `docs/api-documentation.md`
   - `docs/deployment.md`
   - `docs/security.md`
   - `docs/decisions/`
4. **Inspect Existing Code**: Never rewrite existing working modules, frameworks, or dependencies unnecessarily. Reuse established package managers, types, utilities, and components.

---

## 2. Architectural Preservation & Quality Rules
- **Preserve Existing Architecture**: Maintain modular boundaries (`components/`, `app/`, `features/`, `lib/`, `services/`, `database/`, `hooks/`, `types/`, `schemas/`, `api/`).
- **Never Break Implemented Functionality**: Maintain backward compatibility and route aliases (e.g. legacy `/index.html`, `/compitition/register.php`, etc.).
- **Strictly No Fake Implementations**: Never create dummy/placeholder non-working interactive elements. If an upstream service or credential is pending, implement the functional UI with a clear status and document remaining integration requirements.
- **Data Integrity**: Never execute destructive operations on databases. Use structured migrations. Never store large binary assets directly in PostgreSQL; store metadata and cloud references.

---

## 3. UI/UX Design System Rules (STRICT ENFORCEMENT)
The ArchEd adheres to a **premium architectural editorial design** aesthetic. The following two rules are absolute:

> [!CAUTION]
> **NO SHADOWS ANYWHERE**
> Strictly avoid:
> - Box shadows (`box-shadow`, `shadow`, `shadow-sm`, `shadow-md`, `shadow-lg`, etc.)
> - Drop shadows (`drop-shadow-*`)
> - Text shadows (`text-shadow`)
> - Shadow-based elevation on cards, buttons, modals, or navigation bars.
> Use **clean borders** (1px solid neutral tones), subtle contrast background fills, and generous whitespace for depth and hierarchy.

> [!CAUTION]
> **NO EMOJIS ANYWHERE**
> Strictly forbid emojis in headings, subheadings, buttons, badge labels, notification banners, alerts, or any interface elements.
> Use professional, minimalist **Lucide React** or custom SVG icons.

### Architectural Aesthetics
- **Whitespace**: Generous, intentional architectural spacing.
- **Typography**: Refined typographic hierarchy (e.g., editorial serif headers paired with precise grotesque sans-serif body).
- **Grids & Borders**: Crisp geometric grid layouts with subtle 1px border dividers (`border-neutral-200` light / `border-neutral-800` dark).
- **Curated Imagery**: High-resolution, authentic architectural photography (modern structures, spatial interiors, landscape urbanism, technical drawings). Always supply descriptive `alt` text. Never use blurry, low-resolution, or watermarked placeholders.

---

## 4. Authentication & Security Directives
- **Neon Auth (Managed Better Auth)** is the sole primary authentication provider. Do not introduce Clerk, Supabase Auth, Firebase Auth, or external password stores.
- Application authorization is strictly enforced on the server. Never rely on frontend UI hiding for security.
- Role categories:
  1. `Guest` (unauthenticated read-only exploratory)
  2. `Registered Student / Understudy` (authenticated portfolio, competitions, quizzes, courses, community)
  3. `Jury / Evaluator` (assigned competitions, anonymized submissions, evaluation scoring)
  4. `System Administrator` (full administrative oversight, user roles, CMS, deadlines, results)
- **Role Escalation Protection**: Students must never be able to self-assign `jury` or `admin` roles.
- Competition submissions remain strictly confidential prior to designated reveal dates.

---

## 5. Post-Task Documentation Protocol
After completing every significant modification or task:
1. Update `PROJECT_CONTEXT.md` if business assumptions, routes, or configurations changed.
2. Update `IMPLEMENTATION_STATUS.md` with accurate verified statuses (`Not Started`, `In Progress`, `Implemented`, `Tested`, `Needs Improvement`, `Blocked`). Never mark a feature as completed without running real tests.
3. Update `CHANGELOG.md` with date, modified modules, files, added functionality, bug fixes, database changes, and test outcomes.
4. Record major architectural decisions in `docs/decisions/`.
