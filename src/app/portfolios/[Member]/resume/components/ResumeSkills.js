import React from "react";

const SkillItem = ({ title, level }) => (
  <li className="skills-item">
    <div className="title-wrapper">
      <h5 className="h5">{title}</h5>
      <data value={level}>{level}%</data>
    </div>
    <div className="skill-progress-bg">
      <div className="skill-progress-fill" style={{ width: `${level}%` }}></div>
    </div>
  </li>
);

export default function ResumeSkills({ skills }) {
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
