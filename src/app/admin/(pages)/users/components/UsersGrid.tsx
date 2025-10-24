"use client";
import React from "react";
import { AdminUser } from "../types/types";
import { UserCard } from "./UserCard";

interface UsersGridProps {
  users: AdminUser[];
  workingIds: Set<string>;
  onApprove: (id: string) => void;
  onDecline: (id: string) => void;
}

export function UsersGrid({ users, workingIds, onApprove, onDecline }: Readonly<UsersGridProps>) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {users.map(user => (
        <UserCard
          key={user._id}
          user={user}
          working={workingIds.has(user._id)}
          onApprove={() => onApprove(user._id)}
          onDecline={() => onDecline(user._id)}
        />
      ))}
    </div>
  );
}
