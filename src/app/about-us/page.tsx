"use client";

import React from "react";
import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";
import { Icon } from "@/components/Icon";
import { CONTACT_INFO } from "@/data/siteData";

export default function AboutUsPage() {
  return (
    <PageWrapper>
      {/* 1. Hero Showcase */}
      <section className="relative py-20 md:py-32 px-6 lg:px-16 border-b border-white/10 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/images/about-interior.jpg"
            alt="SK Realtech Heritage"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1920px] mx-auto">
          <div className="max-w-4xl">
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-amber-400 font-semibold mb-4 block">
              About SK Realtech · Established {CONTACT_INFO.since}
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-white leading-tight mb-6">
              Home is where your story begins.
            </h1>
            <p className="text-lg sm:text-xl font-sans text-zinc-300 font-light leading-relaxed mb-8">
              &ldquo;{CONTACT_INFO.tagline}&rdquo; reflects our foundational commitment to honesty, transparency, and genuine service. In a market filled with complexity, we simplify the process with clear communication, real guidance, and proven results.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/properties"
                className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-sans font-bold text-xs uppercase tracking-widest rounded transition-colors shadow-lg"
              >
                Explore Properties
              </Link>
              <Link
                href="/contact-us"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-sans text-xs uppercase tracking-wider rounded transition-colors"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Key Metrics Bar */}
      <section className="bg-zinc-900 border-b border-white/10 py-12 px-6 lg:px-16">
        <div className="max-w-[1920px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {CONTACT_INFO.stats.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left">
              <span className="text-4xl sm:text-5xl font-serif text-amber-400 font-normal block mb-1">
                {stat.value}
              </span>
              <span className="text-xs font-sans uppercase tracking-wider text-zinc-400">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Our Values & Mission */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-sans uppercase tracking-[0.25em] text-amber-400 font-semibold mb-2 block">
                Our Core Philosophy
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-light text-white leading-tight">
                Your housing needs deserve the care of a specialist.
              </h2>
            </div>

            <div className="space-y-4 text-base font-sans text-zinc-300 font-light leading-relaxed">
              <p>
                Since 2011, SK Realtech has stood as a trusted beacon for home buyers, high-net-worth investors, and corporate clients looking for landmark properties in Bengaluru.
              </p>
              <p>
                From premium high-rise developments like <strong>SBR One Residence</strong> in Whitefield to exclusive villa enclaves such as <strong>SBR Global Queens Ville</strong>, our advisory team brings rigorous 30-year title diligence, market-benchmarked pricing, and zero hidden liaisons.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-2">
                <div className="text-amber-400">
                  <Icon icon="solar:target-linear" width={28} height={28} />
                </div>
                <h4 className="text-base font-serif text-white">Client Focused</h4>
                <p className="text-xs font-sans text-zinc-400 leading-relaxed">
                  Tailored unit selection that matches your family&apos;s lifestyle, commutes, and long-term financial goals.
                </p>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 rounded-xl space-y-2">
                <div className="text-amber-400">
                  <Icon icon="solar:chart-2-linear" width={28} height={28} />
                </div>
                <h4 className="text-base font-serif text-white">Results Driven</h4>
                <p className="text-xs font-sans text-zinc-400 leading-relaxed">
                  Proven track record of high capital appreciation corridors, fast loan closures, and transparent handovers.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="/images/noble-apartments.webp"
                alt="SK Realtech Portfolio"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/60 backdrop-blur-md rounded-xl border border-white/15">
                <span className="text-xs font-sans uppercase tracking-widest text-amber-400 font-semibold block mb-1">
                  Bengaluru Headquartered
                </span>
                <p className="text-xs sm:text-sm text-zinc-200 font-sans">
                  {CONTACT_INFO.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Leadership & Advisory Team */}
      <section className="bg-zinc-950 py-20 lg:py-28 border-t border-white/10">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-sans uppercase tracking-[0.25em] text-amber-400 font-semibold mb-2 block">
              Meet Our Team
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-light text-white mb-3">
              Awesome people behind us.
            </h2>
            <p className="text-sm font-sans text-zinc-400">
              Experienced real estate strategists, legal counsels, and investment analysts committed to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Suresh Kumar",
                role: "Managing Director & Founder",
                desc: "Over 18 years shaping luxury and residential land development across East & North Bengaluru corridors.",
                image: "/images/client-meeting.jpg",
              },
              {
                name: "Priya Sharma",
                role: "Head of Residential Sales",
                desc: "Expert in prime Whitefield high-rises and master-planned township allocations for homebuyers.",
                image: "/images/estate-agent.jpg",
              },
              {
                name: "Vikram Rathore",
                role: "Legal & RERA Compliance Counsel",
                desc: "Ensures comprehensive 30-year title clearances, RERA documentation, and sub-registrar registrations.",
                image: "/images/about-interior.jpg",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="bg-zinc-900 border border-white/10 rounded-xl overflow-hidden group hover:border-amber-400/40 transition-all shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-serif text-white">{member.name}</h3>
                  <span className="text-xs font-sans uppercase tracking-wider text-amber-400 font-semibold block">
                    {member.role}
                  </span>
                  <p className="text-xs font-sans text-zinc-400 font-light leading-relaxed pt-2">
                    {member.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Call to Action */}
      <section className="py-20 px-6 lg:px-16 border-t border-white/10 bg-zinc-900 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h3 className="text-3xl font-serif font-light text-white">
            Looking for trustworthy property guidance in Bangalore?
          </h3>
          <p className="text-sm font-sans text-zinc-300">
            Visit our office behind Safal Market, Bidare Agraha or request a call from our senior consultants.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact-us"
              className="px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-sans font-bold text-xs uppercase tracking-widest rounded transition-colors shadow-lg"
            >
              Get in Touch
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
