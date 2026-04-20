"use client";

export default function About() {
  return (
    <main className="bg-white text-black pt-24 overflow-hidden">
      {/* 🔥 HERO */}
      <section className="relative h-[320px] flex items-center justify-center">
        <img
          src="/images/mainbanner.jpeg"
          alt="About Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <h1 className="relative text-4xl md:text-6xl font-bold text-white text-center">
          About Aussie Tech Security
        </h1>
      </section>

      {/* 🔥 INTRO */}
      <section className="py-14 px-6 text-center">
        <p className="max-w-3xl mx-auto text-slate-600 text-lg">
          Your trusted local CCTV installation experts in Adelaide, South
          Australia.
        </p>
      </section>

      {/* 🔥 MAIN CONTENT */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE - CARDS */}
          <div className="space-y-8">
            {/* Card 1 */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-blue-800 to-black rounded-2xl flex items-center justify-center">
                <span className="text-3xl">🏠</span>
              </div>
              <h2 className="text-2xl font-semibold text-center mb-3">
                Who We Are
              </h2>
              <p className="text-slate-600 text-center leading-relaxed">
                Proudly locally owned and operated, we provide expert security
                solutions through our team of licensed technicians—helping
                safeguard homes and commercial properties across Adelaide.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-blue-800 to-black rounded-2xl flex items-center justify-center">
                <span className="text-3xl">📹</span>
              </div>
              <h2 className="text-2xl font-semibold text-center mb-3">
                What We Do
              </h2>
              <p className="text-slate-600 text-center leading-relaxed">
                We provide complete CCTV solutions including inspection, design,
                installation, setup, testing, and ongoing support.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all">
              <div className="w-16 h-16 mx-auto mb-5 bg-gradient-to-br from-blue-800 to-black rounded-2xl flex items-center justify-center">
                <span className="text-3xl">⭐</span>
              </div>
              <h2 className="text-2xl font-semibold text-center mb-3">
                Why Trust Us
              </h2>
              <ul className="text-slate-600 space-y-2 text-center">
                <li>✔ 10+ years experience</li>
                <li>✔ Licensed & insured technicians</li>
                <li>✔ 3-Year warranty</li>
                <li>✔ 24/7 support</li>
                <li>✔ No hidden costs</li>
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full flex flex-col gap-6">
            {/* MAIN IMAGE WRAPPER (FIXED LOGO POSITION) */}
            <div className="relative">
              {/* IMAGE */}
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about.jfif"
                  alt="Aussie Tech Security Installation"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* LOGO (HALF OUTSIDE TOP-LEFT - FIXED) */}
              <div className="absolute -top-10 -left-10">
                <div className="relative w-[110px] h-[110px] flex items-center justify-center">
                  {/* Rotating Text */}
                  <div className="absolute w-full h-full animate-spin-slow">
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <defs>
                        <path
                          id="circlePath"
                          d="M 100,100 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
                        />
                      </defs>
                      <text
                        fill="#000"
                        fontSize="18"
                        fontWeight="700"
                        letterSpacing="1.2"
                      >
                        <textPath href="#circlePath">
                          AUSSIE TECH SECURITY • CCTV EXPERTS • ADELAIDE •
                        </textPath>
                      </text>
                    </svg>
                  </div>

                  {/* CENTER LOGO */}
                  <div className="w-18 h-18 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white z-10">
                    <img
                      src="/images/footerlogo.png"
                      alt="Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM SECTION */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* 🔥 REPLACED ABOUT 3 IMAGE WITH TRUST CARD */}
              <div className="rounded-3xl p-6 bg-[#1A1A1A] text-white shadow-2xl flex flex-col justify-center">
                <div className="w-14 h-14 mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-800 to-black">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Trusted CCTV Experts
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We are trusted by hundreds of residential and commercial
                  clients across Adelaide for delivering reliable, high-quality
                  CCTV security systems with long-term support.
                </p>
              </div>

              {/* ABOUT 2 IMAGE */}
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about2.jfif"
                  alt="Our CCTV Work"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🔥 STYLES */}
      <style jsx>{`
        .animate-spin-slow {
          animation: spin 16s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </main>
  );
}
