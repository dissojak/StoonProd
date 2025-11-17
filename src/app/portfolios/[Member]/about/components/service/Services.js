// src/components/Services.js

import ServiceItem from './ServiceItem';

export default function Services({ services }) {
  // Fallback to hardcoded data if no services provided
  const servicesData = services || [
    {
      icon: "/assets/images/icon-design.svg",
      title: "Web Design",
      height: 50,
      description: "The most modern and high-quality design made at a professional level.",
    },
    {
      icon: "/assets/images/icon-dev.svg",
      title: "Web Development",
      height: 50,
      description: "High-quality development of sites at the professional level.",
    },
    {
      icon: "/assets/images/icon-app.svg",
      title: "Mobile Apps",
      height: 50,
      description: "Professional development of applications for iOS and Android.",
    },
    {
      icon: "/assets/images/icon-photo.svg",
      title: "Photography",
      height: 50,
      description: "High-quality photography services for various categories.",
    },
  ];

  if (!servicesData || servicesData.length === 0) {
    return null;
  }

  return (
    <section className="service">
      <h3 className="h3 service-title">What I&apos;m doing</h3>
      <ul className="service-list">
        {servicesData.map((service, index) => (
          <ServiceItem
            key={index}
            logo={service.logo}
            title={service.title}
            height={service.height || 50}
            description={service.description}
          />
        ))}
      </ul>
    </section>
  );
}
