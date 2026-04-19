"use client";

import { Cctv, BellRing, ShieldCheck, Wrench } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

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
        {/* 👇 pt-12 diya taake icon ka upper half show ho sake */}
        <div className="relative pt-12">
          {/* 👇 Yeh style ZAROORI hai — Swiper ka overflow visible karna */}
          <style>{`
            .highlights-swiper,
            .highlights-swiper .swiper-wrapper {
              overflow: visible !important;
            }
          `}</style>

          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".highlights-prev",
              nextEl: ".highlights-next",
            }}
            loop={true}
            className="highlights-swiper"
          >
            {items.map((item, i) => (
              <SwiperSlide key={i}>
                {/* 👇 pt-12 card ke andar bhi taake icon + content sahi align ho */}
                <div className="group relative bg-white border border-slate-100 rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center pt-14 h-full">
                  {/* Icon Box — -top-9 se half bahar, half andar */}
                  <div className="absolute -top-9 left-1/2 -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 rounded-2xl flex items-center justify-center shadow-xl border-[6px] border-white z-10">
                    <div className="text-white">{item.icon}</div>
                  </div>

                  {/* Card Content */}
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-slate-900 leading-tight min-h-[3.2rem] flex items-center justify-center">
                      {item.title}
                    </h3>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-600 to-slate-700 rounded-full opacity-30 group-hover:opacity-60 transition-opacity" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-6 mt-10">
            <button
              className="highlights-prev group flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-black text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Previous highlights"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 group-active:-translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              className="highlights-next group flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-black text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Next highlights"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 group-active:translate-x-0.5 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
