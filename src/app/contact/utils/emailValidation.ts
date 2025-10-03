// Email validation utilities extracted from page.tsx
export function isValidEmail(email: string): boolean {
  if (!email || email.length > 254) return false;
  const at = email.indexOf("@");
  if (!hasValidAtSymbol(email, at)) return false;
  const local = email.slice(0, at);
  const domain = email.slice(at + 1);
  if (!isValidLocal(local)) return false;
  if (!isValidDomain(domain)) return false;
  return true;
}

export function hasValidAtSymbol(email: string, at: number): boolean {
  return at > 0 && at === email.lastIndexOf("@") && at !== email.length - 1;
}

export function isValidLocal(local: string): boolean {
  return local.length > 0 && local.length <= 64;
}

export function isValidDomain(domain: string): boolean {
  if (domain.length < 3 || domain.length > 255) return false;
  if (domain.includes("..")) return false;
  const labels = domain.split(".");
  if (labels.length < 2) return false;
  for (const label of labels) {
    if (!isValidDomainLabel(label)) return false;
  }
  return true;
}

export function isValidDomainLabel(label: string): boolean {
  return label.length > 0 && label.length <= 63 && !label.startsWith("-") && !label.endsWith("-");
}
