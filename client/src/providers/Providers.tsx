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
};
