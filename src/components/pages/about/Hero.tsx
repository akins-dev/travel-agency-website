import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function AboutHero() {
  return (
    <>
      <Navbar />
      <section className="bg-[#EAE8DF] w-full pt-32 pb-12 text-[#2B3D25] font-sans">
        <div className="max-w-450 mx-auto ">
          {/* Page Title */}
          <h1 className="text-[13vw] lg:text-[7.5rem] font-medium tracking-tight uppercase">
            About Us
          </h1>

          {/* Hero Image */}
          <div className="relative w-fullh-[45vh] lg:h-[60vh] rounded-4xl overflow-hidden bg-[#E1DFD6]">
            <Image
              src="/images/acropolis.png"
              alt="Acropolis of Athens"
              fill
              className="object-cover mix-blend-multiply contrast-[1.05]"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
