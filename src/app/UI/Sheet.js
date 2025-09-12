export function Sheet({ open, onOpenChange, children }) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-black/50 transition-opacity ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      onClick={() => onOpenChange(false)}
    >
      {children}
    </div>
  );
}

export function SheetContent({ side, className, children }) {
  return (
    <div
      className={`absolute top-0 ${side === "right" ? "right-0" : "left-0"} w-[300px] sm:w-[400px] bg-white p-4 ${className}`}
    >
      {children}
    </div>
  );
}

export function SheetTrigger({ children }) {
  return <>{children}</>; // Used to trigger the opening of the sheet
}
