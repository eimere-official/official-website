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
  problem: string;
  solution: string;
  result: string;
  icon: LucideIcon;
}

export const industries: Industry[] = [
  {
    id: 'retail-ecommerce',
    title: 'Retail & E-commerce',
    problem: 'Inventory guesswork eating into margins',
    solution: 'AI-driven demand forecasting & unified commerce platforms',
    result: '23% avg. inventory cost reduction',
    icon: ShoppingCart
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    problem: 'Fragmented patient data blocking care quality',
    solution: 'Integrated health data platforms & predictive care analytics',
    result: '40% faster care coordination',
    icon: Heart
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    problem: 'Production downtime killing throughput',
    solution: 'Predictive maintenance systems & operational intelligence dashboards',
    result: '35% reduction in unplanned downtime',
    icon: Factory
  },
  {
    id: 'fintech-finance',
    title: 'FinTech & Finance',
    problem: 'Compliance complexity slowing product velocity',
    solution: 'Secure, compliant fintech platforms with embedded risk intelligence',
    result: '60% faster compliance audits',
    icon: Landmark
  },
  {
    id: 'logistics-supply-chain',
    title: 'Logistics & Supply Chain',
    problem: 'Route inefficiency and shipment visibility gaps',
    solution: 'Real-time tracking platforms & AI-optimized routing engines',
    result: '18% fuel cost savings',
    icon: Truck
  },
  {
    id: 'education-edtech',
    title: 'Education & EdTech',
    problem: 'One-size-fits-all teaching failing learners',
    solution: 'Adaptive learning platforms & intelligent tutoring systems',
    result: '2.4× learner engagement uplift',
    icon: GraduationCap
  },
  {
    id: 'real-estate-proptech',
    title: 'Real Estate & PropTech',
    problem: 'Manual processes delaying deal cycles',
    solution: 'Smart property platforms with AI valuation & document automation',
    result: '45% faster deal closing',
    icon: Building2
  },
  {
    id: 'local-shops-smes',
    title: 'Local Shops & SMEs',
    problem: 'Competing against large players without enterprise tools',
    solution: 'Affordable, tailored digital systems — websites, CRM, marketing automation',
    result: '3.2× digital revenue growth',
    icon: Store
  }
];
