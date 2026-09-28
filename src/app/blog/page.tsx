"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";
import { Icon } from "@/components/Icon";
import { BLOG_POSTS, CONTACT_INFO } from "@/data/siteData";

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<(typeof BLOG_POSTS)[0] | null>(null);

  return (
    <PageWrapper>
      {/* 1. Blog Header */}
      <section className="relative py-20 md:py-28 px-6 lg:px-16 border-b border-white/10 bg-zinc-950">
        <div className="max-w-[1920px] mx-auto">
          <span className="text-xs font-sans uppercase tracking-[0.25em] text-amber-400 font-semibold mb-3 block">
            Journal &amp; Perspectives · SK Realtech
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-white leading-tight mb-4">
            Market Insights &amp; Advisory
          </h1>
          <p className="text-base sm:text-lg font-sans text-zinc-300 font-light max-w-2xl">
            In-depth analysis of Bengaluru&apos;s fastest-growing real estate corridors, RERA legal due diligence, and capital appreciation trends.
          </p>
        </div>
      </section>

      {/* 2. Blog Grid */}
      <section className="py-20 lg:py-28 px-6 lg:px-16 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-zinc-900/60 border border-white/10 hover:border-amber-400/40 rounded-xl overflow-hidden flex flex-col group transition-all duration-500 shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 text-[11px] font-sans uppercase tracking-wider text-amber-400 rounded border border-white/10">
                  {post.category}
                </div>
              </div>

              <div className="p-8 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-xs font-sans text-zinc-400">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-2xl font-serif text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-sm font-sans text-zinc-300 font-light leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => setSelectedPost(post)}
                    className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-wider text-amber-400 hover:text-amber-300 font-semibold transition-colors"
                  >
                    <span>Read Full Article</span>
                    <Icon icon="solar:arrow-right-linear" width={16} height={16} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Full Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-6 overflow-y-auto">
          <div className="bg-zinc-950 border border-white/20 p-8 sm:p-12 max-w-3xl w-full relative rounded-2xl shadow-2xl my-8">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white"
            >
              <Icon icon="solar:close-circle-linear" width={32} height={32} />
            </button>

            <div className="space-y-6">
              <div className="flex items-center gap-3 text-xs font-sans text-amber-400">
                <span className="uppercase tracking-wider font-semibold">{selectedPost.category}</span>
                <span>•</span>
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif text-white leading-tight">
                {selectedPost.title}
              </h2>

              <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-white/10">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 text-base font-sans text-zinc-300 font-light leading-relaxed">
                {selectedPost.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs font-sans text-zinc-400">
                  Published by SK Realtech Advisory Team
                </div>
                <Link
                  href="/contact-us"
                  className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-sans uppercase font-bold rounded"
                >
                  Consult an Advisor
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageWrapper>
  );
}
