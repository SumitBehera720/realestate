"use client";
import React, { useState, useEffect } from "react";
import { Icon } from "./Icon";

export const EnquiryPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Show popup after 10 seconds of page load
    const initialTimer = setTimeout(() => {
      if (!submitted) setIsOpen(true);
    }, 10000);

    // Then show it every 1 minute (60000 ms)
    const interval = setInterval(() => {
      if (!submitted) setIsOpen(true);
    }, 60000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [submitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const { createEnquiry } = await import("@/app/actions/enquiryActions");
    await createEnquiry({ ...formData, property: "General Enquiry Popup" });
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setIsOpen(false), 3000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="bg-zinc-950 border border-white/10 p-8 sm:p-12 rounded-2xl shadow-2xl max-w-lg w-full relative transform animate-fade-in-up">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <Icon icon="solar:close-circle-linear" width={28} height={28} />
        </button>

        <div className="mb-8 text-center">
          <span className="text-xs font-sans uppercase tracking-[0.2em] text-amber-400 font-semibold block mb-2">
            Priority Access
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-light text-white">
            Enquire Now
          </h3>
          <p className="text-sm font-sans text-zinc-400 mt-2">
            Connect with our property advisors for exclusive details and site visits.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-8">
            <Icon icon="solar:check-circle-bold" width={48} height={48} className="text-emerald-400 mx-auto mb-4" />
            <h4 className="text-xl font-serif text-white">Request Sent</h4>
            <p className="text-sm text-zinc-400 mt-2">We will get in touch with you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                type="text"
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                placeholder="Full Name *"
                className="w-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder-zinc-500 rounded focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
            <div>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
                placeholder="Phone Number *"
                className="w-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder-zinc-500 rounded focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder-zinc-500 rounded focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-sans font-bold text-xs uppercase tracking-widest rounded transition-all cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
