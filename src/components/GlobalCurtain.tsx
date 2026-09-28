"use client";

import React, { useEffect, useState, useRef } from "react";
import { CONTACT_INFO } from "@/data/siteData";

interface GlobalCurtainProps {
  onRevealed?: () => void;
}

export const GlobalCurtain: React.FC<GlobalCurtainProps> = ({ onRevealed }) => {
  // Step 0: Centered title "SK REALTECH" side-by-side (0ms - 900ms)
  // Step 1: Gap opens cleanly between SK and REALTECH; framed estate image emerges in the gap (900ms - 2200ms)
  // Step 2: Center image expands smoothly; words & borders fade away; curtain dissolves into live hero (2200ms - 3400ms)
  // Step 3: Completely unmounted
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0);

  const onRevealedRef = useRef(onRevealed);
  onRevealedRef.current = onRevealed;

  useEffect(() => {
    let isCancelled = false;

    // 1. Open gap in between SK and REALTECH; emerge center estate image
    const timer1 = setTimeout(() => {
      if (!isCancelled) setStep(1);
    }, 900);

    // 2. Expand center image & dissolve curtain into live website
    const timer2 = setTimeout(() => {
      if (!isCancelled) {
        setStep(2);
        if (onRevealedRef.current) {
          onRevealedRef.current();
        }
      }
    }, 2300);

    // 3. Unmount completely from DOM
    const timer3 = setTimeout(() => {
      if (!isCancelled) setStep(3);
    }, 3600);

    return () => {
      isCancelled = true;
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []); // Strictly empty dependency array so it never re-triggers or loops

  const handleSkip = () => {
    if (step >= 2) return;
    setStep(2);
    if (onRevealedRef.current) onRevealedRef.current();
    setTimeout(() => {
      setStep(3);
    }, 700);
  };

  if (step === 3) return null;

  return (
    <div
      id="global-curtain"
      onClick={handleSkip}
      className={`fixed inset-0 z-[99999] text-white flex flex-col justify-between p-6 sm:p-12 md:p-14 select-none cursor-pointer overflow-hidden transition-opacity duration-1000 ease-out ${
        step === 2 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "#0c0b09" }}
    >
      {/* Grain texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
      {/* Warm radial glow centered behind the gap */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 55% 40% at 50% 50%, rgba(180,120,40,0.12) 0%, transparent 75%)",
        }}
      />
      {/* Top Header: Luxury Emblem & Brand Name */}
      <div
        className={`relative z-30 flex flex-col items-center justify-center transition-all duration-700 ${
          step >= 2 ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-1">
          <img
            src="/images/logo.png"
            alt="SK Realtech"
            className="h-16 sm:h-20 w-auto object-contain brightness-0 invert opacity-90"
          />
          <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.35em] text-amber-400/80 font-semibold mt-1">
            SK REALTECH
          </span>
        </div>
      </div>

      {/* Subtle Architectural Horizontal Guide Lines (Active in Step 1) */}
      <div
        className={`absolute left-0 right-0 h-px bg-white/10 transition-opacity duration-700 pointer-events-none ${
          step === 1 ? "opacity-100" : "opacity-0"
        }`}
        style={{ top: "calc(50% - clamp(85px, 12vw, 160px))" }}
      />
      <div
        className={`absolute left-0 right-0 h-px bg-white/10 transition-opacity duration-700 pointer-events-none ${
          step === 1 ? "opacity-100" : "opacity-0"
        }`}
        style={{ bottom: "calc(50% - clamp(85px, 12vw, 160px))" }}
      />

      {/* Center Stage: Opening directly THROUGH THE GAP between SK and REALTECH */}
      <div className="relative z-20 my-auto flex items-center justify-center w-full max-w-7xl mx-auto px-4">
        {/* Left Word: 'SK' */}
        <div
          className="flex items-center select-none flex-shrink-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{
            transform: step >= 2 ? "translateX(-30vw)" : "translateX(0)",
            opacity: step >= 2 ? 0 : 1,
          }}
        >
          <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-sans font-bold tracking-tight uppercase text-white leading-none whitespace-nowrap">
            SK
          </span>
          <span
            className={`ml-2 sm:ml-4 text-xs sm:text-sm font-mono text-amber-400/50 transition-opacity duration-700 ${
              step === 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            [
          </span>
        </div>

        {/* Center Gap: The Estate Image Opens IN BETWEEN SK and REALTECH */}
        <div
          className="flex items-center justify-center flex-shrink-0 overflow-hidden transition-all duration-[1100ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{
            width:
              step === 0
                ? "0.75rem"
                : step === 1
                ? "clamp(240px, 32vw, 440px)"
                : "100vw",
            height:
              step === 0
                ? "0px"
                : step === 1
                ? "clamp(150px, 20vw, 275px)"
                : "100vh",
            marginLeft:
              step === 0 ? "0.35rem" : "clamp(1rem, 2vw, 2.5rem)",
            marginRight:
              step === 0 ? "0.35rem" : "clamp(1rem, 2vw, 2.5rem)",
            transform:
              step >= 2
                ? "scale(3.2)"
                : step === 1
                ? "scale(1)"
                : "scale(0.8)",
            opacity: step === 0 ? 0 : 1,
            zIndex: step >= 2 ? 50 : 20,
          }}
        >
          <div
            className="w-full h-full relative overflow-hidden transition-all duration-700"
            style={{
              borderRadius: step >= 2 ? "0px" : "3px",
              boxShadow:
                step === 1
                  ? "0 25px 50px -12px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(0,0,0,0.08)"
                  : "none",
            }}
          >
            {/* Exact Villa Banner Image matched with Hero Section */}
            <img
              src="/images/hero-luxury-banner.jpg"
              alt="SK Realtech Luxury Estates"
              className="w-full h-full object-cover object-center sm:object-right-top"
            />

            {/* Exact Hero Section Gradient Overlays (Blends 100% Seamlessly with HeroSection.tsx) */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-transparent transition-opacity duration-1000 ease-out"
              style={{ opacity: step >= 2 ? 1 : 0 }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 transition-opacity duration-1000 ease-out"
              style={{ opacity: step >= 2 ? 1 : 0 }}
            />
          </div>
        </div>

        {/* Right Word: 'REALTECH' */}
        <div
          className="flex items-center select-none flex-shrink-0 transition-all duration-[1000ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{
            transform: step >= 2 ? "translateX(30vw)" : "translateX(0)",
            opacity: step >= 2 ? 0 : 1,
          }}
        >
          <span
            className={`mr-2 sm:mr-4 text-xs sm:text-sm font-mono text-amber-400/50 transition-opacity duration-700 ${
              step === 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            ]
          </span>
          <span className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-sans font-bold tracking-tight uppercase text-white leading-none whitespace-nowrap">
            REALTECH
          </span>
        </div>
      </div>

      {/* Bottom Footer: Tagline & Origin details */}
      <div
        className={`relative z-30 flex items-center justify-between text-[11px] font-sans uppercase tracking-[0.25em] text-white/30 transition-all duration-700 ${
          step >= 2 ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        <span className="hidden sm:inline">BENGALURU • KARNATAKA</span>
        <span className="font-medium tracking-[0.25em] text-center w-full sm:w-auto text-amber-400/60">
          THE REAL ESTATE COMPANY YOU CAN TRUST
        </span>
        <span className="hidden sm:inline">EST. {CONTACT_INFO.since}</span>
      </div>
    </div>
  );
};
