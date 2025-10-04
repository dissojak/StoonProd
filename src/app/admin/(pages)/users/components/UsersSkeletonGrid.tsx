"use client";
import React from "react";

export function UsersSkeletonGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="rounded-xl bg-zinc-900/70 border border-zinc-800 p-5 animate-pulse space-y-4">
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
  );
}
