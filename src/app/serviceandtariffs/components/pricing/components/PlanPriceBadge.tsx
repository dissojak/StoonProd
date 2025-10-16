"use client";
import React from "react";
import { formatPrice } from "../utils/formatPrice";

interface PlanPriceBadgeProps {
  minPrice: string | number;
  maxPrice: string | number;
  currency?: string;
  className?: string;
}

export const PlanPriceBadge: React.FC<PlanPriceBadgeProps> = ({
  minPrice,
  maxPrice,
  currency = "DT",
  className,
}) => {
  return (
    <div
      className={
        className ||
        "absolute top-0 right-0 flex items-center bg-teal-600 dark:bg-teal-500 rounded-l-full py-4 pl-4 pr-2 text-3xl font-semibold text-white"
      }
      aria-label={`Price range ${minPrice} to ${maxPrice} ${currency}`}
    >
      <span>
        {formatPrice(minPrice)} - {formatPrice(maxPrice)}
      </span>
      <small className="text-lg ml-2 text-white mt-2">{currency}</small>
    </div>
  );
};
