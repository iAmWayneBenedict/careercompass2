import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import BaseLayout from "@/layouts/base-layout";
import { LayoutProvider } from "@/layouts/layout-manager/layout-context";

export const Route = createRootRoute({
	component: () => (
		<LayoutProvider>
			<BaseLayout>
				<Outlet />
			</BaseLayout>
			<TanStackRouterDevtools />
		</LayoutProvider>
	),
});
