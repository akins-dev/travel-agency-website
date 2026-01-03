"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Clock,
  ChevronLeft,
  ChevronRight,
  Flame,
  Accessibility,
} from "lucide-react";
import BookTourModal from "@/components/BookTourModal";

// --- DATA ---
const destinations = [
  {
    id: 1,
    title: "Athens: Top Sights",
    image: "/images/athens.png",
    duration: "5-6 hours",
    description: "Explore Athens' ancient landmarks and vibrant city center.",
    accessible: true,
  },
  {
    id: 2,
    title: "Corinthos Canal & Argolis",
    image: "/images/Corinthos.png",
    duration: "11 hours",
    description: "Travel back in time on this day tour to the Corinth Canal.",
    accessible: true,
  },
  {
    id: 3,
    title: "Sounion & Vouliagmeni Lake",
    image: "/images/Sounion.png",
    duration: "4-5 hours",
    description: "Visit the Athens Riviera and breathtaking Vouliagmeni Lake.",
    accessible: true,
  },
  {
    id: 4,
    title: "Meteora & Thermopylae",
    image: "/images/1.jpg",
    duration: "4-5 hours",
    description:
      "Discover breathtaking monasteries and ancient rock formations.",
    accessible: false,
  },
  {
    id: 5,
    title: "Mycenae & Epidaurus",
    image: "/images/Mycenae.png",
    duration: "10 hours",
    description: "Visit the kingdom of Agamemnon and the ancient theater.",
    accessible: false,
  },
];

export default function DestinationsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const handleBookClick = (tourTitle: string) => {
    setSelectedTour(tourTitle);
    setIsModalOpen(true);
  };

  // Manual Navigation Logic
  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 350; // Approx card width
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#EAE8DF] w-full py-20 text-[#2B3D25] font-sans overflow-hidden">
      {/* --- CSS FOR INFINITE SCROLL & HIDING SCROLLBAR --- */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        /* The Infinite Animation */
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          } /* Move half way (the length of original list) */
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
          width: max-content; /* Force container to fit all items */
        }
        /* Pause on Hover */
        .group:hover .animate-infinite-scroll {
          animation-play-state: paused;
        }
      `}</style>

      <BookTourModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tourTitle={selectedTour}
      />

      {/* --- HEADER --- */}
      <div className="max-w-[1800px] mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 px-4 md:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2 opacity-60">
            <Flame className="w-3 h-3 fill-current" />
            <span className="text-xs font-bold uppercase tracking-widest">
              Must-See
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
              Explore popular destinations
            </h2>
            <Link
              href="/tours"
              className="group inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide border-b border-[#2B3D25]/30 pb-0.5 hover:border-[#2B3D25] transition-colors"
            >
              View All Tours
              <ArrowUpRight
                strokeWidth={1.5}
                className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Buttons (Optional since it auto-scrolls, but kept for manual control) */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-[#2B3D25]/20 flex items-center justify-center hover:bg-[#2B3D25]/5 transition-colors active:scale-95 z-10 bg-[#EAE8DF]"
          >
            <ChevronLeft strokeWidth={1.5} className="w-6 h-6 opacity-70" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full bg-[#2B3D25] text-[#EAE8DF] flex items-center justify-center hover:bg-opacity-90 transition-colors active:scale-95 z-10"
          >
            <ChevronRight strokeWidth={1.5} className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* --- INFINITE SLIDER --- */}
      {/* - 'group' class on parent allows pausing animation on hover
         - 'scrollbar-hide' removes the visible bar
         - 'overflow-x-auto' allows manual scrolling via touch/buttons if needed
      */}
      <div
        ref={containerRef}
        className="w-full overflow-x-auto scrollbar-hide group"
      >
        <div className="flex gap-6 animate-infinite-scroll pl-4 md:pl-8">
          {/* We render the list TWICE to create the seamless loop effect */}
          {[...destinations, ...destinations, ...destinations].map(
            (item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="w-[85vw] md:w-[45vw] lg:w-[320px] shrink-0 bg-[#F4F3EF] p-2 rounded-[1.5rem] flex flex-col group/card hover:-translate-y-2 transition-all hover:shadow-xl duration-500"
              >
                {/* Image */}
                <div className="relative h-[280px] w-full rounded-[1.2rem] overflow-hidden bg-[#E6E3D2] mb-5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover mix-blend-multiply group-hover/card:scale-105 transition-transform duration-700"
                  />
                  {item.accessible && (
                    <div className="absolute top-3 right-3 bg-[#DCE1A5] px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm z-10">
                      <Accessibility
                        strokeWidth={2}
                        className="w-3 h-3 text-[#2B3D25]"
                      />
                      <span className="text-[10px] font-bold tracking-wide text-[#2B3D25]">
                        Wheelchair Accessible
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col px-2 pb-2">
                  <div className="flex items-center gap-2 opacity-50 mb-3">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="text-xs font-medium">{item.duration}</span>
                  </div>

                  <h3 className="text-xl font-bold leading-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-60 mb-8 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="mt-auto grid grid-cols-2 gap-3">
                    <Link
                      href={`/tours/${item.id}`}
                      className="py-3 rounded-xl border border-[#2B3D25]/20 text-xs font-bold uppercase tracking-wide hover:bg-[#2B3D25]/5 text-[#2B3D25] transition-colors text-center"
                    >
                      More Info
                    </Link>
                    <button
                      onClick={() => handleBookClick(item.title)}
                      className="py-3 rounded-xl bg-[#2B3D25] text-[#EAE8DF] text-xs font-bold uppercase tracking-wide hover:bg-opacity-90 transition-colors"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
