"use client";
import React, { useState } from "react";
import { SplitText } from "./SplitText";
import { CONTACT_INFO } from "@/data/siteData";

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-28 sm:py-36 lg:py-52 px-6 lg:px-16 bg-[#050505] text-white dark-section border-t border-white/10"
    >
      <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
        {/* Left Column: Direct Desk Details */}
        <div>
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-amber-400 font-semibold mb-6 sm:mb-8 block fade-up">
            Private Access &amp; Consultations
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-serif tracking-tight font-light mb-8 sm:mb-10 leading-[1.08]">
            <span className="block mb-1">
              <SplitText text="Initiate a" />
            </span>
            <span className="block text-amber-300">
              <SplitText text="Conversation." startDelay={0.3} />
            </span>
          </h2>

          <div className="space-y-10 sm:space-y-12 font-light text-zinc-300 fade-up delay-200 mt-12 sm:mt-16">
            <div>
              <h4 className="text-xs font-sans text-amber-400 font-semibold mb-2 uppercase tracking-[0.2em]">
                Registered Headquarters
              </h4>
              <p className="text-base sm:text-lg leading-relaxed font-sans text-zinc-200">
                {CONTACT_INFO.address}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-sans text-amber-400 font-semibold mb-2 uppercase tracking-[0.2em]">
                Direct Advisory Desk
              </h4>
              <p className="text-2xl font-serif text-white hover:text-amber-400 transition-colors cursor-pointer mb-1">
                <a href={`tel:${CONTACT_INFO.phone}`}>{CONTACT_INFO.phoneDisplay}</a>
              </p>
              <p className="text-base font-sans text-zinc-300 hover:text-amber-400 transition-colors cursor-pointer">
                <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
              </p>
            </div>

            <div>
              <h4 className="text-xs font-sans text-amber-400 font-semibold mb-2 uppercase tracking-[0.2em]">
                Operating Hours
              </h4>
              <p className="text-sm font-sans text-zinc-400">
                {CONTACT_INFO.hours}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Confidential Form */}
        <div className="bg-white/[0.03] backdrop-blur-sm p-8 sm:p-12 lg:p-16 border border-white/10 rounded-2xl fade-up delay-300 shadow-2xl">
          {submitted ? (
            <div className="text-center py-16 space-y-6">
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-amber-400 font-semibold block">
                Submission Confirmed
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-light text-white">
                Thank you for your inquiry.
              </h3>
              <p className="text-sm font-sans text-zinc-300 max-w-md mx-auto leading-relaxed">
                Your brochure request has been assigned to our senior property consultant. We will be in touch with complete discretion.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 inline-flex px-8 py-3 text-xs uppercase font-sans font-bold tracking-[0.2em] bg-amber-500 hover:bg-amber-400 text-zinc-950 rounded transition-colors cursor-pointer"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <label className="block text-xs font-sans uppercase tracking-[0.2em] text-zinc-400 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="First Name"
                    className="w-full border-b border-white/20 py-3 bg-transparent text-white focus:border-amber-400 focus:outline-none transition-colors font-sans text-sm rounded-none placeholder:text-white/20"
                  />
                </div>
                <div className="relative group">
                  <label className="block text-xs font-sans uppercase tracking-[0.2em] text-zinc-400 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full border-b border-white/20 py-3 bg-transparent text-white focus:border-amber-400 focus:outline-none transition-colors font-sans text-sm rounded-none placeholder:text-white/20"
                  />
                </div>
              </div>

              <div className="relative group">
                <label className="block text-xs font-sans uppercase tracking-[0.2em] text-zinc-400 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@email.com"
                  className="w-full border-b border-white/20 py-3 bg-transparent text-white focus:border-amber-400 focus:outline-none transition-colors font-sans text-sm rounded-none placeholder:text-white/20"
                />
              </div>

              <div className="relative group">
                <label className="block text-xs font-sans uppercase tracking-[0.2em] text-zinc-400 mb-2">
                  Phone Number (+91) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="98765 43210"
                  className="w-full border-b border-white/20 py-3 bg-transparent text-white focus:border-amber-400 focus:outline-none transition-colors font-sans text-sm rounded-none placeholder:text-white/20"
                />
              </div>

              <div className="relative group">
                <label className="block text-xs font-sans uppercase tracking-[0.2em] text-zinc-400 mb-2">
                  Nature of Inquiry &amp; Preferred Property
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Inquiring about SBR One Residence, Resale properties, or Site Visit..."
                  className="w-full border-b border-white/20 py-3 bg-transparent text-white focus:border-amber-400 focus:outline-none transition-colors font-sans text-sm resize-none rounded-none placeholder:text-white/20"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-400 text-zinc-950 py-4 text-xs font-sans font-bold tracking-[0.25em] uppercase rounded transition-colors mt-6 cursor-pointer shadow-xl"
              >
                Submit Confidentially
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
