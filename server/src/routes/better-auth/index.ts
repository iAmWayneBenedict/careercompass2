import { auth } from "@lib/auth";
import { toNodeHandler } from "better-auth/node";
import express from "express";

const betterAuthRouter = express.Router();

betterAuthRouter.all("/api/auth/*splat", toNodeHandler(auth));

export default betterAuthRouter;
