import React from "react";
import Head from "next/head";
import Footer from "@/components/shared/Footers/Footer";
import MaintenanceSection from "../UI/MaintenanceSection";
import HeroHeader from "./components/HeroHeader";
import SectionLinks from "./components/SectionLinks";
import StatsGrid from "./components/StatsGrid";
import FakeDataNotice from "./components/FakeDataNotice";
import ServicesSequence from "./components/ServicesSequence";

function ServiceAndTariffs() {
  return (
    <>
      <Head>
        <title>Service and Tariffs | Stoon Production - Tunisia</title>
        <meta
          name="description"
          content="Explore our event coverage, video production, and web development services with detailed pricing plans. Choose the best option for your needs. Proudly serving Tunisia."
        />
        <meta
          name="keywords"
          content="event coverage Tunisia, video production Tunisia, web development Tunisia, pricing plans, professional services, Stoon Production"
        />
        <meta property="og:title" content="Service and Tariffs | Stoon Production - Tunisia" />
        <meta
          property="og:description"
          content="Explore our event coverage, video production, and web development services with detailed pricing plans. Choose the best option for your needs. Proudly serving Tunisia."
        />
        <meta property="og:image" content="/assets/images/merchWidth.jpg" />
        <meta property="og:url" content="https://www.stoonproduction.com/service-and-tariffs" />
        <meta name="twitter:title" content="Service and Tariffs | Stoon Production - Tunisia" />
        <meta
          name="twitter:description"
          content="Explore our event coverage, video production, and web development services with detailed pricing plans. Choose the best option for your needs. Proudly serving Tunisia."
        />
        <meta name="twitter:image" content="/assets/images/merchWidth.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="absolute w-full z-50" />
      <HeroHeader />
      <FakeDataNotice />
      <MaintenanceSection sectionHeight="40vh" />
      <ServicesSequence />

      <Footer />
    </>
  );
}

export default ServiceAndTariffs;
