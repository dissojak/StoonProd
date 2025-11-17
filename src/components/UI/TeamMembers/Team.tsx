import TeamMember from "./TeamMember";
import type { TeamMember as TM } from "../../../types/teamMembers";

type TeamProps = {
  teamMembers: TM[];
};

const Team = ({ teamMembers }: TeamProps) => {
  return (
    <section id="team" className="bg-white dark:bg-gray-800">
      <div className="max-w-5xl px-6 py-16 mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">Our Leadership</h2>
        <p className="max-w-lg mx-auto mt-4 text-gray-600 dark:text-gray-300">
          Meet the talented team behind our success. Each member brings unique skills, creativity,
          and expertise to the table, contributing to our innovative solutions and exceptional
          results. From development to design, our diverse team is dedicated to delivering
          outstanding work that exceeds expectations.
        </p>

        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;