import React from "react";
import Image from "next/image";

interface ServiceItemProps {
  logo?: string | null;
  title?: string;
  description?: string;
  height?: number;
}

export default function ServiceItem({ logo, title, description }: ServiceItemProps) {
  return (
    <li className="service-item">
      <div className="service-icon-box">
        {logo && (
          <Image
            src={logo}
            alt={`${title || "service"} Icon`}
            width={40}
            height={50}
            className="imageSVG"
          />
        )}
      </div>
      <div className="service-content-box">
        <h4 className="h4 service-item-title">{title}</h4>
        <p className="service-item-text">{description}</p>
      </div>
    </li>
  );
}
