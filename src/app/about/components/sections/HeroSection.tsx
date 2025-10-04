"use client";
import React from "react";

const HeroSection: React.FC = () => (
  <header className="bg-slate-300 dark:bg-gray-800 transition-colors duration-1000">
    <section className="flex items-center justify-center" style={{ height: "500px" }}>
      <div className="text-center">
        <p className="text-xl font-medium tracking-wider text-gray-700 dark:text-gray-300 transition-colors duration-1000">
          Creative Vision, Captured Perfectly
        </p>
        <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl transition-colors duration-1000">
          Bringing Your Ideas to Life with <br /> Stunning Visuals and Web Solutions
        </h2>
        <div className="flex justify-center mt-8">
          <a
            className="px-8 py-2 text-lg font-medium text-white transition-colors duration-300 transform bg-teal-500 rounded hover:bg-teal-400"
            href="#"
          >
            Let&apos;s Create Something Amazing
          </a>
        </div>
      </div>
    </section>
  </header>
);

export default HeroSection;
