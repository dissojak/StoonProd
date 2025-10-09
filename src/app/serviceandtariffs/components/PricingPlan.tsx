"use client";
import React, { memo } from "react";
import type { Plan } from "@/types/pricing";
import { PlanPriceBadge } from "./pricing/components/PlanPriceBadge";
import { PlanFeatureList } from "./pricing/components/PlanFeatureList";
import { usePlanSelect } from "./pricing/hooks/usePlanSelect";

type PricingPlanProps = {
  /** Preferred prop name */
  plan?: Plan;
  /** Deprecated – kept for backward compatibility */
  planDetails?: Plan;
  setOpenPlan?: (plan: Plan) => void;
  currency?: string;
  className?: string;
  buttonLabel?: string;
  disabled?: boolean;
};

const BasePricingPlan: React.FC<PricingPlanProps> = ({
  plan,
  planDetails,
  setOpenPlan,
  currency = "DT",
  className,
  buttonLabel = "Choose plan",
  disabled = false,
}) => {
  const effectivePlan = plan || planDetails;
  const onSelect = usePlanSelect(setOpenPlan, effectivePlan);

  if (!effectivePlan) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "<PricingPlan /> rendered without a plan. Ensure you pass `plan` prop (old `planDetails` still supported)."
      );
    }
    return null;
  }

  return (
    <div
      className={
        className ||
        "rounded-2xl shadow-lg p-3 bg-teal-600 dark:bg-teal-500 text-gray-600 dark:text-gray-200 max-w-sm max-h-fit"
      }
    >
      <div className="relative flex flex-col items-left p-5 pt-24 bg-blue-100 dark:bg-gray-800 rounded-xl">
        <PlanPriceBadge minPrice={effectivePlan.minPrice} maxPrice={effectivePlan.maxPrice} currency={currency} />
        <p className="text-xl font-semibold text-cyan-800 dark:text-cyan-300">{effectivePlan.title}</p>
        <p className="text-left mt-3 dark:text-gray-300">{effectivePlan.description}</p>
        <PlanFeatureList features={effectivePlan.features} />
        <div className="w-full flex justify-end mt-6">
          <button
            type="button"
            onClick={onSelect}
            disabled={disabled}
            className="w-full py-3 text-center text-white bg-teal-700 disabled:opacity-60 disabled:cursor-not-allowed dark:bg-teal-600 rounded-lg font-medium text-lg hover:bg-teal-500 dark:hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            aria-label={`Select plan ${effectivePlan.title}`}
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export const PricingPlan = memo(BasePricingPlan);
export default PricingPlan;