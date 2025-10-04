import React from "react";
import Image from "next/image";
import { PortfolioItem } from "../types/types";

interface PortfolioCardProps {
  item: PortfolioItem;
  priority?: boolean;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, priority }) => (
  <div className="bg-zinc-900/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col hover:scale-105 hover:shadow-yellow-400/30 transition-all duration-300 border border-zinc-800 group">
    <div className="relative w-full h-64 overflow-hidden">
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
        sizes="(max-width: 768px) 100vw, 33vw"
        priority={priority}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      {item.category && (
        <span className="absolute top-3 left-3 bg-myYellow text-black text-xs font-semibold px-3 py-1 rounded-full shadow">
          {item.category}
        </span>
      )}
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <h2 className="text-2xl font-bold mb-2 text-myYellow drop-shadow-sm group-hover:text-white transition-colors duration-200">
        {item.title}
      </h2>
      <p className="text-base text-zinc-300 flex-1 mb-4">{item.description}</p>
      <button
        className="mt-auto inline-block bg-myYellow text-black rounded-2xl px-5 py-2 font-semibold shadow hover:bg-myYellowHover hover:text-white transition-colors duration-200"
        disabled
      >
        View Project
      </button>
    </div>
  </div>
);

export default PortfolioCard;
