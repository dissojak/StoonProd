"use client";
import React from "react";

export interface ExpertiseItemProps {
  title: string;
  description: string;
}

const ExpertiseItem: React.FC<ExpertiseItemProps> = ({ title, description }) => (
  <div className="px-6 py-8 overflow-hidden bg-white rounded-md shadow-md dark:bg-gray-600">
    <h2 className="text-xl font-medium text-gray-800 dark:text-gray-50">{title}</h2>
    <p className="max-w-md mt-4 text-gray-600 dark:text-gray-200">{description}</p>
  </div>
);

export default ExpertiseItem;
