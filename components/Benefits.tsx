"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const benefits = [
  {
    icon: "🛡️",
    title: "24/7 Surveillance & Protection",
    desc: "Round-the-clock monitoring so your property is always secure.",
  },
  {
    icon: "🎥",
    title: "Crime Prevention & Evidence Recording",
    desc: "Deter intruders and capture crystal-clear footage when it matters most.",
  },
  {
    icon: "📱",
    title: "Remote Mobile Monitoring",
    desc: "Watch live feeds from anywhere in the world via your smartphone.",
  },
  {
    icon: "🏠",
    title: "Peace of Mind for Family & Business",
    desc: "Feel truly safe knowing your loved ones and assets are protected.",
  },
  {
    icon: "💰",
    title: "Insurance Benefits",
    desc: "Many insurers offer reduced premiums for verified CCTV installations.",
  },
  {
    icon: "🌗",
    title: "High Quality Day & Night Vision",
    desc: "Crystal-clear visuals in both daylight and complete darkness with advanced imaging technology.",
  },
];

export default function Benefits() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const els = entry.target.querySelectorAll<HTMLElement>(".ben-reveal");
          els.forEach((el) => {
            if (entry.isIntersecting) el.classList.add("ben-visible");
            else el.classList.remove("ben-visible");
          });
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="ben-section py-24 overflow-hidden relative"
    >
      <div className="ben-bg-texture" aria-hidden="true" />
      <div className="ben-bg-glow" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div
          className="text-center mb-16 ben-reveal"
          style={{ "--d": "0s" } as React.CSSProperties}
        >
          <p className="ben-eyebrow">Why CCTV Matters</p>
          <h2 className="ben-heading">
            Benefits of <span className="ben-gradient-text">CCTV Security</span>
          </h2>
          <div className="ben-heading-line" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT — Benefits List */}
          <div className="space-y-4">
            {benefits.map((item, i) => (
              <div
                key={i}
                className="ben-item ben-reveal"
                style={{ "--d": `${i * 0.08}s` } as React.CSSProperties}
              >
                <div className="ben-item-icon">{item.icon}</div>
                <div className="ben-item-text">
                  <p className="ben-item-title">{item.title}</p>
                  <p className="ben-item-desc">{item.desc}</p>
                </div>
                <div className="ben-item-arrow">→</div>
                <div className="ben-item-shine" aria-hidden="true" />
              </div>
            ))}
          </div>

          {/* RIGHT — Image */}
          <div
            className="ben-reveal"
            style={{ "--d": "0.3s" } as React.CSSProperties}
          >
            <div className="ben-image-wrap">
              <div className="ben-image-inner">
                <Image
                  src="/images/benifits.jfif"
                  alt="CCTV Benefits"
                  width={800}
                  height={600}
                  className="ben-image"
                  priority
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    (e.currentTarget as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800";
                  }}
                />
                <div className="ben-image-overlay" />
              </div>

              {/* Stats row */}
              <div className="ben-stats">
                {[
                  { value: "3yr", label: "Warranty" },
                  { value: "24/7", label: "Support" },
                ].map((s, i) => (
                  <div key={i} className="ben-stat">
                    <span className="ben-stat-value">{s.value}</span>
                    <span className="ben-stat-label">{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Corner accents */}
              <div className="ben-corner ben-corner-tl" />
              <div className="ben-corner ben-corner-tr" />
              <div className="ben-corner ben-corner-bl" />
              <div className="ben-corner ben-corner-br" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ── Section ── */
        .ben-section {
          background: #060b18;
          position: relative;
        }
        .ben-bg-texture {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
            circle at 1px 1px,
            rgba(255, 255, 255, 0.03) 1px,
            transparent 0
          );
          background-size: 36px 36px;
          z-index: 0;
        }
        .ben-bg-glow {
          position: absolute;
          bottom: -100px;
          right: -100px;
          width: 600px;
          height: 600px;
          background: radial-gradient(
            ellipse,
            rgba(29, 78, 216, 0.12) 0%,
            transparent 70%
          );
          z-index: 0;
          pointer-events: none;
        }

        /* ── Heading ── */
        .ben-eyebrow {
          font-family: "Courier New", monospace;
          font-size: 0.72rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #3b82f6;
          margin-bottom: 1rem;
          display: block;
        }
        .ben-heading {
          font-size: clamp(2.2rem, 5vw, 3.8rem);
          font-weight: 800;
          color: #f1f5f9;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 1rem;
        }
        .ben-gradient-text {
          background: linear-gradient(135deg, #60a5fa, #1d4ed8, #0f172a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ben-heading-line {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #3b82f6, #1e40af);
          margin: 0 auto;
          border-radius: 99px;
        }

        /* ── Benefit Items ── */
        .ben-item {
          display: flex;
          align-items: center;
          gap: 16px;
          background: linear-gradient(135deg, #111827, #0d1423);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 16px 20px;
          position: relative;
          overflow: hidden;
          cursor: default;
          transition: transform 0.35s cubic-bezier(0.23, 1, 0.32, 1),
            box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .ben-item:hover {
          transform: translateX(8px);
          box-shadow: 0 12px 40px rgba(37, 99, 235, 0.25), -4px 0 0 #3b82f6;
          border-color: rgba(96, 165, 250, 0.25);
        }

        .ben-item-icon {
          font-size: 1.7rem;
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.35s cubic-bezier(0.23, 1, 0.32, 1),
            background 0.35s;
        }
        .ben-item:hover .ben-item-icon {
          transform: scale(1.15) rotate(-8deg);
          background: rgba(59, 130, 246, 0.2);
        }

        .ben-item-text {
          flex: 1;
          min-width: 0;
        }
        .ben-item-title {
          font-size: 0.97rem;
          font-weight: 700;
          color: #e2e8f0;
          margin-bottom: 2px;
          letter-spacing: -0.01em;
        }
        .ben-item-desc {
          font-size: 0.82rem;
          color: #64748b;
          line-height: 1.5;
        }

        .ben-item-arrow {
          color: #3b82f6;
          font-size: 1.1rem;
          opacity: 0;
          transform: translateX(-8px);
          transition: opacity 0.3s, transform 0.3s;
          flex-shrink: 0;
        }
        .ben-item:hover .ben-item-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* shine sweep */
        .ben-item-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            transparent 40%,
            rgba(255, 255, 255, 0.04) 50%,
            transparent 60%
          );
          transform: translateX(-100%);
          transition: transform 0.55s ease;
          pointer-events: none;
        }
        .ben-item:hover .ben-item-shine {
          transform: translateX(100%);
        }

        /* ── Image ── */
        .ben-image-wrap {
          position: relative;
          border-radius: 24px;
        }
        .ben-image-inner {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.07);
          box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.8);
        }
        .ben-image {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
          max-height: 500px;
          transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .ben-image-wrap:hover .ben-image {
          transform: scale(1.04);
        }
        .ben-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(6, 11, 24, 0.65) 0%,
            transparent 50%
          );
        }

        /* Stats row */
        .ben-stats {
          display: flex;
          gap: 0;
          margin-top: 16px;
          background: linear-gradient(135deg, #111827, #0d1423);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 16px;
          overflow: hidden;
        }
        .ben-stat {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 16px 8px;
          border-right: 1px solid rgba(255, 255, 255, 0.06);
          transition: background 0.3s;
        }
        .ben-stat:last-child {
          border-right: none;
        }
        .ben-stat:hover {
          background: rgba(59, 130, 246, 0.08);
        }
        .ben-stat-value {
          font-size: 1.4rem;
          font-weight: 800;
          background: linear-gradient(135deg, #60a5fa, #1d4ed8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.02em;
        }
        .ben-stat-label {
          font-size: 0.72rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 2px;
        }

        /* Corner accents */
        .ben-corner {
          position: absolute;
          width: 22px;
          height: 22px;
          z-index: 5;
          pointer-events: none;
        }
        .ben-corner-tl {
          top: -1px;
          left: -1px;
          border-top: 2px solid #3b82f6;
          border-left: 2px solid #3b82f6;
          border-radius: 24px 0 0 0;
        }
        .ben-corner-tr {
          top: -1px;
          right: -1px;
          border-top: 2px solid #3b82f6;
          border-right: 2px solid #3b82f6;
          border-radius: 0 24px 0 0;
        }
        .ben-corner-bl {
          bottom: 89px;
          left: -1px;
          border-bottom: 2px solid #3b82f6;
          border-left: 2px solid #3b82f6;
          border-radius: 0 0 0 24px;
        }
        .ben-corner-br {
          bottom: 89px;
          right: -1px;
          border-bottom: 2px solid #3b82f6;
          border-right: 2px solid #3b82f6;
          border-radius: 0 0 24px 0;
        }

        /* ── Reveal Animations ── */
        .ben-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.65s cubic-bezier(0.23, 1, 0.32, 1) var(--d, 0s),
            transform 0.65s cubic-bezier(0.23, 1, 0.32, 1) var(--d, 0s);
        }
        .ben-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .ben-reveal {
            opacity: 1;
            transform: none;
          }
        }
        @media (max-width: 640px) {
          .ben-item-desc {
            display: none;
          }
          .ben-item {
            padding: 14px 16px;
          }
        }
      `}</style>
    </section>
  );
}
