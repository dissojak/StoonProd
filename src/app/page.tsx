import { Fragment } from "react";
import SliderSection from "@/app/components/Home/components/sections/SliderSection";
import HeroSection from "@/app/components/Home/components/sections/HeroSection";
// import VideomakingSection from "@/app/components/Home/VideomakingSection";
// import PhotographySection from "@/app/components/Home/PhotographySection";
// import ContentCreationSection from "@/app/components/Home/ContentCreationSection";
// import WebDevelopmentSection from "@/app/components/Home/WebDevelopmentSection";
// import ServiceNavigation from "@/app/components/Home/ServiceNavigation";
import LogoSlider from "./components/Home/components/sections/LogoSlider";
import NewFooter from "@/components/shared/Footers/NewFooter";
import ImpactSection from "./UI/Sections/Impact";
import Graphic from "./UI/Sections/VideoContentSection";
import ContentCreation from "./UI/Sections/ContentCreationSection";
import PhotographyHeader from "./UI/Sections/PhotographyHeader";
import DevelopmentHeroSection from "./UI/Sections/DevelopmentHeroSection";
import Services from "@/app/components/Home/components/sections/Services";

export default function Home() {
  return (
    <Fragment>
      <div className="min-h-screen bg-white dark:bg-gray-950">
        <div
          className="hero_area 
        rounded-tl-none rounded-tr-none rounded-bl-none 
        transition-colors duration-1000 transform dark:bg-[#318a87]"
        >
          <div className=" bg-[#112C30] h-16 w-auto -mb-4 xs:hidden ">
            <div className="text-white p-4">instagram</div>
          </div>
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
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
        {/* <VideomakingSection />
        <PhotographySection />
        <ContentCreationSection />
        <WebDevelopmentSection /> */}
        <NewFooter />
      </div>
    </Fragment>
  );
}
