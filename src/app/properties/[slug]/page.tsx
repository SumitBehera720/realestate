import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";
import { Icon } from "@/components/Icon";
import { PROPERTIES, getPropertyBySlug } from "@/data/properties";
import { CONTACT_INFO } from "@/data/siteData";
import PropertyDetailClient from "./PropertyDetailClient";

interface PropertyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROPERTIES.map((p) => ({
    slug: p.slug,
  }));
}

export default async function PropertyDetailPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return (
    <PageWrapper>
      <PropertyDetailClient property={property} allProperties={PROPERTIES} />
    </PageWrapper>
  );
}
