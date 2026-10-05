"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getProperties() {
  return await prisma.property.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function addProperty(data: any) {
  try {
    await prisma.property.create({
      data: {
        title: data.title,
        slug: (data.title || "unnamed").toString().toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        subtitle: data.subtitle,
        propertyType: data.propertyType,
        status: data.status,
        price: data.price,
        location: data.location,
        fullAddress: data.fullAddress,
        bedrooms: data.bedrooms,
        area: data.area,
        heroImage: data.heroImage,
      },
    });
    revalidatePath("/admin/properties");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to add property" };
  }
}

export async function deleteProperty(id: string) {
  try {
    await prisma.property.delete({ where: { id } });
    revalidatePath("/admin/properties");
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to delete property" };
  }
}
