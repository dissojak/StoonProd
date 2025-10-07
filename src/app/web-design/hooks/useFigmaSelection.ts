"use client";
import { useCallback, useEffect, useState } from "react";
import { FigmaItem } from "../types";

export function useFigmaSelection() {
  const [active, setActive] = useState<FigmaItem | null>(null);

  const open = useCallback((item: FigmaItem) => setActive(item), []);
  const close = useCallback(() => setActive(null), []);

  // Escape key handling
  useEffect(() => {
    if (!active) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active, close]);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (active) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [active]);

  return { active, open, close };
}
