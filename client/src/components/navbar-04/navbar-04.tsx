import { Button } from "@heroui/react";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import AppLogo from "../icons/logo";

const Navbar04Page = () => {
  return (
    <nav className="fixed z-50 top-6 inset-x-4 h-16 bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 max-w-(--breakpoint-xl) mx-auto rounded-full shadow-lg">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <AppLogo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <Button
            color="primary"
            className="hidden sm:inline-flex rounded-full !cursor-pointer"
          >
            Get Started
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar04Page;
