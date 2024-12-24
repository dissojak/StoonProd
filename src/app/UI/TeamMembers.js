import TeamMember from "./TeamMember";

const Team = () => {
  const teamMembers = [
    {
      imageSrc: "/assets/images/adem.jpg",
      name: "Adem",
      role: "Media Engineer",
      description:
        "Adem specializes in videography, web design, photography, and development, combining creativity and technical expertise for top-tier digital solutions.",
    },
    {
      imageSrc: "/assets/images/mouhib.jpg",
      name: "Mouhib",
      role: "Content Creator",
      description:
        "Mouhib is a versatile content creator, skilled in photography and video production, delivering engaging visual stories across multiple platforms.",
    },
    {
      imageSrc: "/assets/images/hazem.jpg",
      name: "Hazem",
      role: "Developer",
      description:
        "Hazem is a full-stack engineer, skilled in both front-end and back-end development, creating seamless and efficient web applications.",
    },
    // {
    //   imageSrc: "/assets/images/jesser.jpg",
    //   name: "John Doe",
    //   role: "Project Manager",
    //   description: "Excepteur sint occaecat cupidatat non proident.",
    // },
    // Add more team members as needed
  ];

  return (
    <section id="team" className="bg-white dark:bg-gray-800">
      <div className="max-w-5xl px-6 py-16 mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
          Our Leadership
        </h2>
        <p className="max-w-lg mx-auto mt-4 text-gray-600 dark:text-gray-300">
          Meet the talented team behind our success. Each member brings unique
          skills, creativity, and expertise to the table, contributing to our
          innovative solutions and exceptional results. From development to
          design, our diverse team is dedicated to delivering outstanding work
          that exceeds expectations.
        </p>

        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              imageSrc={member.imageSrc}
              name={member.name}
              role={member.role}
              alt={"//avoidError"}
              width={10}
              height={10}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
