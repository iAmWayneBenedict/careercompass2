import { Badge } from "@/components/ui/badge";
import { Button } from "@heroui/react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import {
  ArrowRightIcon,
  type ArrowRightIconHandle,
} from "@components/ui/arrow-right";
import { useRef } from "react";

const Hero03 = () => {
  const arrowRef = useRef<ArrowRightIconHandle>(null);
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-16 px-6 py-16 md:mt-24">
      <div className="max-w-3xl text-center">
        <Badge
          variant="secondary"
          className="py-1 rounded-full border-border"
          asChild
        >
          <Link to=".">
            Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
          Your Job Hunt, But Organized AF
        </h1>
        <p className="mt-6 md:text-lg">
          All your apps and callbacks, one clean dashboard. No chaos—just career
          wins.
        </p>
        <div className="flex items-center justify-center gap-4 mt-10">
          <Button
            to="/auth"
            as={Link}
            size="lg"
            color="primary"
            className="text-base rounded-full"
            onMouseEnter={() => arrowRef.current?.startAnimation()}
            onMouseLeave={() => arrowRef.current?.stopAnimation()}
          >
            Start Tracking Now <ArrowRightIcon ref={arrowRef} size={18} />
          </Button>
        </div>
      </div>
      <div className="w-full max-w-(--breakpoint-xl) mx-auto aspect-video bg-accent rounded-xl" />
    </div>
  );
};

export default Hero03;
