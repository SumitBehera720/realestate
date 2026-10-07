import { PrismaClient } from "@prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import mariadb from "mariadb";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

const connectionString = (process.env.DATABASE_URL || "mysql://u892283443_realestate01:Qubnix123%40@localhost:3306/u892283443_realestate01").replace("mysql://", "mariadb://");
const pool = mariadb.createPool(connectionString);
const adapter = new PrismaMariaDb(pool as any);

export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
