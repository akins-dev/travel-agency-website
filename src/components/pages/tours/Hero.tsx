import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function ToursHero() {
  return (
    <section className="w-full text-[#2B3D25] font-sans">
      <Navbar />
      <div className="max-w-[1800px] pt-32 pb-12">
        {/* Title */}
        <h1 className="text-[10vw] lg:text-[7.5rem] leading-none font-medium tracking-tight uppercase mb-12">
          All Tours
        </h1>

        {/* Hero Image */}
        <div className="relative w-full aspect-[21/9] md:aspect-[2.4/1] rounded-xl lg:rounded-3xl overflow-hidden bg-[#E1DFD6] group">
          <Image
            src="/images/sunset.png" // Sunset coastline placeholder
            alt="Greek Coastline at Sunset"
            fill
            className="object-cover mix-blend-multiply contrast-[1.05] transition-transform duration-[2s] ease-out group-hover:scale-105"
            priority
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
