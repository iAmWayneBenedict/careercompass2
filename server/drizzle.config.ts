import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import envConfig from "./src/config/env-config";

export default defineConfig({
	out: "./drizzle",
	schema: "./src/data/schema/index.ts",
	dialect: "postgresql",
	dbCredentials: {
		url: envConfig.DATABASE_URL!,
	},
});
