"use client"; // Important for Next.js App Router (client component)

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Replace these with your actual partner logo image paths/URLs
const partnerLogos = [
  "/images/patner1.webp",
  "/images/patner2.webp",
  "/images/patner3.webp",
  "/images/patner4.webp",
  "/images/patner5.webp",
  "/images/patner6.webp",
  "/images/patner7.webp",
  "/images/patner8.webp",
  // Add more if you have >8 logos
];

const OurPartners: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-900 via-blue-950 to-black bg-clip-text text-transparent">
              Partners
            </span>
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Trusted by leading companies worldwide
          </p>
        </div>

        {/* Swiper Slider Container */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1} // Default mobile
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 }, // Adjust if you want exactly 8 visible, but 5-6 looks cleaner for logos
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            navigation={{
              prevEl: ".custom-prev",
              nextEl: ".custom-next",
            }}
            loop={true}
            className="partners-swiper"
          >
            {partnerLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center h-28 md:h-32 bg-white rounded-2xl shadow-2xl shadow-blue-500/10 transition-all duration-300 border border-gray-100">
                  <img
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    className="max-h-20 md:max-h-24 w-auto object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows - Positioned below the slider */}
          <div className="flex justify-center gap-6 mt-10">
            <button
              className="custom-prev group flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-black text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Previous partners"
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
              className="custom-next group flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 to-black text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Next partners"
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
};

export default OurPartners;
