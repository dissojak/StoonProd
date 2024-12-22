"use client"; // Ensure this is a client-side component

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, Fragment } from "react";

const Navbar = () => {
  const pathname = usePathname(); // Get the current path
  const [activeLink, setActiveLink] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false); // State for dark mode
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const isActive = (link) => pathname === link; // Check if the current route exactly matches the link

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Toggle dark mode
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle mobile menu
    console.log("Toggle Menu");
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
      <nav className="flex items-center justify-between px-4 py-2 xs:px-6 xs:py-4 lg:px-24 lg:py-7.5 text-white">
        <Link href="/" className="flex-shrink-0">
          <img
            src="./assets/images/logostoonprod_rec_white.png"
            alt="Logo"
            className="relative lg:h-16 lg:mt-auto xs:h-12"
          />
        </Link>

        <div className="flex space-x-4">
          <Link
            href="/resume"
            className="relative bg-myYellow text-black lg:px-6 xs:px-3 py-2 rounded-full hover:bg-yellow-300 dark:bg-yellow-500 dark:text-white"
          >
            Resume
          </Link>
          <button
            onClick={toggleDarkMode}
            className="relative bg-myRed text-white lg:px-6 xs:px-3 py-2 rounded-full hover:bg-red-300 dark:bg-red-700 dark:text-gray-200"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
        {/* Hamburger Menu Icon (Only visible on xs screens) */}
        <button
          onClick={() => {
            toggleMenu(); // Call the toggleMenu function
            console.log("Toggle Menu"); // Log a message to the console
          }}
          className="lg:hidden text-white focus:outline-none relative "
        >
          <svg
            className="h-8 w-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Full menu for lg screens, collapsible for xs screens */}
        <ul
          className={`lg:flex space-x-4 xs:${
            isMenuOpen ? "block" : "hidden"
          } xs:space-y-2 lg:space-y-0`}
        >
          {[
            "Home",
            "About",
            "Service and Tariffs",
            "Clients",
            "Blog",
            "Contact",
          ].map((item, idx) => (
            <li
              key={idx}
              className="list-none inline-block lg:px-5 lg:py-2.5 xs:px-2 xs:py-2"
            >
              <Link
                href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                className={`relative py-1.5 hover:text-myRed after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-myRed after:transition-all after:duration-300 hover:after:w-full ${
                  isActive(`/${item.toLowerCase()}`)
                    ? "text-myRed font-bold"
                    : ""
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>


      </nav>
    </Fragment>
  );
};

export default Navbar;
