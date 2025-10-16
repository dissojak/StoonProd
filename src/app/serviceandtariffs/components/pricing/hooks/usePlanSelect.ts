"use client";
import { useCallback } from "react";
import type { Plan } from "@/types/pricing";

export function usePlanSelect(setOpenPlan?: (plan: Plan) => void, plan?: Plan) {
  return useCallback(() => {
    if (setOpenPlan && plan) setOpenPlan(plan);
  }, [setOpenPlan, plan]);
}
