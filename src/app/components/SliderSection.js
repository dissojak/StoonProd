import Link from "next/link";

const SliderSection = () => {
  return (
    <section >
      <div className="container 
      mx-auto flex flex-col 
      md:flex-row items-center justify-between 
      lg:py-16 xs:py-0
      ">
        <div className="w-1/2">
          <img
            src="./assets/images/filmingGreen.svg"
            alt="website template image"
            className="w-full mx-auto"
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
            <div className="relative flex justify-center">
              <div className="bg-myGreenDarken p-1 rounded-full w-1/3 pr-10">
                <Link
                  href="https://www.instagram.com/adem_ben_amor/"
                  className="inline-flex px-8 py-4 bg-myYellow text-black rounded-full 
                  transition-transform
                  hover:translate-x-9 hover:bg-myYellow
                  hover:text-white hover:font-medium
                  hover:inline-flex"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
