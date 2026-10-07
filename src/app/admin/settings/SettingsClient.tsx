"use client";
import React, { useState } from "react";
import { AdminLayout } from "@/components/AdminLayout";
import { Icon } from "@/components/Icon";

export default function SettingsClient({ initialSettings }: { initialSettings: Record<string, any> }) {
  const [heroTitle, setHeroTitle] = useState(initialSettings?.heroTitle || ["Discover.", "Unmatched.", "Luxury."]);
  const [instagramImages, setInstagramImages] = useState<string[]>(initialSettings?.instagramImages || [
    "/images/founder-award-1.jpeg",
    "/images/founder-award-2.jpeg",
    "/images/founder-award-3.jpeg",
    "/images/founder-award-4.jpeg",
    "/images/founder-award-5.jpeg",
    "/images/founder-award-6.jpg",
  ]);
  const [isSaving, setIsSaving] = useState(false);
  const [uploading, setUploading] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    const { updateSiteSetting } = await import("@/app/actions/settingsActions");
    
    await updateSiteSetting("heroTitle", heroTitle);
    await updateSiteSetting("instagramImages", instagramImages);
    
    setIsSaving(false);
    alert("Settings saved successfully!");
  };

  const handleHeroChange = (index: number, value: string) => {
    const newTitle = [...heroTitle];
    newTitle[index] = value;
    setHeroTitle(newTitle);
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      if (res.ok) {
        const data = await res.json();
        setInstagramImages([...instagramImages, data.fileUrl]);
      }
    } catch (err) {
      console.error(err);
    }
    setUploading(false);
  };

  const removeImage = (index: number) => {
    setInstagramImages(instagramImages.filter((_, i) => i !== index));
  };

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-serif text-white mb-2">Global Site Settings</h1>
        <p className="text-sm text-zinc-400">Manage the hero section text and Instagram gallery images.</p>
      </div>

      <form onSubmit={handleSave} className="space-y-8 max-w-4xl">
        <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
          <h2 className="text-lg font-serif text-white mb-6 border-b border-white/10 pb-4">Hero Section Title</h2>
          <div className="space-y-4">
            {heroTitle.map((line: string, i: number) => (
              <div key={i}>
                <label className="text-xs text-zinc-400 block mb-2 uppercase tracking-wider">Line {i + 1}</label>
                <input 
                  type="text" 
                  value={line} 
                  onChange={(e) => handleHeroChange(i, e.target.value)}
                  className="w-full bg-zinc-950 border border-white/10 px-4 py-3 text-sm text-white rounded-lg focus:outline-none focus:border-amber-400" 
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-900 border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
            <h2 className="text-lg font-serif text-white">Instagram Gallery</h2>
            <div>
              <label className="cursor-pointer bg-amber-500/20 text-amber-400 border border-amber-500/30 px-4 py-2 rounded-lg text-xs uppercase tracking-widest font-semibold hover:bg-amber-500/30 transition-colors">
                {uploading ? "Uploading..." : "Upload Image"}
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" disabled={uploading} />
              </label>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {instagramImages.map((img: string, i: number) => (
              <div key={i} className="relative aspect-square rounded-lg overflow-hidden group border border-white/10">
                <img src={img} alt="Instagram" className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => removeImage(i)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Icon icon="solar:trash-bin-trash-linear" width={16} height={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button 
            type="submit" 
            disabled={isSaving}
            className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs uppercase tracking-widest rounded-lg transition-all shadow-lg disabled:opacity-50"
          >
            {isSaving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </AdminLayout>
  );
}
