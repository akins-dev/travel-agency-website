import Image from "next/image";
import { ArrowUpRight, Star, MapPin } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="bg-[#EAE8DF] w-full px-4 md:px-8 py-20 text-[#2B3D25] font-sans">
      {/* MASTER GRID: 12 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 w-full max-w-450 mx-auto">
        {/* --- LEFT COLUMN GROUP (Spans 8 cols) --- */}
        <div className="lg:col-span-8 flex flex-col gap-16">
          {/* 1. TOP ROW: Image + Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-start">
            {/* Left: Square Image (Meteora) */}
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-[#E1DFD6]">
              <Image
                src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1200&auto=format&fit=crop" // Meteora rocks placeholder
                alt="Meteora Rocks"
                fill
                className="object-cover mix-blend-multiply hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Right: Text Content */}
            <div className="flex flex-col justify-between h-full py-2">
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
                href="#"
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
          <div className="space-y-8">
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
          <div className="relative h-full w-full rounded-3xl overflow-hidden bg-[#E1DFD6] min-h-150">
            <Image
              src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776&auto=format&fit=crop" // Ancient Columns placeholder
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
