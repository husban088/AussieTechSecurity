"use client";

import { Home, Building2, Settings } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function OurServices() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const els = entry.target.querySelectorAll(
            ".animate-on-scroll, .animate-pixel"
          );

          els.forEach((el) => {
            if (entry.isIntersecting) {
              el.classList.add("visible");
            } else {
              el.classList.remove("visible");
            }
          });
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Home CCTV Installation",
      description:
        "Premium home security systems featuring full-colour night vision, ultra-clear video quality, and seamless mobile access.",
      image: "/images/home.jpeg",
      icon: <Home size={26} />,
    },
    {
      title: "Business CCTV Installation",
      description:
        "High-performance commercial CCTV systems featuring full-colour night vision, crystal-clear video, and seamless remote access for complete peace of mind.",
      image: "/images/office.jpeg",
      icon: <Building2 size={26} />,
    },
    {
      title: "Camera Setup & Configuration",
      description:
        "Complete setup with app connection, remote viewing, and instant alerts for easy monitoring.",
      image: "/images/setups.jpeg",
      icon: <Settings size={26} />,
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-center text-black mb-14 animate-on-scroll text-2xl font-bold">
          Professional{" "}
          <span className="bg-gradient-to-r from-blue-900 via-blue-950 to-black bg-clip-text text-transparent">
            CCTV Installation
          </span>{" "}
          • Homes & Businesses
        </h2>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll"
            >
              {/* IMAGE */}
              <div className="relative w-full aspect-[16/10] bg-slate-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                {/* ICON */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 icon-circle w-16 h-16 bg-gradient-to-r from-blue-900 via-blue-950 to-black rounded-full flex items-center justify-center shadow-lg ring-4 ring-white">
                  <div className="text-white">{service.icon}</div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="pt-16 pb-8 px-6 animate-on-scroll">
                <h3 className="text-xl md:text-2xl font-semibold mb-3 text-black">
                  {service.title}
                </h3>

                <p className="text-lg md:text-lg text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-14">
          <Link
            href="/services"
            className="btn-gradient px-8 py-3 rounded-full font-medium text-white hover:scale-105 transition-transform"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
