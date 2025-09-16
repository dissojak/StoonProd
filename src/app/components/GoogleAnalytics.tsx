"use client";

import Script from "next/script";

// Use NEXT_PUBLIC_ so it's available on the client.
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * GA4 loader for App Router.
 * - Place once in app/layout.tsx (end of <body> or in <head>).
 * - Initial page_view is sent via gtag('config', ...).
 * - For SPA navigations, use the optional useGaPageview() hook.
 */
export default function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null; // Safe: skip in dev/preview without GA configured

  return (
    <>
      {/* Load GA4 library after the page is interactive to avoid hydration issues */}
      <Script
        id="ga4-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      {/* Configure GA4 and send initial page_view once */}
      <Script
        id="ga4-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);} 
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              send_page_view: true,
              page_path: window.location.pathname + window.location.search
            });
          `,
        }}
      />
    </>
  );
}
