"use client";
import React from "react";
import Link from "next/link";
import { SplitText } from "./SplitText";

const ARTICLES = [
  {
    category: "Market Report",
    title: "Why Whitefield Real Estate is Surging: Metro Connectivity & Luxury Developments",
    image: "/images/sbr-one-gallery-1.webp",
    offsetClass: "",
    slug: "why-whitefield-real-estate-soaring-2025"
  },
  {
    category: "Legal & Advisory",
    title: "The Ultimate RERA & Legal Checklist for Bangalore Property Buyers",
    image: "/images/noble-apartments.webp",
    offsetClass: "lg:mt-24",
    slug: "rera-checklist-bangalore-homebuyers"
  },
  {
    category: "Investment",
    title: "Investing in North Bangalore: Why Devanahalli is the New Growth Engine",
    image: "/images/brigade-oasis.webp",
    offsetClass: "",
    slug: "villa-plots-devanahalli-airport-corridor"
  },
];

export const EditorialSection: React.FC = () => {
  return (
    <section
      id="editorial"
      className="py-28 sm:py-36 lg:py-52 px-6 lg:px-16 max-w-[1920px] mx-auto border-t border-zinc-200 bg-[#F9F8F6] text-[#0a0a0a]"
    >
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-28 gap-8">
        <div>
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-zinc-400 mb-4 block fade-up font-semibold">
            Journal &amp; Perspectives
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-serif tracking-tight font-light text-zinc-900">
            <SplitText text="Market Perspectives" />
          </h2>
        </div>
        <Link
          href="/blog"
          className="hidden md:inline-flex text-xs font-sans tracking-[0.2em] uppercase pb-2 border-b border-zinc-400 hover:border-black hover:text-black transition-all fade-up delay-200 font-semibold"
        >
          Read All Articles &rarr;
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
        {ARTICLES.map((article, idx) => (
          <Link
            key={idx}
            href="/blog"
            className={`group block cursor-pointer ${article.offsetClass}`}
          >
            <div className="relative overflow-hidden aspect-[4/5] mb-8 curtain-wrapper rounded-lg">
              <div className="curtain-reveal" />
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover scale-out group-hover:scale-105 transition-transform duration-[2.5s] ease-out"
              />
            </div>
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-amber-700 mb-3 block fade-up font-semibold">
              {article.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif tracking-tight font-normal mb-4 text-zinc-900 group-hover:text-amber-800 transition-colors duration-300 fade-up">
              {article.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};
