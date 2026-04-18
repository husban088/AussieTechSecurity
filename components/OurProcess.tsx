"use client";

import { Camera, Settings, Headphones } from "lucide-react";
import Image from "next/image";

export default function OurProcess() {
  const steps = [
    {
      title: "Consultation",
      desc: "We understand your security needs and inspect your property to recommend the best CCTV solution.",
      icon: <Camera size={26} />,
    },
    {
      title: "Installation",
      desc: "Our licensed experts install high-quality cameras with proper setup, wiring, and testing.",
      icon: <Settings size={26} />,
    },
    {
      title: "Support",
      desc: "We provide ongoing support, maintenance, and assistance whenever you need it.",
      icon: <Headphones size={26} />,
    },
  ];

  return (
    <section className="bg-white text-black py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-4xl font-bold mb-4">Our Process</h2>

          <p className="text-slate-600 mb-10">
            From consultation to installation and ongoing support — we handle
            everything professionally.
          </p>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-6 rounded-2xl border border-slate-100 shadow-md hover:shadow-lg transition"
              >
                {/* ICON */}
                <div className="min-w-[60px] h-[60px] rounded-full bg-gradient-to-br from-blue-900 to-black flex items-center justify-center text-white">
                  {step.icon}
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 gap-6">
          {/* IMAGE 1 */}
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/support-image-1.jpg"
              alt="Consultation"
              width={600}
              height={600}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* IMAGE 2 */}
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/support-image-2.jpg"
              alt="Installation"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
