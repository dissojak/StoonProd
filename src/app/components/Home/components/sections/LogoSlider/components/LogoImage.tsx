import Image from "next/image";
import React from "react";
import { Logo } from "../types";

type LogoImageProps = {
  logo: Logo;
  index: number;
};

export const LogoImage: React.FC<LogoImageProps> = ({ logo, index }) => {
  const invertClass = logo.invert ? "invert dark:invert-0" : "dark:invert";
  const wideClass = logo.wide ? "w-24 sm:w-32 object-contain" : "";
  const altText = `${logo.src.split(".")[0]} Logo`;

  return (
    <Image
      key={`logo-${index}`}
      src={`/assets/images/logos/${logo.src}`}
      width={80}
      height={32}
      className={`h-6 sm:h-8 ${invertClass} ${wideClass}`}
      alt={altText}
    />
  );
};
