"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AdminUser, FetchState, FilterState } from "../types/types";
import { fetchAllUsers, approveUser, declineUser } from "../utils/userActions";
import { filterUsers } from "../utils/filterUsers";

interface ActionMessage { text: string; type: "success" | "error" }

export function useUserApproval() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [fetchState, setFetchState] = useState<FetchState>("idle");
  const [actionMessage, setActionMessage] = useState<ActionMessage | null>(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<FilterState>("all");
  const [workingIds, setWorkingIds] = useState<Set<string>>(new Set());
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const dismissTimer = useRef<NodeJS.Timeout | null>(null);

  const showMessage = useCallback((text: string, type: ActionMessage["type"]) => {
    setActionMessage({ text, type });
    if (dismissTimer.current) clearTimeout(dismissTimer.current);
    dismissTimer.current = setTimeout(() => setActionMessage(null), 4000);
  }, []);

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

  useEffect(() => { loadUsers(); }, [loadUsers]);

  const filteredUsers = useMemo(() => filterUsers(users, filter, search), [users, filter, search]);

  const withWorking = (id: string, fn: () => Promise<void>) => {
    setWorkingIds(prev => new Set(prev).add(id));
    fn().finally(() => setWorkingIds(prev => { const next = new Set(prev); next.delete(id); return next; }));
  };

  const approve = (id: string) => withWorking(id, async () => {
    try {
      await approveUser(id);
      // Remove user (moves out of pending list)
      setUsers(prev => prev.filter(u => u._id !== id));
      showMessage("User approved and notified.", "success");
      setLastUpdated(new Date());
    } catch (e: any) {
      showMessage(e.message || "Error approving user.", "error");
    }
  });

  const decline = (id: string) => withWorking(id, async () => {
    if (!confirm("Are you sure you want to decline this user?")) return;
    try {
      await declineUser(id);
      setUsers(prev => prev.filter(u => u._id !== id));
      showMessage("User declined and notified.", "success");
      setLastUpdated(new Date());
    } catch (e: any) {
      showMessage(e.message || "Error declining user.", "error");
    }
  });

  return {
    users,
    filteredUsers,
    fetchState,
    actionMessage,
    search, setSearch,
    filter, setFilter,
    workingIds,
    loadUsers,
    approve,
    decline,
    lastUpdated,
  };
}
