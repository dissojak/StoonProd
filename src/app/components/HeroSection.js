import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="bg-white text-black py-20 dark:bg-black dark:text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Stoon Production
        </h1>
        <p className="md:text-lg lg:text-xl leading-relaxed">
          We bring your creative ideas to life with video, photography, and digital content.
        </p>
        <button className="bg-myYellow text-black py-3 px-6 rounded-full mt-8 hover:bg-myYellowDark dark:bg-myYellow dark:text-white hover:dark:bg-myYellowDarken transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
