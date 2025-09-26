"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
  const handleLogout = () => {
    const { protocol, hostname } = window.location;
    console.log("[Logout] Current hostname:", hostname);

    let adminHost = hostname;
    if (!hostname.startsWith("admin.") && !hostname.includes("localhost")) {
      adminHost = `admin.${hostname}`;
      console.log("[Logout] Updated admin host:", adminHost);
    }

    const callbackUrl = `${protocol}//${adminHost}/auth/signin`;
    console.log("[Logout] Redirecting to callbackUrl:", callbackUrl);

    signOut({ callbackUrl });
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      Logout
    </button>
  );
}
