"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { CONTACT_INFO } from "@/data/siteData";

interface Props {
  property: any;
  allProperties: any[];
}

export default function PropertyDetailClient({ property, allProperties }: Props) {
  const [activeImage, setActiveImage] = useState(property.heroImage);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"enquire" | "brochure" | "sitevisit">("enquire");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleOpenModal = (type: "enquire" | "brochure" | "sitevisit") => {
    setModalType(type);
    setFormSubmitted(false);
    setModalOpen(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // We need formData to send to whatsapp, but the form doesn't use state.
    // Let's use FormData object from the event target.
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const name = (formData.get("name") || form.querySelector<HTMLInputElement>("input[type='text']")?.value || "") as string;
    const phone = (formData.get("phone") || form.querySelector<HTMLInputElement>("input[type='tel']")?.value || "") as string;
    const email = (formData.get("email") || form.querySelector<HTMLInputElement>("input[type='email']")?.value || "") as string;
    
    const { createEnquiry } = await import("@/app/actions/enquiryActions");
    const { sendToWhatsApp } = await import("@/utils/whatsapp");
    
    const res = await createEnquiry({
      name,
      phone,
      email,
      property: property.title + " (Quick Action/Modal)"
    });
    
    setFormSubmitted(true);
    
    if (res.success) {
      sendToWhatsApp({
        name,
        phone,
        email,
        property: property.title,
        source: "Property Detail Page"
      });
    }
  };

  const otherProperties = allProperties.filter((p) => p.id !== property.id);

  return (
    <div className="bg-[#050505] text-white">
      {/* 1. Breadcrumbs & Header Bar */}
      <div className="border-b border-white/10 bg-zinc-950/80 py-4 px-6 lg:px-16">
        <div className="max-w-[1920px] mx-auto flex items-center justify-between text-xs font-sans text-zinc-400">
          <div className="flex items-center space-x-2">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/properties" className="hover:text-amber-400 transition-colors">
              Properties
            </Link>
            <span>/</span>
            <span className="text-white font-medium">{property.title}</span>
          </div>

          <div className="hidden sm:flex items-center space-x-4">
            <span className="text-amber-400 font-medium">RERA: {property.reraNo || "Approved"}</span>
          </div>
        </div>
      </div>

      {/* 2. Hero Header Showcase */}
      <section className="relative py-12 lg:py-16 px-6 lg:px-16 max-w-[1920px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8">
          <div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3.5 py-1 text-xs font-sans uppercase tracking-widest bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded">
                {property.status}
              </span>
              <span className="px-3.5 py-1 text-xs font-sans uppercase tracking-widest bg-white/10 text-zinc-300 border border-white/15 rounded">
                {property.propertyType}
              </span>
              {property.reraNo && (
                <span className="text-xs font-sans text-zinc-400">
                  RERA No# {property.reraNo}
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-white tracking-tight mb-3">
              {property.title}
            </h1>
            <p className="text-base sm:text-xl font-sans text-zinc-300 font-light max-w-3xl flex items-center gap-2">
              <Icon icon="solar:map-point-linear" width={20} height={20} className="text-amber-400 shrink-0" />
              <span>{property.fullAddress}</span>
            </p>
          </div>

          {/* Pricing & CTA Quick Actions */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-4 shrink-0">
            <div>
              <span className="text-xs font-sans uppercase tracking-wider text-zinc-400 block lg:text-right">
                Starting From
              </span>
              <span className="text-3xl sm:text-4xl font-serif text-amber-400 font-medium block lg:text-right">
                {property.price}
              </span>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleOpenModal("brochure")}
                className="px-5 py-3 text-xs font-sans font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded transition-colors flex items-center gap-2"
              >
                <Icon icon="solar:download-square-linear" width={16} height={16} className="text-amber-400" />
                <span>Brochure</span>
              </button>
              <button
                onClick={() => handleOpenModal("sitevisit")}
                className="px-6 py-3 text-xs font-sans font-semibold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-zinc-950 rounded transition-colors shadow-lg flex items-center gap-2"
              >
                <Icon icon="solar:calendar-date-linear" width={16} height={16} />
                <span>Book Site Visit</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3. Main Gallery Showcase */}
        <div className="space-y-4">
          <div className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-lg border border-white/10 bg-zinc-900 shadow-2xl">
            <img
              src={activeImage}
              alt={property.title}
              className="w-full h-full object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between pointer-events-none">
              <span className="text-xs sm:text-sm font-sans tracking-wide text-zinc-200 bg-black/60 backdrop-blur-md px-4 py-2 rounded border border-white/15">
                Official Project Visuals · {property.title}
              </span>
              <span className="text-xs font-sans text-zinc-400 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded border border-white/15">
                {property.gallery.length} Images Available
              </span>
            </div>
          </div>

          {/* Thumbnail Gallery Selector */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin">
            {property.gallery.map((img: string, i: number) => (
              <button
                key={i}
                onClick={() => setActiveImage(img)}
                className={`relative aspect-[16/10] w-24 sm:w-36 shrink-0 overflow-hidden rounded border transition-all ${
                  activeImage === img
                    ? "border-amber-400 ring-2 ring-amber-400/40 opacity-100 scale-105"
                    : "border-white/10 opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Key Specifications Matrix */}
      <section className="bg-zinc-950 py-12 border-y border-white/10">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-16">
          <h2 className="text-xs font-sans uppercase tracking-[0.25em] text-amber-400 font-semibold mb-8">
            Project Overview &amp; Key Parameters
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="p-5 bg-white/5 border border-white/10 rounded">
              <span className="text-xs text-zinc-400 font-sans block mb-1">Bedrooms / Config</span>
              <span className="text-lg font-serif text-white font-medium">{property.bedrooms}</span>
            </div>

            <div className="p-5 bg-white/5 border border-white/10 rounded">
              <span className="text-xs text-zinc-400 font-sans block mb-1">Super Built-up Area</span>
              <span className="text-lg font-serif text-white font-medium">{property.area}</span>
            </div>

            <div className="p-5 bg-white/5 border border-white/10 rounded">
              <span className="text-xs text-zinc-400 font-sans block mb-1">Location</span>
              <span className="text-lg font-serif text-white font-medium">{property.location?.split(",")[0] || ""}</span>
            </div>

            {property.developmentSize && (
              <div className="p-5 bg-white/5 border border-white/10 rounded">
                <span className="text-xs text-zinc-400 font-sans block mb-1">Development Size</span>
                <span className="text-lg font-serif text-white font-medium">{property.developmentSize}</span>
              </div>
            )}

            {property.totalUnits && (
              <div className="p-5 bg-white/5 border border-white/10 rounded">
                <span className="text-xs text-zinc-400 font-sans block mb-1">Total Units</span>
                <span className="text-lg font-serif text-white font-medium">{property.totalUnits}</span>
              </div>
            )}

            {property.completionDate && (
              <div className="p-5 bg-white/5 border border-white/10 rounded">
                <span className="text-xs text-zinc-400 font-sans block mb-1">Possession</span>
                <span className="text-lg font-serif text-white font-medium">{property.completionDate}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. Deep Overview & Highlights */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Left: Project Narrative */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-amber-400 font-semibold mb-3 block">
              Architectural Vision
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white leading-tight">
              Crafted for elevated modern living.
            </h2>
          </div>

          <div className="space-y-5 text-base sm:text-lg font-sans font-light text-zinc-300 leading-relaxed">
            {property.overview?.map((paragraph: string, idx: number) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Highlights Checklist */}
          <div className="pt-6">
            <h3 className="text-lg font-serif text-white mb-6">Key Development Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {property.highlights?.map((h: string, i: number) => (
                <div key={i} className="flex items-start gap-3 p-3.5 bg-white/5 border border-white/10 rounded">
                  <Icon icon="solar:check-circle-bold" width={20} height={20} className="text-amber-400 shrink-0 mt-0.5" />
                  <span className="text-sm font-sans text-zinc-200">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications */}
          <div className="pt-10">
            <h3 className="text-lg font-serif text-white mb-6">Construction &amp; Finish Specifications</h3>
            <div className="border border-white/10 divide-y divide-white/10 rounded overflow-hidden">
              {property.specifications?.map((spec: any, i: number) => (
                <div key={i} className="p-4 sm:p-5 bg-white/[0.02] grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <span className="text-xs uppercase font-sans tracking-wider text-amber-400 font-semibold sm:col-span-1">
                    {spec.label}
                  </span>
                  <span className="text-sm font-sans text-zinc-300 sm:col-span-2">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Quick Action Contact Box & Booking Form */}
        <div className="lg:col-span-5 space-y-8">
          <div className="sticky top-28 bg-zinc-900 border border-white/15 p-8 sm:p-10 rounded-xl shadow-2xl space-y-6">
            <div className="border-b border-white/10 pb-5">
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-amber-400 font-semibold block mb-1">
                Direct Developer Partner Desk
              </span>
              <h3 className="text-2xl font-serif text-white font-normal">
                Enquire for {property.title}
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Connect directly with our authorized sales advisors for best unit allocation &amp; spot booking offers.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-sans text-zinc-300 block mb-1.5 font-medium">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder-zinc-500 rounded focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-sans text-zinc-300 block mb-1.5 font-medium">
                    Phone Number (+91) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="98765 43210"
                    className="w-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder-zinc-500 rounded focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-sans text-zinc-300 block mb-1.5 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@email.com"
                    className="w-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white placeholder-zinc-500 rounded focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-sans text-zinc-300 block mb-1.5 font-medium">
                  Preferred Configuration
                </label>
                <select className="w-full bg-zinc-800 border border-white/15 px-4 py-3 text-sm text-white rounded focus:outline-none focus:border-amber-400">
                  <option>{property.bedrooms} - Standard Layout</option>
                  <option>Higher Floor Premium Vistas</option>
                  <option>Corner Unit (Maximum Sunlight)</option>
                  <option>Custom Plotted / Penthouse</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-sans text-zinc-300 block mb-1.5 font-medium">
                  Preferred Site Visit Date &amp; Time
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="date"
                    className="w-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white rounded focus:outline-none focus:border-amber-400"
                  />
                  <select 
                    className="w-full bg-zinc-800 border border-white/15 px-4 py-3 text-sm text-white rounded focus:outline-none focus:border-amber-400"
                    onChange={(e) => {
                      const val = e.target.value;
                      const input = document.getElementById("quickCustomTime") as HTMLInputElement;
                      if (input) input.style.display = val === "Custom Time Slot" ? "block" : "none";
                    }}
                  >
                    <option>09:00 AM - 11:00 AM</option>
                    <option>11:00 AM - 01:00 PM</option>
                    <option>01:00 PM - 03:00 PM</option>
                    <option>03:00 PM - 05:00 PM</option>
                    <option>05:00 PM - 07:00 PM</option>
                    <option>07:00 PM - 09:00 PM</option>
                    <option value="Custom Time Slot">Custom Time Slot</option>
                  </select>
                  <input
                    id="quickCustomTime"
                    type="time"
                    style={{ display: "none" }}
                    className="col-span-2 w-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white rounded focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-sans font-bold text-xs uppercase tracking-[0.2em] rounded transition-all shadow-xl hover:shadow-amber-500/20"
              >
                Request Detailed Brochure &amp; Price Sheet
              </button>
            </form>

            {formSubmitted && (
              <div className="p-4 bg-emerald-500/20 border border-emerald-500/40 rounded text-emerald-300 text-xs font-sans">
                ✓ Thank you! Your request for {property.title} has been logged. Our lead advisor will contact you within 30 minutes.
              </div>
            )}

            <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <Icon icon="solar:phone-linear" width={16} height={16} className="text-amber-400" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-amber-400">
                  {CONTACT_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Icon icon="solar:letter-linear" width={16} height={16} className="text-amber-400" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-amber-400">
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Comprehensive Amenities Showcase */}
      <section className="bg-zinc-950 py-20 lg:py-28 border-t border-white/10">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-amber-400 font-semibold mb-3 block">
              World-Class Lifestyle
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white mb-4">
              Curated Amenities &amp; Facilities
            </h2>
            <p className="text-sm text-zinc-400 font-sans">
              Engineered for health, leisure, and everyday luxury for your entire family.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {property.amenities?.map((amenity: any, i: number) => (
              <div
                key={i}
                className="p-6 bg-white/[0.03] border border-white/10 rounded-lg hover:border-amber-400/50 hover:bg-white/[0.06] transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-400 mb-4 group-hover:bg-amber-400 group-hover:text-zinc-950 transition-colors">
                  <Icon icon={amenity.icon} width={24} height={24} />
                </div>
                <span className="text-sm font-sans font-medium text-zinc-200 group-hover:text-white">
                  {amenity.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Other Signature Properties */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 max-w-[1920px] mx-auto border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-amber-400 font-semibold mb-2 block">
              More Opportunities
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-white">
              Explore Similar Developments
            </h2>
          </div>
          <Link
            href="/properties"
            className="text-xs font-sans uppercase tracking-widest text-zinc-300 hover:text-amber-400 transition-colors flex items-center gap-2"
          >
            <span>View All Properties</span>
            <Icon icon="solar:arrow-right-linear" width={16} height={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherProperties.slice(0, 3).map((item) => (
            <Link
              key={item.id}
              href={`/properties/${item.slug}`}
              className="group bg-zinc-900/50 border border-white/10 hover:border-amber-400/40 rounded-lg overflow-hidden transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={item.heroImage}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 bg-black/80 px-3 py-1 text-xs font-sans font-medium text-amber-400 rounded border border-white/10">
                  {item.price}
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-sans text-zinc-400 block mb-1">
                  {item.location}
                </span>
                <h3 className="text-xl font-serif text-white group-hover:text-amber-300 transition-colors mb-2">
                  {item.title}
                </h3>
                <p className="text-xs font-sans text-zinc-400 mb-4">
                  {item.bedrooms} · {item.area}
                </p>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-sans uppercase tracking-wider text-amber-400">
                  <span>View Details</span>
                  <Icon icon="solar:arrow-right-linear" width={16} height={16} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 8. Interactive Modal for Brochure / Site Visit */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-6">
          <div className="bg-zinc-950 border border-white/20 p-8 sm:p-12 max-w-lg w-full relative rounded-xl shadow-2xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white"
            >
              <Icon icon="solar:close-circle-linear" width={28} height={28} />
            </button>

            <span className="text-xs font-sans uppercase tracking-widest text-amber-400 font-semibold block mb-2">
              {modalType === "brochure"
                ? "Download Official Brochure"
                : modalType === "sitevisit"
                ? "Schedule Private Site Visit"
                : "Submit Inquiry"}
            </span>

            <h3 className="text-2xl font-serif text-white mb-2">
              {property.title}
            </h3>
            <p className="text-xs font-sans text-zinc-400 mb-6">
              {modalType === "brochure"
                ? "Enter your contact details to instantly receive the comprehensive PDF brochure & floor plans."
                : "Select your preferred date. Our team provides doorstep chauffeur service in Bengaluru."}
            </p>

            {formSubmitted ? (
              <div className="p-6 bg-emerald-500/20 border border-emerald-500/40 rounded text-center space-y-3">
                <Icon icon="solar:check-circle-bold" width={40} height={40} className="text-emerald-400 mx-auto" />
                <h4 className="text-base font-serif text-white">Request Confirmed!</h4>
                <p className="text-xs font-sans text-emerald-200">
                  Our sales manager has been notified and the brochure link has been sent to your details.
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="mt-4 px-6 py-2 bg-white text-black text-xs font-sans uppercase font-bold rounded"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    className="w-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white rounded focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number (+91)"
                    className="w-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white rounded focus:outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="w-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white rounded focus:outline-none focus:border-amber-400"
                  />
                </div>
                {modalType === "sitevisit" && (
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="date"
                      required
                      className="w-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white rounded focus:outline-none focus:border-amber-400"
                    />
                    <select 
                      className="w-full bg-zinc-800 border border-white/15 px-4 py-3 text-sm text-white rounded focus:outline-none focus:border-amber-400"
                      onChange={(e) => {
                        const val = e.target.value;
                        const input = document.getElementById("customTimeInput") as HTMLInputElement;
                        if (input) input.style.display = val === "Custom Time Slot" ? "block" : "none";
                      }}
                    >
                      <option>09:00 AM - 11:00 AM</option>
                      <option>11:00 AM - 01:00 PM</option>
                      <option>01:00 PM - 03:00 PM</option>
                      <option>03:00 PM - 05:00 PM</option>
                      <option>05:00 PM - 07:00 PM</option>
                      <option>07:00 PM - 09:00 PM</option>
                      <option value="Custom Time Slot">Custom Time Slot</option>
                    </select>
                    <input
                      id="customTimeInput"
                      type="time"
                      style={{ display: "none" }}
                      className="col-span-2 w-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white rounded focus:outline-none focus:border-amber-400"
                    />
                  </div>
                )}
                <button
                  type="submit"
                  className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-sans font-bold text-xs uppercase tracking-widest rounded transition-colors shadow-lg"
                >
                  {modalType === "brochure"
                    ? "Download Brochure Now"
                    : modalType === "sitevisit"
                    ? "Confirm Site Visit Request"
                    : "Send Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
