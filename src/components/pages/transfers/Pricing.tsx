"use client";

import { useState } from "react";
import Image from "next/image";
import { Car, Truck, Bus } from "lucide-react";

const vehicles = [
  {
    id: "car",
    type: "Car",
    capacity: "3 people",
    image:
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=800&auto=format&fit=crop",
    rates: {
      day: { airport: 45, port: 35, connection: 60 },
      night: { airport: 55, port: 45, connection: 70 },
    },
    icon: <Car strokeWidth={1.5} className="w-3.5 h-3.5" />,
  },
  {
    id: "van",
    type: "Van",
    capacity: "7 people",
    image:
      "https://images.unsplash.com/photo-1632245889029-e413143756ac?q=80&w=800&auto=format&fit=crop",
    rates: {
      day: { airport: 75, port: 65, connection: 90 },
      night: { airport: 85, port: 75, connection: 100 },
    },
    icon: <Truck strokeWidth={1.5} className="w-3.5 h-3.5" />,
  },
  {
    id: "minibus",
    type: "Minibus",
    capacity: "12 people",
    image:
      "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=800&auto=format&fit=crop",
    rates: {
      day: { airport: 100, port: 90, connection: 120 },
      night: { airport: 120, port: 110, connection: 140 },
    },
    icon: <Bus strokeWidth={1.5} className="w-3.5 h-3.5" />,
  },
];

export default function TransferPricing() {
  const [rateType, setRateType] = useState<"day" | "night">("day");

  return (
    <section className="bg-[#EAE8DF] w-full py-20 text-[#2B3D25] font-sans">
      <div className="max-w-[1400px] mx-auto">
        {/* --- ANIMATED TABS --- */}
        <div className="flex justify-center mb-24">
          <div className="relative flex items-center gap-12 border-b border-[#2B3D25]/10 pb-4">
            <button
              onClick={() => setRateType("day")}
              className={`text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                rateType === "day"
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-70"
              }`}
            >
              Day rate
            </button>

            <button
              onClick={() => setRateType("night")}
              className={`text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${
                rateType === "night"
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-70"
              }`}
            >
              Night rate
            </button>

            {/* Sliding Underline - Precise positioning based on text width */}
            <div
              className={`absolute bottom-[-1px] h-[2px] bg-[#2B3D25] transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
                rateType === "day" ? "left-0 w-[70px]" : "left-[108px] w-[85px]"
              }`}
            />
          </div>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-[#F4F3EF] p-8 rounded-[1.5rem] flex flex-col group hover:-translate-y-2 hover:shadow-xl transition-all duration-500 ease-out"
            >
              {/* Vehicle Image Container */}
              <div className="relative aspect-[16/10] w-full mb-8 bg-[#EAE8DF] rounded-xl overflow-hidden mix-blend-multiply">
                <Image
                  src={vehicle.image}
                  alt={vehicle.type}
                  fill
                  className="object-contain p-4 mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-2 opacity-50 mb-3">
                {vehicle.icon}
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  {vehicle.type}
                </span>
              </div>

              <h3 className="text-xl font-medium mb-8">
                Capacity: {vehicle.capacity}
              </h3>

              {/* Pricing List */}
              <div className="space-y-4 border-t border-[#2B3D25]/10 pt-6 mt-auto">
                {[
                  {
                    label: "Airport - Athens",
                    price: vehicle.rates[rateType].airport,
                  },
                  {
                    label: "Port - Athens",
                    price: vehicle.rates[rateType].port,
                  },
                  {
                    label: "Airport - Port",
                    price: vehicle.rates[rateType].connection,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center text-sm group/row cursor-default"
                  >
                    <span className="opacity-60 group-hover/row:opacity-100 transition-opacity duration-300">
                      {item.label}
                    </span>
                    {/* Key allows React to re-trigger animation on change */}
                    <span
                      key={`${rateType}-${item.price}`}
                      className="font-bold text-base animate-in fade-in zoom-in-95 duration-300"
                    >
                      {item.price} €
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* --- CTA BUTTON --- */}
        <div className="flex justify-center">
          <button className="bg-[#2B3D25] text-[#EAE8DF] px-12 py-4 rounded-[4px] text-xs font-bold uppercase tracking-widest hover:bg-[#1f2d1b] hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-[#2B3D25]/20">
            Book Transfer
          </button>
        </div>
      </div>
    </section>
  );
}
