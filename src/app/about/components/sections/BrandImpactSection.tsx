"use client";
import React from "react";
import Image from "next/image";

const BrandImpactSection: React.FC = () => (
  <section className="bg-slate-100 dark:bg-gray-900 transition-colors duration-1000">
    <div className="max-w-5xl px-6 py-16 mx-auto space-y-8 md:flex md:items-center md:space-y-0">
      <div className="md:w-2/3">
        <div className="hidden md:flex md:items-center md:space-x-10">
          <Image
            className="object-cover object-center rounded-md shadow w-72 h-72"
            src="/assets/images/conentCreationMouhib.png"
            alt="Figma showcase item"
            width={500}
            height={500}
          />
          <Image
            className="object-cover object-center w-64 rounded-md shadow h-96"
            src="/assets/images/merch.jpg"
            alt="Merch product"
            width={500}
            height={1000}
          />
        </div>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-teal-400 md:mt-6">
          Elevate Your Brand with Impactful Visuals
        </h2>
        <p className="max-w-lg mt-4 text-gray-600 dark:text-gray-300">
          Our team of creative experts is dedicated to producing stunning visuals that capture
          attention and leave a lasting impression. Whether you need promotional videos, event
          coverage, or a complete visual package, we&apos;ll help bring your vision to life and
          elevate your brand&apos;s presence.
        </p>
      </div>
      <div className="md:w-1/3">
        <Image
          className="object-cover object-center w-full rounded-md shadow"
          style={{ height: "700px" }}
          src="/assets/images/git.png"
          alt="Git logo"
          width={800}
          height={2000}
        />
      </div>
    </div>
  </section>
);

export default BrandImpactSection;
