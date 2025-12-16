import AboutSection from "@/components/pages/home/About";
import BenefitsSection from "@/components/pages/home/Benefits";
import CtaBanner from "@/components/pages/home/CTABanner";
import DestinationsSection from "@/components/pages/home/Destinations";
import HeroSection from "@/components/pages/home/Hero";
import MissionSection from "@/components/pages/home/Mission";
import ReviewsSection from "@/components/pages/home/Reviews";
import ServicesSection from "@/components/pages/home/Services";
import TripOptions from "@/components/pages/home/TripOptions";

export default function Home() {
  return (
    <main className="bg-[#EAE8DF]">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MissionSection />
      <DestinationsSection />
      <BenefitsSection />
      <CtaBanner />
      <TripOptions />
      <ReviewsSection />
    </main>
  );
}
