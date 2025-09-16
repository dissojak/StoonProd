"use client";

import Link from "next/link";
import React, { useMemo, useState } from "react";
import { ExternalLink, Copy, Check } from "lucide-react";

type RouteLink = { name: string; path: string };

export default function UrlsPage() {
  // Derive base URL from current location (works for localhost and production)
  const baseUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    return `${window.location.protocol}//${window.location.host}`;
  }, []);

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

  const adminRoutes: RouteLink[] = [
    { name: "Admin (root)", path: "/admin" },
    { name: "Admin • Figma Form", path: "/admin/figma/form" },
    { name: "Admin • Figma Order", path: "/admin/figma/order" },
    { name: "Admin • Mails", path: "/admin/mails" },
  ];

  const authRoutes: RouteLink[] = [{ name: "Sign In", path: "/auth/signin" }];

  return (
    <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-16">
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Project URLs</h1>
        <p className="text-zinc-500 mt-2">Quick access to all public pages and admin tools.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <UrlSection title="Public" subtitle="Client-facing pages" links={publicRoutes} baseUrl={baseUrl} />
        <UrlSection
          title="Admin"
          subtitle="Restricted tools (requires sign-in)"
          links={adminRoutes}
          baseUrl={baseUrl}
          accent="teal"
        />
        <UrlSection title="Auth" subtitle="Authentication" links={authRoutes} baseUrl={baseUrl} accent="amber" />
      </div>
    </div>
  );
}

function UrlSection({
  title,
  subtitle,
  links,
  baseUrl,
  accent = "indigo",
}: {
  title: string;
  subtitle?: string;
  links: RouteLink[];
  baseUrl: string;
  accent?: "indigo" | "teal" | "amber";
}) {
  const badgeClass = useMemo(() => {
    const map = {
      indigo: "bg-indigo-50 text-indigo-700 ring-indigo-200",
      teal: "bg-teal-50 text-teal-700 ring-teal-200",
      amber: "bg-amber-50 text-amber-700 ring-amber-200",
    } as const;
    return map[accent];
  }, [accent]);

  return (
    <section className="rounded-xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm bg-white/70 dark:bg-zinc-900/50 backdrop-blur">
      <div className="mb-5">
        <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-md ring-1 ${badgeClass}`}>
          {title}
        </span>
        {subtitle && <p className="mt-2 text-sm text-zinc-500">{subtitle}</p>}
      </div>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.path} className="group flex items-start justify-between gap-3 rounded-lg border border-zinc-200 dark:border-zinc-800 p-4 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition">
            <div className="min-w-0">
              <Link href={l.path} className="flex items-center gap-2 font-medium text-zinc-900 dark:text-zinc-100 hover:text-orange-600">
                {l.name}
                <ExternalLink className="size-4 opacity-0 group-hover:opacity-100 transition" />
              </Link>
              <div className="mt-1 text-sm text-blue-600 break-all">
                <Link href={l.path} className="hover:underline">
                  {baseUrl ? baseUrl + l.path : l.path}
                </Link>
              </div>
            </div>
            <CopyButton text={baseUrl ? baseUrl + l.path : l.path} />
          </li>
        ))}
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
    } catch (e) {
      // no-op
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label="Copy URL"
      className="shrink-0 inline-flex items-center gap-1 rounded-md border border-zinc-300 dark:border-zinc-700 px-3 py-2 text-sm text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
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

