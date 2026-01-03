"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, MapPin } from "lucide-react";
import BookTourModal from "@/components/BookTourModal"; // 1. Import Modal

const options = {
  private: {
    title: "Private Group Tours",
    description:
      "Exclusive trips tailored to your group's preferences, offering flexibility in itinerary, pace, and destinations.",
    features: [
      { text: "Mercedes Vito for up to 8 passengers", included: true },
      { text: "Customizable routes and schedules", included: true },
      { text: "Minibuses for up to 12 passengers", included: true },
      { text: "Experienced, professional drivers", included: true },
      { text: "Tickets to archaeological sites excluded", included: false },
      { text: "Extra hours available at an hourly rate", included: false },
    ],
  },
  scheduled: {
    title: "Scheduled Group Tours",
    description:
      "Join a pre-planned itinerary with other travelers. Perfect for meeting new people and seeing the top sights on a budget.",
    features: [
      { text: "Luxury bus transportation", included: true },
      { text: "Fixed itinerary and departure times", included: true },
      { text: "Professional licensed guide included", included: true },
      { text: "Entry tickets included in some packages", included: true },
      { text: "Hotel pick-up/drop-off (selected hotels)", included: true },
      { text: "Lunch not included", included: false },
    ],
  },
};

export default function TripOptions() {
  const [activeTab, setActiveTab] = useState<"private" | "scheduled">(
    "private"
  );

  // 2. Add Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-[#EAE8DF] w-full py-20 text-[#2B3D25] font-sans">
      {/* 3. Render Modal */}
      <BookTourModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tourTitle={options[activeTab].title} // Dynamic title based on active tab
      />

      <div className="max-w-450 mx-auto px-4 md:px-0">
        {/* --- HEADER --- */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center gap-2 opacity-60">
            <MapPin className="w-3 h-3 fill-current" />
            <span className="text-xs font-bold uppercase tracking-widest">
              Trip Options
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
            Choose your way to explore Greece
          </h2>
        </div>

        {/* --- MAIN GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-start">
          {/* LEFT: Toggle Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <button
              onClick={() => setActiveTab("private")}
              className={`text-left p-6 rounded-xl transition-all duration-300 border border-transparent ${
                activeTab === "private"
                  ? "bg-[#2B3D25] text-[#EAE8DF] shadow-lg"
                  : "bg-[#E6E3D2] text-[#2B3D25] hover:bg-[#E6E3D2]/80 hover:border-[#2B3D25]/10"
              }`}
            >
              <span className="block text-lg font-medium mb-1">
                Private Tour
              </span>
              <span
                className={`block text-xs ${
                  activeTab === "private" ? "opacity-80" : "opacity-60"
                }`}
              >
                Great for families, friends, and private groups.
              </span>
            </button>
            <button
              onClick={() => setActiveTab("scheduled")}
              className={`text-left p-6 rounded-xl transition-all duration-300 border border-transparent ${
                activeTab === "scheduled"
                  ? "bg-[#2B3D25] text-[#EAE8DF] shadow-lg"
                  : "bg-[#E6E3D2] text-[#2B3D25] hover:bg-[#E6E3D2]/80 hover:border-[#2B3D25]/10"
              }`}
            >
              <span className="block text-lg font-medium mb-1">
                Scheduled Tours
              </span>
              <span
                className={`block text-xs ${
                  activeTab === "scheduled" ? "opacity-80" : "opacity-60"
                }`}
              >
                Budget-friendly option for solo travelers.
              </span>
            </button>
          </div>

          {/* RIGHT: Detail Card */}
          <div className="lg:col-span-7 bg-[#E6E3D2]/40 rounded-xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-medium mb-4">
              {options[activeTab].title}
            </h3>

            <p className="text-sm leading-relaxed opacity-70 mb-10 border-b border-[#2B3D25]/10 pb-8">
              {options[activeTab].description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8 mb-10">
              {options[activeTab].features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  {feature.included ? (
                    <CheckCircle2
                      strokeWidth={1.5}
                      className="w-5 h-5 shrink-0 text-[#2B3D25]"
                    />
                  ) : (
                    <XCircle
                      strokeWidth={1.5}
                      className="w-5 h-5 shrink-0 opacity-40"
                    />
                  )}
                  <span
                    className={`text-xs md:text-sm font-medium ${
                      feature.included ? "opacity-100" : "opacity-40"
                    }`}
                  >
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA - Trigger Modal */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-[#2B3D25] text-[#EAE8DF] py-4 rounded-lg text-sm font-bold uppercase tracking-wide hover:opacity-90 transition-opacity"
            >
              Book a Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
