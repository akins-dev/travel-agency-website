import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function TransferHero() {
  return (
    <>
      <Navbar />
      <section className="bg-[#EAE8DF] w-full pt-32 pb-16 text-[#2B3D25] font-sans overflow-hidden">
        <div className="max-w-[1800px] ">
          {/* --- TITLE GRID --- */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
            {/* Main Headline */}
            {/* CHANGED: Increased span to 9 and added whitespace-nowrap to force single line */}
            <div className="lg:col-span-9">
              <h1 className="text-[10vw] lg:text-[7rem] leading-[0.85] font-medium tracking-tight uppercase transition-all duration-700 whitespace-nowrap">
                Transfer Services
              </h1>
            </div>

            {/* Description (Right Aligned) */}
            {/* CHANGED: Reduced span to 3 to accommodate the wider title */}
            <div className="lg:col-span-3 flex justify-start lg:justify-end pb-2">
              <p className="text-sm md:text-base leading-relaxed opacity-60 max-w-72 text-left ">
                At Armonia Excursions, we combine premium service with attention
                to detail.
              </p>
            </div>
          </div>

          {/* --- CINEMATIC IMAGE --- */}
          <div className="relative w-full  h-[45vh] lg:h-[60vh] rounded-xl lg:rounded-4xl overflow-hidden bg-[#E1DFD6] group">
            <Image
              src="/images/private-car.png"
              alt="Armonia Transfer Van"
              fill
              className="object-cover mix-blend-multiply contrast-[1.05] transition-transform duration-[2s] ease-out group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay pointer-events-none" />
          </div>
        </div>
      </section>
    </>
  );
}
