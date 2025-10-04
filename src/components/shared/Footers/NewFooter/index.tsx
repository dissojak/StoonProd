"use client";
import React from "react";
import BrandingCard from "./components/BrandingCard";
import ContactInfo from "./components/ContactInfo";
import QuickLinks from "./components/QuickLinks";
import NewsletterForm from "./components/NewsletterForm";
import BottomBar from "./components/BottomBar";
import { primaryQuickLinks, secondaryQuickLinks } from "./data/footerLinks";

// Main NewFooter composition component
const NewFooter: React.FC = () => {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-14 grid grid-cols-12 gap-x-5 gap-y-8">
          <BrandingCard />
          <ContactInfo />
          <QuickLinks primary={primaryQuickLinks} secondary={secondaryQuickLinks} />
          <NewsletterForm />
        </div>
      </div>
      <BottomBar />
    </footer>
  );
};

export default NewFooter;
