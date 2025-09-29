import type {ReactNode} from "react";

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

export type LayoutContextType = {
    currentLayout: LayoutConfig;
    setLayout: (type: LayoutType, customConfig?: Partial<LayoutConfig>) => void;
    updateLayoutConfig: (updates: Partial<LayoutConfig>) => void;
}


// Layout provider component
export type LayoutProviderProps = {
    children: ReactNode;
    defaultLayout?: LayoutType;
}