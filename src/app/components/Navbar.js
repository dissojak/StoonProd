"use client"; // Ensure this is a client-side component

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("about");

  const handleNavClick = (link) => {
    setActiveLink(link);
  };

  return (
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
          <Link href="/" className="nav-link" onClick={() => handleNavClick('home')}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about" className="nav-link" onClick={() => handleNavClick('about')}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/services" className="nav-link" onClick={() => handleNavClick('services')}>
            Service and Tariffs
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/ourClients" className="nav-link" onClick={() => handleNavClick('clients')}>
            Clients
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/blog" className="nav-link" onClick={() => handleNavClick('blog')}>
            Blog
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact" className="nav-link" onClick={() => handleNavClick('contact')}>
            Contact
          </Link>
        </li>
      </ul>
      <button href="/resume" className="btn btn-primary ml-lg-3">
        Resume
      </button>
    </nav>
  );
};

export default Navbar;
