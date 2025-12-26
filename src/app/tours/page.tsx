import ToursGrid from "@/components/pages/tours/Grid";
import ToursHero from "@/components/pages/tours/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Tours",
  description:
    "Browse our complete collection of private tours in Greece. From Athens sightseeing to Delphi, Meteora, and wheelchair-accessible excursions.",
};

export default function ToursPage() {
  return (
    <main className="bg-[#EAE8DF] min-h-screen w-full selection:bg-[#2B3D25] selection:text-[#EAE8DF]">
      <ToursHero />
      <ToursGrid />
    </main>
  );
}
