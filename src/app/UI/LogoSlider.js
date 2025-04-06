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
              src="/assets/images/logos/3m.svg"
              className="h-6 sm:h-8"
              alt="3M Logo"
            />
            <img
              src="/assets/images/logos/barstool-store.svg"
              className="h-6 sm:h-8"
              alt="Barstool Logo"
            />
            <img
              src="/assets/images/logos/budweiser.svg"
              className="h-6 sm:h-8"
              alt="Budweiser Logo"
            />
            <img
              src="/assets/images/logos/buzzfeed.svg"
              className="h-6 sm:h-8"
              alt="Buzzfeed Logo"
            />
            <img
              src="/assets/images/logos/forbes.svg"
              className="h-6 sm:h-8"
              alt="Forbes Logo"
            />
            <img
              src="/assets/images/logos/macys.svg"
              className="h-6 sm:h-8"
              alt="Macys Logo"
            />
            <div className="h-6 sm:h-8 relative">
              <img
                src="/assets/images/logos/menshealth.svg"
                className="h-6 sm:h-8 w-24 sm:w-32 object-contain"
                alt="Men's Health Logo"
              />
              <div
                className="absolute inset-0 h-full w-full bg-no-repeat bg-contain bg-center opacity-0 hover:opacity-100 transition-opacity duration-150"
                style={{
                  backgroundImage: `url('/assets/images/logos/menshealth.png')`,
                }}
              ></div>
            </div>
            <img
              src="/assets/images/logos/mrbeast.svg"
              className="h-6 sm:h-8"
              alt="MrBeast Logo"
            />

            {/* Repeat the logos for continuous animation */}
            <img
              src="/assets/images/logos/3m.svg"
              className="h-6 sm:h-8"
              alt="3M Logo"
            />
            <img
              src="/assets/images/logos/barstool-store.svg"
              className="h-6 sm:h-8"
              alt="Barstool Logo"
            />
            <img
              src="/assets/images/logos/budweiser.svg"
              className="h-6 sm:h-8"
              alt="Budweiser Logo"
            />
            <img
              src="/assets/images/logos/buzzfeed.svg"
              className="h-6 sm:h-8"
              alt="Buzzfeed Logo"
            />
            <img
              src="/assets/images/logos/forbes.svg"
              className="h-6 sm:h-8"
              alt="Forbes Logo"
            />
            <img
              src="/assets/images/logos/macys.svg"
              className="h-6 sm:h-8"
              alt="Macys Logo"
            />
            <img
              src="/assets/images/logos/menshealth.svg"
              className="h-6 sm:h-8"
              alt="Men's Health Logo"
            />
            <img
              src="/assets/images/logos/mrbeast.svg"
              className="h-6 sm:h-8"
              alt="MrBeast Logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoSlider;
