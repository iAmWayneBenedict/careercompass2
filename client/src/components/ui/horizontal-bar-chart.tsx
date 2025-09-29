"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import { CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Card } from "@heroui/react";
import DashboardCardTitle from "./dashboard-card-title";

export const description =
  "A horizontal bar chart showing applications sent by job posting platform";

const chartData = [
  { platform: "LinkedIn", applications: 186, responses: 80 },
  { platform: "Indeed", applications: 305, responses: 200 },
  { platform: "Glassdoor", applications: 237, responses: 120 },
  { platform: "ZipRecruiter", applications: 173, responses: 90 },
  { platform: "Monster", applications: 209, responses: 130 },
  { platform: "CareerBuilder", applications: 214, responses: 140 },
];

const chartConfig = {
  applications: {
    label: "Applications",
    color: "var(--chart-6)",
  },
  responses: {
    label: "Responses",
    color: "var(--chart-2)",
  },
  label: {
    color: "var(--black)",
  },
} satisfies ChartConfig;

export function HorizoltalBarChart() {
  return (
    <Card className="flex flex-col shadow-md py-5 gap-4">
      <CardHeader className="border-b [.border-b]:pb-3">
        <div>
          <DashboardCardTitle to="#">
            Application Sent by Source
          </DashboardCardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[190px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              right: 16,
            }}
            barSize={35}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey="platform"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 10)}
              hide
            />
            <XAxis dataKey="applications" type="number" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="line" />}
            />
            <Bar
              dataKey="applications"
              fill="var(--color-applications)"
              radius={20}
            >
              <LabelList
                dataKey="platform"
                position="insideLeft"
                offset={8}
                className="fill-white"
                fontSize={13}
              />
              <LabelList
                dataKey="applications"
                position="right"
                offset={8}
                className="fill-foreground"
                fontSize={13}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm mt-3">
        <div className="bg-foreground/5 justify-between items-center flex w-full rounded-md p-3 px-5">
          <p className="text-black">Total Application</p>
          <h4 className="text-xl font-semibold text-foreground">123</h4>
        </div>
      </CardFooter>
    </Card>
  );
}
