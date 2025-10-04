import React from "react";
import Link from "next/link";

export interface QuickLinksProps {
  primary: { label: string; href: string }[];
  secondary: { label: string; href: string }[];
}

const QuickLinks: React.FC<QuickLinksProps> = ({ primary, secondary }) => (
  <div className="block xl:py-16 col-span-full min-[500px]:col-span-6 md:col-span-4 xl:col-span-3">
    <h4 className="text-lg text-emerald-950 dark:text-white font-bold mb-9 text-center xl:text-left">
      Quick Links
    </h4>
    <div className="flex gap-6 xl:gap-12 max-xl:justify-center">
      <ul className="text-gray-600 transition-all duration-500 grid gap-6">
        {primary.map(link => (
          <li key={link.label}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <ul className="text-gray-600 transition-all duration-500 grid gap-6">
        {secondary.map(link => (
          <li key={link.label}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default QuickLinks;
