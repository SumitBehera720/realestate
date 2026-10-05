"use client";
import React from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-zinc-900 border border-white/10 p-8 sm:p-12 rounded-2xl shadow-2xl">
          <div className="text-center mb-10">
            <div className="inline-block bg-white p-3 rounded-xl mb-6">
              <img src="/images/logo.png" alt="SK Realtech" className="h-12 w-auto" />
            </div>
            <h1 className="text-2xl font-serif text-white mb-2">Admin Portal</h1>
            <p className="text-xs text-zinc-400 uppercase tracking-widest">Sign in to continue</p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-xs text-zinc-400 block mb-2 font-medium">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center text-zinc-500">
                  <Icon icon="solar:letter-linear" width={20} height={20} />
                </div>
                <input
                  type="email"
                  placeholder="admin@skrealtech.com"
                  className="w-full bg-zinc-950 border border-white/10 pl-12 pr-4 py-3 text-sm text-white placeholder-zinc-600 rounded-lg focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-zinc-400 block mb-2 font-medium">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-4 flex items-center text-zinc-500">
                  <Icon icon="solar:lock-password-linear" width={20} height={20} />
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-zinc-950 border border-white/10 pl-12 pr-4 py-3 text-sm text-white placeholder-zinc-600 rounded-lg focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-zinc-950 accent-amber-500" />
                <span className="text-xs text-zinc-400">Remember me</span>
              </label>
              <a href="#" className="text-xs text-amber-400 hover:underline">Forgot Password?</a>
            </div>

            <Link
              href="/admin"
              className="block w-full text-center py-3.5 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-widest rounded-lg transition-all shadow-lg mt-6"
            >
              Sign In
            </Link>
          </form>
        </div>
        
        <div className="text-center mt-8 text-xs text-zinc-500 flex items-center justify-center gap-2">
          <Icon icon="solar:shield-check-linear" width={16} height={16} />
          <span>Secured by SK Realtech IT</span>
        </div>
      </div>
    </div>
  );
}
