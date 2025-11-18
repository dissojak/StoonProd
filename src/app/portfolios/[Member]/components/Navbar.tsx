"use client";
import React from "react";
import { usePathname, useParams } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const params = useParams();
  const memberSlug = (params as any)?.Member;

  const isActive = (route: string) => {
    const fullPath = `/portfolios/${memberSlug}/${route}`;
    return pathname === fullPath;
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link href={`/portfolios/${memberSlug}/about`} className={`navbar-link ${isActive("about") ? "active" : ""}`} data-nav-link>
            About
          </Link>
        </li>

        <li className="navbar-item">
          <Link href={`/portfolios/${memberSlug}/resume`} className={`navbar-link ${isActive("resume") ? "active" : ""}`} data-nav-link>
            Resume
          </Link>
        </li>

        <li className="navbar-item">
          <Link href={`/portfolios/${memberSlug}/portfolio`} className={`navbar-link ${isActive("portfolio") ? "active" : ""}`} data-nav-link>
            Portfolio
          </Link>
        </li>

        <li className="navbar-item">
          <Link href={`/portfolios/${memberSlug}/blog`} className={`navbar-link ${isActive("blog") ? "active" : ""}`} data-nav-link>
            Blog
          </Link>
        </li>

        <li className="navbar-item">
          <Link href={`/portfolios/${memberSlug}/contact`} className={`navbar-link ${isActive("contact") ? "active" : ""}`} data-nav-link>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
