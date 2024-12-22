import Link from "next/link";
import DarkModeSwitcher from "../UI/DarkModeSwitcher";
import Image from "next/image";

const SliderSection = () => {
  return (
    <section>
      <div
        className="container 
      mx-auto flex flex-col 
      md:flex-row items-center justify-between 
      lg:py-16 xs:py-0
      "
      >
        <div className="lg:w-1/2 xs:w-full">
          <Image
            src="/assets/images/filmingGreen.svg"
            alt="website template image"
            className="lg:w-full mx-auto xs:mt-4 xs:w-10/12"
            width={800} // specify the width (you can adjust this value)
            height={500} // specify the height (you can adjust this value)
          />
        </div>
        <div className="detail-box md:w-1/2 text-white text-right ">
          <div className="details space-y-6">
            <h1 className="font-bold lg:text-5xl mb-4 text-myYellow xs:text-3xl">
              FILM <br /> PRODUCTION
            </h1>
            <p>
              Bringing your vision to life through creative video production,{" "}
              <br />
              stunning photography, and cutting-edge content creation. <br />
              We craft stories that resonate and websites that inspire.
            </p>
            <div className="relative flex justify-center xs:mt-16">
              <div className="bg-myGreenDarken p-1 rounded-full lg:w-1/3 lg:pr-[3.5rem] xs:pr-[4.5rem] xs:w-2/3">
                <Link
                  href="https://www.instagram.com/adem_ben_amor/"
                  className="inline-flex bg-myYellow text-black rounded-full 
                  hover:inline-flex
                  lg:px-6 py-4
                  transition-transform
                  lg:hover:translate-x-[3.25rem] hover:bg-myYellow
                  hover:text-white hover:font-medium
                  xs:px-4
                  xs:hover:translate-x-[4.25rem]"
                >
                  Contact Us
                  <div className="arrow-container">
                    <div className="arrow-wrapper">
                      <div className="arrow"></div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            {/* <DarkModeSwitcher /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
