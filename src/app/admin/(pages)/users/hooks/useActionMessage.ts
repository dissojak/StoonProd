"use client";
import { useCallback, useRef, useState } from "react";

interface ActionMessage { text: string; type: "success" | "error" }

export function useActionMessage() {
  const [actionMessage, setActionMessage] = useState<ActionMessage | null>(null);
  const dismissTimer = useRef<NodeJS.Timeout | null>(null);

  const showMessage = useCallback((text: string, type: ActionMessage["type"]) => {
    setActionMessage({ text, type });
    if (dismissTimer.current) clearTimeout(dismissTimer.current);
    dismissTimer.current = setTimeout(() => setActionMessage(null), 4000);
  }, []);

  return { actionMessage, showMessage };
}
