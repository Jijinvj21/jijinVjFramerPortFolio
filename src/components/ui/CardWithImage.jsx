import React from "react";
import jijin from "../../assets/jijin.jpeg";
import { cn } from "../../utils/cn";

// Card content
const cardContent = {
  title: "",
  description: "",
};

// Card body component
const CardBody = ({ className = "p-4" }) => (
  <div className={cn(className)}>
    <h3 className="text-xl sm:text-2xl font-bold text-gray-100 tracking-tight mt-3 mb-2">
      {cardContent.title}
    </h3>
    <p className="text-sm sm:text-base text-gray-100">{cardContent.description}</p>
  </div>
);

// Main card component
export const CardWithImage = ({ children }) => {
  return (
    <div className="rounded-2xl relative overflow-hidden group w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-[2/3] mx-auto m-4">
      <img
        src={jijin}
        alt="card visual"
        className="w-full h-full object-cover absolute inset-0"
        loading="lazy"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/20 to-black/10"></div>

      {/* Card content */}
      {children ?? (
        <CardBody className="absolute px-4 pb-4 inset-0 flex flex-col justify-end w-full h-full" />
      )}
    </div>
  );
};
