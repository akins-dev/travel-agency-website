import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function AboutHero() {
  return (
    <>
        <Navbar />
      <section className="bg-[#EAE8DF] w-full px-4 md:px-8 pt-32 pb-12 text-[#2B3D25] font-sans">
        <div className="max-w-[1800px] mx-auto space-y-8">
          {/* Page Title */}
          <h1 className="text-6xl md:text-8xl font-medium tracking-tight uppercase">
            About Us
          </h1>

          {/* Hero Image */}
          <div className="relative w-full h-[50vh] md:h-[70vh] rounded-[2rem] overflow-hidden bg-[#E1DFD6]">
            <Image
              src="/images/Acropolis.png" // Acropolis placeholder
              alt="Acropolis of Athens"
              fill
              className="object-cover mix-blend-multiply contrast-[1.05]"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
