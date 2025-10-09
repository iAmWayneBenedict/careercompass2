import { useEffect, useState } from "react";
import HeatMap from "@uiw/react-heat-map";
import { Card, Tooltip } from "@heroui/react";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import DashboardCardTitle from "@/components/ui/dashboard-card-title";

function generateFakeCommitData() {
  let commitsPerDate = [];
  const currentMonth = new Date().getMonth() + 1;
  for (let month = currentMonth - 4; month < currentMonth; month++) {
    // Get the number of days in the current month
    const numberOfDays = new Date(2025, month + 1, 0).getDate();

    // Loop through each day of the current month
    for (let day = 1; day <= numberOfDays; day++) {
      // Create a new Date object for the current day
      const currentDate = new Date(2025, month, day, 29); // hack: added 5 hours to avoid midnight

      // Add a new object to the array
      commitsPerDate.push({
        date: currentDate.toJSON().substring(0, 10),
        count: Math.floor(Math.random() * 100),
      });
    }
  }
  return commitsPerDate;
}

const HeatmapChart = () => {
  const [commitsPerDate, setCommitsPerDate] = useState([]);

  useEffect(() => {
    setCommitsPerDate(generateFakeCommitData() as any);
  }, []);
  return (
    <Card className="pt-0 shadow-md py-5">
      <CardHeader className="border-b [.border-b]:pb-3">
        <div>
          <DashboardCardTitle to="#">Applications Heatmap</DashboardCardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <HeatMap
          value={commitsPerDate}
          startDate={new Date((commitsPerDate as any)?.[0]?.date || "")}
          endDate={new Date()}
          className="w-full h-42"
          rectSize={14}
          legendRender={(props) => (
            <rect {...props} y={Number(props.y || 0) + 10} rx={5} />
          )}
          panelColors={{
            0: "#EBEDF0",
            20: "#C6E48B",
            40: "#7BC96F",
            60: "#239A3B",
            80: "#196127",
          }}
          rectProps={{ rx: 5 }}
          rectRender={(props, data) => {
            const date = new Date(data.date);
            const formattedDate = date.toLocaleDateString("en-US", {
              weekday: "short",
              month: "short",
              day: "numeric",
              year: "numeric",
            });

            const getActivityLevel = (count: number) => {
              if (count === 0) return "No activity";
              if (count <= 20) return "Low activity";
              if (count <= 40) return "Moderate activity";
              if (count <= 60) return "High activity";
              return "Very high activity";
            };

            const tooltipContent = (
              <div className="flex flex-col gap-1 p-1">
                <div className="font-semibold text-xs text-black">
                  {formattedDate}
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-sm"
                    style={{
                      backgroundColor:
                        data.count === 0
                          ? "#EBEDF0"
                          : data.count <= 20
                          ? "#C6E48B"
                          : data.count <= 40
                          ? "#7BC96F"
                          : data.count <= 60
                          ? "#239A3B"
                          : "#196127",
                    }}
                  />
                  <span className="text-xs text-black">
                    {data.count || 0} application
                    {(data.count || 0) !== 1 ? "s" : ""}
                  </span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {getActivityLevel(data.count || 0)}
                </div>
              </div>
            );

            return (
              <Tooltip
                key={props.key}
                placement="top"
                showArrow
                content={tooltipContent}
                delay={200}
                closeDelay={100}
                classNames={{
                  content:
                    "border border-gray-200 dark:border-gray-700 shadow-lg rounded-lg",
                }}
              >
                <rect {...props} />
              </Tooltip>
            );
          }}
        />
      </CardContent>
      <CardFooter className="px-5">
        <CardDescription className="font-light">
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Track your momentum
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Darker = more applications
          </p>
        </CardDescription>
      </CardFooter>
    </Card>
  );
};

export default HeatmapChart;
