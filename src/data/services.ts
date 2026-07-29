import { 
  Globe, 
  Smartphone, 
  Layers, 
  Brain, 
  BarChart, 
  Cloud, 
  Shield, 
  TrendingUp, 
  Lightbulb,
  MessageSquare,
  Target,
  type LucideIcon 
} from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  isFeatured?: boolean;
}

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Scalable, secure, high-performance web platforms',
    icon: Globe,
    link: '/services/web-development'
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    description: 'Native & cross-platform apps built for performance',
    icon: Smartphone,
    link: '/services/mobile-app-development'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Research-driven, intuitive product design',
    icon: Layers,
    link: '/services/ui-ux-design'
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Automation, ML models, and predictive intelligence',
    icon: Brain,
    link: '/services/ai-solutions'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    description: 'Turning raw data into decisions that drive growth',
    icon: BarChart,
    link: '/services/data-analytics',
    isFeatured: true
  },
  {
    id: 'cloud-services',
    title: 'Cloud Services & DevOps',
    description: 'Scalable infrastructure, CI/CD, and reliability engineering',
    icon: Cloud,
    link: '/services/cloud-services'
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    description: 'Securing systems, data, and customer trust',
    icon: Shield,
    link: '/services/cybersecurity'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Data-driven growth marketing that compounds',
    icon: TrendingUp,
    link: '/services/digital-marketing'
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    description: 'Technology strategy and roadmap for your business',
    icon: Lightbulb,
    link: '/services/it-consulting'
  },
  {
    id: 'chatbot-conversational-ai',
    title: 'Chatbot & Conversational AI',
    description: 'Custom AI assistants for support, sales, and ops',
    icon: MessageSquare,
    link: '/services/chatbot-conversational-ai'
  },
  {
    id: 'business-problem-solving',
    title: 'Business Problem Solving',
    description: 'Decision-support systems and forecasting models',
    icon: Target,
    link: '/services/business-problem-solving',
    isFeatured: true
  }
];
