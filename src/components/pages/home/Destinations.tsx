import Image from "next/image";
import {
  ArrowUpRight,
  Clock,
  ChevronLeft,
  ChevronRight,
  Flame,
  Accessibility,
} from "lucide-react";

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
    description:
      "Travel back in time on this day tour to the Corinth Canal from Athens.",
    accessible: true,
  },
  {
    id: 3,
    title: "Sounion & Vouliagmeni Lake",
    image: "/images/Sounion.png",
    duration: "4-5 hours",
    description:
      "Take a trip to the Athens Riviera and visit the breathtaking Vouliagmeni Lake.",
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
];

export default function DestinationsSection() {
  return (
    <section className="bg-[#EAE8DF] w-full py-20 text-[#2B3D25] font-sans">
      {/* --- HEADER --- */}
      <div className="max-w-450 mx-auto mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        {/* Left: Titles */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 opacity-60">
            <Flame className="w-3 h-3 fill-current" />
            <span className="text-xs font-bold uppercase tracking-widest">
              Must-See
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
              Explore our popular destinations!
            </h2>
            <a
              href="/tours"
              className="group inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide border-b border-[#2B3D25]/30 pb-0.5 hover:border-[#2B3D25] transition-colors"
            >
              View All Tours
              <ArrowUpRight
                strokeWidth={1.5}
                className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* Right: Navigation Buttons */}
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-full border border-[#2B3D25]/20 flex items-center justify-center hover:bg-[#2B3D25]/5 transition-colors">
            <ChevronLeft strokeWidth={1.5} className="w-5 h-5 opacity-70" />
          </button>
          <button className="w-10 h-10 rounded-full bg-[#1A2318] text-[#EAE8DF] flex items-center justify-center hover:bg-opacity-90 transition-colors">
            <ChevronRight strokeWidth={1.5} className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* --- CARDS GRID / SLIDER --- */}
      <div className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto pb-8 lg:pb-0 snap-x snap-mandatory w-full max-w-450 mx-auto scrollbar-hide">
        {destinations.map((item) => (
          <div
            key={item.id}
            className="min-w-[85vw] md:min-w-[45vw] lg:min-w-0 snap-center bg-[#F4F3EF] p-2 rounded-xl flex flex-col group hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image Container */}
            <div className="relative h-60 w-full rounded-xl overflow-hidden bg-[#E6E3D2] mb-5">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
              />

              {/* Badge */}
              {item.accessible && (
                <div className="absolute top-3 right-3 bg-[#DCE1A5] px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  {/* Icon added here */}
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
            <div className="flex-1 flex flex-col">
              {/* Duration */}
              <div className="flex items-center gap-2 opacity-50 mb-3">
                <Clock className="w-3.5 h-3.5" />
                <span className="text-xs font-medium">{item.duration}</span>
              </div>

              {/* Title & Desc */}
              <h3 className="text-lg font-medium mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed opacity-60 mb-8 line-clamp-2">
                {item.description}
              </p>

              {/* Action Buttons (Footer) */}
              <div className="mt-auto grid grid-cols-2 gap-3">
                <button className="py-2.5 rounded-lg border border-[#2B3D25]/20 text-xs font-bold uppercase tracking-wide hover:bg-[#2B3D25]/5 text-[#2B3D25] transition-colors">
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
    </section>
  );
}
