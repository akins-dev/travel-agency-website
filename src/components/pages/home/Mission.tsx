import Image from "next/image";

export default function MissionSection() {
  return (
    <section className="bg-[#EAE8DF] w-full px-4 md:px-8 py-12 font-sans text-[#2B3D25]">
      {/* Container Card */}
      <div className="bg-[#E6E3D2] w-full max-w-450 mx-auto rounded-3xl px-6 py-24 md:py-32 flex flex-col items-center justify-center text-center space-y-12">
        {/* --- TOP LABEL --- */}
        <div className="flex flex-col items-center gap-3 opacity-50">
          {/* Custom Icon resembling the stacked stones/balance icon */}
          <div className="flex flex-col gap-0.75 items-center">
            <div className="w-4 h-0.5 bg-current rounded-full" />
            <div className="w-6 h-0.5 bg-current rounded-full" />
            <div className="w-4 h-0.5 bg-current rounded-full" />
          </div>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
            With Harmony
          </span>
        </div>

        {/* --- MAIN STATEMENT --- */}
        <h2 className="max-w-4xl text-3xl md:text-4xl lg:text-5xl leading-[1.2] font-medium tracking-tight">
          From the ancient wonders to the <br className="hidden md:block" />
          stunning landscapes of Greece, enjoy{" "}
          <br className="hidden md:block" />
          every step of your journey with <br className="hidden md:block" />
          Armonia Excursions!
        </h2>

        {/* --- SOCIAL PROOF (Avatars) --- */}
        <div className="flex items-center gap-6 pt-4">
          <span className="text-sm font-medium opacity-80">
            3500+ people trust us
          </span>

          {/* Avatar Group */}
          <div className="flex -space-x-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative w-10 h-10 rounded-full border-2 border-[#E5E3DA] overflow-hidden"
              >
                <Image
                  src={`https://images.unsplash.com/photo-${
                    i === 1
                      ? "1534528741775-53994a69daeb"
                      : i === 2
                      ? "1506794778202-cad84cf45f1d"
                      : "1507003211169-0a1dd7228f2d"
                  }?q=80&w=100&auto=format&fit=crop`}
                  alt="User Avatar"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
