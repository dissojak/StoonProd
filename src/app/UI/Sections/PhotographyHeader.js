const PhotographyHeader = () => {
  return (
    <div
      className="bg-white dark:bg-slate-800 overflow-hidden pb-9 px-4 md:px-8"
      id="photography"
    >
      <section className="relative flex flex-col-reverse md:flex-row mx-auto justify-between items-center gap-9 md:gap-4 max-w-[1300px] py-4 my-12">
        {/* SVG 1 */}
        <svg
          width="736"
          height="423"
          className="absolute top-[50px] sm:top-[200px] sm:right-[-150px]"
          viewBox="0 0 736 423"
          fill="none"
        >
          <path
            d="M738.5 4.5C491.667 -7.66666 -0.900015 58.9 3.49999 422.5"
            stroke="url(#paint0_linear_1)"
            strokeWidth="6"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1"
              x1="700.5"
              y1="-3.99998"
              x2="14.5"
              y2="361"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ffffff" className="dark:stop-[#1E1B2E]" />
              <stop offset="0.2" stopColor="#A7F3D0" />
              <stop offset="0.7" stopColor="#5EEAD4" />
              <stop
                offset="1"
                stopColor="#ffffff"
                className="dark:stop-[#1E1B2E]"
              />
            </linearGradient>
          </defs>
        </svg>

        {/* SVG 2 */}
        <svg
          className="absolute sm:right-28 md:right-6"
          width="383"
          height="846"
          viewBox="0 0 383 846"
          fill="none"
        >
          <path
            d="M3.19293 0C-0.0879101 140.127 37.2087 433.314 212.642 485.053C388.075 536.792 391.776 746.576 371.697 845"
            stroke="url(#paint0_linear_2)"
            strokeWidth="6"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2"
              x1="16.5"
              y1="39.5"
              x2="363"
              y2="814"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0.01"
                stopColor="#ffffff"
                className="dark:stop-[#1E1B2E]"
              />
              <stop offset="0.23" stopColor="#A7F3D0" />
              <stop offset="0.77" stopColor="#2DD4BF" />
              <stop
                offset="1"
                stopColor="#ffffff"
                className="dark:stop-[#1E1B2E]"
              />
            </linearGradient>
          </defs>
        </svg>

        {/* SVG 3 */}
        <svg
          className="absolute -top-14 sm:right-7"
          width="416"
          height="675"
          viewBox="0 0 416 675"
          fill="none"
        >
          <path
            d="M415 3C325.774 17.8434 155.913 102.224 190.271 320.998C224.63 539.772 78.4065 646.155 1 672"
            stroke="url(#paint0_linear_3)"
            strokeWidth="6"
          />
          <defs>
            <linearGradient
              id="paint0_linear_3"
              x1="365.5"
              y1="28"
              x2="110"
              y2="594"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#ffffff" className="dark:stop-[#1E1B2E]" />
              <stop offset="0.28" stopColor="#5EEAD4" />
              <stop offset="0.74" stopColor="#14B8A6" />
              <stop
                offset="1"
                stopColor="#ffffff"
                className="dark:stop-[#1E1B2E]"
              />
            </linearGradient>
          </defs>
        </svg>

        {/* Text content */}
        <div className="md:w-[520px] z-20">
          <h1 className="text-3xl md:text-[36px] lg:text-[46px] leading-[56px] dark:text-white text-slate-700 font-bold">
            <span className="text-teal-500 dark:text-teal-300">Freeze</span>{" "}
            Every Moment
            <br />
            With{" "}
            <span className="text-teal-500 dark:text-teal-300">
              Timeless Precision
            </span>
          </h1>
          <p className="text-base dark:text-white text-slate-700 mt-4 md:mt-9 mb-10 md:mb-16">
            From weddings to personal portraits, we capture the essence of your
            most important moments with artistic vision and technical mastery.
          </p>
          <div className="flex gap-6 sm:gap-10">
            <button className="uppercase font-bold text-xs rounded-[40px] py-2 lg:py-4 px-4 lg:px-9 text-[#1E1B2E] bg-gradient-to-r from-teal-200 to-teal-400">
              Book a Session
            </button>
            <svg
              className="mt-2 w-8 h-6 sm:w-12 sm:h-9"
              viewBox="0 0 46 38"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.8334 19L2.16669 19M43.8334 19L27.1667 35.6667M43.8334 19L27.1667 2.33333"
                stroke="#2DD4BF"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Image */}
        <div className="p-4 z-20 dark:bg-black bg-white rounded-[100px] md:rounded-bl-[200px] lg:rounded-bl-[250px] sm:dark:bg-opacity-20 dark:xs:bg-opacity-0 xs:bg-opacity-0 sm:bg-opacity-50">
          <img
            className="max-w-[490px] w-full"
            src="/assets/images/MalePhotography.png"
            alt="camera lens"
          />
        </div>
      </section>
    </div>
  );
};

export default PhotographyHeader;
