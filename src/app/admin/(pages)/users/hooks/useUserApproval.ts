"use client";
import { useCallback, useMemo, useState } from "react";
import { FilterState } from "../types/types";
import { approveUser, declineUser } from "../utils/userActions";
import { filterUsers } from "../utils/filterUsers";

import { useActionMessage } from "./useActionMessage";
import { useWorkingIds } from "./useWorkingIds";
import { useUserList } from "./useUserList";

export function useUserApproval() {
  const { actionMessage, showMessage } = useActionMessage();
  const { workingIds, withWorking } = useWorkingIds();
  const { users, fetchState, loadUsers, removeUser, lastUpdated, setLastUpdated } = useUserList();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<FilterState>("all");

  const filteredUsers = useMemo(() => filterUsers(users, filter, search), [users, filter, search]);

  const approveAction = useCallback(async (id: string) => {
    try {
      await approveUser(id);
      removeUser(id);
      showMessage("User approved and notified.", "success");
      setLastUpdated(new Date());
    } catch (e: any) {
      showMessage(e?.message ?? "Error approving user.", "error");
    }
  }, [removeUser, showMessage, setLastUpdated]);

  const declineAction = useCallback(async (id: string) => {
    if (!confirm("Are you sure you want to decline this user?")) return;
    try {
      await declineUser(id);
      removeUser(id);
      showMessage("User declined and notified.", "success");
      setLastUpdated(new Date());
    } catch (e: any) {
      showMessage(e?.message ?? "Error declining user.", "error");
    }
  }, [removeUser, showMessage, setLastUpdated]);

  const approve = (id: string) => withWorking(approveAction, id);
  const decline = (id: string) => withWorking(declineAction, id);

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
