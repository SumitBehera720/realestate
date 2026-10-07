import { prisma } from '../src/lib/prisma';
import { PROPERTIES } from '../src/data/properties';

async function main() {
  console.log("Seeding properties...");
  for (const prop of PROPERTIES) {
    const existing = await prisma.property.findUnique({
      where: { slug: prop.slug }
    });

    const data = {
      slug: prop.slug,
      title: prop.title,
      subtitle: prop.subtitle,
      propertyType: prop.propertyType,
      status: prop.status,
      price: prop.price,
      location: prop.location,
      fullAddress: prop.fullAddress,
      bedrooms: prop.bedrooms,
      area: prop.area,
      heroImage: prop.heroImage,
      gallery: prop.gallery,
      projectOverview: prop.overview.join('\n\n'),
      keyParameters: {
        highlights: prop.highlights,
        amenities: prop.amenities,
        specifications: prop.specifications
      }
    };

    if (existing) {
      await prisma.property.update({
        where: { slug: prop.slug },
        data
      });
      console.log(`Updated ${prop.slug}`);
    } else {
      await prisma.property.create({ data });
      console.log(`Created ${prop.slug}`);
    }
  }
  console.log("Done seeding.");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
