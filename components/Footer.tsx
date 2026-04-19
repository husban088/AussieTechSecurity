"use client";

import Link from "next/link";
import { Mail, Send, Phone, MapPin, ShieldCheck } from "lucide-react";

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
      {/* ══════════════════════════════════════════
          TRUST BADGE SECTION  (was: TOP INFO BAR)
          – Left: Licensed & police-checked text
          – Right: Image
      ══════════════════════════════════════════ */}
      <div className="trust-section">
        <div className="trust-inner">
          {/* LEFT – text content */}
          <div className="trust-left">
            <div className="trust-badge-pill">
              <ShieldCheck size={15} />
              <span>South Australian Certified</span>
            </div>

            <h2 className="trust-heading">Licensed &amp; Police-Checked</h2>

            <p className="trust-body">
              As per <strong>South Australian security regulations</strong>, all
              our technicians are fully licensed, police-checked, and comply
              with the <em>Security and Investigation Industry Act 1995</em>.
              You can trust that every installation is carried out by verified
              professionals who meet the strictest legal standards in SA.
            </p>

            <ul className="trust-list">
              <li>
                <span className="tick">✔</span>
                Licensed security installers – SA Government approved
              </li>
              <li>
                <span className="tick">✔</span>
                Full police clearance for every technician
              </li>
              <li>
                <span className="tick">✔</span>
                Fully insured &amp; public liability covered
              </li>
              <li>
                <span className="tick">✔</span>
                Compliant with Australian Standards AS 2201
              </li>
            </ul>
          </div>

          {/* RIGHT – image */}
          <div className="trust-right">
            <div className="trust-img-frame">
              <img
                src="/images/licence.png"
                alt="Licensed and Police Checked – South Australia"
                className="trust-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          CONTACT INFO BAR  (was TOP – now moved
          to sit BELOW the 3 main footer columns)
      ══════════════════════════════════════════ */}

      {/* MAIN FOOTER – 3 columns */}
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
            Professional CCTV Installation Services for Home &amp; Business
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
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h4 className="font-semibold mb-4">Newsletter</h4>
          <p className="text-sm text-slate-400 mb-4">
            Sign up for updates &amp; security tips.
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
                  aria-label={label as string}
                  className="w-10 h-10 border border-slate-600 flex items-center justify-center hover:border-blue-500 hover:text-blue-500 transition"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── CONTACT INFO (Phone / Email / Location) ── */}
      {/* Moved below main 3-column section */}
      <div className="border-t border-slate-800">
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

      {/* BOTTOM */}
      <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-400">
        © 2026 Aussie Tech Security. All Rights Reserved.
      </div>

      {/* ════════════ SCOPED STYLES ════════════ */}
      <style jsx>{`
        /* ── Trust Section wrapper ── */
        .trust-section {
          background: linear-gradient(
            135deg,
            #0a1628 0%,
            #0d1f3c 50%,
            #0a1628 100%
          );
          border-bottom: 1px solid rgba(59, 130, 246, 0.18);
          position: relative;
          overflow: hidden;
        }

        /* subtle grid overlay */
        .trust-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
              rgba(59, 130, 246, 0.04) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(59, 130, 246, 0.04) 1px,
              transparent 1px
            );
          background-size: 48px 48px;
          pointer-events: none;
        }

        /* glow blob */
        .trust-section::after {
          content: "";
          position: absolute;
          top: -80px;
          left: -80px;
          width: 400px;
          height: 400px;
          background: radial-gradient(
            circle,
            rgba(37, 99, 235, 0.12) 0%,
            transparent 70%
          );
          pointer-events: none;
        }

        /* ── Inner layout ── */
        .trust-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 64px 32px;
          display: flex;
          align-items: center;
          gap: 60px;
        }

        /* ── LEFT side ── */
        .trust-left {
          flex: 1 1 0;
          min-width: 0;
        }

        .trust-badge-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(37, 99, 235, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.35);
          color: #60a5fa;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 20px;
          margin-bottom: 18px;
        }

        .trust-heading {
          font-size: clamp(24px, 3.5vw, 38px);
          font-weight: 800;
          color: #ffffff;
          line-height: 1.15;
          margin: 0 0 16px;
          letter-spacing: -0.4px;
        }

        .trust-body {
          font-size: clamp(13px, 1.5vw, 15px);
          color: #94a3b8;
          line-height: 1.75;
          margin: 0 0 22px;
          max-width: 520px;
        }

        .trust-body strong {
          color: #cbd5e1;
          font-weight: 600;
        }

        .trust-body em {
          font-style: italic;
          color: #7dd3fc;
        }

        /* checklist */
        .trust-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .trust-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13.5px;
          color: #94a3b8;
          line-height: 1.5;
        }

        .tick {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          background: rgba(37, 99, 235, 0.2);
          border: 1px solid rgba(59, 130, 246, 0.4);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          color: #60a5fa;
          margin-top: 1px;
        }

        /* ── RIGHT side – image ── */
        .trust-right {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .trust-img-frame {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* subtle glow ring behind image */
        .trust-img-frame::before {
          content: "";
          position: absolute;
          inset: -16px;
          border-radius: 20px;
          background: radial-gradient(
            ellipse at center,
            rgba(37, 99, 235, 0.18) 0%,
            transparent 70%
          );
          pointer-events: none;
        }

        .trust-img {
          /* Show image at its natural size – no stretch, no crop */
          display: block;
          max-width: 360px;
          width: 100%;
          height: auto;
          object-fit: contain;
          object-position: center;
          position: relative;
          z-index: 1;
          border-radius: 12px;
          /* soft glow */
          filter: drop-shadow(0 8px 32px rgba(37, 99, 235, 0.25));
        }

        /* ═══════════ RESPONSIVE ═══════════ */

        /* Laptop – smaller image */
        @media (max-width: 1100px) {
          .trust-img {
            max-width: 300px;
          }
          .trust-inner {
            gap: 40px;
          }
        }

        /* Tablet – stack vertically */
        @media (max-width: 860px) {
          .trust-inner {
            flex-direction: column;
            align-items: flex-start;
            padding: 48px 24px;
            gap: 36px;
          }

          .trust-right {
            width: 100%;
            justify-content: center;
          }

          .trust-img {
            max-width: min(320px, 80vw);
          }
        }

        /* Mobile */
        @media (max-width: 520px) {
          .trust-inner {
            padding: 40px 20px;
            gap: 28px;
          }

          .trust-heading {
            font-size: 22px;
          }

          .trust-img {
            max-width: min(260px, 85vw);
          }
        }

        /* Small mobile */
        @media (max-width: 360px) {
          .trust-img {
            max-width: 90vw;
          }
        }
      `}</style>
    </footer>
  );
}
