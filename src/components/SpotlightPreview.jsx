"use client";
import React, { useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "../utils/cn";
import { GradualSpacing } from "./ui/GradualSpacing";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";

export default function SpotlightPreview() {
  const [copied, setCopied] = useState(false);
  const email = "jijinvjvazhippilly@gmail.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="relative flex  h-[50rem] w-full items-center justify-center overflow-hidden bg-white dark:bg-black py-10 md:py-0">
      {/* Grid background */}
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px] md:[background-size:60px_70px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Spotlight - Adjusted positions for different screens */}
      <Spotlight
        className="-top-24 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      {/* Fading radial gradient */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* Content - Made responsive with padding and text adjustments */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-10 md:pt-0">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-4xl flex flex-col items-center text-center gap-8">
            {/* GradualSpacing wrapper with responsive text size */}
            <div className="mb-4 md:mb-6 text-center">
              <GradualSpacing 
                text="JIJIN VJ" 
                className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-6xl font-bold text-transparent sm:text-3xl md:text-5xl lg:text-6xl " 
              />
            </div>
            
            <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent sm:text-3xl md:text-5xl lg:text-6xl ">
              FullStack Developer
            </h1>
          
            {/* Responsive paragraph with adjusted max-width */}
            <p className="w-11/12 text-center self-center text-sm sm:text-base font-normal text-neutral-500 dark:text-neutral-300  ">
              I am a passionate MERN Stack Developer with a knack for creating
              exceptional web experiences | React | Node.js | Express.js | MongoDB |
              Full Stack Expert | Tech Enthusiast | Freelancer & Content Creator
            </p>

            {/* Responsive button container */}
            <div className="mt-5 md:mt-6 flex justify-center ">
              <HoverBorderGradient
                onClick={handleCopyEmail}
                containerClassName="w-40 max-w-[200px] sm:max-w-none"
                className={cn(
                  "text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-4",
                  "w-full h-12 flex items-center justify-center",
                  "transition-all duration-300"
                )}
              >
                {copied ? "Email Copied!" : "Let's Connect"}
              </HoverBorderGradient>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}