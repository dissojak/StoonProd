import React from "react";
import InstagramBar from "./InstagramBar";
import DecorativeCircles from "./DecorativeCircles";
import { SliderSection } from "./sections";

interface HeroAreaProps {
  showInstagram?: boolean;
  circlesCount?: number;
}

const HeroArea: React.FC<HeroAreaProps> = ({ showInstagram = true, circlesCount = 10 }) => {
  return (
    <div className="hero_area rounded-tl-none rounded-tr-none rounded-bl-none transition-colors duration-1000 transform dark:bg-[#318a87]">
      {showInstagram && <InstagramBar />}
      <DecorativeCircles count={circlesCount} />
      <SliderSection />
    </div>
  );
};

export default HeroArea;
