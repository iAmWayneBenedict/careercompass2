import { PrimeReactProvider } from "primereact/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { useRouter, type NavigateOptions, type ToOptions } from "@tanstack/react-router";

const queryClient = new QueryClient();

const TOAST_OPTIONS = {
	radius: "full" as const,
	color: "primary" as const,
	variant: "flat" as const,
	timeout: 1000,
	hideIcon: true,
	classNames: {
		closeButton: "opacity-100 absolute right-4 top-1/2 -translate-y-1/2",
		base: "z-[9999]",
	},
};

declare module "@heroui/react" {
	interface RouterConfig {
		href: ToOptions["to"];
		routerOptions: Omit<NavigateOptions, keyof ToOptions>;
	}
}

const Providers = ({ children }: { children: React.ReactNode }) => {
	const router = useRouter();
	return (
		<QueryClientProvider client={queryClient}>
			<HeroUIProvider
				navigate={(to, options) => router.navigate({ to, ...(options || {}) })}
				useHref={(to) => router.buildLocation({ to }).href}
			>
				<ToastProvider toastProps={TOAST_OPTIONS} />
				<PrimeReactProvider value={PRIMEREACT_VALUE}>{children}</PrimeReactProvider>
			</HeroUIProvider>
		</QueryClientProvider>
	);
};

export default Providers;

const PRIMEREACT_VALUE = {
	ripple: true,
	unstyled: true,
};
