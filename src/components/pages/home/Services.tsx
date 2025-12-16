"use client"; // Required for interactivity (useState)

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Heart, Clock, Map } from "lucide-react";

// Data for the tabs
const services = [
  {
    id: "private",
    label: "Private Tours",
    image:
      "https://images.unsplash.com/photo-1596710629193-273577317789?q=80&w=2000&auto=format&fit=crop", // Van on road
    category: "AS YOU WISH",
    title: (
      <>
        Tailored{" "}
        <span className="font-serif italic font-medium">Private Tours</span>{" "}
        <br /> in Mercedes Vito
      </>
    ),
    description:
      "Enjoy a personalized journey in our Mercedes Vito (9-seater: 8 clients + driver). These tours offer complete flexibility — visit as many or as few places as you wish, all at your own pace.",
    featureIcon: <ShieldCheck className="w-5 h-5 text-[#2B3D25]" />,
    featureText: "Perfect for those seeking a custom experience.",
  },
  {
    id: "scheduled",
    label: "Scheduled Tours",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1776&auto=format&fit=crop", // Ancient ruins
    category: "GROUP EXPERIENCE",
    title: (
      <>
        Curated{" "}
        <span className="font-serif italic font-medium">Scheduled Tours</span>{" "}
        <br /> to Top Sites
      </>
    ),
    description:
      "Join a small group of like-minded travelers to explore Greece's most iconic landmarks. Our scheduled itineraries are carefully crafted to maximize your time and enjoyment.",
    featureIcon: <Clock className="w-5 h-5 text-[#2B3D25]" />,
    featureText: "Fixed itinerary with expert guides.",
  },
  {
    id: "transfers",
    label: "Transfers",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2000&auto=format&fit=crop", // Car interior/road
    category: "SEAMLESS TRAVEL",
    title: (
      <>
        Reliable{" "}
        <span className="font-serif italic font-medium">Transfer Services</span>{" "}
        <br /> Airport & Port
      </>
    ),
    description:
      "Start your vacation stress-free. We provide punctual and comfortable transfers from Athens Airport, Piraeus Port, or your hotel to any destination in mainland Greece.",
    featureIcon: <Map className="w-5 h-5 text-[#2B3D25]" />,
    featureText: "24/7 Availability and flight monitoring.",
  },
  {
    id: "accessibility",
    label: "Wheelchair Accessibility",
    image:
      "https://images.unsplash.com/photo-1562923696-932f741ba207?q=80&w=2000&auto=format&fit=crop", // Accessible path/view
    category: "INCLUSIVE TRAVEL",
    title: (
      <>
        Accessible <span className="font-serif italic font-medium">Tours</span>{" "}
        <br /> for Everyone
      </>
    ),
    description:
      "We believe travel is for everyone. Our vehicles are equipped with ramps and secure locking systems to ensure a safe and comfortable journey for wheelchair users.",
    featureIcon: <Heart className="w-5 h-5 text-[#2B3D25]" />,
    featureText: "Specialized vehicles and trained drivers.",
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[#EAE8DF] w-full px-4 md:px-8 py-20 text-[#2B3D25] font-sans">
      {/* --- HEADER --- */}
      <div className="text-center space-y-4 mb-16">
        <div className="flex items-center justify-center gap-2 opacity-60">
          <Heart className="w-3 h-3 fill-current" />
          <span className="text-xs font-bold uppercase tracking-widest">
            Services
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
          What we offer?
        </h2>
        <p className="max-w-md mx-auto text-sm leading-relaxed opacity-70">
          From a private tour and a scheduled route to an accessible travel
          experience - we&apos;ve got the perfect option for you.
        </p>
      </div>

      {/* --- CONTENT GRID --- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-400 mx-auto items-center">
        {/* COL 1: NAVIGATION (3 cols) */}
        <div className="lg:col-span-3 flex flex-col gap-2">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(index)}
              className={`text-left px-6 py-4 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === index
                  ? "bg-[#2B3D25] text-[#EAE8DF] shadow-lg" // Active State
                  : "bg-[#E5E3DA] text-[#2B3D25] hover:bg-[#dcdad2]" // Inactive State
              }`}
            >
              {service.label}
            </button>
          ))}
        </div>

        {/* COL 2: IMAGE DISPLAY (5 cols) */}
        <div className="lg:col-span-5 h-125 md:h-150 relative rounded-4xl overflow-hidden bg-[#E6E3D2]">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                activeTab === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={service.image}
                alt={service.label}
                fill
                className="object-cover mix-blend-multiply" // Applies the beige tint effect
              />
            </div>
          ))}
        </div>

        {/* COL 3: DETAILS (4 cols) */}
        <div className="lg:col-span-4 pl-0 lg:pl-8 space-y-8">
          {/* Category Tag */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-50">
            <span className="w-2 h-2 rounded-full bg-current" />
            {services[activeTab].category}
          </div>

          {/* Dynamic Title */}
          <h3 className="text-3xl md:text-4xl leading-tight">
            {services[activeTab].title}
          </h3>

          {/* Description */}
          <p className="text-sm leading-relaxed opacity-70">
            {services[activeTab].description}
          </p>

          {/* Feature Box */}
          <div className="flex items-start gap-4 bg-[#E5E3DA] p-4 rounded-xl">
            <div className="mt-1">{services[activeTab].featureIcon}</div>
            <p className="text-xs font-semibold leading-relaxed max-w-50">
              {services[activeTab].featureText}
            </p>
          </div>

          {/* Link */}
          <a
            href="#"
            className="group inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide border-b border-[#2B3D25]/30 pb-0.5 hover:border-[#2B3D25] transition-colors"
          >
            Explore Tours
            <ArrowUpRight
              strokeWidth={1.5}
              className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
