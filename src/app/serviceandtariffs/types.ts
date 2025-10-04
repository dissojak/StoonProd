export type PlanFeature = { id: number; text: string };
export type Plan = {
  minPrice: string;
  maxPrice: string;
  title: string;
  description: string;
  features: PlanFeature[];
};
export type ServiceData = { title: string; plans: Plan[] };
