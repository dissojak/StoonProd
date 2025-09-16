import React from "react";

type SheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
};

export function Sheet({ open, onOpenChange, children }: SheetProps) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/50 transition-opacity ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      onClick={() => onOpenChange(false)}
    >
      {children}
    </div>
  );
}

type SheetContentProps = {
  side: "left" | "right";
  className?: string;
  children: React.ReactNode;
};

export function SheetContent({ side, className = "", children }: SheetContentProps) {
  return (
    <div
      className={`absolute top-0 ${side === "right" ? "right-0" : "left-0"} w-[300px] sm:w-[400px] bg-white p-4 ${className}`}
    >
      {children}
    </div>
  );
}

type SheetTriggerProps = { children: React.ReactNode };
export function SheetTrigger({ children }: SheetTriggerProps) {
  return <>{children}</>;
}
