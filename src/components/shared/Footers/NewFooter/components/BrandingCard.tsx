"use client";
import React from "react";
import Logo from "@/components/shared/Logo/Logo";
import SocialIconLink from "./SocialIconLink";
import { socialLinks } from "../data/socialLinks";

const BrandingCard: React.FC = () => {
  return (
    <div className="col-span-full xl:col-span-3 relative bg-gradient-to-tr from-teal-500 to-teal-700 rounded-2xl gap-12 p-6 xl:w-72 h-96 flex flex-col justify-center items-center">
      <div className="flex justify-center lg:justify-start">
        <Logo />
      </div>
      <p className="text-center text-gray-200">
        Building trust with clients worldwide. Have a question or need assistance? <br />
        Contact us – we&apos;re here to support your creative and business needs.
      </p>
      <div className="flex space-x-4 sm:justify-center">
        {socialLinks.map(link => (
          <SocialIconLink key={link.label} {...link} />
        ))}
      </div>
    </div>
  );
};

export default BrandingCard;
