"use client";

import React, { useEffect, useState } from "react";
import { FigmaThumbnailGrid } from "./components/FigmaThumbnailGrid";
import { FigmaModalViewer } from "./components/FigmaModalViewer";
import { useFigmaSelection } from "./hooks/useFigmaSelection";
import { prepareFigmaItems } from "./utils/prepareItems";
import { FigmaItem } from "./types";

const WebDesign: React.FC = () => {
  const [figmaItems, setFigmaItems] = useState<FigmaItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { active, open, close } = useFigmaSelection();

  useEffect(() => {
    let cancelled = false;
    fetch("/api/figma")
      .then((res) => res.json())
      .then((data: FigmaItem[]) => {
        if (cancelled) return;
        setFigmaItems(prepareFigmaItems(data));
        setLoading(false);
      })
      .catch(() => !cancelled && setLoading(false));
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white py-32 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Web Design Showcase</h1>
          <p className="text-zinc-400 text-sm sm:text-base max-w-2xl">
            Explore selected Figma designs. Click any thumbnail to open an interactive preview.
          </p>
        </header>
        {loading ? (
          <div className="py-24 text-center text-zinc-400">Loading Figma items...</div>
        ) : figmaItems.length === 0 ? (
          <div className="text-center text-zinc-400 py-24 text-lg">No Figma works found yet.</div>
        ) : (
          <FigmaThumbnailGrid items={figmaItems} onSelect={open} />
        )}
      </div>
      {active && <FigmaModalViewer item={active} onClose={close} />}
    </section>
  );
};

export default WebDesign;
