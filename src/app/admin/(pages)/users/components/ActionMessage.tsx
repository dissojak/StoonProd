"use client";
import React from "react";

export function ActionMessage({ message, type }: { message: string; type: "success" | "error" }) {
  return (
    <div
      className={`mb-6 rounded-lg border px-4 py-3 text-sm font-medium ${
        type === "success"
          ? "bg-teal-600/20 border-teal-600 text-teal-300"
          : "bg-red-600/20 border-red-600 text-red-300"
      }`}
      role="status"
    >
      {message}
    </div>
  );
}
