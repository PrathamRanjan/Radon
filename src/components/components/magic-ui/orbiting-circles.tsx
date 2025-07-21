import React from "react";
import { motion } from "framer-motion";

interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
}

export default function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 10,
  radius = 50,
}: OrbitingCirclesProps) {
  return (
    <motion.div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
      animate={{
        rotate: reverse ? -360 : 360,
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      className={className}
    >
      <motion.div
        style={{
          position: "absolute",
          left: `${radius}px`,
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}