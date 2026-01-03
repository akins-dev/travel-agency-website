"use client";

import { useState } from "react";
import Image from "next/image";
import { Clock, Accessibility } from "lucide-react";
import { useRouter } from "next/navigation";
import { toursData } from "@/data/tours";

export default function ToursGrid() {
  const [filter, setFilter] = useState<"all" | "accessible">("all");
  const router = useRouter();

  // Filter Logic
  const filteredTours =
    filter === "all" ? toursData : toursData.filter((tour) => tour.accessible);

  const redirectToDetailsPage = () => {
    router.push("/tours/1");
  };

  return (
    <section className="w-full pb-32 text-[#2B3D25] font-sans">
      <div className="max-w-450 mx-auto">
        {/* --- TABS --- */}
        <div className="flex justify-center mb-16">
          <div className="relative flex items-center gap-12 border-b border-[#2B3D25]/10 pb-4">
            <button
              onClick={() => setFilter("all")}
              className={`text-sm font-bold transition-colors duration-300 ${
                filter === "all" ? "opacity-100" : "opacity-40 hover:opacity-70"
              }`}
            >
              All Tours
            </button>

            <button
              onClick={() => setFilter("accessible")}
              className={`text-sm font-bold transition-colors duration-300 ${
                filter === "accessible"
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-70"
              }`}
            >
              Wheelchair Accessible Tours
            </button>

            {/* Sliding Underline */}
            <div
              className={`absolute -bottom-px h-0.5 bg-[#2B3D25] transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
                filter === "all" ? "left-0 w-20" : "left-30 w-65"
              }`}
            />
          </div>
        </div>

        {/* --- GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTours.map((tour) => (
            <div
              key={tour.id}
              className="bg-[#F4F3EF] p-2 rounded-3xl flex flex-col group hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-60 w-full rounded-xl overflow-hidden bg-[#E1DFD6] mb-5">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                />

                {/* Badge */}
                {tour.accessible && (
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
              <div className="flex-1 flex flex-col px-2">
                {/* Duration */}
                <div className="flex items-center gap-2 opacity-50 mb-3">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="text-xs font-medium">{tour.duration}</span>
                </div>

                {/* Title & Desc */}
                <h3 className="text-lg font-bold leading-tight mb-3">
                  {tour.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-60 mb-8 line-clamp-3">
                  {tour.description}
                </p>

                {/* Action Buttons (Footer) */}
                <div className="mt-auto grid grid-cols-2 gap-3">
                  <button
                    onClick={redirectToDetailsPage}
                    className="py-2.5 rounded-lg border border-[#2B3D25]/20 cursor-pointer text-xs font-bold uppercase tracking-wide hover:bg-[#2B3D25]/5 text-[#2B3D25] transition-colors"
                  >
                    More Info
                  </button>
                  <button className="py-2.5 rounded-lg bg-[#2B3D25] text-[#EAE8DF] text-xs font-bold uppercase tracking-wide hover:bg-opacity-90 transition-colors">
                    Book
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
