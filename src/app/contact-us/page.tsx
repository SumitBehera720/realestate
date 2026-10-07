import React from "react";
import ContactUsClient from "./ContactUsClient";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function ContactUsPage() {
  const properties = await prisma.property.findMany({
    orderBy: { createdAt: "desc" },
    select: { id: true, title: true, location: true }
  });

  return <ContactUsClient properties={properties} />;
}
