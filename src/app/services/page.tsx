"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";
import { Icon } from "@/components/Icon";
import { SERVICES, CONTACT_INFO } from "@/data/siteData";

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState("Buying / Selling");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const name = (form.querySelector<HTMLInputElement>("input[type='text']")?.value || "") as string;
    const phone = (form.querySelector<HTMLInputElement>("input[type='tel']")?.value || "") as string;
    const email = (form.querySelector<HTMLInputElement>("input[type='email']")?.value || "") as string;
    
    const { createEnquiry } = await import("@/app/actions/enquiryActions");
    const { sendToWhatsApp } = await import("@/utils/whatsapp");
    
    const res = await createEnquiry({
      name,
      phone,
      email,
      property: `Services Page - ${selectedService}`
    });
    
    setIsSubmitting(false);
    setFormSubmitted(true);
    
    if (res.success) {
      sendToWhatsApp({
        name,
        phone,
        email,
        property: selectedService,
        source: "Services Page"
      });
    }
  };

  return (
    <PageWrapper>
      {/* 1. Services Hero Banner */}
      <section className="relative py-20 md:py-28 px-6 lg:px-16 border-b border-white/10 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="/images/advisory-cover.jpg"
            alt="SK Realtech Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1920px] mx-auto">
          <div className="max-w-4xl">
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-amber-400 font-semibold mb-4 block">
              What We Offer · Founded in {CONTACT_INFO.since}
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-white leading-tight mb-6">
              Facilitating people to buy &amp; sell properties with confidence.
            </h1>
            <p className="text-base sm:text-lg font-sans text-zinc-300 font-light max-w-2xl leading-relaxed mb-8">
              &ldquo;Buying real estate is not only the best way, the quickest way, the safest way, but the only way to become wealthy.&rdquo;
              <span className="block mt-2 text-sm text-amber-400 font-normal">— Marshall Field</span>
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#enquiry-form"
                className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-sans font-bold text-xs uppercase tracking-widest rounded transition-colors shadow-lg"
              >
                Book a Consultation
              </a>
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans text-xs uppercase tracking-wider rounded transition-colors flex items-center gap-2"
              >
                <Icon icon="solar:phone-linear" width={16} height={16} className="text-amber-400" />
                <span>Call {CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Offerings Grid */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 max-w-[1920px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans uppercase tracking-[0.25em] text-amber-400 font-semibold mb-2 block">
            End-To-End Real Estate Solutions
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white mb-4">
            Changing lives through real estate.
          </h2>
          <p className="text-sm font-sans text-zinc-400 font-light">
            Comprehensive services tailored to luxury homebuyers, institutional investors, and property sellers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-zinc-900/50 border border-white/10 hover:border-amber-400/40 rounded-xl overflow-hidden transition-all duration-500 flex flex-col group shadow-xl"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <h3 className="text-2xl font-serif text-white font-medium">
                    {service.title}
                  </h3>
                  <span className="text-xs font-sans text-amber-400">
                    {service.subtitle}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col justify-between flex-1 space-y-6">
                <p className="text-sm font-sans text-zinc-300 leading-relaxed font-light">
                  {service.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  <h4 className="text-xs font-sans uppercase tracking-wider text-white font-semibold">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs font-sans text-zinc-400">
                        <Icon icon="solar:check-circle-bold" width={16} height={16} className="text-amber-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#enquiry-form"
                  onClick={() => setSelectedService(service.title)}
                  className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-amber-400 hover:text-amber-300 font-semibold transition-colors pt-2"
                >
                  <span>Enquire for {service.title}</span>
                  <Icon icon="solar:arrow-right-linear" width={16} height={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section className="bg-zinc-950 py-20 lg:py-28 border-y border-white/10">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-sans uppercase tracking-[0.25em] text-amber-400 font-semibold block">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-light text-white leading-tight">
                Let us guide you home.
              </h2>
              <p className="text-base font-sans text-zinc-300 font-light leading-relaxed">
                &ldquo;The real estate company you can trust to keep it real&rdquo; reflects our relentless commitment to honesty, transparency, and genuine service. In a market filled with complexity, we simplify the process with clear communication and real guidance.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded">
                  <div className="p-2.5 bg-amber-400/10 text-amber-400 rounded">
                    <Icon icon="solar:shield-check-linear" width={24} height={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-sans font-semibold text-white">Top Certified Agency</h4>
                    <p className="text-xs text-zinc-400 font-sans mt-0.5">Karnataka RERA compliant partnerships and audited title verifications.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded">
                  <div className="p-2.5 bg-amber-400/10 text-amber-400 rounded">
                    <Icon icon="solar:users-group-two-rounded-linear" width={24} height={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-sans font-semibold text-white">Dedicated Advisory Desk</h4>
                    <p className="text-xs text-zinc-400 font-sans mt-0.5">Direct representation for premier properties like SBR One Residence.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded">
                  <div className="p-2.5 bg-amber-400/10 text-amber-400 rounded">
                    <Icon icon="solar:headphones-round-linear" width={24} height={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-sans font-semibold text-white">24/7 Client Support</h4>
                    <p className="text-xs text-zinc-400 font-sans mt-0.5">Ongoing assistance from site visits to registry and interior handover.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/images/estate-agent.jpg"
                  alt="SK Realtech Advisors"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/60 backdrop-blur-md rounded-xl border border-white/15">
                  <span className="text-amber-400 text-xs font-sans uppercase tracking-widest font-semibold block mb-1">
                    Client Satisfaction Rating
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-serif text-white font-medium">4.8 / 5.0</span>
                    <div className="flex text-amber-400 text-sm">
                      {"★★★★★"}
                    </div>
                    <span className="text-xs text-zinc-400 font-sans">Over 1,500+ Happy Families Assisted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Client Testimonials */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 max-w-[1920px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-sans uppercase tracking-[0.25em] text-amber-400 font-semibold mb-2 block">
            Verified Experiences
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white mb-3">
            What our clients are saying.
          </h2>
          <p className="text-sm font-sans text-zinc-400 font-light">
            Real feedback from property buyers and investors across Bengaluru.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Kayla Morris",
              role: "Founder, Lokamart",
              text: "SK Realtech guided us seamlessly through booking our 3 BHK at SBR One Residence. The documentation was 100% transparent and their loan desk arranged approvals in 4 business days.",
              image: "/images/client-meeting.jpg",
              rating: 5
            },
            {
              name: "Beatrice Barker",
              role: "CEO, Piccolog",
              text: "As an NRI investor living in Dubai, finding trustworthy local real estate partners is tough. SK Realtech provided thorough video walkthroughs and legal checks for our villa plot.",
              image: "/images/about-interior.jpg",
              rating: 5
            },
            {
              name: "Lewis Matthews",
              role: "Executive Director, Retail Ventures",
              text: "Exceptional commercial advisory. They matched us with high-yield office assets in Whitefield with immediate corporate tenants in place. Highly recommended!",
              image: "/images/noble-apartments.webp",
              rating: 5
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/60 border border-white/10 p-8 rounded-xl flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex text-amber-400 text-sm">
                  {"★".repeat(item.rating)}
                </div>
                <p className="text-sm font-sans text-zinc-300 font-light leading-relaxed italic">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center font-serif text-amber-300 font-medium">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="text-sm font-sans font-medium text-white">{item.name}</h4>
                  <span className="text-xs text-zinc-400 font-sans">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Booking / Enquiry Form Section */}
      <section id="enquiry-form" className="bg-[#08080a] py-20 lg:py-28 border-t border-white/10 px-6 lg:px-16">
        <div className="max-w-4xl mx-auto bg-zinc-900 border border-white/15 p-8 sm:p-12 rounded-2xl shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-amber-400 font-semibold mb-2 block">
              Enquire Now
            </span>
            <h3 className="text-3xl font-serif font-light text-white mb-3">
              Book a Site Visit or Advisory Call
            </h3>
            <p className="text-xs sm:text-sm font-sans text-zinc-400">
              Leave your contact details and our team will get in touch with detailed brochures and site visit coordination.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-center space-y-3">
              <Icon icon="solar:check-circle-bold" width={48} height={48} className="text-emerald-400 mx-auto" />
              <h4 className="text-xl font-serif text-white">Thank you! Your enquiry has been received.</h4>
              <p className="text-xs text-emerald-200 font-sans">
                Our property specialist will contact you shortly to confirm your requested service.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-sans text-zinc-300 block mb-1.5 font-medium">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder-zinc-500 rounded focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-sans text-zinc-300 block mb-1.5 font-medium">Phone Number (+91) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter 10-digit number"
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
                    placeholder="name@email.com"
                    className="w-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder-zinc-500 rounded focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-sans text-zinc-300 block mb-1.5 font-medium">Service Requested</label>
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full bg-zinc-800 border border-white/15 px-4 py-3 text-sm text-white rounded focus:outline-none focus:border-amber-400"
                  >
                    <option>Buying / Selling</option>
                    <option>Loan Advice</option>
                    <option>Interior Service</option>
                    <option>Documentation Service</option>
                    <option>New Launches (Launching Soon)</option>
                    <option>SBR One Residence Site Visit</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-sans text-zinc-300 block mb-1.5 font-medium">Preferred Date</label>
                  <input
                    type="date"
                    className="w-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white rounded focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="text-xs font-sans text-zinc-300 block mb-1.5 font-medium">Preferred Time</label>
                  <select className="w-full bg-zinc-800 border border-white/15 px-4 py-3 text-sm text-white rounded focus:outline-none focus:border-amber-400">
                    <option>Morning (10:00 AM - 1:00 PM)</option>
                    <option>Afternoon (1:00 PM - 4:00 PM)</option>
                    <option>Evening (4:00 PM - 7:00 PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-sans text-zinc-300 block mb-1.5 font-medium">Message / Requirement Notes</label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your preferred budget, BHK requirement, or timeline..."
                  className="w-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder-zinc-500 rounded focus:outline-none focus:border-amber-400 transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-sans font-bold text-xs uppercase tracking-widest rounded transition-all shadow-xl hover:shadow-amber-500/25 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Enquiry"}
              </button>
            </form>
          )}
        </div>
      </section>
    </PageWrapper>
  );
}
