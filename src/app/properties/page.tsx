import React from "react";
import { getAllProperties } from "@/lib/propertyService";
import { PropertiesClientWrapper } from "./PropertiesPageClient";

export const dynamic = "force-dynamic";

export default async function PropertiesPage() {
  const properties = await getAllProperties();
  return <PropertiesClientWrapper properties={properties} />;
}
