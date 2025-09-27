"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "./components/admin/LogoutButton";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (!pathname) return false;
    // Exact section highlight logic
    return pathname === path || pathname.startsWith(path + "/");
  };

  const navItems = [
    {
      label: "Figma Form",
      href: "/admin/figma/form",
      match: "/admin/figma/form",
    },
    {
      label: "Figma Orders",
      href: "/admin/figma/order",
      match: "/admin/figma/order",
    },
    {
      label: "Contact Messages",
      href: "/admin/mails", // keep your original route if correct
      match: "/admin/mails",
    },
    {
      label: "User Approval",
      href: "/admin/users",
      match: "/admin/users",
    },
  ];

  return (
    <main className="flex min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      {/* Sidebar */}
      <aside className="w-64 flex flex-col border-r border-zinc-800 h-screen sticky top-0">
        <div className="pt-10 px-4">
          <h1 className="text-lg font-semibold tracking-wide">Admin Panel</h1>
          <p className="text-xs text-zinc-500 mt-1">Manage platform assets</p>
        </div>

        <nav className="flex-1 flex flex-col mt-8 space-y-1 overflow-y-auto px-2">
          {navItems.map((item) => {
            const active = isActive(item.match);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${
                    active
                      ? "bg-zinc-800 text-white"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Logout pinned at bottom */}
        <div className="mt-auto p-4 border-t border-zinc-800">
          <LogoutButton />
        </div>
      </aside>

      {/* Main content */}
      <section className="flex-1 p-8 overflow-y-auto">{children}</section>
    </main>
  );
}
