"use client"; // Ensure this is a client-side component

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useRef, Fragment } from "react";
import DarkModeSwitcher from "../../UI/DarkModeSwitcher";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname(); // Get the current path
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle
  const sidebarRef = useRef(null); // Ref for sidebar

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const isActive = (link) => pathname === link; // Check if the current route exactly matches the link

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle mobile menu
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsMenuOpen(false); // Close the sidebar if clicked outside
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside); // Add event listener when the menu is open
    } else {
      document.removeEventListener("mousedown", handleClickOutside); // Remove event listener when the menu is closed
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Cleanup the event listener
    };
  }, [isMenuOpen]);

  return (
    <Fragment>
      <nav className="flex items-center justify-between px-4 py-2 xs:px-6 xs:py-4 lg:px-24 lg:py-7.5 text-white">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/assets/images/stoonprod_logo_white_version.png"
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
        <ul className="lg:flex space-x-4 xs:hidden lg:space-y-0">
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

        {/* Sidebar for small screens (Right side) */}
        {isMenuOpen && (
          <div
            ref={sidebarRef} // Ref for sidebar
            className={`lg:hidden fixed top-6 right-0 w-48 h-fit bg-gray-800 text-white transform ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform z-50`}
          >
            <div className="flex justify-end px-6 pt-4">
              {/* Close Button (X) */}
              <button
                onClick={toggleMenu} // Close the menu when clicked
                className="text-white text-5xl"
              >
                &times; {/* X symbol */}
              </button>
            </div>
            <div className="flex flex-col space-y-4 p-4">
              {[
                "Home",
                "About",
                "Service and Tariffs",
                "Clients",
                "Blog",
                "Contact",
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                  className={`py-2 px-4 block hover:bg-myRed ${
                    isActive(`/${item.toLowerCase()}`) ? "bg-myRed" : ""
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Resume Button (Visible only on large screens) */}
        <div className="xs:hidden lg:block">
          <div className="flex space-x-4">
            <Link
              href="/resume"
              className="relative bg-myYellow text-black lg:px-6 xs:px-3 py-2 rounded-full hover:bg-yellow-300 dark:bg-yellow-500 dark:text-white"
            >
              Resume
            </Link>
          </div>
        </div>
      </nav>

      {/* Space for the Dark Mode Switcher */}
      <span className="absolute lg:top-[20vh] xs:top-[15vh] right-0 z-60">
        <DarkModeSwitcher />
      </span>
    </Fragment>
  );
};

export default Navbar;
