import {
  ArrowUpRight,
  Bus,
  Star,
  Accessibility,
  CreditCard,
  User,
} from "lucide-react";

const benefits = [
  {
    id: 1,
    title: "Comfortable Vehicles",
    description:
      "We offer Mercedes Vito (9-seater) for private tours, Man TG 3180 (14-seater) for group trips, and luxury sedans for transfers.",
    icon: <Bus strokeWidth={1.5} className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Experienced guides",
    description:
      "Our knowledgeable friendly guides are dedicated to making your journey through Greece memorable and enjoyable.",
    icon: <Star strokeWidth={1.5} className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Wheelchair accessibility",
    description:
      "We offer wheelchair-accessible minivans to ensure that everyone can enjoy the beauty of Greece without any limitations.",
    icon: <Accessibility strokeWidth={1.5} className="w-6 h-6" />,
  },
  {
    id: 4,
    title: "Reserve Now & Pay Later",
    description:
      "Booking is simple and hassle-free! Keep your travel plans flexible – book your spot and pay nothing today.",
    icon: <CreditCard strokeWidth={1.5} className="w-6 h-6" />,
  },
];

export default function BenefitsSection() {
  return (
    <section className="bg-[#EAE8DF] w-full py-20 text-[#2B3D25] font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 w-full max-w-450 mx-auto">
        {/* --- LEFT COLUMN (Sticky Text) --- */}
        <div className="lg:col-span-5 flex flex-col justify-start lg:sticky lg:top-32 h-fit space-y-8">
          {/* Label */}
          <div className="flex items-center gap-2 opacity-60">
            <User className="w-3 h-3 fill-current" />
            <span className="text-xs font-bold uppercase tracking-widest">
              Our Advantages
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl leading-[1.1] font-medium tracking-tight">
            The Benefits of <br />
            Traveling with Armonia
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base leading-relaxed opacity-70 max-w-sm">
            Let us take care of the details so you can enjoy Greece at your own
            pace, with services tailored to meet your travel needs.
          </p>

          {/* Link */}
          <a
            href="#"
            className="group inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide border-b border-[#2B3D25]/30 pb-0.5 hover:border-[#2B3D25] w-fit transition-colors pt-4"
          >
            More About Us
            <ArrowUpRight
              strokeWidth={1.5}
              className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* --- RIGHT COLUMN (Feature List) --- */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="bg-[#E5E3DA] rounded-2xl p-8 flex flex-col md:flex-row md:items-start justify-between gap-6 hover:bg-[#dedcd3] transition-colors duration-300"
            >
              <div className="space-y-3 max-w-lg">
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="text-sm leading-relaxed opacity-60">
                  {item.description}
                </p>
              </div>

              {/* Icon Circle */}
              <div className="w-10 h-10 rounded-full border border-[#2B3D25]/10 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
