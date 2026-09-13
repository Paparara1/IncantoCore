import { CommercialPathModel } from "../types";

export const COMMERCIAL_MODELS: CommercialPathModel[] = [
  {
    id: "acquire",
    title: "1. ACQUISITION",
    shortDesc: "Strategic buyers can acquire individual technology assets or the wider portfolio.",
    fullDesc:
      "Execute a direct transfer of ownership, exclusive technology rights, patent assignments, design specifications, and source code repositories for specific assets or the entire INCANTO portfolio.",
    indicativePricingRange: "Indicative commercial range: Individual asset valuation / Portfolio negotiation",
    targetAudience: ["Corporate Development Teams", "Deep-Tech VC Portfolios", "Strategic Buyers", "Technology Holdings"],
    deliverables: [
      "Full IP & Source Code Assignment",
      "Design Files, Benchmarks & Due Diligence Data Room",
      "Core Developer Transition Support"
    ]
  },
  {
    id: "license",
    title: "2. LICENSING",
    shortDesc: "Organizations can license core algorithmic modules and neural frameworks.",
    fullDesc:
      "Incorporate patented or core algorithmic components into existing commercial software or cloud platforms under flexible enterprise software licensing frameworks.",
    indicativePricingRange: "Indicative reference range: B2B SaaS €299–€1,499/mo | Enterprise €25k–€150k+/project | Modules €5k–€50k+/module",
    targetAudience: ["Independent Software Vendors (ISVs)", "Enterprise SaaS Platforms", "OEM Software Partners"],
    deliverables: [
      "Software Development Kits (SDKs)",
      "API Access & Library Binary Distributions",
      "Maintenance & Algorithmic Updates"
    ]
  },
  {
    id: "partner",
    title: "3. STRATEGIC PARTNERSHIP",
    shortDesc: "Collaborate on field pilots, OEM integration, and multi-year R&D.",
    fullDesc:
      "Collaborate directly with our deep-tech engineering team to co-develop novel hardware-software pipelines, pilot field test units, or integrate algorithms into next-gen hardware platforms.",
    indicativePricingRange: "Indicative reference range: Joint Development €50,000–€500,000+ per program (subject to scope)",
    targetAudience: ["Hardware OEMs", "Robotics Integrators", "Innovation Labs", "System Integrators"],
    deliverables: [
      "Co-Development Milestones",
      "Field Test Pilot Prototypes",
      "Shared IP & Exclusive Field Rights Options"
    ]
  },
  {
    id: "transfer",
    title: "4. TECHNOLOGY TRANSFER",
    shortDesc: "Transfer verified algorithms, firmware, and dataset pipelines directly into client teams.",
    fullDesc:
      "Structured technical handover including complete technical documentation, architecture schematics, co-simulation harnesses, and training workshops.",
    indicativePricingRange: "Custom evaluation based on scope and training duration",
    targetAudience: ["Enterprise R&D Labs", "Defense Contractors", "Semiconductor Vendors"],
    deliverables: [
      "Full Algorithm & Firmware Transfer",
      "Engineering Workshops & Onboarding",
      "Testing & Verification Benchmarks"
    ]
  },
  {
    id: "investment",
    title: "5. INVESTMENT",
    shortDesc: "Explore venture funding and corporate strategic investment into asset expansion.",
    fullDesc:
      "Strategic investment opportunities to accelerate co-development of neuromorphic edge compute, contactless sensing, and bio-signal entrainment hardware pilots.",
    indicativePricingRange: "Custom valuation & equity/convertible allocation",
    targetAudience: ["Deep-Tech VCs", "Corporate Venture Capital (CVC)", "Family Offices"],
    deliverables: [
      "Information Memorandum & Financial Plan",
      "Quarterly R&D Progress Briefings",
      "Board Observer & Strategic Options"
    ]
  },
  {
    id: "joint-venture",
    title: "6. JOINT VENTURE",
    shortDesc: "Form dedicated joint ventures targeting specific vertical industries.",
    fullDesc:
      "Establish co-owned corporate entities combining INCANTO core IP with domain-specific market leaders in robotics, healthcare, lighting, or automotive.",
    indicativePricingRange: "Negotiated equity & capital contribution framework",
    targetAudience: ["Industry Conglomerates", "Tier-1 Automotive OEMs", "Global Medical Device Makers"],
    deliverables: [
      "Dedicated IP Contribution",
      "Joint Governance Structure",
      "Shared Commercial Rights"
    ]
  }
];

export const INDICATIVE_PRICING_REFERENCE = [
  {
    tier: "B2B SaaS / SDK License",
    range: "€299 – €1,499 / month",
    note: "Indicative commercial range — non-binding reference for SaaS modules."
  },
  {
    tier: "Enterprise Deployment",
    range: "€25,000 – €150,000+ per deployment",
    note: "Indicative commercial range — subject to due diligence & scope."
  },
  {
    tier: "Premium Technology Modules",
    range: "€5,000 – €50,000+ per module",
    note: "Indicative commercial range — modular algorithmic license."
  },
  {
    tier: "Joint Development Program",
    range: "€50,000 – €500,000+ per program",
    note: "Indicative commercial range — co-engineering partnership."
  },
  {
    tier: "Technology Asset Acquisition",
    range: "Custom Valuation",
    note: "Individual asset IP & source code buyout under NDA."
  }
];
