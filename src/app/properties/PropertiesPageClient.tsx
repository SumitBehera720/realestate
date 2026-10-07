"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PageWrapper } from "@/components/PageWrapper";
import { Icon } from "@/components/Icon";

function PropertiesContent({ properties }: { properties: any[] }) {
  const searchParams = useSearchParams();
  const locationParam = searchParams.get("location");
  
  const [filter, setFilter] = useState(locationParam || "All");

  useEffect(() => {
    if (locationParam) {
      setFilter(locationParam);
    }
  }, [locationParam]);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 5);
      setShowRightArrow(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 5);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  // Compute unique locations for the filter
  const locations = Array.from(new Set(properties.map(p => {
    if (p.location) {
      const parts = p.location.split(',');
      return parts[0].trim();
    }
    return "";
  }).filter(Boolean)));
  
  const categories = [
    "All",
    "Apartments",
    "Villas & Plots",
    ...locations
  ];

  const filteredProperties = properties.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Apartments") return (p.propertyType || "").toLowerCase().includes("apartment");
    if (filter === "Villas & Plots") return (p.propertyType || "").toLowerCase().includes("villa") || (p.propertyType || "").toLowerCase().includes("plotted");
    return (p.location || "").toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <PageWrapper>
      {/* 1. Header */}
      <section className="relative py-20 md:py-28 px-6 lg:px-16 border-b border-white/10 bg-zinc-950">
        <div className="max-w-[1920px] mx-auto">
          <span className="text-xs font-sans uppercase tracking-[0.25em] text-amber-400 font-semibold mb-3 block">
            Curated Bengaluru Portfolio
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-white leading-tight mb-4">
            Signature Developments
          </h1>
          <p className="text-base sm:text-lg font-sans text-zinc-300 font-light max-w-2xl">
            Explore 100% RERA-registered luxury apartments, villas, and plotted developments across Bengaluru&apos;s most promising growth corridors.
          </p>
        </div>
      </section>

      {/* 2. Filter Bar & Grid */}
      <section className="py-16 lg:py-24 px-6 lg:px-16 max-w-[1920px] mx-auto">
        <div className="relative mb-12">
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-2.5 pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pr-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-sans tracking-wide uppercase transition-all whitespace-nowrap flex-shrink-0 ${
                  filter === cat
                    ? "bg-amber-500 text-zinc-950 font-bold shadow-md"
                    : "bg-white/5 border border-white/10 text-zinc-300 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          {/* Scroll Indicator Arrow Right */}
          {showRightArrow && (
            <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none flex items-center justify-end pb-2">
              <Icon icon="solar:arrow-right-linear" width={24} height={24} className="text-zinc-300 animate-pulse mr-4" />
            </div>
          )}
          {/* Scroll Indicator Arrow Left */}
          {showLeftArrow && (
            <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent pointer-events-none flex items-center justify-start pb-2">
              <Icon icon="solar:arrow-left-linear" width={24} height={24} className="text-zinc-300 animate-pulse ml-4" />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((prop) => (
              <Link
                key={prop.id}
                href={`/properties/${prop.slug}`}
                className="group bg-zinc-900/60 border border-white/10 hover:border-amber-400/50 rounded-xl overflow-hidden flex flex-col transition-all duration-500 shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={prop.heroImage}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-sm px-3 py-1 text-xs font-sans uppercase font-medium text-white rounded border border-white/10">
                    {prop.propertyType}
                  </div>
                  <div className="absolute top-4 right-4 bg-amber-500 text-zinc-950 px-3 py-1 text-xs font-sans font-bold rounded shadow-md">
                    {prop.price}
                  </div>
                </div>

                <div className="p-8 flex flex-col justify-between flex-1 space-y-6">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-sans text-amber-400 mb-2">
                      <Icon icon="solar:map-point-linear" width={16} height={16} />
                      <span>{prop.location}</span>
                    </div>

                    <h2 className="text-2xl font-serif text-white group-hover:text-amber-300 transition-colors mb-3">
                      {prop.title}
                    </h2>

                    <p className="text-xs text-zinc-400 font-sans font-light line-clamp-2 leading-relaxed">
                      {prop.subtitle}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 py-3 border-y border-white/10 text-xs font-sans text-zinc-300">
                    <div>
                      <span className="text-zinc-500 block">Bedrooms:</span>
                      <span className="font-medium text-white">{prop.bedrooms}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500 block">Area:</span>
                      <span className="font-medium text-white">{prop.area}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs font-sans uppercase tracking-wider text-amber-400 group-hover:text-amber-300 font-semibold">
                    <span>View Full Details &amp; Gallery</span>
                    <Icon
                      icon="solar:arrow-right-linear"
                      width={18}
                      height={18}
                      className="transform group-hover:translate-x-1.5 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-zinc-400 font-sans">
              No properties found in this location currently.
            </div>
          )}
        </div>
      </section>
    </PageWrapper>
  );
}

export function PropertiesClientWrapper({ properties }: { properties: any[] }) {
  return (
    <Suspense fallback={<PageWrapper><div className="py-20 text-center text-white">Loading properties...</div></PageWrapper>}>
      <PropertiesContent properties={properties} />
    </Suspense>
  );
}
