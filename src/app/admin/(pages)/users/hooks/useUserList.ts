"use client";
import { useCallback, useEffect, useState } from "react";
import { AdminUser, FetchState } from "../types/types";
import { fetchAllUsers } from "../utils/userActions";

export function useUserList() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [fetchState, setFetchState] = useState<FetchState>("idle");
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const loadUsers = useCallback(async () => {
    setFetchState("loading");
    try {
      const list = await fetchAllUsers();
      setUsers(list);
      setFetchState("success");
      setLastUpdated(new Date());
    } catch {
      setFetchState("error");
    }
  }, []);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  const removeUser = useCallback((id: string) => {
    setUsers(prev => prev.filter(u => u._id !== id));
  }, []);

  return { users, setUsers, fetchState, loadUsers, removeUser, lastUpdated, setLastUpdated };
}
