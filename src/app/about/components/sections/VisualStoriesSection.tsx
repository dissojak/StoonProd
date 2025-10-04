"use client";
import React from "react";
import Image from "next/image";

const VisualStoriesSection: React.FC = () => (
  <section className="bg-slate-100 dark:bg-gray-800 transition-colors duration-1000">
    <div className="max-w-5xl px-6 py-16 mx-auto">
      <div className="items-center md:flex md:space-x-6">
        <div className="md:w-1/2">
          <div className="flex items-center justify-center">
            <div className="max-w-md">
              <Image
                className="object-cover object-center w-full rounded-md shadow"
                style={{ height: "500px" }}
                src="https://images.unsplash.com/photo-1616874535244-73aea5daadb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                alt="Photography and Videography"
                width={634}
                height={500}
              />
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white transition-colors duration-1000">
            Crafting Visual Stories for Every Moment
          </h3>
          <p className="max-w-md mt-4 text-gray-600 dark:text-gray-300 transition-colors duration-1000">
            At Stoon Production, we capture stunning moments through photography and
            videography. Whether it&apos;s a personal event or a professional project, we bring
            creativity and precision to every frame. Our work ensures your story is told in the
            most impactful way.
          </p>
          <a
            href="#team"
            className="block mt-8 text-teal-500 dark:text-teal-400 underline transition-colors duration-1000"
          >
            Meet Our Experienced Team
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default VisualStoriesSection;
