import { AdminUser } from "../types/types";
import { FilterState } from "../types/types";

export function filterUsers(users: AdminUser[], filter: FilterState, search: string) {
  const q = search.trim().toLowerCase();
  return users.filter(u => {
    if (filter === "pending" && u.isAdmin) return false;
    if (filter === "approved" && !u.isAdmin) return false;
    if (q) return u.username.toLowerCase().includes(q) || u.email.toLowerCase().includes(q);
    return true;
  });
}
