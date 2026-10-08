"use client";
import React, { useState } from "react";
import Link from "next/link";
import { SplitText } from "./SplitText";
import { Icon } from "./Icon";

export const HeritageVillaSection: React.FC<{ properties: any[] }> = ({ properties }) => {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("SBR One Residence");

  const openInquiry = (propName: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedProperty(propName);
    setInquiryModalOpen(true);
  };

  return (
    <section
      id="portfolio"
      className="bg-zinc-950 text-white relative dark-section border-t border-white/10"
    >
      {/* 1. Project Hero (Flagship SBR One Residence Showcase) */}
      <div className="relative h-[110vh] min-h-[750px] w-full flex items-center justify-center overflow-hidden curtain-wrapper">
        <div className="curtain-reveal" />
        <img
          src="/images/sbr-one-main.webp"
          alt="SBR One Residence Flagship"
          className="absolute inset-0 w-full h-full object-cover opacity-70 scale-out js-parallax"
          data-speed="0.2"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/95" />

        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 lg:px-16 flex flex-col justify-end h-full pb-28 md:pb-36">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 sm:mb-8 fade-up">
            <span className="px-4 sm:px-5 py-1.5 sm:py-2 border border-amber-400/40 text-amber-300 text-[11px] sm:text-xs font-sans uppercase tracking-[0.25em] backdrop-blur-sm bg-black/40">
              Flagship Development
            </span>
            <span className="text-zinc-300 text-xs font-sans tracking-[0.2em] uppercase">
              Hopefarm, Whitefield · Bengaluru
            </span>
          </div>

          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-serif tracking-tight font-light text-white leading-[0.9] split-text">
            SBR One Residence
          </h2>

          <div className="mt-8 flex flex-wrap gap-5 items-center">
            <Link
              href="/properties/sbr-one-residence"
              className="inline-flex items-center gap-3 px-8 py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-sans font-bold text-xs uppercase tracking-widest rounded transition-all duration-300 shadow-xl"
            >
              <span>Explore SBR One Residence</span>
              <Icon icon="solar:arrow-right-linear" width={18} height={18} />
            </Link>
            <button
              onClick={(e) => openInquiry("SBR One Residence", e)}
              className="inline-flex items-center gap-2 px-6 py-4 border border-white/20 hover:border-white text-white font-sans text-xs uppercase tracking-widest backdrop-blur-sm transition-colors rounded"
            >
              Request Brochure &amp; Price Sheet
            </button>
          </div>
        </div>
      </div>

      {/* 2. Project Intro & Specs Grid */}
      <div className="max-w-[1920px] mx-auto px-6 lg:px-16 py-24 sm:py-36 lg:py-48 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Left Column (Sticky Vision) */}
        <div className="lg:col-span-5 relative">
          <div className="lg:sticky lg:top-36">
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-amber-400 font-semibold mb-6 sm:mb-8 block fade-up">
              Master-Planned Living
            </span>
            <h3 className="text-3xl sm:text-5xl lg:text-5xl font-serif tracking-tight font-light text-white mb-8 split-text leading-[1.12]">
              11.75 Acres of sheer luxury in the heart of Whitefield IT corridor.
            </h3>
            <p className="text-zinc-300 text-base lg:text-lg font-sans font-light leading-relaxed mb-10 fade-up delay-100">
              SBR One Residence combines 930 premium residences across 12+ architectural towers. Just 3 minutes from Hope Farm Metro Station, enjoy unparalleled connectivity to ITPL, world-class international schools, and over 45+ resort-caliber amenities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/properties/sbr-one-residence"
                className="inline-flex text-xs font-sans tracking-[0.2em] uppercase pb-2 border-b border-amber-400 hover:text-amber-300 text-white transition-all fade-up delay-200"
              >
                View Full Specifications &amp; Gallery &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column (Specifications & Visual) */}
        <div className="lg:col-span-7">
          {/* Stats Grid: 2x2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10 mb-16 fade-up">
            <div className="bg-zinc-950 p-8 sm:p-12 hover:bg-zinc-900/60 transition-colors">
              <span className="block text-4xl lg:text-5xl font-serif mb-3 font-light text-amber-400">
                ₹1.69 Cr*
              </span>
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-zinc-400">
                Starting Launch Price
              </span>
            </div>

            <div className="bg-zinc-950 p-8 sm:p-12 hover:bg-zinc-900/60 transition-colors">
              <span className="block text-4xl lg:text-5xl font-serif mb-3 font-light text-white">
                11.75 Acres
              </span>
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-zinc-400">
                Township Area (12+ Blocks)
              </span>
            </div>

            <div className="bg-zinc-950 p-8 sm:p-12 hover:bg-zinc-900/60 transition-colors">
              <span className="block text-4xl lg:text-5xl font-serif mb-3 font-light text-white">
                2.5 &amp; 3 BHK
              </span>
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-zinc-400">
                1,472 - 2,150 Sq.Ft
              </span>
            </div>

            <div className="bg-zinc-950 p-8 sm:p-12 hover:bg-zinc-900/60 transition-colors">
              <span className="block text-4xl lg:text-5xl font-serif mb-3 font-light text-white">
                930 Units
              </span>
              <span className="text-xs font-sans uppercase tracking-[0.2em] text-zinc-400">
                RERA: PRM/KA/RERA/1251/446/PR/131224/007297
              </span>
            </div>
          </div>

          {/* Editorial Image with Curtain Reveal */}
          <Link
            href="/properties/sbr-one-residence"
            className="group block relative w-full aspect-[4/3] sm:aspect-[16/10] curtain-wrapper mt-12 rounded overflow-hidden"
          >
            <div className="curtain-reveal" />
            <img
              src="/images/sbr-one-gallery-1.webp"
              alt="SBR One Residence Flagship Architecture"
              className="w-full h-full object-cover scale-out group-hover:scale-105 transition-transform duration-700 js-parallax"
              data-speed="0.08"
            />
            <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md px-5 py-3 border border-white/10 rounded">
              <span className="text-xs font-sans uppercase tracking-widest text-amber-400 font-semibold block">
                SBR One Residence · View Dedicated Page &rarr;
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* 3. Flagship Properties Gallery / Portfolio Showcase */}
      <div className="w-full py-20 lg:py-32 overflow-hidden bg-[#050505] border-t border-white/5">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-16 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 fade-up">
          <div>
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-amber-400 font-semibold block mb-3">
              Curated Portfolio
            </span>
            <h3 className="text-3xl sm:text-5xl font-serif font-light text-white">
              Signature Bengaluru Developments
            </h3>
          </div>
          <Link
            href="/properties"
            className="text-xs font-sans tracking-[0.2em] uppercase text-zinc-300 hover:text-amber-400 pb-1 border-b border-white/20 transition-colors self-start md:self-auto flex items-center gap-2"
          >
            <span>Explore All Properties</span>
            <Icon icon="solar:arrow-right-linear" width={16} height={16} />
          </Link>
        </div>

        {/* 4 Flagship Property Cards */}
        <div className="max-w-[1920px] mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.slice(0, 4).map((item) => (
            <Link
              key={item.id}
              href={`/properties/${item.slug}`}
              className="group cursor-pointer flex flex-col bg-zinc-900/40 border border-white/10 hover:border-amber-400/50 hover:bg-zinc-900/70 transition-all duration-500 overflow-hidden rounded-lg shadow-xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden curtain-wrapper">
                <div className="curtain-reveal" />
                <img
                  src={item.heroImage}
                  alt={item.title}
                  className="w-full h-full object-cover scale-out group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1.5 text-xs uppercase font-sans font-semibold tracking-wider text-amber-400 border border-white/10 rounded">
                  {item.price}
                </div>
                {item.badge && (
                  <div className="absolute bottom-4 left-4 bg-red-500/90 backdrop-blur-sm px-3 py-1 text-xs font-sans uppercase font-bold text-white rounded shadow-md border border-white/20">
                    {item.badge}
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-xs font-sans uppercase tracking-[0.15em] text-zinc-400 block mb-2">
                    {item.location}
                  </span>
                  <h4 className="text-xl font-serif font-normal text-white group-hover:text-amber-300 transition-colors mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 font-sans font-light mb-6">
                    {item.bedrooms} · {item.area}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-sans font-medium uppercase tracking-wider text-amber-400 group-hover:text-amber-300">
                  <span>View Details</span>
                  <Icon
                    icon="solar:arrow-right-linear"
                    width={18}
                    height={18}
                    className="transform group-hover:translate-x-1.5 transition-transform"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Inquiry Modal */}
      {inquiryModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-6">
          <div className="bg-zinc-950 border border-white/20 p-8 sm:p-12 max-w-lg w-full relative shadow-2xl rounded-xl">
            <button
              onClick={() => setInquiryModalOpen(false)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors"
            >
              <Icon icon="solar:close-circle-linear" width={28} height={28} />
            </button>

            <span className="text-xs font-sans uppercase tracking-[0.25em] text-amber-400 font-semibold block mb-2">
              Confidential Inquiry
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-light text-white mb-2">
              {selectedProperty}
            </h3>
            <p className="text-xs text-zinc-400 font-sans mb-8 leading-relaxed">
              Please provide your details below. Our senior estate advisory team will contact you confidentially within 2 hours.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  `Thank you! Your inquiry for ${selectedProperty} has been received. Our team will contact you shortly.`,
                );
                setInquiryModalOpen(false);
              }}
              className="space-y-4"
            >
              <div>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="w-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 rounded transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  required
                  placeholder="Phone Number (+91)"
                  className="w-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 rounded transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full bg-white/5 border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 rounded transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs uppercase font-sans font-bold tracking-[0.2em] rounded transition-colors mt-2 cursor-pointer shadow-lg"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
