import Image from "next/image";

const VideomakingSection = () => {
  return (
    <section
      id="video-production"
      className="bg-white text-black dark:bg-gray-900 dark:text-white py-20"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* <div className="md:w-1/2">
          <Image
            src="/assets/images/video.jpg"
            alt="Video Production"
            width={600}
            height={400}
            className="w-full max-w-xs mx-auto rounded-3xl"
            sizes="(max-width: 768px) 300px, (max-width: 1024px) 500px, 600px"
            srcSet="
              /assets/images/video-small.jpg 300w,
              /assets/images/video-medium.jpg 500w,
              /assets/images/video-large.jpg 600w
            "
          />
        </div> */}
        <div className="md:w-1/2">
          <Image
            src="/assets/images/videographer.svg"
            alt="Video Production"
            width={600}
            height={400}
            className="w-full max-w-xs mx-auto rounded-3xl"
          />
        </div>

        <div className="md:w-1/2 md:pl-10 mt-8 md:mt-0">
          <h2 className="text-3xl font-bold mb-4">Video Production</h2>
          <p className="md:text-base lg:text-lg leading-relaxed">
            Whether it&apos;s commercials, documentaries, or social media
            videos, we create engaging video content to captivate your audience.
          </p>
          <button className="bg-myGreen text-white hover:bg-myGreenHover dark:bg-myGreenDark dark:hover:bg-myGreenDarken py-3 px-6 rounded-full mt-6 transition">
            Watch Our Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideomakingSection;
