"use client";

import { useEffect, useState, useCallback, useMemo } from "react";

interface User {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  status?: string; // may be absent depending on model
}

type FetchState = "idle" | "loading" | "error" | "success";

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [fetchState, setFetchState] = useState<FetchState>("idle");
  const [actionMsg, setActionMsg] = useState("");
  const [actionType, setActionType] = useState<"success" | "error" | "">("");
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "pending" | "approved">("all");
  const [workingIds, setWorkingIds] = useState<Set<string>>(new Set());

  const showMessage = (msg: string, type: "success" | "error") => {
    setActionMsg(msg);
    setActionType(type);
    setTimeout(() => {
      setActionMsg("");
      setActionType("");
    }, 4000);
  };

  const fetchUsers = useCallback(async () => {
    setFetchState("loading");
    try {
      const res = await fetch("/api/admin/users");
      if (!res.ok) throw new Error("Failed");
      const data = await res.json();
      setUsers(data.users || []);
      setFetchState("success");
    } catch {
      setFetchState("error");
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const filteredUsers = useMemo(() => {
    return users
      .filter((u) => {
        if (filter === "pending") return !u.isAdmin;
        if (filter === "approved") return u.isAdmin;
        return true;
      })
      .filter((u) => {
        if (!search.trim()) return true;
        const q = search.toLowerCase();
        return u.username.toLowerCase().includes(q) || u.email.toLowerCase().includes(q);
      });
  }, [users, filter, search]);

  async function handleApprove(id: string) {
    setWorkingIds((prev) => new Set(prev).add(id));
    try {
      const res = await fetch("/api/admin/users/approve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (res.ok) {
        showMessage("User approved and notified.", "success");
        fetchUsers();
      } else {
        showMessage(data.error || "Error approving user.", "error");
      }
    } catch {
      showMessage("Error approving user.", "error");
    } finally {
      setWorkingIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }
  }

  async function handleDecline(id: string) {
    // Optional confirm:
    if (!confirm("Are you sure you want to decline this user?")) return;

    setWorkingIds((prev) => new Set(prev).add(id));
    try {
      const res = await fetch("/api/admin/users/decline", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await res.json();
      if (res.ok) {
        showMessage("User declined and notified.", "success");
        fetchUsers();
      } else {
        showMessage(data.error || "Error declining user.", "error");
      }
    } catch {
      showMessage("Error declining user.", "error");
    } finally {
      setWorkingIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }
  }

  const isLoading = fetchState === "loading";

  return (
    <main className="min-h-screen px-6 py-10 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-7xl">
        <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">User Approval</h1>
            <p className="text-sm text-zinc-400 mt-1">
              Review pending accounts. Approve to elevate. Decline to remove.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex items-center gap-2 bg-zinc-800/60 rounded-lg px-3 py-2 backdrop-blur border border-zinc-700">
              <input
                placeholder="Search username or email"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent outline-none text-sm w-56 placeholder:text-zinc-500"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="text-xs text-zinc-400 hover:text-zinc-200"
                >
                  Clear
                </button>
              )}
            </div>
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as any)}
              className="bg-zinc-800/60 border border-zinc-700 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500"
            >
              <option value="all">All Users</option>
              <option value="pending">Pending Only</option>
              <option value="approved">Approved Only</option>
            </select>
            <button
              onClick={() => fetchUsers()}
              disabled={isLoading}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 disabled:opacity-50 text-sm font-medium transition-colors"
            >
              {isLoading && (
                <span className="inline-block h-3 w-3 rounded-full border-2 border-white border-t-transparent animate-spin" />
              )}
              Refresh
            </button>
          </div>
        </header>

        {actionMsg && (
          <div
            className={`mb-6 rounded-lg border px-4 py-3 text-sm font-medium ${
              actionType === "success"
                ? "bg-teal-600/20 border-teal-600 text-teal-300"
                : "bg-red-600/20 border-red-600 text-red-300"
            }`}
            role="status"
          >
            {actionMsg}
          </div>
        )}

        {/* Loading Skeletons */}
        {isLoading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="rounded-xl bg-zinc-900/70 border border-zinc-800 p-5 animate-pulse space-y-4"
              >
                <div className="h-5 bg-zinc-700/40 rounded w-2/3" />
                <div className="h-4 bg-zinc-700/30 rounded w-1/2" />
                <div className="flex gap-2">
                  <div className="h-6 bg-zinc-700/30 rounded w-16" />
                  <div className="h-6 bg-zinc-700/30 rounded w-20" />
                </div>
                <div className="h-10 bg-zinc-700/30 rounded" />
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {fetchState === "error" && (
          <div className="text-center mt-24">
            <p className="text-red-400 font-medium">Failed to load users.</p>
            <button
              onClick={() => fetchUsers()}
              className="mt-4 px-4 py-2 bg-red-600/60 hover:bg-red-600 rounded text-sm font-medium"
            >
              Retry
            </button>
          </div>
        )}

        {/* Empty State */}
        {fetchState === "success" && filteredUsers.length === 0 && (
          <div className="text-center mt-24">
            <p className="text-zinc-500 font-medium">
              {users.length === 0 ? "No users found." : "No users match your filter/search."}
            </p>
          </div>
        )}

        {/* Cards */}
        {fetchState === "success" && filteredUsers.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredUsers.map((user) => {
              const working = workingIds.has(user._id);
              const pending = !user.isAdmin;
              return (
                <div
                  key={user._id}
                  className="group relative rounded-xl bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 transition-colors p-5 flex flex-col"
                >
                  <div className="flex items-start justify-between">
                    <h2 className="text-lg font-semibold tracking-tight group-hover:text-teal-300 transition-colors">
                      {user.username}
                    </h2>
                    <span
                      className={`text-[11px] uppercase tracking-wide px-2 py-1 rounded-md font-semibold ${
                        pending
                          ? "bg-amber-600/20 text-amber-300 border border-amber-600/40"
                          : "bg-teal-600/20 text-teal-300 border border-teal-600/40"
                      }`}
                    >
                      {pending ? "Pending" : "Approved"}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-zinc-400 break-all">{user.email}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="text-xs px-2 py-1 rounded bg-zinc-800/80 border border-zinc-700 text-zinc-300">
                      ID: {user._id.slice(0, 8)}…
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-zinc-800/80 border border-zinc-700 text-zinc-300">
                      Role: {user.isAdmin ? "Admin" : "User"}
                    </span>
                  </div>

                  <div className="mt-5 flex gap-3">
                    <button
                      disabled={!pending || working}
                      onClick={() => handleApprove(user._id)}
                      className={`flex-1 inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium
                        ${
                          pending
                            ? "bg-teal-600 hover:bg-teal-500 disabled:bg-zinc-700/60"
                            : "bg-zinc-800"
                        }
                        disabled:cursor-not-allowed transition-colors`}
                    >
                      {working && (
                        <span className="h-3 w-3 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      )}
                      Approve
                    </button>
                    <button
                      disabled={!pending || working}
                      onClick={() => handleDecline(user._id)}
                      className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium bg-red-600 hover:bg-red-500 disabled:bg-zinc-700/60 disabled:cursor-not-allowed transition-colors"
                    >
                      {working && (
                        <span className="h-3 w-3 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      )}
                      Decline
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <footer className="mt-16 text-center text-xs text-zinc-600">
          Last updated: {new Date().toLocaleTimeString()}
        </footer>
      </div>
    </main>
  );
}
