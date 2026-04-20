"use client";
import { Home, Building2, Wrench, Settings, Shield } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Home CCTV Installation",
      desc: "Reliable home security with colour night vision cameras, HD recording, and mobile app control.",
      image: "/images/home.jpeg",
      icon: <Home size={26} />,
    },
    {
      title: "Business CCTV Installation",
      desc: "Advanced commercial security solutions featuring full-colour night vision, high-definition monitoring, and smart remote access for all business environments.",
      image: "/images/office.jpeg",
      icon: <Building2 size={26} />,
    },
    {
      title: "Camera Setup & Configuration",
      desc: "Complete setup with app connection, remote viewing, and instant alerts for easy monitoring.",
      image: "/images/setups.jpeg",
      icon: <Settings size={26} />,
    },
    {
      title: "Maintenance & Repair",
      desc: "Reliable maintenance and fast repair services for all CCTV systems.",
      image: "/images/repair.jpeg",
      icon: <Wrench size={26} />,
    },
    {
      title: "Advanced Security Systems",
      desc: "High-end smart surveillance systems with motion detection, instant alerts, and advanced monitoring capabilities.",
      image: "/images/mainbanner.jpeg",
      icon: <Shield size={26} />,
    },
  ];

  const otherServices = [
    {
      title: "Alarm Installation",
      desc: "Professional alarm systems that provide instant alerts and complete peace of mind for your home or business.",
      points: [
        "24/7 monitoring with mobile notifications",
        "Wireless and wired alarm options available",
        "Seamless integration with CCTV systems",
      ],
      image: "/images/alarm.webp",
    },
    {
      title: "Intercom Installation",
      desc: "Modern video intercom systems for secure communication at your doorstep or office entrance.",
      points: [
        "HD video with night vision camera",
        "Two-way audio and smartphone remote access",
        "Perfect for homes, apartments & offices",
      ],
      image: "/images/intercorn.jpg",
    },
    {
      title: "Data Cabling, WiFi and Network",
      desc: "High-speed data cabling and whole-home/office WiFi solutions for reliable connectivity.",
      points: [
        "Cat6 / Cat6a structured cabling",
        "Mesh WiFi systems with full coverage",
        "Network setup and performance optimization",
      ],
      image: "/images/wifi.jpeg",
    },
    {
      title: "TV Antenna Installation",
      desc: "Crystal clear digital TV reception with professional antenna installation and tuning.",
      points: [
        "Free-to-air and HD antenna setup",
        "Multi-room TV signal distribution",
        "Signal strength testing and optimization",
      ],
      image: "/images/antenna.jpeg",
    },
    {
      title: "TV Mounting And Home Theatre",
      desc: "Expert TV wall mounting and complete home theatre system installation.",
      points: [
        "Secure flat-screen TV mounting on any wall",
        "Soundbar, speakers and AV receiver setup",
        "Full home theatre configuration",
      ],
      image: "/images/mounting.jpeg",
    },
    {
      title: "Data Cabling Installation",
      desc: "Specialized structured data cabling for residential and commercial buildings.",
      points: [
        "Office and building data infrastructure",
        "POE cabling for cameras & devices",
        "Professional cable management and testing",
      ],
      image: "/images/cable.jpg",
    },
    {
      title: "Electrical Test & Tag and Fire Protection",
      desc: "Comprehensive electrical safety testing and fire protection systems installation.",
      points: [
        "Portable appliance testing (Test & Tag)",
        "Fire alarm, smoke detector & extinguisher installation",
        "Full compliance with Australian standards",
      ],
      image: "/images/electric.jpeg",
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

      {/* Existing Services Cards */}
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

                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-blue-900 via-blue-950 to-black rounded-full flex items-center justify-center shadow-lg ring-4 ring-white">
                  <div className="text-white">{service.icon}</div>
                </div>
              </div>

              <div className="pt-16 pb-8 px-6">
                <h3 className="text-xl md:text-2xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-lg text-slate-500 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== OTHER PROFESSIONAL SERVICES ==================== */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
            Other Professional Services
          </h2>

          {otherServices.map((service, index) => (
            <div key={index} className="mb-20 last:mb-0">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Text Side */}
                <div className={index % 2 === 0 ? "md:order-1" : "md:order-2"}>
                  <h3 className="text-3xl font-semibold text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <ul className="space-y-4">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-blue-600 text-2xl leading-none mt-px">
                          •
                        </span>
                        <span className="text-slate-700 text-[17px]">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image Side - FULL IMAGE WITHOUT WHITE SPACE */}
                <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                  <div className="relative w-full rounded-3xl ">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full max-h-[520px] mx-auto rounded-3xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
