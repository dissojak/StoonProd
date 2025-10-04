import { allServices } from "../data/services";
import { ServiceData } from "../types";

// Currently static, but gives us a seam to later fetch from an API or CMS
export function useServices(): ServiceData[] {
  return allServices;
}

export function useServiceSequence(): Array<{ sectionNumber: number; service: ServiceData }> {
  // Alternate sectionNumber for existing styling logic
  return allServices.map((service, idx) => ({ sectionNumber: idx % 2, service }));
}
