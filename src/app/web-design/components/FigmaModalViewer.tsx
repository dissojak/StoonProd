"use client";
import React, { useEffect, useState } from "react";
import { FigmaItem } from "../types";
import { X } from "lucide-react"; // If not installed, replace with simple button text

interface FigmaModalViewerProps {
  item: FigmaItem;
  onClose: () => void;
}

export const FigmaModalViewer: React.FC<FigmaModalViewerProps> = ({ item, onClose }) => {
  const [ready, setReady] = useState(false);

  // We can delay mounting iframe to next tick for smoother transition
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-100 animate-in fade-in"
        onClick={onClose}
      />
      <div className="relative w-full max-w-6xl h-[80vh] flex flex-col bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-zinc-700 animate-in zoom-in">
        <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-700 bg-zinc-800/60">
          <h2 className="text-sm sm:text-base font-medium truncate pr-4">{item.title}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            aria-label="Close preview"
          >
            {/* If lucide-react not available, fallback */}
            {typeof X === "function" ? <X className="w-5 h-5" /> : <span className="text-sm">✕</span>}
          </button>
        </div>
        <div className="flex-1 relative">
          {!ready && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-zinc-300 text-sm">
              <div className="w-52 h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-green-500 animate-pulse" />
              </div>
              Loading design...
            </div>
          )}
          {ready && (
            <iframe
              className="w-full h-full"
              src={item.link}
              allowFullScreen
              loading="lazy"
              title={item.title}
              style={{ border: "0" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
