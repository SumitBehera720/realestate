"use client";
import React from "react";
import { AdminLayout } from "@/components/AdminLayout";
import { Icon } from "@/components/Icon";

import { CONTACT_INFO } from "@/data/siteData";
import { PROPERTIES } from "@/data/properties";

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-serif text-white mb-2">Welcome back, Admin</h1>
        <p className="text-sm text-zinc-400">Here's what's happening with your properties today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: "Total Properties Listed", value: PROPERTIES.length, change: "0%", icon: "solar:home-2-bold", color: "text-blue-400", bg: "bg-blue-400/10" },
          { label: "Properties Handed Over", value: CONTACT_INFO.stats.find(s => s.label === "Properties Handed Over")?.value || "500+", change: "0%", icon: "solar:calendar-bold", color: "text-amber-400", bg: "bg-amber-400/10" },
          { label: "Happy Customers", value: CONTACT_INFO.stats.find(s => s.label === "Happy Customers")?.value || "1.5K+", change: "0%", icon: "solar:users-group-two-rounded-bold", color: "text-emerald-400", bg: "bg-emerald-400/10" },
        ].map((stat, i) => (
          <div key={i} className="bg-zinc-900 border border-white/10 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.bg} ${stat.color}`}>
                <Icon icon={stat.icon} width={24} height={24} />
              </div>
              <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                {stat.change}
              </span>
            </div>
            <h3 className="text-3xl font-serif text-white mb-1">{stat.value}</h3>
            <p className="text-xs text-zinc-400 uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-zinc-900 border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-serif text-white">Recent Enquiries</h3>
            <button className="text-xs text-amber-400 hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-zinc-400">
              <thead className="text-xs uppercase bg-zinc-950/50 text-zinc-500">
                <tr>
                  <th className="px-4 py-3 rounded-tl-lg">Name</th>
                  <th className="px-4 py-3">Property</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3 rounded-tr-lg">Status</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Rahul Verma", prop: "SBR One Residence", date: "Oct 3, 2026", status: "New" },
                  { name: "Priya Menon", prop: "SBR Global Queens Ville", date: "Oct 2, 2026", status: "Contacted" },
                  { name: "Amit Singh", prop: "Brigade Oasis", date: "Oct 1, 2026", status: "Site Visit" },
                  { name: "Neha Sharma", prop: "SBR Minara", date: "Sep 30, 2026", status: "New" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                    <td className="px-4 py-4 font-medium text-white">{row.name}</td>
                    <td className="px-4 py-4">{row.prop}</td>
                    <td className="px-4 py-4">{row.date}</td>
                    <td className="px-4 py-4">
                      <span className={`text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full font-medium ${
                        row.status === 'New' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                        row.status === 'Contacted' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                        'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
          <h3 className="text-lg font-serif text-white mb-6">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center gap-3 p-4 bg-zinc-950 border border-white/5 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all rounded-lg text-left group">
              <div className="text-amber-400 group-hover:scale-110 transition-transform">
                <Icon icon="solar:add-square-linear" width={24} height={24} />
              </div>
              <div>
                <span className="block text-sm font-medium text-white mb-0.5">Add New Property</span>
                <span className="block text-xs text-zinc-500">List a new real estate project</span>
              </div>
            </button>
            <button className="w-full flex items-center gap-3 p-4 bg-zinc-950 border border-white/5 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all rounded-lg text-left group">
              <div className="text-blue-400 group-hover:scale-110 transition-transform">
                <Icon icon="solar:document-add-linear" width={24} height={24} />
              </div>
              <div>
                <span className="block text-sm font-medium text-white mb-0.5">Publish Market Report</span>
                <span className="block text-xs text-zinc-500">Add a new blog post or insight</span>
              </div>
            </button>
            <button className="w-full flex items-center gap-3 p-4 bg-zinc-950 border border-white/5 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all rounded-lg text-left group">
              <div className="text-emerald-400 group-hover:scale-110 transition-transform">
                <Icon icon="solar:settings-linear" width={24} height={24} />
              </div>
              <div>
                <span className="block text-sm font-medium text-white mb-0.5">Global Settings</span>
                <span className="block text-xs text-zinc-500">Update phone numbers & stats</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
