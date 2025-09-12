// app/admin/components/admin/AdminPageClient.jsx (client component)
"use client";

import { useState } from "react";

import AdminFigmaForm from "../figma/AdminFigmaForm";
import AdminFigmaOrder from "../figma/AdminFigmaOrder";
import AdminContactMessages from "../mails/AdminContactMessages";

export default function AdminPageClient() {
  const [active, setActive] = useState("figmaForm");

  return (
    <main className="min-h-screen flex bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      {/* Sidebar */}
      <aside className="w-64 flex flex-col border-r border-zinc-800 p-4">
        <nav className="flex-1 space-y-4">
          <button
            onClick={() => setActive("figmaForm")}
            className={`w-full text-left p-2 rounded ${active === "figmaForm" ? "bg-zinc-800" : ""}`}
          >
            Figma Form
          </button>
          <button
            onClick={() => setActive("figmaOrder")}
            className={`w-full text-left p-2 rounded ${active === "figmaOrder" ? "bg-zinc-800" : ""}`}
          >
            Figma Orders
          </button>
          <button
            onClick={() => setActive("messages")}
            className={`w-full text-left p-2 rounded ${active === "messages" ? "bg-zinc-800" : ""}`}
          >
            Contact Messages
          </button>
        </nav>

        {/* Sign out button at bottom */}
        <form action="/api/auth/signout" method="POST" className="mt-4">
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </form>
      </aside>

      {/* Content */}
      <section className="flex-1 p-8 overflow-y-auto">
        {active === "figmaForm" && <AdminFigmaForm />}
        {active === "figmaOrder" && <AdminFigmaOrder />}
        {active === "messages" && <AdminContactMessages />}
      </section>
    </main>
  );
}
