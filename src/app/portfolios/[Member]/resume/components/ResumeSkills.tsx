import React from "react";

type Skill = {
  title: string;
  level: string | number;
};

interface ResumeSkillsProps {
  skills: Skill[];
}

const SkillItem: React.FC<Skill> = ({ title, level }) => (
  <li className="skills-item">
    <div className="title-wrapper">
      <h5 className="h5">{title}</h5>
      <data value={String(level)}>{level}%</data>
    </div>
    <div className="skill-progress-bg">
      <div className="skill-progress-fill" style={{ width: `${level}%` }}></div>
    </div>
  </li>
);

export default function ResumeSkills({ skills }: ResumeSkillsProps) {
  return (
    <section className="skill">
      <h3 className="h3 skills-title">My skills</h3>
      <ul className="skills-list content-card">
        {skills.map((skill, index) => (
          <SkillItem key={index} title={skill.title} level={skill.level} />
        ))}
      </ul>
    </section>
  );
}
