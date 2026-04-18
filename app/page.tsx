import HeroSection from "@/components/HeroSection";
import QuickHighlights from "@/components/QuickHighlights";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurServices from "@/components/OurServices";
import CCTVTabs from "@/components/CCTVTabs";
import OurProcess from "@/components/OurProcess";
import Benefits from "@/components/Benefits";
import AboutContent from "@/components/AboutContent";

export default function HomePage() {
  return (
    <main className="bg-white text-black">
      <HeroSection />
      <QuickHighlights />
      <AboutContent />
      <WhyChooseUs />
      <OurServices />
      <CCTVTabs />
      <OurProcess />
      <Benefits />
    </main>
  );
}
