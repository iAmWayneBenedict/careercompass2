// Default layout configurations
import type { LayoutConfig, LayoutType } from "@layouts/layout-manager/layout-types.ts";

export const defaultLayoutConfigs: Record<LayoutType, LayoutConfig> = {
	home: {
		type: "home",
		showHeader: true,
		showFooter: true,
		showSidebar: false,
		containerClass: "min-h-screen",
	},
	dashboard: {
		type: "dashboard",
		showHeader: false,
		showFooter: false,
		showSidebar: true,
		containerClass: "min-h-screen bg-gray-50 pr-5",
		headerClass: "border-b bg-white shadow-sm",
		sidebarClass: "w-27",
	},
	auth: {
		type: "auth",
		showHeader: false,
		showFooter: false,
		showSidebar: false,
		containerClass: "min-h-screen bg-gray-100 flex items-center justify-center",
	},
	minimal: {
		type: "minimal",
		showHeader: false,
		showFooter: false,
		showSidebar: false,
		containerClass: "min-h-screen",
	},
};
