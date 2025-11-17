"use client";

import { useEffect, useState } from "react";

export default function ActivationClient({
  email,
  code,
}: {
  email?: string;
  code?: string;
}) {
  const [status, setStatus] = useState<"pending" | "success" | "error">("pending");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const activateAccount = async () => {
      if (!email || !code) {
        setStatus("error");
        setMessage("Invalid activation link.");
        return;
      }

      try {
        const response = await fetch("/api/auth/activate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, code }),
        });
        const data = await response.json();
        if (response.ok) {
          setStatus("success");
          setMessage(
            data.message ??
              "Account activated. Now you need to wait for admin approval."
          );
        } else {
          setStatus("error");
          setMessage(data.error ?? "Activation failed.");
        }
      } catch {
        setStatus("error");
        setMessage("Activation failed. Try again.");
      }
    };

    activateAccount();
  }, [email, code]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-900 to-zinc-950 p-4">
      <div className="w-full max-w-md bg-zinc-900/80 rounded-xl p-8 shadow-2xl text-center">
        {status === "pending" && (
          <div className="text-teal-400 text-lg font-bold">
            Activating account...
          </div>
        )}
        {status === "success" && (
          <div className="text-green-400 text-lg font-bold">{message}</div>
        )}
        {status === "error" && (
          <div className="text-red-400 text-lg font-bold">{message}</div>
        )}
      </div>
    </main>
  );
}