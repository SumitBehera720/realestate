import React from "react";
import { prisma } from "@/lib/prisma";
import { HomeClient } from "./HomeClient";

export const dynamic = "force-dynamic";

export default async function Home() {
  const propertiesDb = await prisma.property.findMany({
    orderBy: { createdAt: "desc" },
  });

  const properties = propertiesDb.map(p => ({
    ...p,
    overview: p.projectOverview ? p.projectOverview.split('\n\n') : [],
    highlights: (p.keyParameters as any)?.highlights || [],
    amenities: (p.keyParameters as any)?.amenities || [],
    specifications: (p.keyParameters as any)?.specifications || [],
    gallery: Array.isArray(p.gallery) ? p.gallery : (p.gallery ? [p.gallery] : [])
  }));

  return <HomeClient properties={properties} />;
}
