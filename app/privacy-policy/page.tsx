export default function PrivacyPolicy() {
  return (
    <main className="bg-white text-black pt-27">
      {/* HERO BANNER */}
      <section className="relative h-[320px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/mainbanner.jpeg"
          alt="Privacy Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <h1 className="relative text-4xl md:text-6xl font-bold text-white font-orbitron">
          Privacy Policy
        </h1>
      </section>

      {/* CONTENT */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-8 md:p-12 leading-relaxed text-slate-700">
          <p className="text-sm text-slate-500 mb-8">
            Last Updated: April 2026
          </p>

          <h2 className="text-2xl font-semibold text-black mt-10 mb-4">
            1. Introduction
          </h2>
          <p>
            We are committed to protecting your privacy and personal
            information.
          </p>

          <h2 className="text-2xl font-semibold text-black mt-10 mb-4">
            2. Information We Collect
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name, email, phone number</li>
            <li>Property details</li>
            <li>Technical data like IP address</li>
          </ul>

          <h2 className="text-2xl font-semibold text-black mt-10 mb-4">
            3. How We Use Data
          </h2>
          <p>
            We use your data to provide services, quotes, and customer support.
          </p>

          <h2 className="text-2xl font-semibold text-black mt-10 mb-4">
            4. Data Protection
          </h2>
          <p>
            We do not sell your personal data. It is only used for service
            purposes.
          </p>

          <h2 className="text-2xl font-semibold text-black mt-10 mb-4">
            5. Contact Us
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
