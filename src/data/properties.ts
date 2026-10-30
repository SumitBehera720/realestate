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
  badge?: string;
}

export const PROPERTIES: Property[] = [
  {
    id: "sbr-one-residence",
    slug: "sbr-one-residence",
    title: "SBR One Residence",
    subtitle: "Luxury 2.5 & 3 BHK Apartments near Hope Farm Junction, Whitefield",
    propertyType: "Luxury High-Rise Apartments",
    status: "For Sale · New Launch",
    price: "₹1.69 Cr* Onwards",
    priceNumeric: "1.69 Cr",
    location: "Hopefarm, Whitefield, Bengaluru",
    fullAddress: "Near Hope Farm Junction, ITPL Main Road, Whitefield, Bengaluru, Karnataka 560066",
    bedrooms: "2.5 & 3 BHK",
    bathrooms: "2 - 3 Baths",
    area: "1,192 - 2,150 Sq.Ft",
    totalUnits: "930 Units",
    developmentSize: "11.75 Acres",
    noOfBlocks: "12+ Blocks (G+20 Floors)",
    completionDate: "2030",
    reraNo: "PRM/KA/RERA/1251/446/PR/131224/007297",
    badge: "Flagship",
    heroImage: "/images/sbr/sbr-one-residence/hero.jpg",
    gallery: [
      "/images/sbr/sbr-one-residence/hero.jpg",
      "/images/sbr/sbr-one-residence/gallery-1.jpg",
      "/images/sbr/sbr-one-residence/gallery-2.jpg",
      "/images/sbr/sbr-one-residence/gallery-3.jpg",
      "/images/sbr/sbr-one-residence/gallery-4.jpg",
      "/images/sbr/sbr-one-residence/gallery-5.jpg",
      "/images/sbr/sbr-one-residence/gallery-6.jpg",
      "/images/sbr/sbr-one-residence/gallery-7.jpg",
      "/images/sbr/sbr-one-residence/gallery-8.jpg"
    ],
    overview: [
      "SBR One Residence, a flagship residential project by SBR Group marketed by SK Realtech, is an ultra-luxurious apartment development situated near Hope Farm Junction in Whitefield, the premier IT corridor of East Bengaluru.",
      "The master development spans 11.75 pristine acres featuring 930 premium residences across 12+ contemporary towers rising G+20 floors. Thoughtfully planned layouts blend grand aesthetics, generous natural ventilation, and state-of-the-art construction standards.",
      "With direct proximity to Whitefield Metro Station, ITPL, world-class international schools, super-speciality hospitals, and shopping districts, SBR One Residence delivers unprecedented convenience and high capital appreciation potential."
    ],
    highlights: [
      "11.75 Acres expansive township with over 80% open landscaped green spaces",
      "Prime location just 3 minutes from Hope Farm Metro Station & ITPL tech park",
      "G+20 high-rise towers featuring panoramic vistas and modern architecture",
      "Over 45+ world-class lifestyle, sports, and recreational amenities",
      "Approved by Karnataka RERA: PRM/KA/RERA/1251/446/PR/131224/007297",
      "High expected ROI & rental yield due to Whitefield tech corridor demand"
    ],
    amenities: [
      { name: "Grand Clubhouse (40,000 Sq.Ft)", icon: "solar:buildings-2-linear" },
      { name: "Olympic-Length Infinity Pool & Deck", icon: "solar:water-sun-linear" },
      { name: "Fully Equipped Indoor Gym", icon: "solar:dumbbell-large-minimalistic-linear" },
      { name: "Yoga & Meditation Deck", icon: "solar:heart-angle-linear" },
      { name: "Children's Play & Adventure Zone", icon: "solar:gamepad-linear" },
      { name: "Badminton & Squash Courts", icon: "solar:cup-first-linear" },
      { name: "Jogging & Cycling Boardwalk", icon: "solar:running-linear" },
      { name: "Amphitheatre & Community Lawn", icon: "solar:streets-map-point-linear" },
      { name: "24/7 Multi-Tier Smart Security", icon: "solar:shield-check-linear" },
      { name: "EV Charging Infrastructure", icon: "solar:bolt-circle-linear" }
    ],
    specifications: [
      { label: "Structure", value: "RCC framed earthquake-resistant structure designed for seismic zone (G+20 Floors)" },
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
    title: "SBR Global Queen's Ville",
    subtitle: "Ultra-Luxury 2 & 3 BHK Row Villas & Villaments in Kumbalgodu, Mysore Road",
    propertyType: "Luxury Row Villas & Enclave",
    status: "For Sale · Ongoing",
    price: "₹1.70 Cr* Onwards",
    priceNumeric: "1.70 Cr",
    location: "Kumbalgodu, Mysore Road, Bengaluru",
    fullAddress: "Off Mysore Road Expressway, Near Kumbalgodu Metro Station, Bengaluru, Karnataka 560074",
    bedrooms: "2 & 3 BHK",
    bathrooms: "3 Baths",
    area: "1,720 - 2,650 Sq.Ft",
    totalUnits: "441 Units",
    developmentSize: "8 Acres",
    noOfBlocks: "5 Towers (G+4 Floors)",
    completionDate: "2027",
    reraNo: "PRM/KA/RERA/1251/310/PR/240625/007865",
    badge: "Row Villas",
    heroImage: "/images/sbr/sbr-global-queens-ville/hero.webp",
    gallery: [
      "/images/sbr/sbr-global-queens-ville/hero.webp",
      "/images/sbr/sbr-global-queens-ville/gallery-1.webp",
      "/images/sbr/sbr-global-queens-ville/gallery-2.webp",
      "/images/sbr/sbr-global-queens-ville/gallery-3.webp",
      "/images/sbr/sbr-global-queens-ville/gallery-4.webp",
      "/images/sbr/sbr-global-queens-ville/gallery-5.webp",
      "/images/sbr/sbr-global-queens-ville/gallery-6.webp",
      "/images/sbr/sbr-global-queens-ville/gallery-7.webp",
      "/images/sbr/sbr-global-queens-ville/gallery-8.webp"
    ],
    overview: [
      "Set across 8 acres of thoughtfully designed land, SBR Global Queen's Ville is an exclusive row villa and villament community blending tradition, innovation, and modern living.",
      "Built on the principles of complete Vastu compliance, the project balances sustainability with supreme human comfort. With carefully planned pedestrian-friendly pathways, landscaped green zones, and spirited architecture, every villa becomes part of a cohesive neighborhood that feels both intimate and expansive.",
      "Seamlessly connected via the Bengaluru-Mysore 10-lane Expressway and Namma Metro Purple Line, Global Queen's Ville provides effortless access to central Bangalore, tech corridors, and educational hubs."
    ],
    highlights: [
      "Exclusive 8-acre master development with low-density villa layout",
      "5 low-rise towers / G+4 blocks ensuring utmost privacy and cross-ventilation",
      "Total 441 signature residences designed with complete Vastu compliance",
      "Private terrace sky decks and dedicated backyards for every home",
      "Adjacent to Kumbalgodu Metro Station & NICE Road junction corridor",
      "RERA Registered: PRM/KA/RERA/1251/310/PR/240625/007865"
    ],
    amenities: [
      { name: "Luxury Resident Clubhouse", icon: "solar:buildings-2-linear" },
      { name: "Outdoor & Heated Swimming Pool", icon: "solar:water-sun-linear" },
      { name: "Outdoor & Indoor Gym", icon: "solar:dumbbell-large-minimalistic-linear" },
      { name: "Performing Arts Arena & Amphitheatre", icon: "solar:streets-map-point-linear" },
      { name: "Badminton & Table Tennis Courts", icon: "solar:cup-first-linear" },
      { name: "Central Green Park & Landscaped Gardens", icon: "solar:leaf-linear" },
      { name: "Modern Crèche & Kids Zone", icon: "solar:gamepad-linear" },
      { name: "24/7 Security Patrol & CCTV Surveillance", icon: "solar:shield-check-linear" }
    ],
    specifications: [
      { label: "Structure", value: "Reinforced cement concrete with solid block masonry walls (G+4 Floors)" },
      { label: "Flooring", value: "Premium imported marble finish vitrified tiles & anti-skid terrace tiles" },
      { label: "Balconies", value: "Toughened glass railings with stainless steel balustrades" },
      { label: "Power Backup", value: "100% DG backup for each residence and all common amenities" },
      { label: "Sanitary & CP", value: "Kohler / Jaquar high-end water fixtures and concealed flush tanks" }
    ]
  },
  {
    id: "sbr-florenso",
    slug: "sbr-florenso",
    title: "SBR Florenso",
    subtitle: "Exemplary 2, 3 & 4 BHK Japanese-Inspired Villaments in Seegehalli, Whitefield",
    propertyType: "Bespoke Villaments & Residences",
    status: "For Sale · Ongoing",
    price: "₹1.45 Cr* Onwards",
    priceNumeric: "1.45 Cr",
    location: "Seegehalli, Whitefield, Bengaluru",
    fullAddress: "SBR Horizon Campus, Sy no.24/5, Seegehalli, Whitefield-Hoskote Road, Bengaluru 560067",
    bedrooms: "2, 3 & 4 BHK",
    bathrooms: "3 - 4 Baths",
    area: "1,450 - 2,480 Sq.Ft",
    totalUnits: "104 Units",
    developmentSize: "2.3 Acres (2 Acres 12 Guntas)",
    noOfBlocks: "5 Towers (G+4 Floors)",
    completionDate: "2026",
    reraNo: "PRM/KA/RERA/1251/446/PR/091123/006405",
    badge: "Japanese Zen",
    heroImage: "/images/sbr/sbr-florenso/hero.jpg",
    gallery: [
      "/images/sbr/sbr-florenso/hero.jpg",
      "/images/sbr/sbr-florenso/gallery-1.jpg",
      "/images/sbr/sbr-florenso/gallery-2.jpg",
      "/images/sbr/sbr-florenso/gallery-3.jpg",
      "/images/sbr/sbr-florenso/gallery-4.jpg",
      "/images/sbr/sbr-florenso/gallery-5.jpg",
      "/images/sbr/sbr-florenso/gallery-6.jpg",
      "/images/sbr/sbr-florenso/gallery-7.jpg",
      "/images/sbr/sbr-florenso/gallery-8.jpg"
    ],
    overview: [
      "SBR Florenso is an exemplary residential villament development meticulously crafted to harmonize the tenets of Responsible Luxury, Japanese values for community wellbeing, and Vastu Shastra principles.",
      "Our vision is to create a living experience that transcends conventional boundaries, offering a haven of tranquility and prosperity to our residents across 5 boutique G+4 towers.",
      "Situated on Whitefield-Hoskote Road in Seegehalli, residents enjoy serene low-density living with immediate access to Kadugodi Metro, ITPL, and top international academies."
    ],
    highlights: [
      "Boutique low-density enclave of only 104 exclusive villaments",
      "Japanese-inspired biophilic architecture and Zen water features",
      "G+4 low-rise structure ensuring maximum privacy and calm",
      "2 Acres 12 Guntas serene campus with over 75% landscaped greenery",
      "RERA Registered: PRM/KA/RERA/1251/446/PR/091123/006405",
      "Near Kadugodi Metro Station, top international schools & tech parks"
    ],
    amenities: [
      { name: "Japanese Zen Garden & Tea Pavilion", icon: "solar:leaf-linear" },
      { name: "Resort-Style Swimming Pool & Kids Pool", icon: "solar:water-sun-linear" },
      { name: "Fully Equipped Fitness Centre & Outdoor Gym", icon: "solar:dumbbell-large-minimalistic-linear" },
      { name: "Meditation & Reflexology Boardwalk", icon: "solar:heart-angle-linear" },
      { name: "Clubhouse with Indoor Games Room", icon: "solar:buildings-2-linear" },
      { name: "Dedicated Children's Play Arena", icon: "solar:gamepad-linear" },
      { name: "24/7 Smart Surveillance & Security", icon: "solar:shield-check-linear" }
    ],
    specifications: [
      { label: "Structure", value: "RCC framed structure with solid concrete blocks & acoustic insulation (G+4 Floors)" },
      { label: "Flooring", value: "Premium Italian finish vitrified tiles & anti-skid wooden finish balcony tiles" },
      { label: "Joinery", value: "High-spec engineered wood doors with Hafele/Yale digital lock systems" },
      { label: "Sanitary", value: "Kohler / Grohe premium sanitary fittings with concealed cisterns" }
    ]
  },
  {
    id: "sbr-minara",
    slug: "sbr-minara",
    title: "SBR Minara",
    subtitle: "Exquisite 2, 2.5 & 3 BHK High-Rise Sky Residences & Villaments in Seegehalli",
    propertyType: "High-Rise Sky Residences",
    status: "For Sale · Rapid Construction",
    price: "₹1.35 Cr* Onwards",
    priceNumeric: "1.35 Cr",
    location: "Seegehalli, Whitefield, Bengaluru",
    fullAddress: "Seegehalli Main Road, Near Kadugodi Metro, Whitefield, Bengaluru, Karnataka 560067",
    bedrooms: "2, 2.5 & 3 BHK",
    bathrooms: "3 - 4 Baths",
    area: "1,290 - 2,850 Sq.Ft",
    totalUnits: "447 Units",
    developmentSize: "3 Acres 35 Guntas",
    noOfBlocks: "3 Sky Towers (G+28 Floors)",
    completionDate: "2028",
    reraNo: "PRM/KA/RERA/1251/446/PR/120922/005238",
    badge: "Sky Residences",
    heroImage: "/images/sbr/sbr-minara/hero.jpg",
    gallery: [
      "/images/sbr/sbr-minara/hero.jpg",
      "/images/sbr/sbr-minara/gallery-1.jpg",
      "/images/sbr/sbr-minara/gallery-2.jpg",
      "/images/sbr/sbr-minara/gallery-3.jpg",
      "/images/sbr/sbr-minara/gallery-4.jpg",
      "/images/sbr/sbr-minara/gallery-5.jpg",
      "/images/sbr/sbr-minara/gallery-6.jpg",
      "/images/sbr/sbr-minara/gallery-7.jpg",
      "/images/sbr/sbr-minara/gallery-8.jpg"
    ],
    overview: [
      "SBR Minara redefines vertical luxury living in Seegehalli, Whitefield. Rising G+28 floors into the Bengaluru skyline, each residential tower is tall enough that you literally live amongst the clouds with 360-degree panoramic views.",
      "This iconic development provides effortless access to all requirements for a comfortable life — Kadugodi Metro Station, top international schools, colleges, Nexus Shantiniketan Mall, and IT corridors within a 5 km radius.",
      "Experience signature rooftop living with an infinity edge lap pool, open sky observatory deck, and world-class sports courts."
    ],
    highlights: [
      "Sky Towers rising G+28 floors with 3-side open panoramic city vistas",
      "Rooftop Sky Lounge, Observatory Deck & Infinity Edge Lap Pool",
      "3.85 Acres prime development with 80% open landscaped spaces",
      "Approved by Karnataka RERA: PRM/KA/RERA/1251/446/PR/120922/005238",
      "5 minutes to Kadugodi Metro Station, ITPL & Whitefield tech corridor"
    ],
    amenities: [
      { name: "Rooftop Sky Lounge & Observatory", icon: "solar:city-linear" },
      { name: "Infinity Edge Lap Pool", icon: "solar:water-sun-linear" },
      { name: "Indoor Squash & Badminton Courts", icon: "solar:cup-first-linear" },
      { name: "Modern Fitness Centre & Steam Room", icon: "solar:dumbbell-large-minimalistic-linear" },
      { name: "Kids Play Area & Crèche", icon: "solar:gamepad-linear" },
      { name: "24/7 Advanced Surveillance & Security", icon: "solar:shield-check-linear" },
      { name: "EV Charging Infrastructure", icon: "solar:bolt-circle-linear" }
    ],
    specifications: [
      { label: "Structure", value: "Monolithic shear wall construction with high seismic stability (G+28 Floors)" },
      { label: "Joinery", value: "Full-height European system windows for panoramic city vistas" },
      { label: "Fixtures", value: "Kohler & Jaquar premium bath suites with Grohe CP fittings" }
    ]
  },
  {
    id: "sbr-magnus",
    slug: "sbr-magnus",
    title: "SBR Magnus",
    subtitle: "Premium 2, 2.5 & 3 BHK Residences at Katamnallur Gate, Old Madras Road",
    propertyType: "Premium Gated Community",
    status: "For Sale · New Launch",
    price: "₹1.15 Cr* Onwards",
    priceNumeric: "1.15 Cr",
    location: "Kattamnalluru, on Old Madras Rd, Bengaluru",
    fullAddress: "Katamnallur Gate, Whitefield-Hoskote Road, Opposite SBR Pravanika, Bengaluru, Karnataka 560049",
    bedrooms: "2, 2.5 & 3 BHK",
    bathrooms: "2 - 3 Baths",
    area: "1,120 - 1,840 Sq.Ft",
    totalUnits: "208 Units",
    developmentSize: "2 Acres",
    noOfBlocks: "2 Towers (G+14 Floors)",
    completionDate: "2027",
    reraNo: "PRM/KA/RERA/1251/446/PR/040125/007346",
    badge: "Prime Location",
    heroImage: "/images/sbr/sbr-magnus/hero.jpg",
    gallery: [
      "/images/sbr/sbr-magnus/hero.jpg",
      "/images/sbr/sbr-magnus/gallery-2.jpg",
      "/images/sbr/sbr-magnus/gallery-3.jpg",
      "/images/sbr/sbr-magnus/gallery-4.jpg",
      "/images/sbr/sbr-magnus/gallery-5.jpg",
      "/images/sbr/sbr-magnus/gallery-6.jpg",
      "/images/sbr/sbr-magnus/gallery-7.jpg",
      "/images/sbr/sbr-magnus/gallery-8.jpg",
      "/images/sbr/sbr-magnus/gallery-9.jpg"
    ],
    overview: [
      "SBR Magnus offers a haven of comfort, convenience, and joy nestled within a lush 2-Acre Gated Community. It seamlessly combines urban vibrancy with nature's tranquility in the heart of East Bengaluru.",
      "Featuring 208 premium residences across 2 contemporary G+14 towers, SBR Magnus is designed to balance modern functionality with timeless luxury. Perfect for IT professionals and families seeking high quality of life.",
      "Strategically located at Katamnallur Gate on Whitefield-Hoskote Road, with direct access to Old Madras Road, Orion Uptown Mall, and upcoming peripheral corridors."
    ],
    highlights: [
      "2-Acre lush gated community with over 15+ premium lifestyle amenities",
      "2 contemporary G+14 residential towers with zero dead-space layouts",
      "208 exclusive residences in 2, 2.5 & 3 BHK spacious configurations",
      "Direct proximity to Old Madras Road (NH-75) & Orion Uptown Mall",
      "Approved by Karnataka RERA: PRM/KA/RERA/1251/446/PR/040125/007346",
      "High appreciation corridor connecting Whitefield to North Bengaluru"
    ],
    amenities: [
      { name: "Exclusive Community Clubhouse", icon: "solar:buildings-2-linear" },
      { name: "Swimming Pool & Toddlers Splash Deck", icon: "solar:water-sun-linear" },
      { name: "Fully Equipped Fitness Centre", icon: "solar:dumbbell-large-minimalistic-linear" },
      { name: "Outdoor Sports Multicourt", icon: "solar:cup-first-linear" },
      { name: "Children's Play & Adventure Zone", icon: "solar:gamepad-linear" },
      { name: "Landscaped Central Park & Jogging Path", icon: "solar:leaf-linear" },
      { name: "24/7 Smart Security & Surveillance", icon: "solar:shield-check-linear" },
      { name: "EV Charging Infrastructure", icon: "solar:bolt-circle-linear" }
    ],
    specifications: [
      { label: "Structure", value: "RCC framed earthquake resistant structure with high seismic tolerance (G+14 Floors)" },
      { label: "Flooring", value: "Vitrified tiles in Living, Dining & Bedrooms; anti-skid ceramic tiles in Balconies" },
      { label: "Doors & Windows", value: "Main door with engineered wooden frame, powder coated aluminium sliding windows" },
      { label: "Electrical & Power", value: "Modular switches with 100% DG power backup for common areas & designated unit points" }
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
      "/images/sbr/sbr-one-residence/gallery-4.jpg"
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
  const normalized = (slug || "").toString().toLowerCase().replace(/_/g, "-");
  return PROPERTIES.find(
    (p) =>
      p.slug === normalized ||
      p.id === normalized ||
      (normalized === "sbr-one-residence" && p.id === "sbr-one-residence")
  );
};
