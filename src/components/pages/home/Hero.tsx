import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Hero() {
  return (
    // The background color is applied here to the full width
    <section className="bg-[#E9E7DE] min-h-screen w-full flex flex-col font-sans">
      {/* Navbar sits inside the section flow */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-end pb-6 md:pb-12">
        <div className="mt-12 md:mt-20 flex flex-col h-full justify-end">
          {/* TEXT CONTENT AREA */}
          <div className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 gap-8 lg:gap-0">
            {/* 1. Main Title */}
            <div className="relative z-10">
              <h1 className="text-[13vw] lg:text-[7.5rem] leading-[0.85] font-medium tracking-tighter uppercase text-[#2B3D25]">
                <span className="block">Armonia</span>
                <span className="block">Excursions</span>
              </h1>
            </div>

            {/* 2. Description & Link Group */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-16 lg:pb-3">
              <p className="text-sm md:text-base max-w-[250px] leading-snug font-normal text-[#2B3D25]/90">
                The most popular and trusted travel agency in Greece
              </p>

              <a
                href="#"
                className="group flex items-center gap-1 text-xs font-semibold uppercase tracking-wider underline-offset-4 decoration-[#2B3D25]/30 hover:decoration-[#2B3D25]"
              >
                <span className="border-b border-[#2B3D25]/30 group-hover:border-[#2B3D25] transition-colors pb-0.5 text-[#2B3D25]">
                  Explore Destinations
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#2B3D25] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative w-full h-[45vh] lg:h-[60vh] rounded-xl lg:rounded-4xl overflow-hidden bg-[#DCDAD2]">
            <Image
              src="/images/1.jpg"
              alt="Greek Landscape with Columns"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1536px) 100vw, 1536px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
