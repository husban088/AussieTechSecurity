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
        "Complete home security solutions with HD cameras, night vision and mobile app access.",
      image: "/images/install.jpg",
      icon: <Home size={26} />,
    },
    {
      title: "Business CCTV Installation",
      description:
        "Commercial grade security systems for offices, shops, warehouses and car parks.",
      image: "/images/buisness.jpg",
      icon: <Building2 size={26} />,
    },
    {
      title: "Camera Setup & Configuration",
      description:
        "Full setup including mobile app configuration, remote viewing and alerts.",
      image: "/images/setup.jpeg",
      icon: <Settings size={26} />,
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-black animate-on-scroll">
          Our Services
        </h2>

        <p className="text-center text-slate-500 mb-14 animate-on-scroll text-xl">
          CCTV Installation • Home & Business
        </p>

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
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 icon-circle w-16 h-16 bg-gradient-to-br from-blue-500 to-sky-500 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white">
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
