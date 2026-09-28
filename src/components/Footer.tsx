"use client";
import React from "react";
import Link from "next/link";
import { Icon } from "./Icon";
import { CONTACT_INFO } from "@/data/siteData";
import { PROPERTIES } from "@/data/properties";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08080a] text-zinc-300 border-t border-white/10 font-sans dark-section">
      {/* Top Banner / Call to Action */}
      <div className="border-b border-white/10 bg-zinc-950/60 py-12 px-6 lg:px-16">
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-serif font-normal text-white mb-2">
              Ready to find your ideal home in Bengaluru?
            </h3>
            <p className="text-sm text-zinc-400 font-light">
              Connect with our senior property advisors for confidential dossiers and private site visits.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded text-sm font-medium transition-colors"
            >
              <Icon icon="solar:phone-calling-linear" width={18} height={18} className="text-amber-400" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 rounded text-sm font-semibold transition-colors shadow-lg"
            >
              <span>Schedule Site Visit</span>
              <Icon icon="solar:arrow-right-linear" width={18} height={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info Grid */}
      <div className="max-w-[1920px] mx-auto py-16 px-6 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Column 1: Brand & Slogan */}
        <div className="lg:col-span-4 space-y-6">
          <Link href="/" className="inline-flex items-center space-x-3 group">
            <div className="p-1.5 bg-white/5 rounded border border-white/15">
              <img
                src="/images/logo.png"
                alt="SK Realtech Logo"
                className="h-11 w-auto object-contain"
              />
            </div>
            <div>
              <span className="text-2xl font-serif text-white font-medium tracking-tight block">
                SK REALTECH
              </span>
              <span className="text-xs text-amber-400 font-sans tracking-wider uppercase font-medium">
                Premier Real Estate
              </span>
            </div>
          </Link>

          <p className="text-sm text-zinc-300 leading-relaxed font-normal">
            &ldquo;{CONTACT_INFO.tagline}&rdquo; Facilitating people to buy, sell, and invest in premium residential and commercial properties across Bengaluru since {CONTACT_INFO.since}.
          </p>

          <div className="pt-2 text-xs text-zinc-400 space-y-1">
            <p className="font-semibold text-zinc-200">Karnataka RERA Registered Partner</p>
            <p>100% Verified Titles · Clear Approvals · End-to-End Handholding</p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-white border-b border-white/10 pb-2">
            Explore
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/" className="text-zinc-300 hover:text-amber-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-zinc-300 hover:text-amber-400 transition-colors">
                Services &amp; Offerings
              </Link>
            </li>
            <li>
              <Link href="/properties" className="text-zinc-300 hover:text-amber-400 transition-colors">
                Featured Properties
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="text-zinc-300 hover:text-amber-400 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/faq" className="text-zinc-300 hover:text-amber-400 transition-colors">
                Frequently Asked Questions
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-zinc-300 hover:text-amber-400 transition-colors">
                Articles &amp; Market Insights
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="text-zinc-300 hover:text-amber-400 transition-colors">
                Contact &amp; Location
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Featured Developments */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-white border-b border-white/10 pb-2">
            Signature Developments
          </h4>
          <ul className="space-y-3 text-sm">
            {PROPERTIES.map((prop) => (
              <li key={prop.id}>
                <Link
                  href={`/properties/${prop.slug}`}
                  className="group block"
                >
                  <span className="text-zinc-200 group-hover:text-amber-400 font-medium transition-colors block">
                    {prop.title}
                  </span>
                  <span className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">
                    {prop.location.split(",")[0]} · {prop.price}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact & Office Location */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-white border-b border-white/10 pb-2">
            Office &amp; Contact
          </h4>
          <div className="space-y-3.5 text-sm text-zinc-300">
            <div className="flex items-start gap-3">
              <Icon icon="solar:map-point-linear" width={18} height={18} className="text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs leading-relaxed text-zinc-300">
                {CONTACT_INFO.address}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Icon icon="solar:phone-linear" width={18} height={18} className="text-amber-400 shrink-0" />
              <a
                href={`tel:${CONTACT_INFO.phone}`}
                className="text-xs font-medium text-zinc-200 hover:text-amber-400 transition-colors"
              >
                {CONTACT_INFO.phoneDisplay}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Icon icon="solar:letter-linear" width={18} height={18} className="text-amber-400 shrink-0" />
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-xs text-zinc-200 hover:text-amber-400 transition-colors"
              >
                {CONTACT_INFO.email}
              </a>
            </div>

            <div className="flex items-start gap-3 pt-1">
              <Icon icon="solar:clock-circle-linear" width={18} height={18} className="text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs text-zinc-400">
                {CONTACT_INFO.hours}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Disclaimers */}
      <div className="border-t border-white/10 py-6 px-6 lg:px-16 text-xs text-zinc-400 bg-zinc-950">
        <div className="max-w-[1920px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-center md:text-left text-zinc-400">
            &copy; {new Date().getFullYear()} {CONTACT_INFO.companyName}. All rights reserved. Registered Real Estate Consultant, Bengaluru.
          </p>

          <div className="flex flex-wrap gap-6 text-zinc-400">
            <Link href="/faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
            <Link href="/services" className="hover:text-white transition-colors">
              Our Services
            </Link>
            <Link href="/contact-us" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact-us" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
