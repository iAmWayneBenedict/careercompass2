"use client";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@components/ui/sidebar.tsx";
import AppLogo from "@components/icons/logo.tsx";

export function LogoContainer() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton>
          <AppLogo logoClassNames="w-15" showText={true} />
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
