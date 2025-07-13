import React from "react";
import {   GlowingStarsBackgroundCard,
  GlowingStarsDescription,
  GlowingStarsTitle, } from "./ui/GlowingStarsBackgroundCard";

GlowingStarsTitle
const GlowingStarsDemo = () => {
  const Icon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-4 w-4 text-white stroke-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  );

  return (
    <div className="flex py-20 items-center justify-center ">
      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>Your Title Here</GlowingStarsTitle>
        <div className="flex justify-between items-end">
          <GlowingStarsDescription>
            Your description text goes here
          </GlowingStarsDescription>
          <div className="h-8 w-8 rounded-full  flex items-center justify-center">
            <Icon />
          </div>
        </div>
      </GlowingStarsBackgroundCard>
    </div>
  );
};

export default GlowingStarsDemo;