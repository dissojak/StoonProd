import { useMemo } from "react";

/**
 * useCircles
 * Returns an array of indexes for decorative circles to avoid
 * recreating Array.from on each render.
 */
export function useCircles(count: number = 10): number[] {
  // Memoize array of indices to prevent re-creation
  const circles = useMemo(() => Array.from({ length: count }, (_, i) => i), [count]);
  return circles;
}
