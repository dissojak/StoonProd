import { AdminUser } from "../types/types";

async function apiPost(url: string, body: any) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `Request failed: ${url}`);
  return data;
}

export async function approveUser(id: string) {
  return apiPost("/api/admin/users/approve", { id });
}

export async function declineUser(id: string) {
  return apiPost("/api/admin/users/decline", { id });
}

export async function fetchAllUsers(): Promise<AdminUser[]> {
  const res = await fetch("/api/admin/users");
  if (!res.ok) throw new Error("Failed to load users");
  const data = await res.json();
  return data.users || [];
}
