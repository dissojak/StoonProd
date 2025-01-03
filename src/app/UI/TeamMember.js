import Image from "next/image";

const TeamMember = ({ imageSrc, name, role, description }) => {
  return (
    <a
      href="#"
      className="group relative block rounded-lg overflow-hidden bg-gray-400 dark:bg-gray-800 transition-colors"
    >
      <div className="relative w-full h-72">
        {/* Image wrapper */}
        <Image
  alt={`${name}'s photo`}
  src={imageSrc}
  srcSet={`
    /assets/images/${imageSrc.split('/').pop().replace(".jpg", "-small.jpg")} 500w,
    /assets/images/${imageSrc.split('/').pop().replace(".jpg", "-medium.jpg")} 1000w,
    /assets/images/${imageSrc.split('/').pop().replace(".jpg", "-large.jpg")} 1500w
  `}
  sizes="(max-width: 600px) 500px, (max-width: 1200px) 1000px, 1500px"
  className="object-cover h-full w-full opacity-75 transition-opacity group-hover:opacity-40"
  width={500}
  height={500}
/>


        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-4">
          <p className="text-sm font-medium uppercase tracking-widest text-pink-500 dark:text-pink-400">
            {role}
          </p>
          <p className="text-xl font-bold transition-colors duration-300 transform text-white group-hover:text-teal-500 dark:group-hover:text-teal-400">
            {name}
          </p>

          <div className="opacity-0 translate-y-8 transition-all group-hover:translate-y-0 group-hover:opacity-100">
            <p className="mt-2 text-sm font-semibold text-black text-left dark:text-white">
              {description}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default TeamMember;
