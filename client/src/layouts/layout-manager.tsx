import React, { createContext, useContext } from "react";
import type { ReactNode } from "react";

// Layout types
export type LayoutType = "home" | "dashboard" | "auth" | "minimal";

// Layout configuration type
export type LayoutConfig = {
  type: LayoutType;
  showHeader?: boolean;
  showFooter?: boolean;
  showSidebar?: boolean;
  containerClass?: string;
  headerClass?: string;
  footerClass?: string;
  sidebarClass?: string;
};

// Default layout configurations
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
    showHeader: true,
    showFooter: false,
    showSidebar: true,
    containerClass: "min-h-screen bg-gray-50",
    headerClass: "border-b bg-white shadow-sm",
    sidebarClass: "w-64 bg-white border-r shadow-sm",
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

// Layout context
interface LayoutContextType {
  currentLayout: LayoutConfig;
  setLayout: (type: LayoutType, customConfig?: Partial<LayoutConfig>) => void;
  updateLayoutConfig: (updates: Partial<LayoutConfig>) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

// Layout provider component
interface LayoutProviderProps {
  children: ReactNode;
  defaultLayout?: LayoutType;
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({
  children,
  defaultLayout = "home",
}) => {
  const [currentLayout, setCurrentLayout] = React.useState<LayoutConfig>(
    defaultLayoutConfigs[defaultLayout]
  );

  const setLayout = React.useCallback(
    (type: LayoutType, customConfig?: Partial<LayoutConfig>) => {
      const baseConfig = defaultLayoutConfigs[type];
      const newConfig = customConfig
        ? { ...baseConfig, ...customConfig }
        : baseConfig;
      setCurrentLayout(newConfig);
    },
    []
  );

  const updateLayoutConfig = React.useCallback(
    (updates: Partial<LayoutConfig>) => {
      setCurrentLayout((prev) => ({ ...prev, ...updates }));
    },
    []
  );

  const value = React.useMemo(
    () => ({
      currentLayout,
      setLayout,
      updateLayoutConfig,
    }),
    [currentLayout, setLayout, updateLayoutConfig]
  );

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};

// Hook to use layout context
export const useLayout = (): LayoutContextType => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
};

// HOC for setting layout on route components
export const withLayout = (
  Component: React.ComponentType,
  layoutType: LayoutType,
  customConfig?: Partial<LayoutConfig>
) => {
  return function LayoutWrappedComponent(props: any) {
    const { setLayout } = useLayout();

    React.useEffect(() => {
      setLayout(layoutType, customConfig);
    }, [setLayout]);

    return <Component {...props} />;
  };
};
