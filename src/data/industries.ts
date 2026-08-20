import { 
  ShoppingCart, 
  Heart, 
  Factory, 
  Landmark,
  Truck,
  GraduationCap,
  Building2,
  Store,
  type LucideIcon 
} from 'lucide-react';

export interface Industry {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const industries: Industry[] = [
  {
    id: 'retail-ecommerce',
    title: 'Retail & E-commerce',
    description: 'Unified commerce platforms and AI demand forecasting to reduce inventory waste and grow revenue.',
    icon: ShoppingCart
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Interoperable health data systems and predictive analytics that improve care speed and quality.',
    icon: Heart
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'IoT-powered predictive maintenance and operational dashboards that reduce unplanned downtime.',
    icon: Factory
  },
  {
    id: 'fintech-finance',
    title: 'FinTech & Finance',
    description: 'Secure, compliant financial platforms with automated KYC/AML workflows and embedded risk intelligence.',
    icon: Landmark
  },
  {
    id: 'logistics-supply-chain',
    title: 'Logistics & Supply Chain',
    description: 'Real-time shipment tracking and AI-optimised routing engines that cut fuel costs and delays.',
    icon: Truck
  },
  {
    id: 'education-edtech',
    title: 'Education & EdTech',
    description: 'Adaptive learning platforms and intelligent tutoring systems that lift learner engagement measurably.',
    icon: GraduationCap
  },
  {
    id: 'real-estate-proptech',
    title: 'Real Estate & PropTech',
    description: 'Smart property platforms with AI valuation models and automated document processing for faster deals.',
    icon: Building2
  },
  {
    id: 'local-shops-smes',
    title: 'Local Shops & SMEs',
    description: 'Affordable, tailored digital systems — websites, CRM, and marketing automation built for growth.',
    icon: Store
  }
];
