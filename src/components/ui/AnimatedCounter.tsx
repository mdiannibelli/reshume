import { useMotionValue, useSpring, useInView } from "motion/react";
import { useEffect, useState, useRef } from "react";

export function AnimatedCounter({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
    mass: 1,
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      const rounded = Math.floor(latest);
      setDisplayValue(rounded);
      if (Math.abs(latest - value) < 0.1) {
        setDisplayValue(value);
      }
    });
    return unsubscribe;
  }, [springValue, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}
