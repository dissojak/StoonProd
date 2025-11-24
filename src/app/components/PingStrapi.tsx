"use client";
import React, { useEffect } from "react";

export default function PingStrapi() {
  useEffect(() => {
    const STRAPI = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

    // Small, cheap endpoint to wake Strapi. Limit payload by requesting 1 item and no populations.
    const pingUrl = `${STRAPI.replace(/\/$/, "")}/api/team-members?pagination[limit]=1`;

    // Storage key and TTL (milliseconds). Default TTL = 5 minutes. Can be overridden by
    // NEXT_PUBLIC_STRAPI_PING_TTL_MINUTES (public env var) as minutes.
    const STORAGE_KEY = "stoon_strapi_last_ping";
    const ttlMinutes = Number(process.env.NEXT_PUBLIC_STRAPI_PING_TTL_MINUTES || "5");
    const TTL_MS = Math.max(0, ttlMinutes) * 60 * 1000;

    let didCancel = false;

    const shouldPing = () => {
      try {
        const v = sessionStorage.getItem(STORAGE_KEY);
        if (!v) return true;
        const last = Number(v);
        if (Number.isNaN(last)) return true;
        return Date.now() - last > TTL_MS;
      } catch (err) {
        // If storage isn't available, fall back to pinging but avoid throwing.
        return true;
      }
    };

    const recordPingAttempt = () => {
      try {
        sessionStorage.setItem(STORAGE_KEY, String(Date.now()));
      } catch (err) {
        // ignore
      }
    };

    const ping = async () => {
      // Record attempt immediately so we don't repeatedly hammer the service on rapid tab switches.
      recordPingAttempt();
      try {
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

    // Only ping on mount if no recent ping attempt exists
    if (shouldPing()) {
      console.log(`[PingStrapi] ${new Date().toISOString()} - no recent ping found, performing initial ping`);
      ping();
    } else {
      console.log(`[PingStrapi] ${new Date().toISOString()} - recent ping found, skipping initial ping`);
    }

    // Ping on visibilitychange, but only if TTL expired
    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        if (shouldPing()) {
          console.log(`[PingStrapi] ${new Date().toISOString()} - visibility change: pinging`);
          ping();
        } else {
          console.log(`[PingStrapi] ${new Date().toISOString()} - visibility change: recent ping exists, skipping`);
        }
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    // Also ping once on first user interaction if needed
    const onFirstInteraction = () => {
      if (shouldPing()) ping();
    };
    window.addEventListener("touchstart", onFirstInteraction, { once: true });
    window.addEventListener("mousedown", onFirstInteraction, { once: true });

    // Wrap window.fetch on the client so any client-side Strapi request refreshes the session ping
    let __originalFetch: typeof window.fetch | undefined = undefined;
    try {
      if (typeof window !== "undefined" && window.fetch) {
        __originalFetch = window.fetch.bind(window);
        const strapiBaseNoSlash = STRAPI.replace(/\/$/, "");

        const wrappedFetch = async (input: RequestInfo | URL, init?: RequestInit) => {
          const reqUrl = typeof input === "string" ? input : (input as Request).url || String(input);
          const res = await __originalFetch!(input as any, init as any);
          try {
            if (typeof reqUrl === "string" && reqUrl.startsWith(strapiBaseNoSlash)) {
              // refresh the stored timestamp so PingStrapi will skip unnecessary pings
              try {
                sessionStorage.setItem(STORAGE_KEY, String(Date.now()));
                console.log(`[PingStrapi] ${new Date().toISOString()} - refreshed ping timestamp due to client fetch to ${reqUrl}`);
              } catch (e) {
                /* ignore storage errors */
              }
            }
          } catch (e) {
            // ignore
          }
          return res;
        };

        // Install wrapper (cast to satisfy TypeScript)
        window.fetch = wrappedFetch as unknown as typeof window.fetch;
      }
    } catch (e) {
      // ignore
    }

    return () => {
      didCancel = true;
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("touchstart", onFirstInteraction as any);
      window.removeEventListener("mousedown", onFirstInteraction as any);
      // restore original fetch if we wrapped it
      try {
        if (typeof window !== "undefined" && __originalFetch) {
          window.fetch = __originalFetch;
        }
      } catch (e) {
        // ignore
      }
    };
  }, []);

  return null;
}
