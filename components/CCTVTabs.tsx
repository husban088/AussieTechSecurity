"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

type TabType = "residential" | "commercial";

const tabData = {
  residential: {
    heading: "Residential CCTV",
    headingAccent: "Installation",
    desc: "Keep your home, family, and valuables safe with our advanced CCTV solutions designed specifically for residential properties.",
    features: [
      "4K Indoor & Outdoor Cameras",
      "Full Colour Night Vision",
      "Mobile App Monitoring",
      "Smart Detection Alerts",
      "Easy Installation & Setup",
    ],
    cta: "Get Residential Quote",
    image: "/images/cctvinstall.jpeg",
    fallback:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=900",
    tag: "Home Security",
  },
  commercial: {
    heading: "Commercial CCTV",
    headingAccent: "Installation",
    desc: "Secure your business with enterprise-level CCTV systems built for offices, shops, warehouses, and large facilities.",
    features: [
      "Multi-Camera Systems",
      "License Plate Recognition",
      "Remote Viewing Access",
      "Scalable Security Setup",
      "3-Year Warranty",
    ],
    cta: "Get Commercial Quote",
    image: "/images/office.jpeg",
    fallback:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=900",
    tag: "Business Security",
  },
};

export default function CCTVTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("residential");
  const [animating, setAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const switchTab = (tab: TabType) => {
    if (tab === activeTab) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveTab(tab);
      setAnimating(false);
    }, 280);
  };

  const data = tabData[activeTab];

  return (
    <section ref={sectionRef} className="tabs-section">
      {/* Subtle grid texture */}
      <div className="tabs-grid-texture" aria-hidden="true" />

      <div className="tabs-container">
        {/* ── EYEBROW ── */}
        <div className="tabs-eyebrow-row">
          <span className="tabs-eyebrow">Our Specialisations</span>
          <div className="tabs-eyebrow-line" />
        </div>

        {/* ── TAB SWITCHER ── */}
        <div className="tabs-switcher">
          <div className="tabs-pill-track">
            <button
              onClick={() => switchTab("residential")}
              className={`tabs-pill ${
                activeTab === "residential" ? "tabs-pill-active" : ""
              }`}
            >
              <span className="tabs-pill-icon">🏠</span>
              Residential CCTV
            </button>
            <button
              onClick={() => switchTab("commercial")}
              className={`tabs-pill ${
                activeTab === "commercial" ? "tabs-pill-active" : ""
              }`}
            >
              <span className="tabs-pill-icon">🏢</span>
              Commercial CCTV
            </button>
          </div>
        </div>

        {/* ── CONTENT ── */}
        <div
          ref={contentRef}
          className={`tabs-content ${
            animating ? "tabs-content-exit" : "tabs-content-enter"
          }`}
        >
          {/* TEXT SIDE */}
          <div className="tabs-text">
            {/* Tag badge */}
            <span className="tabs-tag">{data.tag}</span>

            <h2 className="tabs-heading">
              <span className="tabs-heading-grad">{data.heading}</span>
              <br />
              {data.headingAccent}
            </h2>

            <p className="tabs-desc">{data.desc}</p>

            <ul className="tabs-features">
              {data.features.map((f, i) => (
                <li
                  key={i}
                  className="tabs-feature-item"
                  style={{ animationDelay: `${i * 0.07}s` }}
                >
                  <span className="tabs-check">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2.5 7L5.5 10L11.5 4"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* NEW LUXURY BUTTON - Same style as OurServices */}
            <Link
              href="/get-quote"
              className="btn-gradient px-8 md:px-12 py-3.5 rounded-full font-medium text-white 
  hover:scale-105 transition-all duration-300 
  inline-flex items-center gap-2 
  whitespace-nowrap"
            >
              <span>{data.cta}</span>

              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M3.75 9H14.25M14.25 9L9.75 4.5M14.25 9L9.75 13.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* IMAGE SIDE */}
          <div className="tabs-image-side">
            <div className="tabs-img-frame">
              {/* Decorative ring */}
              <div className="tabs-img-ring" aria-hidden="true" />

              {/* Main image */}
              <div className="tabs-img-inner">
                <img
                  src={data.image}
                  alt={`${data.heading} CCTV`}
                  className="tabs-img"
                  onError={(e) => {
                    e.currentTarget.src = data.fallback;
                  }}
                />
                <div className="tabs-img-overlay" />
              </div>

              {/* Logo badge */}
              <div className="tabs-logo-badge">
                <img
                  src="/images/bestpr.jpeg"
                  alt="Best PR Logo"
                  className="tabs-logo-img"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const p = e.currentTarget.parentElement!;
                    p.style.background =
                      "linear-gradient(135deg,#1e40af,#0f172a)";
                    p.innerHTML =
                      '<span style="color:#fff;font-size:11px;font-weight:700;letter-spacing:0.05em">PRO</span>';
                  }}
                />
              </div>

              {/* Floating stat card */}
              {/* <div className="tabs-stat-card">
                <span className="tabs-stat-num">5+</span>
                <span className="tabs-stat-label">Installations</span>
              </div> */}

              {/* Corner accents */}
              <div className="tc tc-tl" />
              <div className="tc tc-tr" />
              <div className="tc tc-bl" />
              <div className="tc tc-br" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ── Section ── */
        .tabs-section {
          background: #ffffff;
          position: relative;
          padding: 80px 0 100px;
          overflow: hidden;
        }
        .tabs-grid-texture {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
              rgba(30, 64, 175, 0.04) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(30, 64, 175, 0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        /* ── Container ── */
        .tabs-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        /* ── Eyebrow ── */
        .tabs-eyebrow-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 36px;
          justify-content: center;
        }
        .tabs-eyebrow {
          font-family: "Courier New", monospace;
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #1e40af;
          white-space: nowrap;
        }
        .tabs-eyebrow-line {
          height: 1px;
          width: 80px;
          background: linear-gradient(90deg, #1e40af, transparent);
        }

        /* ── Switcher ── */
        .tabs-switcher {
          display: flex;
          justify-content: center;
          margin-bottom: 60px;
        }
        .tabs-pill-track {
          display: inline-flex;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          border-radius: 999px;
          padding: 5px;
          gap: 4px;
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.07);
        }
        .tabs-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 11px 28px;
          border-radius: 999px;
          font-size: 0.9rem;
          font-weight: 600;
          color: #64748b;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          letter-spacing: -0.01em;
          position: relative;
          white-space: nowrap;
        }
        .tabs-pill:hover:not(.tabs-pill-active) {
          color: #1e40af;
          background: rgba(30, 64, 175, 0.06);
        }
        .tabs-pill-active {
          background: linear-gradient(135deg, #1e3a8a, #0f172a);
          color: #ffffff;
          box-shadow: 0 4px 16px rgba(30, 58, 138, 0.35);
        }
        .tabs-pill-icon {
          font-size: 14px;
          display: inline-block;
          transition: transform 0.3s ease;
        }
        .tabs-pill:hover .tabs-pill-icon {
          transform: scale(1.2);
        }

        /* ── Content grid ── */
        .tabs-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .tabs-content-exit {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.28s ease, transform 0.28s ease;
        }
        .tabs-content-enter {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.4s ease 0.05s,
            transform 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0.05s;
        }

        /* ── Text Side ── */
        .tabs-tag {
          display: inline-block;
          background: linear-gradient(
            135deg,
            rgba(30, 64, 175, 0.1),
            rgba(15, 23, 42, 0.08)
          );
          border: 1px solid rgba(30, 64, 175, 0.2);
          border-radius: 6px;
          padding: 4px 12px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #1e40af;
          margin-bottom: 16px;
        }
        .tabs-heading {
          font-size: clamp(1.9rem, 3.5vw, 3rem);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 18px;
        }
        .tabs-heading-grad {
          background: linear-gradient(135deg, #1e40af, #1e3a8a, #0f172a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .tabs-desc {
          font-size: 1rem;
          line-height: 1.75;
          color: #64748b;
          margin-bottom: 28px;
          max-width: 480px;
        }

        /* Features */
        .tabs-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 36px;
        }
        .tabs-feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.92rem;
          color: #334155;
          font-weight: 500;
          animation: featureSlideIn 0.4s ease both;
        }
        @keyframes featureSlideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .tabs-check {
          width: 24px;
          height: 24px;
          border-radius: 8px;
          background: linear-gradient(135deg, #1e40af, #0f172a);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 3px 8px rgba(30, 64, 175, 0.3);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .tabs-feature-item:hover .tabs-check {
          transform: scale(1.15) rotate(-6deg);
          box-shadow: 0 6px 14px rgba(30, 64, 175, 0.4);
        }

        /* NEW BUTTON STYLE - Same as OurServices */
        .btn-gradient {
          background: linear-gradient(135deg, #1e3a8a, #0f172a);
          box-shadow: 0 4px 20px rgba(30, 58, 138, 0.35);
          position: relative;
          overflow: hidden;
        }
        .btn-gradient::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #2563eb, #1e3a8a);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .btn-gradient:hover::before {
          opacity: 1;
        }

        /* ── Image Side ── */
        .tabs-image-side {
          display: flex;
          justify-content: center;
        }
        .tabs-img-frame {
          position: relative;
          width: 100%;
          max-width: 500px;
        }
        .tabs-img-ring {
          position: absolute;
          inset: -20px;
          border: 1.5px dashed rgba(30, 64, 175, 0.15);
          border-radius: 36px;
          pointer-events: none;
          animation: ringRotate 20s linear infinite;
        }
        @keyframes ringRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .tabs-img-inner {
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(30, 64, 175, 0.12);
          box-shadow: 0 0 0 6px rgba(30, 64, 175, 0.05),
            0 24px 60px -12px rgba(15, 23, 42, 0.2);
          position: relative;
          transition: box-shadow 0.4s ease;
        }
        .tabs-img-frame:hover .tabs-img-inner {
          box-shadow: 0 0 0 6px rgba(30, 64, 175, 0.1),
            0 36px 80px -16px rgba(15, 23, 42, 0.3);
        }
        .tabs-img {
          width: 100%;
          height: auto;
          min-height: 300px;
          max-height: 420px;
          object-fit: cover;
          display: block;
          transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .tabs-img-frame:hover .tabs-img {
          transform: scale(1.04);
        }
        .tabs-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(15, 23, 42, 0.35) 0%,
            transparent 55%
          );
        }

        /* Logo badge */
        .tabs-logo-badge {
          position: absolute;
          top: -18px;
          left: -18px;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: #ffffff;
          border: 4px solid #ffffff;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.18);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
          transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1),
            box-shadow 0.4s;
        }
        .tabs-img-frame:hover .tabs-logo-badge {
          transform: scale(1.1) rotate(6deg);
          box-shadow: 0 12px 32px rgba(15, 23, 42, 0.25);
        }
        .tabs-logo-img {
          width: 60px;
          height: 60px;
          object-fit: contain;
        }

        /* Stat card */
        .tabs-stat-card {
          position: absolute;
          bottom: -16px;
          right: -16px;
          background: #ffffff;
          border: 1px solid rgba(30, 64, 175, 0.15);
          border-radius: 16px;
          padding: 12px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12);
          z-index: 10;
          animation: statBob 3.5s ease-in-out infinite;
        }
        @keyframes statBob {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .tabs-stat-num {
          font-size: 1.4rem;
          font-weight: 800;
          background: linear-gradient(135deg, #1e40af, #0f172a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
        }
        .tabs-stat-label {
          font-size: 10px;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 3px;
        }

        /* Corner accents */
        .tc {
          position: absolute;
          width: 20px;
          height: 20px;
          pointer-events: none;
          z-index: 5;
        }
        .tc-tl {
          top: -1px;
          left: -1px;
          border-top: 2px solid #1e40af;
          border-left: 2px solid #1e40af;
          border-radius: 24px 0 0 0;
        }
        .tc-tr {
          top: -1px;
          right: -1px;
          border-top: 2px solid #1e40af;
          border-right: 2px solid #1e40af;
          border-radius: 0 24px 0 0;
        }
        .tc-bl {
          bottom: -1px;
          left: -1px;
          border-bottom: 2px solid #1e40af;
          border-left: 2px solid #1e40af;
          border-radius: 0 0 0 24px;
        }
        .tc-br {
          bottom: -1px;
          right: -1px;
          border-bottom: 2px solid #1e40af;
          border-right: 2px solid #1e40af;
          border-radius: 0 0 24px 0;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .tabs-content {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .tabs-image-side {
            order: -1;
          }
          .tabs-img-frame {
            max-width: 480px;
          }
        }
        @media (max-width: 520px) {
          .tabs-section {
            padding: 60px 0 80px;
          }
          .tabs-pill {
            padding: 10px 18px;
            font-size: 0.82rem;
          }
          .tabs-heading {
            font-size: 1.7rem;
          }
          .tabs-stat-card {
            right: 0;
            bottom: -14px;
          }
          .tabs-logo-badge {
            left: 0;
            top: -14px;
          }
        }
      `}</style>
    </section>
  );
}
