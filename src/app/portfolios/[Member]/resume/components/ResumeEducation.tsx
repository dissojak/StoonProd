import React from "react";
import { IonIcon } from "@ionic/react";
import { bookOutline } from "ionicons/icons";

type EducationItem = {
  title: string;
  timeSpan: string;
  description?: string;
};

interface ResumeEducationProps {
  education: EducationItem[];
}

const TimelineItem: React.FC<EducationItem> = ({ title, timeSpan, description }) => (
  <li className="timeline-item">
    <h4 className="h4 timeline-item-title">{title}</h4>
    <span>{timeSpan}</span>
    <p className="timeline-text">{description}</p>
  </li>
);

export default function ResumeEducation({ education }: ResumeEducationProps) {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <IonIcon icon={bookOutline} />
        </div>
        <h3 className="h3">Education</h3>
      </div>
      <ol className="timeline-list">
        {education.map((item, index) => (
          <TimelineItem key={index} title={item.title} timeSpan={item.timeSpan} description={item.description} />
        ))}
      </ol>
    </section>
  );
}
