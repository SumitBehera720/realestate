"use client";
import React from "react";
import { AdminLayout } from "@/components/AdminLayout";
import { CONTACT_INFO } from "@/data/siteData";

export default function AdminSettingsPage() {
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Database connection required to save settings.");
  };

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-serif text-white mb-2">Global Settings</h1>
        <p className="text-sm text-zinc-400">Update contact information, statistics, and global site preferences.</p>
      </div>

      <form onSubmit={handleSave} className="space-y-8 max-w-4xl">
        <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
          <h2 className="text-lg font-serif text-white mb-6 border-b border-white/10 pb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs text-zinc-400 block mb-2 uppercase tracking-wider">Primary Phone</label>
              <input type="text" defaultValue={CONTACT_INFO.phone} className="w-full bg-zinc-950 border border-white/10 px-4 py-2 text-sm text-white rounded-lg focus:outline-none focus:border-amber-400" />
            </div>
            <div>
              <label className="text-xs text-zinc-400 block mb-2 uppercase tracking-wider">Email Address</label>
              <input type="email" defaultValue={CONTACT_INFO.email} className="w-full bg-zinc-950 border border-white/10 px-4 py-2 text-sm text-white rounded-lg focus:outline-none focus:border-amber-400" />
            </div>
            <div className="md:col-span-2">
              <label className="text-xs text-zinc-400 block mb-2 uppercase tracking-wider">Office Address</label>
              <textarea defaultValue={CONTACT_INFO.address} className="w-full bg-zinc-950 border border-white/10 px-4 py-2 text-sm text-white rounded-lg focus:outline-none focus:border-amber-400 min-h-[80px]" />
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
          <h2 className="text-lg font-serif text-white mb-6 border-b border-white/10 pb-4">Key Statistics (Homepage)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONTACT_INFO.stats.map((stat, i) => (
              <div key={i}>
                <label className="text-xs text-zinc-400 block mb-2 uppercase tracking-wider">{stat.label}</label>
                <input type="text" defaultValue={stat.value} className="w-full bg-zinc-950 border border-white/10 px-4 py-2 text-sm text-white rounded-lg focus:outline-none focus:border-amber-400" />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button type="submit" className="px-8 py-3 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-widest rounded-lg transition-all shadow-lg">
            Save Changes
          </button>
        </div>
      </form>
    </AdminLayout>
  );
}
