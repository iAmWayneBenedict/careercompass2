import { pgTable, text, timestamp, pgPolicy } from "drizzle-orm/pg-core";

export const verifications = pgTable("verifications", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expires_at: timestamp("expires_at", {
    mode: "date",
    withTimezone: true,
  }).notNull(),
  created_at: timestamp("created_at", { mode: "date" }).defaultNow(),
  updated_at: timestamp("updated_at", { mode: "date" }).defaultNow(),
}).enableRLS();

export type Verification = typeof verifications.$inferSelect;
