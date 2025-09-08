import {
  pgTable,
  text,
  varchar,
  timestamp,
  pgPolicy,
} from "drizzle-orm/pg-core";
import { users } from "@schema/users";
import { relations, sql } from "drizzle-orm";

export const sessions = pgTable("sessions", {
  id: text("id").primaryKey(),
  user_id: text("user_id").notNull(),
  token: text("token").notNull(),
  ip_address: varchar("ip_address"),
  user_agent: varchar("user_agent"),
  expires_at: timestamp("expires_at", { mode: "date" }).notNull(),
  created_at: timestamp("created_at", { mode: "date" }).defaultNow(),
  updated_at: timestamp("updated_at", { mode: "date" }).defaultNow(),
}).enableRLS();

export const sessionRelations = relations(sessions, ({ one }) => ({
  user: one(users, {
    fields: [sessions.user_id],
    references: [users.id],
  }),
}));

export type Session = typeof sessions.$inferSelect;
