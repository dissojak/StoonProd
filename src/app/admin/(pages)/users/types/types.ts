export interface AdminUser {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  status?: string;
}

export type FetchState = "idle" | "loading" | "error" | "success";
export type FilterState = "all" | "pending" | "approved";
