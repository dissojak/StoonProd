import React from "react";
import PortfolioCard from "./PortfolioCard";
import { PortfolioItem } from "../types/types";

interface PortfolioGridProps {
  items: PortfolioItem[];
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ items }) => (
  <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
    {items.map((item, idx) => (
      <PortfolioCard key={item.title + idx} item={item} priority={idx === 0} />
    ))}
  </div>
);

export default PortfolioGrid;
