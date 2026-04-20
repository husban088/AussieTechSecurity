"use client";

import { useEffect, useRef, useState } from "react";
import {
  Camera,
  Smartphone,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Eye,
  Wifi,
  Lock,
} from "lucide-react";

/* ─── Feature cards data ─── */
const FEATURES = [
  {
    icon: Camera,
    title: "High-Quality Cameras",
    desc: "4K UHD resolution, colour-at-night capability, and weatherproof cameras with wide-angle coverage for clear, reliable monitoring.",
    accent: "#3b82f6",
  },
  {
    icon: Smartphone,
    title: "Mobile App Access",
    desc: "Monitor your property anytime, anywhere with live viewing and playback access from your smartphone or computer.",
    accent: "#6366f1",
  },
  {
    icon: ShieldCheck,
    title: "3-Year Warranty",
    desc: "Comprehensive workmanship warranty with ongoing technical support for complete peace of mind.",
    accent: "#0ea5e9",
  },
];

/* ─── Stat pills ─── */
const STATS = [
  { icon: Eye, value: "4K", label: "Ultra HD" },
  { icon: Wifi, value: "24/7", label: "Live Access" },
  { icon: Lock, value: "3yr", label: "Warranty" },
];

/* ─── Animate on scroll hook ─── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

export default function CctvInstallation() {
  const leftReveal = useReveal();
  const rightReveal = useReveal();
  const statsReveal = useReveal();

  return (
    <main className="bg-white text-black pt-24 overflow-hidden">
      {/* ══════════════════════════════════════
          HERO BANNER
      ══════════════════════════════════════ */}
      <section className="relative h-[380px] md:h-[440px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/mainbanner.jpeg"
          alt="CCTV Installation Adelaide Banner"
          className="hero-img"
        />
        {/* layered overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/40 via-transparent to-slate-900/40" />

        {/* Decorative horizontal scan-lines */}
        <div className="absolute inset-0 scanlines" aria-hidden="true" />

        <div className="relative z-10 text-center px-6">
          <div className="hero-badge">
            <Camera className="w-3.5 h-3.5" />
            Adelaide&apos;s Trusted CCTV Experts
          </div>
          <h1 className="hero-title">
            CCTV Installation
            <span className="hero-title-line2"> Adelaide</span>
          </h1>
          <p className="hero-sub">
            Professional Security Camera Solutions for Homes &amp; Businesses
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════ */}
      <div
        ref={statsReveal.ref}
        className={`stats-strip ${statsReveal.visible ? "stats-visible" : ""}`}
      >
        <div className="stats-inner">
          {STATS.map(({ icon: Icon, value, label }, i) => (
            <div
              key={label}
              className="stat-item"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="stat-icon-wrap">
                <Icon className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="stat-value">{value}</div>
                <div className="stat-label">{label}</div>
              </div>
            </div>
          ))}

          {/* dividers */}
          <div className="stat-divider" style={{ left: "33.33%" }} />
          <div className="stat-divider" style={{ left: "66.66%" }} />
        </div>
      </div>

      {/* ══════════════════════════════════════
          INTRO
      ══════════════════════════════════════ */}
      <section className="py-14 px-6 text-center bg-white">
        <p className="intro-text">
          Professional Security Camera Installation for Homes and Businesses
          across Adelaide and surrounding areas
        </p>
      </section>

      {/* ══════════════════════════════════════
          MAIN CONTENT — 2 COLUMNS
      ══════════════════════════════════════ */}
      <section className="pb-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          {/* ── LEFT: TEXT + FEATURES ── */}
          <div
            ref={leftReveal.ref}
            className={`left-col ${
              leftReveal.visible ? "reveal-in" : "reveal-out-left"
            }`}
          >
            <div className="section-eyebrow">Our Services</div>
            <h2 className="section-title">
              Our CCTV
              <br />
              <span className="title-gradient">Installation Service</span>
            </h2>

            <p className="section-desc">
              We provide complete end-to-end CCTV solutions, including
              consultation, system design, professional installation, testing,
              and after-installation support.
            </p>

            {/* Feature cards */}
            <div className="features-list">
              {FEATURES.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className="feature-card group"
                  style={{
                    transitionDelay: leftReveal.visible
                      ? `${i * 110 + 200}ms`
                      : "0ms",
                  }}
                >
                  {/* Icon */}
                  <div className="feat-icon-wrap">
                    <Icon className="w-6 h-6 text-white" />
                    <div className="feat-icon-glow" />
                  </div>

                  {/* Text */}
                  <div className="feat-body">
                    <h3 className="feat-title">{title}</h3>
                    <p className="feat-desc">{desc}</p>
                  </div>

                  {/* Hover accent line */}
                  <div className="feat-line" />
                </div>
              ))}
            </div>

            {/* Checks */}
            <ul className="check-list">
              {[
                "Licensed & Insured Technicians",
                "Same-Week Installation",
                "Free On-Site Assessment",
              ].map((item) => (
                <li key={item} className="check-item">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a href="/get-quote" className="cta-btn group">
              Get Free Installation Quote
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1.5" />
            </a>
          </div>

          {/* ── RIGHT: IMAGE ── */}
          <div
            ref={rightReveal.ref}
            className={`right-col ${
              rightReveal.visible ? "reveal-in" : "reveal-out-right"
            }`}
          >
            <div className="img-frame group">
              {/* Corner accents */}
              <span className="corner c-tl" />
              <span className="corner c-tr" />
              <span className="corner c-bl" />
              <span className="corner c-br" />

              {/* Glow ring on hover */}
              <div className="img-glow-ring" />

              {/* THE IMAGE — object-contain so full image always visible */}
              <div className="img-wrapper">
                <img
                  src="/images/cctvinstall.jpeg"
                  alt="Professional CCTV Installation"
                  className="the-img"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800";
                  }}
                />
                {/* Shine sweep on hover */}
                <div className="img-shine" />
              </div>

              {/* Floating badge */}
              <div className="img-badge">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Certified Installers</span>
              </div>

              {/* Decorative dots grid */}
              <div className="dots-grid" aria-hidden="true">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="dot" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          ALL STYLES
      ══════════════════════════════════════ */}
      <style jsx>{`
        /* ─── HERO ─── */
        .hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .scanlines {
          background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(255, 255, 255, 0.015) 3px,
            rgba(255, 255, 255, 0.015) 4px
          );
          pointer-events: none;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(59, 130, 246, 0.18);
          border: 1px solid rgba(59, 130, 246, 0.4);
          color: #93c5fd;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 5px 16px;
          border-radius: 999px;
          margin-bottom: 20px;
        }
        .hero-title {
          font-size: clamp(36px, 7vw, 72px);
          font-weight: 900;
          color: #fff;
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin: 0 0 16px;
        }
        .hero-title-line2 {
          display: block;
          background: linear-gradient(90deg, #60a5fa, #bfdbfe);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-sub {
          color: rgba(255, 255, 255, 0.55);
          font-size: clamp(14px, 2vw, 17px);
          letter-spacing: 0.04em;
          margin: 0;
        }

        /* ─── STATS STRIP ─── */
        .stats-strip {
          background: linear-gradient(
            135deg,
            #0f172a 0%,
            #1e3a8a 55%,
            #0f172a 100%
          );
          position: relative;
          overflow: hidden;
        }
        .stats-inner {
          max-width: 900px;
          margin: 0 auto;
          padding: 28px 24px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 24px;
          position: relative;
        }
        .stat-item {
          display: flex;
          align-items: center;
          gap: 14px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .stats-visible .stat-item {
          opacity: 1;
          transform: translateY(0);
        }
        .stat-icon-wrap {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(59, 130, 246, 0.15);
          border: 1px solid rgba(59, 130, 246, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .stat-value {
          font-size: 22px;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
          line-height: 1;
        }
        .stat-label {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.45);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-top: 2px;
        }
        .stat-divider {
          position: absolute;
          top: 20%;
          bottom: 20%;
          width: 1px;
          background: rgba(255, 255, 255, 0.08);
        }

        /* ─── INTRO ─── */
        .intro-text {
          max-width: 680px;
          margin: 0 auto;
          color: #475569;
          font-size: clamp(15px, 2vw, 18px);
          line-height: 1.7;
        }

        /* ─── SECTION LEFT ─── */
        .section-eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #3b82f6;
          margin-bottom: 14px;
        }
        .section-title {
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.12;
          letter-spacing: -0.025em;
          margin: 0 0 20px;
        }
        .title-gradient {
          background: linear-gradient(135deg, #1e3a8a, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .section-desc {
          color: #64748b;
          font-size: 16px;
          line-height: 1.75;
          margin-bottom: 36px;
        }

        /* ─── FEATURE CARDS ─── */
        .features-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 32px;
        }
        .feature-card {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 18px;
          padding: 22px 22px 22px 22px;
          border-radius: 18px;
          border: 1.5px solid #e8edf5;
          background: #fafbff;
          overflow: hidden;
          cursor: default;
          transition: border-color 0.3s, box-shadow 0.3s, transform 0.3s,
            background 0.3s;
          /* stagger handled inline */
          opacity: 0;
          transform: translateX(-20px);
          transition: opacity 0.55s ease, transform 0.55s ease,
            border-color 0.3s, box-shadow 0.3s, background 0.3s;
        }
        .reveal-in .feature-card {
          opacity: 1;
          transform: translateX(0);
        }
        .feature-card:hover {
          border-color: #3b82f6;
          box-shadow: 0 8px 32px rgba(37, 99, 235, 0.12);
          transform: translateY(-3px) !important;
          background: #fff;
        }

        /* Icon wrap */
        .feat-icon-wrap {
          position: relative;
          flex-shrink: 0;
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 16px rgba(15, 23, 42, 0.25);
          transition: transform 0.35s, box-shadow 0.35s;
        }
        .feature-card:hover .feat-icon-wrap {
          transform: scale(1.1) rotate(-5deg);
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.35);
        }
        .feat-icon-glow {
          position: absolute;
          inset: -4px;
          border-radius: 18px;
          background: radial-gradient(
            circle,
            rgba(59, 130, 246, 0.25) 0%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.35s;
        }
        .feature-card:hover .feat-icon-glow {
          opacity: 1;
        }

        .feat-body {
          flex: 1;
        }
        .feat-title {
          font-size: 17px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 6px;
        }
        .feat-desc {
          font-size: 14px;
          color: #64748b;
          line-height: 1.65;
          margin: 0;
        }

        /* Bottom accent line */
        .feat-line {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 0%;
          background: linear-gradient(90deg, #3b82f6, #1e3a8a);
          border-radius: 0 0 0 18px;
          transition: width 0.4s ease;
        }
        .feature-card:hover .feat-line {
          width: 100%;
        }

        /* ─── CHECK LIST ─── */
        .check-list {
          list-style: none;
          margin: 0 0 36px;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .check-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: #334155;
          font-weight: 500;
        }

        /* ─── CTA BUTTON ─── */
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 16px 32px;
          border-radius: 16px;
          background: linear-gradient(
            135deg,
            #1e3a8a 0%,
            #2563eb 60%,
            #1e3a8a 100%
          );
          background-size: 200% 100%;
          background-position: 0% 0%;
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.02em;
          text-decoration: none;
          box-shadow: 0 6px 24px rgba(37, 99, 235, 0.38);
          transition: background-position 0.4s ease, transform 0.25s,
            box-shadow 0.3s;
        }
        .cta-btn:hover {
          background-position: 100% 0%;
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(37, 99, 235, 0.48);
        }

        /* ─── SCROLL REVEAL ─── */
        .left-col,
        .right-col {
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-out-left {
          opacity: 0;
          transform: translateX(-50px);
        }
        .reveal-out-right {
          opacity: 0;
          transform: translateX(50px);
        }
        .reveal-in {
          opacity: 1;
          transform: translateX(0);
        }

        /* ─── IMAGE FRAME ─── */
        .right-col {
          /* sticky on large so image stays in view while text scrolls */
          position: sticky;
          top: 120px;
          align-self: flex-start;
        }
        @media (max-width: 1024px) {
          .right-col {
            position: static;
          }
        }

        .img-frame {
          position: relative;
          border-radius: 28px;
          /* No background — transparent */
          padding: 0;
          /* We use a thin border glow via box-shadow */
          box-shadow: 0 0 0 1.5px rgba(37, 99, 235, 0.12),
            0 24px 64px rgba(15, 23, 42, 0.18),
            0 6px 20px rgba(37, 99, 235, 0.1);
          transition: box-shadow 0.4s ease;
        }
        .img-frame:hover {
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.45),
            0 32px 80px rgba(15, 23, 42, 0.24),
            0 10px 32px rgba(37, 99, 235, 0.2);
        }

        /* Glow ring */
        .img-glow-ring {
          position: absolute;
          inset: -3px;
          border-radius: 31px;
          background: conic-gradient(
            from 0deg,
            #1e3a8a,
            #3b82f6,
            #0f172a,
            #3b82f6,
            #1e3a8a
          );
          opacity: 0;
          z-index: -1;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .img-frame:hover .img-glow-ring {
          opacity: 1;
        }

        /* Image wrapper — object-contain so FULL image visible */
        .img-wrapper {
          border-radius: 28px;
          overflow: hidden;
          position: relative;
          /* 
            No fixed aspect-ratio — let the image define its own natural height.
            This guarantees the full image is shown without any cropping.
          */
          background: #f1f5f9; /* subtle fallback bg only */
          line-height: 0;
        }
        .the-img {
          width: 100%;
          height: auto; /* natural height — no cropping */
          object-fit: contain; /* never stretch, never crop */
          display: block;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1),
            filter 0.5s ease;
        }
        .img-frame:hover .the-img {
          transform: scale(1.03);
          filter: brightness(1.06) saturate(1.08);
        }

        /* Shine sweep */
        .img-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            transparent 20%,
            rgba(255, 255, 255, 0.22) 50%,
            transparent 80%
          );
          transform: translateX(-110%);
          pointer-events: none;
          border-radius: 28px;
        }
        .img-frame:hover .img-shine {
          transform: translateX(110%);
          transition: transform 0.65s ease;
        }

        /* Floating badge */
        .img-badge {
          position: absolute;
          bottom: 18px;
          left: 18px;
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(10, 18, 50, 0.82);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(59, 130, 246, 0.35);
          color: rgba(255, 255, 255, 0.88);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 8px 16px;
          border-radius: 999px;
          z-index: 5;
          transform: translateY(6px);
          opacity: 0.8;
          transition: transform 0.35s ease, opacity 0.35s ease;
        }
        .img-frame:hover .img-badge {
          transform: translateY(0);
          opacity: 1;
        }

        /* Luxury corner accents */
        .corner {
          position: absolute;
          width: 22px;
          height: 22px;
          border-color: rgba(59, 130, 246, 0.5);
          border-style: solid;
          z-index: 10;
          pointer-events: none;
          transition: width 0.35s, height 0.35s, opacity 0.35s,
            border-color 0.35s;
          opacity: 0.6;
        }
        .img-frame:hover .corner {
          width: 30px;
          height: 30px;
          opacity: 1;
          border-color: rgba(99, 160, 255, 0.9);
        }
        .c-tl {
          top: 12px;
          left: 12px;
          border-width: 2px 0 0 2px;
          border-radius: 4px 0 0 0;
        }
        .c-tr {
          top: 12px;
          right: 12px;
          border-width: 2px 2px 0 0;
          border-radius: 0 4px 0 0;
        }
        .c-bl {
          bottom: 12px;
          left: 12px;
          border-width: 0 0 2px 2px;
          border-radius: 0 0 0 4px;
        }
        .c-br {
          bottom: 12px;
          right: 12px;
          border-width: 0 2px 2px 0;
          border-radius: 0 0 4px 0;
        }

        /* Decorative dot grid (bottom-right) */
        .dots-grid {
          position: absolute;
          bottom: -20px;
          right: -20px;
          width: 100px;
          height: 100px;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 10px;
          z-index: -1;
          pointer-events: none;
        }
        .dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #bfdbfe;
          opacity: 0.6;
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 768px) {
          .stats-inner {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 16px;
            justify-content: center;
          }
          .stat-divider {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .stats-inner {
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }
          .feature-card {
            padding: 18px;
            gap: 14px;
          }
          .feat-icon-wrap {
            width: 44px;
            height: 44px;
            border-radius: 12px;
          }
          .img-frame {
            border-radius: 20px;
          }
          .img-wrapper {
            border-radius: 20px;
          }
          .cta-btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </main>
  );
}
