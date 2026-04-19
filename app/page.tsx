import HeroSection from "@/components/HeroSection";
import QuickHighlights from "@/components/QuickHighlights";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurServices from "@/components/OurServices";
import CCTVTabs from "@/components/CCTVTabs";
import OurProcess from "@/components/OurProcess";
import Benefits from "@/components/Benefits";
import OurPartners from "@/components/OurPartners";

export default function HomePage() {
  return (
    <main className="bg-white text-black">
      <HeroSection />
      <QuickHighlights />
      <WhyChooseUs />
      <OurServices />
      <CCTVTabs />
      <OurProcess />
      <Benefits />
      <OurPartners />
    </main>
  );
}
