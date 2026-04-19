"use client";

import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showToast = (msg: string, type: "success" | "error" = "success") => {
    toast.custom(
      (t) => (
        <div
          className={`px-6 py-4 rounded-xl shadow-xl flex items-center gap-4 text-black ${
            type === "success" ? "bg-green-100" : "bg-red-100"
          }`}
        >
          <span>{msg}</span>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="ml-auto text-xl font-bold cursor-pointer hover:text-red-500"
          >
            ✕
          </button>
        </div>
      ),
      { duration: 4000 }
    );
  };

  const validateField = (name: string, value: string) => {
    let error = "";
    if (!value.trim()) {
      error = "Please fill this field";
    } else {
      if (name === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) error = "Invalid email address";
      }
      if (name === "phone") {
        const auPhone = /^(\+61|0)[2-9]\d{8}$/;
        if (!auPhone.test(value)) error = "Invalid Australian phone number";
      }
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    let newErrors: Record<string, string> = {};
    Object.keys(form).forEach((key) => {
      if (!form[key as keyof typeof form].trim()) {
        newErrors[key] = "Please fill this field";
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      showToast("Please fill all fields properly ❌", "error");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch(
        "https://aussie-backend-production.up.railway.app/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        showToast("Message sent successfully ✅");
        setForm({ name: "", email: "", phone: "", message: "" });
        setErrors({});
      } else {
        showToast(data.error || "Failed to send message ❌", "error");
      }
    } catch {
      showToast("Something went wrong. Please try again ❌", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      icon: <FaPhoneAlt className="text-white text-xl" />,
      label: "Phone",
      value: "0881 234 567",
    },
    {
      icon: <FaEnvelope className="text-white text-xl" />,
      label: "Email",
      value: "husbanahmad099@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt className="text-white text-xl" />,
      label: "Location",
      value: "Adelaide, Australia",
    },
  ];

  return (
    <main className="bg-slate-950 text-white pt-24">
      <Toaster position="top-right" />

      {/* HERO BANNER */}
      <section className="relative h-[350px] flex items-center justify-center">
        <img
          src="/images/mainbanner.jpeg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Contact Banner"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
        </div>
      </section>

      {/* GRADIENT SECTION */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-slate-900 text-center px-6">
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-white">
          Get in touch with our expert security team for fast support, free
          consultation, and reliable CCTV installation solutions tailored for
          your home or business in Adelaide.
          <br />
          We respond within 1-2 business hours.
        </p>
      </section>

      {/* CONTACT INFO CARDS — above form */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {contactCards.map((card, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center text-center pt-12 pb-8 px-6 rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group"
              >
                {/* Icon circle — half outside top */}
                <div
                  className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)",
                  }}
                >
                  {card.icon}
                </div>

                <p
                  className="text-xs font-semibold uppercase tracking-widest mb-1"
                  style={{
                    background:
                      "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {card.label}
                </p>
                <p className="text-slate-700 font-medium text-sm leading-relaxed">
                  {card.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + IMAGE SECTION */}
      <section className="bg-white text-black">
        <div className="max-w-6xl mx-auto px-6 bg-white rounded-3xl shadow-xl p-8 md:p-12 grid lg:grid-cols-2 gap-12">
          {/* LEFT — Image */}
          <div className="w-full h-full rounded-2xl overflow-hidden">
            <img
              src="/images/contactimg.png"
              alt="Contact"
              className=" object-contain rounded-2xl"
              onError={(e) => {
                e.currentTarget.src =
                  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800";
              }}
            />
          </div>

          {/* RIGHT — Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <h2 className="text-2xl font-semibold mb-2">Send Us a Message</h2>
            <p className="text-slate-500 text-sm mb-4">
              Fill in the form below and our team will get back to you within
              1-2 business hours.
            </p>

            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onBlur={(e) => validateField("name", e.target.value)}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="input-style"
            />
            {errors.name && <p className="error-text">{errors.name}</p>}

            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onBlur={(e) => validateField("email", e.target.value)}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="input-style"
            />
            {errors.email && <p className="error-text">{errors.email}</p>}

            <input
              type="tel"
              placeholder="Phone"
              value={form.phone}
              onBlur={(e) => validateField("phone", e.target.value)}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="input-style"
            />
            {errors.phone && <p className="error-text">{errors.phone}</p>}

            <textarea
              rows={5}
              placeholder="Message"
              value={form.message}
              onBlur={(e) => validateField("message", e.target.value)}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="input-style"
            />
            {errors.message && <p className="error-text">{errors.message}</p>}

            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-gradient w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* MAP */}
      <section className="h-[400px]">
        <iframe
          src="https://www.google.com/maps?q=Adelaide&output=embed"
          className="w-full h-full border-0"
          title="Adelaide Map"
        ></iframe>
      </section>
    </main>
  );
}
