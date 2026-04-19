"use client";

export default function OtherServicesSections() {
  const services = [
    {
      title: "Alarm Installation",
      image: "/images/alarm.jpg",
      points: [
        "Advanced alarm systems for home and business security",
        "Motion sensors and intrusion detection",
        "Instant mobile alerts and siren activation",
        "Professional installation with full setup",
      ],
    },
    {
      title: "Intercom Installation",
      image: "/images/intercom.jpg",
      points: [
        "Audio & video intercom systems",
        "Secure communication for homes and offices",
        "Remote door access control",
        "Clear HD video with night vision support",
      ],
    },
    {
      title: "Data Cabling, WiFi and Network",
      image: "/images/network.jpg",
      points: [
        "Structured data cabling solutions",
        "High-speed WiFi setup and optimization",
        "Network configuration for homes & offices",
        "Reliable and secure connectivity",
      ],
    },
    {
      title: "TV Antenna Installation",
      image: "/images/antenna.jpg",
      points: [
        "Digital TV antenna setup",
        "Strong signal reception installation",
        "Wall and roof mounting options",
        "Crystal clear HD channel access",
      ],
    },
    {
      title: "TV Mounting And Home Theatre",
      image: "/images/tv.jpg",
      points: [
        "Wall mounting for all TV sizes",
        "Clean cable management setup",
        "Home theatre system installation",
        "Perfect viewing angle optimization",
      ],
    },
    {
      title: "Data Cabling Installation",
      image: "/images/cabling.jpg",
      points: [
        "Professional Ethernet cable installation",
        "Office and home structured wiring",
        "Secure and organized cable layout",
        "Future-ready network infrastructure",
      ],
    },
    {
      title: "Electrical Test & Tag and Fire Protection",
      image: "/images/fire.jpg",
      points: [
        "Electrical safety testing and tagging",
        "Fire alarm system installation",
        "Compliance with safety standards",
        "Routine inspection and maintenance",
      ],
    },
  ];

  return (
    <section className="bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">
        {services.map((service, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-10 items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <div className="w-full">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-auto object-contain rounded-2xl shadow-lg"
              />
            </div>

            {/* TEXT */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                {service.title}
              </h2>

              <ul className="space-y-3 text-slate-600 text-lg">
                {service.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-blue-500 font-bold">✔</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
