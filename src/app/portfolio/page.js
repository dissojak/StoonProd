"use client";

import Image from "next/image";

const portfolioItems = [
  {
    title: "Event Coverage",
    description:
      "Comprehensive video and photo coverage for a major event, capturing key moments and atmosphere.",

    image: "/assets/images/tvs.jpg",
  },
  {
    title: "Brand Photography",
    description:
      "Professional photography for a fashion brand, highlighting products and lifestyle.",
    image: "/assets/images/PhotoUnsplash.jpg",
  },
  {
    title: "musical coverage",
    description:
      "A dynamic music video for a local artist, featuring creative direction, filming, and post-production.",
    image: "/assets/images/filmingZabour.jpg",
    },
  {
    title: "promotional video",
    description:
      "A promotional video for a new product launch, showcasing features and benefits through engaging visuals.",
    image: "/assets/images/handvideo.jpg",
  },
  // Add more portfolio items as needed
];

const PortfolioPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-8 text-myYellow text-center drop-shadow-lg tracking-tight">
          Portfolio
        </h1>
        <p className="text-lg mb-12 text-center max-w-2xl mx-auto text-zinc-300">
          Explore our recent projects in film production, photography, and
          content creation. Each project showcases our passion for storytelling
          and visual excellence.
        </p>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col hover:scale-105 hover:shadow-yellow-400/30 transition-all duration-300 border border-zinc-800 group"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={idx === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-2xl font-bold mb-2 text-myYellow drop-shadow-sm group-hover:text-white transition-colors duration-200">
                  {item.title}
                </h2>
                <p className="text-base text-zinc-300 flex-1 mb-4">
                  {item.description}
                </p>
                <button
                  className="mt-auto inline-block bg-myYellow text-black rounded-2xl px-5 py-2 font-semibold shadow hover:bg-myYellowHover hover:text-white transition-colors duration-200"
                  disabled
                >
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
