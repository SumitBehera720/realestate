"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getEnquiries() {
  return await prisma.enquiry.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function updateEnquiryStatus(id: string, status: string) {
  try {
    await prisma.enquiry.update({
      where: { id },
      data: { status },
    });
    revalidatePath("/admin/enquiries");
    return { success: true };
  } catch (error) {
    return { success: false, error: "Failed to update status" };
  }
}

export async function createEnquiry(data: { name: string, phone: string, email?: string, property?: string }) {
  try {
    await prisma.enquiry.create({
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email,
        property: data.property,
      }
    });
    revalidatePath("/admin/enquiries");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to submit enquiry" };
  }
}

export async function deleteEnquiry(id: string) {
  try {
    await prisma.enquiry.delete({
      where: { id }
    });
    revalidatePath("/admin/enquiries");
    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to delete enquiry" };
  }
}
