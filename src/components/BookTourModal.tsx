"use client";

import { useState } from "react";
import { X, Calendar, Users, Mail, User, CheckCircle2 } from "lucide-react";

interface BookTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  tourTitle: string;
}

export default function BookTourModal({
  isOpen,
  onClose,
  tourTitle,
}: BookTourModalProps) {
  const [step, setStep] = useState<"form" | "success">("form");

  // Prevent closing when clicking inside the modal content
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setStep("success");
    }, 500);
  };

  const handleClose = () => {
    onClose();
    // Reset state after animation clears (optional delay)
    setTimeout(() => setStep("form"), 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-[#1A2318]/40 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-[#EAE8DF] rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#2B3D25]/10 transition-colors z-10"
        >
          <X className="w-5 h-5 text-[#2B3D25]" />
        </button>

        {step === "form" ? (
          <div className="p-8">
            <div className="mb-6">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 block mb-1">
                Booking Request
              </span>
              <h3 className="text-2xl font-medium text-[#2B3D25] leading-tight">
                {tourTitle}
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="relative">
                <User className="absolute left-3.5 top-3.5 w-4 h-4 text-[#2B3D25]/40" />
                <input
                  required
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-[#F4F3EF] border border-transparent focus:border-[#2B3D25]/20 rounded-xl py-3 pl-10 pr-4 text-sm text-[#2B3D25] placeholder:text-[#2B3D25]/40 outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div className="relative">
                <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-[#2B3D25]/40" />
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-[#F4F3EF] border border-transparent focus:border-[#2B3D25]/20 rounded-xl py-3 pl-10 pr-4 text-sm text-[#2B3D25] placeholder:text-[#2B3D25]/40 outline-none transition-all"
                />
              </div>

              {/* Row: Date & Guests */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-3.5 w-4 h-4 text-[#2B3D25]/40" />
                  <input
                    required
                    type="date"
                    className="w-full bg-[#F4F3EF] border border-transparent focus:border-[#2B3D25]/20 rounded-xl py-3 pl-10 pr-2 text-sm text-[#2B3D25] outline-none transition-all"
                  />
                </div>
                <div className="relative">
                  <Users className="absolute left-3.5 top-3.5 w-4 h-4 text-[#2B3D25]/40" />
                  <select className="w-full bg-[#F4F3EF] border border-transparent focus:border-[#2B3D25]/20 rounded-xl py-3 pl-10 pr-4 text-sm text-[#2B3D25] outline-none transition-all appearance-none cursor-pointer">
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5+">5+ People</option>
                  </select>
                </div>
              </div>

              {/* Comments */}
              <textarea
                rows={3}
                placeholder="Any special requests or questions?"
                className="w-full bg-[#F4F3EF] border border-transparent focus:border-[#2B3D25]/20 rounded-xl py-3 px-4 text-sm text-[#2B3D25] placeholder:text-[#2B3D25]/40 outline-none transition-all resize-none"
              />

              <button
                type="submit"
                className="w-full bg-[#2B3D25] text-[#EAE8DF] py-4 rounded-xl text-xs font-bold uppercase tracking-wide hover:bg-opacity-90 transition-all shadow-lg mt-2"
              >
                Confirm Request
              </button>
            </form>
          </div>
        ) : (
          // SUCCESS STATE
          <div className="p-12 text-center flex flex-col items-center justify-center min-h-100">
            <div className="w-20 h-20 bg-[#DCE1A5] rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-300">
              <CheckCircle2 className="w-10 h-10 text-[#2B3D25]" />
            </div>
            <h3 className="text-2xl font-medium text-[#2B3D25] mb-2">
              Request Sent!
            </h3>
            <p className="text-sm text-[#2B3D25]/60 leading-relaxed max-w-65 mb-8">
              Thank you for choosing Armonia. We will review your request and
              get back to you shortly via email.
            </p>
            <button
              onClick={handleClose}
              className="px-8 py-3 bg-[#F4F3EF] text-[#2B3D25] rounded-xl text-xs font-bold uppercase tracking-wide hover:bg-[#EAE8DF] transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
