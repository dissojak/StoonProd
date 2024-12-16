"use client"; // Ensure this is a client-side component

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  // State to track the active nav link
  const [activeLink, setActiveLink] = useState("about");

  const handleNavClick = (link) => {
    setActiveLink(link); // Update active link when a link is clicked
  };

  return (
    <>
      {/* <img className="hero"/> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link href="/" className="navbar-brand">
          <img
            src="./assets/images/logostoonprod_rec_white.png"
            alt="Logo"
            className="logo"
          />
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/services" className="nav-link">
              Service
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/portfolio" className="nav-link">
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
        <button href="/resume" className="btn btn-primary ml-lg-3">
          Resume
        </button>
      </nav>
    </>
  );
};

export default Navbar;
