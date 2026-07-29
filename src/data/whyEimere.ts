import { 
  Zap, 
  Brain, 
  Users, 
  Rocket,
  type LucideIcon 
} from 'lucide-react';

export interface WhyFeature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isFeatured?: boolean;
}

export const whyFeatures: WhyFeature[] = [
  {
    id: 'end-to-end',
    title: 'End-to-End Delivery',
    description: 'Strategy to deployment — no handoffs, no gaps. One team owns the outcome from discovery to launch and beyond.',
    icon: Zap
  },
  {
    id: 'ai-first',
    title: 'AI-First Engineering',
    description: 'Every solution we build is designed with AI as a first-class component, not a bolt-on feature.',
    icon: Brain,
    isFeatured: true
  },
  {
    id: 'cross-domain',
    title: 'Cross-Domain Expert Team',
    description: '9 specialist domains under one roof — engineers, data scientists, security experts, and designers working in sync.',
    icon: Users
  },
  {
    id: 'startup-agility',
    title: 'Startup Agility, Enterprise Quality',
    description: 'Fast iteration cycles with the rigor, documentation, and reliability standards enterprises demand.',
    icon: Rocket
  }
];
