import Link from "next/link";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-white text-black py-20 dark:bg-gray-950 dark:text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 transition-colors duration-300 transform dark:hover:text-teal-400 hover:text-teal-300">
          Welcome to Stoon Production
        </h1>
        <p className="md:text-lg lg:text-xl leading-relaxed">
          We bring your creative ideas to life with video, photography, and digital content.
        </p>
        <Link href="/about">
        <button className="bg-myYellow text-black py-3 px-6 rounded-full mt-8 hover:bg-myYellowDark dark:bg-myYellow dark:text-white hover:dark:bg-myYellowDarken transition">
          Learn More
        </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
