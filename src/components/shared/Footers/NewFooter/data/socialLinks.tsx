import React from "react";
import { SocialIconLinkProps } from "../components/SocialIconLink";

// Individual icon components for clarity & potential reuse
export const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 21 21" {...props}>
    <path
      d="M11.8214 9.81691L16.9919 3.93591H15.7667L11.2772 9.0423L7.6914 3.93591H3.55566L8.97803 11.6577L3.55566 17.8248H4.78097L9.522 12.4323L13.3088 17.8248H17.4446L11.8211 9.81691H11.8214ZM10.1432 11.7257L9.59382 10.9568L5.22246 4.83846H7.10445L10.6322 9.77615L11.1816 10.5451L15.7672 16.9633H13.8852L10.1432 11.726V11.7257Z"
      fill="url(#paint0_linear_xicon)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_xicon"
        x1="14.6041"
        y1="1.67072"
        x2="0.399812"
        y2="14.3286"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FACC15" />
        <stop offset="0.993738" stopColor="#FDE047" />
      </linearGradient>
    </defs>
  </svg>
);

export const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  // className after < {...props} Something > = your class wins
  // className before < something {...props} > = props.className wins
  <svg viewBox="0 0 13 12" {...props} className="w-[1rem] h-[1rem]">
    <path
      d="M3.3794 11.4355V3.75116H0.818893V11.4355H3.37967H3.3794ZM2.09968 2.70218C2.9924 2.70218 3.54817 2.11211 3.54817 1.37469C3.53146 0.620473 2.9924 0.046875 2.11666 0.046875C1.24032 0.046875 0.667969 0.620473 0.667969 1.37463C0.667969 2.11204 1.22354 2.70211 2.0829 2.70211H2.09948L2.09968 2.70218ZM4.79668 11.4355H7.35698V7.14468C7.35698 6.91532 7.37369 6.68536 7.44134 6.52154C7.62635 6.06249 8.04764 5.5873 8.75514 5.5873C9.68141 5.5873 10.0522 6.29192 10.0522 7.32503V11.4355H12.6124V7.02953C12.6124 4.66933 11.3494 3.57101 9.66483 3.57101C8.28372 3.57101 7.67715 4.34103 7.34014 4.86549H7.35718V3.75143H4.79681C4.83023 4.47231 4.79661 11.4358 4.79661 11.4358L4.79668 11.4355Z"
      fill="url(#paint0_linear_liicon)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_liicon"
        x1="12.6124"
        y1="0.699364"
        x2="0.926912"
        y2="11.4629"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FACC15" />
        <stop offset="0.993738" stopColor="#FDE047" />
      </linearGradient>
    </defs>
  </svg>
);

export const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="5"
      ry="5"
      stroke="url(#ig_grad_outline)"
      strokeWidth="2"
    />
    <circle cx="12" cy="12" r="5" stroke="url(#ig_grad_outline)" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="url(#ig_grad_fill)" />
    <defs>
      <linearGradient
        id="ig_grad_outline"
        x1="22"
        y1="2"
        x2="2"
        y2="22"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FACC15" />
        <stop offset="1" stopColor="#FDE047" />
      </linearGradient>
      <linearGradient
        id="ig_grad_fill"
        x1="19"
        y1="5"
        x2="16"
        y2="8"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FACC15" />
        <stop offset="1" stopColor="#FDE047" />
      </linearGradient>
    </defs>
  </svg>
);

export const socialLinks: SocialIconLinkProps[] = [
  { href: "/", label: "X", Icon: XIcon },
  { href: "/", label: "LinkedIn", Icon: LinkedInIcon },
  // TODO: Replace href with actual Instagram profile URL
  { href: "/", label: "Instagram", Icon: InstagramIcon },
];
