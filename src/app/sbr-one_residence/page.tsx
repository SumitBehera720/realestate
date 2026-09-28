import React from "react";
import { notFound } from "next/navigation";
import { PageWrapper } from "@/components/PageWrapper";
import { PROPERTIES, getPropertyBySlug } from "@/data/properties";
import PropertyDetailClient from "../properties/[slug]/PropertyDetailClient";

export default function SbrOneResidenceDirectPage() {
  const property = getPropertyBySlug("sbr-one-residence");

  if (!property) {
    notFound();
  }

  return (
    <PageWrapper>
      <PropertyDetailClient property={property} allProperties={PROPERTIES} />
    </PageWrapper>
  );
}
