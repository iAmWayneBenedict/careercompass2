import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { envConfig } from "../config";

const db = drizzle(envConfig.DATABASE_URL!);

export default db;
