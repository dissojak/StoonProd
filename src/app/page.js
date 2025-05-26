import { Fragment } from "react";
import Navbar from "../UI/Header/Navbar";
import SliderSection from "../components/Home/SliderSection";
import HeroSection from "../components/Home/HeroSection";
import VideomakingSection from "../components/Home/VideomakingSection";
import PhotographySection from "../components/Home/PhotographySection";
import ContentCreationSection from "../components/Home/ContentCreationSection";
import WebDevelopmentSection from "../components/Home/WebDevelopmentSection";
import Footer from "../UI/Footers/Footer";
import ServiceNavigation from "../components/Home/ServiceNavigation";
import LogoSlider from "../UI/LogoSlider";
import MaintenanceSection from "../UI/MaintenanceSection";
import Header from "../UI/Header/Header";
import Services from "../components/Home/Services";
import NewFooter from "../UI/Footers/NewFooter";
import ImpactSection from "../UI/Sections/Impact";
import Graphic from "../UI/Sections/VIdeoContent";
import ContentCreation from "../UI/Sections/ContentCreationSection";
import PhotographyHeader from "../UI/Sections/PhotographyHeader";
import DevelopmentHeroSection from "../UI/Sections/DevelopmentHeroSection";

export default function Home() {
  return (
    <Fragment>
      <div className="min-h-screen bg-white dark:bg-gray-950">
        {/* <div
        className="hero_area 
        lg:rounded-br-[350px] 
        rounded-tl-none rounded-tr-none rounded-bl-none 
        xs:rounded-br-[175px]
        transition-colors duration-1000 transform dark:bg-[#112C30]"
      > */}
        {/* <div className="h-16 bg-white dark:bg-gray-950"> */}
        <div
          className="hero_area 
        rounded-tl-none rounded-tr-none rounded-bl-none 
        transition-colors duration-1000 transform dark:bg-[#318a87]"
        >
          {/* lg:min-h-[88vh] xs:min-h-[83vh]
        rounded-br-[350px] rounded-tl-none rounded-tr-none rounded-bl-none 
        xs:rounded-br-[200px] xs:rounded-tl-none xs:rounded-tr-none xs:rounded-bl-none" */}
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
          {/* <Header/> */}
          {/* <Navbar /> */}
          <SliderSection />
        </div>
        <LogoSlider />
        <HeroSection />
        {/* <ServiceNavigation /> */}
        <ImpactSection/>
        <Services/>
        <Graphic/>
        <PhotographyHeader/>
        <ContentCreation/>
        <DevelopmentHeroSection/>
        {/* <VideomakingSection />
        <PhotographySection />
        <ContentCreationSection />
        <WebDevelopmentSection /> */}
        {/* <Footer /> */}
        <NewFooter />
      </div>
    </Fragment>
  );
}
