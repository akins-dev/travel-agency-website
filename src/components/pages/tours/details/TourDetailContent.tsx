"use client";

import { useState } from "react";
import Image from "next/image";
import { Hand, Info } from "lucide-react";
import BookTourModal from "@/components/BookTourModal";

// Define the gallery images in an array for easy management
const galleryImages = [
  "/images/athens.png", // Default Main (Stadium)
  "/images/1.jpg",
  "/images/acropolis.png",
  "/images/Acropolis.png",
  "/images/Olympia.png",
  "/images/Sounion.png",
];

export default function TourDetailContent() {
  // State to track the active large image
  const [activeImage, setActiveImage] = useState(galleryImages[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full pb-32 text-[#2B3D25] font-sans">
      <BookTourModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tourTitle="Athens: Top Sights"
      />
      <div className="max-w-450 mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        {/* --- LEFT COLUMN (Content & Gallery) --- */}
        <div className="lg:col-span-8 space-y-16">
          {/* About Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-medium">About the tour</h2>
            <div className="text-sm md:text-base leading-relaxed opacity-70 space-y-6 max-w-3xl">
              <p>
                On a private excursion with your family, your friends, or even
                the company that you will create especially for this purpose,
                you will see the most important sights of the Greek capital. On
                your way you will visit the Acropolis to admire the wonders of
                the classical era and the Parthenon, the Odeon of Herodes
                Atticus and the new Acropolis Museum.
              </p>
              <p>
                Afterwards, you will see the Panathenaic Stadium where the 1st
                modern Olympic Games took place and will continue to Syntagma
                Square and a tour throughout the classical buildings-jewels of
                the city. Next stop is the Archaeological Museum, and the
                continuation will be in the historic center of Athens which is
                full of life, with many options for food and drink.
              </p>
            </div>
          </div>

          {/* Note Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-medium opacity-80">Note</h2>
            <div className="flex items-start gap-4 p-6 bg-[#F4F3EF] rounded-2xl">
              <Hand className="w-6 h-6 shrink-0 mt-1 rotate-45 opacity-60" />
              <p className="text-sm leading-relaxed opacity-60">
                In case your requested pickup is from Piraeus Port, kindly send
                us the name of your ship and exact desired time of pickup the
                soonest possible after your booking.
              </p>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="space-y-4">
            {/* Large Active Image */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#E1DFD6]">
              {/* Used 'key' to force a re-render animation when image changes */}
              <Image
                key={activeImage}
                src={activeImage}
                alt="Active Gallery Image"
                fill
                className="object-cover mix-blend-multiply transition-transform duration-700 animate-in fade-in"
              />
            </div>

            {/* Thumbnails Row */}
            <div className="grid grid-cols-6 gap-4">
              {galleryImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(img)}
                  className={`relative aspect-square rounded-xl overflow-hidden bg-[#E1DFD6] transition-all duration-300 ${
                    activeImage === img
                      ? "ring-2 ring-[#2B3D25] ring-offset-2 ring-offset-[#EAE8DF] opacity-100"
                      : "opacity-70 hover:opacity-100 hover:scale-105"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Gallery Thumbnail ${index + 1}`}
                    fill
                    className="object-cover mix-blend-multiply"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN (Sticky Booking Card) --- */}
        <div className="lg:col-span-4 relative">
          <div className="sticky top-32">
            <div className="bg-[#F4F3EF] p-8 rounded-3xl shadow-sm">
              <div className="mb-8">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-2 block">
                  Pricing
                </span>
                <div className="flex justify-between items-end mb-2">
                  <h3 className="text-xl font-medium">Private group tours</h3>
                  <div className="text-right">
                    <span className="text-3xl font-medium">270 €</span>
                    <span className="text-xs opacity-50 ml-1">/ group</span>
                  </div>
                </div>
                <p className="text-xs opacity-50">For up to 4 people</p>
              </div>

              <div className="space-y-4 mb-8 border-t border-[#2B3D25]/10 pt-6">
                <span className="text-sm font-medium block mb-2">Comments</span>

                <div className="flex items-start gap-3">
                  <Info className="w-4 h-4 shrink-0 opacity-40 mt-0.5" />
                  <span className="text-xs opacity-60 leading-relaxed">
                    Every extra hour is charged with 30 euros.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Info className="w-4 h-4 shrink-0 opacity-40 mt-0.5" />
                  <span className="text-xs opacity-60 leading-relaxed">
                    Tickets to the points of visit are not included.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Info className="w-4 h-4 shrink-0 opacity-40 mt-0.5" />
                  <span className="text-xs opacity-60 leading-relaxed">
                    Tipping is optional and not included in the price.
                  </span>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-[#2B3D25] text-[#EAE8DF] py-4 rounded-lg text-xs font-bold uppercase tracking-wide hover:opacity-90 transition-opacity shadow-lg"
              >
                Book Tour
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
