import { relations, sql } from "drizzle-orm";
import { pgEnum } from "drizzle-orm/pg-core";
import {
  pgTable,
  text,
  varchar,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";
import { sessions } from "./sessions";
import { accounts } from "./accounts";

export const userRoleEnum = pgEnum("user_role", ["user", "admin"]);
export const userStatusEnum = pgEnum("user_status", [
  "active",
  "inactive",
  "archived",
]);

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  email_verified: boolean().default(false),
  image: text("image"),
  role: userRoleEnum("role").default("user"),
  status: userStatusEnum("status").default("active"),
  created_at: timestamp("created_at", { mode: "date" }).defaultNow(),
  updated_at: timestamp("updated_at", { mode: "date" }).defaultNow(),
}).enableRLS();

export const userRelations = relations(users, ({ one, many }) => ({
  session: one(sessions, {
    fields: [users.id],
    references: [sessions.user_id],
  }),
  accounts: many(accounts),
}));

export type User = typeof users.$inferSelect;
