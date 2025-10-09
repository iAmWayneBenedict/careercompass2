import { Tooltip } from "@heroui/react";

type Props = {
  data: {
    date: string | undefined;
    count: number;
  };
};

const HeatmapRender = ({ data, ...props }: Props) => {
  const date = new Date(data?.date || "");
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
      <div className="font-semibold text-xs text-black">{formattedDate}</div>
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
      key={`${(props as any).x || 0}-${(props as any).y || 0}`}
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
};

export default HeatmapRender;
