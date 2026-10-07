"use client";

import React, { useEffect, useState, useCallback } from "react";
import Lenis from "lenis";
import { GlobalCurtain } from "@/components/GlobalCurtain";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeSection } from "@/components/MarqueeSection";
import { AboutSection } from "@/components/AboutSection";
import { HeritageVillaSection } from "@/components/HeritageVillaSection";
import { TypographyEdgeSection } from "@/components/TypographyEdgeSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { EditorialSection } from "@/components/EditorialSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { SocialMediaGallery } from "@/components/SocialMediaGallery";

export function HomeClient({ properties, settings }: { properties: any[], settings?: Record<string, any> }) {
  const [curtainLifted, setCurtainLifted] = useState(false);

  const handleCurtainRevealed = useCallback(() => {
    setCurtainLifted(true);
  }, []);

  useEffect(() => {
    // 1. Initialize Lenis for buttery-smooth momentum scrolling
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // 2. IntersectionObserver for reveals (.fade-up, .line-expand, .curtain-wrapper, .split-text)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.05,
      },
    );

    const animatedElements = document.querySelectorAll(
      ".fade-up, .line-expand, .curtain-wrapper, .split-text",
    );

    animatedElements.forEach((el) => {
      if (el.classList.contains("trigger-instant")) {
        setTimeout(() => el.classList.add("active"), 600);
      } else {
        observer.observe(el);
      }
    });

    // 3. Ultra-smooth Parallax on scroll using requestAnimationFrame
    const parallaxEls = document.querySelectorAll<HTMLElement>(".js-parallax");

    const updateParallax = () => {
      const vh = window.innerHeight;
      parallaxEls.forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-speed") || "0.1");
        const parent = el.parentElement || el;
        const rect = parent.getBoundingClientRect();

        if (rect.top < vh && rect.bottom > 0) {
          const yPos = rect.top * speed;
          el.style.transform = `translate3d(0, ${yPos.toFixed(1)}px, 0) scale(1.08)`;
        }
      });
    };

    lenis.on("scroll", updateParallax);
    window.addEventListener("scroll", updateParallax, { passive: true });
    updateParallax();

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      window.removeEventListener("scroll", updateParallax);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative min-h-screen selection:bg-zinc-900 selection:text-white">
      <EnquiryPopup />

      {/* 1. Global Preloader Curtain */}
      <GlobalCurtain onRevealed={handleCurtainRevealed} />

      {/* 2. Sticky Glass Header */}
      <Navigation />

      {/* 3. Hero Section (Screenshot 2) */}
      <HeroSection isSplitActive={curtainLifted} heroTitle={settings?.heroTitle} />

      {/* 4. Luxury Locations Marquee */}
      <MarqueeSection />

      {/* 5. The Legacy / About Section (Screenshot 1) */}
      <AboutSection />

      {/* 6. The Heritage Villa Showcase & Portfolio (Screenshot 3) */}
      <HeritageVillaSection properties={properties} />

      {/* 7. Typography Statement Edge Section */}
      <TypographyEdgeSection />

      {/* 8. Advisory Expertise Section */}
      <ExpertiseSection />

      {/* 9. Editorial Journal Section */}
      <EditorialSection />

      {/* 10. Social Media Gallery */}
      <SocialMediaGallery instagramImages={settings?.instagramImages} />

      {/* 11. Private Access Contact Desk */}
      <ContactSection />

      {/* 12. Minimalist Luxury Footer */}
      <Footer />
    </main>
  );
}
