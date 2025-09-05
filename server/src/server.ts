import express from "express";
import type { Request, Response } from "express";

const app: express.Application = express();

app.get("/", (_: Request, res: Response) => {
	res.json({ message: "Hello World!" });
});

export default app;
