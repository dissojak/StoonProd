import { Fragment } from "react";
import {
  SliderSection,
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

export default function Home() {
  return (
    <Fragment>
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <div
          className="hero_area rounded-tl-none rounded-tr-none rounded-bl-none transition-colors duration-1000 transform dark:bg-[#318a87]"
        >
          <div className=" bg-[#112C30] h-16 w-auto -mb-4 xs:hidden ">
            <div className="text-white p-4">instagram</div>
          </div>
            <ul className="circles">
              {Array.from({ length: 10 }).map((_, i) => (
                <li key={i}></li>
              ))}
            </ul>
          <SliderSection />
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
      </div>
    </Fragment>
  );
}
