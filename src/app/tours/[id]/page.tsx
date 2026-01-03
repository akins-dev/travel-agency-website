import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TourDetailHero from "@/components/pages/tours/details/TourDetailHero";
import TourDetailContent from "@/components/pages/tours/details/TourDetailContent";
import FaqSection from "@/components/pages/home/FAQ";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Athens Top Sights",
  description:
    "A private excursion to the Acropolis, Parthenon, and the historic center of Athens.",
};

export default function TourDetailPage({ params }: { params: { id: string } }) {
    console.log({params})
  return (
    <Container className="bg-[#EAE8DF] min-h-screen selection:bg-[#2B3D25] selection:text-[#EAE8DF]">
      <Navbar />

      {/* 1. Hero Section (Title + Image) */}
      <TourDetailHero />

      {/* 2. Main Content Grid (Left: Info/Gallery, Right: Pricing) */}
      <div className="px-4 md:px-8 max-w-450 mx-auto">
        <TourDetailContent />
      </div>

      {/* 3. FAQ Section (Reused) */}
      {/* Added border-t to match the screenshot visual separation */}
      <div className="border-t border-[#2B3D25]/10">
        <FaqSection />
      </div>
    </Container>
  );
}
