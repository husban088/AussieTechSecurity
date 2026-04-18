export default function TermsAndConditions() {
  return (
    <main className="bg-white text-black pt-27">
      {/* HERO BANNER */}
      <section className="relative h-[320px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/mainbanner.jpeg"
          alt="Terms Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <h1 className="relative text-4xl md:text-6xl font-bold text-white font-orbitron">
          Terms & Conditions
        </h1>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 md:p-12 leading-relaxed text-slate-700">
          <p className="text-sm text-slate-500 mb-8">
            Last Updated: April 2026
          </p>

          <h2 className="text-2xl font-semibold text-black mt-10 mb-4">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using our website and requesting services, you agree
            to be bound by these Terms and Conditions.
          </p>

          <h2 className="text-2xl font-semibold text-black mt-10 mb-4">
            2. Services
          </h2>
          <p>
            Aussie Tech Security provides professional CCTV installation
            services for residential and commercial properties.
          </p>

          <h2 className="text-2xl font-semibold text-black mt-10 mb-4">
            3. Quotations & Pricing
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Quotes valid for 30 days</li>
            <li>50% deposit required</li>
            <li>Final payment on completion</li>
          </ul>

          <h2 className="text-2xl font-semibold text-black mt-10 mb-4">
            4. Warranty
          </h2>
          <p>
            3 years installation warranty and manufacturer warranty varies by
            brand.
          </p>

          <h2 className="text-2xl font-semibold text-black mt-10 mb-4">
            5. Contact
          </h2>
          <p>
            Phone: 0881 234 567 <br />
            Email: info@aussietechsecurity.com.au
          </p>
        </div>
      </section>
    </main>
  );
}
