"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { usePathname } from "next/navigation";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const pathname = usePathname();

  const navItems = [
    { label: "Dashboard", href: "/admin", icon: "solar:widget-5-linear" },
    { label: "Properties", href: "/admin/properties", icon: "solar:home-2-linear" },
    { label: "Enquiries", href: "/admin/enquiries", icon: "solar:letter-linear" },
    { label: "Settings", href: "/admin/settings", icon: "solar:settings-linear" },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 flex font-sans">
      {/* Sidebar */}
      <aside
        className={`${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-zinc-900 border-r border-white/10 transition-all duration-300 flex flex-col`}
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-white/10">
          {isSidebarOpen && (
            <img src="/images/logo.png" alt="SK Realtech" className="h-10 bg-white p-1 rounded" />
          )}
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <Icon icon="solar:hamburger-menu-linear" width={24} height={24} />
          </button>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon icon={item.icon} width={24} height={24} />
                {isSidebarOpen && <span className="font-medium text-sm">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link
            href="/admin/login"
            className="flex items-center gap-4 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <Icon icon="solar:logout-2-linear" width={24} height={24} />
            {isSidebarOpen && <span className="font-medium text-sm">Logout</span>}
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Top Header */}
        <header className="h-20 bg-zinc-900 border-b border-white/10 flex items-center justify-between px-8 shrink-0">
          <h2 className="text-xl font-serif text-white">SK Realtech Portal</h2>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 border border-amber-500/30">
              <Icon icon="solar:user-bold" width={20} height={20} />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-8 bg-zinc-950">
          {children}
        </div>
      </main>
    </div>
  );
};
