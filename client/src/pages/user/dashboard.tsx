import { DashboardAreaChart } from "@/components/features/shared/dashboard-area-chart";
import KPI from "@/components/features/shared/kpi";
import { BellIcon } from "@/components/ui/bell";
import HeatmapChart from "@/components/ui/heatmap";
import { HorizoltalBarChart } from "@/components/ui/horizontal-bar-chart";
import { ChartRadialStacked } from "@/components/ui/radial-stacked";
import { withLayout } from "@/layouts/layout-manager/with-layout";
import { BreadcrumbItem, Breadcrumbs, Button } from "@heroui/react";

const UserDashboardPage = withLayout(() => {
  return (
    <div className="pb-3">
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-4 header">
          <div>
            <h2 className="text-3xl">Dashboard</h2>
            <p className="font-light">
              Here's your today's overview of key metrics and insights
            </p>
          </div>
          <Breadcrumbs
            radius={"full"}
            variant="solid"
            itemClasses={{
              separator: "px-2",
            }}
            classNames={{
              list: "px-4",
            }}
            separator={"/"}
          >
            <BreadcrumbItem>Home</BreadcrumbItem>
          </Breadcrumbs>
        </div>
        <div className="mr-10">
          <Button
            isIconOnly
            variant="light"
            radius="full"
            className="w-14 h-14"
          >
            <BellIcon
              size={22}
              className="flex items-center justify-center w-full h-full"
            />
          </Button>
        </div>
      </div>
      <div className="flex gap-5 mt-10 ">
        <div id="main" className="flex flex-col gap-6 w-full">
          <KPI />
          <DashboardAreaChart />
          <ChartRadialStacked />
        </div>
        <div className="min-w-sm flex flex-col gap-5">
          <HeatmapChart />
          <HorizoltalBarChart />
        </div>
      </div>
    </div>
  );
}, "dashboard");

export default UserDashboardPage;
