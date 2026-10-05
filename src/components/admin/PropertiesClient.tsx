"use client";
import React, { useState } from "react";
import { Icon } from "@/components/Icon";
import { addProperty, deleteProperty } from "@/app/actions/propertyActions";

export function PropertiesClient({ properties }: { properties: any[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    propertyType: "",
    status: "Ready to Move",
    price: "",
    location: "",
    heroImage: "/images/sbr-one-hero.jpg"
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addProperty(formData);
    setIsModalOpen(false);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this property?")) {
      await deleteProperty(id);
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-serif text-white mb-2">Properties Management</h1>
          <p className="text-sm text-zinc-400">Add, edit, or remove properties from your portfolio.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-widest rounded-lg transition-all shadow-lg"
        >
          <Icon icon="solar:add-square-bold" width={20} height={20} />
          <span>Add Property</span>
        </button>
      </div>

      <div className="bg-zinc-900 border border-white/10 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-zinc-400">
            <thead className="text-xs uppercase bg-zinc-950/50 text-zinc-500">
              <tr>
                <th className="px-6 py-4">Property</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {properties.length === 0 ? (
                <tr><td colSpan={5} className="text-center py-8 text-zinc-500">No properties found. Add one above!</td></tr>
              ) : properties.map((prop) => (
                <tr key={prop.id} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <img src={prop.heroImage} alt={prop.title} className="w-12 h-12 rounded object-cover border border-white/10" />
                      <span className="font-medium text-white">{prop.title}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">{prop.location}</td>
                  <td className="px-6 py-4">
                    <span className="text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {prop.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-mono text-xs">{prop.price}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-3">
                      <button onClick={() => handleDelete(prop.id)} className="text-zinc-400 hover:text-red-400 transition-colors" title="Delete">
                        <Icon icon="solar:trash-bin-trash-linear" width={20} height={20} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-white/10 rounded-2xl w-full max-w-lg p-6">
            <h2 className="text-xl font-serif text-white mb-6">Add New Property</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs text-zinc-400 block mb-1">Title</label>
                <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full bg-zinc-950 border border-white/10 px-4 py-2 text-sm text-white rounded-lg focus:outline-none focus:border-amber-400" />
              </div>
              <div>
                <label className="text-xs text-zinc-400 block mb-1">Location</label>
                <input required type="text" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} className="w-full bg-zinc-950 border border-white/10 px-4 py-2 text-sm text-white rounded-lg focus:outline-none focus:border-amber-400" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-zinc-400 block mb-1">Status</label>
                  <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})} className="w-full bg-zinc-950 border border-white/10 px-4 py-2 text-sm text-white rounded-lg focus:outline-none focus:border-amber-400">
                    <option>Ready to Move</option>
                    <option>Under Construction</option>
                    <option>Pre-Launch</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-zinc-400 block mb-1">Price</label>
                  <input required type="text" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} className="w-full bg-zinc-950 border border-white/10 px-4 py-2 text-sm text-white rounded-lg focus:outline-none focus:border-amber-400" />
                </div>
              </div>
              <div className="flex justify-end gap-3 mt-8">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-6 py-2 text-sm text-zinc-400 hover:text-white">Cancel</button>
                <button type="submit" className="px-6 py-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 text-sm font-bold rounded-lg transition-colors">Save Property</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
