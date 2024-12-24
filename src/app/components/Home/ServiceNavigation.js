import Image from "next/image";

const ServiceNavigation = () => {
  const services = [
    {
      id: "video-production",
      title: "Video Production",
      description: "Engaging video content",
      image: "/assets/images/videomaking.png",
    },
    {
      id: "photography",
      title: "Photography",
      description: "Capture the perfect moment",
      image: "/assets/images/photographyIcon.png",
    },
    {
      id: "contentCreation",
      title: "Content Creation",
      description: "Creative content for brands",
      image: "/assets/images/socialmedia.png",
    },
    {
      id: "web-development",
      title: "Web Development",
      description: "Build your online presence",
      image: "/assets/images/DevIcon.png",
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-20">
      {/* Title */}
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Our Services
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Click on a service to navigate to the relevant section
        </p>
      </div>

      {/* Service Cards */}
      <div className="container mx-auto flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <a key={service.id} href={`#${service.id}`}>
              <div
                className="relative p-3 text-gray-100 dark:bg-gray-800 rounded-3xl flex overflow-hidden items-center max-w-[300px] cursor-pointer group"
                style={{
                  backgroundSize: "300px",
                  backgroundImage: `url(${service.image})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Icon Image */}
                <Image
                  className="z-50 h-5 w-5 absolute top-3 right-3 rounded-full outline outline-gray-100/15 dark:outline-gray-700 transition duration-1000 group-hover:scale-[2] group-hover:rotate-[410deg] group-hover:-translate-y-3 group-hover:translate-x-3"
                  height={320}
                  width={320}
                  src={service.image}
                  alt={service.title}
                />
                {/* Background Overlay */}
                <div className="absolute inset-0 ring-1 ring-white/30 dark:ring-gray-700/30 ring-inset bg-gradient-to-l from-black/80 via-black/50 to-black/20 rounded-2xl overflow-hidden"></div>
                {/* Service Content */}
                <div className="relative z-10 flex items-center space-x-4">
                  <Image
                    className="h-16 w-16 rounded-2xl object-contain shadow-md border border-gray-100/20 dark:border-gray-700/20 transition duration-300 group-hover:scale-95"
                    height={640}
                    width={640}
                    src={service.image}
                    alt={service.title}
                  />
                  <div className="flex flex-col transition duration-300 group-hover:-translate-x-2">
                    <h3 className="relative text-md font-semibold text-gray-100 cursor-pointer after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gradient-to-r after:from-gray-800/30 dark:after:from-gray-100/30 after:via-gray-100/10 after:to-transparent after:origin-left after:h-[2px] after:w-0 group-hover:after:w-full after:bottom-0 after:left-0">
                      {service.title}
                    </h3>
                    <p className="text-xs text-gray-400 text-balance">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceNavigation;
