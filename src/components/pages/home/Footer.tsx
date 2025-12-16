import {
  Mail,
  PenTool,
  Phone,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full font-sans text-[#2B3D25]">
      {/* ------------------------------- */}
      {/* PART 1: PRE-FOOTER (Contact)    */}
      {/* ------------------------------- */}
      <div className="bg-[#E2DFCE] px-4 md:px-8 py-20">
        <div className="max-w-[1000px] mx-auto text-center space-y-16">
          {/* Header */}
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest opacity-60 flex items-center justify-center gap-2">
              <span className="w-2 h-[1px] bg-current" /> GET IN TOUCH
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
              Have a question or need <br /> assistance?
            </h2>
            <p className="text-sm opacity-60">
              We&apos;re here to help in the way most convenient for you:
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Method 1: Email */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#2B3D25] text-[#EAE8DF] flex items-center justify-center mb-2">
                <Mail strokeWidth={1.5} className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm">Write Us</h3>
              <p className="text-xs opacity-60 -mt-2">
                Reach out to us by email
              </p>
              <a
                href="mailto:info@armonia-excursions.gr"
                className="text-xs font-bold border-b border-[#2B3D25]/20 hover:border-[#2B3D25] transition-colors pb-0.5"
              >
                info@armonia-excursions.gr
              </a>
            </div>

            {/* Method 2: Form */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#2B3D25] text-[#EAE8DF] flex items-center justify-center mb-2">
                <PenTool strokeWidth={1.5} className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm">Fill out Form</h3>
              <p className="text-xs opacity-60 -mt-2">
                Submit your request online
              </p>
              <button className="bg-[#2B3D25] text-[#EAE8DF] px-6 py-2.5 rounded-[4px] text-xs font-bold uppercase tracking-wide hover:opacity-90 transition-opacity mt-1">
                Leave Request
              </button>
            </div>

            {/* Method 3: Phone */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#2B3D25] text-[#EAE8DF] flex items-center justify-center mb-2">
                <Phone strokeWidth={1.5} className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-sm">Call Us</h3>
              <p className="text-xs opacity-60 -mt-2">
                Mon-Fri from 9am to 6pm
              </p>
              <a
                href="tel:+306944553616"
                className="text-xs font-bold border-b border-[#2B3D25]/20 hover:border-[#2B3D25] transition-colors pb-0.5"
              >
                +30 694 455 3616
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------- */}
      {/* PART 2: MAIN FOOTER (Dark)      */}
      {/* ------------------------------- */}
      <div className="bg-[#E2DFCE] px-4 md:px-8 pb-8 pt-0">
        <div className="bg-[#2B3D25] text-[#EAE8DF] rounded-[2.5rem] px-8 md:px-16 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 border-b border-[#EAE8DF]/10 pb-16">
            {/* COL 1: Logo & Tagline (Spans 4) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="font-serif italic text-5xl font-light leading-none">
                A
              </div>
              <div className="space-y-1">
                <h4 className="text-[#DCE1A5] text-sm font-bold uppercase tracking-wider">
                  Tour Agents <br /> you can rely on!
                </h4>
              </div>
              {/* Socials */}
              <div className="flex gap-4 pt-4">
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* COL 2: Company Links (Spans 2) */}
            <div className="lg:col-span-2 lg:col-start-6 space-y-6">
              <h5 className="text-[#EAE8DF]/40 text-xs font-bold uppercase tracking-widest mb-4">
                Company
              </h5>
              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#DCE1A5] transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#DCE1A5] transition-colors"
                  >
                    All Tours
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#DCE1A5] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#DCE1A5] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* COL 3: About Us Links (Spans 2) */}
            <div className="lg:col-span-2 space-y-6">
              <h5 className="text-[#EAE8DF]/40 text-xs font-bold uppercase tracking-widest mb-4">
                About Us
              </h5>
              <ul className="space-y-3 text-sm font-medium">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#DCE1A5] transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#DCE1A5] transition-colors"
                  >
                    Cookies Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* COL 4: Contact Info (Spans 3) */}
            <div className="lg:col-span-3 space-y-6">
              <h5 className="text-[#EAE8DF]/40 text-xs font-bold uppercase tracking-widest mb-4">
                Contact
              </h5>
              <div className="space-y-3 text-sm">
                <p>Athens, Greece</p>
                <p>+30 694 455 3616</p>
                <a
                  href="mailto:info@armonia-excursions.gr"
                  className="block hover:text-[#DCE1A5] transition-colors"
                >
                  info@armonia-excursions.gr
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-[#EAE8DF]/30 text-[10px] uppercase tracking-wider">
            ©2025 Armonia Excursions. All rights <br className="md:hidden" />{" "}
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
