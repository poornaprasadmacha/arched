# Deployment & Environment Configuration — The ArchEd

## 1. Environment Variables Configuration
The application requires the following environment variables. Copy `.env.example` to `.env.local` for local development.

```env
# Neon Database Connection
DATABASE_URL=postgresql://user:password@ep-xyz.us-east-2.aws.neon.tech/neondb?sslmode=require

# Neon Auth (Managed Better Auth)
NEON_AUTH_BASE_URL=https://oauth2.neon.tech/rough-flower-50299411
NEON_AUTH_COOKIE_SECRET=at-least-32-character-secret-generated-randomly

# Application Config
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development
```

## 2. Neon Linking & Services Deployment
To link the Neon project and deploy services:
```bash
neon init -y --org-id org-orange-recipe-44246473 --project-id rough-flower-50299411 --branch production --services auth --no-agent-setup
neon config plan
neon deploy
```

## 3. Production Build & Execution
```bash
npm install
npm run build
npm start
```
