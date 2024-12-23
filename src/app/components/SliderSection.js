import Link from "next/link";
import Image from "next/image";

const SliderSection = () => {
  return (
    <section>
      <div
        className="container 
        mx-auto flex flex-col 
        md:flex-row items-center justify-between 
        lg:py-16 xs:py-8 px-4" // Added px-4 to ensure padding on both sides
      >
        {/* Image Section */}
        <div className="lg:w-1/2 xs:w-full">
          <Image
            src="/assets/images/filmingGreen.svg"
            alt="website template image"
            className="w-full max-w-md mx-auto xs:mt-4" // Set max-w-md to limit size on larger screens and ensure full width on small screens
            width={800}
            height={500}
            sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 40vw"
          />
        </div>

        {/* Text Section */}
        <div className="lg:mr-20 md:w-1/2 text-white text-right xs:mt-6 md:mt-0">
          <div className="space-y-6">
            <h1 className="font-bold lg:text-5xl mb-4 text-myYellow xs:text-3xl">
              FILM <br /> PRODUCTION
            </h1>
            <p className="xs:text-base sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed xs:text-center sm:text-center md:text-left lg:text-left xl:text-left">
              Bringing your vision to life through creative video production,
              <br />
              stunning photography, and cutting-edge content creation.
              <br />
              We craft stories that resonate and websites that inspire.
            </p>

            {/* Button Section */}
            <div className="relative flex justify-start lg:ml-16 xs:mt-16">
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
  );
};

export default SliderSection;
