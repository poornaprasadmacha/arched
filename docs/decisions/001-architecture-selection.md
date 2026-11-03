# ADR 001: Technology Stack & Full-Stack Architecture

## Status
Accepted

## Context
The ArchEd requires a production-grade, highly responsive, educational technology platform serving architecture students in India and globally. The SRS dictates 14 distinct pages, an interactive assessment engine, competition registration and drawing submission pipelines, a virtual 3D environment (Archiverse), courses, guest lectures, and a social interface.

## Decision
1. **Next.js 15+ (App Router) with TypeScript & React 19**: Provides superior SSR/SSG for marketing pages, fast API routes under `/api/v1/*`, and seamless integration with modern React patterns.
2. **Neon Serverless PostgreSQL with Drizzle ORM**: Ensures rapid database queries, declarative migrations, connection pooling, and branch isolation.
3. **Neon Auth (Managed Better Auth)**: Managed identity living inside `neon_auth` with branch isolation and zero separate credential tables.
4. **Three.js for Archiverse**: Browser-native WebGL spatial visualization without requiring external plugins.
5. **Strict Design Directives**: Zero box-shadows / drop-shadows / text-shadows, zero emojis, high-contrast architectural typography, and 1px precision geometric borders.

## Consequences
- High maintainability, extreme performance, and full compliance with the SRS and user directives.
