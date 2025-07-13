"use client";
import React, { useState } from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "../utils/cn";
import { GradualSpacing } from "./ui/GradualSpacing";
import { HoverBorderGradient } from "./ui/HoverBorderGradient";

export default function Contact() {
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
    <div className="relative flex   w-full items-center justify-center overflow-hidden bg-white dark:bg-black py-10 md:py-0">
      {/* Grid background */}
      <div
      
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
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="w-full max-w-4xl ]">
            {/* GradualSpacing wrapper with responsive text size */}
            <div className="mb-4 md:mb-6 text-center h-[80px]">
              <GradualSpacing 
                text="Ready to take your igital" 
                className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-6xl font-bold text-transparent sm:text-3xl md:text-5xl lg:text-6xl" 
              />
            </div>
            <div className="mb-4 md:mb-6 text-center">
              <GradualSpacing 
                text="presence to the next level?" 
                className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-6xl font-bold text-transparent sm:text-3xl md:text-5xl lg:text-6xl" 
              />
            </div>
            
            
          
            {/* Responsive paragraph with adjusted max-width */}
           

      
          </div>
           <p className="w-[1000px] text-white text-center">
             Reach out to me today and let's discuss how I can help your achieve your goals.
            </p>
        </div>
      </div>
    </div>
  );
}