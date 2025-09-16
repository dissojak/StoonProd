"use client";

import React from "react";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname?.includes(path);

  return (
    <main className="flex min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      {/* Sidebar */}
      <aside className="w-64 flex flex-col border-r border-zinc-800 h-screen sticky top-0">
        <nav className="flex-1 flex flex-col pt-[100px] space-y-4 overflow-y-auto">
          <a
            href="/admin/figma/form"
            className={`block p-2 rounded ${
              isActive("/admin/figma") && !isActive("/admin/figma/order") ? "bg-zinc-800" : ""
            }`}
          >
            Figma Form
          </a>
          <a
            href="/admin/figma/order"
            className={`block p-2 rounded ${isActive("/admin/figma/order") ? "bg-zinc-800" : ""}`}
          >
            Figma Orders
          </a>
          <a
            href="/admin/mails"
            className={`block p-2 rounded ${isActive("/admin/messages") ? "bg-zinc-800" : ""}`}
          >
            Contact Messages
          </a>
        </nav>

        {/* Logout pinned at bottom */}
        <div className="mt-auto p-4">
          <form action="/api/auth/signout" method="POST">
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </form>
        </div>
      </aside>

      {/* Main content */}
      <section className="flex-1 p-8 overflow-y-auto">{children}</section>
    </main>
  );
}
