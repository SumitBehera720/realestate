"use client";

import React, { useEffect, useState, useRef } from "react";
import { CONTACT_INFO } from "@/data/siteData";

interface GlobalCurtainProps {
  onRevealed?: () => void;
}

export const GlobalCurtain: React.FC<GlobalCurtainProps> = ({ onRevealed }) => {
  // Step -1: Initial mount for smooth entrance animation
  // Step 0: Centered title "SK REALTECH" side-by-side
  // Step 1: Gap opens cleanly between SK and REALTECH; framed estate image emerges in the gap
  // Step 2: Center image expands smoothly; words & borders fade away; curtain dissolves into live hero
  // Step 3: Completely unmounted
  const [step, setStep] = useState<-1 | 0 | 1 | 2 | 3>(() => {
    if (typeof window !== "undefined" && (window as any).__SK_CURTAIN_SHOWN__) {
      return 3;
    }
    return -1;
  });

  const onRevealedRef = useRef(onRevealed);
  onRevealedRef.current = onRevealed;

  useEffect(() => {
    if (step === 3) {
      if (onRevealedRef.current) onRevealedRef.current();
      return;
    }

    let isCancelled = false;
    if (typeof window !== "undefined") {
      (window as any).__SK_CURTAIN_SHOWN__ = true;
    }

    // 0. Smooth entrance animation trigger
    const timer0 = setTimeout(() => {
      if (!isCancelled) setStep(0);
    }, 100);

    // 1. Open gap in between SK and REALTECH; emerge center estate image
    const timer1 = setTimeout(() => {
      if (!isCancelled) setStep(1);
    }, 1400);

    // 2. Expand center image & dissolve curtain into live website
    const timer2 = setTimeout(() => {
      if (!isCancelled) {
        setStep(2);
        if (onRevealedRef.current) {
          onRevealedRef.current();
        }
      }
    }, 2800);

    // 3. Unmount completely from DOM
    const timer3 = setTimeout(() => {
      if (!isCancelled) setStep(3);
    }, 4300);

    return () => {
      isCancelled = true;
      clearTimeout(timer0);
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
      className={`fixed inset-0 z-[99999] text-white flex flex-col justify-between p-6 sm:p-12 md:p-14 select-none cursor-pointer overflow-hidden transition-opacity duration-[1500ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        step === 2 ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{ background: "radial-gradient(circle at center, #1f1a14 0%, #0a0908 100%)" }}
    >
      {/* Moving Architectural Grid Background */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)'
        }}
      />

      {/* Dynamic Animated Gradient Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-amber-500/10 blur-[140px] animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-[-30%] right-[-10%] w-[80vw] h-[80vw] rounded-full bg-amber-700/15 blur-[160px] animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }} />
        <div className="absolute top-[20%] left-[40%] w-[40vw] h-[40vw] rounded-full bg-orange-600/5 blur-[100px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      </div>

      {/* Grain texture */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.1] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />
      {/* Warm radial vignette centered behind the gap */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(0,0,0,0.6) 100%)",
        }}
      />
      {/* Top Header: Luxury Emblem & Brand Name */}
      <div
        className={`relative z-30 flex flex-col items-center justify-center transition-all duration-[1200ms] ease-out ${
          step === -1 ? "opacity-0 translate-y-8" : step >= 2 ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-3">
          <div className="bg-white/95 p-3 sm:p-4 rounded-xl shadow-2xl">
            <img
              src="/images/logo.png"
              alt="SK Realtech"
              className="h-12 sm:h-16 w-auto object-contain"
            />
          </div>
          <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.35em] text-amber-400/80 font-semibold">
            EXPLORE THE SCIENCE OF REAL ESTATE
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
            transform: step === -1 ? "translateX(-30vw)" : step >= 2 ? "translateX(-30vw)" : "translateX(0)",
            opacity: step === -1 ? 0 : step >= 2 ? 0 : 1,
            transitionDuration: step === -1 || step === 0 ? "1200ms" : "1000ms",
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
              step <= 0
                ? "0.75rem"
                : step === 1
                ? "clamp(240px, 32vw, 440px)"
                : "100vw",
            height:
              step <= 0
                ? "0px"
                : step === 1
                ? "clamp(150px, 20vw, 275px)"
                : "100vh",
            marginLeft:
              step <= 0 ? "0.35rem" : "clamp(1rem, 2vw, 2.5rem)",
            marginRight:
              step <= 0 ? "0.35rem" : "clamp(1rem, 2vw, 2.5rem)",
            transform:
              step >= 2
                ? "scale(3.2)"
                : step === 1
                ? "scale(1)"
                : "scale(0.8)",
            opacity: step <= 0 ? 0 : 1,
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
            transform: step === -1 ? "translateX(30vw)" : step >= 2 ? "translateX(30vw)" : "translateX(0)",
            opacity: step === -1 ? 0 : step >= 2 ? 0 : 1,
            transitionDuration: step === -1 || step === 0 ? "1200ms" : "1000ms",
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
        className={`relative z-30 flex items-center justify-between text-[11px] font-sans uppercase tracking-[0.25em] text-white/30 transition-all duration-[1200ms] ease-out delay-200 ${
          step === -1 ? "opacity-0 translate-y-8" : step >= 2 ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
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
