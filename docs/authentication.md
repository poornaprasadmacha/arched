# Authentication & Authorization Architecture — The ArchEd

## 1. Primary Identity Provider: Neon Auth
The ArchEd relies strictly on **Neon Auth** (Managed Better Auth).
No secondary identity providers (Clerk, Supabase Auth, Firebase Auth) are used.

## 2. Authentication Flow & Components
- **Neon Configuration**: Declared via `neon.ts`:
  ```typescript
  import { defineConfig } from "@neon/config/v1";
  export default defineConfig({
    auth: true,
  });
  ```
- **Server Handler**: In Next.js App Router, the proxy route `app/api/auth/[...path]/route.ts` forwards authentication requests to Managed Better Auth:
  ```typescript
  import { auth } from "@/lib/auth/server";
  export const { GET, POST, PUT, DELETE, PATCH } = auth.handler();
  ```
- **Client SDK**: Utilizes `@neon/auth/next` or `@neon/auth`:
  ```typescript
  import { createAuthClient } from "@neon/auth/next";
  export const authClient = createAuthClient();
  ```

## 3. Server-Side Session Validation & RBAC
- Protected routes and API endpoints validate sessions via:
  ```typescript
  const { data: session } = await auth.getSession();
  if (!session?.user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }
  ```
- Application roles are resolved against `user_profiles.role`.
- Administrative privileges are restricted to `role === 'admin'`. Newly registered students default to `role = 'student'` and cannot elevate privileges.
- Jury members have blinded access to assigned competition submissions.
