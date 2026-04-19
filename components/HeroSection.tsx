"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSection() {
  const slides = [
    { image: "/images/hero1.png" },
    { image: "/images/hero2.png" },
    { image: "/images/hero3.png" },
  ];

  const handleCallNow = () => {
    window.open("https://wa.me/61494149690", "_blank");
  };

  return (
    <section className="w-full pt-29 overflow-hidden bg-black">
      {/* ===== HERO SLIDER ===== */}
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        loop={true}
        speed={1200}
        className="w-full heroSwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full relative bg-black">
              <img
                src={slide.image}
                alt={`slide-${index}`}
                className="w-full h-auto block mx-auto"
                style={{
                  maxHeight: "100vh",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ===== CTA SECTION BELOW BANNER ===== */}
      <div className="w-full bg-gradient-to-r from-blue-950 via-black to-blue-900 py-6 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* CALL NOW BUTTON */}
          <button
            onClick={handleCallNow}
            className="call-now-btn w-full sm:w-auto text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-white"
          >
            📞 Call Now
          </button>

          {/* GET QUOTE BUTTON */}
          <a
            href="/contact"
            className="get-quote-btn w-full sm:w-auto text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-white"
          >
            Get Quote
          </a>
        </div>
      </div>

      {/* ===== BUTTON STYLES (Exactly same as your first file) ===== */}
      <style jsx>{`
        /* ---- CALL NOW: pulsating white glow ---- */
        .call-now-btn {
          background-color: #16a34a;
          box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
          animation: pulseWhite 2s infinite;
        }

        @keyframes pulseWhite {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7),
              0 0 12px 4px rgba(255, 255, 255, 0.4);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(255, 255, 255, 0),
              0 0 24px 8px rgba(255, 255, 255, 0.15);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0),
              0 0 12px 4px rgba(255, 255, 255, 0.4);
          }
        }

        .call-now-btn:hover {
          background-color: #000000;
          box-shadow: 0 0 20px 8px rgba(0, 0, 0, 0.8),
            0 4px 15px rgba(0, 0, 0, 0.9);
          animation: none;
        }

        /* ---- GET QUOTE: shimmer shining ---- */
        .get-quote-btn {
          background-color: #1e3a8a;
          position: relative;
          overflow: hidden;
          box-shadow: 0 0 14px 4px rgba(59, 130, 246, 0.5),
            inset 0 0 10px rgba(147, 197, 253, 0.1);
        }

        .get-quote-btn::before {
          content: "";
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255, 255, 255, 0.25) 50%,
            transparent 100%
          );
          animation: shimmer 2.5s infinite;
        }

        @keyframes shimmer {
          0% {
            left: -75%;
          }
          100% {
            left: 125%;
          }
        }

        .get-quote-btn:hover {
          background-color: #ffffff;
          color: #1e3a8a;
          box-shadow: 0 0 20px 8px rgba(255, 255, 255, 0.7),
            0 4px 15px rgba(255, 255, 255, 0.5);
        }

        .get-quote-btn:hover::before {
          animation: none;
        }
      `}</style>
    </section>
  );
}
