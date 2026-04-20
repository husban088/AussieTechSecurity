"use client";

import Link from "next/link";
import { useEffect } from "react";

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
};

export default function Sidebar({ isOpen, onClose, pathname }: SidebarProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    document.body.style.overflow = isOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const linkClass = (path: string) =>
    `relative hover:text-blue-600 transition-colors duration-300 text-lg font-medium
     after:content-[''] after:absolute after:left-0 after:-bottom-1
     after:h-[2px] after:w-0 after:bg-blue-600
     after:transition-all after:duration-300
     hover:after:w-full
     ${
       pathname === path
         ? "text-blue-600 font-semibold after:w-full"
         : "text-slate-800"
     }`;

  return (
    <>
      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 min-[1001px]:hidden"
          onClick={onClose}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white border-l border-slate-200 shadow-2xl z-50 
        transform transition-transform duration-500 ease-in-out min-[1001px]:hidden overflow-y-auto
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        onClick={(e) => e.stopPropagation()}
        aria-hidden={!isOpen}
      >
        <div className="p-6 flex flex-col min-h-full relative">
          {/* LOGO */}
          <div className="mb-10">
            <img src="/images/logo.jpeg" alt="Logo" className="h-15 w-auto" />
          </div>

          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-3xl text-slate-500 hover:text-slate-800 transition-colors"
            aria-label="Close sidebar"
          >
            ✕
          </button>

          {/* LINKS */}
          <nav className="flex flex-col gap-y-8 text-slate-800 mt-8">
            <Link href="/" onClick={onClose} className={linkClass("/")}>
              Home
            </Link>

            <Link
              href="/about"
              onClick={onClose}
              className={linkClass("/about")}
            >
              About
            </Link>

            <Link
              href="/services"
              onClick={onClose}
              className={linkClass("/services")}
            >
              Services
            </Link>

            <Link
              href="/projects"
              onClick={onClose}
              className={linkClass("/projects")}
            >
              Projects
            </Link>

            <Link
              href="/cctv-installation"
              onClick={onClose}
              className={linkClass("/cctv-installation")}
            >
              CCTV Installation
            </Link>

            <Link
              href="/contact"
              onClick={onClose}
              className={linkClass("/contact")}
            >
              Contact
            </Link>
          </nav>

          {/* BOTTOM ACTIONS */}
          <div className="mt-auto pt-10 space-y-4">
            <Link
              href="/get-quote"
              onClick={onClose}
              className={`block text-center text-lg py-3 rounded-lg transition-all duration-300 font-medium
              ${
                pathname === "/get-quote"
                  ? "bg-blue-600 text-white"
                  : "btn-gradient"
              }`}
            >
              Get Free Quote
            </Link>

            <a
              href="https://wa.me/61494149690"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className={`flex items-center justify-center gap-3 text-lg py-3 rounded-lg transition-all duration-300 font-medium
             ${
               pathname === "/contact" ? "bg-blue-600 text-white" : "btn-light"
             }`}
            >
              📞 Call Now: 0479 063 410
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
