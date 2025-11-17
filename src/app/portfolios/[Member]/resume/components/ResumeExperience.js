import { briefcaseOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

import React from "react";

const TimelineItem = ({ title, timeSpan, description }) => (
  <li className="timeline-item">
    <h4 className="h4 timeline-item-title">{title}</h4>
    <span>{timeSpan}</span>
    <p className="timeline-text">{description}</p>
  </li>
);

export default function ResumeExperience({ experience }) {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <IonIcon icon={briefcaseOutline} />
        </div>
        <h3 className="h3">Experience</h3>
      </div>
      <ol className="timeline-list">
        {experience.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.title}
            timeSpan={item.timeSpan}
            description={item.description}
          />
        ))}
      </ol>
    </section>
  );
}
