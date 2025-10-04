import React from "react";
import Link from "next/link";

export interface SocialIconLinkProps {
  href: string;
  label: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const SocialIconLink: React.FC<SocialIconLinkProps> = ({ href, label, Icon }) => {
  return (
    <Link
      href={href}
      aria-label={label}
      className="w-9 h-9 rounded-full bg-white flex justify-center items-center hover:shadow-md transition-shadow"
    >
      <Icon className="w-[1.25rem] h-[1.125rem]" fill="none" xmlns="http://www.w3.org/2000/svg" />
    </Link>
  );
};

export default SocialIconLink;
