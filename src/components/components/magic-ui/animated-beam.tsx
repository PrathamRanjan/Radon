import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface AnimatedBeamProps {
  className?: string;
  containerRef: React.RefObject<HTMLElement>;
  fromRef: React.RefObject<HTMLElement>;
  toRef: React.RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  duration?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 2,
}) => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const updatePath = () => {
      if (!containerRef.current || !fromRef.current || !toRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const fromRect = fromRef.current.getBoundingClientRect();
      const toRect = toRef.current.getBoundingClientRect();

      const fromX = fromRect.left + fromRect.width / 2 - containerRect.left;
      const fromY = fromRect.top + fromRect.height / 2 - containerRect.top;
      const toX = toRect.left + toRect.width / 2 - containerRect.left;
      const toY = toRect.top + toRect.height / 2 - containerRect.top;

      const path = `M ${fromX} ${fromY} Q ${(fromX + toX) / 2 + curvature} ${
        (fromY + toY) / 2
      } ${toX} ${toY}`;

      if (pathRef.current) {
        pathRef.current.setAttribute("d", path);
      }
    };

    updatePath();
    window.addEventListener("resize", updatePath);
    return () => window.removeEventListener("resize", updatePath);
  }, [containerRef, fromRef, toRef, curvature]);

  return (
    <svg className={`absolute inset-0 ${className}`}>
      <defs>
        <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <motion.path
        ref={pathRef}
        fill="none"
        stroke="url(#beam-gradient)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          direction: reverse ? "reverse" : "normal",
        }}
      />
    </svg>
  );
};