import Image from "next/image";

const ServiceNavigation = () => {
    const services = [
      {
        id: 'video-production',
        title: 'Video Production',
        description: 'Engaging video content',
        image: 'https://pbs.twimg.com/profile_images/1720598745664958465/TYA_2LYQ_400x400.png',
      },
      {
        id: 'photography',
        title: 'Photography',
        description: 'Capture the perfect moment',
        image: 'https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png',
      },
      {
        id: 'content-creation',
        title: 'Content Creation',
        description: 'Creative content for brands',
        image: 'https://styde.net/wp-content/uploads/2017/02/vue-img-destacada-x2.png',
      },
      {
        id: 'web-development',
        title: 'Web Development',
        description: 'Build your online presence',
        image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
      },
    ];
  
    return (
      <div className="bg-gray-100 py-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative p-3 bg-white rounded-3xl flex overflow-hidden items-center min-w-[300px] cursor-pointer group"
              style={{ backgroundSize: '600px', backgroundImage: `url(${service.image})` }}
            >
              <Image
                className="z-50 h-5 w-5 absolute top-3 right-3 rounded-full outline outline-gray-100/15 transition duration-1000 group-hover:scale-[2] group-hover:rotate-[410deg] group-hover:-translate-y-3 group-hover:translate-x-3"
                height={20}
                width={20}
                src={service.image}
                alt={service.title}
              />
              <div className="absolute inset-0 ring-1 ring-white/30 ring-inset bg-gradient-to-l from-black/80 via-black/50 to-black/20 rounded-2xl overflow-hidden"></div>
              <div className="relative z-10 flex items-center space-x-4">
                <Image
                  className="h-16 w-16 rounded-2xl object-contain shadow-md border border-gray-100/20 transition duration-300 group-hover:scale-95"
                  height={64}
                  width={64}
                  src={service.image}
                  alt={service.title}
                />
                <div className="flex flex-col transition duration-300 group-hover:-translate-x-2">
                  <a href={`#${service.id}`} className="relative text-md font-semibold text-gray-100 cursor-pointer after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gradient-to-r after:from-gray-100/30 after:via-gray-100/10 after:to-transparent after:origin-left after:h-[2px] after:w-0 group-hover:after:w-full after:bottom-0 after:left-0">
                    {service.title}
                  </a>
                  <p className="text-xs text-gray-50/70 text-balance">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ServiceNavigation;
  