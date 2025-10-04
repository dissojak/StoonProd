"use client";
import React from "react";
import TeamMembers from "@/app/UI/TeamMembers";
import HeroSection from "./components/sections/HeroSection";
import IntroSection from "./components/sections/IntroSection";
import VisualStoriesSection from "./components/sections/VisualStoriesSection";
import ServicesSection from "./components/sections/ServicesSection";
import AdVideoSection from "./components/sections/AdVideoSection";
import ExpertiseSection from "./components/sections/ExpertiseSection";
import BrandVisualsSection from "./components/sections/BrandVisualsSection";
import BrandImpactSection from "./components/sections/BrandImpactSection";
import Footer from "@/components/shared/Footers/Footer";

const AboutPage: React.FC = () => (
  <div>
    <HeroSection />
    <IntroSection />
    <VisualStoriesSection />
    <ServicesSection />
    <AdVideoSection />
    <ExpertiseSection />
    <BrandVisualsSection />
    <BrandImpactSection />
    <TeamMembers />
    <Footer />
  </div>
);

export default AboutPage;