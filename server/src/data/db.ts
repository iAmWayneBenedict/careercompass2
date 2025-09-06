import { envConfig } from "@/config";
import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";

const db = drizzle(envConfig.DATABASE_URL!);

export default db;
