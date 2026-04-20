"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";

const projects = [
  {
    image: "/images/proj1.jpeg",
    title: "Residential CCTV Installation",
    description:
      "Complete Home CCTV installation in Goolwa, SA including driveway, outdoor areas and full perimeter coverage. Real time monitoring setup with high-quality Hikvision cameras installed by Aussie Tech Security.",
    location: "Goolwa, South Australia",
  },
  {
    image: "/images/proj2.jfif",
    title: "Ampol Service Station CCTV Installation",
    description:
      "Complete CCTV installation at an Ampol service station in Salisbury, SA, providing full site surveillance for pumps, entrances, and parking areas.",
    location: "Salisbury",
  },
  {
    image: "/images/proj3.jfif",
    title: "Fuel Station CCTV Installation",
    description: "CCTV Installation Completed by Aussie Tech Security.",
    location: "Seaton, Brighton",
  },
  {
    image: "/images/proj4.jfif",
    title: "United Petroleum",
    description: "CCTV Installation Completed by Aussie Tech Security.",
    location: "Glenunga",
  },
  {
    image: "/images/proj5.jfif",
    title: "Home Security Installation, Residential CCTV Installation",
    description: "CCTV Installation Completed by Aussie Tech Security.",
    location: "Angle Vale, Gawler",
  },
];

export default function OurProjects() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  // Handle navigation refs after Swiper is initialized
  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      const swiper = swiperRef.current;

      swiper.params.navigation!.prevEl = prevRef.current;
      swiper.params.navigation!.nextEl = nextRef.current;

      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADING */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-900 via-blue-950 to-black bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Real installations. Real results. Trusted by homeowners and
            businesses across Adelaide.
          </p>
        </div>

        {/* SWIPER */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop={true}
            observer={true}
            observeParents={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              480: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-4"
          >
            {projects.map((project, i) => (
              <SwiperSlide key={i} style={{ height: "auto" }}>
                <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col h-full">
                  {/* IMAGE */}
                  <div className="relative w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-auto block"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800";
                      }}
                    />

                    {/* Shine Effect */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-t-3xl">
                      <div
                        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                        style={{
                          background:
                            "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.5) 50%, transparent 65%)",
                        }}
                      />
                    </div>

                    {/* Location badge */}
                    <div
                      className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-white text-sm font-semibold"
                      style={{
                        background:
                          "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)",
                      }}
                    >
                      📍 {project.location}
                    </div>
                  </div>

                  {/* CARD BODY */}
                  <div className="p-4 sm:p-6 flex flex-col flex-1">
                    {/* Stars */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, j) => (
                        <svg
                          key={j}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400"
                          style={{
                            filter:
                              "drop-shadow(0 0 3px rgba(250, 204, 21, 0.8))",
                          }}
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>

                    <h3 className="text-lg sm:text-lg font-bold text-slate-900 mb-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-slate-500 text-lg sm:text-lg leading-relaxed flex-1">
                      {project.description}
                    </p>
                  </div>

                  {/* Bottom gradient bar */}
                  <div
                    className="h-1 w-full mt-auto"
                    style={{
                      background: "linear-gradient(to right, #1e3a8a, #0f172a)",
                    }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* CUSTOM ARROWS - Bottom Center */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              ref={prevRef}
              className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer z-10"
              style={{
                background: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)",
              }}
              aria-label="Previous project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              ref={nextRef}
              className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer z-10"
              style={{
                background: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)",
              }}
              aria-label="Next project"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>

          {/* VIEW ALL PROJECTS BUTTON */}
          <div className="flex justify-center mt-10">
            <Link
              href="/projects"
              className="px-8 py-3 rounded-full font-medium text-white hover:scale-105 transition-transform duration-300 shadow-lg"
              style={{
                background: "linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%)",
              }}
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
