"use client";

import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import { CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import DashboardCardTitle from "./dashboard-card-title";
import { Card } from "@heroui/react";

export const description = "A radial chart with stacked sections";

const chartData = [
  {
    month: "january",
    open: 1260,
    closed: 570,
    canceled: 40,
    total: 1870,
  },
];

const chartConfig = {
  open: {
    label: "Open",
    color: "var(--chart-1)",
  },
  closed: {
    label: "Closed",
    color: "var(--chart-2)",
  },
  canceled: {
    label: "Canceled",
    color: "var(--chart-3)",
  },
  total: {
    label: "Total",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

const stats = [
  {
    label: "Open",
    value: 12,
    color: chartConfig.open.color,
  },
  {
    label: "Closed",
    value: 2,
    color: chartConfig.closed.color,
  },
  {
    label: "Canceled",
    value: 4,
    color: chartConfig.canceled.color,
  },
  {
    label: "Total",
    value: 18,
    color: chartConfig.total.color,
  },
];

export function ChartRadialStacked() {
  const totalVisitors = chartData[0].total;

  return (
    <Card className="flex flex-col shadow-md py-5">
      <CardHeader className="items-center pb-0 border-b [.border-b]:pb-3">
        <div>
          <DashboardCardTitle to="#">Job Status</DashboardCardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 items-center pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto h-[200px] w-full max-w-[250px]"
        >
          <RadialBarChart
            data={chartData}
            endAngle={360}
            innerRadius={80}
            outerRadius={140}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 25}
                          className="fill-muted-foreground"
                        >
                          Total Jobs
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
            {Object.keys(chartConfig)
              .reverse()
              .map((key) => (
                <RadialBar
                  key={key}
                  dataKey={key}
                  stackId="a"
                  cornerRadius={25}
                  fill={chartConfig[key as keyof typeof chartConfig].color}
                  className="stroke-transparent stroke-2"
                />
              ))}
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm mt-3 px-5">
        <div className="grid grid-cols-4 w-full bg-blocking p-5 gap-y-2 rounded-lg">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <h4 className="text-sm flex gap-1 items-center">
                <div
                  className={`w-2 h-2 rounded-full`}
                  style={{ background: stat.color }}
                />
                <span>{stat.label}</span>
              </h4>
              <p className="text-sm font-bold">
                ( {stat.value.toLocaleString()} )
              </p>
            </div>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
