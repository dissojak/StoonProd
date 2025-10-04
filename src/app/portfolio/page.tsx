import React from "react";
import PortfolioIntro from "./components/PortfolioIntro";
import PortfolioGrid from "./components/PortfolioGrid";
import { portfolioItems } from "./data/items";

export default function PortfolioPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white py-24 px-4 sm:px-8">
      <PortfolioIntro />
      <div className="max-w-6xl mx-auto">
        <PortfolioGrid items={portfolioItems} />
      </div>
    </section>
  );
}

