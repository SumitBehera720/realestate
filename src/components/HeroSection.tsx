"use client";
import React from "react";
import Link from "next/link";
import { SplitText } from "./SplitText";
import { Icon } from "./Icon";

interface HeroSectionProps {
  isSplitActive?: boolean;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  isSplitActive = true,
}) => {
  return (
    <section className="relative h-screen min-h-[850px] w-full flex flex-col justify-end pb-20 md:pb-28 lg:pb-36 px-6 lg:px-16 bg-zinc-950 overflow-hidden dark-section">
      {/* Background Parallax Image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <img
          src="/images/hero-luxury-banner.jpg"
          alt="SK Realtech Luxury Developments Bengaluru"
          className="w-full h-full object-cover object-center sm:object-right-top opacity-90 scale-out js-parallax"
          data-speed="0.15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1920px] mx-auto w-full">
        <div className="max-w-6xl">
          <p className="text-amber-400 text-xs font-sans tracking-[0.3em] uppercase mb-4 md:mb-6 fade-up active delay-500 font-semibold">
            Welcome to SK Realtech · Bengaluru
          </p>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[9.5rem] text-white font-serif tracking-tight font-light leading-[0.92] mb-10 md:mb-12">
            <span className="block">
              <SplitText text="Curated." startDelay={0.4} />
            </span>
            <span className="block">
              <SplitText text="Crafted." startDelay={0.65} />
            </span>
            <span className="block">
              <SplitText text="Elevated." startDelay={0.9} />
            </span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start sm:items-center fade-up active delay-700">
            <Link
              href="/properties"
              className="inline-flex items-center justify-center border border-amber-400/60 bg-amber-500/20 text-white px-10 md:px-12 py-4 md:py-5 text-xs font-sans tracking-[0.25em] uppercase hover:bg-amber-500 hover:text-zinc-950 font-bold transition-all duration-500 backdrop-blur-sm rounded"
            >
              Explore Portfolio
            </Link>
            <Link
              href="/contact-us"
              className="group inline-flex items-center gap-4 text-white text-xs font-sans tracking-[0.25em] uppercase transition-colors duration-300 py-3 hover:text-amber-400"
            >
              <span className="group-hover:text-amber-400 transition-colors duration-500 font-medium">
                Inquire &amp; Site Visit
              </span>
              <Icon
                icon="solar:arrow-right-linear"
                width={20}
                height={20}
                className="group-hover:translate-x-2 transition-transform duration-500 text-amber-400"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
