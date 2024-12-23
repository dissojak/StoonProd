"use client"; // Ensure this is a client-side component

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, Fragment } from "react";
import DarkModeSwitcher from "../UI/DarkModeSwitcher";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname(); // Get the current path
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const isActive = (link) => pathname === link; // Check if the current route exactly matches the link

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle mobile menu
  };

  return (
    <Fragment>
      <nav className="flex items-center justify-between px-4 py-2 xs:px-6 xs:py-4 lg:px-24 lg:py-7.5 text-white">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/assets/images/logostoonprod_rec_white.png"
            alt="Logo"
            className="relative lg:h-16 lg:mt-auto xs:h-12"
            layout="intrinsic"
            width={60}
            height={100}
          />
        </Link>

        {/* Hamburger Menu Icon (Only visible on xs screens) */}
        <button
          onClick={toggleMenu} // Call the toggleMenu function
          className="lg:hidden text-white focus:outline-none relative"
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

        {/* Full menu for lg screens */}
        <ul
          className="lg:flex space-x-4 xs:hidden lg:space-y-0"
        >
          {["Home", "About", "Service and Tariffs", "Clients", "Blog", "Contact"].map((item, idx) => (
            <li key={idx} className="list-none inline-block lg:px-5 lg:py-2.5 xs:px-2 xs:py-2">
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

        {/* Sidebar for small screens (Right side) */}
        <div
          className={`lg:hidden fixed top-0 right-0 w-64 h-full bg-gray-800 text-white transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform z-50`}
        >
          <div className="flex justify-end p-4">
            {/* Close Button (X) */}
            <button
              onClick={toggleMenu} // Close the menu when clicked
              className="text-white text-3xl"
            >
              &times; {/* X symbol */}
            </button>
          </div>
          <div className="flex flex-col space-y-4 p-4">
            {["Home", "About", "Service and Tariffs", "Clients", "Blog", "Contact"].map((item, idx) => (
              <Link
                key={idx}
                href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                className={`py-2 px-4 block hover:bg-myRed ${isActive(`/${item.toLowerCase()}`) ? "bg-myRed" : ""}`}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <span className="absolute lg:top-[20vh] xs:top-[15vh] right-0 z-60">
        <DarkModeSwitcher />
      </span>
    </Fragment>
  );
};

export default Navbar;
