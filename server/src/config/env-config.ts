import { config } from "dotenv";
config();

const envConfig = {
	PORT: process.env["PORT"] || 3000,
	DATABASE_URL: process.env["DATABASE_URL"],
	GOOGLE_CLIENT_ID: process.env["CLIENT_ID"],
	GOOGLE_CLIENT_SECRET: process.env["CLIENT_SECRET"],
};

export default envConfig;
