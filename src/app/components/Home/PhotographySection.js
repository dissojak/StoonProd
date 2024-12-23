import Image from "next/image";

const PhotographySection = () => {
  return (
    <section 
    id="photography"
    className="bg-gray-100 text-gray-900 dark:bg-gray-950 dark:text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-10 mb-8 md:mb-0 lg:ml-20">
          <h2 className="text-3xl font-bold mb-4">Photography</h2>
          <p className="md:text-base lg:text-lg leading-relaxed">
            Capture stunning visuals with our professional photography services. From portraits to product shots, we&apos;ve got you covered.
          </p>
          <button className="bg-myRed text-white hover:bg-myRedHover dark:bg-myRedDark dark:hover:bg-myRedDarken py-3 px-6 rounded-full mt-6 transition">
            View Gallery
          </button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/assets/images/photography.png"
            alt="Photography"
            width={600}
            height={400}
             className="relative w-full max-w-xs mx-auto rounded-3xl xs:top-[6.35rem] md:top-[6.5rem] -mt-32"
          />
        </div>
      </div>
    </section>
  );
};

export default PhotographySection;
