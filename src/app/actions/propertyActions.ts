"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getProperties() {
  try {
    const dbProps = await prisma.property.findMany({
      orderBy: { createdAt: "desc" },
    });
    return dbProps.map((p) => ({
      ...p,
      bathrooms: (p.keyParameters as any)?.bathrooms || "",
      totalUnits: (p.keyParameters as any)?.totalUnits || "",
      developmentSize: (p.keyParameters as any)?.developmentSize || "",
      noOfBlocks: (p.keyParameters as any)?.noOfBlocks || "",
      completionDate: (p.keyParameters as any)?.completionDate || "",
      reraNo: (p.keyParameters as any)?.reraNo || "",
    }));
  } catch (err) {
    console.error("Error in getProperties from DB, using fallback:", err);
    const { getAllProperties } = await import("@/lib/propertyService");
    const props = await getAllProperties();
    return props.map((p) => ({
      ...p,
      keyParameters: {
        bathrooms: p.bathrooms,
        totalUnits: p.totalUnits,
        developmentSize: p.developmentSize,
        noOfBlocks: p.noOfBlocks,
        completionDate: p.completionDate,
        reraNo: p.reraNo,
        highlights: p.highlights,
        amenities: p.amenities,
        specifications: p.specifications,
      },
    }));
  }
}

export async function addProperty(data: any) {
  try {
    const keyParameters = {
      ...(data.keyParameters || {}),
      bathrooms: data.bathrooms || data.keyParameters?.bathrooms || null,
      totalUnits: data.totalUnits || data.keyParameters?.totalUnits || null,
      developmentSize: data.developmentSize || data.keyParameters?.developmentSize || null,
      noOfBlocks: data.noOfBlocks || data.keyParameters?.noOfBlocks || null,
      completionDate: data.completionDate || data.keyParameters?.completionDate || null,
      reraNo: data.reraNo || data.keyParameters?.reraNo || null,
      highlights: data.highlights || data.keyParameters?.highlights || [],
      amenities: data.amenities || data.keyParameters?.amenities || [],
      specifications: data.specifications || data.keyParameters?.specifications || [],
    };

    await prisma.property.create({
      data: {
        title: data.title,
        slug: (data.title || "unnamed").toString().toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        subtitle: data.subtitle,
        badge: data.badge || null,
        propertyType: data.propertyType,
        status: data.status,
        price: data.price,
        location: data.location,
        fullAddress: data.fullAddress,
        bedrooms: data.bedrooms,
        area: data.area,
        heroImage: data.heroImage,
        gallery: data.gallery || [],
        description: data.description,
        projectOverview: data.projectOverview,
        architecturalVision: data.architecturalVision,
        worldClassLifestyle: data.worldClassLifestyle,
        keyParameters,
        contactDetails: data.contactDetails || {},
      },
    });
    revalidatePath("/admin/properties");
    revalidatePath("/properties");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to add property" };
  }
}

export async function updateProperty(id: string, data: any) {
  try {
    const keyParameters = {
      ...(data.keyParameters || {}),
      bathrooms: data.bathrooms || data.keyParameters?.bathrooms || null,
      totalUnits: data.totalUnits || data.keyParameters?.totalUnits || null,
      developmentSize: data.developmentSize || data.keyParameters?.developmentSize || null,
      noOfBlocks: data.noOfBlocks || data.keyParameters?.noOfBlocks || null,
      completionDate: data.completionDate || data.keyParameters?.completionDate || null,
      reraNo: data.reraNo || data.keyParameters?.reraNo || null,
      highlights: data.highlights || data.keyParameters?.highlights || [],
      amenities: data.amenities || data.keyParameters?.amenities || [],
      specifications: data.specifications || data.keyParameters?.specifications || [],
    };

    await prisma.property.update({
      where: { id },
      data: {
        title: data.title,
        subtitle: data.subtitle,
        badge: data.badge || null,
        propertyType: data.propertyType,
        status: data.status,
        price: data.price,
        location: data.location,
        fullAddress: data.fullAddress,
        bedrooms: data.bedrooms,
        area: data.area,
        heroImage: data.heroImage,
        gallery: data.gallery || [],
        description: data.description,
        projectOverview: data.projectOverview,
        architecturalVision: data.architecturalVision,
        worldClassLifestyle: data.worldClassLifestyle,
        keyParameters,
        contactDetails: data.contactDetails || {},
      },
    });
    revalidatePath("/admin/properties");
    revalidatePath("/properties");
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to update property" };
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
