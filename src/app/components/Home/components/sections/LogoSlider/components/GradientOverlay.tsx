import React from "react";

type GradientOverlayProps = {
  position: "left" | "right";
};

export const GradientOverlay: React.FC<GradientOverlayProps> = ({ position }) => {
  const gradientClass = position === "left" 
    ? "bg-gradient-to-l from-transparent to-white dark:to-black" 
    : "bg-gradient-to-r from-transparent to-white dark:to-black";
  
  const positionClass = position === "left" ? "left-0" : "right-0";

  return (
    <div 
      className={`absolute top-0 ${positionClass} h-full w-32 sm:w-48 ${gradientClass} z-10`} 
    />
  );
};
