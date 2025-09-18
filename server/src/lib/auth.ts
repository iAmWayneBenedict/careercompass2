import { envConfig } from "@/config";
import db from "@data/db";
import * as schema from "@data/schema";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

export const auth = betterAuth({
  appName: "CareerCompass",

  database: drizzleAdapter(db, {
    provider: "pg", // or "mysql", "sqlite"
    // usePlural: true,
    schema,
  }),

  trustedOrigins: ["http://localhost:5173"],

  advanced: {
    defaultCookieAttributes: {
      sameSite: "none",
      secure: true,
    },
  },

  socialProviders: {
    google: {
      clientId: envConfig.GOOGLE_CLIENT_ID!,
      clientSecret: envConfig.GOOGLE_CLIENT_SECRET!,
    },
  },

  emailVerification: {
    autoSignInAfterVerification: true,
  },

  //   custom table and custom fields
  user: {
    modelName: "users",
    fields: {
      emailVerified: "email_verified",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  session: {
    modelName: "sessions",
    fields: {
      userId: "user_id",
      ipAddress: "ip_address",
      userAgent: "user_agent",
      expiresAt: "expires_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },

  account: {
    modelName: "accounts",
    fields: {
      accountId: "account_id",
      providerId: "provider_id",
      accessToken: "access_token",
      refreshToken: "refresh_token",
      accessTokenExpiresAt: "access_token_expires_at",
      refreshTokenExpiresAt: "refresh_token_expires_at",
      idToken: "id_token",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  verification: {
    modelName: "verifications",
    fields: {
      expiresAt: "expires_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },

  // RATE LIMIT
  rateLimit: {
    enabled: true,
  },

  // LOGGER
  logger: {
    disabled: false,
    level: "error",
    log: (level, message, ...args) => {
      // Custom logging implementation
      console.log(`[${level}] ${message}`, ...args);
    },
  },
});
