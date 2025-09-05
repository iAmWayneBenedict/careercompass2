import { config } from "dotenv";
config();

const envConfig = {
	PORT: process.env["PORT"] || 3000,
	DATABASE_URL: process.env["DATABASE_URL"],
};

export default envConfig;
