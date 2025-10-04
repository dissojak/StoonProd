"use client";
import React from "react";

// Simple site-wide footer used across multiple pages.
// If you later consolidate with the more elaborate UI/Footers versions,
// you can expand this or rename to SimpleFooter.
const Footer: React.FC = () => (
  <footer className="border-t dark:bg-gray-900">
    <div className="container flex items-center justify-between px-6 py-8 mx-auto">
      <p className="text-gray-500 dark:text-teal-600">
        © 2020-2025 All Rights Reserved By Stoon Production.
      </p>
      <p className="font-medium text-gray-700 dark:text-teal-600">Terms of Service</p>
    </div>
  </footer>
);

export default Footer;
