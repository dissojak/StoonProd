"use client";
import Link from "next/link";
import React from "react";

const AdVideoSection: React.FC = () => (
  <section className="bg-slate-100 dark:bg-gray-900 transition-colors duration-1000">
    <div className="max-w-5xl px-6 py-16 mx-auto">
      <div className="px-8 py-12 bg-gray-800 dark:bg-gray-700 rounded-md md:px-20 md:flex md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-semibold text-white dark:text-gray-100">
            Ad Video Production
          </h3>
          <p className="max-w-md mt-4 text-gray-400 dark:text-gray-300">
            We specialize in creating impactful ad videos to promote your brand, products, and
            services.
          </p>
        </div>
        <Link href={`/contact?sbj=${encodeURIComponent("VideoAdvertising")}`}
          className="block px-8 py-2 mt-6 text-lg font-medium text-center text-white transition-colors duration-300 transform bg-teal-500 rounded md:mt-0 hover:bg-teal-400 dark:bg-teal-600 dark:hover:bg-teal-500"
          
        >
          Get In Touch
        </Link>
      </div>
    </div>
  </section>
);

export default AdVideoSection;
