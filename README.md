# ArchEd (arched.in)

> **Precision Architectural Education & Spatial Systems**  
> An educational technology ecosystem engineered for architecture students, researchers, and emerging studio practitioners.

[![Next.js 15](https://img.shields.io/badge/Next.js-15.1.7-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/Neon-PostgreSQL-00E599)](https://neon.tech/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38BDF8)](https://tailwindcss.com/)

---

## 🏛️ Project Overview
**ArchEd** ([arched.in](https://arched.in)) is an educational platform designed to bridge academic inquiry with professional studio practice:
- **Architectural Competitions**: Formatted with international Buildner ([architecturecompetitions.com](https://architecturecompetitions.com/)) & Unstop design standards, featuring 100% blind anonymous evaluations, cash prize funds, and timeline tracking.
- **Fast Registration**: Complimentary open access for Council of Architecture (COA) recognized university students with HTML5 Geolocation detection.
- **Admin Dashboard**: Executive administration console with OpenStreetMap geolocation tracking pins, age demographics, and college distribution.
- **Archiverse 3D**: Browser-native WebGL and Three.js spatial stage for procedural massing, axonometric projections, and daylighting angles.
- **Timed Architectural Quizzes**: Competitive scenarios with server-side grading, real-time leaderboard, and theoretical breakdowns.
- **Distance Courses & Masterclasses**: Technical curricula with video modules, CAD drafting standards, and certified completion.
- **Social Interface**: Peer critique stage and high-resolution portfolio publishing.

---

## 🎨 Architectural Design System
- **Strictly No Shadows**: 100% flat depth achieved purely via 1px precision hairline borders (`#dbe2e8`), subtle contrast background fills, and generous architectural whitespace.
- **Strictly No Emojis in UI**: Minimalist, professional Lucide React SVG iconography.
- **Palette**: Deep Architectural Charcoal (`#383a3b`, `#1a1a1a`), Signature Steel Blue (`#155995`), and a continuous gradual silver polish background sheen (`#ffffff` &harr; `#edf1f6` &harr; `#e2e8f0`).

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 18+ or 20+
- npm or pnpm

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/poornaprasadmacha/arched.git
cd arched

# Install dependencies
npm install
```

### 3. Environment Variables
Create a `.env.local` file in the root directory:
```env
# Neon PostgreSQL Connection String
DATABASE_URL="postgresql://neondb_owner:npg_gNl9QJ5sXyqC@ep-green-darkness-az4sl6f1.neonauth.c-3.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"

# Neon Auth (Managed Better Auth)
BETTER_AUTH_URL="http://localhost:3000"
NEON_AUTH_BASE_URL="https://ep-green-darkness-az4sl6f1.neonauth.c-3.ap-southeast-1.aws.neon.tech/neondb/auth"
```

### 4. Running the Application
```bash
# Start development server
npm run dev

# Or build and run production server
npm run build
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔒 Portals & Access Credentials
- **Public Portal**: [http://localhost:3000](http://localhost:3000)
- **Competition Registration**: [http://localhost:3000/competition/register](http://localhost:3000/competition/register)
- **Student Dashboard**: [http://localhost:3000/dashboard/student](http://localhost:3000/dashboard/student) (Gated via Google OAuth or candidate registration code)
- **Jury Console**: [http://localhost:3000/dashboard/jury](http://localhost:3000/dashboard/jury) (Blind review token evaluation)
- **Admin Dashboard**: [http://localhost:3000/dashboard/admin](http://localhost:3000/dashboard/admin) (Email: `support@arched.in`, PIN: `7777`)

---

## 🧪 Testing Suite
Run the automated integration test suite:
```powershell
powershell -ExecutionPolicy Bypass -File .\test-suite.ps1
```
Tests all 14 SRS pages, modern aliases, legacy `.html`/`.php` routes, and backend REST APIs (42/42 Passing).

---

## 📄 License & Governance
© 2026 ArchEd ([arched.in](https://arched.in)). All rights reserved.  
Tirupati, Andhra Pradesh, India.
