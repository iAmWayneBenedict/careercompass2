import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

const verifications = pgTable("verifications", {
	id: text("id").primaryKey(),
	identifier: text("identifier").notNull(),
	value: text("value").notNull(),
	expires_at: timestamp("expires_at", { mode: "date" }).notNull(),
	created_at: timestamp("created_at", { mode: "date" }).defaultNow(),
	updated_at: timestamp("updated_at", { mode: "date" }).defaultNow(),
});

export default verifications;

export type Verification = typeof verifications.$inferSelect;
