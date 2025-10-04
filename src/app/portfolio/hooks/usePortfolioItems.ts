"use client"; // Optional: only needed if in future we add stateful filtering/sorting.
import { useMemo } from "react";
import { portfolioItems } from "../data/items";
import { PortfolioItem } from "../types";

export interface UsePortfolioItemsOptions {
  category?: string;
  limit?: number;
}

export function usePortfolioItems(options: UsePortfolioItemsOptions = {}): PortfolioItem[] {
  const { category, limit } = options;
  return useMemo(() => {
    let items = portfolioItems;
    if (category) items = items.filter(i => i.category === category);
    if (limit && limit > 0) items = items.slice(0, limit);
    return items;
  }, [category, limit]);
}
