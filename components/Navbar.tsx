"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const pathname = usePathname();

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const isActive = (path: string) => pathname === path;

  const linkClass = (path: string) =>
    `relative transition-colors duration-300
     hover:text-blue-600
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-[2px] after:w-0 after:bg-blue-600
     after:transition-all after:duration-300
     hover:after:w-full
     ${isActive(path) ? "text-blue-600 after:w-full" : "text-slate-800"}`;

  return (
    <>
      <nav
        className={`navbar fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img src="/images/logo.png" className="h-19 w-auto" alt="Logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden min-[1001px]:flex items-center gap-x-8 text-md">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
            <Link href="/about" className={linkClass("/about")}>
              About
            </Link>
            <Link href="/services" className={linkClass("/services")}>
              Services
            </Link>
            <Link
              href="/cctv-installation"
              className={linkClass("/cctv-installation")}
            >
              CCTV Installation
            </Link>
            <Link href="/contact" className={linkClass("/contact")}>
              Contact
            </Link>
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-x-4">
            <a
              href="https://wa.me/61494149690"
              target="_blank"
              rel="noopener noreferrer"
              className="font-orbitron hidden min-[1001px]:flex items-center gap-x-2 px-5 py-2.5 rounded-xl font-semibold btn-light"
            >
              📞 Call Now
            </a>

            <Link
              href="/get-quote"
              className={`font-orbitron get__quote hidden min-[1001px]:block px-5 py-2.5 rounded-xl font-semibold transition ${
                pathname === "/get-quote"
                  ? "bg-black text-white"
                  : "btn-gradient"
              }`}
            >
              Get Quote
            </Link>

            {/* Hamburger */}
            <button
              onClick={toggleMenu}
              className="min-[1001px]:hidden w-10 h-10 flex items-center justify-center"
            >
              <div className="relative w-7 h-7">
                <span
                  className={`absolute top-1 left-0 w-7 h-0.5 bg-slate-800 transition ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`absolute top-3 left-0 w-7 h-0.5 bg-slate-800 transition ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute top-5 left-0 w-7 h-0.5 bg-slate-800 transition ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <Sidebar isOpen={isOpen} onClose={closeMenu} pathname={pathname} />
    </>
  );
}
