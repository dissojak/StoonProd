import React from "react";

const logos = [
  { src: "APLM.svg" },
  { src: "djassaku.svg" },
  { src: "AG.svg", invert: true },
  { src: "Isomat.svg", invert: true },
  { src: "Tedx.svg" },
  { src: "Wajahni.png", invert: true },
  { src: "flashBac.svg" },
  { src: "Kreative.svg" },
  { src: "Creative.svg" },
  { src: "AveMusic.svg" },
  { src: "Spoy.svg" },
  { src: "Artifex.svg", wide: true },
  { src: "HVH.svg" },
  { src: "hultprize.svg" },
  { src: "TA.svg" },
];

const shuffleAvoidConsecutiveDupes = (arr) => {
  const shuffled = [...arr];
  let attempt = 0;
  do {
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    attempt++;
  } while (
    shuffled.some((logo, i) => i > 0 && logo.src === shuffled[i - 1].src) &&
    attempt < 10
  );
  return shuffled;
};

const LogoSlider = () => {
  const fullList = [...logos, ...shuffleAvoidConsecutiveDupes(logos)];

  return (
    <div className="relative overflow-hidden py-6 bg-violet-500 -mt-9 rotate-[-2.5deg] transform skew-x-[-2.5deg] w-full">
      <div className="absolute top-0 left-0 h-full w-32 sm:w-48 bg-gradient-to-l from-transparent to-white dark:to-black z-10" />
      <div className="absolute top-0 right-0 h-full w-32 sm:w-48 bg-gradient-to-r from-transparent to-white dark:to-black z-10" />
      <div className="relative w-screen overflow-x-hidden">
        <div className="flex items-center space-x-10 animate-slide-xs sm:animate-slide-sm md:animate-slide-md">
          {fullList.map((logo, i) => (
            <img
              key={`logo-${i}`}
              src={`/assets/images/logos/${logo.src}`}
              className={`h-6 sm:h-8 ${
                logo.invert ? "invert dark:invert-0" : "dark:invert"
              } ${logo.wide ? "w-24 sm:w-32 object-contain" : ""}`}
              alt={`${logo.src.split(".")[0]} Logo`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
