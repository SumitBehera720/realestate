"use client";
import React from "react";
import { SplitText } from "./SplitText";

export const TypographyEdgeSection: React.FC = () => {
  return (
    <section className="bg-[#050505] text-white py-36 sm:py-48 lg:py-64 px-6 lg:px-16 flex flex-col justify-center items-center text-center overflow-hidden border-t border-white/5 dark-section">
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-serif tracking-tight font-light text-white/20 hover:text-white transition-colors duration-1000 cursor-default">
          <SplitText text="We don't just sell." startDelay={0.2} />
        </h2>
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-serif tracking-tight font-light text-white/50 hover:text-white transition-colors duration-1000 cursor-default">
          <SplitText text="We curate lifestyles." startDelay={0.4} />
        </h2>
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-serif tracking-tight font-light text-white hover:text-white transition-colors duration-1000 cursor-default">
          <SplitText text="We deliver exclusivity." startDelay={0.6} />
        </h2>
      </div>
    </section>
  );
};
