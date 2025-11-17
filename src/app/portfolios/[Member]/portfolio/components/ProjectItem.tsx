import { IonIcon } from "@ionic/react";
import { eyeOutline } from "ionicons/icons";
import Image from "next/image";
import React from "react";

interface ProjectItemProps {
  title: string;
  category: string;
  imgSrc: string;
  description?: string | null;
  mediaUrl: string;
  mediaType: "reel" | "video" | "image";
  onClick: () => void;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ 
  title, 
  category, 
  imgSrc, 
  description,
  mediaUrl,
  mediaType,
  onClick 
}) => {
  return (
    <li
      className="project-item active"
      data-filter-item
      data-category={category}
    >
      <div 
        onClick={(e) => {
          e.preventDefault();
          onClick();
        }}
        className="cursor-pointer hoverscale"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
          }
        }}
      >
        <figure className="project-img">
          <div className="project-item-icon-box">
            <IonIcon icon={eyeOutline} />
          </div>
          <Image
            src={imgSrc || "/assets/images/placeholder.jpg"}
            alt={title}
            loading="lazy"
            width={800}
            height={500}
            className="object-cover w-full h-full aspect-[4/3]"
          />
        </figure>

        <h3 className="project-title">{title}</h3>
        <p className="project-category">{category}</p>
      </div>
    </li>
  );
};

export default ProjectItem;
