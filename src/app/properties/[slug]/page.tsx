import React from "react";
import { notFound } from "next/navigation";
import { PageWrapper } from "@/components/PageWrapper";
import { prisma } from "@/lib/prisma";
import PropertyDetailClient from "./PropertyDetailClient";

interface PropertyPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-dynamic";

export default async function PropertyDetailPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  
  // Fetch property from database
  const propertyDb = await prisma.property.findUnique({
    where: { slug }
  });

  if (!propertyDb) {
    notFound();
  }

  // Fetch other properties for the "More Properties" section
  const allPropertiesDb = await prisma.property.findMany({
    take: 4,
    orderBy: { createdAt: "desc" }
  });

  // Map DB structure to the expected frontend structure
  const property = {
    ...propertyDb,
    overview: propertyDb.projectOverview ? propertyDb.projectOverview.split('\n\n') : [],
    highlights: (propertyDb.keyParameters as any)?.highlights || [],
    amenities: (propertyDb.keyParameters as any)?.amenities || [],
    specifications: (propertyDb.keyParameters as any)?.specifications || [],
    gallery: Array.isArray(propertyDb.gallery) ? propertyDb.gallery : (propertyDb.gallery ? [propertyDb.gallery] : [])
  };

  const allProperties = allPropertiesDb.map(p => ({
    ...p,
    overview: p.projectOverview ? p.projectOverview.split('\n\n') : [],
    highlights: (p.keyParameters as any)?.highlights || [],
    amenities: (p.keyParameters as any)?.amenities || [],
    specifications: (p.keyParameters as any)?.specifications || [],
    gallery: Array.isArray(p.gallery) ? p.gallery : (p.gallery ? [p.gallery] : [])
  }));

  return (
    <PageWrapper>
      <PropertyDetailClient property={property} allProperties={allProperties} />
    </PageWrapper>
  );
}
