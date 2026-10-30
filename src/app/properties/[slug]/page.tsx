import React from "react";
import { notFound } from "next/navigation";
import { PageWrapper } from "@/components/PageWrapper";
import { getPropertyBySlug, getAllProperties } from "@/lib/propertyService";
import PropertyDetailClient from "./PropertyDetailClient";

interface PropertyPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamic = "force-dynamic";

export default async function PropertyDetailPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  
  const [property, allProperties] = await Promise.all([
    getPropertyBySlug(slug),
    getAllProperties(),
  ]);

  if (!property) {
    notFound();
  }

  return (
    <PageWrapper>
      <PropertyDetailClient property={property} allProperties={allProperties} />
    </PageWrapper>
  );
}
