import Image from "next/image";

const ContentCreationSection = () => {
  return (
    <section
      id="contentCreation"
      className="bg-white text-black dark:bg-gray-900 dark:text-white py-20"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <Image
            src="/assets/images/contentCreation.svg"
            alt="Content Creation"
            width={600}
            height={400}
            className="w-full max-w-xs mx-auto rounded-3xl"
          />
        </div>
        <div className="md:w-1/2 md:pl-10 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">Content Creation</h2>
          <p className="md:text-base lg:text-lg leading-relaxed">
            We craft compelling content that tells your story and connects with your audience across
            platforms.
          </p>
          <button className="bg-myBleu text-white hover:bg-myBleuHover dark:bg-myBleuDark dark:hover:bg-myBleuDarken py-3 px-6 rounded-full mt-6 transition">
            Explore Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContentCreationSection;
