import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function CtaBanner() {
  return (
    <section className="bg-[#EAE8DF] w-full py-12 font-sans">
      <div className="relative w-full max-w-450 mx-auto h-125 md:h-150 rounded-xl lg:rounded-4xl overflow-hidden group">
        {/* Background Image */}
        <Image
          src="/images/1.jpg"
          alt="Meteora Landscape"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
          priority
        />

        {/* Dark Overlay 
           - Essential for text readability on top of busy nature photos.
           - Uses a subtle gradient to keep the center clear but edges distinct.
        */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-black/20" />

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-[#EAE8DF] space-y-8 px-4">
          {/* Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] drop-shadow-sm">
            <span className="block">Explore Greece with comfort.</span>
            <span className="block">Explore Greece with us.</span>
          </h2>

          {/* Action Link */}
          <a
            href="/tours"
            className="group flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-[0.15em] hover:text-white transition-colors mt-4"
          >
            <span className="border-b border-[#EAE8DF]/50 pb-1 group-hover:border-[#EAE8DF] transition-colors">
              View All Tours
            </span>
            <ArrowUpRight
              strokeWidth={2}
              className="w-4 h-4 mb-1 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
