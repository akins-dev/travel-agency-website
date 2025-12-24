import AboutHero from "@/components/pages/about/Hero";
import AboutContent from "@/components/pages/about/Contents";
import AboutFooterCTA from "@/components/pages/about/Footer";
import Container from "@/components/Container";

export default function AboutPage() {
  return (
    <>
      <Container className="bg-[#EAE8DF] min-h-screen">
        <AboutHero />
        <AboutContent />
      </Container>
        <Container className="bg-[#E6E3D2]">
          <AboutFooterCTA />
        </Container>
    </>
  );
}
