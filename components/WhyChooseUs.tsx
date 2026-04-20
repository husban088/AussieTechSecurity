"use client";

import { useEffect, useRef } from "react";
import { ShieldCheck, DollarSign, Award } from "lucide-react";

const cards = [
  {
    number: "01",
    title: "Professional",
    desc: "Fully licensed technicians with 10+ years of hands-on experience delivering world-class security solutions.",
    icon: ShieldCheck,
    accent: "from-blue-500 to-blue-900",
    delay: "0s",
  },
  {
    number: "02",
    title: "Affordable",
    desc: "Best prices in Adelaide with absolutely no hidden charges — transparent quotes every time.",
    icon: DollarSign,
    accent: "from-slate-600 to-slate-900",
    delay: "0.15s",
  },
  {
    number: "03",
    title: "Reliable",
    desc: "Ongoing dedicated support backed by a 3-year warranty on all installations, guaranteed.",
    icon: Award,
    accent: "from-blue-700 to-black",
    delay: "0.3s",
  },
];

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const els = entry.target.querySelectorAll<HTMLElement>(".wcu-reveal");
          els.forEach((el) => {
            if (entry.isIntersecting) {
              el.classList.add("wcu-visible");
            } else {
              el.classList.remove("wcu-visible");
            }
          });
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="wcu-section py-24 overflow-hidden relative"
    >
      {/* Background Texture */}
      <div className="wcu-bg-texture" aria-hidden="true" />
      <div className="wcu-bg-glow" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADING */}
        <div
          className="text-center mb-20 wcu-reveal"
          style={{ "--d": "0s" } as React.CSSProperties}
        >
          <p className="wcu-eyebrow">Security Excellence Since 2013</p>
          <h2 className="wcu-heading">
            Why <span className="wcu-gradient-text">Choose</span> Us
          </h2>
          <div className="wcu-heading-line" />
          <p className="wcu-subheading">Professional · Affordable · Reliable</p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="wcu-card wcu-reveal"
                style={{ "--d": card.delay } as React.CSSProperties}
              >
                {/* Top accent bar */}
                <div
                  className={`wcu-card-bar bg-gradient-to-r ${card.accent}`}
                />

                {/* Number watermark */}
                <span className="wcu-watermark">{card.number}</span>

                {/* Icon */}
                <div
                  className={`wcu-icon-wrap bg-gradient-to-br ${card.accent}`}
                >
                  <Icon className="wcu-icon" />
                </div>

                {/* Content */}
                <div className="wcu-card-content">
                  <h3 className="wcu-card-title">{card.title}</h3>
                  <p className="wcu-card-desc">{card.desc}</p>
                </div>

                {/* Hover shine */}
                <div className="wcu-shine" aria-hidden="true" />

                {/* Bottom border glow */}
                <div
                  className={`wcu-card-glow bg-gradient-to-r ${card.accent}`}
                />
              </div>
            );
          })}
        </div>

        {/* CENTER IMAGE SHOWCASE */}
        <div
          className="mt-20 wcu-reveal"
          style={{ "--d": "0.45s" } as React.CSSProperties}
        >
          <div className="wcu-image-frame">
            <div className="wcu-image-inner">
              <img
                src="/images/chooseimg.jpeg"
                alt="Security Camera Installation"
                className="wcu-image"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200";
                }}
              />
              <div className="wcu-image-overlay" />
            </div>

            {/* Floating badges */}
            {/* <div className="wcu-badge wcu-badge-left">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
              <span>10+ Years Experience</span>
            </div> */}
            <div className="wcu-badge wcu-badge-right">
              <Award className="w-5 h-5 text-blue-400" />
              <span>3-Year Warranty</span>
            </div>

            {/* Corner accents */}
            <div className="wcu-corner wcu-corner-tl" />
            <div className="wcu-corner wcu-corner-tr" />
            <div className="wcu-corner wcu-corner-bl" />
            <div className="wcu-corner wcu-corner-br" />
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ── Section ── */
        .wcu-section {
          background: #0a0f1e;
          position: relative;
        }
        .wcu-bg-texture {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
            circle at 1px 1px,
            rgba(255, 255, 255, 0.04) 1px,
            transparent 0
          );
          background-size: 40px 40px;
          z-index: 0;
        }
        .wcu-bg-glow {
          position: absolute;
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 500px;
          background: radial-gradient(
            ellipse,
            rgba(37, 99, 235, 0.18) 0%,
            transparent 70%
          );
          z-index: 0;
          pointer-events: none;
        }

        /* ── Heading ── */
        .wcu-eyebrow {
          font-family: "Courier New", monospace;
          font-size: 0.72rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #3b82f6;
          margin-bottom: 1rem;
          display: block;
        }
        .wcu-heading {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          font-weight: 800;
          color: #f1f5f9;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 1.2rem;
        }
        .wcu-gradient-text {
          background: linear-gradient(135deg, #60a5fa, #1d4ed8, #0f172a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .wcu-heading-line {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, #1e40af);
          margin: 0 auto 1.2rem;
          border-radius: 99px;
        }
        .wcu-subheading {
          color: #64748b;
          font-size: 1rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        /* ── Card ── */
        .wcu-card {
          position: relative;
          background: linear-gradient(145deg, #111827, #0f172a);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 20px;
          padding: 2.5rem 2rem 2.2rem;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1),
            box-shadow 0.4s ease, border-color 0.4s ease;
          cursor: default;
        }
        .wcu-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 30px 60px -10px rgba(37, 99, 235, 0.35),
            0 0 0 1px rgba(96, 165, 250, 0.2);
          border-color: rgba(96, 165, 250, 0.3);
        }

        /* Accent top bar */
        .wcu-card-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          opacity: 0.9;
        }

        /* Watermark number */
        .wcu-watermark {
          position: absolute;
          top: -10px;
          right: 16px;
          font-size: 6rem;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.03);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          font-family: "Georgia", serif;
          transition: color 0.4s;
        }
        .wcu-card:hover .wcu-watermark {
          color: rgba(96, 165, 250, 0.06);
        }

        /* Icon */
        .wcu-icon-wrap {
          width: 58px;
          height: 58px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.4rem;
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.3);
          transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1),
            box-shadow 0.4s ease;
        }
        .wcu-card:hover .wcu-icon-wrap {
          transform: translateY(-4px) rotate(-6deg) scale(1.1);
          box-shadow: 0 16px 32px rgba(37, 99, 235, 0.45);
        }
        .wcu-icon {
          width: 28px;
          height: 28px;
          color: #fff;
        }

        /* Card content */
        .wcu-card-content {
          position: relative;
          z-index: 2;
        }
        .wcu-card-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #f1f5f9;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }
        .wcu-card-desc {
          font-size: 0.97rem;
          line-height: 1.7;
          color: #94a3b8;
        }

        /* Hover shine sweep */
        .wcu-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            transparent 40%,
            rgba(255, 255, 255, 0.04) 50%,
            transparent 60%
          );
          transform: translateX(-100%);
          transition: transform 0.6s ease;
          pointer-events: none;
          z-index: 1;
        }
        .wcu-card:hover .wcu-shine {
          transform: translateX(100%);
        }

        /* Bottom glow line */
        .wcu-card-glow {
          position: absolute;
          bottom: 0;
          left: 20%;
          right: 20%;
          height: 1px;
          opacity: 0;
          transition: opacity 0.4s, left 0.4s, right 0.4s;
        }
        .wcu-card:hover .wcu-card-glow {
          opacity: 1;
          left: 10%;
          right: 10%;
        }

        /* ── Image Frame ── */
        .wcu-image-frame {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }
        .wcu-image-inner {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.8),
            0 0 0 1px rgba(96, 165, 250, 0.1);
        }
        .wcu-image {
          width: 100%;
          height: auto;
          display: block;
          max-height: 480px;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .wcu-image-frame:hover .wcu-image {
          transform: scale(1.03);
        }
        .wcu-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(10, 15, 30, 0.7) 0%,
            transparent 50%
          );
        }

        /* Floating badges */
        .wcu-badge {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(15, 23, 42, 0.92);
          border: 1px solid rgba(96, 165, 250, 0.25);
          backdrop-filter: blur(12px);
          border-radius: 50px;
          padding: 10px 18px;
          font-size: 0.82rem;
          color: #cbd5e1;
          font-weight: 500;
          white-space: nowrap;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
          z-index: 10;
          animation: badgeFloat 3s ease-in-out infinite;
        }
        .wcu-badge-left {
          bottom: 24px;
          left: -20px;
          animation-delay: 0s;
        }
        .wcu-badge-right {
          bottom: 24px;
          right: -20px;
          animation-delay: 1.5s;
        }
        @media (max-width: 640px) {
          .wcu-badge-left {
            left: 12px;
          }
          .wcu-badge-right {
            right: 12px;
          }
        }
        @keyframes badgeFloat {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        /* Corner accents */
        .wcu-corner {
          position: absolute;
          width: 24px;
          height: 24px;
          z-index: 5;
          pointer-events: none;
        }
        .wcu-corner-tl {
          top: -1px;
          left: -1px;
          border-top: 2px solid #3b82f6;
          border-left: 2px solid #3b82f6;
          border-radius: 24px 0 0 0;
        }
        .wcu-corner-tr {
          top: -1px;
          right: -1px;
          border-top: 2px solid #3b82f6;
          border-right: 2px solid #3b82f6;
          border-radius: 0 24px 0 0;
        }
        .wcu-corner-bl {
          bottom: -1px;
          left: -1px;
          border-bottom: 2px solid #3b82f6;
          border-left: 2px solid #3b82f6;
          border-radius: 0 0 0 24px;
        }
        .wcu-corner-br {
          bottom: -1px;
          right: -1px;
          border-bottom: 2px solid #3b82f6;
          border-right: 2px solid #3b82f6;
          border-radius: 0 0 24px 0;
        }

        /* ── Reveal Animations ── */
        .wcu-reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s cubic-bezier(0.23, 1, 0.32, 1) var(--d, 0s),
            transform 0.7s cubic-bezier(0.23, 1, 0.32, 1) var(--d, 0s);
        }
        .wcu-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .wcu-reveal {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
