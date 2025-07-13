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
    <div className="relative flex w-full items-center justify-center overflow-hidden bg-white dark:bg-black py-10 md:py-20">
      {/* Spotlight */}
      <Spotlight
        className="-top-24 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      {/* Radial fade overlay */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4">
        <div className="flex flex-col justify-center items-center gap-6">
          {/* Headings */}
          <div className="text-center space-y-2">
            <GradualSpacing
              text="Ready to take your digital"
              className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-3xl  sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent"
            />
            <GradualSpacing
              text="presence to the next level?"
              className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent"
            />
          </div>

          {/* Paragraph */}
          <p className="text-white text-center max-w-[90%] sm:max-w-xl md:max-w-2xl lg:max-w-4xl text-base sm:text-lg md:text-xl">
            Reach out to me today and let's discuss how I can help you achieve your goals.
          </p>
        </div>
      </div>
    </div>
  );
}
