'use client';

import { useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, Star, MapPin } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register the ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Refs for specific elements to animate
  const leftImageContainerRef = useRef<HTMLDivElement>(null);
  const leftImageRef = useRef<HTMLImageElement>(null);
  const rightImageContainerRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLImageElement>(null);
  const textGroupRef = useRef<HTMLDivElement>(null);
  const featuresGroupRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // Animation starts when top of section hits 80% of viewport height
        end: "bottom 20%",
        toggleActions: "play none none reverse", // Plays on enter, reverses on leave
      },
      defaults: { ease: "power3.out", duration: 1.2 }
    });

    // 1. Images Reveal (Simultaneous "Curtain" Effect)
    // Left Image wipes from top-left, Right Image wipes from bottom-right
    tl.fromTo(leftImageContainerRef.current,
      { clipPath: "inset(0% 100% 0% 0%)" }, // Hidden (masked from right)
      { clipPath: "inset(0% 0% 0% 0%)" }
    )
    .fromTo(rightImageContainerRef.current,
      { clipPath: "inset(100% 0% 0% 0%)" }, // Hidden (masked from bottom)
      { clipPath: "inset(0% 0% 0% 0%)" },
      "<" // Start at same time as left image
    )
    
    // 2. Inner Image Scale (The "Ken Burns" effect inside the mask)
    .fromTo([leftImageRef.current, rightImageRef.current],
      { scale: 1.3 },
      { scale: 1, duration: 1.8 },
      "<"
    )

    // 3. Main Text Content (Staggers in while images are still settling)
    .fromTo(textGroupRef.current?.children || [], 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 1 },
      "-=1.0" // Overlap by 1 second
    )

    // 4. "Why Choose Us" Features (Slide up + Border Expand)
    .fromTo(featuresGroupRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 },
      "-=0.8"
    );

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="bg-[#EAE8DF] w-full py-20 text-[#2B3D25] font-sans overflow-hidden">
      {/* MASTER GRID: 12 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 w-full mx-auto">
        
        {/* --- LEFT COLUMN GROUP (Spans 8 cols) --- */}
        <div className="lg:col-span-8 flex flex-col gap-16">
          {/* 1. TOP ROW: Image + Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-start">
            
            {/* Left: Square Image (Meteora) */}
            <div 
              ref={leftImageContainerRef}
              className="relative aspect-square w-full rounded-xl lg:rounded-3xl overflow-hidden bg-[#E6E3D2] will-change-transform"
            >
              <Image
                ref={leftImageRef}
                src="/images/Meteora-Rocks.jpg"
                alt="Meteora Rocks"
                fill
                className="object-cover mix-blend-multiply hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Right: Text Content */}
            <div 
              ref={textGroupRef}
              className="flex flex-col justify-between h-full py-2"
            >
              <div className="space-y-6">
                {/* Label */}
                <div className="flex items-center gap-2 opacity-60">
                  <Star className="w-3 h-3 fill-current" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    About Us
                  </span>
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl leading-[1.1] font-medium tracking-tight">
                  The Highest Level of Comfort, Convenience and Service
                </h2>

                {/* Paragraph */}
                <p className="text-sm md:text-[15px] leading-relaxed opacity-70 max-w-sm">
                  At Armonia Excursions, we combine premium service with
                  attention to detail. Whether it&apos;s a private journey
                  tailored just for you, a shared group experience, or a
                  seamless transfer – we take care of everything, so you can
                  enjoy every moment.
                </p>
              </div>

              {/* Link */}
              <a
                href="/about"
                className="group inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide mt-8 border-b border-[#2B3D25]/30 pb-0.5 hover:border-[#2B3D25] w-fit transition-colors"
              >
                More About Us
                <ArrowUpRight
                  strokeWidth={1.5}
                  className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>

          {/* 2. BOTTOM ROW: Why Choose Us (Nested Grid) */}
          <div ref={featuresGroupRef} className="space-y-8 will-change-transform">
            <h3 className="text-xl md:text-2xl font-medium">Why Choose Us?</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
              {/* Feature 1 */}
              <div className="border-t border-[#2B3D25]/20 pt-6 flex justify-between items-start gap-4">
                <div className="space-y-2 max-w-50">
                  <h4 className="text-sm font-semibold">Professional team</h4>
                  <p className="text-xs leading-relaxed opacity-60">
                    With years of experience in tourism, making sure you enjoy
                    every moment.
                  </p>
                </div>
                <Star
                  strokeWidth={1.5}
                  className="w-5 h-5 opacity-40 shrink-0"
                />
              </div>

              {/* Feature 2 */}
              <div className="border-t border-[#2B3D25]/20 pt-6 flex justify-between items-start gap-4">
                <div className="space-y-2 max-w-55">
                  <h4 className="text-sm font-semibold">Flexibility</h4>
                  <p className="text-xs leading-relaxed opacity-60">
                    From historic landmarks to airports and ports – we take you
                    where you need to go.
                  </p>
                </div>
                <MapPin
                  strokeWidth={1.5}
                  className="w-5 h-5 opacity-40 shrink-0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN (Spans 4 cols, Full Height) --- */}
        <div className="lg:col-span-4 h-full hidden lg:block">
          <div 
            ref={rightImageContainerRef}
            className="relative h-full w-full rounded-xl lg:rounded-3xl overflow-hidden bg-[#E6E3D2] min-h-150 will-change-transform"
          >
            <Image
              ref={rightImageRef}
              src="/images/Ancient-Greek-Columns.jpg"
              alt="Ancient Greek Columns"
              fill
              className="object-cover mix-blend-multiply hover:scale-105 transition-transform duration-1000"
            />
          </div>
        </div>
      </div>
    </section>
  );
}