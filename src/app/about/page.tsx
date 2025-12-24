import AboutHero from "@/components/pages/about/Hero";
import AboutContent from "@/components/pages/about/Contents";
import AboutFooterCTA from "@/components/pages/about/Footer";

export default function AboutPage() {
  return (
    <main className="bg-[#EAE8DF] min-h-screen">
      <AboutHero />
      <AboutContent />
      <AboutFooterCTA />
    </main>
  );
}
