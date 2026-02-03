"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, ShieldCheck, Heart, Clock, Map } from "lucide-react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "private",
    label: "Private Tours",
    image: "/images/private-car.png",
    category: "AS YOU WISH",
    title: (
      <>
        Tailored <span className="font-serif italic font-medium">Private Tours</span> <br /> in Mercedes Vito
      </>
    ),
    description: "Enjoy a personalized journey in our Mercedes Vito (9-seater: 8 clients + driver). These tours offer complete flexibility — visit as many or as few places as you wish, all at your own pace.",
    featureIcon: <ShieldCheck className="w-5 h-5 text-[#2B3D25]" />,
    featureText: "Perfect for those seeking a custom experience.",
  },
  {
    id: "scheduled",
    label: "Scheduled Tours",
    image: "/images/Ancient-Greek-Columns.jpg",
    category: "GROUP EXPERIENCE",
    title: (
      <>
        Curated <span className="font-serif italic font-medium">Scheduled Tours</span> <br /> to Top Sites
      </>
    ),
    description: "Join a small group of like-minded travelers to explore Greece's most iconic landmarks. Our scheduled itineraries are carefully crafted to maximize your time and enjoyment.",
    featureIcon: <Clock className="w-5 h-5 text-[#2B3D25]" />,
    featureText: "Fixed itinerary with expert guides.",
  },
  {
    id: "transfers",
    label: "Transfers",
    image: "/images/transfers.jpg",
    category: "SEAMLESS TRAVEL",
    title: (
      <>
        Reliable <span className="font-serif italic font-medium">Transfer Services</span> <br /> Airport & Port
      </>
    ),
    description: "Start your vacation stress-free. We provide punctual and comfortable transfers from Athens Airport, Piraeus Port, or your hotel to any destination in mainland Greece.",
    featureIcon: <Map className="w-5 h-5 text-[#2B3D25]" />,
    featureText: "24/7 Availability and flight monitoring.",
  },
  {
    id: "accessibility",
    label: "Wheelchair Accessibility",
    image: "/images/accessiblility.png",
    category: "INCLUSIVE TRAVEL",
    title: (
      <>
        Accessible <span className="font-serif italic font-medium">Tours</span> <br /> for Everyone
      </>
    ),
    description: "We believe travel is for everyone. Our vehicles are equipped with ramps and secure locking systems to ensure a safe and comfortable journey for wheelchair users.",
    featureIcon: <Heart className="w-5 h-5 text-[#2B3D25]" />,
    featureText: "Specialized vehicles and trained drivers.",
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Track Scroll Progress inside the 400vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 2. Map scroll progress (0 to 1) to the 4 tabs
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.25) setActiveTab(0);
    else if (latest < 0.5) setActiveTab(1);
    else if (latest < 0.75) setActiveTab(2);
    else setActiveTab(3);
  });

  // Optional: Function to click a tab and scroll to its section
  const scrollToSection = (index: number) => {
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const windowHeight = window.innerHeight;
    // Calculate the scroll position for the clicked tab
    window.scrollTo({
      top: containerTop + index * windowHeight,
      behavior: "smooth",
    });
  };

  return (
    // 3. The "Ghost" Container: 400vh high so we have space to scroll through 4 items
    <section ref={containerRef} className="h-[400vh] bg-[#EAE8DF] w-full font-sans">
      
      {/* 4. The "Sticky" Viewport: Locks the content in place while the user scrolls */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center py-20 overflow-hidden text-[#2B3D25]">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16 px-4"
        >
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
        </motion.div>

        {/* --- CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-[1400px] mx-auto items-center px-4 md:px-10">
          
          {/* COL 1: NAVIGATION (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-2">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => scrollToSection(index)}
                className={`text-left px-6 py-4 rounded-lg text-sm font-medium transition-all duration-300 relative ${
                  activeTab === index
                    ? "text-[#EAE8DF] shadow-lg"
                    : "bg-[#E5E3DA] text-[#2B3D25] hover:bg-[#dcdad2]"
                }`}
              >
                {activeTab === index && (
                  <motion.div
                    layoutId="active-tab-bg"
                    className="absolute inset-0 bg-[#2B3D25] rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {service.label}
              </button>
            ))}
          </div>

          {/* COL 2: IMAGE DISPLAY (5 cols) */}
          <div className="lg:col-span-5 h-[300px] md:h-[500px] relative rounded-xl lg:rounded-3xl overflow-hidden bg-[#E6E3D2]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                className="absolute inset-0 z-10"
              >
                <Image
                  src={services[activeTab].image}
                  alt={services[activeTab].label}
                  fill
                  className="object-cover mix-blend-multiply"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* COL 3: DETAILS (4 cols) */}
          <div className="lg:col-span-4 pl-0 lg:pl-8 space-y-8 min-h-[300px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-6"
              >
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
                  <p className="text-xs font-semibold leading-relaxed max-w-[200px]">
                    {services[activeTab].featureText}
                  </p>
                </div>

                {/* Link */}
                <a
                  href="/tours"
                  className="group inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide border-b border-[#2B3D25]/30 pb-0.5 hover:border-[#2B3D25] transition-colors"
                >
                  Explore Tours
                  <ArrowUpRight
                    strokeWidth={1.5}
                    className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}