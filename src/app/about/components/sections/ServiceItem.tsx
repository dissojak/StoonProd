"use client";
import React from "react";

export interface ServiceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ icon, title, description }) => (
  <div className="flex space-x-4">
    {icon}
    <div>
      <h4 className="text-xl font-medium text-gray-800 dark:text-white transition-colors duration-1000">
        {title}
      </h4>
      <p className="max-w-lg mt-4 text-gray-600 dark:text-gray-300 transition-colors duration-1000">
        {description}
      </p>
    </div>
  </div>
);

export default ServiceItem;
