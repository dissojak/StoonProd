export type PlanFeature = { id: number | string; text: string };

export type Plan = {
  minPrice: string | number;
  maxPrice: string | number;
  title: string;
  description: string;
  features: PlanFeature[];
};
