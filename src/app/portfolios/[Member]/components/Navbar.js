"use client";

import { usePathname, useParams } from "next/navigation";
// import '../app/css/globals.css';
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname(); // Get the current path
  const params = useParams();
  const memberSlug = params.Member; // Get the member slug from URL
  
  // Helper function to check if a specific route is active
  const isActive = (route) => {
    const fullPath = `/portfolios/${memberSlug}/${route}`;
    return pathname === fullPath;
  };
  
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link
            href={`/portfolios/${memberSlug}/about`}
            className={`navbar-link ${isActive("about") ? "active" : ""}`}
            data-nav-link
          >
            About
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            href={`/portfolios/${memberSlug}/resume`}
            className={`navbar-link ${isActive("resume") ? "active" : ""}`}
            data-nav-link
          >
            Resume
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            href={`/portfolios/${memberSlug}/portfolio`}
            className={`navbar-link ${isActive("portfolio") ? "active" : ""}`}
            data-nav-link
          >
            Portfolio
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            href={`/portfolios/${memberSlug}/blog`}
            className={`navbar-link ${isActive("blog") ? "active" : ""}`}
            data-nav-link
          >
            Blog
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            href={`/portfolios/${memberSlug}/contact`}
            className={`navbar-link ${isActive("contact") ? "active" : ""}`}
            data-nav-link
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
