import { useMemo } from "react";
import { Logo } from "../types";
import { shuffleAvoidConsecutiveDupes } from "../utils/shuffleLogos";

/**
 * Hook that creates a full list of logos by combining the original logos
 * with a shuffled duplicate set to enable seamless infinite scrolling.
 */
export const useLogoList = (logos: Logo[]) => {
  const fullList = useMemo(() => {
    return [...logos, ...shuffleAvoidConsecutiveDupes(logos)];
  }, [logos]);

  return fullList;
};
