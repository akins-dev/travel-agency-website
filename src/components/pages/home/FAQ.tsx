"use client";

import { useState } from "react";
import { Plus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What types of transport do you offer for the tours?",
    answer:
      "We utilize a modern fleet including Mercedes Vito minivans for small groups (up to 8 people), Man TG 3180 minibuses for larger groups (up to 14 people), and luxury sedans for private transfers. All vehicles are air-conditioned and regularly serviced.",
  },
  {
    question: "Are the tours accessible for people with special needs?",
    answer:
      "Yes, absolutely. We specialize in accessible tourism. We have wheelchair-accessible minivans equipped with ramps and secure locking systems. Our guides are also trained to assist travelers with mobility issues.",
  },
  {
    question: "Can I customize my tour?",
    answer:
      "Yes! Our 'Private Tours' are fully customizable. You can adjust the itinerary, duration, and stops according to your preferences. Just let us know what you want to see, and we'll build the perfect schedule for you.",
  },
  {
    question: "How to book a tour?",
    answer:
      "You can book directly through our website by selecting your preferred tour and date. Alternatively, you can contact us via the 'Contact' page form or email us directly for custom inquiries and large group bookings.",
  },
  {
    question: "Will there be a guide during the tour?",
    answer:
      "For all archaeological sites and museums, we provide professional licensed guides who can enter the sites with you. For the transport portion, our drivers are experienced professionals who can share general knowledge about Greece, though they cannot guide you inside historical monuments by law.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#EAE8DF] w-full px-4 md:px-8 py-20 text-[#2B3D25] font-sans">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* --- LEFT COLUMN (Sticky Title) --- */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32 space-y-6">
            <div className="flex items-center gap-2 opacity-60">
              <HelpCircle className="w-3 h-3 fill-current" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Support
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-[1.1]">
              Frequently Asked Questions
            </h2>
          </div>
        </div>

        {/* --- RIGHT COLUMN (Accordion) --- */}
        <div className="lg:col-span-7 border-t border-[#2B3D25]/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-[#2B3D25]/10">
                {/* Header (Clickable) */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-8 flex items-start justify-between gap-6 text-left group hover:opacity-70 transition-opacity"
                >
                  <span className="text-lg md:text-xl font-medium pr-8">
                    {faq.question}
                  </span>

                  {/* Rotating Icon */}
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full border border-[#2B3D25]/20 flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 bg-[#2B3D25] text-[#EAE8DF] border-[#2B3D25]"
                        : "rotate-0 bg-transparent"
                    }`}
                  >
                    <Plus strokeWidth={1.5} className="w-4 h-4" />
                  </span>
                </button>

                {/* Content (Smooth Expand) */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mb-8"
                      : "grid-rows-[0fr] opacity-0 mb-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm md:text-base leading-relaxed opacity-70 max-w-2xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
