import { PrismaClient } from "@prisma/client";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import mariadb from "mariadb";

const globalForPrisma = global as unknown as { prisma: PrismaClient; pool: any };

const dbUrl = process.env.DATABASE_URL || "mysql://u892283443_realestate01:Qubnix123%40@145.79.58.122:3306/u892283443_realestate01";

function createPool() {
  try {
    const parsed = new URL(dbUrl);
    return mariadb.createPool({
      host: parsed.hostname,
      port: Number(parsed.port) || 3306,
      user: decodeURIComponent(parsed.username),
      password: decodeURIComponent(parsed.password),
      database: parsed.pathname.replace(/^\//, ""),
      connectionLimit: 2,
      connectTimeout: 2000,
      acquireTimeout: 2000,
      idleTimeout: 15000,
      minimumIdle: 0,
    });
  } catch {
    return mariadb.createPool(dbUrl.replace("mysql://", "mariadb://"));
  }
}

const pool = globalForPrisma.pool || createPool();
const adapter = new PrismaMariaDb(pool as any);

export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
  globalForPrisma.pool = pool;
}
