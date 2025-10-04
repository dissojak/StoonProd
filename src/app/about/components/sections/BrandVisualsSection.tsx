"use client";
import React from "react";
import Image from "next/image";

const BrandVisualsSection: React.FC = () => (
  <section className="bg-slate-100 dark:bg-gray-900 transition-colors duration-1000">
    <div className="max-w-5xl px-6 py-16 mx-auto text-center">
      <h2 className="text-3xl font-semibold text-gray-800 dark:text-teal-400">
        Capturing the Essence of Your Brand through <br /> Stunning Visuals and Design
      </h2>
      <p className="max-w-lg mx-auto mt-4 text-gray-600 dark:text-gray-300">
        We specialize in creating high-impact videos, photography, and sleek, user-friendly
        websites to enhance your brand presence. Let us bring your vision to life with
        captivating visuals and seamless web experiences.
      </p>
      <Image
        className="object-cover object-top w-full mt-16 rounded-md shadow h-80"
        src="/assets/images/merchFaceUp.jpg"
        alt="Creative visual content"
        width={1350}
        height={2000}
        sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1920px"
        priority
      />
    </div>
  </section>
);

export default BrandVisualsSection;
