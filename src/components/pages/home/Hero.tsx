'use client';

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const title1Ref = useRef<HTMLSpanElement>(null);
  const title2Ref = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imageInsideRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    // A master timeline controls the entire choreography
    const tl = gsap.timeline({ 
      defaults: { ease: "power4.out", duration: 1.5 } 
    });

    // 1. Text reveals from the bottom of their clipping masks
    tl.fromTo([title1Ref.current, title2Ref.current], 
      { yPercent: 100 },
      { yPercent: 0, stagger: 0.15 }
    )
    
    // 2. Subtext and link gently fade up (overlaps the title animation by 1.2s)
    .fromTo(contentRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" },
      "-=1.2"
    )

    // 3. Image reveals with a smooth "curtain wipe" (clip-path) and slow scale
    .fromTo(imageRef.current,
      { clipPath: "inset(100% 0% 0% 0%)" },
      { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "power3.inOut" },
      "-=1.4"
    )
    .fromTo(imageInsideRef.current,
      { scale: 1.2 },
      { scale: 1, duration: 2, ease: "power2.out" },
      "-=1.5"
    );

  }, { scope: containerRef }); // Scoping prevents memory leaks in Next.js

  return (
    <section ref={containerRef} className="bg-[#E9E7DE] min-h-screen w-full flex flex-col font-sans">
      <Navbar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-end pb-6 md:pb-12">
        <div className="mt-12 md:mt-20 flex flex-col h-full justify-end">
          {/* TEXT CONTENT AREA */}
          <div className="w-full flex flex-col lg:flex-row lg:items-end lg:justify-between mb-8 gap-8 lg:gap-0">
            
            {/* 1. Main Title - Hidden overflow required for GSAP mask effect */}
            <div className="relative z-10 flex flex-col">
              <h1 className="text-[13vw] lg:text-[7.5rem] leading-[0.85] font-medium tracking-tighter uppercase text-[#2B3D25]">
                <span className="block overflow-hidden pb-1">
                  <span ref={title1Ref} className="block will-change-transform">
                    Armonia
                  </span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <span ref={title2Ref} className="block will-change-transform">
                    Excursions
                  </span>
                </span>
              </h1>
            </div>

            {/* 2. Description & Link Group */}
            <div ref={contentRef} className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-8 lg:pb-3 will-change-transform">
              <p className="text-sm md:text-base max-w-62.5 leading-snug font-normal text-[#2B3D25]/90">
                The most popular and trusted travel agency in Greece
              </p>

              <a
                href="/tours"
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
          <div 
            ref={imageRef}
            className="relative w-full h-[45vh] lg:h-[60vh] rounded-xl lg:rounded-3xl overflow-hidden bg-[#DCDAD2]"
          >
            <Image
              ref={imageInsideRef}
              src="/images/1.jpg"
              alt="Greek Landscape with Columns"
              fill
              className="object-cover will-change-transform"
              priority
              sizes="(max-width: 1536px) 100vw, 1536px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}