import React from "react";
import { prisma } from "@/lib/prisma";
import { HomeClient } from "./HomeClient";
import { getSiteSettings } from "./actions/settingsActions";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [propertiesDb, settings] = await Promise.all([
    prisma.property.findMany({ orderBy: { createdAt: "desc" } }),
    getSiteSettings()
  ]);

  const properties = propertiesDb.map(p => ({
    ...p,
    overview: p.projectOverview ? p.projectOverview.split('\n\n') : [],
    highlights: (p.keyParameters as any)?.highlights || [],
    amenities: (p.keyParameters as any)?.amenities || [],
    specifications: (p.keyParameters as any)?.specifications || [],
    gallery: Array.isArray(p.gallery) ? p.gallery : (p.gallery ? [p.gallery] : [])
  }));

  return <HomeClient properties={properties} settings={settings} />;
}
