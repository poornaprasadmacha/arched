import { createNeonAuth } from "@neon/auth/next/server";

export const auth = createNeonAuth({
  baseUrl:
    process.env.NEON_AUTH_BASE_URL ||
    "https://ep-green-darkness-az4sl6f1.neonauth.c-3.ap-southeast-1.aws.neon.tech/neondb/auth",
  cookies: {
    secret:
      process.env.NEON_AUTH_COOKIE_SECRET ||
      "arched-super-secure-neon-auth-cookie-secret-32-chars-min",
  },
});
