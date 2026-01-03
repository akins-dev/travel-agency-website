"use client";

import { Globe, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import BookTourModal from "./BookTourModal";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="w-full relative z-50 pt-6">
        {/* MODAL COMPONENT */}
        <BookTourModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          tourTitle="General Inquiry" // Changed to generic title since this is the Navbar
        />

        <div className="flex justify-between items-center w-full">
          {/* LEFT: Logo & Language Selector */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="font-serif italic text-4xl relative -top-1 text-[#2B3D25]"
            >
              A
            </a>

            <button className="flex items-center gap-2 bg-[#DCDAD2] hover:bg-[#d4d2ca] px-3 py-1.5 rounded-full text-[12px] font-medium transition-colors text-[#2B3D25]">
              <Globe strokeWidth={1.5} className="w-3.5 h-3.5 opacity-70" />
              <span>English</span>
              <ChevronDown strokeWidth={1.5} className="w-3 h-3 opacity-70" />
            </button>
          </div>

          {/* CENTER: Desktop Navigation */}
          <nav className="hidden lg:block absolute left-1/2 -translate-x-1/2">
            <ul className="flex items-center gap-10 text-sm font-medium tracking-wide text-[#2B3D25]">
              {[
                { label: "Home", href: "/" },
                { label: "About us", href: "/about" },
                { label: "Transfers", href: "/transfers" },
                { label: "Tours", href: "/tours" },
                { label: "Contacts", href: "/#contacts" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:opacity-60 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT: Action Area */}
          <div className="flex items-center gap-4">
            {/* DESKTOP BOOK BUTTON - ADDED ONCLICK HERE */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden lg:block bg-[#2B3D25] cursor-pointer text-[#E9E7DE] px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-all"
            >
              Book a Tour
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-1 text-[#2B3D25]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-[#E9E7DE] z-40 flex flex-col items-center justify-center lg:hidden">
          <ul className="flex flex-col items-center gap-8 text-2xl font-medium text-[#2B3D25]">
            {[
              { label: "Home", href: "/" },
              { label: "About us", href: "/about" },
              { label: "Transfers", href: "/transfers" },
              { label: "Tours", href: "/tours" },
              { label: "Contacts", href: "/#contacts" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:opacity-60 transition-opacity"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-8">
              {/* MOBILE BOOK BUTTON - ALREADY HAD ONCLICK */}
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMobileMenuOpen(false); // Close menu when opening modal
                }}
                className="bg-[#2B3D25] text-[#E9E7DE] cursor-pointer px-8 py-3 rounded-lg text-base"
              >
                Book a Tour
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
