"use client";
import { useUserApproval } from "./hooks/useUserApproval";
import { UsersHeader } from "./components/UsersHeader";
import { ActionMessage } from "./components/ActionMessage";
import { UsersSkeletonGrid } from "./components/UsersSkeletonGrid";
import { UsersErrorState, UsersEmptyState } from "./components/UsersStates";
import { UsersGrid } from "./components/UsersGrid";

export default function AdminUsersPage() {
  const {
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
  } = useUserApproval();

  const isLoading = fetchState === "loading";

  return (
    <main className="min-h-screen px-6 py-10 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-7xl">
        <UsersHeader
          search={search}
          setSearch={setSearch}
          filter={filter}
          setFilter={setFilter}
          onRefresh={loadUsers}
          isLoading={isLoading}
        />

        {actionMessage && <ActionMessage message={actionMessage.text} type={actionMessage.type} />}

        {isLoading && <UsersSkeletonGrid />}
        {fetchState === "error" && <UsersErrorState onRetry={loadUsers} />}
        {fetchState === "success" && filteredUsers.length === 0 && (
          <UsersEmptyState noUsers={filteredUsers.length === 0} />
        )}
        {fetchState === "success" && filteredUsers.length > 0 && (
          <UsersGrid users={filteredUsers} workingIds={workingIds} onApprove={approve} onDecline={decline} />
        )}

        <footer className="mt-16 text-center text-xs text-zinc-600">
          Last updated: {lastUpdated ? lastUpdated.toLocaleTimeString() : "--:--:--"}
        </footer>
      </div>
    </main>
  );
}
