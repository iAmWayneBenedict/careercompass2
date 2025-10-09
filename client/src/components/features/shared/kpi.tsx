import { cn } from "@/lib/utils";
import { Card } from "@heroui/react";
import CountUp from "./countup";

const data = [
  {
    name: "Applications submitted",
    stat: "47",
    change: "+12.5%",
    color: "bg-[#46D277]", // Primary green - matches your specified color
    bg: "bg-[#46D277]/10",
  },
  {
    name: "Interview invitations",
    stat: "8",
    change: "+33.3%",
    color: "bg-[#4ECDC4]", // Complementary teal - creates harmony with green
    bg: "bg-[#4ECDC4]/10",
  },
  {
    name: "Response rate",
    stat: "17%",
    change: "+2.1%",
    color: "bg-[#45B7D1]", // Analogous blue - creates smooth transition
    bg: "bg-[#45B7D1]/10",
  },
];

export default function KPI() {
  return (
    <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <Card key={item.name} className="py-5 shadow-md">
          <div className={cn("flex space-x-3 py-2", item.bg)}>
            <div className={cn(item.color, "w-1 shrink-0 rounded")} />
            <dt className="flex items-center justify-between w-full pr-5 space-x-3 text-sm text-gray-500 truncate dark:text-gray-500">
              <span className="truncate">{item.name}</span>
              <span className="font-medium text-gray-700 dark:text-gray-300">
                {item.change}
              </span>
            </dt>
          </div>
          <div className="px-10 pl-4 mt-2">
            <dd className="text-3xl font-semibold text-gray-900 dark:text-gray-50">
              <CountUp
                to={item.stat}
                direction="up"
                duration={1}
                className="count-up-text"
              />
            </dd>
          </div>
        </Card>
      ))}
    </dl>
  );
}
