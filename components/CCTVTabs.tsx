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
      <div className="max-w-7xl mx-auto px-6">
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
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <div className="animate-on-scroll transition-all duration-700 opacity-0 translate-x-[-40px]">
            {activeTab === "residential" ? (
              <>
                <h2 className="text-4xl font-bold mb-6 text-slate-900 ml-10">
                  Residential CCTV Installation
                </h2>

                <p className="text-lg text-slate-600 mb-6 ml-10">
                  Keep your home, family, and valuables safe with our advanced
                  CCTV solutions designed specifically for residential
                  properties.
                </p>

                <ul className="space-y-3 text-slate-600 ml-10">
                  <li>✅ HD Indoor & Outdoor Cameras</li>
                  <li>✅ Night Vision Security</li>
                  <li>✅ Mobile App Monitoring</li>
                  <li>✅ Motion Detection Alerts</li>
                  <li>✅ Easy Installation & Setup</li>
                </ul>

                <Link
                  href="/get-quote"
                  className="mt-8 inline-block btn-gradient px-8 py-4 ml-10"
                >
                  Get Residential Quote →
                </Link>
              </>
            ) : (
              <>
                <h2 className="text-4xl font-bold mb-6 text-slate-900 ml-10">
                  Commercial CCTV Installation
                </h2>

                <p className="text-lg text-slate-600 mb-6 ml-10">
                  Secure your business with enterprise-level CCTV systems built
                  for offices, shops, warehouses, and large facilities.
                </p>

                <ul className="space-y-3 text-slate-600 ml-10">
                  <li>✅ Multi-Camera Systems</li>
                  <li>✅ License Plate Recognition</li>
                  <li>✅ Remote Viewing Access</li>
                  <li>✅ Scalable Security Setup</li>
                  <li>✅ 3-Year Warranty</li>
                </ul>

                <Link
                  href="/get-quote"
                  className="mt-8 inline-block btn-gradient px-8 py-4 ml-10"
                >
                  Get Commercial Quote →
                </Link>
              </>
            )}
          </div>

          {/* IMAGE */}
          <div className="overflow-hidden rounded-3xl shadow-2xl animate-on-scroll transition-all duration-700 opacity-0 translate-x-[40px] mr-7">
            <img
              src={
                activeTab === "residential"
                  ? "/images/home.jpg"
                  : "/images/office.jpg"
              }
              alt="CCTV Security System"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* ANIMATION */}
      <style jsx>{`
        .animate-on-scroll.visible {
          opacity: 1 !important;
          transform: translateX(0) !important;
        }
      `}</style>
    </section>
  );
}
