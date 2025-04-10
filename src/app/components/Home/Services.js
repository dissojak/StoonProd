"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const services = [
  {
    id: "video-production",
    title: "Video Production",
    description: "Engaging video content",
    image: "/assets/images/videomaking.png",
  },
  {
    id: "photography",
    title: "Photography",
    description: "Capture the perfect moment",
    image: "/assets/images/photographyIcon.png",
  },
  {
    id: "contentCreation",
    title: "Content Creation",
    description: "Creative content for brands",
    image: "/assets/images/socialmedia.png",
  },
  {
    id: "web-development",
    title: "Web Development",
    description: "Build your online presence",
    image: "/assets/images/DevIcon.png",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800">
      <div
        className="container mx-auto lg:max-w-screen-lg md:max-w-screen-sm py-20 "
        id="services-section"
      >
        <div className="text-center mb-14">
          <p className="text-myRed text-lg font-normal mb-3 tracking-widest uppercase">
            S e r v i c e s
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white lg:max-w-60% mx-auto">
            Explore our services.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 xs:gap-y-44 sm:gap-y-32 gap-x-5 xs:mt-48 sm:mt-36">
          {services.map((service, i) => (
            <div
              className="p-8 relative rounded-3xl bg-gradient-to-b from-black/5 to-white dark:from-white/5 dark:to-black"
              key={i}
            >
              <div className="work-img-bg bg-white rounded-full flex justify-center absolute -top-[30%] sm:top-[-20%] md:top-[-25%] lg:top-[-25%] left-1/2 transform -translate-x-1/2">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={120}
                  height={80}
                />
              </div>
              <h3 className="text-2xl text-black dark:text-white font-semibold text-center mt-16">
                {service.title}
              </h3>
              <p className="text-lg font-normal text-black/50 dark:text-white/50 text-center mt-2">
                {service.description}
              </p>
              <div className="flex items-center justify-center">
                <Link
                  href={`#${service.id}`}
                  className="text-center text-lg group duration-300 ease-in-out font-medium text-primary mt-2 overflow-hidden flex items-center relative after:absolute after:w-full after:h-px after:bg-primary after:bottom-0 after:right-0 after:translate-x-full hover:after:translate-x-0"
                >
                  Learn More
                  <Icon
                    icon="tabler:chevron-right"
                    width="24"
                    height="24"
                    className="text-primary"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
