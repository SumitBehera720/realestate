import { prisma } from "@/lib/prisma";
import { PROPERTIES, Property } from "@/data/properties";

export interface CompleteProperty extends Property {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  propertyType: string;
  status: string;
  price: string;
  priceNumeric: string;
  location: string;
  fullAddress: string;
  bedrooms: string;
  bathrooms?: string;
  area: string;
  totalUnits?: string;
  developmentSize?: string;
  noOfBlocks?: string;
  completionDate?: string;
  reraNo?: string;
  heroImage: string;
  gallery: string[];
  overview: string[];
  highlights: string[];
  amenities: { name: string; icon: string }[];
  specifications: { label: string; value: string }[];
  badge?: string;
}

export function normalizeProperty(dbProp: any): CompleteProperty {
  const staticMatch = PROPERTIES.find(
    (p) => p.slug === dbProp.slug || p.id === dbProp.slug || p.slug === dbProp.id
  );

  const keyParams = (typeof dbProp.keyParameters === "object" && dbProp.keyParameters !== null)
    ? dbProp.keyParameters
    : {};

  const gallery = Array.isArray(dbProp.gallery) && dbProp.gallery.length > 0
    ? dbProp.gallery
    : (staticMatch?.gallery || (dbProp.gallery ? [dbProp.gallery] : ["/images/sbr-one-main.webp"]));

  const overview = dbProp.projectOverview
    ? dbProp.projectOverview.split("\n\n").filter(Boolean)
    : (staticMatch?.overview || []);

  const highlights = (Array.isArray(keyParams.highlights) && keyParams.highlights.length > 0)
    ? keyParams.highlights
    : (staticMatch?.highlights || []);

  const amenities = (Array.isArray(keyParams.amenities) && keyParams.amenities.length > 0)
    ? keyParams.amenities
    : (staticMatch?.amenities || []);

  const specifications = (Array.isArray(keyParams.specifications) && keyParams.specifications.length > 0)
    ? keyParams.specifications
    : (staticMatch?.specifications || []);

  return {
    id: dbProp.id || staticMatch?.id || dbProp.slug,
    slug: dbProp.slug,
    title: dbProp.title || staticMatch?.title || "Signature Property",
    subtitle: dbProp.subtitle || staticMatch?.subtitle || "",
    propertyType: dbProp.propertyType || staticMatch?.propertyType || "Luxury Residential",
    status: dbProp.status || staticMatch?.status || "For Sale",
    price: dbProp.price || staticMatch?.price || "Price on Request",
    priceNumeric: keyParams.priceNumeric || staticMatch?.priceNumeric || "",
    location: dbProp.location || staticMatch?.location || "Bengaluru",
    fullAddress: dbProp.fullAddress || staticMatch?.fullAddress || dbProp.location || "",
    bedrooms: dbProp.bedrooms || staticMatch?.bedrooms || "Multi-BHK",
    bathrooms: keyParams.bathrooms || staticMatch?.bathrooms || "2 - 3 Baths",
    area: dbProp.area || staticMatch?.area || "Spacious Layouts",
    totalUnits: keyParams.totalUnits || staticMatch?.totalUnits || "",
    developmentSize: keyParams.developmentSize || staticMatch?.developmentSize || "",
    noOfBlocks: keyParams.noOfBlocks || staticMatch?.noOfBlocks || "",
    completionDate: keyParams.completionDate || staticMatch?.completionDate || "",
    reraNo: keyParams.reraNo || staticMatch?.reraNo || "",
    heroImage: dbProp.heroImage || staticMatch?.heroImage || gallery[0] || "/images/sbr-one-main.webp",
    gallery,
    overview,
    highlights,
    amenities,
    specifications,
    badge: dbProp.badge || undefined,
  };
}

export async function getAllProperties(): Promise<CompleteProperty[]> {
  try {
    const dbProperties = await prisma.property.findMany({
      orderBy: { createdAt: "desc" },
    });

    if (!dbProperties || dbProperties.length === 0) {
      return PROPERTIES as CompleteProperty[];
    }

    const mapped = dbProperties.map(normalizeProperty);

    // Ensure all curated properties from static catalog are included if not present
    for (const staticProp of PROPERTIES) {
      if (!mapped.some((m) => m.slug === staticProp.slug)) {
        mapped.push(staticProp as CompleteProperty);
      }
    }

    return mapped;
  } catch (err) {
    console.error("Error fetching properties from DB, falling back to static catalog:", err);
    return PROPERTIES as CompleteProperty[];
  }
}

export async function getPropertyBySlug(slug: string): Promise<CompleteProperty | null> {
  const normalized = (slug || "").toLowerCase().replace(/_/g, "-");
  try {
    const dbProp = await prisma.property.findFirst({
      where: {
        OR: [{ slug: normalized }, { id: normalized }],
      },
    });

    if (dbProp) {
      return normalizeProperty(dbProp);
    }
  } catch (err) {
    console.error(`Error fetching property ${slug} from DB:`, err);
  }

  const staticMatch = PROPERTIES.find(
    (p) => p.slug === normalized || p.id === normalized
  );

  return (staticMatch as CompleteProperty) || null;
}
