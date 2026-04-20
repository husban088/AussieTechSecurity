"use client";

import { useState, useEffect, useRef } from "react";
import {
  User,
  Phone,
  Mail,
  Home,
  Camera,
  MessageSquare,
  ChevronRight,
  Shield,
  CheckCircle2,
  Zap,
  Clock,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

/* ── Scroll reveal hook ── */
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

const TRUST_PILLS = [
  { icon: Shield, text: "No Obligation" },
  { icon: CheckCircle2, text: "Expert Advice" },
  { icon: Clock, text: "Same-Week Inst." },
];

export default function GetQuote() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    cameras: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const heroReveal = useReveal(0.05);
  const mainReveal = useReveal();

  /* ── Toast ── */
  const showToast = (msg: string) =>
    toast.custom(
      (t) => (
        <div className="bg-white text-black px-6 py-4 rounded-xl shadow-xl flex items-center gap-4 border border-slate-200">
          <span>{msg}</span>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="ml-auto text-xl font-bold hover:text-red-500"
          >
            ✕
          </button>
        </div>
      ),
      { duration: 3000 }
    );

  /* ── Validation ── */
  const validateField = (name: string, value: string) => {
    let error = "";
    const required = ["name", "email", "phone", "propertyType"];
    if (!value.trim() && required.includes(name))
      error = "Please fill this field";
    else if (
      name === "email" &&
      value.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    )
      error = "Invalid email";
    else if (
      name === "phone" &&
      value.trim() &&
      !/^(\+61|0)[2-9]\d{8}$/.test(value)
    )
      error = "Invalid AU phone number";
    setErrors((p) => ({ ...p, [name]: error }));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  /* ── Submit ── */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const newErrors: Record<string, string> = {};
    (["name", "email", "phone", "propertyType"] as const).forEach((f) => {
      if (!formData[f]) newErrors[f] = "Please fill this field";
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      showToast("Please fill all required fields ❌");
      setIsSubmitting(false);
      return;
    }
    try {
      const res = await fetch("/api/get-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const text = await res.text();
      const data = text ? JSON.parse(text) : {};
      if (res.ok) {
        showToast("Quote request sent successfully ✅");
        setFormData({
          name: "",
          phone: "",
          email: "",
          propertyType: "",
          cameras: "",
          message: "",
        });
        setErrors({});
      } else showToast(data.error || "Failed to send quote ❌");
    } catch {
      showToast("Something went wrong ❌");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white text-black pt-24 overflow-hidden">
      <Toaster position="top-right" />

      {/* ══════════════ HERO ══════════════ */}
      <section className="relative h-[400px] md:h-[460px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/mainbanner.jpeg"
          className="gq-hero-img"
          alt="Get Quote Banner"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/35 via-transparent to-slate-900/35" />
        <div className="gq-scanlines" aria-hidden="true" />

        <div
          ref={heroReveal.ref}
          className={`relative z-10 text-center px-6 ${
            heroReveal.visible ? "gq-fade-in" : "gq-fade-out"
          }`}
        >
          <div className="gq-eyebadge">
            <Shield className="w-3.5 h-3.5" />
            Adelaide&apos;s #1 CCTV Specialists
          </div>
          <h1 className="gq-hero-title">
            Get Your<span className="gq-hero-accent"> Free Quote</span>
          </h1>
          <p className="gq-hero-sub">
            Professional CCTV Installation Quote in Adelaide
          </p>

          {/* Trust pills */}
          <div className="gq-pills">
            {TRUST_PILLS.map(({ icon: Icon, text }) => (
              <div key={text} className="gq-pill">
                <Icon className="w-3.5 h-3.5" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ STRIP ══════════════ */}
      <section className="gq-strip">
        <p className="gq-strip-text">
          Professional CCTV Installation Quote in Adelaide
          <br className="hidden md:block" />
          No Obligation &nbsp;·&nbsp; Expert Advice
        </p>
      </section>

      {/* ══════════════ MAIN: IMAGE + FORM ══════════════ */}
      <section className="py-20 bg-[#f8faff] px-6">
        <div
          ref={mainReveal.ref}
          className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-start"
        >
          {/* LEFT — Image */}
          <div
            className={`gq-img-frame group ${
              mainReveal.visible ? "gq-reveal-in" : "gq-reveal-left"
            }`}
          >
            <span className="gq-corner gq-tl" />
            <span className="gq-corner gq-tr" />
            <span className="gq-corner gq-bl" />
            <span className="gq-corner gq-br" />
            <div className="gq-glow-ring" />
            <div className="gq-img-inner">
              <img
                src="/images/quote.png"
                alt="Quote Preview"
                className="gq-img"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800";
                }}
              />
              <div className="gq-shine" />
            </div>

            {/* Decorative dots */}
            <div className="gq-dots" aria-hidden="true">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="gq-dot" />
              ))}
            </div>

            {/* Info cards stacked */}
            <div className="gq-side-info">
              {[
                // { icon: Zap, label: "Same-week installation available" },
                // { icon: Shield, label: "Our team will connect with you soon." },
                { icon: Clock, label: "Our team will connect with you soon" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="gq-info-chip">
                  <div className="gq-chip-icon">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Form card */}
          <div
            className={`gq-form-card ${
              mainReveal.visible ? "gq-reveal-in" : "gq-reveal-right"
            }`}
            style={{ transitionDelay: "160ms" }}
          >
            {/* Card header */}
            <div className="gq-form-header">
              <div className="gq-form-header-grid" aria-hidden="true">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span
                    key={i}
                    className="gq-hgrid-line"
                    style={{ left: `${i * 20}%` }}
                  />
                ))}
              </div>
              <div className="gq-form-eyebrow">
                <Camera className="w-3.5 h-3.5" />
                Quote Request Form
              </div>
              <h2 className="gq-form-title">
                Tell Us About
                <br />
                <span className="gq-form-title-acc">Your Property</span>
              </h2>
              <p className="gq-form-sub">
                Fill in the details below and we'll prepare a tailored quote for
                you.
              </p>
            </div>

            {/* Form body */}
            <div className="gq-form-body">
              <form onSubmit={handleSubmit} noValidate className="gq-form">
                {/* Row 1 */}
                <div className="gq-row">
                  <div className="gq-field">
                    <div className="gq-iw">
                      <User className="gq-icon" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={(e) => validateField("name", e.target.value)}
                        className={`gq-input ${
                          errors.name ? "gq-err-border" : ""
                        }`}
                      />
                    </div>
                    {errors.name && <p className="gq-ferr">{errors.name}</p>}
                  </div>
                  <div className="gq-field">
                    <div className="gq-iw">
                      <Phone className="gq-icon" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone (+61 or 04...)"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={(e) => validateField("phone", e.target.value)}
                        className={`gq-input ${
                          errors.phone ? "gq-err-border" : ""
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="gq-ferr">{errors.phone}</p>}
                  </div>
                </div>

                {/* Email */}
                <div className="gq-field">
                  <div className="gq-iw">
                    <Mail className="gq-icon" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={(e) => validateField("email", e.target.value)}
                      className={`gq-input ${
                        errors.email ? "gq-err-border" : ""
                      }`}
                    />
                  </div>
                  {errors.email && <p className="gq-ferr">{errors.email}</p>}
                </div>

                {/* Row 2 */}
                <div className="gq-row">
                  <div className="gq-field">
                    <div className="gq-iw">
                      <Home className="gq-icon" />
                      <select
                        name="propertyType"
                        value={formData.propertyType}
                        onChange={handleChange}
                        onBlur={(e) =>
                          validateField("propertyType", e.target.value)
                        }
                        className={`gq-input gq-select ${
                          errors.propertyType ? "gq-err-border" : ""
                        }`}
                      >
                        <option value="">Property Type *</option>
                        <option value="Single Story">Single Story</option>
                        <option value="Double Story">Double Story</option>
                        <option value="Business">Business</option>
                        <option value="Commercial">Commercial</option>
                      </select>
                    </div>
                    {errors.propertyType && (
                      <p className="gq-ferr">{errors.propertyType}</p>
                    )}
                  </div>
                  <div className="gq-field">
                    <div className="gq-iw">
                      <Camera className="gq-icon" />
                      <input
                        type="number"
                        name="cameras"
                        placeholder="No. of Cameras"
                        min={1}
                        value={formData.cameras}
                        onChange={(e) => {
                          const v = e.target.value;
                          if (v === "" || parseInt(v) >= 1)
                            setFormData({ ...formData, cameras: v });
                        }}
                        className="gq-input"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="gq-field">
                  <div className="gq-iw gq-iw-ta">
                    <MessageSquare className="gq-icon gq-icon-ta" />
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Additional Message / Requirements"
                      value={formData.message}
                      onChange={handleChange}
                      className="gq-input gq-textarea"
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="gq-submit group"
                >
                  <span className="gq-submit-inner">
                    {isSubmitting ? (
                      "Submitting…"
                    ) : (
                      <>
                        Submit Quote Request{" "}
                        <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                </button>

                <p className="gq-note">We will contact you soon. Thank you!</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ STYLES ══════════════ */}
      <style jsx>{`
        /* ── HERO ── */
        .gq-hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .gq-scanlines {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(255, 255, 255, 0.012) 3px,
            rgba(255, 255, 255, 0.012) 4px
          );
        }
        .gq-fade-out {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .gq-fade-in {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .gq-eyebadge {
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
          margin-bottom: 18px;
        }
        .gq-hero-title {
          font-size: clamp(36px, 7vw, 72px);
          font-weight: 900;
          color: #fff;
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin: 0 0 14px;
        }
        .gq-hero-accent {
          background: linear-gradient(90deg, #60a5fa, #bfdbfe);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .gq-hero-sub {
          color: rgba(255, 255, 255, 0.52);
          font-size: clamp(14px, 2vw, 17px);
          margin: 0 0 24px;
        }

        .gq-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
        }
        .gq-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: rgba(255, 255, 255, 0.82);
          font-size: 12px;
          font-weight: 600;
          padding: 5px 14px;
          border-radius: 999px;
          backdrop-filter: blur(4px);
        }

        /* ── STRIP ── */
        .gq-strip {
          padding: 52px 24px;
          background: linear-gradient(
            135deg,
            #0f172a 0%,
            #1e3a8a 55%,
            #0f172a 100%
          );
          text-align: center;
        }
        .gq-strip-text {
          max-width: 700px;
          margin: 0 auto;
          font-size: clamp(14px, 2vw, 17px);
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.8;
        }

        /* ── REVEAL ANIMATIONS ── */
        .gq-reveal-in {
          opacity: 1;
          transform: translateX(0);
        }
        .gq-reveal-left {
          opacity: 0;
          transform: translateX(-50px);
        }
        .gq-reveal-right {
          opacity: 0;
          transform: translateX(50px);
        }
        .gq-img-frame,
        .gq-form-card {
          transition: opacity 0.7s ease, transform 0.7s ease,
            box-shadow 0.4s ease;
        }

        /* ── IMAGE FRAME ── */
        .gq-img-frame {
          position: relative;
          border-radius: 26px;
          box-shadow: 0 0 0 1.5px rgba(37, 99, 235, 0.12),
            0 24px 64px rgba(15, 23, 42, 0.16);
        }
        .gq-img-frame:hover {
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.45),
            0 32px 80px rgba(15, 23, 42, 0.22);
        }
        .gq-glow-ring {
          position: absolute;
          inset: -3px;
          border-radius: 29px;
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
          transition: opacity 0.4s;
          pointer-events: none;
        }
        .gq-img-frame:hover .gq-glow-ring {
          opacity: 1;
        }

        .gq-img-inner {
          border-radius: 26px;
          overflow: hidden;
          position: relative;
          line-height: 0;
        }
        .gq-img {
          width: 100%;
          height: auto;
          object-fit: contain;
          display: block;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1),
            filter 0.5s ease;
        }
        .gq-img-frame:hover .gq-img {
          transform: scale(1.03);
          filter: brightness(1.05) saturate(1.08);
        }

        .gq-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            transparent 20%,
            rgba(255, 255, 255, 0.2) 50%,
            transparent 80%
          );
          transform: translateX(-110%);
          pointer-events: none;
          border-radius: 26px;
        }
        .gq-img-frame:hover .gq-shine {
          transform: translateX(110%);
          transition: transform 0.65s ease;
        }

        .gq-img-badge {
          position: absolute;
          bottom: 16px;
          left: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(10, 18, 50, 0.82);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(59, 130, 246, 0.35);
          color: rgba(255, 255, 255, 0.88);
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 8px 16px;
          border-radius: 999px;
          z-index: 5;
          transform: translateY(6px);
          opacity: 0.8;
          transition: transform 0.35s, opacity 0.35s;
        }
        .gq-img-frame:hover .gq-img-badge {
          transform: translateY(0);
          opacity: 1;
        }

        .gq-corner {
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
        .gq-img-frame:hover .gq-corner {
          width: 30px;
          height: 30px;
          opacity: 1;
          border-color: rgba(99, 160, 255, 0.9);
        }
        .gq-tl {
          top: 12px;
          left: 12px;
          border-width: 2px 0 0 2px;
          border-radius: 4px 0 0 0;
        }
        .gq-tr {
          top: 12px;
          right: 12px;
          border-width: 2px 2px 0 0;
          border-radius: 0 4px 0 0;
        }
        .gq-bl {
          bottom: 12px;
          left: 12px;
          border-width: 0 0 2px 2px;
          border-radius: 0 0 0 4px;
        }
        .gq-br {
          bottom: 12px;
          right: 12px;
          border-width: 0 2px 2px 0;
          border-radius: 0 0 4px 0;
        }

        .gq-dots {
          position: absolute;
          bottom: -16px;
          right: -16px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          z-index: -1;
          pointer-events: none;
        }
        .gq-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #bfdbfe;
          opacity: 0.6;
        }

        /* Info chips below image */
        .gq-side-info {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 20px;
        }
        .gq-info-chip {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 14px;
          background: #fff;
          border: 1.5px solid #e8edf5;
          font-size: 14px;
          color: #334155;
          font-weight: 500;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
        }
        .gq-info-chip:hover {
          border-color: #93c5fd;
          box-shadow: 0 4px 16px rgba(37, 99, 235, 0.1);
          transform: translateX(4px);
        }
        .gq-chip-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          flex-shrink: 0;
          background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 3px 10px rgba(15, 23, 42, 0.2);
          transition: transform 0.3s;
        }
        .gq-info-chip:hover .gq-chip-icon {
          transform: scale(1.1) rotate(-5deg);
        }

        /* ── FORM CARD ── */
        .gq-form-card {
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(15, 23, 42, 0.12),
            0 2px 12px rgba(37, 99, 235, 0.08);
          border: 1.5px solid #e8edf5;
        }
        .gq-form-header {
          position: relative;
          padding: 36px 32px 28px;
          background: linear-gradient(
            135deg,
            #0f172a 0%,
            #1e3a8a 60%,
            #0f172a 100%
          );
          overflow: hidden;
        }
        .gq-form-header-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .gq-hgrid-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255, 255, 255, 0.04);
        }
        .gq-form-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(59, 130, 246, 0.18);
          border: 1px solid rgba(59, 130, 246, 0.38);
          color: #93c5fd;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 4px 14px;
          border-radius: 999px;
          margin-bottom: 16px;
        }
        .gq-form-title {
          font-size: clamp(22px, 3.5vw, 30px);
          font-weight: 800;
          color: #fff;
          line-height: 1.18;
          letter-spacing: -0.02em;
          margin: 0 0 10px;
        }
        .gq-form-title-acc {
          background: linear-gradient(90deg, #60a5fa, #bfdbfe);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .gq-form-sub {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.45);
          margin: 0;
          letter-spacing: 0.03em;
        }

        .gq-form-body {
          padding: 28px 32px 32px;
          background: #fff;
        }

        /* ── FORM FIELDS ── */
        .gq-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .gq-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .gq-field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .gq-iw {
          position: relative;
          display: flex;
          align-items: center;
        }
        .gq-iw-ta {
          align-items: flex-start;
        }

        .gq-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          width: 16px;
          height: 16px;
          color: #94a3b8;
          pointer-events: none;
          transition: color 0.25s;
        }
        .gq-icon-ta {
          top: 15px;
          transform: none;
        }
        .gq-iw:focus-within .gq-icon {
          color: #3b82f6;
        }

        .gq-input {
          width: 100%;
          padding: 13px 14px 13px 42px;
          border: 1.5px solid #e2e8f0;
          border-radius: 12px;
          font-size: 14px;
          color: #0f172a;
          background: #f8fafc;
          outline: none;
          font-family: inherit;
          box-sizing: border-box;
          transition: border-color 0.22s, box-shadow 0.22s, background 0.22s;
        }
        .gq-input::placeholder {
          color: #94a3b8;
        }
        .gq-input:focus {
          border-color: #3b82f6;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
        }
        .gq-err-border {
          border-color: #f87171;
          background: #fff5f5;
        }
        .gq-select {
          appearance: none;
          cursor: pointer;
        }
        .gq-textarea {
          resize: vertical;
          min-height: 100px;
        }
        .gq-ferr {
          font-size: 11.5px;
          color: #ef4444;
          margin: 0;
          padding-left: 4px;
        }

        .gq-submit {
          width: 100%;
          padding: 15px 24px;
          border-radius: 14px;
          border: none;
          background: linear-gradient(
            135deg,
            #1e3a8a 0%,
            #2563eb 60%,
            #1e3a8a 100%
          );
          background-size: 200% 100%;
          background-position: 0% 0%;
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.03em;
          cursor: pointer;
          font-family: inherit;
          box-shadow: 0 6px 24px rgba(37, 99, 235, 0.38);
          transition: background-position 0.4s, transform 0.2s, box-shadow 0.3s;
          margin-top: 4px;
        }
        .gq-submit:hover:not(:disabled) {
          background-position: 100% 0%;
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(37, 99, 235, 0.48);
        }
        .gq-submit:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }
        .gq-submit-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
        }
        .gq-note {
          text-align: center;
          font-size: 12px;
          color: #94a3b8;
          margin: 0;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 640px) {
          .gq-row {
            grid-template-columns: 1fr;
          }
          .gq-pills {
            gap: 8px;
          }
          .gq-pill {
            font-size: 11px;
            padding: 4px 11px;
          }
          .gq-form-body {
            padding: 22px 20px 26px;
          }
          .gq-form-header {
            padding: 28px 20px 22px;
          }
        }
        @media (max-width: 480px) {
          .gq-img-inner {
            border-radius: 18px;
          }
          .gq-form-card {
            border-radius: 20px;
          }
        }
      `}</style>
    </main>
  );
}
