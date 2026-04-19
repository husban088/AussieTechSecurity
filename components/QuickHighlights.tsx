"use client";

import { Cctv, BellRing, ShieldCheck, Wrench } from "lucide-react";

export default function QuickHighlights() {
  const items = [
    {
      title: "Premium Cameras Options",
      icon: <Cctv size={32} />,
    },
    {
      title: "24/7 Quick Alarm Response",
      icon: <BellRing size={32} />,
    },
    {
      title: "Advanced Security Systems",
      icon: <ShieldCheck size={32} />,
    },
    {
      title: "Reliable CCTV Installation & Support",
      icon: <Wrench size={32} />,
    },
  ];

  return (
    <section className="bg-white text-black py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Extra top space for icon to show outside */}
        <div className="relative pt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {items.map((item, i) => (
              <div
                key={i}
                className="group relative bg-white border border-slate-100 rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center pt-16 h-full overflow-visible"
              >
                {/* Icon - Half Outside + Half Inside */}
                <div className="absolute -top-9 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 rounded-2xl flex items-center justify-center shadow-xl border-[6px] border-white z-10">
                  <div className="text-white">{item.icon}</div>
                </div>

                {/* Card Content */}
                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-slate-900 leading-tight min-h-[3.2rem] flex items-center justify-center">
                    {item.title}
                  </h3>
                </div>

                {/* Subtle bottom accent */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-600 to-slate-700 rounded-full opacity-30 group-hover:opacity-60 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
