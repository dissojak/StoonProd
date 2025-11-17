"use client";
import React from "react";
import Footer from "@/components/shared/Footers/Footer";
import TeamMembersPortfoilos from "@/components/UI/TeamMembers/TeamMembersPortfoilos";

const Portfolios: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-white dark:bg-gray-800">
    <div className="flex-1 flex items-center">
      <TeamMembersPortfoilos />
    </div>
    <Footer />
  </div>
);

export default Portfolios;