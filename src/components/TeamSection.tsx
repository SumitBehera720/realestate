"use client";
import React from "react";

const TEAM = [
  {
    name: "Singh",
    role: "Senior Sales Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Sakshi",
    role: "Property Consultant",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Leonardo",
    role: "Investment Advisor",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Brendon",
    role: "Client Relations Manager",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
  },
];

export const TeamSection: React.FC = () => {
  return (
    <section className="w-full bg-[#F9F8F6] text-[#0a0a0a] py-24 md:py-36 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="fade-up mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-black/10 pb-6 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-500 font-display block mb-2">
              Our People
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#0a0a0a]">
              The SK Realtech Team
            </h2>
          </div>
          <p className="font-sans text-xs md:text-sm text-zinc-600 max-w-md font-light">
            Meet our dedicated professionals who provide bespoke counsel and
            transparent guidance at every step of your real estate journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM.map((member, idx) => (
            <div key={idx} className="fade-up group cursor-default">
              <div className="aspect-[3/4] w-full overflow-hidden mb-6 relative">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                />
              </div>
              <h3 className="font-serif text-2xl text-zinc-950 font-normal mb-1">
                {member.name}
              </h3>
              <p className="font-sans text-xs uppercase tracking-wider text-zinc-500 font-light">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
