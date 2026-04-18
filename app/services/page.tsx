"use client";
import { Home, Building2, Wrench, Settings, Shield } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Home CCTV Installation",
      desc: "Complete home security solutions with HD cameras, night vision and mobile app access.",
      image: "/images/install.jpg",
      icon: <Home size={26} />,
    },
    {
      title: "Business CCTV Installation",
      desc: "Commercial grade security systems for offices, shops, warehouses and car parks.",
      image: "/images/buisness.jpg",
      icon: <Building2 size={26} />,
    },
    {
      title: "Camera Setup & Configuration",
      desc: "Full setup including mobile app configuration, remote viewing and alerts.",
      image: "/images/setup.jpeg",
      icon: <Settings size={26} />,
    },
    {
      title: "Maintenance & Repair",
      desc: "Regular maintenance and fast repair services for CCTV systems.",
      image: "/images/repair.jpeg",
      icon: <Wrench size={26} />,
    },
    {
      title: "Advanced Security Systems",
      desc: "Smart surveillance systems with motion detection & 24/7 monitoring.",
      image: "/images/advance.jpg",
      icon: <Shield size={26} />,
    },
  ];

  return (
    <main className="bg-white text-black pt-24">
      {/* Hero Banner */}
      <section className="relative h-[320px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/mainbanner.jpeg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Services Banner"
        />
        <div className="absolute inset-0 bg-black/60" />
        <h1 className="relative text-4xl md:text-6xl font-bold text-white">
          Our Services
        </h1>
      </section>

      {/* Intro */}
      <section className="py-14 px-6 text-center">
        <p className="max-w-3xl mx-auto text-slate-600 text-xl">
          Professional CCTV solutions tailored for homes and businesses across
          Adelaide
        </p>
      </section>

      {/* Services Cards */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-2xl overflow-hidden text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative w-full aspect-[16/10] bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 icon-circle w-16 h-16 bg-gradient-to-br from-blue-500 to-sky-500 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white">
                  <div className="text-white">{service.icon}</div>
                </div>
              </div>

              <div className="pt-16 pb-8 px-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-lg md:text-lg text-slate-500 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
