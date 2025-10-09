import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";
import { parseMetric, formatMetricValue } from "@/lib/metric-utils";

interface CountUpProps {
  to: number | string;
  from?: number | string;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  startWhen?: boolean;
  separator?: string;
  onStart?: () => void;
  onEnd?: () => void;
}

export default function CountUp({
  to,
  from = 0,
  direction = "up",
  delay = 0,
  duration = 2,
  className = "",
  startWhen = true,
  onStart,
  onEnd,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  // Parse the metric values
  const parsedTo =
    typeof to === "string"
      ? parseMetric(to)
      : {
          numericValue: to,
          suffix: "",
          prefix: "",
          originalValue: to.toString(),
        };
  const parsedFrom =
    typeof from === "string"
      ? parseMetric(from.toString())
      : {
          numericValue: from,
          suffix: "",
          prefix: "",
          originalValue: from.toString(),
        };

  const motionValue = useMotionValue(
    direction === "down" ? parsedTo.numericValue : parsedFrom.numericValue
  );

  const damping = 20 + 40 * (1 / duration);
  const stiffness = 100 * (1 / duration);

  const springValue = useSpring(motionValue, {
    damping,
    stiffness,
  });

  const isInView = useInView(ref, { once: true, margin: "0px" });

  // const getDecimalPlaces = (num: number): number => {
  //   const str = num.toString();
  //   if (str.includes(".")) {
  //     const decimals = str.split(".")[1];
  //     if (parseInt(decimals) !== 0) {
  //       return decimals.length;
  //     }
  //   }
  //   return 0;
  // };

  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = formatMetricValue(
        direction === "down" ? parsedTo.numericValue : parsedFrom.numericValue,
        direction === "down" ? parsedTo : parsedFrom
      );
    }
  }, [parsedFrom, parsedTo, direction]);

  useEffect(() => {
    if (isInView && startWhen) {
      if (typeof onStart === "function") {
        onStart();
      }

      const timeoutId = setTimeout(() => {
        motionValue.set(
          direction === "down" ? parsedFrom.numericValue : parsedTo.numericValue
        );
      }, delay * 1000);

      const durationTimeoutId = setTimeout(() => {
        if (typeof onEnd === "function") {
          onEnd();
        }
      }, delay * 1000 + duration * 1000);

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(durationTimeoutId);
      };
    }
  }, [
    isInView,
    startWhen,
    motionValue,
    direction,
    parsedFrom,
    parsedTo,
    delay,
    onStart,
    onEnd,
    duration,
  ]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        // Use the target metric format for display
        const targetMetric = direction === "down" ? parsedFrom : parsedTo;
        ref.current.textContent = formatMetricValue(latest, targetMetric);
      }
    });

    return () => unsubscribe();
  }, [springValue, direction, parsedFrom, parsedTo]);

  return <span className={className} ref={ref} />;
}
