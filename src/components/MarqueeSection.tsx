"use client";
import React from "react";

const LOCATIONS = [
  "Whitefield",
  "Indiranagar",
  "Sadashivnagar",
  "Koramangala",
  "Devanahalli",
  "Hebbal",
  "Malleswaram",
  "Jayanagar",
  "HSR Layout",
];

export const MarqueeSection: React.FC = () => {
  return (
    <div className="w-full bg-zinc-950 text-white/40 py-8 md:py-10 overflow-hidden border-b border-white/10 dark-section">
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {[...LOCATIONS, ...LOCATIONS].map((loc, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-8 md:space-x-12 px-4 text-xs font-display uppercase tracking-[0.45em] font-light text-white/50"
          >
            <span>{loc}</span>
            <span className="w-1 h-1 rounded-full bg-white/25 inline-block" />
          </div>
        ))}
      </div>
    </div>
  );
};
