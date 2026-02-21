export interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const servicesDetail: ServiceDetail[] = [
  {
    id: "equipment-supply",
    title: "Equipment Supply",
    description: "We provide a comprehensive range of construction and lifting equipment from industry-leading manufacturers. Our catalog spans compactors, rebar machinery, aerial work platforms, concrete equipment, and power solutions—enabling you to source all project requirements through a single, trusted partner.",
    icon: "truck",
    features: [
      "Full catalog from Wolth, Alpha, Yanmar and premium brands",
      "New and certified pre-owned equipment options",
      "Flexible procurement: purchase, lease, or rental",
      "Regional logistics and delivery coordination",
    ],
  },
  {
    id: "sustainable-building",
    title: "Sustainable Building Solutions",
    description: "SBS Co. integrates sustainable practices into every project. We offer eco-efficient equipment, green building solutions, and advisory services that align with environmental standards and corporate sustainability goals across the region.",
    icon: "leaf",
    features: [
      "Eco-efficient and fuel-optimized machinery",
      "Green building compliance consulting",
      "Sustainable material and equipment sourcing",
      "Carbon footprint assessment support",
    ],
  },
  {
    id: "heavy-machinery",
    title: "Heavy Machinery Procurement",
    description: "End-to-end procurement of heavy construction and industrial machinery. From excavators and loaders to specialized lifting equipment, we manage the full sourcing lifecycle—specification, procurement, delivery, and commissioning—for large-scale infrastructure and industrial projects.",
    icon: "cog",
    features: [
      "Bulk procurement and fleet solutions",
      "Custom specifications and OEM sourcing",
      "Import documentation and customs clearance",
      "Commissioning and handover support",
    ],
  },
  {
    id: "technical-consultation",
    title: "Technical Consultation",
    description: "Our engineering and technical teams provide expert consultation on equipment selection, project planning, and operational optimization. From feasibility studies to site-specific recommendations, we deliver actionable insights that drive project success.",
    icon: "chart",
    features: [
      "Equipment feasibility and specification studies",
      "Site-specific equipment recommendations",
      "Operational efficiency and productivity analysis",
      "Ongoing technical support and troubleshooting",
    ],
  },
];
