"use client";
import React from "react";
import type { PlanFeature } from "@/types/pricing";
import { PlanFeatureItem } from "./PlanFeatureItem";

interface PlanFeatureListProps {
  features: PlanFeature[];
  className?: string;
  emptyMessage?: string;
}

export const PlanFeatureList: React.FC<PlanFeatureListProps> = ({
  features,
  className,
  emptyMessage = "No features listed yet.",
}) => {
  if (!features || features.length === 0) {
    return <p className="text-sm italic text-gray-200/70">{emptyMessage}</p>;
  }
  return (
    <ul className={className || "flex flex-col space-y-3 mt-4"} aria-label="Plan features">
      {features.map((f) => (
        <PlanFeatureItem key={f.id} feature={f} />
      ))}
    </ul>
  );
};
