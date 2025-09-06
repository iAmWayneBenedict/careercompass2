import express from "express";
import type { Request, Response } from "express";
import betterAuthRouter from "@routes/better-auth";
import cors from "cors";

const app: express.Application = express();

// Configure CORS middleware
app.use(
	cors({
		origin: "http://localhost:5173", // Replace with your frontend's origin
		methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed HTTP methods
		credentials: true, // Allow credentials (cookies, authorization headers, etc.)
	})
);

app.use(betterAuthRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_: Request, res: Response) => {
	res.json({ message: "Hello World!" });
});

export default app;
