"use client";

import { useEffect, useRef } from "react";
import { Cctv, BellRing, ShieldCheck, Wrench } from "lucide-react";

const items = [
  {
    title: "Premium Camera Options",
    desc: "Crystal-clear 4K resolution, wide-angle lenses, and weatherproof builds for every environment.",
    icon: Cctv,
    num: "01",
    accent: "from-blue-600 to-blue-900",
    glow: "rgba(37,99,235,0.25)",
  },
  {
    title: "24/7 Quick Alarm Response",
    desc: "Instant alerts on motion detection sent straight to your phone, day or night.",
    icon: BellRing,
    num: "02",
    accent: "from-slate-600 to-slate-900",
    glow: "rgba(71,85,105,0.25)",
  },
  {
    title: "Advanced Security Systems",
    desc: "AI-powered analytics, smart detection, and seamless integration with your smart home.",
    icon: ShieldCheck,
    num: "03",
    accent: "from-blue-700 to-black",
    glow: "rgba(29,78,216,0.25)",
  },
  {
    title: "Reliable Installation & Support",
    desc: "Expert technicians, clean cable management, and dedicated after-install support.",
    icon: Wrench,
    num: "04",
    accent: "from-blue-800 to-slate-950",
    glow: "rgba(30,58,138,0.25)",
  },
];

