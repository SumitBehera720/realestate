"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "./Icon";
import { CONTACT_INFO } from "@/data/siteData";

export const Navigation: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Properties", href: "/properties" },
    { label: "About Us", href: "/about-us" },
    { label: "FAQ", href: "/faq" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact-us" },
  ];

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-zinc-950/95 backdrop-blur-2xl border-b border-white/10 shadow-lg h-20 md:h-22"
            : "bg-zinc-950/70 md:bg-zinc-950/60 backdrop-blur-xl border-b border-white/10 h-24"
        } flex items-center`}
      >
        <div className="w-full max-w-[1920px] mx-auto px-6 lg:px-16 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link
            href="/"
            className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="relative flex items-center justify-center p-1 bg-white/5 rounded border border-white/10 group-hover:border-amber-400/40 transition-colors">
              <img
                src="/images/logo.png"
                alt="SK Realtech Logo"
                className="h-9 md:h-11 w-auto object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-serif tracking-wide uppercase text-white font-medium group-hover:text-amber-300 transition-colors leading-tight">
                SK REALTECH
              </span>
              <span className="text-[9px] font-sans tracking-[0.25em] text-zinc-400 uppercase font-normal">
                Bengaluru Estates
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10 text-xs font-sans font-medium tracking-[0.15em] uppercase text-zinc-300">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors duration-300 py-1 relative ${
                    isActive
                      ? "text-amber-400 font-semibold"
                      : "hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-400 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action & Phone / Menu Toggle */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-sans tracking-wide text-zinc-200 bg-white/10 hover:bg-white/20 border border-white/15 px-4 py-2 rounded-full transition-all duration-300 hover:text-white"
            >
              <Icon icon="solar:phone-calling-linear" width={16} height={16} className="text-amber-400" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>

            <Link
              href="/contact-us"
              className="hidden xl:inline-flex text-xs font-sans tracking-[0.18em] uppercase px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold rounded transition-all duration-300 shadow-md"
            >
              Site Visit
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-white hover:text-amber-400 transition-colors focus-visible:outline-none lg:hidden"
              aria-label="Toggle navigation menu"
            >
              <Icon icon={menuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} width={28} height={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Drawer Menu (Mobile / Tablet) */}
      <div
        className={`fixed inset-0 z-[60] bg-zinc-950/98 backdrop-blur-2xl transition-all duration-400 flex flex-col justify-between p-6 sm:p-10 lg:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center space-x-3"
          >
            <img
              src="/images/logo.png"
              alt="SK Realtech"
              className="h-10 w-auto object-contain"
            />
            <span className="font-serif font-medium tracking-wide text-2xl uppercase text-white">
              SK REALTECH
            </span>
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 text-zinc-400 hover:text-white"
            aria-label="Close menu"
          >
            <Icon icon="solar:close-circle-linear" width={32} height={32} />
          </button>
        </div>

        <nav className="flex flex-col space-y-5 my-auto py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`text-2xl sm:text-3xl font-serif tracking-tight transition-colors ${
                pathname === link.href
                  ? "text-amber-400 font-normal"
                  : "text-zinc-300 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-white/10 pt-6 space-y-3 font-sans text-xs text-zinc-400">
          <div className="flex items-center gap-2 text-zinc-300">
            <Icon icon="solar:map-point-linear" width={16} height={16} className="text-amber-400 shrink-0" />
            <span>{CONTACT_INFO.shortAddress}</span>
          </div>
          <div className="flex items-center gap-2 text-zinc-300">
            <Icon icon="solar:phone-linear" width={16} height={16} className="text-amber-400 shrink-0" />
            <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-amber-400 transition-colors">
              {CONTACT_INFO.phoneDisplay}
            </a>
          </div>
          <div className="flex items-center gap-2 text-zinc-300">
            <Icon icon="solar:letter-linear" width={16} height={16} className="text-amber-400 shrink-0" />
            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-amber-400 transition-colors">
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
