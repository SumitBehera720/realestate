"use client";
import React, { useState } from "react";
import { Icon } from "@/components/Icon";
import { addProperty, deleteProperty, updateProperty } from "@/app/actions/propertyActions";

export function PropertiesClient({ properties }: { properties: any[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("basic");
  
  const initialForm = {
    title: "",
    subtitle: "",
    propertyType: "",
    status: "Ready to Move",
    price: "",
    location: "",
    fullAddress: "",
    bedrooms: "",
    area: "",
    heroImage: "/images/sbr-one-hero.jpg",
    gallery: "",
    description: "",
    projectOverview: "",
    architecturalVision: "",
    worldClassLifestyle: ""
  };
  const [formData, setFormData] = useState(initialForm);

  const openAddModal = () => {
    setEditingId(null);
    setFormData(initialForm);
    setActiveTab("basic");
    setIsModalOpen(true);
  };

  const openEditModal = (prop: any) => {
    setEditingId(prop.id);
    setFormData({
      ...prop,
      gallery: Array.isArray(prop.gallery) ? prop.gallery.join(", ") : (prop.gallery || ""),
      description: prop.description || "",
      projectOverview: prop.projectOverview || "",
      architecturalVision: prop.architecturalVision || "",
      worldClassLifestyle: prop.worldClassLifestyle || "",
      fullAddress: prop.fullAddress || "",
      subtitle: prop.subtitle || "",
      propertyType: prop.propertyType || "",
      bedrooms: prop.bedrooms || "",
      area: prop.area || "",
    });
    setActiveTab("basic");
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const submitData = {
      ...formData,
      gallery: formData.gallery.split(",").map((s: string) => s.trim()).filter(Boolean)
    };
    
    if (editingId) {
      await updateProperty(editingId, submitData);
    } else {
      await addProperty(submitData);
    }
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
          onClick={openAddModal}
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
                      <button onClick={() => openEditModal(prop)} className="text-zinc-400 hover:text-amber-400 transition-colors" title="Edit">
                        <Icon icon="solar:pen-linear" width={20} height={20} />
                      </button>
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

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-white/10 rounded-2xl w-full max-w-4xl p-0 overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-white/10">
              <h2 className="text-xl font-serif text-white">{editingId ? "Edit Property" : "Add New Property"}</h2>
            </div>
            
            <div className="flex border-b border-white/10">
              {['basic', 'images', 'content'].map(tab => (
                <button 
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-xs uppercase tracking-widest font-medium transition-colors ${activeTab === tab ? 'text-amber-400 border-b-2 border-amber-400' : 'text-zinc-500 hover:text-zinc-300'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-6 overflow-y-auto flex-1">
              <form id="propertyForm" onSubmit={handleSubmit} className="space-y-6">
                
                {/* Basic Info Tab */}
                <div className={activeTab === 'basic' ? 'block space-y-4' : 'hidden'}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-zinc-400 block mb-1">Title</label>
                      <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full bg-zinc-950 border border-white/10 px-4 py-2 text-sm text-white rounded-lg focus:outline-none focus:border-amber-400" />
                    </div>
                    <div>
                      <label className="text-xs text-zinc-400 block mb-1">Subtitle</label>
                      <input type="text" value={formData.subtitle} onChange={e => setFormData({...formData, subtitle: e.target.value})} className="w-full bg-zinc-950 border border-white/10 px-4 py-2 text-sm text-white rounded-lg focus:outline-none focus:border-amber-400" />
                    </div>
                    <div>
                      <label className="text-xs text-zinc-400 block mb-1">Location (Area, City)</label>
                      <input required type="text" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} className="w-full bg-zinc-950 border border-white/10 px-4 py-2 text-sm text-white rounded-lg focus:outline-none focus:border-amber-400" placeholder="e.g. Whitefield, Bengaluru" />
                    </div>
                    <div>
                      <label className="text-xs text-zinc-400 block mb-1">Full Address</label>
                      <input type="text" value={formData.fullAddress} onChange={e => setFormData({...formData, fullAddress: e.target.value})} className="w-full bg-zinc-950 border border-white/10 px-4 py-2 text-sm text-white rounded-lg focus:outline-none focus:border-amber-400" />
                    </div>
                    <div>
                      <label className="text-xs text-zinc-400 block mb-1">Status</label>
                      <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})} className="w-full bg-zinc-950 border border-white/10 px-4 py-2 text-sm text-white rounded-lg focus:outline-none focus:border-amber-400">
                        <option>Ready to Move</option>
                        <option>Under Construction</option>
                        <option>Pre-Launch</option>
                        <option>Ongoing</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-zinc-400 block mb-1">Price String</label>
                      <input required type="text" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} className="w-full bg-zinc-950 border border-white/10 px-4 py-2 text-sm text-white rounded-lg focus:outline-none focus:border-amber-400" placeholder="e.g. ₹1.2 Cr Onwards" />
                    </div>
                    <div>
                      <label className="text-xs text-zinc-400 block mb-1">Bedrooms</label>
                      <input type="text" value={formData.bedrooms} onChange={e => setFormData({...formData, bedrooms: e.target.value})} className="w-full bg-zinc-950 border border-white/10 px-4 py-2 text-sm text-white rounded-lg focus:outline-none focus:border-amber-400" placeholder="e.g. 2, 3 & 4 BHK" />
                    </div>
                    <div>
                      <label className="text-xs text-zinc-400 block mb-1">Area (Sq.Ft)</label>
                      <input type="text" value={formData.area} onChange={e => setFormData({...formData, area: e.target.value})} className="w-full bg-zinc-950 border border-white/10 px-4 py-2 text-sm text-white rounded-lg focus:outline-none focus:border-amber-400" placeholder="e.g. 1500 - 2500 Sq.Ft" />
                    </div>
                  </div>
                </div>

                {/* Images Tab */}
                <div className={activeTab === 'images' ? 'block space-y-6' : 'hidden'}>
                  <div>
                    <label className="text-xs text-zinc-400 block mb-2">Main Hero Image (Direct Upload)</label>
                    <div className="flex items-center gap-4">
                      {formData.heroImage && (
                        <img src={formData.heroImage} alt="Hero Preview" className="w-20 h-20 object-cover rounded border border-white/20" />
                      )}
                      <div className="flex-1">
                        <input 
                          type="file" 
                          accept="image/*"
                          onChange={async (e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              const fData = new FormData();
                              fData.append("file", file);
                              const res = await fetch("/api/upload", { method: "POST", body: fData });
                              const result = await res.json();
                              if (result.success) {
                                setFormData({...formData, heroImage: result.url});
                              } else {
                                alert("Upload failed");
                              }
                            }
                          }}
                          className="w-full text-sm text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-amber-500 file:text-zinc-950 hover:file:bg-amber-400"
                        />
                        <p className="text-[10px] text-zinc-500 mt-2">Select an image from your device.</p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-white/10">
                    <label className="text-xs text-zinc-400 block mb-2">Gallery Images (Direct Upload)</label>
                    
                    <input 
                      type="file" 
                      accept="image/*"
                      multiple
                      onChange={async (e) => {
                        const files = Array.from(e.target.files || []);
                        const urls: string[] = [];
                        for (const file of files) {
                          const fData = new FormData();
                          fData.append("file", file);
                          const res = await fetch("/api/upload", { method: "POST", body: fData });
                          const result = await res.json();
                          if (result.success) urls.push(result.url);
                        }
                        if (urls.length > 0) {
                          const currentGallery = formData.gallery ? formData.gallery.split(",").map(s => s.trim()).filter(Boolean) : [];
                          setFormData({
                            ...formData, 
                            gallery: [...currentGallery, ...urls].join(", ")
                          });
                        }
                      }}
                      className="w-full mb-3 text-sm text-zinc-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-amber-500 file:text-zinc-950 hover:file:bg-amber-400"
                    />
                    
                    {formData.gallery && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {formData.gallery.split(",").map(s => s.trim()).filter(Boolean).map((img, i) => (
                          <div key={i} className="relative group">
                            <img src={img} alt={`Gallery ${i}`} className="w-16 h-16 object-cover rounded border border-white/20" />
                            <button 
                              type="button"
                              onClick={() => {
                                const arr = formData.gallery.split(",").map(s => s.trim()).filter(Boolean);
                                arr.splice(i, 1);
                                setFormData({...formData, gallery: arr.join(", ")});
                              }}
                              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              <Icon icon="solar:close-circle-bold" width={14} height={14} />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    <textarea rows={2} value={formData.gallery} onChange={e => setFormData({...formData, gallery: e.target.value})} className="w-full bg-zinc-950 border border-white/10 px-4 py-2 text-sm text-zinc-500 rounded-lg focus:outline-none mt-3" placeholder="You can also paste image URLs directly separated by commas..." />
                  </div>
                </div>

                {/* Content Tab */}
                <div className={activeTab === 'content' ? 'block space-y-4' : 'hidden'}>
                  <div>
                    <label className="text-xs text-zinc-400 block mb-1">Project Overview</label>
                    <textarea rows={4} value={formData.projectOverview} onChange={e => setFormData({...formData, projectOverview: e.target.value})} className="w-full bg-zinc-950 border border-white/10 px-4 py-2 text-sm text-white rounded-lg focus:outline-none focus:border-amber-400" />
                  </div>
                  <div>
                    <label className="text-xs text-zinc-400 block mb-1">Architectural Vision</label>
                    <textarea rows={3} value={formData.architecturalVision} onChange={e => setFormData({...formData, architecturalVision: e.target.value})} className="w-full bg-zinc-950 border border-white/10 px-4 py-2 text-sm text-white rounded-lg focus:outline-none focus:border-amber-400" />
                  </div>
                  <div>
                    <label className="text-xs text-zinc-400 block mb-1">World-Class Lifestyle</label>
                    <textarea rows={3} value={formData.worldClassLifestyle} onChange={e => setFormData({...formData, worldClassLifestyle: e.target.value})} className="w-full bg-zinc-950 border border-white/10 px-4 py-2 text-sm text-white rounded-lg focus:outline-none focus:border-amber-400" />
                  </div>
                </div>
              </form>
            </div>

            <div className="p-6 border-t border-white/10 flex justify-end gap-3 bg-zinc-900">
              <button type="button" onClick={() => setIsModalOpen(false)} className="px-6 py-2 text-sm text-zinc-400 hover:text-white">Cancel</button>
              <button type="submit" form="propertyForm" className="px-6 py-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 text-sm font-bold rounded-lg transition-colors">{editingId ? "Update Property" : "Save Property"}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
