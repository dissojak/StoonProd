import { AlertCircle, CheckCircle2 } from "lucide-react";
import React from "react";

export default function Message({ type, children }: { type: "error" | "success"; children: React.ReactNode }) {
  return (
    <div
      className={`flex items-center gap-2 rounded-md border p-3 text-sm ${
        type === "error"
          ? "border-red-900 bg-red-900/40 text-red-300"
          : "border-green-900 bg-green-900/40 text-green-300"
      }`}
    >
      {type === "error" ? <AlertCircle className="h-5 w-5 shrink-0" /> : <CheckCircle2 className="h-5 w-5 shrink-0" />}
      <span>{children}</span>
    </div>
  );
}
