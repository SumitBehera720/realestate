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

  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const serviceItems = [
    {
      title: "Buying / Selling",
      href: "/services#buying-selling",
      subtitle: "End-to-end property advisory & transactions",
      icon: "solar:buildings-linear",
    },
    {
      title: "Loan Advice",
      href: "/services#loan-advice",
      subtitle: "Fast-track financing with premier banks",
      icon: "solar:chart-square-linear",
    },
    {
      title: "Interior Service",
      href: "/services#interior-service",
      subtitle: "Turnkey bespoke fitout & custom design",
      icon: "solar:sofa-linear",
    },
    {
      title: "Documentation Service",
      href: "/services#documentation-service",
      subtitle: "Encumbrance clearance & legal vetting",
      icon: "solar:document-text-linear",
    },
    {
      title: "New Launches (Launching Soon)",
      href: "/services#new-launches",
      subtitle: "Exclusive early-bird access & VIP pricing",
      icon: "solar:rocket-linear",
      badge: "VIP",
    },
  ];

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services", hasDropdown: true },
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
            <div className="relative flex items-center justify-center p-1.5 bg-white rounded-md shadow-sm border border-white/20 group-hover:border-amber-400/40 transition-colors">
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
              <span className="text-[9px] font-sans tracking-[0.15em] text-zinc-400 uppercase font-normal">
                Exploring the science of real estate
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10 text-xs font-sans font-medium tracking-[0.15em] uppercase text-zinc-300">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const hasDropdown = link.hasDropdown;
              
              return (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={`transition-colors duration-300 py-4 flex items-center gap-1.5 ${
                      isActive
                        ? "text-amber-400 font-semibold"
                        : "hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    {hasDropdown && (
                      <Icon
                        icon="solar:alt-arrow-down-linear"
                        width={13}
                        height={13}
                        className="group-hover:rotate-180 transition-transform duration-300 text-amber-400"
                      />
                    )}
                    {isActive && (
                      <span className="absolute bottom-2 left-0 w-full h-[2px] bg-amber-400 rounded-full" />
                    )}
                  </Link>

                  {/* Actual 5 Services Dropdown Menu */}
                  {hasDropdown && (
                    <div className="absolute top-[100%] left-0 w-80 bg-zinc-950/98 backdrop-blur-2xl border border-white/15 rounded-xl shadow-2xl opacity-0 invisible translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 flex flex-col p-2 z-50 divide-y divide-white/5">
                      <div className="px-3 py-2 text-[10px] uppercase font-sans tracking-[0.2em] text-amber-400 font-semibold">
                        Our 5 Core Services
                      </div>
                      <div className="py-1 space-y-1">
                        {serviceItems.map((srv) => (
                          <Link
                            key={srv.href}
                            href={srv.href}
                            className="group/item flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-all text-left"
                          >
                            <div className="p-2 rounded bg-amber-400/10 text-amber-400 group-hover/item:bg-amber-400 group-hover/item:text-zinc-950 transition-colors shrink-0 mt-0.5">
                              <Icon icon={srv.icon} width={16} height={16} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-serif normal-case tracking-normal text-white group-hover/item:text-amber-300 transition-colors font-medium">
                                  {srv.title}
                                </span>
                                {srv.badge && (
                                  <span className="text-[9px] px-1.5 py-0.2 uppercase font-sans font-bold bg-amber-500 text-zinc-950 rounded">
                                    {srv.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-[10px] normal-case tracking-normal text-zinc-400 font-sans font-light line-clamp-1 mt-0.5">
                                {srv.subtitle}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="pt-2 pb-1 px-3">
                        <Link
                          href="/services"
                          className="flex items-center justify-between text-[10px] font-sans uppercase tracking-widest text-amber-400 hover:text-amber-300 transition-colors"
                        >
                          <span>Explore All Services</span>
                          <Icon icon="solar:arrow-right-linear" width={14} height={14} />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
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
        className={`fixed inset-0 z-[60] bg-zinc-950/98 backdrop-blur-2xl transition-all duration-400 flex flex-col justify-between p-6 sm:p-10 lg:hidden overflow-y-auto ${
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
            <div className="bg-white p-1 rounded-md">
              <img
                src="/images/logo.png"
                alt="SK Realtech"
                className="h-10 w-auto object-contain"
              />
            </div>
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

        <nav className="flex flex-col space-y-4 my-auto py-6">
          {navLinks.map((link) => {
            if (link.label === "Services") {
              return (
                <div key={link.href} className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <Link
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
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="p-2 text-amber-400"
                      aria-label="Toggle services list"
                    >
                      <Icon
                        icon={mobileServicesOpen ? "solar:alt-arrow-up-linear" : "solar:alt-arrow-down-linear"}
                        width={20}
                        height={20}
                      />
                    </button>
                  </div>
                  {mobileServicesOpen && (
                    <div className="pl-4 mt-2 py-2 space-y-3 border-l-2 border-amber-400/30">
                      {serviceItems.map((srv) => (
                        <Link
                          key={srv.href}
                          href={srv.href}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center gap-2.5 text-sm font-sans text-zinc-300 hover:text-amber-400 transition-colors"
                        >
                          <Icon icon={srv.icon} width={16} height={16} className="text-amber-400 shrink-0" />
                          <span>{srv.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
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
            );
          })}
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
