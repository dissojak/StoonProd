"use client";
import React, { useEffect } from "react";

export default function PingStrapi() {
  useEffect(() => {
    const STRAPI = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

    // Small, cheap endpoint to wake Strapi. Limit payload by requesting 1 item and no populations.
    const pingUrl = `${STRAPI.replace(/\/$/, "")}/api/team-members?pagination[limit]=1`;

    let didCancel = false;

    const ping = async () => {
      try {
        // Fire-and-forget; keep logs for debugging in console
        const res = await fetch(pingUrl, { method: "GET", cache: "no-store" });
        if (didCancel) return;
        if (res.ok) {
          console.log(`[PingStrapi] ${new Date().toISOString()} - success ping ${pingUrl} (status: ${res.status})`);
        } else {
          console.warn(`[PingStrapi] ${new Date().toISOString()} - ping responded with status ${res.status} for ${pingUrl}`);
        }
      } catch (err) {
        if (didCancel) return;
        console.error(`[PingStrapi] ${new Date().toISOString()} - ping failed for ${pingUrl}:`, err);
      }
    };

    // Ping once on mount
    ping();

    // Also ping when the page becomes visible again (user switches back to tab)
    const onVisibility = () => {
      if (document.visibilityState === "visible") ping();
    };
    document.addEventListener("visibilitychange", onVisibility);

    // Optional: on first user interaction (touchstart/mousedown) ping again to reduce cold-start time
    window.addEventListener("touchstart", ping, { once: true });
    window.addEventListener("mousedown", ping, { once: true });

    return () => {
      didCancel = true;
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("touchstart", ping as any);
      window.removeEventListener("mousedown", ping as any);
    };
  }, []);

  return null;
}
