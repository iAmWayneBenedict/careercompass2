import { Button } from "@heroui/react";
import { ArrowRightIcon } from "./arrow-right";
import { Link } from "@tanstack/react-router";

type Props = {
  children: React.ReactNode;
  color?: string;
  to?: string;
};

const DashboardCardTitle = ({ children, color, to = "" }: Props) => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-3 font-medium">
        <div className={`w-1.5 h-5 rounded-xl bg-${color || "primary"}`} />
        <span>{children}</span>
      </div>
      {to && (
        <Button
          isIconOnly
          as={Link}
          to={to}
          variant="light"
          radius="full"
          className="w-fit min-w-0 h-fit data-[hover=true]:bg-transparent"
        >
          <ArrowRightIcon
            size={24}
            className="flex items-center justify-center w-fit h-full"
          />
        </Button>
      )}
    </div>
  );
};

export default DashboardCardTitle;
