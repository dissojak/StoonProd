// GA4 helpers: typed, SSR-safe, and easy to reuse across the app.

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: unknown[];
  }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Send a GA4 page_view event for SPA navigations.
 * Note: Initial page_view is handled by the inline GA config script,
 * so use this only for subsequent client-side route changes.
 */
export function pageview(url: string): void {
  if (typeof window === "undefined") return;
  if (!GA_MEASUREMENT_ID || typeof window.gtag !== "function") return;

  window.gtag("event", "page_view", {
    page_path: url,
  });
}

export type GaEventParams = {
  action: string; // e.g. 'login', 'sign_up', 'select_content'
  category?: string; // custom dimension
  label?: string; // custom label
  value?: number; // numeric value
  non_interaction?: boolean; // if true, does not affect bounce rate
  [key: string]: unknown; // allow additional GA4 params if needed
};

/**
 * Send a typed custom GA4 event.
 * Example:
 *   gaEvent({ action: 'contact_submit', category: 'form', label: 'contact', value: 1 })
 */
export function gaEvent(params: GaEventParams): void {
  if (typeof window === "undefined") return;
  if (!GA_MEASUREMENT_ID || typeof window.gtag !== "function") return;

  const { action, ...rest } = params;
  window.gtag("event", action, rest);
}

export {};
