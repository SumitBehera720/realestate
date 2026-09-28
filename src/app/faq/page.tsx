"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";
import { Icon } from "@/components/Icon";
import { FAQS, CONTACT_INFO } from "@/data/siteData";

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(FAQS.map((f) => f.category)))];

  const filteredFaqs =
    filter === "All" ? FAQS : FAQS.filter((f) => f.category === filter);

  return (
    <PageWrapper>
      {/* 1. FAQ Hero */}
      <section className="relative py-20 md:py-28 px-6 lg:px-16 border-b border-white/10 bg-zinc-950">
        <div className="max-w-[1920px] mx-auto">
          <span className="text-xs font-sans uppercase tracking-[0.25em] text-amber-400 font-semibold mb-3 block">
            Clear Guidance · Frequently Asked Questions
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-white leading-tight mb-4">
            Answers to your real estate queries.
          </h1>
          <p className="text-base sm:text-lg font-sans text-zinc-300 font-light max-w-2xl">
            Everything you need to know about booking, RERA approvals, home loan processing, and signature developments like SBR One Residence.
          </p>
        </div>
      </section>

      {/* 2. FAQ Accordion Section */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 max-w-5xl mx-auto">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-sans tracking-wide uppercase transition-all ${
                filter === cat
                  ? "bg-amber-500 text-zinc-950 font-bold shadow-md"
                  : "bg-white/5 border border-white/10 text-zinc-300 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-zinc-900/60 border border-white/10 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 sm:p-8 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-sans uppercase tracking-wider text-amber-400 block font-medium">
                      {faq.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif text-white font-normal">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-amber-400 border-amber-400/40" : ""
                    }`}
                  >
                    <Icon icon="solar:alt-arrow-down-linear" width={18} height={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-white/5">
                    <p className="text-sm font-sans text-zinc-300 font-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 3. Need More Help Box */}
        <div className="mt-16 p-8 sm:p-10 bg-zinc-900 border border-white/15 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-2xl font-serif text-white">Have a specific question about a property?</h4>
            <p className="text-xs sm:text-sm font-sans text-zinc-400">
              Our Bangalore advisory desk is ready to answer inquiries about pricing, floor plans, and loan assistance.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 shrink-0">
            <Link
              href="/contact-us"
              className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-sans font-bold text-xs uppercase tracking-widest rounded transition-colors shadow-lg"
            >
              Contact Advisory Desk
            </Link>
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans text-xs uppercase tracking-wider rounded transition-colors"
            >
              Call {CONTACT_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
