import Image from "next/image";
import { Globe, ChevronDown, ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-[#EAE8DF] min-h-screen w-full px-4 md:px-8 py-6 text-[#2B3D25] relative flex flex-col">
      {/* ------------------------------- */}
      {/* HEADER SECTION                  */}
      {/* ------------------------------- */}
      <header className="flex justify-between items-center w-full mb-16 md:mb-24">
        {/* LEFT: Logo & Language Selector */}
        <div className="flex items-center gap-6">
          {/* Logo: Stylized Serif Italic 'A' */}
          <a
            href="#"
            className="font-serif italic text-4xl font-light leading-none relative -top-1"
          >
            A
          </a>

          {/* Language Pill */}
          <button className="flex items-center gap-2 bg-[#D0CEC6] hover:bg-[#c4c2ba] px-3 py-1.5 rounded-full text-[13px] font-medium transition-colors">
            <Globe strokeWidth={1.5} className="w-3.5 h-3.5 opacity-70" />
            <span>English</span>
            <ChevronDown
              strokeWidth={1.5}
              className="w-3.5 h-3.5 opacity-70 ml-0.5"
            />
          </button>
        </div>

        {/* CENTER: Navigation Links */}
        <nav className="hidden md:block absolute left-1/2 -translate-x-1/2">
          <ul className="flex items-center gap-8 text-sm font-medium text-[#2B3D25]">
            {["Home", "About us", "Transfers", "Tours", "Contacts"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[#2B3D25] hover:opacity-80 transition-opacity"
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* RIGHT: CTA Button */}
        <div>
          <button className="bg-[#2B3D25] text-[#EAE8DF] px-6 py-2.5 rounded-lg text-[13px] font-medium hover:bg-opacity-90 transition-all">
            Book a Tour
          </button>
        </div>

        {/* Mobile Menu Icon Placeholder (Visible only on small screens) */}
        <button className="md:hidden p-2">
          <div className="w-6 h-0.5 bg-[#2B3D25] mb-1.5"></div>
          <div className="w-6 h-0.5 bg-[#2B3D25]"></div>
        </button>
      </header>

      {/* ------------------------------- */}
      {/* MAIN HERO CONTENT               */}
      {/* ------------------------------- */}
      <div className="flex-1 flex flex-col justify-end pb-8">
        {/* Text Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10 w-full max-w-450 mx-auto">
          {/* Main Title - Spans 7 columns */}
          <div className="lg:col-span-7 relative z-10">
            <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] text-[#2B3D25] leading-[0.85] font-medium uppercase tracking-tight text-primary">
              <span className="block">Armonia</span>
              <span className="block">Excursions</span>
            </h1>
          </div>

          {/* Subtext & Link - Spans 5 columns, aligned bottom */}
          <div className="lg:col-span-5 flex flex-col justify-end h-full pb-2 pl-2 lg:pl-0">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-8 border-t border-[#2B3D25]/10 md:border-none pt-6 md:pt-0">
              {/* Description */}
              <p className="max-w-65 text-sm md:text-base leading-snug text-[#2B3D25] font-normal">
                The most popular and trusted <br className="hidden md:block" />
                travel agency in Greece
              </p>

              {/* Link with Arrow */}
              <a
                href="#"
                className="group flex items-center gap-1 text-xs md:text-sm font-medium uppercase tracking-wide text-[#2B3D25] pb-0.5 transition-all"
              >
                <p className="border-b border-[#2B3D25]/30 hover:border-[#2B3D25]">
                  Explore Destinations
                </p>
                <ArrowDownRight
                  strokeWidth={1.5}
                  className="w-6 h-6 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Hero Image Container */}
        {/* Added bg-[#EAE8DF] here so it shows while image loads */}
        <div className="relative w-full h-[50vh] md:h-[70vh] rounded-4xl overflow-hidden bg-[#E6E3D2]">
          <Image
            src="/images/1.jpg" // Placeholder for Greek landscape
            alt="Greek Temple Landscape"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
