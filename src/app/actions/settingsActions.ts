"use server";

import { prisma } from "@/lib/prisma";

export async function getSiteSettings() {
  const settings = await prisma.siteSetting.findMany();
  const config: Record<string, any> = {};
  for (const s of settings) {
    config[s.key] = s.value;
  }
  return config;
}

export async function updateSiteSetting(key: string, value: any) {
  await prisma.siteSetting.upsert({
    where: { key },
    update: { value },
    create: { key, value },
  });
}
