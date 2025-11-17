"use client"; // Ensure this is a client-side component

import ResumeEducation from "./components/ResumeEducation";
import ResumeExperience from "./components/ResumeExperience";
import ResumeSkills from "./components/ResumeSkills";

// import "../css/globals.css";

const resumeData = {
  education: [
    {
      title: "University school of the arts",
      timeSpan: "2007 — 2008",
      description:
        "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
    },
    {
      title: "New york academy of art",
      timeSpan: "2006 — 2007",
      description:
        "Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis.",
    },
    {
      title: "High school of art and design",
      timeSpan: "2002 — 2004",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.",
    },
  ],
  experience: [
    {
      title: "Creative director",
      timeSpan: "2015 — Present",
      description:
        "Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.",
    },
    {
      title: "Art director",
      timeSpan: "2013 — 2015",
      description:
        "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
    },
    {
      title: "Web designer",
      timeSpan: "2010 — 2013",
      description:
        "Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.",
    },
  ],
  skills: [
    { title: "Web design", level: "80" },
    { title: "Graphic design", level: "70" },
    { title: "Branding", level: "90" },
    { title: "WordPress", level: "50" },
  ],
};

export default function Resume() {
  return (
    <>
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>
        <ResumeEducation education={resumeData.education} />
        <ResumeExperience experience={resumeData.experience} />
        <ResumeSkills skills={resumeData.skills} />
    </>
  );
}
