"use client";

import {
  Mail,
  PenTool,
  Phone,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import BookTourModal from "@/components/BookTourModal";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer id="contacts" className="w-full font-sans text-[#2B3D25]">
      {/* 1. Modal Integration */}
      <BookTourModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tourTitle="General Inquiry"
      />

      {/* ------------------------------- */}
      {/* PART 1: PRE-FOOTER (Contact)    */}
      {/* ------------------------------- */}
      <div className="bg-[#E2DFCE] py-20">
        <div className="max-w-[1800px] mx-auto px-4 md:px-8 text-center space-y-16">
          {/* Header */}
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest opacity-60 flex items-center justify-center gap-2">
              <span className="w-2 h-px bg-current" /> GET IN TOUCH
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight">
              Have a question or need <br /> assistance?
            </h2>
            <p className="text-sm opacity-60">
              We&apos;re here to help in the way most convenient for you:
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {/* Method 1: Email */}
            <div className="flex flex-col items-center gap-6 group cursor-pointer">
              <a
                href="mailto:info@armonia-excursions.gr"
                className="w-14 h-14 rounded-full bg-[#2B3D25] text-[#EAE8DF] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275)"
              >
                <Mail strokeWidth={1.5} className="w-6 h-6" />
              </a>
              <div className="space-y-1">
                <h3 className="font-bold text-sm">Write Us</h3>
                <p className="text-xs opacity-60">Reach out to us by email</p>
              </div>
              <a
                href="mailto:info@armonia-excursions.gr"
                className="text-xs font-bold relative pb-1 overflow-hidden"
              >
                <span className="relative z-10">
                  info@armonia-excursions.gr
                </span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#2B3D25] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            {/* Method 2: Form (Opens Modal) */}
            <div
              onClick={() => setIsModalOpen(true)}
              className="flex flex-col items-center gap-6 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-full bg-[#2B3D25] text-[#EAE8DF] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275)">
                <PenTool strokeWidth={1.5} className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm">Fill out Form</h3>
                <p className="text-xs opacity-60">Submit your request online</p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent double triggering
                  setIsModalOpen(true);
                }}
                className="bg-[#2B3D25] text-[#EAE8DF] px-8 py-3 rounded-sm text-[10px] font-bold uppercase tracking-wide hover:opacity-90 hover:shadow-md transition-all mt-1"
              >
                Leave Request
              </button>
            </div>

            {/* Method 3: Call */}
            <div className="flex flex-col items-center gap-6 group cursor-pointer">
              <a
                href="tel:+306944553616"
                className="w-14 h-14 rounded-full bg-[#2B3D25] text-[#EAE8DF] flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275)"
              >
                <Phone strokeWidth={1.5} className="w-6 h-6" />
              </a>
              <div className="space-y-1">
                <h3 className="font-bold text-sm">Call Us</h3>
                <p className="text-xs opacity-60">Mon-Fri from 8am to 5pm</p>
              </div>
              <a
                href="tel:+306944553616"
                className="text-xs font-bold relative pb-1 overflow-hidden"
              >
                <span className="relative z-10">+30 694 455 3616</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#2B3D25] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------- */}
      {/* PART 2: MAIN FOOTER (Greenish)  */}
      {/* ------------------------------- */}
      <div className="bg-[#E2DFCE] pb-8 pt-0">
        <div className="max-w-[1800px] mx-auto px-4 md:px-8">
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
                  <a
                    href="https://www.instagram.com/akins.dev_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-70 transition-opacity"
                  >
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
                    <Link
                      href="/"
                      className="hover:text-[#DCE1A5] transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/tours"
                      className="hover:text-[#DCE1A5] transition-colors"
                    >
                      All Tours
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-[#DCE1A5] transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#contacts"
                      className="hover:text-[#DCE1A5] transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* COL 3: About Us Links (Spans 2) */}
              <div className="lg:col-span-2 space-y-6">
                <h5 className="text-[#EAE8DF]/40 text-xs font-bold uppercase tracking-widest mb-4">
                  Legal
                </h5>
                <ul className="space-y-3 text-sm font-medium">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-[#DCE1A5] transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-[#DCE1A5] transition-colors"
                    >
                      Cookies Policy
                    </Link>
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
      </div>
    </footer>
  );
}
