"use client";

import Link from "next/link";
import Image from "next/image";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// import BackgroundPaths from "@/app/UI/BackgroundPaths";
import MaintenanceSection from "@/UI/MaintenanceSection";

const SliderSection = () => {
  return (
    <>
      {/* <BackgroundPaths> */}
      {/* <MaintenanceSection sectionHeight="40vh" /> */}
      <section className="text-white flex items-center xs:min-h-screen sm:min-h-[110vh] lg:min-h-screen xl:max-w-[1536px] xl:w-full xl:mx-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              {/* <Image
                src="/assets/images/filmingGreen.svg"
                alt="Film production illustration"
                className="w-full max-w-lg mx-auto brightness-100 dark:brightness-75 transition duration-1000 filter"
                width={800}
                height={500}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                priority
              /> */}

              {/* <DotLottieReact
                src="https://lottie.host/030750b9-3de5-487e-b423-bde64873f3f7/pXeKCWZCit.lottie"
                background="transparent"
                speed={1}
                style={{ width: 300, height: 300 }}
                direction={1}
                playMode="forward"
                loop
                controls
                autoplay
              /> */}
              {/* <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full max-w-lg h-auto mx-auto block"
                style={{
                  backgroundColor: "transparent",
                  mixBlendMode: "multiply",
                  border: "none",
                  outline: "none",
                }}
              >
                <source
                  src="/assets/animations/vediographycontentanimation.webm"
                  type="video/webm"
                />
                <source
                  src="/assets/animations/vediographycontentanimation.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video> */}
              <img
                src="/assets/animations/vediocru.gif"
                alt="Film production illustration"
                className="w-full max-w-3xl mx-auto h-auto lg:mb-32"
              />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 text-center lg:text-right z-10">
              <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 text-myYellow">
                FILM <br className="hidden sm:inline" /> PRODUCTION
              </h1>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed max-w-xl mx-auto lg:ml-auto lg:mr-0">
                Bringing your vision to life through creative video production,
                stunning photography, and cutting-edge content creation. We
                craft stories that resonate and websites that inspire.
              </p>

              {/* Button Section */}
              <div className="lg:flex lg:justify-start mt-8 sm:mt-4 sm:mb-12">
                <Link
                  href="https://www.instagram.com/adem_ben_amor/"
                  className="inline-flex items-center bg-myYellow text-black rounded-3xl 
                lg:px-6 py-4 xs:px-4
               hover:bg-myYellowHover
               hover:text-white hover:font-medium"
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
      {/* </BackgroundPaths> */}
    </>
  );
};

export default SliderSection;
