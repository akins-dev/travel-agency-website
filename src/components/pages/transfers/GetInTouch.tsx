import { Mail, PenTool, Phone } from "lucide-react";

export default function TransferContact() {
  return (
    <section className="bg-[#E2DFCE] w-full py-32 text-[#2B3D25] font-sans border-t border-[#2B3D25]/5">
      <div className="max-w-[1000px] mx-auto text-center space-y-20">
        {/* Header */}
        <div className="space-y-6">
          <span className="flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-60">
            <span className="w-2 h-2 bg-[#EAE8DF] border border-[#2B3D25]/30 rounded-sm" />
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
            Have a question or need <br /> assistance?
          </h2>
          <p className="text-sm opacity-60">
            We're here to help in the way most convenient for you:
          </p>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          {/* Method 1: Email */}
          <div className="flex flex-col items-center gap-6 group cursor-pointer">
            <div className="w-14 h-14 rounded-full bg-[#2B3D25] text-[#EAE8DF] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275)">
              <Mail strokeWidth={1.5} className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-sm">Write Us</h3>
              <p className="text-xs opacity-60">Reach out to us by email</p>
            </div>
            <a
              href="mailto:info@armonia-excursions.gr"
              className="text-xs font-bold relative pb-1 overflow-hidden"
            >
              <span className="relative z-10">info@armonia-excursions.gr</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#2B3D25] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Method 2: Form */}
          <div className="flex flex-col items-center gap-6 group cursor-pointer">
            <div className="w-14 h-14 rounded-full bg-[#2B3D25] text-[#EAE8DF] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275)">
              <PenTool strokeWidth={1.5} className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-sm">Fill out Form</h3>
              <p className="text-xs opacity-60">Submit your request online</p>
            </div>
            <button className="bg-[#2B3D25] text-[#EAE8DF] px-8 py-3 rounded-[4px] text-[10px] font-bold uppercase tracking-wide hover:opacity-90 hover:shadow-md transition-all mt-1">
              Leave Request
            </button>
          </div>

          {/* Method 3: Call */}
          <div className="flex flex-col items-center gap-6 group cursor-pointer">
            <div className="w-14 h-14 rounded-full bg-[#2B3D25] text-[#EAE8DF] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275)">
              <Phone strokeWidth={1.5} className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-sm">Call Us</h3>
              <p className="text-xs opacity-60">Mon-Fri from 8am to 5pm</p>
            </div>
            <a
              href="tel:+306944553616"
              className="text-xs font-bold relative pb-1 overflow-hidden"
            >
              <span className="relative z-10">+30 694 455 3616</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#2B3D25] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
