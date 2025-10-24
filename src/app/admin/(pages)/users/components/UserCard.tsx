"use client";
import React from "react";
import { AdminUser } from "../types/types";

interface UserCardProps {
  user: AdminUser;
  working: boolean;
  onApprove: () => void;
  onDecline: () => void;
}

export function UserCard({ user, working, onApprove, onDecline }: Readonly<UserCardProps>) {
  const pending = !user.isAdmin;
  return (
    <div className="group relative rounded-xl bg-zinc-900/70 border border-zinc-800 hover:border-zinc-700 transition-colors p-5 flex flex-col">
      <div className="flex items-start justify-between">
        <h2 className="text-lg font-semibold tracking-tight group-hover:text-teal-300 transition-colors">{user.username}</h2>
        <span className={`text-[11px] uppercase tracking-wide px-2 py-1 rounded-md font-semibold ${pending ? "bg-amber-600/20 text-amber-300 border border-amber-600/40" : "bg-teal-600/20 text-teal-300 border border-teal-600/40"}`}>{pending ? "Pending" : "Approved"}</span>
      </div>
      <p className="mt-1 text-sm text-zinc-400 break-all">{user.email}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="text-xs px-2 py-1 rounded bg-zinc-800/80 border border-zinc-700 text-zinc-300">ID: {user._id.slice(0,8)}…</span>
        <span className="text-xs px-2 py-1 rounded bg-zinc-800/80 border border-zinc-700 text-zinc-300">Role: {user.isAdmin ? "Admin" : "User"}</span>
      </div>
      <div className="mt-5 flex gap-3">
        <button
          disabled={!pending || working}
          onClick={onApprove}
          className={`flex-1 inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${pending ? "bg-teal-600 hover:bg-teal-500 disabled:bg-zinc-700/60" : "bg-zinc-800"} disabled:cursor-not-allowed transition-colors`}
        >
          {working && <span className="h-3 w-3 rounded-full border-2 border-white border-t-transparent animate-spin" />}
          Approve
        </button>
        <button
          disabled={!pending || working}
          onClick={onDecline}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-medium bg-red-600 hover:bg-red-500 disabled:bg-zinc-700/60 disabled:cursor-not-allowed transition-colors"
        >
          {working && <span className="h-3 w-3 rounded-full border-2 border-white border-t-transparent animate-spin" />}
          Decline
        </button>
      </div>
    </div>
  );
}
