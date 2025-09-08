import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { LayoutProvider } from '@/layouts/layout-manager'
import BaseLayout from '@/layouts/base-layout'

export const Route = createRootRoute({
  component: () => (
    <LayoutProvider>
      <BaseLayout>
        <Outlet />
      </BaseLayout>
      <TanStackRouterDevtools />
    </LayoutProvider>
  ),
})