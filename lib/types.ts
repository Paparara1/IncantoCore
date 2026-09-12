export type EvidenceLevel =
  | "VERIFIED"
  | "DEMONSTRATED"
  | "EXPERIMENTAL"
  | "PROTOTYPE"
  | "RESEARCH"
  | "ROADMAP";

export type TechStatus =
  | "EXPERIMENTAL"
  | "RESEARCH"
  | "PROTOTYPE"
  | "DEMONSTRATOR"
  | "ROADMAP";

export type DevStatus =
  | "AVAILABLE"
  | "DEMONSTRATED"
  | "EXPERIMENTAL"
  | "ROADMAP";

export interface TechnologyAsset {
  id: string;
  name: string;
  subtitle: string;
  slug: string;
  category: string;
  description: string;
  status: TechStatus;
  trl: string;
  evidenceLevel: EvidenceLevel;
  technologies: string[];
  applications: string[];
  targetIndustries: string[];
  commercialModels: string[];
  licensingPotential: string;
  nextMilestone: string;
  demonstrator: string;
  acquisitionAvailable: boolean;
  licensingAvailable: boolean;
  partnershipAvailable: boolean;
  problem: string;
  architectureDescription: string;
  potentialStrategicBuyers: string[];
  architectureLayerIds: number[];
}

export interface CommercialPathModel {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  indicativePricingRange: string;
  targetAudience: string[];
  deliverables: string[];
}

export interface TechMapLayer {
  id: number;
  name: string;
  code: string;
  description: string;
  components: string[];
}

export type InquiryInterest =
  | "Technology Licensing"
  | "Enterprise Deployment"
  | "Strategic Partnership"
  | "OEM Integration"
  | "Joint Development"
  | "Technology Acquisition"
  | "Portfolio Acquisition"
  | "Investor Discussion"
  | "Technology Brief";

export interface ContactInquiry {
  name: string;
  company: string;
  role: string;
  email: string;
  interest: InquiryInterest;
  message: string;
  agreeContact: boolean;
}
