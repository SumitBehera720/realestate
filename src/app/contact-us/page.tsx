"use client";

import React, { useState } from "react";
import { PageWrapper } from "@/components/PageWrapper";
import { Icon } from "@/components/Icon";
import { CONTACT_INFO } from "@/data/siteData";
import { PROPERTIES } from "@/data/properties";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageWrapper>
      {/* 1. Header Banner */}
      <section className="relative py-20 md:py-28 px-6 lg:px-16 border-b border-white/10 bg-zinc-950">
        <div className="max-w-[1920px] mx-auto">
          <span className="text-xs font-sans uppercase tracking-[0.25em] text-amber-400 font-semibold mb-3 block">
            Get in Touch · Let&apos;s Talk
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-white leading-tight mb-4">
            Connect with SK Realtech
          </h1>
          <p className="text-base sm:text-lg font-sans text-zinc-300 font-light max-w-2xl">
            Whether you are inquiring about SBR One Residence, seeking commercial advisory, or scheduling a private site visit in Bengaluru, our advisors are here for you.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-amber-400 font-semibold mb-2 block">
                Office Headquarters
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-light text-white mb-6">
                Visit Our Bengaluru Advisory Center
              </h2>
            </div>

            {/* Address Card */}
            <div className="p-6 bg-zinc-900/60 border border-white/10 rounded-xl space-y-3">
              <div className="flex items-center gap-3 text-amber-400">
                <Icon icon="solar:map-point-bold" width={24} height={24} />
                <h4 className="text-base font-serif text-white">Registered Address</h4>
              </div>
              <p className="text-sm font-sans text-zinc-300 font-light leading-relaxed">
                {CONTACT_INFO.address}
              </p>
              <div className="pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-amber-400 hover:text-amber-300 font-semibold"
                >
                  <span>Open in Google Maps</span>
                  <Icon icon="solar:arrow-right-up-linear" width={16} height={16} />
                </a>
              </div>
            </div>

            {/* Phone & Email Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-zinc-900/60 border border-white/10 rounded-xl space-y-2">
                <div className="text-amber-400">
                  <Icon icon="solar:phone-calling-bold" width={24} height={24} />
                </div>
                <h4 className="text-sm font-serif text-white">Direct Line</h4>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-sm font-sans font-medium text-amber-400 hover:underline block"
                >
                  {CONTACT_INFO.phoneDisplay}
                </a>
                <span className="text-[11px] text-zinc-400 font-sans block">Mon - Sat: 9:30 AM - 6:30 PM</span>
              </div>

              <div className="p-6 bg-zinc-900/60 border border-white/10 rounded-xl space-y-2">
                <div className="text-amber-400">
                  <Icon icon="solar:letter-bold" width={24} height={24} />
                </div>
                <h4 className="text-sm font-serif text-white">Email Sales</h4>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm font-sans font-medium text-amber-400 hover:underline block"
                >
                  {CONTACT_INFO.email}
                </a>
                <span className="text-[11px] text-zinc-400 font-sans block">Fast 2-hour response</span>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-6 bg-zinc-900/40 border border-white/10 rounded-xl space-y-2">
              <div className="flex items-center gap-3 text-amber-400">
                <Icon icon="solar:clock-circle-bold" width={20} height={20} />
                <h4 className="text-sm font-serif text-white">Advisory Desk Timings</h4>
              </div>
              <p className="text-xs font-sans text-zinc-300">
                {CONTACT_INFO.hours}
              </p>
              <p className="text-xs font-sans text-zinc-400 pt-1">
                Complimentary private site visit chauffeur service available across Whitefield, Indiranagar, and Koramangala.
              </p>
            </div>
          </div>

          {/* Right Column: Contact & Site Visit Form */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-900 border border-white/15 p-8 sm:p-12 rounded-2xl shadow-2xl">
              <div className="mb-8">
                <span className="text-xs font-sans uppercase tracking-[0.2em] text-amber-400 font-semibold block mb-1">
                  Send a Message
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-light text-white">
                  Enquire Now / Book a Site Visit
                </h3>
              </div>

              {submitted ? (
                <div className="p-8 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-center space-y-4">
                  <Icon icon="solar:check-circle-bold" width={48} height={48} className="text-emerald-400 mx-auto" />
                  <h4 className="text-2xl font-serif text-white">Message Dispatched!</h4>
                  <p className="text-sm font-sans text-emerald-200">
                    Thank you for reaching out to SK Realtech. Our property consultant will contact you via phone and send your requested project dossier.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-white text-zinc-950 text-xs font-sans uppercase font-bold rounded"
                  >
                    Submit Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-sans text-zinc-300 block mb-1.5 font-medium">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Anand Menon"
                        className="w-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder-zinc-500 rounded focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-sans text-zinc-300 block mb-1.5 font-medium">Phone Number (+91) *</label>
                      <input
                        type="tel"
                        required
                        placeholder="98765 43210"
                        className="w-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder-zinc-500 rounded focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-sans text-zinc-300 block mb-1.5 font-medium">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        className="w-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder-zinc-500 rounded focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-sans text-zinc-300 block mb-1.5 font-medium">Property of Interest</label>
                      <select className="w-full bg-zinc-800 border border-white/15 px-4 py-3 text-sm text-white rounded focus:outline-none focus:border-amber-400">
                        {PROPERTIES.map((p) => (
                          <option key={p.id} value={p.title}>
                            {p.title} ({p.location.split(",")[0]})
                          </option>
                        ))}
                        <option value="Commercial">Commercial Properties</option>
                        <option value="Resale">Resale &amp; Liquidations</option>
                        <option value="General">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs font-sans text-zinc-300 block mb-1.5 font-medium">Preferred Date (Optional)</label>
                      <input
                        type="date"
                        className="w-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white rounded focus:outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-sans text-zinc-300 block mb-1.5 font-medium">Preferred Time Slot</label>
                      <select className="w-full bg-zinc-800 border border-white/15 px-4 py-3 text-sm text-white rounded focus:outline-none focus:border-amber-400">
                        <option>10:00 AM - 12:00 PM</option>
                        <option>12:00 PM - 03:00 PM</option>
                        <option>03:00 PM - 06:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-sans text-zinc-300 block mb-1.5 font-medium">Your Message / Specific Requirements</label>
                    <textarea
                      rows={4}
                      placeholder="Share your preferred configuration (2.5/3 BHK), investment budget, or any questions..."
                      className="w-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder-zinc-500 rounded focus:outline-none focus:border-amber-400 transition-colors"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-sans font-bold text-xs uppercase tracking-widest rounded transition-all shadow-xl hover:shadow-amber-500/25 cursor-pointer"
                  >
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Embedded Location Map Card */}
      <section className="border-t border-white/10 bg-zinc-950 py-16 px-6 lg:px-16">
        <div className="max-w-[1920px] mx-auto">
          <div className="bg-zinc-900 border border-white/15 rounded-2xl overflow-hidden p-2 shadow-2xl">
            <div className="relative w-full h-[400px] rounded-xl overflow-hidden bg-zinc-800">
              <iframe
                title="SK Realtech Location"
                src="https://maps.google.com/maps?q=Safal%20Market,%20Bidare%20Agrahara,%20Bengaluru,%20Karnataka%20560049&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
