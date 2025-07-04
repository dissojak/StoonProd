"use client";
import React from "react";
import Navbar from "../UI/Header/Navbar";
import TeamMember from "@/app/UI/TeamMember";
import TeamMembers from "@/app/UI/TeamMembers";
import Image from "next/image";
import MaintenanceSection from "@/app/UI/MaintenanceSection";

const AboutPage = () => {
  return (
    <div>
      <header className="bg-slate-300 dark:bg-gray-800 transition-colors duration-1000">
        {/* <Navbar /> */}
         {/*<MaintenanceSection sectionHeight="60vh" />*/}
        <section
          className="flex items-center justify-center"
          style={{ height: "500px" }}
        >
          <div className="text-center">
            <p className="text-xl font-medium tracking-wider text-gray-700 dark:text-gray-300 transition-colors duration-1000">
              Creative Vision, Captured Perfectly
            </p>
            <h2 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white md:text-5xl transition-colors duration-1000">
              Bringing Your Ideas to Life with <br /> Stunning Visuals and Web
              Solutions
            </h2>

            <div className="flex justify-center mt-8">
              <a
                className="px-8 py-2 text-lg font-medium text-white transition-colors duration-300 transform bg-teal-500 rounded hover:bg-teal-400"
                href="#"
              >
                Let&apos;s Create Something Amazing
              </a>
            </div>
          </div>
        </section>
      </header>

      <section className="bg-white dark:bg-gray-900 transition-colors duration-1000">
        <div className="max-w-5xl px-6 py-16 mx-auto">
          <div className="items-center md:flex md:space-x-6">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-teal-400">
                Capturing Moments, Creating Experiences
              </h3>
              <p className="max-w-md mt-4 text-gray-600 dark:text-gray-300">
                From breathtaking photography and videography to innovative web
                design, we bring your vision to life with creativity and
                precision. Our experienced team specializes in crafting content
                that resonates with your audience.
              </p>
              <a
                href="#team"
                className="block mt-8 text-teal-500 dark:text-teal-400 underline"
              >
                Meet Our Team
              </a>
            </div>

            <div className="mt-8 md:mt-0 md:w-1/2">
              <div className="flex items-center justify-center">
                <div className="max-w-md">
                  <Image
                    className="object-cover object-center w-full rounded-md shadow"
                    style={{ height: "500px" }}
                    src="https://images.unsplash.com/photo-1618346136472-090de27fe8b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=673&q=80"
                    alt="Creative Team"
                    width={673} // Add appropriate width based on the image's original size or desired size
                    height={500} // Add appropriate height based on the image's aspect ratio or desired size
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Repeat the above section code with different content for additional sections */}
      <section className="bg-slate-100 dark:bg-gray-800 transition-colors duration-1000">
        <div className="max-w-5xl px-6 py-16 mx-auto">
          <div className="items-center md:flex md:space-x-6">
            <div className="md:w-1/2">
              <div className="flex items-center justify-center">
                <div className="max-w-md">
                  <Image
                    className="object-cover object-center w-full rounded-md shadow"
                    style={{ height: "500px" }}
                    src="https://images.unsplash.com/photo-1616874535244-73aea5daadb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    alt="Photography and Videography"
                    width={634} // Add appropriate width based on the image's original size or desired size
                    height={500}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-0 md:w-1/2">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white transition-colors duration-1000">
                Crafting Visual Stories for Every Moment
              </h3>
              <p className="max-w-md mt-4 text-gray-600 dark:text-gray-300 transition-colors duration-1000">
                At Stoon Production, we capture stunning moments through
                photography and videography. Whether it&apos;s a personal event
                or a professional project, we bring creativity and precision to
                every frame. Our work ensures your story is told in the most
                impactful way.
              </p>
              <a
                href="#team"
                className="block mt-8 text-teal-500 dark:text-teal-400 underline transition-colors duration-1000"
              >
                Meet Our Experienced Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900 transition-colors duration-1000">
        <div className="max-w-5xl px-6 py-16 mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-teal-400 transition-colors duration-1000">
            Bringing Your Ideas to Life through Visuals and Technology
          </h2>
          <p className="max-w-lg mt-4 text-gray-600 dark:text-gray-300 transition-colors duration-1000">
            At Stoon Production, we specialize in creating stunning visuals
            through photography, videography, and web development. Our goal is
            to combine creativity with technology to bring your vision to life,
            whether it&apos;s for a personal project or a professional endeavor.
          </p>
          <div className="grid gap-8 mt-10 md:mt-20 md:grid-cols-2">
            <div className="flex space-x-4">
              <svg
                className="w-6 h-6 text-gray-500 dark:text-gray-300 transition-colors duration-1000"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M47.6268 23.7062C48.2466 24.4484 48.2466 25.5277 47.6268 26.2699L44.4812 30.0372C43.803 30.8493 43.4742 31.8971 43.5669 32.9512L44.0044 37.9287C44.0912 38.9165 43.4411 39.8188 42.4765 40.0491L38.0619 41.1031C36.9808 41.3612 36.0559 42.0575 35.5089 43.025L33.2053 47.099C32.6961 47.9995 31.5844 48.3631 30.6415 47.9375L26.6498 46.1358C25.6003 45.6621 24.3976 45.6636 23.3493 46.14L19.3597 47.9531C18.4161 48.3819 17.3014 48.0189 16.7912 47.1168L14.4911 43.0489C13.9441 42.0814 13.0192 41.3851 11.9381 41.127L7.52286 40.0728C6.55849 39.8426 5.90838 38.9406 5.99496 37.9529L6.43346 32.9505C6.52583 31.8968 6.19706 30.8494 5.5191 30.0375L2.37029 26.2665C1.75138 25.5253 1.75043 24.4477 2.36803 23.7054L5.52362 19.9127C6.1988 19.1012 6.52582 18.0557 6.43339 17.0041L5.99624 12.0308C5.90922 11.0408 6.56225 10.1372 7.52946 9.90904L11.9298 8.87123C13.0153 8.61522 13.9446 7.91765 14.4935 6.94684L16.7947 2.87709C17.3039 1.97664 18.4156 1.61302 19.3585 2.03858L23.3544 3.8422C24.4007 4.31444 25.5993 4.31444 26.6456 3.8422L30.6415 2.03858C31.5844 1.61301 32.6961 1.97663 33.2053 2.87709L35.5089 6.95112C36.0559 7.9186 36.9808 8.61486 38.0619 8.87297L42.4765 9.92701C43.4411 10.1573 44.0912 11.0596 44.0044 12.0474L43.5669 17.0249C43.4742 18.079 43.803 19.1268 44.4812 19.939L47.6268 23.7062ZM25 37.9326C26.8075 37.9326 28.2727 36.4674 28.2727 34.6599V34.4275C28.2727 32.6201 26.8075 31.1548 25 31.1548C23.1925 31.1548 21.7273 32.6201 21.7273 34.4275V34.6599C21.7273 36.4674 23.1925 37.9326 25 37.9326ZM25 28.377C26.8075 28.377 28.2727 26.9117 28.2727 25.1042V15.3162C28.2727 13.5087 26.8075 12.0435 25 12.0435C23.1925 12.0435 21.7273 13.5087 21.7273 15.3162V25.1042C21.7273 26.9117 23.1925 28.377 25 28.377Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>

              <div>
                <h4 className="text-xl font-medium text-gray-800 dark:text-white transition-colors duration-1000">
                  Commercial Video & Photography for Promotions
                </h4>
                <p className="max-w-lg mt-4 text-gray-600 dark:text-gray-300 transition-colors duration-1000">
                  We provide professional video and photography services
                  tailored to your promotional needs. From product launches to
                  event coverage, our team captures high-impact visuals that
                  drive engagement and elevate your brand. Whether for marketing
                  campaigns or corporate events, we create content that boosts
                  your visibility and connects with your audience.
                </p>
              </div>
            </div>

            <div className="flex space-x-4">
              <svg
                className="w-6 h-6 text-gray-500 dark:text-gray-300 transition-colors duration-1000"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 25C1 11.8023 11.8023 1 25 1C38.1977 1 49 11.8023 49 25C49 38.1977 38.1977 49 25 49C11.8023 49 1 38.1977 1 25ZM33.36 35.3573C34.7228 36.1959 36.5074 35.771 37.346 34.4082C38.1913 33.0346 37.7522 31.2351 36.3692 30.4053L28.221 25.5164C27.6186 25.155 27.25 24.504 27.25 23.8014V14.375C27.25 12.7872 25.9628 11.5 24.375 11.5C22.7872 11.5 21.5 12.7872 21.5 14.375V25.8236C21.5 27.2127 22.2206 28.5023 23.4036 29.2302L33.36 35.3573Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>

              <div>
                <h4 className="text-xl font-medium text-gray-800 dark:text-white transition-colors duration-1000">
                  Web Development & Digital Solutions
                </h4>
                <p className="max-w-lg mt-4 text-gray-600 dark:text-gray-300 transition-colors duration-1000">
                  Our expertise extends to developing fully responsive and
                  user-friendly websites that drive engagement and conversion.
                  From custom web applications to e-commerce solutions, we
                  deliver results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 dark:bg-gray-900 transition-colors duration-1000">
        <div className="max-w-5xl px-6 py-16 mx-auto">
          <div className="px-8 py-12 bg-gray-800 dark:bg-gray-700 rounded-md md:px-20 md:flex md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-white dark:text-gray-100">
                Ad Video Production
              </h3>
              <p className="max-w-md mt-4 text-gray-400 dark:text-gray-300">
                We specialize in creating impactful ad videos to promote your
                brand, products, and services.
              </p>
            </div>

            <a
              className="block px-8 py-2 mt-6 text-lg font-medium text-center text-white transition-colors duration-300 transform bg-teal-500 rounded md:mt-0 hover:bg-teal-400 dark:bg-teal-600 dark:hover:bg-teal-500"
              href="#"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-800 transition-colors duration-1000">
        <div className="max-w-5xl px-6 py-16 mx-auto">
          <div className="md:flex md:justify-between">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
              Elevating Your Brand with Video, Web Design,{" "}
              <br className="sm:hidden md:block" />
              and Content Creation
            </h2>
            <a
              href="#"
              className="block mt-6 text-teal-500 underline md:mt-0 dark:text-teal-400"
            >
              Our Expertise
            </a>
          </div>

          <div className="grid gap-8 mt-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Video Creation and Photography */}
            <div className="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md dark:bg-gray-600">
              <h2 className="text-xl font-medium text-gray-800 dark:text-gray-50">
                Video Creation & Photography
              </h2>
              <p className="max-w-md mt-4 text-gray-600 dark:text-gray-200">
                From stunning promotional videos to high-quality photography, we
                capture your brand&apos;s essence in visuals that engage and
                convert.
              </p>
            </div>

            {/* Web Design and Development */}
            <div className="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md dark:bg-gray-600">
              <h2 className="text-xl font-medium text-gray-800 dark:text-gray-50">
                Web Design & Development
              </h2>
              <p className="max-w-md mt-4 text-gray-600 dark:text-gray-200">
                Our team builds responsive, user-friendly websites that not only
                look great but are also optimized for performance and
                conversions.
              </p>
            </div>

            {/* Content Creation */}
            <div className="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md dark:bg-gray-600">
              <h2 className="text-xl font-medium text-gray-800 dark:text-gray-50">
                Content Creation
              </h2>
              <p className="max-w-md mt-4 text-gray-600 dark:text-gray-200">
                We create captivating content across various platforms that
                resonates with your audience and strengthens your brand presence
                online.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 dark:bg-gray-900 transition-colors duration-1000">
        <div className="max-w-5xl px-6 py-16 mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-teal-400">
            Capturing the Essence of Your Brand through <br /> Stunning Visuals
            and Design
          </h2>
          <p className="max-w-lg mx-auto mt-4 text-gray-600 dark:text-gray-300">
            We specialize in creating high-impact videos, photography, and
            sleek, user-friendly websites to enhance your brand presence. Let us
            bring your vision to life with captivating visuals and seamless web
            experiences.
          </p>

          <Image
            className="object-cover object-top w-full mt-16 rounded-md shadow h-80"
            src="/assets/images/merchFaceUp.jpg"
            alt="Creative visual content"
            width={1350}
            height={2000}
            sizes="(max-width: 768px) 400px, (max-width: 1024px) 800px, 1920px"
            srcSet="
          /assets/images/merchFaceUp-small.jpg 400w,
          /assets/images/merchFaceUp-medium.jpg 800w,
          /assets/images/merchFaceUp-large.jpg 1920w
        "
          />
        </div>
      </section>

      <section className="bg-slate-100 dark:bg-gray-900 transition-colors duration-1000">
        <div className="max-w-5xl px-6 py-16 mx-auto space-y-8 md:flex md:items-center md:space-y-0">
          <div className="md:w-2/3">
            <div className="hidden md:flex md:items-center md:space-x-10">
              <Image
                className="object-cover object-center rounded-md shadow w-72 h-72"
                src="/assets/images/conentCreationMouhib.png"
                width={500}
                height={500}
                sizes="(max-width: 768px) 300px, (max-width: 1024px) 500px, 500px"
                srcSet="
                  /assets/images/conentCreationMouhib-small.jpg 300w,
                  /assets/images/conentCreationMouhib-medium.jpg 500w,
                  /assets/images/conentCreationMouhib-large.jpg 500w
                "
              />

              <Image
                className="object-cover object-center w-64 rounded-md shadow h-96"
                src="/assets/images/merch.jpg"
                width={500}
                height={1000}
                sizes="(max-width: 768px) 300px, (max-width: 1024px) 500px, 500px"
                srcSet="
                  /assets/images/merch-small.jpg 300w,
                  /assets/images/merch-medium.jpg 500w,
                  /assets/images/merch-large.jpg 500w
                "
              />
            </div>
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-teal-400 md:mt-6">
              Elevate Your Brand with Impactful Visuals
            </h2>
            <p className="max-w-lg mt-4 text-gray-600 dark:text-gray-300">
              Our team of creative experts is dedicated to producing stunning
              visuals that capture attention and leave a lasting impression.
              Whether you need promotional videos, event coverage, or a complete
              visual package, we&apos;ll help bring your vision to life and
              elevate your brand&apos;s presence.
            </p>
          </div>

          <div className="md:w-1/3">
            <Image
              className="object-cover object-center w-full rounded-md shadow"
              style={{ height: "700px" }}
              src="/assets/images/git.png"
              width={800}
              height={2000}
            />
          </div>
        </div>
      </section>

      <TeamMembers />

      <footer className="border-t dark:bg-gray-900">
        <div className="container flex items-center justify-between px-6 py-8 mx-auto">
          <p className="text-gray-500 dark:text-teal-600">
            © 2020-2025 All Rights Reserved By Stoon Production.
          </p>
          <p className="font-medium text-gray-700 dark:text-teal-600">
            Terms of Service
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;
