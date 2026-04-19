"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function CCTVTabs() {
  const [activeTab, setActiveTab] = useState<"residential" | "commercial">(
    "residential"
  );
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => {
      el.classList.remove("visible");
      setTimeout(() => {
        el.classList.add("visible");
      }, 150);
    });
  }, [activeTab]);

  return (
    <section className="py-20 bg-[#efefef]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* BUTTONS */}
        <div className="flex justify-center gap-4 mb-14 flex-wrap">
          <button
            onClick={() => setActiveTab("residential")}
            className={`px-8 py-3 cursor-pointer rounded-full font-semibold transition ${
              activeTab === "residential"
                ? "bg-gradient-to-r from-blue-900 to-black text-white shadow-lg"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            Residential CCTV
          </button>
          <button
            onClick={() => setActiveTab("commercial")}
            className={`px-8 py-3 cursor-pointer rounded-full font-semibold transition ${
              activeTab === "commercial"
                ? "bg-gradient-to-r from-blue-900 to-black text-white shadow-lg"
                : "bg-slate-100 text-slate-700"
            }`}
          >
            Commercial CCTV
          </button>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* TEXT SIDE */}
          <div className="animate-on-scroll transition-all duration-700 opacity-0 w-full min-w-0 px-2 sm:px-0">
            {activeTab === "residential" ? (
              <>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900">
                  <span className="bg-gradient-to-r from-blue-900 via-blue-950 to-black bg-clip-text text-transparent">
                    Residential CCTV
                  </span>{" "}
                  Installation
                </h2>
                <p className="text-base sm:text-lg text-slate-600 mb-6">
                  Keep your home, family, and valuables safe with our advanced
                  CCTV solutions designed specifically for residential
                  properties.
                </p>
                <ul className="space-y-3 text-slate-600 text-sm sm:text-base">
                  <li>✅ 4K Indoor & Outdoor Cameras</li>
                  <li>✅ Full Colour at Night Options</li>
                  <li>✅ Mobile App Monitoring</li>
                  <li>✅ Smart Detection Alerts</li>
                  <li>✅ Easy Installation & Setup</li>
                </ul>
                <Link
                  href="/get-quote"
                  className="mt-8 inline-block btn-gradient px-8 py-4"
                >
                  Get Residential Quote →
                </Link>
              </>
            ) : (
              <>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-slate-900">
                  Commercial CCTV Installation
                </h2>
                <p className="text-base sm:text-lg text-slate-600 mb-6">
                  Secure your business with enterprise-level CCTV systems built
                  for offices, shops, warehouses, and large facilities.
                </p>
                <ul className="space-y-3 text-slate-600 text-sm sm:text-base">
                  <li>✅ Multi-Camera Systems</li>
                  <li>✅ License Plate Recognition</li>
                  <li>✅ Remote Viewing Access</li>
                  <li>✅ Scalable Security Setup</li>
                  <li>✅ 3-Year Warranty</li>
                </ul>
                <Link
                  href="/get-quote"
                  className="mt-8 inline-block btn-gradient px-8 py-4"
                >
                  Get Commercial Quote →
                </Link>
              </>
            )}
          </div>

          {/* IMAGE SIDE */}
          <div className="animate-on-scroll transition-all duration-700 opacity-0 translate-x-[30px] w-full min-w-0 flex justify-center px-2 sm:px-0">
            <div className="relative w-full max-w-lg rounded-3xl shadow-2xl overflow-visible">
              {/* Main Image */}
              <img
                src={
                  activeTab === "residential"
                    ? "/images/home.jpg"
                    : "/images/office.jpg"
                }
                alt="CCTV Security System"
                className="w-full h-auto rounded-3xl object-cover"
              />

              {/* Logo - Half Inside + Half Outside */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-white rounded-full shadow-xl border-4 border-white overflow-hidden z-10 flex items-center justify-center">
                <img
                  src="/images/bestpr.jpeg"
                  alt="Best PR Logo"
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ANIMATION STYLES */}
      <style jsx>{`
        .animate-on-scroll.visible {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </section>
  );
}
