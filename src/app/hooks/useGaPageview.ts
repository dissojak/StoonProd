"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview } from "@/lib/ga";

/**
 * Optional SPA pageview tracker.
 * - Initial page load is tracked by the GA inline config script.
 * - This hook only fires on client-side route changes.
 */
export function useGaPageview(enabled: boolean = true): void {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const firstLoad = useRef(true);

  useEffect(() => {
    if (!enabled) return;

    const query = searchParams?.toString();
    const url = query ? `${pathname}?${query}` : pathname;

    if (firstLoad.current) {
      firstLoad.current = false; // skip initial load (already tracked)
      return;
    }

    pageview(url);
  }, [enabled, pathname, searchParams]);
}
