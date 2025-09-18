"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const SliderSection: React.FC = () => {
  return (
    <>
      <section className="text-white flex items-center xs:min-h-screen sm:min-h-[110vh] lg:min-h-screen xl:max-w-[1536px] xl:w-full xl:mx-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2">
              <Image
                src="https://res.cloudinary.com/duvougrqx/image/upload/v1757355185/figmaUploads/vediocru_yqftqk.gif"
                alt="Film production illustration"
                width={800}
                height={600}
                className="w-full max-w-3xl mx-auto h-auto lg:mb-32"
                unoptimized
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-right z-10">
              <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-myYellow">
                FILM <br className="hidden sm:inline" /> PRODUCTION
              </h1>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed max-w-xl mx-auto lg:ml-auto lg:mr-0">
                Bringing your vision to life through creative video production, stunning
                photography, and cutting-edge content creation. We craft stories that resonate and
                websites that inspire.
              </p>
              <div className="lg:flex lg:justify-start mt-8 sm:mt-4 sm:mb-12">
                <Link
                  href="https://www.instagram.com/adem_ben_amor/"
                  className="inline-flex items-center bg-myYellow text-black rounded-3xl lg:px-6 py-4 xs:px-4 hover:bg-myYellowHover hover:text-white hover:font-medium"
                >
                  Contact Us
                  <div className="arrow-container ml-2">
                    <div className="arrow-wrapper">
                      <div className="arrow"></div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SliderSection;
