import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function AboutContent() {
  return (
    <section className="bg-[#EAE8DF] w-full py-12 text-[#2B3D25] font-sans">
      <div className="max-w-450 mx-auto">
        {/* --- HEADER SECTION --- */}
        {/* Reduced bottom margin (mb-20) to tighten gap between Header and Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-16 lg:mb-20 border-b border-[#2B3D25]/10 pb-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-5xl leading-[1.1] font-medium tracking-tight">
              Armonia Excursions was created with a clear purpose: to make every
              journey comfortable, seamless, and memorable.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <p className="text-sm leading-relaxed opacity-60 max-w-sm">
              With many years of experience in the tourism industry, our team is
              driven by a passion for hospitality and a deep love for Greece.
            </p>
          </div>
        </div>

        {/* --- ROW 1: What we do / Vehicles / Car Image --- */}
        {/* Reduced vertical gap (gap-y-12) to bring rows closer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 lg:gap-x-16 gap-y-12 items-start mb-16 lg:mb-24 relative">
          {/* COL 1: Sticky Left Panel */}
          <div className="lg:col-span-3 h-fit z-10 lg:top-32">
            <span className="inline-block border-b border-[#2B3D25] pb-0.5 text-xs font-bold uppercase tracking-widest">
              What we do?
            </span>
            {/* FIX: Removed 'max-w-[200px]' so text flows naturally */}
            <h3 className="text-2xl md:text-3xl mt-6 font-medium leading-tight">
              We provide premium transportation with a personal touch.
            </h3>
          </div>

          {/* COL 2: Our Vehicles */}
          <div className="lg:col-span-5 space-y-6 pt-2">
            <span className="inline-block border-b border-[#2B3D25] pb-0.5 text-xs font-bold uppercase tracking-widest">
              Our Vehicles
            </span>

            <div className="space-y-6 text-sm leading-relaxed opacity-70 max-w-md">
              <p>
                Our fleet includes luxury vehicles like the Mercedes Vito
                9-seater - perfect for private tours and small groups. For
                larger groups, our spacious MAN TG 3180 minibus deliver the same
                level of comfort and convenience.
              </p>
              <p>
                To make your trip even easier, we offer reliable transfers to
                and from airports and ports. Need accommodations? We can handle
                that too, so you can relax and focus on enjoying every moment of
                your travel.
              </p>
            </div>
          </div>

          {/* COL 3: Car Image */}
          <div className="lg:col-span-4 pt-2">
            <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-[#E1DFD6]">
              <Image
                src="/images/mercedes.png"
                alt="Luxury Mercedes Vito"
                fill
                className="object-cover mix-blend-multiply hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* --- ROW 2: Accessibility / Team --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 lg:gap-x-16 gap-y-12 items-start">
          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-3" />

          {/* COL 2: Accessibility */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block border-b border-[#2B3D25] pb-0.5 text-xs font-bold uppercase tracking-widest">
              Accessibility
            </span>

            <div className="space-y-4 max-w-md mt-2">
              <h4 className="text-2xl md:text-3xl font-medium leading-tight">
                At Armonia, inclusivity is at the heart of what we do. We
                believe travel should be effortless and enjoyable for everyone.
              </h4>
              <p className="text-sm leading-relaxed opacity-70">
                That's why we offer wheelchair-friendly vehicles, ensuring that
                no traveler misses the opportunity to experience the beauty of
                Greece. Your comfort and ease are always our priority.
              </p>
            </div>
          </div>

          {/* COL 3: Our Team */}
          <div className="lg:col-span-4 space-y-6">
            <span className="inline-block border-b border-[#2B3D25] pb-0.5 text-xs font-bold uppercase tracking-widest">
              Our team
            </span>

            <div className="space-y-8 max-w-sm mt-2">
              <div className="text-sm leading-relaxed opacity-70 space-y-4">
                <p>
                  Our drivers aren't just there to get you from one place to
                  another - they're professionals who prioritize your safety and
                  comfort.
                </p>
                <p>
                  Beyond their expertise on the road, they are passionate guides
                  with a deep knowledge of Greece's history and culture. Whether
                  sharing local stories or helping you uncover hidden gems, they
                  ensure every journey is as enriching as it is secure.
                </p>
              </div>

              {/* Link */}
              <a
                href="#"
                className="group inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide border-b border-[#2B3D25]/30 pb-0.5 hover:border-[#2B3D25] transition-colors"
              >
                Explore Destinations
                <ArrowUpRight
                  strokeWidth={1.5}
                  className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
