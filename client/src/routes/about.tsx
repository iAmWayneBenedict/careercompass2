import { withLayout } from "@/layouts/layout-manager/with-layout";
import { createFileRoute } from "@tanstack/react-router";

const About = withLayout(function () {
  return <div className="p-2">Hello from About!</div>;
}, "home");

export const Route = createFileRoute("/about")({
  component: About,
});
