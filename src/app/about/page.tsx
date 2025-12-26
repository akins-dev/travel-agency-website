import AboutHero from "@/components/pages/about/Hero";
import AboutContent from "@/components/pages/about/Contents";
import AboutFooterCTA from "@/components/pages/about/Footer";
import Container from "@/components/Container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us", // Browser tab will read: "About Us | Armonia Excursions"
  description:
    "Learn about Armonia Excursions. Our mission is to make every journey comfortable, seamless, and memorable with experienced guides and accessible vehicles.",
  openGraph: {
    title: "About Armonia Excursions | Our Team & Mission",
    description:
      "Driven by a passion for hospitality and a deep love for Greece. Meet the team dedicated to your comfort and safety.",
  },
};

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
