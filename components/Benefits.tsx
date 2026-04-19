"use client";

import Image from "next/image";

export default function Benefits() {
  const benefits = [
    "24/7 Surveillance & Protection",
    "Crime Prevention & Evidence Recording",
    "Remote Mobile Monitoring",
    "Peace of Mind for Family & Business",
    "Insurance Benefits",
    "High Quality Night Vision",
  ];

  return (
    <section className="bg-[#efefef] text-black py-20 px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT TEXT */}
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Benefits of{" "}
            <span className="bg-gradient-to-r from-blue-900 via-blue-950 to-black bg-clip-text text-transparent">
              CCTV Security
            </span>
          </h2>

          <ul className="space-y-4">
            {benefits.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700">
                <span className="text-green-600 text-xl">✔</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/images/what-we-image.jpg"
            alt="CCTV Benefits"
            width={800}
            height={600}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
