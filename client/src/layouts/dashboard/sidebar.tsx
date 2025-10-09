import React, {
  type ForwardRefExoticComponent,
  type RefAttributes,
} from "react";
import { Link } from "@tanstack/react-router";
import { type LucideIcon } from "lucide-react";
import AppLogo from "@/components/icons/logo";
import { Button, Tooltip } from "@heroui/react";
import { UserIcon } from "@/components/ui/user";
import { CogIcon } from "@/components/ui/cog";
import {
  LayoutPanelTopIcon,
  type LayoutPanelTopIconHandle,
  type LayoutPanelTopIconProps,
} from "@/components/ui/layout-panel-top";
import { ArchiveIcon } from "@/components/ui/archive";
import { ActivityIcon } from "@/components/ui/activity";
import { CalendarCheck2Icon } from "@/components/ui/calendar-check-2";

interface NavItem {
  title: string;
  href: string;
  icon:
    | LucideIcon
    | ForwardRefExoticComponent<
        LayoutPanelTopIconProps & RefAttributes<LayoutPanelTopIconHandle>
      >;
  badge?: string;
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutPanelTopIcon,
  },
  {
    title: "Job Applications",
    href: "/dashboard/applications",
    icon: ArchiveIcon,
    badge: "12",
  },
  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: ActivityIcon,
  },
  {
    title: "Calendar",
    href: "/dashboard/calendar",
    icon: CalendarCheck2Icon,
  },
];

const DashboardSidebar: React.FC = () => {
  return (
    <div className="flex flex-col w-full h-full">
      {/* Logo/Brand */}
      <div className="flex flex-col w-19 h-[calc(100vh-18rem)] gap-12 px-2 pt-8 pb-2 ml-8 rounded-full shadow-xl my-38 border-1 fixed">
        <AppLogo logoClassNames="w-12" />

        <div className="flex flex-col h-full gap-3">
          {navItems.map(({ title, href, icon }) => {
            const Icon = icon;
            return (
              <Tooltip
                content={title}
                key={title + href}
                placement="right"
                color="foreground"
                showArrow={true}
                className="flex items-center gap-4"
              >
                <Button
                  isIconOnly
                  as={Link}
                  variant="light"
                  radius="full"
                  className="w-full h-14"
                >
                  <Icon
                    size={22}
                    className="flex items-center justify-center w-full h-full"
                  />
                </Button>
              </Tooltip>
            );
          })}
        </div>
        <div className="flex flex-col justify-between gap-2 h-fit">
          <Tooltip
            content={"Settings"}
            placement="right"
            color="foreground"
            showArrow={true}
            className="flex items-center gap-4"
          >
            <Button
              isIconOnly
              as={Link}
              variant="light"
              radius="full"
              className="w-full h-14"
            >
              <CogIcon
                size={22}
                className="flex items-center justify-center w-full h-full"
              />
            </Button>
          </Tooltip>
          <Tooltip
            content={"Account"}
            color="foreground"
            placement="right"
            showArrow={true}
            className="flex items-center gap-4"
          >
            <Button
              isIconOnly
              as={Link}
              variant="solid"
              color="primary"
              radius="full"
              className="w-full h-14"
            >
              <UserIcon
                size={24}
                className="flex items-center justify-center w-full h-full"
              />
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
