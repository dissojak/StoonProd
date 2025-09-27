"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ExternalLink, Copy, Check } from "lucide-react";

type RouteLink = {
  name: string;
  path: string;        // can be absolute (https://...) or relative (/...)
  external?: boolean;  // force treated as external
};

//
// CONFIG
//
const ADMIN_ROOT = "https://admin.stoonproduction.com"; // All admin & auth now on this subdomain

export default function UrlsPage() {
  // Derive current origin for PUBLIC site only (client side)
  const origin = useMemo(() => {
    if (typeof window === "undefined") return "";
    return window.location.origin;
  }, []);

  // Build absolute for public (main domain) only
  const makePublicAbs = (path: string) => {
    if (!origin) return path;
    if (/^https?:\/\//i.test(path)) return path;
    return origin.replace(/\/$/, "") + path;
  };

  // Public (main site) routes
  const publicRoutes: RouteLink[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Content", path: "/content" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Service & Tariffs", path: "/serviceandtariffs" },
    { name: "Web Design", path: "/web-design" },
    { name: "Contact", path: "/contact" },
    { name: "URLs", path: "/urls" },
  ];

  // Admin routes (all absolute on subdomain)
  const adminRoutes: RouteLink[] = [
    { name: "Admin (root)", path: ADMIN_ROOT, external: true },
    { name: "Admin • Figma Form", path: `${ADMIN_ROOT}/admin/figma/form`, external: true },
    { name: "Admin • Figma Order", path: `${ADMIN_ROOT}/admin/figma/order`, external: true },
    { name: "Admin • Mails", path: `${ADMIN_ROOT}/admin/mails`, external: true },
    { name: "Admin • Users", path: `${ADMIN_ROOT}/admin/users`, external: true },
  ];

  // Auth now also served from admin subdomain
  const authRoutes: RouteLink[] = [
    { name: "Sign In", path: `${ADMIN_ROOT}`, external: true },
    { name: "Sign Up", path: `${ADMIN_ROOT}`, external: true },
  ];

  return (
    <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16">
      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Project URLs</h1>
          <EnvBadge />
        </div>
        <p className="text-zinc-500 mt-2">
          Central reference for public pages and admin/auth endpoints.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <UrlSection
          title="Public"
          subtitle="Main site (primary domain)"
          links={publicRoutes}
          accent="indigo"
          makeAbs={makePublicAbs}
          treatAs="public"
        />
        <UrlSection
          title="Admin"
          subtitle="Admin dashboard (subdomain)"
          links={adminRoutes}
          accent="teal"
          makeAbs={(p) => p}  // already absolute
          treatAs="admin"
        />
        <UrlSection
          title="Auth"
          subtitle="Authentication (subdomain)"
          links={authRoutes}
          accent="amber"
          makeAbs={(p) => p}  // already absolute
          treatAs="admin"
        />
      </div>
    </div>
  );
}

function EnvBadge() {
  const [env] = useState(
    typeof process !== "undefined" ? process.env.NODE_ENV ?? "unknown" : "browser"
  );
  const color =
    env === "production"
      ? "bg-teal-600/15 text-teal-400 ring-teal-600/30"
      : env === "development"
      ? "bg-amber-600/15 text-amber-400 ring-amber-600/30"
      : "bg-zinc-600/20 text-zinc-300 ring-zinc-500/30";
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ${color}`}
    >
      {env}
    </span>
  );
}

function UrlSection({
  title,
  subtitle,
  links,
  accent = "indigo",
  makeAbs,
  treatAs,
}: {
  title: string;
  subtitle?: string;
  links: RouteLink[];
  accent?: "indigo" | "teal" | "amber";
  makeAbs: (path: string) => string;
  treatAs: "public" | "admin";
}) {
  const badgeClass = React.useMemo(() => {
    const map = {
      indigo:
        "bg-indigo-50 text-indigo-700 ring-indigo-200 dark:bg-indigo-500/15 dark:text-indigo-300 dark:ring-indigo-400/20",
      teal: "bg-teal-50 text-teal-700 ring-teal-200 dark:bg-teal-500/15 dark:text-teal-300 dark:ring-teal-400/20",
      amber:
        "bg-amber-50 text-amber-700 ring-amber-200 dark:bg-amber-500/15 dark:text-amber-300 dark:ring-amber-400/20",
    } as const;
    return map[accent];
  }, [accent]);

  return (
    <section className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm bg-white/70 dark:bg-zinc-900/50 backdrop-blur">
      <div className="mb-5">
        <span
          className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-md ring-1 ${badgeClass}`}
        >
          {title}
        </span>
        {subtitle && (
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">{subtitle}</p>
        )}
      </div>
      <ul className="space-y-3">
        {links.map((l) => {
          const abs = makeAbs(l.path);
            // All admin/auth routes are treated as external (different host)
          const isExternal =
            l.external ||
            treatAs === "admin" ||
            /^https?:\/\//i.test(l.path);

          return (
            <li
              key={l.name + l.path}
              className="group flex items-start justify-between gap-3 rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition"
            >
              <div className="min-w-0">
                {isExternal ? (
                  <a
                    href={abs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-medium text-zinc-900 dark:text-zinc-100 hover:text-orange-600"
                  >
                    {l.name}
                    <ExternalLink className="size-4 opacity-0 group-hover:opacity-100 transition" />
                  </a>
                ) : (
                  <Link
                    href={l.path}
                    className="flex items-center gap-2 font-medium text-zinc-900 dark:text-zinc-100 hover:text-orange-600"
                  >
                    {l.name}
                    <ExternalLink className="size-4 opacity-0 group-hover:opacity-100 transition" />
                  </Link>
                )}
                <div className="mt-1 text-sm text-blue-600 break-all">
                  {isExternal ? (
                    <a
                      href={abs}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {abs}
                    </a>
                  ) : (
                    <Link href={l.path} className="hover:underline">
                      {abs}
                    </Link>
                  )}
                </div>
              </div>
              <CopyButton text={abs} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label="Copy URL"
      className="shrink-0 inline-flex items-center gap-1 rounded-md border border-zinc-300 dark:border-zinc-700 px-3 py-2 text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
    >
      {copied ? (
        <>
          <Check className="size-4" /> Copied
        </>
      ) : (
        <>
          <Copy className="size-4" /> Copy
        </>
      )}
    </button>
  );
}