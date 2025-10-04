"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useRef, Fragment } from "react";
import Image from "next/image";

type NavItem = { name: string; link: string } | string;

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Close menu on route change
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (link: string) => pathname === link;
  const toggleMenu = () => setIsMenuOpen((s) => !s);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const items: NavItem[] = [
    { name: "Home", link: "/" },
    "About",
    { name: "Tariffs", link: "/serviceandtariffs" },
    "Contact",
  ];

  const toHref = (item: NavItem) =>
    typeof item === "string" ? `/${item.toLowerCase().replace(/\s+/g, "")}` : item.link;

  return (
    <Fragment>
      <nav className="flex items-center justify-between px-4 py-2 xs:px-6 xs:py-4 lg:px-24 lg:py-7.5 text-white">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/assets/images/stoonprod_logo_white_version.png"
            alt="Logo"
            className="relative lg:h-16 lg:mt-auto xs:h-12"
            width={60}
            height={100}
          />
        </Link>

        <button onClick={toggleMenu} className="lg:hidden text-white focus:outline-none relative">
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

        <ul className="lg:flex space-x-4 xs:hidden lg:space-y-0">
          {items.map((item, idx) => (
            <li key={idx} className="list-none inline-block lg:px-5 lg:py-2.5 xs:px-2 xs:py-2">
              <Link
                href={toHref(item)}
                className={`relative py-1.5 hover:text-myRed after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-myRed after:transition-all after:duration-300 hover:after:w-full ${
                  isActive(toHref(item)) ? "text-myRed font-bold" : ""
                }`}
              >
                {typeof item === "string" ? item : item.name}
              </Link>
            </li>
          ))}
        </ul>

        {isMenuOpen && (
          <div
            ref={sidebarRef}
            className={`lg:hidden fixed top-6 right-0 w-48 h-fit bg-gray-800 text-white transform ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform z-50`}
          >
            <div className="flex justify-end px-6 pt-4">
              <button onClick={toggleMenu} className="text-white text-5xl">
                &times;
              </button>
            </div>
            <div className="flex flex-col space-y-4 p-4">
              {items.map((item, idx) => (
                <Link
                  key={idx}
                  href={toHref(item)}
                  className={`py-2 px-4 block hover:bg-myRed ${isActive(toHref(item)) ? "bg-myRed" : ""}`}
                >
                  {typeof item === "string" ? item : item.name}
                </Link>
              ))}
            </div>
          </div>
        )}

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
      <span className="absolute lg:top-[20vh] xs:top-[15vh] right-0 z-60" />
    </Fragment>
  );
};

export default Navbar;
