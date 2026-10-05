"use client";
import React from "react";
import { Icon } from "./Icon";

const images = [
  "founder-award-1.jpeg",
  "founder-award-2.jpeg",
  "founder-award-3.jpeg",
  "founder-award-4.jpeg",
  "founder-award-5.jpeg",
  "founder-award-6.jpg",
];

export const SocialMediaGallery: React.FC = () => {
  return (
    <section className="bg-zinc-950 py-20 lg:py-28 border-t border-white/10 overflow-hidden">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-16 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-sans uppercase tracking-[0.25em] text-amber-400 font-semibold mb-2 block">
            Life at SK Realtech
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white">
            Instagram Gallery
          </h2>
        </div>
        <a href="https://www.instagram.com/skrealtech_official/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-zinc-300 hover:text-amber-400 transition-colors font-sans text-sm">
          <Icon icon="mdi:instagram" width={24} height={24} />
          <span>@skrealtech_official</span>
        </a>
      </div>
      
      <div className="max-w-[1920px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((img, idx) => (
            <a key={idx} href="https://www.instagram.com/skrealtech_official/" target="_blank" rel="noopener noreferrer" className="relative aspect-square rounded-xl overflow-hidden group block border border-white/10 shadow-lg">
              <img src={`/images/${img}`} alt={`Instagram Post ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Icon icon="mdi:instagram" width={32} height={32} className="text-white" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
