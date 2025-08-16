"use client";
import React from "react";
import { Boxes } from "./ui/background-boxes";
import { cn } from "../lib/utils";

export function BackgroundBoxesDemo() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-white">
      <div className="absolute inset-0 w-full h-full bg-white z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
    </div>
  );
}