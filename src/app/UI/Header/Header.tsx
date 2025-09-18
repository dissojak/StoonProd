"use client";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import HeaderLink from "./Navigation/HeaderLink";
import MobileHeaderLink from "./Navigation/MobileHeaderLink";

import { headerData } from "./Navigation/MenuData";
import Logo from "./Logo/Logo";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const hamburgerBtnRef = useRef<HTMLButtonElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const handleScroll = () => setSticky(window.scrollY >= 20);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        navbarOpen
      ) {
        setNavbarOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navbarOpen]);

  useEffect(() => {
    document.body.style.overflow = navbarOpen ? "hidden" : "";
  }, [navbarOpen]);

  // Close on ESC and focus trap within the mobile menu
  useEffect(() => {
    if (!navbarOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setNavbarOpen(false);
        hamburgerBtnRef.current?.focus();
        return;
      }

      if (e.key === "Tab" && mobileMenuRef.current) {
        const focusable = mobileMenuRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };

    document.addEventListener("keydown", onKeyDown);
    // Focus close button on open
    closeBtnRef.current?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [navbarOpen]);

  const onMobileNavClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest("a")) {
      setNavbarOpen(false);
    }
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        sticky
          ? "py-3 bg-black/70 dark:bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:backdrop-blur border-b border-white/10 shadow-lg"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="lg:py-0 py-2">
        <div className="container mx-auto lg:max-w-screen-xl xs:max-w-screen-md flex items-center justify-between px-4">
          <Logo />
          <nav
            className="hidden lg:flex flex-grow items-center gap-8 justify-center"
            aria-label="Primary"
          >
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="tel:+21623039320"
              className="xs:text-xs sm:text-lg font-medium hover:text-myRed text-white focus:outline-none focus:ring-2 focus:ring-myRed/50 rounded"
              aria-label="Call us at +216 23-039-320"
            >
              <Icon
                icon="solar:phone-bold"
                className="text-myRed text-3xl inline-block me-2 align-middle"
              />
              <span className="align-middle">+216 23-039-320</span>
            </Link>
            <button
              ref={hamburgerBtnRef}
              onClick={() => setNavbarOpen((v) => !v)}
              className="block lg:hidden p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/30"
              aria-label="Toggle mobile menu"
              aria-expanded={navbarOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                  navbarOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white mt-1.5 transition-opacity duration-300 ${
                  navbarOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white mt-1.5 transition-transform duration-300 ${
                  navbarOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {navbarOpen && (
          <button
            type="button"
            className="fixed inset-0 w-full h-full bg-black/50 z-40"
            aria-label="Close menu"
            aria-hidden={!navbarOpen}
            onClick={() => setNavbarOpen(false)}
          />
        )}

        <div
          ref={mobileMenuRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`lg:hidden fixed top-0 right-0 h-full w-full max-w-xs bg-slate-800/95 text-white backdrop-blur-md shadow-2xl transform transition-transform duration-300 ${
            navbarOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
          onClick={onMobileNavClick}
        >
          <div className="flex items-center justify-between px-4 pt-16 pb-4">
            <h2 className="text-lg font-bold text-midnight_text dark:text-midnight_text">
              <Logo />
            </h2>
            <button
              ref={closeBtnRef}
              onClick={() => setNavbarOpen(false)}
              className="absolute top-0 right-0 mr-6 mt-6 inline-flex items-center justify-center rounded p-2 text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/30"
              aria-label="Close menu"
            >
              <Icon icon="mdi:close" className="text-2xl" />
            </button>
          </div>
          <nav className="flex flex-col items-start p-4" aria-label="Mobile">
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
            <div className="mt-6 flex flex-col space-y-3 w-full">
              <Link
                href="/contact"
                className="w-full text-center rounded-md bg-myRed px-4 py-2 font-semibold text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-white/30"
                onClick={() => setNavbarOpen(false)}
              >
                Get a Quote
              </Link>
              <Link
                href="tel:+21623039320"
                className="w-full text-center rounded-md border border-white/20 px-4 py-2 font-medium text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                <Icon
                  icon="solar:phone-bold"
                  className="inline align-middle me-2 text-xl text-myRed"
                />
                <span className="align-middle">+216 23-039-320</span>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
