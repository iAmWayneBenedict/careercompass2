import React, {createContext, useContext} from "react";
import type {
    LayoutConfig,
    LayoutContextType,
    LayoutProviderProps,
    LayoutType
} from "@layouts/layout-manager/layout-types.ts";
import {defaultLayoutConfigs} from "@layouts/layout-manager/layout-config.ts";

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);


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
            const newConfig = customConfig ? {...baseConfig, ...customConfig} : baseConfig;
            setCurrentLayout(newConfig);
        },
        []
    );

    const updateLayoutConfig = React.useCallback((updates: Partial<LayoutConfig>) => {
        setCurrentLayout((prev) => ({...prev, ...updates}));
    }, []);

    const value = React.useMemo(
        () => ({
            currentLayout,
            setLayout,
            updateLayoutConfig,
        }),
        [currentLayout, setLayout, updateLayoutConfig]
    );

    return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
};

// Hook to use layout context
export const useLayout = (): LayoutContextType => {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error("useLayout must be used within a LayoutProvider");
    }
    return context;
};
