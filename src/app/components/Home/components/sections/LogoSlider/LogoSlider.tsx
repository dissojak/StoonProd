import React from "react";
import { logos } from "./data/logos";
import { useLogoList } from "./hooks/useLogoList";
import { GradientOverlay } from "./components/GradientOverlay";
import { LogoImage } from "./components/LogoImage";

const LogoSlider = () => {
  const fullList = useLogoList(logos);

  return (
    <div className="relative overflow-hidden py-6 bg-violet-500 -mt-9 rotate-[-2.5deg] transform skew-x-[-2.5deg] w-full">
      <GradientOverlay position="left" />
      <GradientOverlay position="right" />
      <div className="relative w-screen overflow-x-hidden">
        <div className="flex items-center space-x-10 animate-slide-xs sm:animate-slide-sm md:animate-slide-md">
          {fullList.map((logo, i) => (
            <LogoImage key={`logo-${i}`} logo={logo} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
