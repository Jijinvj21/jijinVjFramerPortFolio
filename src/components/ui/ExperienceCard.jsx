"use client";
import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { cn } from "../../utils/cn";

export function ExperienceCard({
  company,
  period,
  location,
  description,
  className,
  width = "260px",
}) {
  return (
    <div className={cn("relative max-w-2xl px-4 sm:px-6 md:px-0 w-11/12 text-center", className)}>
      <div className="absolute inset-0 overflow-hidden rounded-2xl border-white/[0.1]">
        <MovingBorder duration={5000} rx="16%" ry="16%">
          <div className="h-20 w-20 bg-[radial-gradient(#ffffff_0%,transparent_70%)] opacity-40" />
        </MovingBorder>
      </div>

      <div className="relative flex flex-col gap-2 rounded-2xl p-4 sm:p-6 border border-white/[0.1] text-white backdrop-blur-xl h-auto min-h-[250px]   ">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 h-[50px]  ">
          <h3 className="text-lg sm:text-xl font-bold sm:translate-x-2">{company}</h3>
          <div className="flex flex-wrap gap-1 text-sm text-gray-300 sm:w-auto text-center items-center justify-center translate-x-[-10px]    "  >
            <span>{period}</span>
            <span>|</span>
            <span>{location}</span>
          </div>
        </div>

        {/* Separator */}
        <div className="mt-2 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent  w-11/12 " />

        {/* Description */}
        <p className="mt-3 whitespace-pre-line text-gray-200 text-sm sm:text-base text-center">
          {description}
        </p>
      </div>
    </div>
  );
}

export const MovingBorder = ({
  children,
  duration = 3000,
  rx,
  ry,
  ...otherProps
}) => {
  const pathRef = useRef();
  const progress = useMotionValue(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x);
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y);

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}>
        <rect fill="none" width="100%" height="100%" rx={rx} ry={ry} ref={pathRef} />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}>
        {children}
      </motion.div>
    </>
  );
};
