import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {Link} from "@tanstack/react-router";
import type {ComponentProps} from "react";
import {cn} from "@/lib/utils";

// Reusable navigation link styles
const navLinkStyles = cn(
    // Reset default styles
    "bg-transparent hover:bg-transparent focus:bg-transparent",
    "data-[active=true]:bg-transparent data-[active=true]:hover:bg-transparent data-[active=true]:focus:bg-transparent",
    // Custom minimal hover styles
    "relative px-3 py-2 text-sm text-black transition-all duration-200 ease-out",
    "hover:text-foreground",
    // Subtle underline effect
    "after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-foreground after:transition-all after:duration-200 after:ease-out after:-translate-x-1/2",
    "hover:after:w-5",
    // Focus styles
    "focus-visible:outline-none focus-visible:ring-0 focus-visible:text-foreground focus-visible:after:w-full"
);

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
    <NavigationMenu {...props}>
        <NavigationMenuList
            className="gap-3 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
            <NavigationMenuItem>
                <NavigationMenuLink asChild className={navLinkStyles}>
                    <Link to=".">Home</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink asChild className={navLinkStyles}>
                    <Link to=".">Blog</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink asChild className={navLinkStyles}>
                    <Link to=".">About</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink asChild className={navLinkStyles}>
                    <Link to=".">Contact Us</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
);
