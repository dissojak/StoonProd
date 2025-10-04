"use client";
import React from "react";
import { FilterState } from "../types/types";

interface UsersHeaderProps {
  search: string;
  setSearch: (v: string) => void;
  filter: FilterState;
  setFilter: (f: FilterState) => void;
  onRefresh: () => void;
  isLoading: boolean;
}

export function UsersHeader({ search, setSearch, filter, setFilter, onRefresh, isLoading }: UsersHeaderProps) {
  return (
    <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">User Approval</h1>
        <p className="text-sm text-zinc-400 mt-1">Review pending accounts. Approve to elevate. Decline to remove.</p>
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
            <button onClick={() => setSearch("")} className="text-xs text-zinc-400 hover:text-zinc-200">Clear</button>
          )}
        </div>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value as FilterState)}
          className="bg-zinc-800/60 border border-zinc-700 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-teal-500"
        >
          <option value="all">All Users</option>
          <option value="pending">Pending Only</option>
          <option value="approved">Approved Only</option>
        </select>
        <button
          onClick={onRefresh}
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
  );
}
