"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import { GlobalCurtain } from "@/components/GlobalCurtain";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const PageWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [curtainRevealed, setCurtainRevealed] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.05 },
    );

    const elementsToObserve = document.querySelectorAll(
      ".fade-up, .line-expand, .curtain-wrapper",
    );
    elementsToObserve.forEach((el) => observer.observe(el));

    let rafId: number;
    const updateParallax = () => {
      const scrollY = window.scrollY;
      const parallaxEls =
        document.querySelectorAll<HTMLElement>(".js-parallax");

      parallaxEls.forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-speed") || "0.15");
        const rect = el.parentElement
          ? el.parentElement.getBoundingClientRect()
          : el.getBoundingClientRect();
        const elementOffsetTop = rect.top + scrollY;
        const yPos = (scrollY - elementOffsetTop) * speed;
        el.style.transform = `translate3d(0, ${yPos.toFixed(2)}px, 0) scale(1.1)`;
      });
    };

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateParallax);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateParallax();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative min-h-screen bg-[#050505] text-white selection:bg-[#c5a059] selection:text-black">
      <Navigation />
      <div className="pt-24">
        {/* Spacer for fixed nav */}
        {children}
      </div>
      <Footer />
    </main>
  );
};
