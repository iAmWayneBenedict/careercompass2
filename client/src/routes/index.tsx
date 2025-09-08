import { createFileRoute } from "@tanstack/react-router";
import { withLayout } from "@/layouts/layout-manager";
import { Button } from "@heroui/button";

function IndexComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Button color="secondary">Hello World</Button>
    </div>
  );
}

const Index = withLayout(IndexComponent, "home");

export const Route = createFileRoute("/")({
  component: Index,
});
