"use client";
import React from "react";
import Link from "next/link";
import { Icon } from "./Icon";
import { SplitText } from "./SplitText";

const SERVICES = [
  {
    num: "01",
    title: "Buying / Selling",
    desc: "End-to-end advisory for buyers and sellers alike — from curated shortlisting and site visits to negotiation, documentation, and seamless handover. Maximum valuation, minimum friction.",
    icon: "solar:buildings-linear",
  },
  {
    num: "02",
    title: "Loan Advice",
    desc: "Preferred bank tie-ups with SBI, HDFC, ICICI, and Axis Bank. We guide you through eligibility checks, fast approvals, preferential rates, and zero hidden liaison fees.",
    icon: "solar:chart-square-linear",
  },
  {
    num: "03",
    title: "Interior Service",
    desc: "Turnkey interior design and fitout solutions — from concept moodboards to final execution. Premium materials, skilled craftsmen, and on-time delivery for every budget and taste.",
    icon: "solar:sofa-linear",
  },
  {
    num: "04",
    title: "Documentation Service",
    desc: "Thorough due-diligence, encumbrance certificate (EC) clearance, sale deed drafting, and sub-registrar registration support to keep every transaction legally airtight.",
    icon: "solar:document-text-linear",
  },
  {
    num: "05",
    title: "New Launches (Launching Soon)",
    desc: "Get exclusive pre-launch access to premium projects across Bangalore before they hit the open market. Secure early-bird pricing and priority unit selection.",
    icon: "solar:rocket-linear",
  },
];

export const ExpertiseSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative py-28 sm:py-36 lg:py-56 px-6 lg:px-16 overflow-hidden"
    >
      {/* ── Background image ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/estate-agent.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center scale-105 js-parallax"
          data-speed="0.04"
        />
        {/* Deep dark gradient so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950/97 via-zinc-900/92 to-zinc-950/97" />
        {/* Subtle amber glow bottom-left */}
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-amber-500/8 rounded-full blur-[120px] pointer-events-none" />
        {/* Subtle warm glow top-right */}
        <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* ── Grain texture overlay ── */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1920px] mx-auto">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-20 lg:mb-32 gap-10">
          <div className="max-w-4xl">
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-amber-400 mb-4 block fade-up font-semibold">
              Our Offerings · Facilitating since 2011
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight font-light text-white leading-[1.08]">
              <SplitText text="Comprehensive real estate solutions across Bengaluru." />
            </h2>
          </div>

          <Link
            href="/services"
            className="inline-flex text-xs font-sans tracking-[0.2em] uppercase font-semibold text-amber-400 border-b border-amber-400/50 pb-1 hover:text-amber-300 hover:border-amber-300 transition-colors self-start lg:self-auto whitespace-nowrap"
          >
            View Detailed Offerings &rarr;
          </Link>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-0 gap-x-0 border-l border-white/10">
          {SERVICES.map((srv) => (
            <div
              key={srv.num}
              className="group relative p-10 sm:p-12 lg:p-14 fade-up border-r border-b border-white/10 transition-colors duration-500 hover:bg-white/[0.03]"
            >
              {/* Amber accent bar on hover */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />

              {/* Icon + number */}
              <div className="flex justify-between items-start mb-10">
                <div className="p-3 bg-amber-400/10 border border-amber-400/20 rounded-lg text-amber-400 group-hover:bg-amber-400/20 transition-colors duration-500">
                  <Icon icon={srv.icon} width={28} height={28} />
                </div>
                <span className="text-xs font-sans tracking-[0.25em] text-white/20 group-hover:text-amber-400/60 transition-colors duration-500 font-semibold">
                  {srv.num}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-[2rem] font-serif tracking-tight font-normal mb-4 sm:mb-5 text-white">
                {srv.title}
              </h3>
              <p className="text-sm text-zinc-400 font-sans font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                {srv.desc}
              </p>

              <div className="mt-7">
                <Link
                  href="/services"
                  className="text-xs font-sans uppercase tracking-wider text-amber-500 hover:text-amber-300 font-medium inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Learn more</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stat bar */}
        <div className="mt-0 border-r border-white/10 grid grid-cols-3 divide-x divide-white/10 border-b border-l border-white/10">
          {[
            { value: "13+", label: "Years of Excellence" },
            { value: "1,500+", label: "Families Assisted" },
            { value: "₹500Cr+", label: "Properties Transacted" },
          ].map((stat) => (
            <div key={stat.label} className="px-10 py-8 text-center fade-up">
              <p className="text-3xl sm:text-4xl font-serif text-amber-400 font-light mb-1">{stat.value}</p>
              <p className="text-xs font-sans uppercase tracking-wider text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
