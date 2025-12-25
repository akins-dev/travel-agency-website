import Container from "@/components/Container";
import TransferContact from "@/components/pages/transfers/GetInTouch";
import TransferHero from "@/components/pages/transfers/Hero";
import TransferPricing from "@/components/pages/transfers/Pricing";


export default function TransfersPage() {
  return (
    <Container className="bg-[#EAE8DF] min-h-screen selection:bg-[#2B3D25] selection:text-[#EAE8DF]">
      <TransferHero />
      <TransferPricing />
      <TransferContact />
    </Container>
  );
}
