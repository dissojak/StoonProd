"use client";
import React from "react";
import Image from "next/image";
import { FigmaItem } from "../types";

interface FigmaThumbnailGridProps {
  items: FigmaItem[];
  onSelect: (item: FigmaItem) => void;
}

export const FigmaThumbnailGrid: React.FC<FigmaThumbnailGridProps> = ({ items, onSelect }) => {
  return (
    <div className="grid gap-6 sm:gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {items.map((item) => (
        <button
          key={item._id || item.link}
            onClick={() => onSelect(item)}
          className="group relative rounded-xl overflow-hidden bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-green-500 ring-offset-2 ring-offset-black"
        >
          <div className="aspect-video w-full relative">
            <Image
              src={item.image || "/assets/images/contentCreation.svg"}
              alt={item.title}
              fill
              sizes="(max-width:768px) 50vw, (max-width:1200px) 25vw, 20vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="absolute bottom-0 left-0 right-0 p-2 text-xs sm:text-sm font-medium bg-gradient-to-t from-black/80 to-transparent text-white text-left">
              {item.title}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
};
