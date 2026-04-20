"use client";

export default function CctvInstallation() {
  return (
    <main className="bg-white text-black pt-24">
      {/* 🔥 HERO BANNER (same as Services page) */}
      <section className="relative h-[320px] flex items-center justify-center">
        <img
          src="/images/mainbanner.jpeg"
          alt="CCTV Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <h1 className="relative text-4xl md:text-6xl font-bold text-white text-center">
          CCTV Installation Adelaide
        </h1>
      </section>

      {/* 🔥 INTRO TEXT */}
      <section className="py-14 px-6 text-center">
        <p className="max-w-3xl mx-auto text-slate-600 text-lg">
          Professional Security Camera Installation for Homes and Businesses
          across Adelaide and surrounding areas
        </p>
      </section>

      {/* 🔥 MAIN CONTENT SECTION (WHITE BACKGROUND) */}
      <section className="pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-semibold mb-8">
              Our CCTV Installation Service
            </h2>

            <p className="text-lg text-slate-600 mb-10">
              We provide complete end-to-end CCTV solutions, including
              consultation, system design, professional installation, testing,
              and after installation support.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="text-5xl">📹</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    High-Quality Cameras
                  </h3>
                  <p className="text-slate-500">
                    4K UHD resolution, colour-at-night capability, and
                    weatherproof cameras with wide-angle coverage for clear,
                    reliable monitoring.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-5xl">📱</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    Mobile App Access
                  </h3>
                  <p className="text-slate-500">
                    Monitor your property anytime, anywhere with live viewing
                    and playback access from your smartphone or computer.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="text-5xl">🛡️</div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    3-Year Warranty
                  </h3>
                  <p className="text-slate-500">
                    Comprehensive workmanship warranty with ongoing technical
                    support for complete peace of mind.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="/get-quote"
              className="mt-12 inline-block btn-gradient px-10 py-4 rounded-2xl font-semibold text-lg"
            >
              Get Free Installation Quote →
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/images/cctvinstall.jpeg"
              alt="CCTV Installation"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
