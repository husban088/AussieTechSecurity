"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function GetQuote() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "",
    cameras: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showToast = (msg: string) => {
    toast.custom(
      (t) => (
        <div className="bg-white text-black px-6 py-4 rounded-xl shadow-xl flex items-center gap-4 border border-slate-200">
          <span>{msg}</span>
          <button
            onClick={() => toast.dismiss(t.id)}
            className="ml-auto text-xl font-bold cursor-pointer hover:text-red-500"
          >
            ✕
          </button>
        </div>
      ),
      { duration: 3000 }
    );
  };

  // ✅ Ab bilkul Contact page jaisa validation
  const validateField = (name: string, value: string) => {
    let error = "";

    if (!value.trim()) {
      if (["name", "email", "phone", "propertyType"].includes(name)) {
        error = "Please fill this field";
      }
    } else {
      if (name === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) error = "Invalid email";
      }

      if (name === "phone") {
        const auPhone = /^(\+61|0)[2-9]\d{8}$/;
        if (!auPhone.test(value)) error = "Invalid AU phone number";
      }
    }

    setErrors((prev: any) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    let newErrors: any = {};
    ["name", "email", "phone", "propertyType"].forEach((field) => {
      if (!formData[field as keyof typeof formData]) {
        newErrors[field] = "Please fill this field";
      }
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
      } else {
        showToast(data.error || "Failed to send quote ❌");
      }
    } catch (error) {
      showToast("Something went wrong ❌");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white text-black pt-24">
      <Toaster position="top-right" />

      {/* HERO BANNER */}
      <section className="relative h-[350px] flex items-center justify-center">
        <img
          src="/images/mainbanner.jpeg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Get Quote Banner"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Get Your Free Quote
          </h1>
        </div>
      </section>

      {/* GRADIENT SECTION */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-slate-900 text-center px-6">
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-white">
          Professional CCTV Installation Quote in Adelaide
          <br />
          Fast Response • No Obligation • Expert Advice
        </p>
      </section>

      {/* IMAGE + FORM SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* LEFT IMAGE */}
            <div className="w-full md:w-1/2">
              <img
                src="/images/quote.png"
                alt="Quote Preview"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* RIGHT FORM */}
            <div className="w-full md:w-1/2 bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      value={formData.name}
                      onBlur={(e) => validateField("name", e.target.value)}
                      onChange={handleChange}
                      className="input-style"
                    />
                    {errors.name && <p className="error-text">{errors.name}</p>}
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone (+61 or 04...)"
                      value={formData.phone}
                      onBlur={(e) => validateField("phone", e.target.value)}
                      onChange={handleChange}
                      className="input-style"
                    />
                    {errors.phone && (
                      <p className="error-text">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onBlur={(e) => validateField("email", e.target.value)}
                    onChange={handleChange}
                    className="input-style"
                  />
                  {errors.email && <p className="error-text">{errors.email}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleChange}
                      onBlur={(e) =>
                        validateField("propertyType", e.target.value)
                      }
                      className="input-style"
                    >
                      <option value="">Select Property Type *</option>
                      <option value="Single Story">Single Story</option>
                      <option value="Double Story">Double Story</option>
                      <option value="Business">Business</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                    {errors.propertyType && (
                      <p className="error-text">{errors.propertyType}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="number"
                      name="cameras"
                      placeholder="No. of Cameras"
                      value={formData.cameras}
                      onChange={handleChange}
                      className="input-style"
                    />
                  </div>
                </div>

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Additional Message / Requirements"
                  value={formData.message}
                  onChange={handleChange}
                  className="input-style"
                />

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-gradient cursor-pointer w-full md:w-auto disabled:opacity-70"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Quote Request"}
                  </button>
                </div>

                <p className="text-center text-xs text-slate-500">
                  We will contact you within 1–2 business hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
