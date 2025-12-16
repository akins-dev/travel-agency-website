import AboutSection from "@/components/pages/home/About";
import BenefitsSection from "@/components/pages/home/Benefits";
import DestinationsSection from "@/components/pages/home/Destinations";
import HeroSection from "@/components/pages/home/Hero";
import MissionSection from "@/components/pages/home/Mission";
import ServicesSection from "@/components/pages/home/Services";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MissionSection />
      <DestinationsSection />
      <BenefitsSection />
    </main>
  );
}
