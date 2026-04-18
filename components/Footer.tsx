"use client";

import Link from "next/link";
import { Mail, Send, Phone, MapPin } from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white">
      {/* TOP INFO */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 text-center gap-8">
          <div>
            <Phone className="mx-auto text-blue-500" />
            <h4 className="font-semibold mt-2">Call Us</h4>
            <p className="text-slate-400">08 8123 4567</p>
          </div>

          <div>
            <Mail className="mx-auto text-blue-500" />
            <h4 className="font-semibold mt-2">Email Us</h4>
            <p className="text-slate-400">info@aussietechsecurity.com.au</p>
          </div>

          <div>
            <MapPin className="mx-auto text-blue-500" />
            <h4 className="font-semibold mt-2">Location</h4>
            <p className="text-slate-400">Adelaide, South Australia</p>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LOGO */}
        <div>
          <img
            src="/images/footerlogo.png"
            className="h-16 mb-5"
            alt="Footer Logo"
            loading="eager"
          />
          <p className="text-sm text-slate-300">
            Professional CCTV Installation Services for Home & Business
            Security.
          </p>
        </div>

        {/* LINKS */}
        <div className="grid grid-cols-2 gap-10">
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-300">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Services", "/services"],
                ["CCTV Installation", "/cctv-installation"],
                ["Contact", "/contact"],
                ["Get Quote", "/get-quote"],
              ].map(([name, path]) => (
                <li key={path}>
                  <Link href={path} className="hover:text-blue-400">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Information</h4>
            <div className="flex flex-col gap-2 text-sm text-slate-400">
              <Link href="/privacy-policy" className="hover:text-blue-400">
                Privacy Policy
              </Link>
              <Link
                href="/terms-and-conditions"
                className="hover:text-blue-400"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 className="font-semibold mb-4">Newsletter</h4>
          <p className="text-sm text-slate-400 mb-4">
            Sign up for updates & security tips.
          </p>

          <div className="flex items-center bg-[#1a1a1a] border border-slate-700 rounded-xl overflow-hidden">
            <Mail className="ml-3 text-blue-500" />
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-transparent px-3 py-3 text-sm outline-none"
            />
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-3 transition"
            >
              <Send size={18} />
            </button>
          </div>

          {/* SOCIAL */}
          <div className="mt-8">
            <p className="text-sm text-slate-400 mb-4">Follow Us</p>

            <div className="flex gap-4 text-slate-300">
              {[
                [FaInstagram, "Instagram"],
                [FaFacebookF, "Facebook"],
                [FaTwitter, "Twitter"],
                [FaYoutube, "YouTube"],
                [FaTiktok, "TikTok"],
              ].map(([Icon, label], i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 border border-slate-600 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-400">
        © 2026 Aussie Tech Security. All Rights Reserved.
      </div>
    </footer>
  );
}
