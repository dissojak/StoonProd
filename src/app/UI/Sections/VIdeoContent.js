"use client";
import Image from "next/image";
import { useState } from "react";
import useMedia from "use-media";

const VideoContent = () => {
  const youtubeVideoId = "yNt29Kn-wBQ"; // Your short video ID
  const youtubeVideoIdXL = "dQw4w9WgXcQ"; // Your wide video ID
  const [showVideo, setShowVideo] = useState(false);
  const isMediumOrLarger = useMedia({ minWidth: 768 }); // md breakpoint

  const selectedVideoId = isMediumOrLarger ? youtubeVideoIdXL : youtubeVideoId;

  return (
    <section
      className="relative bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
      id="video-production"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-16 lg:mb-20">
          <h1 className="mb-4 text-4xl font-semibold md:text-6xl">
            High-Impact Video Solutions —{" "}
            <span className="bg-[url('/assets/images/careau.svg')] bg-cover bg-center px-4 text-white">
              Zero Hassle
            </span>
            .
          </h1>
          <p className="mx-auto mb-5 max-w-[528px] text-xl text-gray-600 dark:text-gray-300 lg:mb-8">
            Stoon Production specializes in commercial videos that elevate your brand, promote your
            services, and connect with your audience. We make video creation simple, leaving you to
            focus on your business.
          </p>
          <div className="flex justify-center">
            <a
              href="#"
              className="mr-5 inline-block rounded-xl bg-teal-500 hover:text-black dark:bg-white dark:hover:bg-teal-500 dark:hover:text-white px-8 py-4 text-center font-semibold text-white dark:text-black shadow-[rgb(26,132,112)_6px_6px] md:mr-6"
            >
              Contact Us
            </a>
            <button
              onClick={() => setShowVideo(true)}
              className="flex items-center justify-center rounded-xl border border-solid border-teal-500 px-6 py-3 font-semibold text-teal-500 shadow-[rgb(26,132,112)_6px_6px]"
            >
              <Image
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905a575ec39b6784fc687c_Play.svg"
                alt="play"
                width={24}
                height={24}
                className="mr-2 w-6"
                style={{
                  filter:
                    "invert(26%) sepia(91%) saturate(2667%) hue-rotate(148deg) brightness(92%) contrast(99%)",
                }}
              />
              <p className="text-black dark:text-white">Watch Our Work</p>
            </button>
          </div>
        </div>
        {!showVideo ? (
          <div className="relative mx-auto h-[512px]">
            <Image
              src="/assets/images/tealGraphic.png"
              alt="Commercial Videography"
              width={800}
              height={512}
              className="inline-block h-full w-full rounded-xl object-cover sm:rounded-2xl"
            />
            <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full rounded-2xl bg-black opacity-40 dark:opacity-60"></div>
          </div>
        ) : (
          <>
            {/* Wide video for larger screens */}
            {isMediumOrLarger && (
              <div className="relative mx-auto w-full max-w-3xl aspect-video overflow-hidden rounded-xl shadow-lg">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1&loop=1&playlist=${selectedVideoId}&controls=0&modestbranding=1&showinfo=0`}
                  title="YouTube Video"
                  className="h-full w-full"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}

            {/* Short video for smaller screens */}
            {!isMediumOrLarger && (
              <div className="relative mx-auto w-[360px] h-[640px] overflow-hidden rounded-xl shadow-lg sm:w-[400px] sm:h-[711px]">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1&loop=1&playlist=${selectedVideoId}&controls=0&modestbranding=1&showinfo=0`}
                  title="YouTube Video"
                  className="h-full w-full"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </>
        )}
      </div>

      <Image
        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905b9f809b5c8180ce30c5_pattern-1.svg"
        alt="Pattern background 1"
        width={120}
        height={120}
        className="absolute bottom-0 left-0 -z-10 hidden md:inline-block md:bottom-1/2"
      />
      <Image
        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905ba1538296b3f50a905e_pattern-2.svg"
        alt="Pattern background 2"
        width={120}
        height={120}
        className="absolute right-0 top-0 -z-10 hidden sm:inline-block"
      />
    </section>
  );
};

export default VideoContent;
