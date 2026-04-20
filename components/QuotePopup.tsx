"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { X, Shield, ChevronRight } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

type FormData = {
  name: string;
  phone: string;
  email: string;
  propertyType: string;
  cameras: string;
  message: string;
};

const INITIAL_FORM: FormData = {
  name: "",
  phone: "",
  email: "",
  propertyType: "",
  cameras: "",
  message: "",
};

export default function QuotePopup() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const overlayRef = useRef<HTMLDivElement>(null);

  /* ─── Sirf home page pe open ho — page load hote hi foran ─── */
  useEffect(() => {
    if (!isHomePage) return; // baqi pages pe bilkul na khule
    setVisible(true);
    const t = setTimeout(() => setOpen(true), 30); // sirf animation ke liye micro-tick
    return () => clearTimeout(t);
  }, [isHomePage]);

  /* ─── Body scroll lock / unlock with position restore ─── */
  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [open]);

  /* Smooth close */
  const handleClose = useCallback(() => {
    setOpen(false);
    setTimeout(() => setVisible(false), 500);
  }, []);

  /* Outside click — only overlay element itself, not children */
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) handleClose();
  };

  /* Escape key */
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [handleClose]);

  /* Validation */
  const validateField = (name: string, value: string) => {
    let error = "";
    const required = ["name", "email", "phone", "propertyType"];
    if (!value.trim() && required.includes(name)) {
      error = "Please fill this field";
    } else if (name === "email" && value.trim()) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Invalid email";
    } else if (name === "phone" && value.trim()) {
      if (!/^(\+61|0)[2-9]\d{8}$/.test(value))
        error = "Invalid AU phone number";
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  /* Toast */
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

  /* Submit */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors: Partial<FormData> = {};
    (["name", "email", "phone", "propertyType"] as (keyof FormData)[]).forEach(
      (f) => {
        if (!formData[f]) newErrors[f] = "Please fill this field";
      }
    );

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
        setFormData(INITIAL_FORM);
        setErrors({});
        handleClose();
      } else {
        showToast(data.error || "Failed to send quote ❌");
      }
    } catch {
      showToast("Something went wrong ❌");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isHomePage || !visible) return null;

  return (
    <>
      <Toaster position="top-right" />

      {/* OVERLAY */}
      <div
        ref={overlayRef}
        onClick={handleOverlayClick}
        className={`qp-overlay${open ? " qp-overlay--in" : ""}`}
        aria-modal="true"
        role="dialog"
        aria-label="Get a Free Quote"
      >
        {/* MODAL CARD — stopPropagation NOT needed; overlay check handles it */}
        <div className={`qp-card${open ? " qp-card--in" : ""}`}>
          {/* CLOSE BUTTON */}
          <button
            onClick={handleClose}
            aria-label="Close popup"
            className="qp-close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* HEADER */}
          <div className="qp-header">
            <div aria-hidden="true" className="qp-grid">
              {Array.from({ length: 7 }).map((_, i) => (
                <span
                  key={i}
                  className="qp-grid-line"
                  style={{ left: `${i * 17}%` }}
                />
              ))}
            </div>

            <div className="qp-badge">
              <Shield className="w-3.5 h-3.5" />
              Adelaide&apos;s #1 CCTV Specialists
            </div>

            <h2 className="qp-title">
              Secure Your Space —
              <br />
              <span className="qp-title-accent">Get a Free Quote Today</span>
            </h2>

            <p className="qp-subtitle">
              Fast Response &nbsp;·&nbsp; No Obligation &nbsp;·&nbsp; Expert
              Advice
            </p>
          </div>

          {/* FORM BODY */}
          <div className="qp-body">
            <form onSubmit={handleSubmit} noValidate className="qp-form">
              {/* Row 1 */}
              <div className="qp-row">
                <div className="qp-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={(e) => validateField("name", e.target.value)}
                    className={`qp-input${errors.name ? " qp-input--err" : ""}`}
                  />
                  {errors.name && <p className="qp-err">{errors.name}</p>}
                </div>
                <div className="qp-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone (+61 or 04...)"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={(e) => validateField("phone", e.target.value)}
                    className={`qp-input${
                      errors.phone ? " qp-input--err" : ""
                    }`}
                  />
                  {errors.phone && <p className="qp-err">{errors.phone}</p>}
                </div>
              </div>

              {/* Email */}
              <div className="qp-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={(e) => validateField("email", e.target.value)}
                  className={`qp-input${errors.email ? " qp-input--err" : ""}`}
                />
                {errors.email && <p className="qp-err">{errors.email}</p>}
              </div>

              {/* Row 2 */}
              <div className="qp-row">
                <div className="qp-group">
                  <select
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    onBlur={(e) =>
                      validateField("propertyType", e.target.value)
                    }
                    className={`qp-input qp-select${
                      errors.propertyType ? " qp-input--err" : ""
                    }`}
                  >
                    <option value="">Select Property Type *</option>
                    <option value="Single Story">Single Story</option>
                    <option value="Double Story">Double Story</option>
                    <option value="Business">Business</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                  {errors.propertyType && (
                    <p className="qp-err">{errors.propertyType}</p>
                  )}
                </div>
                <div className="qp-group">
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
                    className="qp-input"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="qp-group">
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Additional Message / Requirements"
                  value={formData.message}
                  onChange={handleChange}
                  className="qp-input qp-textarea"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="qp-submit"
              >
                <span className="qp-submit-inner">
                  {isSubmitting ? (
                    "Submitting…"
                  ) : (
                    <>
                      Submit Quote Request <ChevronRight className="w-5 h-5" />
                    </>
                  )}
                </span>
              </button>

              <p className="qp-note">We will contact you shortly. Thank you!</p>
            </form>
          </div>
        </div>
      </div>

      {/* ─── STYLES ─── */}
      <style jsx>{`
        /* OVERLAY */
        .qp-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 16px;
          /* overlay ka scroll — popup khud scroll karta hai chhoti screen pe */
          overflow-y: auto;
          overflow-x: hidden;
          background: rgba(5, 10, 30, 0);
          backdrop-filter: blur(0px);
          -webkit-backdrop-filter: blur(0px);
          transition: background 0.35s ease, backdrop-filter 0.35s ease;
        }
        .qp-overlay--in {
          background: rgba(5, 10, 30, 0.75);
          backdrop-filter: blur(7px);
          -webkit-backdrop-filter: blur(7px);
        }

        /* CARD */
        .qp-card {
          position: relative;
          width: 100%;
          max-width: 680px;
          border-radius: 28px;
          overflow: hidden;
          background: #ffffff;
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.08),
            0 40px 100px rgba(5, 10, 40, 0.55),
            0 8px 30px rgba(37, 99, 235, 0.18);
          /* entry state */
          opacity: 0;
          transform: translateY(40px) scale(0.95);
          transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1),
            transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
          /* critical: prevent clicks on card from reaching overlay */
          pointer-events: auto;
          margin: auto;
        }
        .qp-card--in {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        /* CLOSE BUTTON */
        .qp-close {
          position: absolute;
          top: 15px;
          right: 15px;
          z-index: 20;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.25s, border-color 0.25s, transform 0.3s;
          backdrop-filter: blur(4px);
        }
        .qp-close:hover {
          background: rgba(255, 255, 255, 0.22);
          border-color: rgba(255, 255, 255, 0.55);
          transform: rotate(90deg);
        }

        /* HEADER */
        .qp-header {
          position: relative;
          padding: 40px 36px 30px;
          background: linear-gradient(
            135deg,
            #0f172a 0%,
            #1e3a8a 60%,
            #0f172a 100%
          );
          overflow: hidden;
        }

        /* Decorative grid lines */
        .qp-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .qp-grid-line {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 1px;
          background: rgba(255, 255, 255, 0.045);
        }

        /* Badge */
        .qp-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(59, 130, 246, 0.18);
          border: 1px solid rgba(59, 130, 246, 0.38);
          color: #93c5fd;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 999px;
          margin-bottom: 18px;
        }

        /* Title */
        .qp-title {
          font-size: clamp(20px, 4vw, 28px);
          font-weight: 800;
          color: #fff;
          line-height: 1.22;
          letter-spacing: -0.02em;
          margin: 0 0 10px;
        }
        .qp-title-accent {
          background: linear-gradient(90deg, #60a5fa, #bfdbfe);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Subtitle */
        .qp-subtitle {
          font-size: 12.5px;
          color: rgba(255, 255, 255, 0.48);
          letter-spacing: 0.05em;
          margin: 0;
        }

        /* BODY */
        .qp-body {
          padding: 28px 36px 36px;
          background: #fff;
        }

        /* FORM */
        .qp-form {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .qp-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .qp-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        /* INPUTS */
        .qp-input {
          width: 100%;
          padding: 13px 16px;
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
        .qp-input::placeholder {
          color: #94a3b8;
        }
        .qp-input:focus {
          border-color: #3b82f6;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.12);
        }
        .qp-input--err {
          border-color: #f87171;
          background: #fff5f5;
        }
        .qp-select {
          appearance: none;
          cursor: pointer;
        }
        .qp-textarea {
          resize: vertical;
          min-height: 88px;
        }

        .qp-err {
          font-size: 11.5px;
          color: #ef4444;
          margin: 0;
          padding-left: 4px;
        }

        /* SUBMIT */
        .qp-submit {
          width: 100%;
          padding: 15px 24px;
          border-radius: 14px;
          border: none;
          background: linear-gradient(
            135deg,
            #1e3a8a 0%,
            #2563eb 50%,
            #1e3a8a 100%
          );
          background-size: 200% 100%;
          background-position: 0% 0%;
          color: #fff;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.03em;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(37, 99, 235, 0.35);
          transition: background-position 0.4s ease, transform 0.2s,
            box-shadow 0.3s;
          margin-top: 4px;
          font-family: inherit;
        }
        .qp-submit:hover:not(:disabled) {
          background-position: 100% 0%;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(37, 99, 235, 0.45);
        }
        .qp-submit:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .qp-submit-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .qp-note {
          text-align: center;
          font-size: 12px;
          color: #94a3b8;
          margin: 0;
        }

        /* RESPONSIVE */
        @media (max-width: 600px) {
          .qp-overlay {
            padding: 12px;
            align-items: flex-start;
          }
          .qp-header {
            padding: 32px 20px 24px;
          }
          .qp-body {
            padding: 22px 20px 28px;
          }
          .qp-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 380px) {
          .qp-card {
            border-radius: 20px;
          }
          .qp-header {
            padding: 26px 14px 20px;
          }
          .qp-body {
            padding: 18px 14px 22px;
          }
          .qp-title {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  );
}
