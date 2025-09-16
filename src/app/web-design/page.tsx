"use client";

import React, { useEffect, useState } from "react";
import FigmaPreview from "@/app/components/Figma/FigmaPreview";

type FigmaItem = { _id?: string; title: string; link: string; order?: number };

const WebDesign: React.FC = () => {
  const [figmaItems, setFigmaItems] = useState<FigmaItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/figma")
      .then((res) => res.json())
      .then((data: FigmaItem[]) => {
        setFigmaItems(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white py-32 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {loading ? (
          <div>Loading Figma items...</div>
        ) : figmaItems.length === 0 ? (
          <div className="text-center text-zinc-400 py-12 text-lg">No Figma works found yet.</div>
        ) : (
          <FigmaPreview items={figmaItems} />
        )}
      </div>
    </section>
  );
};

export default WebDesign;
