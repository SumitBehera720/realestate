export interface Property {
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
}

export const PROPERTIES: Property[] = [
  {
    id: "sbr-one-residence",
    slug: "sbr-one-residence",
    title: "SBR One Residence",
    subtitle: "Luxury 2.5 & 3 BHK Apartments near Hope Farm Junction, Whitefield",
    propertyType: "Luxury Residential Apartments",
    status: "For Sale · New Launch",
    price: "₹1.69 Cr* Onwards",
    priceNumeric: "1.69 Cr",
    location: "Hopefarm, Whitefield, Bengaluru",
    fullAddress: "Hope Farm Junction, ITPL Main Road, Whitefield, Bengaluru, Karnataka 560066",
    bedrooms: "2.5 & 3 BHK",
    bathrooms: "2 - 3 Baths",
    area: "1,472 - 2,150 Sq.Ft",
    totalUnits: "930 Units",
    developmentSize: "11.75 Acres",
    noOfBlocks: "12+ Blocks",
    completionDate: "2030",
    reraNo: "PRM/KA/RERA/1251/446/PR/131224/007297",
    heroImage: "/images/sbr-one-main.webp",
    gallery: [
      "/images/sbr-one-main.webp",
      "/images/sbr-one-gallery-1.webp",
      "/images/sbr-one-gallery-2.webp",
      "/images/sbr-one-gallery-3.webp",
      "/images/sbr-one-gallery-4.webp",
      "/images/sbr-one-gallery-5.webp",
      "/images/sbr-one-gallery-6.webp",
      "/images/sbr-one-amenities.webp",
    ],
    overview: [
      "SBR One Residence, a flagship residential project by SBR Group marketed by SK Realtech, is an ultra-luxurious apartment complex strategically positioned near Hope Farm Junction in Whitefield, the premier IT corridor of East Bengaluru.",
      "The master development spans 11.75 pristine acres featuring 930 premium residences across 12+ contemporary towers. Thoughtfully planned layouts blend grand aesthetics, generous natural ventilation, and state-of-the-art construction standards.",
      "With direct proximity to Whitefield Metro Station, ITPL, world-class international schools, super-speciality hospitals, and shopping districts, SBR One Residence delivers unprecedented convenience and high capital appreciation potential for homebuyers and discerning investors."
    ],
    highlights: [
      "11.75 Acres expansive township with 80% open landscaped green spaces",
      "Prime location just 3 minutes from Hope Farm Metro Station & ITPL",
      "Over 45+ world-class lifestyle, sports, and recreational amenities",
      "Approved by Karnataka RERA (PRM/KA/RERA/1251/446/PR/131224/007297)",
      "Tier-1 construction quality with biophilic architectural principles",
      "High expected ROI & rental yield due to Whitefield tech corridor demand"
    ],
    amenities: [
      { name: "Grand Clubhouse (40,000 Sq.Ft)", icon: "solar:buildings-2-linear" },
      { name: "Olympic-Length Infinity Pool", icon: "solar:water-sun-linear" },
      { name: "Fully Equipped Gym & Yoga Studio", icon: "solar:dumbbell-large-minimalistic-linear" },
      { name: "Children's Play & Adventure Zone", icon: "solar:gamepad-linear" },
      { name: "Tennis, Badminton & Squash Courts", icon: "solar:cup-first-linear" },
      { name: "Lush Landscaped Zen Gardens", icon: "solar:leaf-linear" },
      { name: "Jogging & Cycling Boardwalk", icon: "solar:running-linear" },
      { name: "24/7 Multi-Tier Smart Security", icon: "solar:shield-check-linear" },
      { name: "EV Charging Infrastructure", icon: "solar:bolt-circle-linear" },
      { name: "Amphitheatre & Multipurpose Hall", icon: "solar:streets-map-point-linear" }
    ],
    specifications: [
      { label: "Structure", value: "RCC framed earthquake-resistant structure designed for seismic zone" },
      { label: "Flooring", value: "Large-format Italian glazed vitrified tiles in Living & Dining, laminated wooden flooring in Master Bedroom" },
      { label: "Doors & Windows", value: "8ft high teak wood engineered frame main door, 3-track powder coated aluminium windows with mosquito mesh" },
      { label: "Kitchen", value: "Granite platform with double bowl stainless steel sink & piped gas provision" },
      { label: "Electrical", value: "Concealed copper wiring with Schneider/Legrand modular switches & 100% DG power backup" },
      { label: "Plumbing & Sanitary", value: "Grohe / Kohler premium CP fittings and wall-hung sanitary ware" }
    ]
  },
  {
    id: "global-queens-ville",
    slug: "global-queens-ville",
    title: "SBR Global Queens Ville",
    subtitle: "Ultra-Premium 2 & 3 BHK Luxury Villas and Villaments",
    propertyType: "Luxury Villa & Gated Community",
    status: "For Sale · Ongoing",
    price: "₹1.7 Cr Onwards*",
    priceNumeric: "1.70 Cr",
    location: "Kumbalgodu, Mysore Road, Bengaluru",
    fullAddress: "Near Kumbalgodu Metro Station, Off Mysore Road Expressway, Bengaluru, Karnataka 560074",
    bedrooms: "2 & 3 BHK",
    bathrooms: "3 Baths",
    area: "1,720 - 2,650 Sq.Ft",
    totalUnits: "280 Units",
    developmentSize: "8.5 Acres",
    noOfBlocks: "Gated Enclave",
    completionDate: "2027",
    reraNo: "PRM/KA/RERA/1251/310/PR/220822/005180",
    heroImage: "/images/global-queens-ville.webp",
    gallery: [
      "/images/global-queens-ville.webp",
      "/images/noble-apartments.webp",
      "/images/hero-luxury-banner.jpg",
      "/images/about-interior.jpg"
    ],
    overview: [
      "SBR Global Queens Ville is an exclusive enclave of serene luxury villas and villaments situated along the burgeoning Mysore Road corridor near Kumbalgodu, Bangalore.",
      "Designed for those who crave privacy and nature without disconnecting from the city, each villa boasts dedicated private gardens, double-height living spaces, and bespoke architecture.",
      "With seamless connectivity via the Bengaluru-Mysore 10-lane Expressway and Namma Metro Purple Line, Global Queens Ville offers effortless access to central Bangalore and tech parks."
    ],
    highlights: [
      "Low-density community offering privacy and open air living",
      "Private backyards and terrace sky decks with every villa",
      "Adjacent to Kumbalgodu Metro Station & NICE Road junction",
      "Comprehensive club lifestyle with indoor sports and swimming pool",
      "Sustainable design with rainwater harvesting & solar street lighting"
    ],
    amenities: [
      { name: "Exclusive Resident Clubhouse", icon: "solar:buildings-2-linear" },
      { name: "Heated Swimming Pool", icon: "solar:water-sun-linear" },
      { name: "Badminton & Table Tennis", icon: "solar:cup-first-linear" },
      { name: "Landscaped Central Park", icon: "solar:leaf-linear" },
      { name: "Round-the-Clock CCTV & Manned Security", icon: "solar:shield-check-linear" },
      { name: "Senior Citizen Reflexology Park", icon: "solar:heart-angle-linear" }
    ],
    specifications: [
      { label: "Structure", value: "Reinforced cement concrete with solid block masonry walls" },
      { label: "Flooring", value: "Premium imported marble finish vitrified tiles & anti-skid terrace tiles" },
      { label: "Balconies", value: "Toughened glass railings with stainless steel balustrades" },
      { label: "Power Backup", value: "100% DG backup for each villa and all common amenities" }
    ]
  },
  {
    id: "sbr-minara",
    slug: "sbr-minara",
    title: "SBR Minara",
    subtitle: "Exquisite 3 & 4 BHK High-Rise Apartments & Villaments",
    propertyType: "High-Rise Residential",
    status: "For Sale · Rapid Construction",
    price: "₹1.2 Cr Onwards*",
    priceNumeric: "1.20 Cr",
    location: "Seegehalli, Whitefield, Bengaluru",
    fullAddress: "Seegehalli Main Road, Near Kadugodi Metro, Whitefield, Bengaluru, Karnataka 560067",
    bedrooms: "3 & 4 BHK",
    bathrooms: "3 - 4 Baths",
    area: "1,472 - 2,200 Sq.Ft",
    totalUnits: "450 Units",
    developmentSize: "6.2 Acres",
    noOfBlocks: "4 High-Rise Towers",
    completionDate: "2028",
    reraNo: "PRM/KA/RERA/1251/446/PR/280323/005822",
    heroImage: "/images/sbr-minara.webp",
    gallery: [
      "/images/sbr-minara.webp",
      "/images/sbr-one-gallery-3.webp",
      "/images/sbr-one-gallery-5.webp",
      "/images/hero-villa.jpg"
    ],
    overview: [
      "SBR Minara redefines vertical luxury living in Seegehalli, Whitefield. Rising into the Bengaluru skyline, these sky residences feature 3-sided open views, private elevator foyers, and zero-compromise acoustic isolation.",
      "Residents enjoy a signature sky lounge on the 24th floor, infinity edge swimming pool, and immediate access to IT corridors, Kadugodi Tree Park, and top schools."
    ],
    highlights: [
      "3-side open residences ensuring maximum natural sunlight & airflow",
      "Sky Lounge & Observatory Deck at rooftop height",
      "Proximity to Kadugodi Metro Station and major tech parks",
      "Vastu-compliant architecture with zero dead-space layout"
    ],
    amenities: [
      { name: "Rooftop Sky Lounge", icon: "solar:city-linear" },
      { name: "Infinity Lap Pool", icon: "solar:water-sun-linear" },
      { name: "Indoor Squash & Badminton Courts", icon: "solar:cup-first-linear" },
      { name: "Modern Fitness Centre & Steam Room", icon: "solar:dumbbell-large-minimalistic-linear" },
      { name: "Kids Play Area & Crèche", icon: "solar:gamepad-linear" },
      { name: "24/7 Advanced Surveillance & Guarded Access", icon: "solar:shield-check-linear" }
    ],
    specifications: [
      { label: "Structure", value: "Monolithic shear wall construction with high seismic stability" },
      { label: "Joinery", value: "Full-height European system windows for panoramic city vistas" },
      { label: "Fixtures", value: "Kohler & Jaquar premium bath suites" }
    ]
  },
  {
    id: "brigade-oasis",
    slug: "brigade-oasis",
    title: "Brigade Oasis",
    subtitle: "Premium Gated Villa Plots in North Bengaluru",
    propertyType: "Residential Plotted Enclave",
    status: "For Sale · Phase 2 Available",
    price: "₹1.30 Cr Onwards*",
    priceNumeric: "1.30 Cr",
    location: "Lakshmipura, Devanahalli, Bengaluru",
    fullAddress: "Brigade Oasis, Lakshmipura, Near Kempegowda International Airport, Devanahalli, Bengaluru 562110",
    bedrooms: "Custom Villa Plots",
    bathrooms: "Custom Build",
    area: "1,200 - 2,400 Sq.Ft Plots",
    totalUnits: "500+ Plots",
    developmentSize: "40 Acres",
    noOfBlocks: "3 Phased Sectors",
    completionDate: "Ready for Registration",
    reraNo: "PRM/KA/RERA/1250/303/PR/221103/005423",
    heroImage: "/images/brigade-oasis.webp",
    gallery: [
      "/images/brigade-oasis.webp",
      "/images/heritage-night.jpg",
      "/images/sbr-one-gallery-4.webp"
    ],
    overview: [
      "Brigade Oasis is a prestigious 40-acre plotted development in Lakshmipura, Devanahalli. Designed with wide tree-lined boulevards, underground cabling, and landscaped parks, it provides the ideal canvas to build your dream luxury bungalow.",
      "Minutes away from Kempegowda International Airport, Aerospace SEZ, and Hardware Park, this development guarantees unmatched capital appreciation in Bangalore's fastest growing sector."
    ],
    highlights: [
      "BIAAPA & RERA approved plotted development",
      "15 minutes drive to Kempegowda International Airport",
      "Underground electrical, fiber-optic, and sanitary infrastructure",
      "Magnificent clubhouse with resort-style amenities and outdoor parks"
    ],
    amenities: [
      { name: "Resort-Style Plotted Clubhouse", icon: "solar:buildings-2-linear" },
      { name: "Tennis & Basketball Multicourts", icon: "solar:cup-first-linear" },
      { name: "Jogging Trails & Pet Park", icon: "solar:running-linear" },
      { name: "Organic Farm & Fruit Orchard", icon: "solar:leaf-linear" },
      { name: "Solar Lighting & 24/7 Security Patrol", icon: "solar:shield-check-linear" }
    ],
    specifications: [
      { label: "Roads", value: "40ft and 30ft wide asphalted internal roads with concrete kerbs" },
      { label: "Water & Sewage", value: "Dedicated STP with dual piping network for landscaping" },
      { label: "Electricity", value: "100% underground cabling with feeder pillars" }
    ]
  }
];

export const getPropertyBySlug = (slug: string): Property | undefined => {
  const normalized = slug.toLowerCase().replace(/_/g, "-");
  return PROPERTIES.find(p => p.slug === normalized || p.id === normalized || (normalized === "sbr-one-residence" && p.id === "sbr-one-residence"));
};
