import React from "react";
import Image from "next/image";
import StatsGrid from "./StatsGrid";
import SectionLinks from "./SectionLinks";

const HeroHeader: React.FC = () => (
  <div className="relative py-24 sm:py-32">
    <div className="block dark:hidden transition duration-1000">
      <Image
        src="/assets/images/merchWidth.jpg"
        alt="Light Mode Merch"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center bg-blue-500 bg-opacity-40 filter blur-sm"
        width={1920}
        height={1080}
        priority
      />
    </div>
    <div className="hidden dark:block transition duration-1000">
      <Image
        src="/assets/images/merchWidthDarkMode.png"
        alt="Dark Mode Merch"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center bg-blue-500 bg-opacity-40 filter blur-sm"
        width={1920}
        height={1080}
        priority
      />
    </div>

    <div className="mx-auto max-w-7xl px-6 lg:px-8 xs:mt-10">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          We specialize in video creation, photography, and web development. Our services ensure
          that your brand is professionally showcased across various platforms, and we are proud to
          serve Tunisia.
        </p>
      </div>
    </div>

    <SectionLinks />
    <StatsGrid />
  </div>
);

export default HeroHeader;
