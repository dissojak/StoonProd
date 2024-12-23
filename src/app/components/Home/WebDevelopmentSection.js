import Image from "next/image";

const WebDevelopmentSection = () => {
  return (
    <section 
    id="web-development"
    className="bg-gray-100 text-gray-900 dark:bg-gray-950 dark:text-white lg:py-40 xs:pt-20 xs:pb-40">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-10 mb-8 md:mb-0 lg:ml-20">
          <h2 className="text-3xl font-bold mb-4">Web Development</h2>
          <p className="md:text-base lg:text-lg leading-relaxed">
            From design to deployment, we build custom websites that are fast, secure, and visually stunning.
          </p>
          <button className="bg-myOrange text-white hover:bg-myOrangeDark dark:bg-myOrangeDark dark:hover:bg-myOrangeDarken py-3 px-6 rounded-full mt-6 transition">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/assets/images/webdev.jpg"
            alt="Web Development"
            width={600}
            height={400}
            className="w-full max-w-xs mx-auto rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentSection;
    