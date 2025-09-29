// HOC for setting layout on route components
import type {LayoutConfig, LayoutType} from "@layouts/layout-manager/layout-types.ts";
import {type ComponentType, useLayoutEffect} from "react";
import {useLayout} from "@layouts/layout-manager/layout-context.tsx";

export const withLayout = (
    Component: ComponentType,
    layoutType: LayoutType,
    customConfig?: Partial<LayoutConfig>
) => {
    return function LayoutWrappedComponent(props: any) {
        const {setLayout} = useLayout();

        useLayoutEffect(() => {
            setLayout(layoutType, customConfig);
        }, [setLayout]);

        return <Component {...props} />;
    };
};
