"use client";
import { useCallback, useState } from "react";

export function useWorkingIds() {
  const [workingIds, setWorkingIds] = useState<Set<string>>(new Set());

  const withWorking = useCallback((asyncFn: (id: string) => Promise<void>, id: string) => {
    setWorkingIds(prev => {
      const next = new Set(prev);
      next.add(id);
      return next;
    });
    asyncFn(id).finally(() =>
      setWorkingIds(prev => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      })
    );
  }, []);

  return { workingIds, withWorking };
}
