"use client";
import React from "react";
import { Icon } from "@/components/Icon";
import { updateEnquiryStatus } from "@/app/actions/enquiryActions";

export function EnquiriesClient({ enquiries }: { enquiries: any[] }) {
  const handleStatusChange = async (id: string, newStatus: string) => {
    await updateEnquiryStatus(id, newStatus);
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-serif text-white mb-2">Lead & Enquiry Management</h1>
          <p className="text-sm text-zinc-400">View and manage all customer enquiries and site visit requests.</p>
        </div>
      </div>

      <div className="bg-zinc-900 border border-white/10 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-zinc-400">
            <thead className="text-xs uppercase bg-zinc-950/50 text-zinc-500">
              <tr>
                <th className="px-6 py-4">Customer Details</th>
                <th className="px-6 py-4">Property</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {enquiries.length === 0 ? (
                <tr><td colSpan={4} className="text-center py-8 text-zinc-500">No enquiries found.</td></tr>
              ) : enquiries.map((row) => (
                <tr key={row.id} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-white mb-1">{row.name}</div>
                    <div className="text-xs text-zinc-500">{row.phone} | {row.email}</div>
                  </td>
                  <td className="px-6 py-4 text-white">{row.property}</td>
                  <td className="px-6 py-4">
                    <select 
                      value={row.status}
                      onChange={(e) => handleStatusChange(row.id, e.target.value)}
                      className={`text-xs uppercase tracking-wider px-2.5 py-1.5 rounded-full font-medium appearance-none cursor-pointer focus:outline-none ${
                        row.status === 'New' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                        row.status === 'Contacted' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                        'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      }`}
                    >
                      <option value="New">New</option>
                      <option value="Contacted">Contacted</option>
                      <option value="Site Visit">Site Visit</option>
                      <option value="Closed">Closed</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 text-right">
                     <div className="flex items-center justify-end gap-3">
                       <span className="text-xs text-zinc-600 mr-2">{new Date(row.createdAt).toLocaleDateString()}</span>
                       <button 
                         onClick={async () => {
                           if(confirm("Are you sure you want to delete this enquiry?")) {
                             const { deleteEnquiry } = await import("@/app/actions/enquiryActions");
                             await deleteEnquiry(row.id);
                           }
                         }}
                         className="text-zinc-500 hover:text-red-400 transition-colors"
                         title="Delete Enquiry"
                       >
                         <Icon icon="solar:trash-bin-trash-linear" width={18} height={18} />
                       </button>
                     </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
