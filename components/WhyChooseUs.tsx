"use client";

import { useEffect, useRef } from "react";
import { ShieldCheck, DollarSign, Award, ArrowRight } from "lucide-react";

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elements = entry.target.querySelectorAll<HTMLElement>(
            ".animate-card-left, .animate-card-right, .animate-camera"
          );

          elements.forEach((el) => {
            if (entry.isIntersecting) {
              el.classList.add("animate-in");
            } else {
              el.classList.remove("animate-in");
            }
          });
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-[#efefef] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Why{" "}
            <span className="bg-gradient-to-r from-blue-900 via-blue-950 to-black bg-clip-text text-transparent">
              Choose
            </span>{" "}
            Us
          </h2>
          <p className="text-slate-500 text-xl max-w-md mx-auto">
            Professional • Affordable • Reliable
          </p>
        </div>

        {/* MAIN CONTAINER - Responsive + Arrows */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8">
          {/* ===================== LEFT CARD ===================== */}
          <div className="lg:w-1/3 w-full relative group animate-card-left">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative">
              {/* Number Badge - Dark Blue/Black Gradient */}
              <div className="absolute -top-5 -left-5 w-12 h-12 bg-gradient-to-br from-blue-600 to-slate-900 rounded-full flex items-center justify-center border-4 border-white shadow-md text-white text-2xl font-bold">
                1
              </div>

              <h3 className="text-2xl font-semibold text-slate-900 mb-3 mt-6">
                Professional
              </h3>

              <p className="text-slate-600 leading-relaxed text-[18px]">
                Fully licensed technicians with 10+ years experience.
              </p>

              {/* Round Icon - Half Inside + Half Outside + Gradient */}
              <div className="absolute -bottom-6 right-6 w-20 h-20 bg-gradient-to-br from-blue-600 to-slate-900 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white rotate-[-12deg] z-10">
                <ShieldCheck className="w-11 h-11 text-white" />
              </div>
            </div>

            {/* Arrow from Left Card to Center (only on lg+) */}
            <div className="hidden lg:block absolute top-1/2 -right-7 translate-y-[-50%] text-blue-600 z-20">
              <ArrowRight className="w-8 h-8 drop-shadow-md" />
            </div>
          </div>

          {/* ===================== CENTER CAMERA IMAGE (UPDATED - BIGGER + LUXURY) ===================== */}
          <div className="lg:w-1/3 w-full flex justify-center relative z-10 animate-camera">
            <div className="relative group">
              {/* Luxury Frame - Bigger Image + No BG Color + Premium Look */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-[10px] border-white">
                <img
                  src="/images/chooseimg.jpeg"
                  alt="Security Camera Installation"
                  className="w-full h-auto object-contain transition-all duration-500 group-hover:brightness-110"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800";
                  }}
                />
              </div>

              {/* Shine Effect - Exactly same as before */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[250%] transition-transform duration-700 pointer-events-none rounded-3xl"></div>

              {/* Decorative border - Adjusted for new bigger frame */}
              <div className="absolute -inset-10 rounded-[3rem] -z-10"></div>
            </div>
          </div>

          {/* ===================== RIGHT CARDS ===================== */}
          <div className="lg:w-1/3 w-full flex flex-col gap-10">
            {/* Right Card 1 (Top) */}
            <div className="relative group animate-card-right">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative">
                {/* Number Badge - Dark Blue/Black Gradient */}
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-gradient-to-br from-blue-600 to-slate-900 rounded-full flex items-center justify-center border-4 border-white shadow-md text-white text-2xl font-bold">
                  2
                </div>

                <h3 className="text-2xl font-semibold text-slate-900 mb-3 mt-6">
                  Affordable
                </h3>

                <p className="text-slate-600 leading-relaxed text-[18px]">
                  Best prices in Adelaide with no hidden charges.
                </p>

                {/* Round Icon - Half Inside + Half Outside + Gradient */}
                <div className="absolute -bottom-6 right-6 w-20 h-20 bg-gradient-to-br from-blue-600 to-slate-900 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white rotate-[-12deg] z-10">
                  <DollarSign className="w-11 h-11 text-white" />
                </div>
              </div>

              {/* Arrow from Right Top Card to Center (only on lg+) */}
              <div className="hidden lg:block absolute top-1/2 -left-7 translate-y-[-50%] text-blue-600 rotate-180 z-20">
                <ArrowRight className="w-8 h-8 drop-shadow-md" />
              </div>
            </div>

            {/* Right Card 2 (Bottom) */}
            <div className="relative group animate-card-right">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 relative">
                {/* Number Badge - Dark Blue/Black Gradient */}
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-gradient-to-br from-blue-600 to-slate-900 rounded-full flex items-center justify-center border-4 border-white shadow-md text-white text-2xl font-bold">
                  3
                </div>

                <h3 className="text-2xl font-semibold text-slate-900 mb-3 mt-6">
                  Reliable
                </h3>

                <p className="text-slate-600 leading-relaxed text-[18px]">
                  Ongoing support with a 3-year warranty on all installations.
                </p>

                {/* Round Icon - Half Inside + Half Outside + Gradient */}
                <div className="absolute -bottom-6 right-6 w-20 h-20 bg-gradient-to-br from-blue-600 to-slate-900 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white rotate-[-12deg] z-10">
                  <Award className="w-11 h-11 text-white" />
                </div>
              </div>

              {/* Arrow from Right Bottom Card to Center (only on lg+) */}
              <div className="hidden lg:block absolute top-1/2 -left-7 translate-y-[-50%] text-blue-600 rotate-180 z-20">
                <ArrowRight className="w-8 h-8 drop-shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ANIMATION CSS + Extra Styles - Same as before */}
      <style jsx>{`
        .animate-card-left.animate-in,
        .animate-card-right.animate-in {
          opacity: 1;
          transform: translateX(0);
        }

        .animate-camera.animate-in {
          opacity: 1;
          transform: scale(1);
        }

        /* Default animation state */
        .animate-card-left,
        .animate-card-right,
        .animate-camera {
          opacity: 0;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-card-left {
          transform: translateX(-60px);
        }

        .animate-card-right {
          transform: translateX(60px);
        }

        .animate-camera {
          transform: scale(0.85);
        }

        /* Responsive adjustments - arrows hidden on mobile/tablet */
        @media (max-width: 1024px) {
          .animate-card-left,
          .animate-card-right,
          .animate-camera {
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
