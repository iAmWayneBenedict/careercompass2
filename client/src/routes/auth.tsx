import { createFileRoute } from "@tanstack/react-router";
import { lazy } from "react";

export const Route = createFileRoute("/auth")({
	component: lazy(() => import("@pages/auth")),
});
