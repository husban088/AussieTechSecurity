"use client";

import { useState, useEffect, useRef } from "react";
import {
  User,
  Phone,
  Mail,
  MessageSquare,
  ChevronRight,
  Shield,
  CheckCircle2,
  Zap,
  Clock,
  MapPin,
  Camera,
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

const CONTACT_INFO = [
  {
    icon: Phone,
    title: "Call Us",
    value: "0479 063 410",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "aussietechsecurity@gmail.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Adelaide, South Australia",
  },
];

const AREAS = [
  "Elizabeth",
  "Gawler",
  "Glenelg",
  "West Lakes",
  "Hallett Cove",
  "Morphett Vale",
  "McLaren Vale",
  "Golden Grove",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const heroReveal = useReveal(0.05);
  const mainReveal = useReveal();
  const areasReveal = useReveal();

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
    const required = ["name", "email", "phone", "message"];
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  /* ── Submit ── */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const newErrors: Record<string, string> = {};
    (["name", "email", "phone", "message"] as const).forEach((f) => {
      if (!formData[f]) newErrors[f] = "Please fill this field";
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      showToast("Please fill all required fields ❌");
      setIsSubmitting(false);
      return;
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const text = await res.text();
      const data = text ? JSON.parse(text) : {};
      if (res.ok) {
        showToast("Message sent successfully ✅");
        setFormData({ name: "", phone: "", email: "", message: "" });
        setErrors({});
      } else showToast(data.error || "Failed to send message ❌");
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
      <section className="ct-hero">
        <img
          src="/images/mainbanner.jpeg"
          className="ct-hero-img"
          alt="Contact Banner"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/45 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/35 via-transparent to-slate-900/35" />
        <div className="ct-scanlines" aria-hidden="true" />

        {/* ── Decorative circles — positioned INSIDE hero, overflow visible on section ── */}
        <div className="ct-circle ct-circle-1" aria-hidden="true" />
        <div className="ct-circle ct-circle-2" aria-hidden="true" />
        <div className="ct-circle ct-circle-3" aria-hidden="true" />

        <div
          ref={heroReveal.ref}
          className={`relative z-10 text-center px-6 ${
            heroReveal.visible ? "ct-fade-in" : "ct-fade-out"
          }`}
        >
          <div className="ct-eyebadge">
            <Shield className="w-3.5 h-3.5" />
            Adelaide&apos;s #1 CCTV Specialists
          </div>
          <h1 className="ct-hero-title">
            Contact<span className="ct-hero-accent"> Us</span>
          </h1>
          <p className="ct-hero-sub">
            Get in touch with Adelaide&apos;s trusted CCTV installation team
          </p>

          {/* Trust pills */}
          <div className="ct-pills">
            {TRUST_PILLS.map(({ icon: Icon, text }) => (
              <div key={text} className="ct-pill">
                <Icon className="w-3.5 h-3.5" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ STRIP ══════════════ */}
      <section className="ct-strip">
        <p className="ct-strip-text">
          Professional CCTV Installation in Adelaide
          <br className="hidden md:block" />
          No Obligation &nbsp;·&nbsp; Expert Advice
        </p>
      </section>

      {/* ══════════════ CONTACT INFO CARDS ══════════════ */}
      <section className="py-14 bg-white px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {CONTACT_INFO.map(({ icon: Icon, title, value, sub }) => (
            <div key={title} className="ct-info-card">
              <div className="ct-info-icon">
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="ct-info-title">{title}</h3>
              <p className="ct-info-value">{value}</p>
              <p className="ct-info-sub">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ MAIN: IMAGE + FORM ══════════════ */}
      <section className="py-20 bg-[#f8faff] px-6">
        <div
          ref={mainReveal.ref}
          className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-start"
        >
          {/* LEFT — Image frame (same as quote page) */}
          <div
            className={`ct-img-frame group ${
              mainReveal.visible ? "ct-reveal-in" : "ct-reveal-left"
            }`}
          >
            <span className="ct-corner ct-tl" />
            <span className="ct-corner ct-tr" />
            <span className="ct-corner ct-bl" />
            <span className="ct-corner ct-br" />
            <div className="ct-glow-ring" />
            <div className="ct-img-inner">
              <img
                src="/images/contactimg.png"
                alt="Contact Us"
                className="ct-img"
              />
              <div className="ct-shine" />
            </div>

            {/* Decorative dots */}
            <div className="ct-dots" aria-hidden="true">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="ct-dot" />
              ))}
            </div>

            {/* Info chips stacked */}
            <div className="ct-side-info">
              {[
                // { icon: Zap, label: "Same-week installation available" },
                // { icon: Shield, label: "3-year workmanship warranty" },
                { icon: Clock, label: "Our team will connect with you soon" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="ct-info-chip">
                  <div className="ct-chip-icon">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Contact Form card (same style as quote form) */}
          <div
            className={`ct-form-card ${
              mainReveal.visible ? "ct-reveal-in" : "ct-reveal-right"
            }`}
            style={{ transitionDelay: "160ms" }}
          >
            {/* Card header */}
            <div className="ct-form-header">
              <div className="ct-form-header-grid" aria-hidden="true">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span
                    key={i}
                    className="ct-hgrid-line"
                    style={{ left: `${i * 20}%` }}
                  />
                ))}
              </div>
              <div className="ct-form-eyebrow">
                <Camera className="w-3.5 h-3.5" />
                Contact Form
              </div>
              <h2 className="ct-form-title">
                Get In Touch
                <br />
                <span className="ct-form-title-acc">With Our Team</span>
              </h2>
              <p className="ct-form-sub">
                Fill in the details below and we&apos;ll get back to you
                shortly.
              </p>
            </div>

            {/* Form body */}
            <div className="ct-form-body">
              <form onSubmit={handleSubmit} noValidate className="ct-form">
                {/* Row 1: Name + Phone */}
                <div className="ct-row">
                  <div className="ct-field">
                    <div className="ct-iw">
                      <User className="ct-icon" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name *"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={(e) => validateField("name", e.target.value)}
                        className={`ct-input ${
                          errors.name ? "ct-err-border" : ""
                        }`}
                      />
                    </div>
                    {errors.name && <p className="ct-ferr">{errors.name}</p>}
                  </div>
                  <div className="ct-field">
                    <div className="ct-iw">
                      <Phone className="ct-icon" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone (+61 or 04...)"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={(e) => validateField("phone", e.target.value)}
                        className={`ct-input ${
                          errors.phone ? "ct-err-border" : ""
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="ct-ferr">{errors.phone}</p>}
                  </div>
                </div>

                {/* Email */}
                <div className="ct-field">
                  <div className="ct-iw">
                    <Mail className="ct-icon" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={(e) => validateField("email", e.target.value)}
                      className={`ct-input ${
                        errors.email ? "ct-err-border" : ""
                      }`}
                    />
                  </div>
                  {errors.email && <p className="ct-ferr">{errors.email}</p>}
                </div>

                {/* Message */}
                <div className="ct-field">
                  <div className="ct-iw ct-iw-ta">
                    <MessageSquare className="ct-icon ct-icon-ta" />
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Your Message / Enquiry *"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={(e) => validateField("message", e.target.value)}
                      className={`ct-input ct-textarea ${
                        errors.message ? "ct-err-border" : ""
                      }`}
                    />
                  </div>
                  {errors.message && (
                    <p className="ct-ferr">{errors.message}</p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="ct-submit group"
                >
                  <span className="ct-submit-inner">
                    {isSubmitting ? (
                      "Sending…"
                    ) : (
                      <>
                        Send Message{" "}
                        <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </>
                    )}
                  </span>
                </button>

                <p className="ct-note">We will contact you soon. Thank you!</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ AREAS WE SERVICE ══════════════ */}
      <section className="bg-[#f8faff] py-20 px-6" id="map">
        <div
          ref={areasReveal.ref}
          className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-14"
        >
          {/* Left — text + area chips */}
          <div
            className={`w-full lg:w-1/2 ${
              areasReveal.visible ? "ct-reveal-in" : "ct-reveal-left"
            }`}
          >
            <p className="ct-section-eyebrow">Our Coverage</p>
            <h2 className="ct-section-title">
              Areas We <span className="ct-title-grad">Service</span>
            </h2>
            <div className="ct-divider" />
            <p className="ct-section-desc">
              We proudly provide professional CCTV installation, security camera
              systems, and smart home surveillance solutions across Adelaide and
              its surrounding suburbs.
            </p>

            <div className="ct-areas-grid">
              {AREAS.map((area, i) => (
                <div
                  key={area}
                  className="ct-area-chip"
                  style={{
                    transitionDelay: areasReveal.visible
                      ? `${i * 70}ms`
                      : "0ms",
                    opacity: areasReveal.visible ? 1 : 0,
                    transform: areasReveal.visible
                      ? "translateY(0)"
                      : "translateY(16px)",
                    transition: "opacity 0.45s ease, transform 0.45s ease",
                  }}
                >
                  <span className="ct-area-dot" />
                  {area}
                </div>
              ))}
            </div>

            <p className="ct-areas-note">
              Not sure if we cover your area?{" "}
              <a href="#form" className="ct-areas-link">
                Contact us
              </a>{" "}
              and we&apos;ll confirm within minutes.
            </p>
          </div>

          {/* Right — map image frame */}
          <div
            className={`w-full lg:w-1/2 ${
              areasReveal.visible ? "ct-reveal-in" : "ct-reveal-right"
            }`}
            style={{
              transitionDelay: "180ms",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div className="ct-map-frame group">
              <span className="ct-corner ct-tl" />
              <span className="ct-corner ct-tr" />
              <span className="ct-corner ct-bl" />
              <span className="ct-corner ct-br" />
              <div className="ct-map-glow-ring" />
              <div className="ct-map-img-inner">
                <img
                  src="/images/map.jpeg"
                  alt="Areas We Service in Adelaide"
                  className="ct-map-img"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=800";
                  }}
                />
                <div className="ct-map-shine" />
              </div>
              <div className="ct-map-badge">
                <MapPin className="w-4 h-4 text-blue-400" />
                Adelaide &amp; Surrounds
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ STYLES ══════════════ */}
      <style jsx>{`
        /* ── HERO ──
           KEY FIX: overflow: visible on section so circles don't get clipped.
           Use padding-bottom so content isn't hidden behind circles.
        */
        .ct-hero {
          position: relative;
          min-height: 460px;
          display: flex;
          align-items: center;
          justify-content: center;
          /* NO overflow:hidden here — this lets circles show fully */
          overflow: visible;
        }
        .ct-hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .ct-scanlines {
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

        /* ── DECORATIVE CIRCLES ──
           These are absolutely positioned inside the hero.
           Because .ct-hero has overflow:visible, they render fully
           even if they extend beyond the hero boundaries.
           Use pointer-events:none so they don't block clicks.
        */
        .ct-circle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 2;
        }
        .ct-circle-1 {
          width: 320px;
          height: 320px;
          border: 1.5px solid rgba(59, 130, 246, 0.25);
          top: 50%;
          right: -60px;
          transform: translateY(-50%);
          background: radial-gradient(
            circle at center,
            rgba(37, 99, 235, 0.08) 0%,
            transparent 70%
          );
        }
        .ct-circle-2 {
          width: 200px;
          height: 200px;
          border: 1px solid rgba(96, 165, 250, 0.2);
          top: 50%;
          right: 20px;
          transform: translateY(-50%);
        }
        .ct-circle-3 {
          width: 120px;
          height: 120px;
          border: 1px solid rgba(147, 197, 253, 0.18);
          top: 50%;
          right: 100px;
          transform: translateY(-50%);
          background: rgba(59, 130, 246, 0.06);
        }

        .ct-fade-out {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .ct-fade-in {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        .ct-eyebadge {
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
        .ct-hero-title {
          font-size: clamp(36px, 7vw, 72px);
          font-weight: 900;
          color: #fff;
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin: 0 0 14px;
        }
        .ct-hero-accent {
          background: linear-gradient(90deg, #60a5fa, #bfdbfe);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ct-hero-sub {
          color: rgba(255, 255, 255, 0.52);
          font-size: clamp(14px, 2vw, 17px);
          margin: 0 0 24px;
        }

        .ct-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
        }
        .ct-pill {
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
        .ct-strip {
          padding: 52px 24px;
          background: linear-gradient(
            135deg,
            #0f172a 0%,
            #1e3a8a 55%,
            #0f172a 100%
          );
          text-align: center;
        }
        .ct-strip-text {
          max-width: 700px;
          margin: 0 auto;
          font-size: clamp(14px, 2vw, 17px);
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.8;
        }

        /* ── CONTACT INFO CARDS ── */
        .ct-info-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 28px 20px;
          border-radius: 20px;
          background: #fff;
          border: 1.5px solid #e8edf5;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
        }
        .ct-info-card:hover {
          border-color: #93c5fd;
          box-shadow: 0 8px 32px rgba(37, 99, 235, 0.12);
          transform: translateY(-4px);
        }
        .ct-info-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.2);
        }
        .ct-info-title {
          font-size: 13px;
          font-weight: 700;
          color: #94a3b8;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin: 0 0 6px;
        }
        .ct-info-value {
          font-size: 16px;
          font-weight: 700;
          color: #0f172a;
          margin: 0 0 4px;
        }
        .ct-info-sub {
          font-size: 13px;
          color: #94a3b8;
          margin: 0;
        }

        /* ── REVEAL ANIMATIONS ── */
        .ct-reveal-in {
          opacity: 1;
          transform: translateX(0);
        }
        .ct-reveal-left {
          opacity: 0;
          transform: translateX(-50px);
        }
        .ct-reveal-right {
          opacity: 0;
          transform: translateX(50px);
        }
        .ct-img-frame,
        .ct-form-card {
          transition: opacity 0.7s ease, transform 0.7s ease,
            box-shadow 0.4s ease;
        }

        /* ── IMAGE FRAME ── */
        .ct-img-frame {
          position: relative;
          border-radius: 26px;
          box-shadow: 0 0 0 1.5px rgba(37, 99, 235, 0.12),
            0 24px 64px rgba(15, 23, 42, 0.16);
        }
        .ct-img-frame:hover {
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.45),
            0 32px 80px rgba(15, 23, 42, 0.22);
        }
        .ct-glow-ring {
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
        .ct-img-frame:hover .ct-glow-ring {
          opacity: 1;
        }
        .ct-img-inner {
          border-radius: 26px;
          overflow: hidden;
          position: relative;
          line-height: 0;
        }
        .ct-img {
          width: 100%;
          height: auto;
          object-fit: contain;
          display: block;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1),
            filter 0.5s ease;
        }
        .ct-img-frame:hover .ct-img {
          transform: scale(1.03);
          filter: brightness(1.05) saturate(1.08);
        }
        .ct-shine {
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
        .ct-img-frame:hover .ct-shine {
          transform: translateX(110%);
          transition: transform 0.65s ease;
        }
        .ct-img-badge {
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
        .ct-img-frame:hover .ct-img-badge {
          transform: translateY(0);
          opacity: 1;
        }
        .ct-corner {
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
        .ct-img-frame:hover .ct-corner {
          width: 30px;
          height: 30px;
          opacity: 1;
          border-color: rgba(99, 160, 255, 0.9);
        }
        .ct-tl {
          top: 12px;
          left: 12px;
          border-width: 2px 0 0 2px;
          border-radius: 4px 0 0 0;
        }
        .ct-tr {
          top: 12px;
          right: 12px;
          border-width: 2px 2px 0 0;
          border-radius: 0 4px 0 0;
        }
        .ct-bl {
          bottom: 12px;
          left: 12px;
          border-width: 0 0 2px 2px;
          border-radius: 0 0 0 4px;
        }
        .ct-br {
          bottom: 12px;
          right: 12px;
          border-width: 0 2px 2px 0;
          border-radius: 0 0 4px 0;
        }
        .ct-dots {
          position: absolute;
          bottom: -16px;
          right: -16px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          z-index: -1;
          pointer-events: none;
        }
        .ct-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #bfdbfe;
          opacity: 0.6;
        }
        .ct-side-info {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 20px;
        }
        .ct-info-chip {
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
        .ct-info-chip:hover {
          border-color: #93c5fd;
          box-shadow: 0 4px 16px rgba(37, 99, 235, 0.1);
          transform: translateX(4px);
        }
        .ct-chip-icon {
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
        .ct-info-chip:hover .ct-chip-icon {
          transform: scale(1.1) rotate(-5deg);
        }

        /* ── FORM CARD ── */
        .ct-form-card {
          border-radius: 28px;
          overflow: hidden;
          box-shadow: 0 8px 40px rgba(15, 23, 42, 0.12),
            0 2px 12px rgba(37, 99, 235, 0.08);
          border: 1.5px solid #e8edf5;
        }
        .ct-form-header {
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
        .ct-form-header-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .ct-hgrid-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255, 255, 255, 0.04);
        }
        .ct-form-eyebrow {
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
        .ct-form-title {
          font-size: clamp(22px, 3.5vw, 30px);
          font-weight: 800;
          color: #fff;
          line-height: 1.18;
          letter-spacing: -0.02em;
          margin: 0 0 10px;
        }
        .ct-form-title-acc {
          background: linear-gradient(90deg, #60a5fa, #bfdbfe);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ct-form-sub {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.45);
          margin: 0;
          letter-spacing: 0.03em;
        }
        .ct-form-body {
          padding: 28px 32px 32px;
          background: #fff;
        }

        /* ── FORM FIELDS ── */
        .ct-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .ct-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .ct-field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .ct-iw {
          position: relative;
          display: flex;
          align-items: center;
        }
        .ct-iw-ta {
          align-items: flex-start;
        }
        .ct-icon {
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
        .ct-icon-ta {
          top: 15px;
          transform: none;
        }
        .ct-iw:focus-within .ct-icon {
          color: #3b82f6;
        }
        .ct-input {
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
        .ct-input::placeholder {
          color: #94a3b8;
        }
        .ct-input:focus {
          border-color: #3b82f6;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
        }
        .ct-err-border {
          border-color: #f87171;
          background: #fff5f5;
        }
        .ct-textarea {
          resize: vertical;
          min-height: 120px;
        }
        .ct-ferr {
          font-size: 11.5px;
          color: #ef4444;
          margin: 0;
          padding-left: 4px;
        }
        .ct-submit {
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
        .ct-submit:hover:not(:disabled) {
          background-position: 100% 0%;
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(37, 99, 235, 0.48);
        }
        .ct-submit:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }
        .ct-submit-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
        }
        .ct-note {
          text-align: center;
          font-size: 12px;
          color: #94a3b8;
          margin: 0;
        }

        /* ── AREAS SECTION ── */
        .ct-section-eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #3b82f6;
          margin-bottom: 12px;
        }
        .ct-section-title {
          font-size: clamp(26px, 4vw, 40px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.12;
          letter-spacing: -0.025em;
          margin: 0 0 18px;
        }
        .ct-title-grad {
          background: linear-gradient(135deg, #1e3a8a, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .ct-divider {
          width: 52px;
          height: 3px;
          background: linear-gradient(90deg, #1e3a8a, #3b82f6);
          border-radius: 999px;
          margin-bottom: 20px;
        }
        .ct-section-desc {
          color: #64748b;
          font-size: 15px;
          line-height: 1.75;
          margin-bottom: 28px;
        }
        .ct-areas-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 28px;
        }
        .ct-area-chip {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #fff;
          border: 1.5px solid #e8edf5;
          border-radius: 14px;
          padding: 14px 16px;
          font-size: 15px;
          font-weight: 500;
          color: #334155;
          cursor: default;
          transition: background 0.25s, border-color 0.25s, transform 0.25s,
            box-shadow 0.25s;
        }
        .ct-area-chip:hover {
          background: #eff6ff;
          border-color: #93c5fd;
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(37, 99, 235, 0.1);
        }
        .ct-area-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1e3a8a, #3b82f6);
          flex-shrink: 0;
        }
        .ct-areas-note {
          font-size: 14px;
          color: #64748b;
          font-style: italic;
        }
        .ct-areas-link {
          color: #1e3a8a;
          font-weight: 700;
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .ct-areas-link:hover {
          color: #3b82f6;
        }

        /* ── MAP FRAME ── */
        .ct-map-frame {
          position: relative;
          border-radius: 26px;
          box-shadow: 0 0 0 1.5px rgba(37, 99, 235, 0.12),
            0 24px 64px rgba(15, 23, 42, 0.16),
            0 6px 20px rgba(37, 99, 235, 0.1);
          transition: box-shadow 0.4s ease;
        }
        .ct-map-frame:hover {
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.45),
            0 32px 80px rgba(15, 23, 42, 0.22),
            0 10px 32px rgba(37, 99, 235, 0.2);
        }
        .ct-map-glow-ring {
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
        .ct-map-frame:hover .ct-map-glow-ring {
          opacity: 1;
        }
        .ct-map-img-inner {
          border-radius: 26px;
          overflow: hidden;
          position: relative;
          line-height: 0;
        }
        .ct-map-img {
          width: 100%;
          height: auto;
          object-fit: contain;
          display: block;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1),
            filter 0.5s ease;
        }
        .ct-map-frame:hover .ct-map-img {
          transform: scale(1.03);
          filter: brightness(1.05) saturate(1.08);
        }
        .ct-map-shine {
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
        .ct-map-frame:hover .ct-map-shine {
          transform: translateX(110%);
          transition: transform 0.65s ease;
        }
        .ct-map-badge {
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
        .ct-map-frame:hover .ct-map-badge {
          transform: translateY(0);
          opacity: 1;
        }
        .ct-map-frame .ct-corner {
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
        .ct-map-frame:hover .ct-corner {
          width: 30px;
          height: 30px;
          opacity: 1;
          border-color: rgba(99, 160, 255, 0.9);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 640px) {
          .ct-row {
            grid-template-columns: 1fr;
          }
          .ct-pills {
            gap: 8px;
          }
          .ct-pill {
            font-size: 11px;
            padding: 4px 11px;
          }
          .ct-form-body {
            padding: 22px 20px 26px;
          }
          .ct-form-header {
            padding: 28px 20px 22px;
          }
          .ct-circle-1 {
            width: 200px;
            height: 200px;
            right: -40px;
          }
          .ct-circle-2 {
            width: 130px;
            height: 130px;
            right: 10px;
          }
          .ct-circle-3 {
            display: none;
          }
          .ct-areas-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 480px) {
          .ct-img-inner {
            border-radius: 18px;
          }
          .ct-form-card {
            border-radius: 20px;
          }
          .ct-map-img-inner {
            border-radius: 18px;
          }
          .ct-map-frame {
            border-radius: 20px;
          }
        }
      `}</style>
    </main>
  );
}
