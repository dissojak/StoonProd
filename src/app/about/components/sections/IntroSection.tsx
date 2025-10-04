"use client";
import React from "react";
import Image from "next/image";

const IntroSection: React.FC = () => (
  <section className="bg-white dark:bg-gray-900 transition-colors duration-1000">
    <div className="max-w-5xl px-6 py-16 mx-auto">
      <div className="items-center md:flex md:space-x-6">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-teal-400">
            Capturing Moments, Creating Experiences
          </h3>
          <p className="max-w-md mt-4 text-gray-600 dark:text-gray-300">
            From breathtaking photography and videography to innovative web design, we bring
            your vision to life with creativity and precision. Our experienced team specializes
            in crafting content that resonates with your audience.
          </p>
          <a href="#team" className="block mt-8 text-teal-500 dark:text-teal-400 underline">
            Meet Our Team
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2">
          <div className="flex items-center justify-center">
            <div className="max-w-md">
              <Image
                className="object-cover object-center w-full rounded-md shadow"
                style={{ height: "500px" }}
                src="https://images.unsplash.com/photo-1618346136472-090de27fe8b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=673&q=80"
                alt="Creative Team"
                width={673}
                height={500}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default IntroSection;
