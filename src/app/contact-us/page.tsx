import React from "react";
import ContactUsClient from "./ContactUsClient";
import { getAllProperties } from "@/lib/propertyService";

export const dynamic = "force-dynamic";

export default async function ContactUsPage() {
  const allProperties = await getAllProperties();
  const properties = allProperties.map((p) => ({
    id: p.id,
    title: p.title,
    location: p.location,
  }));

  return <ContactUsClient properties={properties} />;
}
