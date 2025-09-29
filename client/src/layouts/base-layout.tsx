import React from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Import layout components
import HomeHeader from "./home/header";
import HomeFooter from "./home/footer";
import DashboardSidebar from "./dashboard/sidebar";
import { useLayout } from "./layout-manager/layout-context";

interface BaseLayoutProps {
	children: ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
	const { currentLayout } = useLayout();

	const renderHeader = () => {
		if (!currentLayout.showHeader) return null;

		switch (currentLayout.type) {
			case "home":
				return (
					<header className={cn("", currentLayout.headerClass)}>
						<HomeHeader />
					</header>
				);
			default:
				return (
					<header className={cn("", currentLayout.headerClass)}>
						<HomeHeader />
					</header>
				);
		}
	};

	const renderSidebar = () => {
		if (!currentLayout.showSidebar) return null;

		switch (currentLayout.type) {
			case "dashboard":
				return (
					<aside className={cn("", currentLayout.sidebarClass)}>
						<DashboardSidebar />
					</aside>
				);
			default:
				return null;
		}
	};

	const renderFooter = () => {
		if (!currentLayout.showFooter) return null;

		switch (currentLayout.type) {
			case "home":
				return (
					<footer className={cn("", currentLayout.footerClass)}>
						<HomeFooter />
					</footer>
				);
			default:
				return null;
		}
	};

	const renderContent = () => {
		if (currentLayout.showSidebar) {
			return (
				<div className="flex flex-1">
					{renderSidebar()}
					<main className="flex-1 my-12 ml-12 overflow-auto">{children}</main>
				</div>
			);
		}

		return <main className="flex-1">{children}</main>;
	};

	return (
		<div className={cn("flex flex-col", currentLayout.containerClass)}>
			{renderHeader()}
			{renderContent()}
			{renderFooter()}
		</div>
	);
};

export default BaseLayout;
