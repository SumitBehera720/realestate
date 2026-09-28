"use client";
import React from "react";
import Link from "next/link";
import { SplitText } from "./SplitText";
import { CONTACT_INFO } from "@/data/siteData";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 lg:py-48 px-6 lg:px-16 max-w-[1920px] mx-auto relative bg-[#F9F8F6] text-[#0a0a0a]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 xl:gap-24 items-center">
        {/* Left Column: Image with Curtain Reveal and 'Est. 2011' Badge */}
        <div className="lg:col-span-7 order-2 lg:order-1 relative h-[520px] sm:h-[650px] lg:h-[820px] w-full curtain-wrapper rounded-lg overflow-hidden">
          <div className="curtain-reveal" />
          <img
            src="/images/about-interior.jpg"
            alt="SK Realtech Bangalore Advisory"
            className="w-full h-full object-cover object-center scale-out js-parallax"
            data-speed="0.05"
          />
          <div className="absolute bottom-8 left-8 sm:bottom-10 sm:left-10 bg-white/95 backdrop-blur-md px-6 py-3.5 text-xs font-sans tracking-[0.25em] uppercase text-zinc-900 border border-black/5 shadow-md fade-up delay-500 rounded">
            EST. 2011 · BENGALURU
          </div>
        </div>

        {/* Right Column: Editorial Copy & Metrics */}
        <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-amber-700 font-semibold mb-6 sm:mb-8 block fade-up">
            THE SK REALTECH LEGACY
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-serif tracking-tight font-light text-zinc-900 mb-8 sm:mb-10 leading-[1.08] split-text">
            Home is where your story begins.
          </h2>

          <div className="space-y-6 sm:space-y-8 text-zinc-700 font-sans font-light text-base lg:text-lg leading-relaxed fade-up delay-200">
            <p>
              &ldquo;The real estate company you can trust to keep it real&rdquo; reflects our relentless commitment to honesty, transparency, and genuine service across Bengaluru since 2011.
            </p>
            <p>
              In a market filled with complexity, we simplify the process with clear communication, authentic guidance, and verified RERA-approved developments like SBR One Residence.
            </p>
          </div>

          <div className="pt-6 fade-up delay-250">
            <Link
              href="/about-us"
              className="inline-flex text-xs font-sans tracking-[0.2em] uppercase font-semibold text-zinc-900 border-b border-zinc-900 pb-1 hover:text-amber-700 hover:border-amber-700 transition-colors"
            >
              Learn More About Our Team &amp; Heritage &rarr;
            </Link>
          </div>

          {/* Stats Row with Line Expand Animation */}
          <div className="mt-12 sm:mt-16 pt-10 sm:pt-14 relative fade-up delay-300">
            <div className="absolute top-0 left-0 h-px bg-zinc-300/80 line-expand" />
            <div className="grid grid-cols-2 gap-8 sm:gap-12">
              <div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-zinc-900 mb-2 sm:mb-3 font-light">
                  1,500<span className="text-2xl sm:text-3xl font-light text-amber-600">+</span>
                </div>
                <div className="text-xs font-sans uppercase tracking-[0.2em] text-zinc-500 font-medium">
                  HAPPY FAMILIES
                </div>
              </div>

              <div>
                <div className="text-4xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-zinc-900 mb-2 sm:mb-3 font-light">
                  500<span className="text-2xl sm:text-3xl font-light text-amber-600">+</span>
                </div>
                <div className="text-xs font-sans uppercase tracking-[0.2em] text-zinc-500 font-medium">
                  PROPERTIES LISTED
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
