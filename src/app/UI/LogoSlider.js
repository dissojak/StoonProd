import React from "react";

const LogoSlider = () => {
  return (
    <>
      <div className="relative overflow-hidden py-6 bg-violet-500 -mt-9 rotate-[-2.5deg] transform skew-x-[-2.5deg] w-full">
        {/* Gradient mask for the left and right edges */}
        <div className="absolute top-0 left-0 h-full w-32 sm:w-48 bg-gradient-to-l from-transparent to-white dark:to-black z-10"></div>
        <div className="absolute top-0 right-0 h-full w-32 sm:w-48 bg-gradient-to-r from-transparent to-white dark:to-black z-10"></div>

        {/* Wrapping the logos in a container */}
        <div className="relative w-screen overflow-x-hidden">
          <div className="flex items-center space-x-10 animate-slide">
            <img
              src="/assets/images/logos/APLM.svg"
              className="h-6 sm:h-8"
              alt="APLM Logo"
            />
            <img
              src="/assets/images/logos/djassaku.svg"
              className="h-6 sm:h-8"
              alt="djassaku Logo"
            />
            <img
              src="/assets/images/logos/AG.svg"
              className="h-6 sm:h-8 invert"
              alt="accessgalleryofficial Logo"
            />
            <img
              src="/assets/images/logos/Isomat.svg"
              className="h-6 sm:h-8 invert"
              alt="Isomat Logo"
            />
            <img
              src="/assets/images/logos/Tedx.svg"
              className="h-6 sm:h-8"
              alt="Tedx Logo"
            />
            <img
              src="/assets/images/logos/Wajahni.png"
              className="h-6 sm:h-8 invert"
              alt="Wajahni Logo"
            />
            <img
              src="/assets/images/logos/flashBac.svg"
              className="h-6 sm:h-8"
              alt="flashBac Logo"
            />
            <img
              src="/assets/images/logos/Kreative.svg"
              className="h-6 sm:h-8"
              alt="Kreative Logo"
            />
            <img
              src="/assets/images/logos/creative.svg"
              className="h-6 sm:h-8"
              alt="creative Logo"
            />
            <img
              src="/assets/images/logos/AveMusic.svg"
              className="h-6 sm:h-8"
              alt="AveMusic Logo"
            />
            <img
              src="/assets/images/logos/TOUSIHEN.svg"
              className="h-6 sm:h-8 invert"
              alt="TOUSIHEN Logo"
            />
            <img
              src="/assets/images/logos/Spoy.svg"
              className="h-6 sm:h-8"
              alt="Spoy Logo"
            />
            <img
              src="/assets/images/logos/Artifex.svg"
              className="h-6 sm:h-8 w-24 sm:w-32 object-contain"
              alt="Artifex Logo"
            />
            <img
              src="/assets/images/logos/HvH.svg"
              className="h-6 sm:h-8"
              alt="HvH Logo"
            />
            <img
              src="/assets/images/logos/hultprize.svg"
              className="h-6 sm:h-8"
              alt="hultprize Logo"
            />
            <div className="h-6 sm:h-8 relative">
              <div
                className="absolute inset-0 h-full w-full bg-no-repeat bg-contain bg-center opacity-0 hover:opacity-100 transition-opacity duration-150"
                style={{
                  backgroundImage: `url('/assets/images/logos/menshealth.png')`,
                }}
              ></div>
            </div>
            <img
              src="/assets/images/logos/TA.svg"
              className="h-6 sm:h-8"
              alt="TA Logo"
            />
            <img
              src="/assets/images/logos/djassaku.svg"
              className="h-6 sm:h-8"
              alt="djassaku Logo"
            />
            <img
              src="/assets/images/logos/APLM.svg"
              className="h-6 sm:h-8"
              alt="APLM Logo"
            />
            <img
              src="/assets/images/logos/AG.svg"
              className="h-6 sm:h-8 invert"
              alt="accessgalleryofficial Logo"
            />
            <img
              src="/assets/images/logos/Isomat.svg"
              className="h-6 sm:h-8 invert"
              alt="Isomat Logo"
            />
            <img
              src="/assets/images/logos/Tedx.svg"
              className="h-6 sm:h-8"
              alt="Tedx Logo"
            />
            <img
              src="/assets/images/logos/Wajahni.png"
              className="h-6 sm:h-8 invert"
              alt="Wajahni Logo"
            />
            <img
              src="/assets/images/logos/flashBac.svg"
              className="h-6 sm:h-8"
              alt="flashBac Logo"
            />
            <img
              src="/assets/images/logos/Kreative.svg"
              className="h-6 sm:h-8"
              alt="Kreative Logo"
            />
            <img
              src="/assets/images/logos/creative.svg"
              className="h-6 sm:h-8 w-24 sm:w-32 object-contain"
              alt="creative Logo"
            />
            <img
              src="/assets/images/logos/AveMusic.svg"
              className="h-6 sm:h-8 w-24 sm:w-32 object-contain"
              alt="AveMusic Logo"
            />
            <img
              src="/assets/images/logos/Spoy.svg"
              className="h-6 sm:h-8 w-24 sm:w-32 object-contain"
              alt="Spoy Logo"
            />
            {/* Repeat the logos for continuous animation */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoSlider;
