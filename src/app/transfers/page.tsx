import Container from "@/components/Container";
import TransferContact from "@/components/pages/transfers/GetInTouch";
import TransferHero from "@/components/pages/transfers/Hero";
import TransferPricing from "@/components/pages/transfers/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transfer Services", // Browser tab will read: "Transfer Services | Armonia Excursions"
  description:
    "Book reliable airport, port, and intercity transfers in Greece. Luxury vehicles including sedans, vans, and minibuses available for day and night rates.",
  openGraph: {
    title: "Luxury Transfer Services in Athens & Greece",
    description:
      "Seamless transportation from Athens Airport (ATH), Piraeus Port, and custom destinations. Fixed pricing and professional drivers.",
    images: [
      {
        url: "/images/private-car.png", // Specific image for this page sharing
        width: 1200,
        height: 630,
        alt: "Armonia Luxury Transfer Van",
      },
    ],
  },
};

export default function TransfersPage() {
  return (
    <>
      <Container className="bg-[#EAE8DF] min-h-screen selection:bg-[#2B3D25] selection:text-[#EAE8DF]">
        <TransferHero />
        <TransferPricing />
      </Container>
      <Container className="bg-[#E2DFCE]">
        <TransferContact />
      </Container>
    </>
  );
}
