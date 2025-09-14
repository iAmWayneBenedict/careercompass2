import { Button } from "@heroui/react";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import AppLogo from "../../icons/logo";
import { Link } from "@tanstack/react-router";

const Navbar04Page = () => {
  return (
    <nav className="fixed z-50 top-6 inset-x-4 h-16 bg-white/10 dark:bg-black/10 backdrop-blur-md border border-white/20 dark:border-white/10 max-w-(--breakpoint-xl) mx-auto rounded-full shadow-lg">
      <div className="flex items-center justify-between h-full px-4 mx-auto">
        <AppLogo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <Button
            to="/auth"
            as={Link}
            color="primary"
            className="hidden sm:inline-flex rounded-full !cursor-pointer"
          >
            Start Now
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
