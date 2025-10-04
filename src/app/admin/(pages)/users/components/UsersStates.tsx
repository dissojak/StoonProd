"use client";
import React from "react";

export const UsersErrorState = ({ onRetry }: { onRetry: () => void }) => (
  <div className="text-center mt-24">
    <p className="text-red-400 font-medium">Failed to load users.</p>
    <button
      onClick={onRetry}
      className="mt-4 px-4 py-2 bg-red-600/60 hover:bg-red-600 rounded text-sm font-medium"
    >
      Retry
    </button>
  </div>
);

export const UsersEmptyState = ({ noUsers }: { noUsers: boolean }) => (
  <div className="text-center mt-24">
    <p className="text-zinc-500 font-medium">
      {noUsers ? "No users found." : "No users match your filter/search."}
    </p>
  </div>
);
