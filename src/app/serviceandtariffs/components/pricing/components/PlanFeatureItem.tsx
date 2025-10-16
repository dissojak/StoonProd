"use client";
import React from "react";
import type { PlanFeature } from "@/types/pricing";

interface PlanFeatureItemProps {
  feature: PlanFeature;
}

export const PlanFeatureItem: React.FC<PlanFeatureItemProps> = ({ feature }) => {
  return (
    <li className="flex items-center space-x-2" key={feature.id}>
      <span className="flex items-center justify-center w-5 h-5 bg-sky-400 dark:bg-sky-500 text-white rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
            fill="currentColor"
          ></path>
        </svg>
      </span>
      <span>{feature.text}</span>
    </li>
  );
};
