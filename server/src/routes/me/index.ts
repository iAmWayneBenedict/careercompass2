import { auth } from "@lib/auth";
import { fromNodeHeaders } from "better-auth/node";
import express, { Request, Response } from "express";

const meRouter = express.Router();

meRouter.get("/api/me", async (req: Request, res: Response) => {
	const session = await auth.api.getSession({
		headers: fromNodeHeaders(req.headers),
	});
	return res.json(session);
});

export default meRouter;
