export function formatPrice(value: string | number): string {
  if (value === undefined || value === null) return "";
  const num = typeof value === "number" ? value : Number(String(value).replace(/[^0-9.]/g, ""));
  if (Number.isNaN(num)) return String(value);
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(num);
}
