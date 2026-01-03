import Image from "next/image";
import { Clock, Accessibility } from "lucide-react";

export default function TourDetailHero() {
  return (
    <section className="w-full pt-32 pb-12 text-[#2B3D25] font-sans">
      <div className="max-w-[1800px] mx-auto">
        {/* 1. Title */}
        <h1 className="text-[10vw] lg:text-[7.5rem] leading-[0.85] font-medium tracking-tight uppercase mb-12">
          Athens: Top Sights
        </h1>

        {/* 2. Hero Image */}
        <div className="relative w-full aspect-[21/9] md:aspect-[2.4/1] rounded-xl lg:rounded-3xl overflow-hidden bg-[#E1DFD6] group mb-12">
          <Image
            src="/images/athens.png"
            alt="Athens Top Sights"
            fill
            className="object-cover mix-blend-multiply contrast-[1.05] transition-transform duration-[2s] ease-out group-hover:scale-105"
            priority
          />
        </div>

        {/* 3. Badges Row */}
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#2B3D25]/10 bg-[#EAE8DF]">
            <Clock className="w-4 h-4 opacity-60" />
            <span className="text-xs font-bold uppercase tracking-widest opacity-80">
              5-6 Hours
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#2B3D25]/10 bg-[#EAE8DF]">
            <Accessibility className="w-4 h-4 opacity-60" />
            <span className="text-xs font-bold uppercase tracking-widest opacity-80">
              Wheelchair Accessible
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
