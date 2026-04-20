"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const partnerLogos = [
  "/images/patner1.webp",
  "/images/patner2.webp",
  "/images/patner3.webp",
  "/images/patner4.webp",
  "/images/patner5.webp",
  "/images/patner6.webp",
  "/images/patner7.webp",
  "/images/patner8.webp",
];

// Fallback placeholder logos (used if image errors out)
const fallbackColors = [
  "#1e3a8a",
  "#1e40af",
  "#1d4ed8",
  "#2563eb",
  "#0f172a",
  "#1e293b",
  "#334155",
  "#475569",
];
const fallbackLabels = [
  "Hikvision",
  "Dahua",
  "Axis",
  "Hanwha",
  "Bosch",
  "Uniview",
  "CP Plus",
  "Reolink",
];

const OurPartners: React.FC = () => {
  return (
    <section className="op-section">
      {/* Subtle grid overlay */}
      <div className="op-grid-bg" aria-hidden="true" />

      {/* Top divider line */}
      <div className="op-top-rule" aria-hidden="true" />

      <div className="op-container">
        {/* ── HEADING BLOCK ── */}
        <div className="op-heading-block">
          <div className="op-eyebrow-row">
            <span className="op-dash" aria-hidden="true" />
            <span className="op-eyebrow">Trusted Partnerships</span>
            <span className="op-dash" aria-hidden="true" />
          </div>

          <h2 className="op-heading">
            Our <span className="op-heading-grad">Partners</span>
          </h2>

          <p className="op-subheading">
            Working with the world's most trusted security brands to deliver
            excellence
          </p>

          {/* Decorative separator */}
          <div className="op-sep">
            <span className="op-sep-line" />
            <span className="op-sep-diamond" aria-hidden="true" />
            <span className="op-sep-line" />
          </div>
        </div>

        {/* ── SLIDER WRAPPER ── */}
        <div className="op-slider-wrap">
          {/* Left fade edge */}
          <div className="op-fade op-fade-left" aria-hidden="true" />
          {/* Right fade edge */}
          <div className="op-fade op-fade-right" aria-hidden="true" />

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={2}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 20 },
              640: { slidesPerView: 3, spaceBetween: 24 },
              900: { slidesPerView: 4, spaceBetween: 24 },
              1200: { slidesPerView: 5, spaceBetween: 28 },
            }}
            autoplay={{
              delay: 2800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".op-prev",
              nextEl: ".op-next",
            }}
            loop={true}
            className="op-swiper"
          >
            {partnerLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="op-card">
                  {/* Shine sweep */}
                  <div className="op-card-shine" aria-hidden="true" />

                  {/* Corner accents */}
                  <div className="op-ca op-ca-tl" aria-hidden="true" />
                  <div className="op-ca op-ca-tr" aria-hidden="true" />
                  <div className="op-ca op-ca-bl" aria-hidden="true" />
                  <div className="op-ca op-ca-br" aria-hidden="true" />

                  {/* Logo */}
                  <img
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    className="op-logo"
                    onError={(e) => {
                      // Show branded fallback tile
                      const el = e.currentTarget;
                      el.style.display = "none";
                      const parent = el.parentElement!;
                      const fb = document.createElement("div");
                      fb.style.cssText = `
                        width:100%;height:100%;display:flex;flex-direction:column;
                        align-items:center;justify-content:center;gap:6px;
                        background:linear-gradient(135deg,${
                          fallbackColors[index % fallbackColors.length]
                        }18,${fallbackColors[index % fallbackColors.length]}08);
                      `;
                      fb.innerHTML = `
                        <div style="width:40px;height:40px;border-radius:10px;background:${
                          fallbackColors[index % fallbackColors.length]
                        };display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;color:#fff;letter-spacing:0.04em">${fallbackLabels[
                        index % fallbackLabels.length
                      ]
                        .slice(0, 2)
                        .toUpperCase()}</div>
                        <span style="font-size:10px;font-weight:700;color:${
                          fallbackColors[index % fallbackColors.length]
                        };letter-spacing:0.08em;text-transform:uppercase">${
                        fallbackLabels[index % fallbackLabels.length]
                      }</span>
                      `;
                      parent.appendChild(fb);
                    }}
                  />

                  {/* Bottom hover bar */}
                  <div className="op-card-bar" aria-hidden="true" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ── NAVIGATION ── */}
        <div className="op-nav-row">
          <button className="op-nav-btn op-prev" aria-label="Previous partners">
            <span className="op-nav-ring" aria-hidden="true" />
            <svg className="op-nav-icon" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 19l-7-7 7-7"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button className="op-nav-btn op-next" aria-label="Next partners">
            <span className="op-nav-ring" aria-hidden="true" />
            <svg className="op-nav-icon" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* ── TRUST BAR ── */}
        {/* <div className="op-trust-bar">
          {["ISO Certified", "5-Star Rated", "10+ Years", "500+ Projects"].map(
            (t, i) => (
              <div key={i} className="op-trust-item">
                <span className="op-trust-dot" aria-hidden="true" />
                <span className="op-trust-text">{t}</span>
              </div>
            )
          )}
        </div> */}
      </div>

      <style jsx>{`
        /* ── SECTION ── */
        .op-section {
          background: #ffffff;
          position: relative;
          padding: 80px 0 88px;
          overflow: hidden;
        }
        .op-grid-bg {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
              rgba(30, 64, 175, 0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(30, 64, 175, 0.035) 1px,
              transparent 1px
            );
          background-size: 44px 44px;
          pointer-events: none;
        }
        .op-top-rule {
          position: absolute;
          top: 0;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(30, 64, 175, 0.2),
            transparent
          );
        }

        /* ── CONTAINER ── */
        .op-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 2;
        }

        /* ── HEADING ── */
        .op-heading-block {
          text-align: center;
          margin-bottom: 52px;
        }
        .op-eyebrow-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 16px;
        }
        .op-dash {
          display: block;
          width: 32px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #1e40af);
        }
        .op-eyebrow-row .op-dash:last-child {
          background: linear-gradient(90deg, #1e40af, transparent);
        }
        .op-eyebrow {
          font-family: "Courier New", monospace;
          font-size: 10px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #1e40af;
          white-space: nowrap;
        }
        .op-heading {
          font-size: clamp(2.2rem, 5vw, 4rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.035em;
          line-height: 1.05;
          margin-bottom: 14px;
          font-family: "Georgia", "Times New Roman", serif;
        }
        .op-heading-grad {
          background: linear-gradient(
            135deg,
            #1e40af 0%,
            #1e3a8a 50%,
            #0f172a 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-style: italic;
        }
        .op-subheading {
          font-size: 0.97rem;
          color: #94a3b8;
          line-height: 1.6;
          max-width: 440px;
          margin: 0 auto 24px;
          letter-spacing: 0.01em;
        }

        /* Separator */
        .op-sep {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .op-sep-line {
          display: block;
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #cbd5e1);
        }
        .op-sep-line:last-child {
          background: linear-gradient(90deg, #cbd5e1, transparent);
        }
        .op-sep-diamond {
          display: block;
          width: 6px;
          height: 6px;
          background: #1e40af;
          transform: rotate(45deg);
          border-radius: 1px;
          opacity: 0.6;
        }

        /* ── SLIDER ── */
        .op-slider-wrap {
          position: relative;
          margin-bottom: 36px;
        }
        .op-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          z-index: 5;
          pointer-events: none;
        }
        .op-fade-left {
          left: 0;
          background: linear-gradient(90deg, #ffffff, transparent);
        }
        .op-fade-right {
          right: 0;
          background: linear-gradient(270deg, #ffffff, transparent);
        }

        :global(.op-swiper) {
          overflow: visible !important;
          padding: 12px 4px 20px !important;
        }
        :global(.op-swiper .swiper-slide) {
          height: auto;
        }

        /* ── PARTNER CARD ── */
        .op-card {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 110px;
          background: #ffffff;
          border: 1px solid #e8edf5;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.38s cubic-bezier(0.23, 1, 0.32, 1),
            box-shadow 0.38s ease, border-color 0.38s ease;
          box-shadow: 0 2px 10px rgba(15, 23, 42, 0.05);
        }
        .op-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 0 0 1px rgba(30, 64, 175, 0.15),
            0 18px 44px -8px rgba(30, 64, 175, 0.2),
            0 4px 12px rgba(15, 23, 42, 0.06);
          border-color: rgba(30, 64, 175, 0.2);
        }

        /* Logo image */
        .op-logo {
          max-height: 64px;
          max-width: 85%;
          width: auto;
          object-fit: contain;
          filter: grayscale(30%) opacity(0.85);
          transition: filter 0.38s ease,
            transform 0.38s cubic-bezier(0.23, 1, 0.32, 1);
          position: relative;
          z-index: 2;
        }
        .op-card:hover .op-logo {
          filter: grayscale(0%) opacity(1);
          transform: scale(1.08);
        }

        /* Shine sweep */
        .op-card-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            transparent 25%,
            rgba(255, 255, 255, 0.85) 50%,
            transparent 75%
          );
          transform: translateX(-130%) skewX(-10deg);
          transition: transform 0.6s ease;
          pointer-events: none;
          z-index: 3;
        }
        .op-card:hover .op-card-shine {
          transform: translateX(150%) skewX(-10deg);
        }

        /* Corner accents */
        .op-ca {
          position: absolute;
          width: 14px;
          height: 14px;
          opacity: 0;
          transition: opacity 0.38s ease;
          pointer-events: none;
          z-index: 4;
        }
        .op-card:hover .op-ca {
          opacity: 1;
        }
        .op-ca-tl {
          top: -1px;
          left: -1px;
          border-top: 2px solid #1e40af;
          border-left: 2px solid #1e40af;
          border-radius: 20px 0 0 0;
        }
        .op-ca-tr {
          top: -1px;
          right: -1px;
          border-top: 2px solid #1e40af;
          border-right: 2px solid #1e40af;
          border-radius: 0 20px 0 0;
        }
        .op-ca-bl {
          bottom: -1px;
          left: -1px;
          border-bottom: 2px solid #1e40af;
          border-left: 2px solid #1e40af;
          border-radius: 0 0 0 20px;
        }
        .op-ca-br {
          bottom: -1px;
          right: -1px;
          border-bottom: 2px solid #1e40af;
          border-right: 2px solid #1e40af;
          border-radius: 0 0 20px 0;
        }

        /* Bottom bar */
        .op-card-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2.5px;
          background: linear-gradient(90deg, #1e40af, #1e3a8a, #0f172a);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.38s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .op-card:hover .op-card-bar {
          transform: scaleX(1);
        }

        /* ── NAV BUTTONS ── */
        .op-nav-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 44px;
        }
        .op-nav-btn {
          position: relative;
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: linear-gradient(135deg, #1e3a8a, #0f172a);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 18px rgba(30, 58, 138, 0.3);
          transition: transform 0.32s cubic-bezier(0.23, 1, 0.32, 1),
            box-shadow 0.32s ease;
          overflow: hidden;
        }
        .op-nav-btn:hover {
          transform: translateY(-3px) scale(1.06);
          box-shadow: 0 10px 28px rgba(30, 58, 138, 0.45);
        }
        .op-nav-btn:active {
          transform: scale(0.95);
        }
        .op-nav-ring {
          position: absolute;
          inset: -3px;
          border-radius: 19px;
          border: 1px solid rgba(96, 165, 250, 0.3);
          opacity: 0;
          transition: opacity 0.3s, transform 0.3s;
          transform: scale(0.9);
        }
        .op-nav-btn:hover .op-nav-ring {
          opacity: 1;
          transform: scale(1);
        }
        .op-nav-icon {
          width: 22px;
          height: 22px;
          color: #ffffff;
          position: relative;
          z-index: 2;
          flex-shrink: 0;
          transition: transform 0.28s ease;
        }
        .op-prev:hover .op-nav-icon {
          transform: translateX(-2px);
        }
        .op-next:hover .op-nav-icon {
          transform: translateX(2px);
        }
        .op-nav-label {
          font-family: "Courier New", monospace;
          font-size: 9.5px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #cbd5e1;
        }

        /* ── TRUST BAR ── */
        .op-trust-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px 28px;
          padding: 20px 28px;
          background: linear-gradient(135deg, #f8faff, #f1f5f9);
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          max-width: 640px;
          margin: 0 auto;
        }
        .op-trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .op-trust-dot {
          display: block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1e40af, #0f172a);
          flex-shrink: 0;
        }
        .op-trust-text {
          font-size: 0.78rem;
          font-weight: 700;
          color: #334155;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 640px) {
          .op-section {
            padding: 60px 0 68px;
          }
          .op-card {
            height: 90px;
          }
          .op-logo {
            max-height: 52px;
          }
          .op-heading {
            font-size: 2rem;
          }
          .op-fade {
            width: 40px;
          }
          .op-trust-bar {
            gap: 8px 18px;
            padding: 16px 18px;
          }
          .op-trust-text {
            font-size: 0.7rem;
          }
        }
        @media (max-width: 400px) {
          .op-nav-label {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default OurPartners;
