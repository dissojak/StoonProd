import React from "react";

type MaintenanceSectionProps = { sectionHeight: number | string };

const MaintenanceSection = ({ sectionHeight }: MaintenanceSectionProps) => {
  return (
    <section
      className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900"
      style={{ minHeight: sectionHeight }}
    >
      <div className="bg-yellow-100 dark:bg-amber-600/30 p-6 sm:p-8 rounded-lg shadow-xl text-center max-w-4xl mx-8 my-12 sm:mx-auto border dark:border-amber-500">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-red-600 dark:text-amber-400 font-bold mb-4">
          🚧 Website Under Maintenance 🚧
        </h1>
        <p className="text-base sm:text-lg text-gray-700 dark:text-amber-200 mb-6 leading-relaxed text-center md:text-justify md:leading-normal">
          We&apos;re working hard to bring you new updates and features! <br /> Thank you for your
          patience, and stay tuned for exciting things ahead!
        </p>
        <p className="text-sm text-gray-500 dark:text-amber-300 leading-relaxed text-center md:text-justify md:leading-normal">
          Updates will be available soon.
        </p>
      </div>
    </section>
  );
};

export default MaintenanceSection;
