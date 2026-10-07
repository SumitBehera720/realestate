import { prisma } from './src/lib/prisma';

async function main() {
  try {
    const props = await prisma.property.findMany({ take: 1 });
    console.log("Success! Found properties:", props.length);
  } catch (e) {
    console.error("DB Error:", e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
