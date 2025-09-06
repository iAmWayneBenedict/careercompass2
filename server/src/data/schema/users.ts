import { relations } from "drizzle-orm";
import { pgEnum } from "drizzle-orm/pg-core";
import { pgTable, text, varchar, boolean, timestamp } from "drizzle-orm/pg-core";
import sessions from "@schema/sessions";
import accounts from "@schema/accounts";

export const userRoleEnum = pgEnum("user_role", ["user", "admin"]);
export const userStatusEnum = pgEnum("user_status", ["active", "inactive", "archived"]);

const users = pgTable("users", {
	id: text("id").primaryKey(),
	name: varchar("name").notNull(),
	email: varchar("email").notNull(),
	emailVerified: boolean().default(false),
	image: text("image"),
	role: userRoleEnum("role").default("user"),
	status: userStatusEnum("status").default("active"),
	created_at: timestamp("created_at", { mode: "date" }).defaultNow(),
	updated_at: timestamp("updated_at", { mode: "date" }).defaultNow(),
});

export const userRelations = relations(users, ({ one, many }) => ({
	session: one(sessions, {
		fields: [users.id],
		references: [sessions.userId],
	}),
	accounts: many(accounts),
}));

export default users;

export type User = typeof users.$inferSelect;