export default function QuickHighlights() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const els = entry.target.querySelectorAll<HTMLElement>(".qh-card");
          els.forEach((el) => {
            if (entry.isIntersecting) el.classList.add("qh-visible");
            else el.classList.remove("qh-visible");
          });
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="qh-section">
      {/* Fine grid texture */}
      <div className="qh-texture" aria-hidden="true" />

      {/* Top fade from previous section */}
      <div className="qh-top-fade" aria-hidden="true" />

      <div className="qh-container">
        {/* Heading */}
        <div className="qh-head">
          <h2 className="qh-heading">
            Built for <span className="qh-grad">Security Excellence</span>
          </h2>
          <div className="qh-accent-bar" />
        </div>

        {/* Cards */}
        <div className="qh-grid">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="qh-card"
                style={
                  {
                    "--delay": `${i * 0.1}s`,
                    "--glow": item.glow,
                  } as React.CSSProperties
                }
              >
                {/* Number watermark */}
                <span className="qh-watermark">{item.num}</span>

                {/* Icon */}
                <div
                  className={`qh-icon-wrap bg-gradient-to-br ${item.accent}`}
                >
                  <Icon className="qh-icon" />
                  {/* Icon glow ring */}
                  <div className="qh-icon-ring" />
                </div>

                {/* Text */}
                <h3 className="qh-title">{item.title}</h3>
                <p className="qh-desc">{item.desc}</p>

                {/* Decorative line */}
                <div className={`qh-line bg-gradient-to-r ${item.accent}`} />

                {/* Shine sweep */}
                <div className="qh-shine" aria-hidden="true" />

                {/* Bottom accent bar */}
                <div
                  className={`qh-bottom-bar bg-gradient-to-r ${item.accent}`}
                />

                {/* Hover glow overlay */}
                <div className="qh-glow-overlay" aria-hidden="true" />
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        /* ── Section ── */
        .qh-section {
          background: #ffffff;
          position: relative;
          padding: 90px 0 100px;
          overflow: hidden;
        }
        .qh-texture {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
              rgba(30, 64, 175, 0.03) 1px,
              transparent 1px
            ),
            linear-gradient(90deg, rgba(30, 64, 175, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          pointer-events: none;
        }
        .qh-top-fade {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          background: linear-gradient(to bottom, #f8fafc, transparent);
          pointer-events: none;
        }

        /* ── Container ── */
        .qh-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        /* ── Heading ── */
        .qh-head {
          text-align: center;
          margin-bottom: 64px;
        }
        .qh-eyebrow {
          display: inline-block;
          font-family: "Courier New", monospace;
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #1e40af;
          margin-bottom: 14px;
        }
        .qh-heading {
          font-size: clamp(1.9rem, 4vw, 3rem);
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 14px;
        }
        .qh-grad {
          background: linear-gradient(135deg, #1e40af, #1e3a8a, #0f172a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .qh-accent-bar {
          width: 52px;
          height: 3px;
          background: linear-gradient(90deg, #1e40af, #1e3a8a);
          margin: 0 auto;
          border-radius: 99px;
        }

        /* ── Grid ── */
        .qh-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) {
          .qh-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 560px) {
          .qh-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ── Card ── */
        .qh-card {
          position: relative;
          background: #ffffff;
          border: 1px solid #e8edf5;
          border-radius: 24px;
          padding: 40px 28px 28px;
          overflow: hidden;
          cursor: default;
          display: flex;
          flex-direction: column;
          gap: 0;
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1)
              var(--delay, 0s),
            transform 0.6s cubic-bezier(0.23, 1, 0.32, 1) var(--delay, 0s),
            box-shadow 0.4s ease, border-color 0.4s ease;
        }
        .qh-card.qh-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .qh-card:hover {
          box-shadow: 0 0 0 1px rgba(30, 64, 175, 0.15),
            0 20px 50px -8px var(--glow, rgba(30, 64, 175, 0.2)),
            0 4px 12px rgba(15, 23, 42, 0.06);
          border-color: rgba(30, 64, 175, 0.18);
          transform: translateY(-8px);
        }

        /* Watermark */
        .qh-watermark {
          position: absolute;
          top: -8px;
          right: 16px;
          font-size: 5rem;
          font-weight: 900;
          color: rgba(30, 64, 175, 0.04);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          font-family: Georgia, serif;
          transition: color 0.4s;
        }
        .qh-card:hover .qh-watermark {
          color: rgba(30, 64, 175, 0.08);
        }

        /* Icon */
        .qh-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
          position: relative;
          box-shadow: 0 6px 20px rgba(30, 64, 175, 0.25);
          transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1),
            box-shadow 0.4s ease;
          flex-shrink: 0;
        }
        .qh-card:hover .qh-icon-wrap {
          transform: translateY(-6px) rotate(-8deg) scale(1.1);
          box-shadow: 0 16px 36px rgba(30, 64, 175, 0.4);
        }
        .qh-icon {
          width: 30px;
          height: 30px;
          color: #ffffff;
          position: relative;
          z-index: 2;
          flex-shrink: 0;
        }
        .qh-icon-ring {
          position: absolute;
          inset: -4px;
          border-radius: 22px;
          border: 1.5px solid rgba(255, 255, 255, 0.2);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.4s, transform 0.4s;
          transform: scale(0.9);
        }
        .qh-card:hover .qh-icon-ring {
          opacity: 1;
          transform: scale(1);
        }

        /* Text */
        .qh-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0f172a;
          letter-spacing: -0.02em;
          line-height: 1.3;
          margin-bottom: 10px;
          position: relative;
          z-index: 2;
          transition: color 0.3s;
        }
        .qh-card:hover .qh-title {
          color: #1e3a8a;
        }
        .qh-desc {
          font-size: 0.83rem;
          line-height: 1.65;
          color: #94a3b8;
          position: relative;
          z-index: 2;
          flex: 1;
          margin-bottom: 20px;
        }

        /* Decorative line */
        .qh-line {
          height: 2px;
          border-radius: 99px;
          width: 40px;
          margin-bottom: 0;
          margin-top: auto;
          opacity: 0.5;
          transition: width 0.4s cubic-bezier(0.23, 1, 0.32, 1), opacity 0.4s;
          position: relative;
          z-index: 2;
        }
        .qh-card:hover .qh-line {
          width: 80px;
          opacity: 1;
        }

        /* Shine sweep */
        .qh-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            transparent 30%,
            rgba(255, 255, 255, 0.7) 50%,
            transparent 70%
          );
          transform: translateX(-100%) skewX(-10deg);
          transition: transform 0.65s ease;
          pointer-events: none;
          z-index: 3;
        }
        .qh-card:hover .qh-shine {
          transform: translateX(130%) skewX(-10deg);
        }

        /* Bottom bar */
        .qh-bottom-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          opacity: 0.7;
          transition: height 0.3s, opacity 0.3s;
        }
        .qh-card:hover .qh-bottom-bar {
          height: 4px;
          opacity: 1;
        }

        /* Glow overlay */
        .qh-glow-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            ellipse at 50% 110%,
            var(--glow, rgba(30, 64, 175, 0.1)),
            transparent 65%
          );
          opacity: 0;
          transition: opacity 0.4s;
          pointer-events: none;
          z-index: 1;
        }
        .qh-card:hover .qh-glow-overlay {
          opacity: 1;
        }

        /* Responsive tablet override — disable scroll reveal on mobile */
        @media (max-width: 1024px) {
          .qh-card {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
          .qh-card:hover {
            transform: translateY(-6px);
          }
        }

        @media (max-width: 560px) {
          .qh-section {
            padding: 70px 0 80px;
          }
          .qh-card {
            padding: 36px 22px 24px;
          }
        }
      `}</style>
    </section>
  );
}
