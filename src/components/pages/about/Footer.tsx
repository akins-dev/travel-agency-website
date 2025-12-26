import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function AboutFooterCTA() {
  return (
    <section className="bg-[#E6E3D2] w-full py-20 pb-32 text-[#2B3D25] font-sans flex flex-col items-center text-center">
      {/* Icon (Stack) */}
      <div className="flex flex-col gap-0.75 items-center opacity-50 mb-4">
        <div className="w-3 h-[1.5px] bg-current rounded-full" />
        <div className="w-5 h-[1.5px] bg-current rounded-full" />
        <div className="w-3 h-[1.5px] bg-current rounded-full" />
      </div>

      <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 mb-8">
        With Harmony
      </span>

      <h2 className="max-w-2xl text-3xl md:text-5xl leading-[1.15] font-medium tracking-tight mb-12">
        We make every trip a harmonious blend of comfort and discovery. Start
        your adventure with Armonia - contact us now!
      </h2>

      <Link
        href="/#contacts"
        className="group inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide border-b border-[#2B3D25]/30 pb-0.5 hover:border-[#2B3D25] transition-colors"
      >
        Contact Us
        <ArrowUpRight
          strokeWidth={1.5}
          className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      </Link>
    </section>
  );
}
