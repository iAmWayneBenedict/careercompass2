import { useEffect, useState } from "react";
import HeatMap from "@uiw/react-heat-map";
import { Card, Tooltip } from "@heroui/react";
import { CardContent, CardDescription, CardFooter, CardHeader } from "./card";
import DashboardCardTitle from "./dashboard-card-title";

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
    setCommitsPerDate(generateFakeCommitData());
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
          startDate={new Date(commitsPerDate?.[0]?.date || "")}
          endDate={new Date()}
          className="w-full h-42"
          rectSize={14}
          legendRender={(props) => <rect {...props} y={props.y + 10} rx={5} />}
          panelColors={{
            0: "#EBEDF0",
            20: "#C6E48B",
            40: "#7BC96F",
            60: "#239A3B",
            80: "#196127",
          }}
          rectProps={{ rx: 5 }}
          rectRender={(props, data) => {
            if (!data.count)
              return (
                <Tooltip
                  key={props.key}
                  placement="top"
                  showArrow
                  color="foreground"
                  content={`No applications submitted`}
                >
                  <rect {...props} />
                </Tooltip>
              );
            return (
              <Tooltip
                key={props.key}
                placement="top"
                showArrow
                color="foreground"
                content={`count: ${data.count || 0}`}
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
