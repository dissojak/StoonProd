"use client";
import React from "react";
import ExpertiseItem from "./ExpertiseItem";

const ExpertiseSection: React.FC = () => (
  <section className="bg-white dark:bg-gray-800 transition-colors duration-1000">
    <div className="max-w-5xl px-6 py-16 mx-auto">
      <div className="md:flex md:justify-between">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
          Elevating Your Brand with Video, Web Design, <br className="sm:hidden md:block" />
          and Content Creation
        </h2>
        <a href="#" className="block mt-6 text-teal-500 underline md:mt-0 dark:text-teal-400">
          Our Expertise
        </a>
      </div>
      <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
        <ExpertiseItem
          title="Video Creation & Photography"
          description="From stunning promotional videos to high-quality photography, we capture your brand&apos;s essence in visuals that engage and convert."
        />
        <ExpertiseItem
          title="Web Design & Development"
          description="Our team builds responsive, user-friendly websites that not only look great but are also optimized for performance and conversions."
        />
        <ExpertiseItem
          title="Content Creation"
          description="We create captivating content across various platforms that resonates with your audience and strengthens your brand presence online."
        />
      </div>
    </div>
  </section>
);

export default ExpertiseSection;
