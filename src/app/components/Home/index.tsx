import React, { Fragment } from "react";
import HeroArea from "./components/HeroArea";
import {
  HeroSection,
  LogoSlider,
  ImpactSection,
  Graphic,
  ContentCreation,
  PhotographyHeader,
  DevelopmentHeroSection,
  Services,
} from "./components/sections";
import NewFooter from "@/components/shared/Footers/NewFooter";

/**
 * Home Page (Composed)
 * Separated into:
 *  - hooks: useCircles
 *  - utils: constants
 *  - components: HeroArea, DecorativeCircles, InstagramBar
 *  - section components (pre-existing)
 */
export default function Home() {
  return (
    <Fragment>
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <HeroArea />
      </div>
      <LogoSlider />
      <HeroSection />
      <ImpactSection />
      <Services />
      <Graphic />
      <PhotographyHeader />
      <ContentCreation />
      <DevelopmentHeroSection />
      <NewFooter />
    </Fragment>
  );
}
