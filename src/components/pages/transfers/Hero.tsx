import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function TransferHero() {
  return (
    <>
      <Navbar />
      <section className="bg-[#EAE8DF] w-full pt-32 pb-16 text-[#2B3D25] font-sans">
        <div className="max-w-[1800px] mx-auto">
          {/* --- TITLE GRID --- */}
          {/* Matches the 'About Us' and 'Home' hero layout exactly */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            {/* Main Headline */}
            <div className="lg:col-span-8">
              <h1 className="text-[11vw] lg:text-[7.5rem] leading-[0.85] font-medium tracking-tight uppercase transition-all duration-700">
                Transfer Services
              </h1>
            </div>

            {/* Description (Right Aligned) */}
            <div className="lg:col-span-4 flex justify-start lg:justify-end pb-2">
              <p className="text-sm md:text-base leading-relaxed opacity-60 max-w-[280px] text-left lg:text-right">
                At Armonia Excursions, we combine premium service with attention
                to detail.
              </p>
            </div>
          </div>

          {/* --- CINEMATIC IMAGE --- */}
          {/* Wide aspect ratio + Rounded corners matching previous pages */}
          <div className="relative w-full aspect-[21/9] md:aspect-[2.4/1] rounded-[2rem] overflow-hidden bg-[#E1DFD6] group">
            <Image
              src="/images/private-car.png" // Van on winding road
              alt="Armonia Transfer Van"
              fill
              className="object-cover mix-blend-multiply contrast-[1.05] transition-transform duration-[2s] ease-out group-hover:scale-105"
              priority
            />
            {/* Subtle grain overlay for texture */}
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay pointer-events-none" />
          </div>
        </div>
      </section>
    </>
  );
}
