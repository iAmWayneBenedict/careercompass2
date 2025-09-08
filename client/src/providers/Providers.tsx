import { HeroUIProvider } from "@heroui/react";
import { PrimeReactProvider } from "primereact/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <HeroUIProvider>
        <PrimeReactProvider value={PRIMEREACT_VALUE}>
          {children}
        </PrimeReactProvider>
      </HeroUIProvider>
    </QueryClientProvider>
  );
};

export default Providers;

const PRIMEREACT_VALUE = {
  ripple: true,
  unstyled: true,
  zIndex: {
    modal: 1100, // dialog, sidebar
    overlay: 1000, // dropdown, overlaypanel
    menu: 1000, // overlay menus
    tooltip: 1100, // tooltip
    toast: 1200, // toast
  },
  autoZIndex: true,
};
