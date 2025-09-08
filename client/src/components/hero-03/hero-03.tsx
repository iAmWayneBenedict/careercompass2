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
    <div className="min-h-screen w-full flex flex-col gap-16 items-center justify-center px-6 py-16 md:mt-24">
      <div className="text-center max-w-3xl">
        <Badge
          variant="secondary"
          className="rounded-full py-1 border-border"
          asChild
        >
          <Link to=".">
            Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
          Customized Shadcn UI Blocks & Components
        </h1>
        <p className="mt-6 md:text-lg">
          Explore a collection of Shadcn UI blocks and components, ready to
          preview and copy. Streamline your development workflow with
          easy-to-implement examples.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <Button
            size="lg"
            color="primary"
            className="rounded-full text-base"
            onMouseEnter={() => arrowRef.current?.startAnimation()}
            onMouseLeave={() => arrowRef.current?.stopAnimation()}
          >
            Get Started <ArrowRightIcon ref={arrowRef} size={18} />
          </Button>
        </div>
      </div>
      <div className="w-full max-w-(--breakpoint-xl) mx-auto aspect-video bg-accent rounded-xl" />
    </div>
  );
};

export default Hero03;
