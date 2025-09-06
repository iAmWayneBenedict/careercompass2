import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import users from "@schema/users";
import { relations } from "drizzle-orm";

const sessions = pgTable("sessions", {
	id: text("id").primaryKey(),
	userId: text("name").notNull(),
	token: text("token").notNull(),
	ip_address: varchar("ip_address"),
	user_agent: varchar("user_agent"),
	expires_at: timestamp("expires_at", { mode: "date" }).notNull(),
	created_at: timestamp("created_at", { mode: "date" }).defaultNow(),
	updated_at: timestamp("updated_at", { mode: "date" }).defaultNow(),
});

export const sessionRelations = relations(sessions, ({ one }) => ({
	user: one(users, {
		fields: [sessions.userId],
		references: [users.id],
	}),
}));

export default sessions;

export type Session = typeof sessions.$inferSelect;
