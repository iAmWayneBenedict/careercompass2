import express from "express";
import type { Request, Response } from "express";
import betterAuthRouter from "@routes/better-auth";
import cors from "cors";

const app: express.Application = express();

const CORS_OPTIONS = {
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:5173",
    "http://localhost:5173/",
    "http://127.0.0.1:5173",
    "http://127.0.0.1:3000",
  ],
  credentials: true, // Allow cookies/authentication
  optionsSuccessStatus: 200, // Support legacy browsers
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
    "Cache-Control",
  ],
};

app.use(cors(CORS_OPTIONS));

//! Always above the express.json() and express.urlencoded()
app.use(betterAuthRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (_: Request, res: Response) => {
  res.json({ message: "Hello World!" });
});

export default app;
