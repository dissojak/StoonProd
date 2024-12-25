import React from "react";
import Service from "../components/Services/Services";
import Navbar from "../components/Home/Navbar";
import Image from "next/image";

function ServiceAndTariffs() {
  const eventCoverageService = {
    title: "Event Coverage Services",
    plans: [
      {
        minPrice: "600",
        maxPrice: "750",
        title: "Essential Plan",
        description: "Perfect for half-day event coverage.",
        features: [
          { id: 1, text: "1 photographer + 1 videographer" },
          { id: 2, text: "Half-day (4 hours) shooting" },
          { id: 3, text: "Teaser video (1 minute)" },
          { id: 4, text: "40 edited photos" },
        ],
      },
      {
        minPrice: "900",
        maxPrice: "1200",
        title: "Premium Plan",
        description: "Perfect for full-day event coverage.",
        features: [
          { id: 1, text: "1 photographer + 2 videographers + assistant" },
          { id: 2, text: "Full-day (8 hours) shooting" },
          { id: 3, text: "Teaser video (1 minute)" },
          { id: 4, text: "Recap video (5 minutes)" },
          { id: 5, text: "80 edited photos" },
        ],
      },
      {
        minPrice: "600",
        maxPrice: "750",
        title: "Essential Plan",
        description: "Perfect for half-day event coverage.",
        features: [
          { id: 1, text: "1 photographer + 1 videographer" },
          { id: 2, text: "Half-day (4 hours) shooting" },
          { id: 3, text: "Teaser video (1 minute)" },
          { id: 4, text: "40 edited photos" },
        ],
      },
    ],
  };

  const videoProductionService = {
    title: "Video Production Services",
    plans: [
      {
        minPrice: "1200",
        maxPrice: "1500",
        title: "Basic Production Plan",
        description: "Ideal for short films and promotional videos.",
        features: [
          { id: 1, text: "1 director + 1 cameraman" },
          { id: 2, text: "Up to 5 minutes of video" },
          { id: 3, text: "Full editing and color grading" },
          { id: 4, text: "1 video draft and 2 revisions" },
        ],
      },
      {
        minPrice: "2500",
        maxPrice: "3000",
        title: "Premium Production Plan",
        description:
          "For larger video projects, including commercials and music videos.",
        features: [
          { id: 1, text: "Full production crew" },
          { id: 2, text: "Up to 30 minutes of video" },
          { id: 3, text: "Advanced editing and color grading" },
          { id: 4, text: "3 video drafts and unlimited revisions" },
        ],
      },
    ],
  };

  const webDevelopmentService = {
    title: "Web Development Services",
    plans: [
      {
        minPrice: "1500",
        maxPrice: "2000",
        title: "Basic Web Development Plan",
        description:
          "Ideal for small business websites or personal portfolios.",
        features: [
          { id: 1, text: "Responsive website design" },
          { id: 2, text: "Up to 5 pages" },
          { id: 3, text: "Basic SEO setup" },
          { id: 4, text: "Social media integration" },
        ],
      },
      {
        minPrice: "3000",
        maxPrice: "5000",
        title: "Advanced Web Development Plan",
        description:
          "For larger websites with custom features and advanced functionality.",
        features: [
          { id: 1, text: "Custom web application development" },
          { id: 2, text: "Up to 15 pages" },
          { id: 3, text: "Advanced SEO and performance optimization" },
          { id: 4, text: "E-commerce functionality" },
          { id: 5, text: "Content management system (CMS)" },
        ],
      },
    ],
  };

  return (
    <>
      {/* Add this new section above the tariffs */}

      <div className="absolute w-full z-50">
        <Navbar />
      </div>
      <div className="relative py-24 sm:py-32">
        {/* <div className="absolute inset-0 bg-blue-500 bg-opacity-40 -z-10">
          <img
            src="/assets/images/merchWidth.jpg"
            alt=""
            className="absolute inset-0 -z-20 h-full w-full object-cover object-right md:object-center filter blur-sm"
          />
        </div> */}
        <div className="block dark:hidden transition duration-1000">
          <Image
            src="/assets/images/merchWidth.jpg"
            alt=""
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center bg-blue-500 bg-opacity-40 filter blur-sm"
            width={1920}
            height={1080}
          />
        </div>
        <div className="hidden dark:block transition duration-1000">
          <Image
            src="/assets/images/merchWidthDarkMode.png"
            alt=""
            className="absolute inset-0 -z-20 h-full w-full object-cover object-center bg-blue-500 bg-opacity-40 filter blur-sm"
            width={1920}
            height={1080}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 xs:mt-10">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Work with us
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We specialize in video creation, photography, and web development.
              Our services ensure that your brand is professionally showcased
              across various platforms.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
              <a href="#">
                Our Projects <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="#">
                Contact Us <span aria-hidden="true">&rarr;</span>
              </a>
              <a href="#">
                Services Offered <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  Offices Worldwide
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  3
                </dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  Team Members
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  20+
                </dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  Hours per Week
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  40+
                </dd>
              </div>
              <div className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">
                  Paid Time Off
                </dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
                  Unlimited
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <Service sectionNumber={0} serviceData={eventCoverageService} />
      <hr />
      <Service sectionNumber={1} serviceData={videoProductionService} />
      <hr />
      <Service sectionNumber={0} serviceData={webDevelopmentService} />

      <footer className="border-t dark:bg-gray-900">
        <div className="container flex items-center justify-between px-6 py-8 mx-auto">
          <p className="text-gray-500 dark:text-teal-600">
            © 2020-2025 All Rights Reserved.
          </p>
          <p className="font-medium text-gray-700 dark:text-teal-600">
            Terms of Service
          </p>
        </div>
      </footer>
    </>
  );
}

export default ServiceAndTariffs;
