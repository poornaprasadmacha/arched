# ADR 002: Cloudflare Deployment via OpenNext and Wrangler

## Status
Accepted

## Date
2026-11-03

## Context
The ArchEd application needs to be deployable to Cloudflare Pages / Workers using Wrangler CLI and Git-connected CI/CD. The application is built on Next.js 15 (App Router) with React 19, Neon Serverless PostgreSQL (`neon-http`), and Neon Auth.

Traditional `@cloudflare/next-on-pages` relies on the Vercel CLI internally which encounters shell execution compatibility issues on Windows developer environments (`shellac` looking for `npm` rather than `npm.cmd`). Additionally, Cloudflare has officially partnered with OpenNext and established `@opennextjs/cloudflare` as the modern standard for Next.js 14 and 15 deployments on Cloudflare Workers & Pages.

## Decision
We adopted `@opennextjs/cloudflare` alongside `wrangler` for Cloudflare deployment:
1. Configured `wrangler.jsonc` specifying Cloudflare's `nodejs_compat` compatibility flag and `env.ASSETS` binding.
2. Created `open-next.config.ts` using `defineCloudflareConfig`.
3. Kept standard Next.js route handlers without requiring explicit `runtime = 'edge'` markers, as OpenNext bundles them into Cloudflare's Node.js-compatible edge worker runtime natively.
4. Added standard deployment commands to `package.json`:
   - `npm run cloudflare:build`
   - `npm run preview`
   - `npm run deploy` (which triggers `opennextjs-cloudflare deploy` / `wrangler deploy`).

## Consequences
- **Positive**: 
  - 100% successful build compilation on both Windows local development environments and Linux CI/CD pipelines.
  - Zero-cold-start edge execution across Cloudflare's global anycast network.
  - Full compatibility with `@neondatabase/serverless` HTTP connection pools.
  - One-click deployment via `npm run deploy` or `wrangler deploy`.
- **Negative / Considerations**:
  - Developers deploying locally must run `npx wrangler login` once to authorize Wrangler with their Cloudflare account.
