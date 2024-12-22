"use client"; // Ensure this is a client-side component

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, Fragment } from "react";

const Navbar = () => {
  const pathname = usePathname(); // Get the current path
  const [activeLink, setActiveLink] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const isActive = (link) => pathname === link; // Check if the current route exactly matches the link

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Toggle dark mode
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark"); // Apply dark mode to the document
    } else {
      document.documentElement.classList.remove("dark"); // Remove dark mode
    }
  }, [isDarkMode]);

  return (
    <Fragment>
      <nav className="flex items-center justify-between 
      lg:px-24 lg:py-7.5 text-white 
      xs:px-4 xs:py-2">
        <Link href="/" className="flex-shrink-0">
          <img
            src="./assets/images/logostoonprod_rec_white.png"
            alt="Logo"
            className="relative lg:h-16 lg:mt-auto xs:h-10 xs:-mt-10"
          />
        </Link>
        <ul className="flex space-x-4">
          <li className="list-none inline-block px-5 py-2.5">
            <Link
              href="/"
              className={`relative py-1.5 hover:text-myRed after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-myRed after:transition-all after:duration-300 hover:after:w-full ${
                isActive("/") ? "text-myRed font-bold" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li className="list-none inline-block px-5 py-2.5">
            <Link
              href="/about"
              className={`relative py-1.5 hover:text-myRed after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-myRed after:transition-all after:duration-300 hover:after:w-full ${
                isActive("/about") ? "text-myRed font-bold" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li className="list-none inline-block px-5 py-2.5">
            <Link
              href="/services"
              className={`relative py-1.5 hover:text-myRed after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-myRed after:transition-all after:duration-300 hover:after:w-full ${
                isActive("/services") ? "text-myRed font-bold" : ""
              }`}
            >
              Service and Tariffs
            </Link>
          </li>
          <li className="list-none inline-block px-5 py-2.5">
            <Link
              href="/ourClients"
              className={`relative py-1.5 hover:text-myRed after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-myRed after:transition-all after:duration-300 hover:after:w-full ${
                isActive("/ourClients") ? "text-myRed font-bold" : ""
              }`}
            >
              Clients
            </Link>
          </li>
          <li className="list-none inline-block px-5 py-2.5">
            <Link
              href="/blog"
              className={`relative py-1.5 hover:text-myRed after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-myRed after:transition-all after:duration-300 hover:after:w-full ${
                isActive("/blog") ? "text-myRed font-bold" : ""
              }`}
            >
              Blog
            </Link>
          </li>
          <li className="list-none inline-block px-5 py-2.5">
            <Link
              href="/contact"
              className={`relative py-1.5 hover:text-myRed after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-myRed after:transition-all after:duration-300 hover:after:w-full ${
                isActive("/contact") ? "text-myRed font-bold" : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex space-x-4">
          <Link
            href="/resume"
            className="relative bg-myYellow text-black px-6 py-2 rounded-full hover:bg-yellow-300 dark:bg-yellow-500 dark:text-white"
          >
            Resume
          </Link>
          <button
            onClick={toggleDarkMode}
            className="relative bg-myRed text-white px-6 py-2 rounded-full hover:bg-red-300 dark:bg-red-700 dark:text-gray-200"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
