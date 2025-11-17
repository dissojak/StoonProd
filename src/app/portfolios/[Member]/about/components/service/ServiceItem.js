// src/components/ServiceItem.js

import Image from "next/image";

export default function ServiceItem({ logo , title, description }) {
  return (
    <li className="service-item">
      <div className="service-icon-box">
        {logo && (
          <Image
            src={logo}
            alt={`${title} Icon`}
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
