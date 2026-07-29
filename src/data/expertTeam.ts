import { 
  Brain, 
  Monitor, 
  Server, 
  BarChart, 
  Cloud, 
  Shield, 
  Palette, 
  TrendingUp, 
  Lightbulb,
  type LucideIcon 
} from 'lucide-react';

export interface DomainData {
  id: string;
  icon: LucideIcon;
  title: string;
  category: string;
  description: string;
  tags: string[];
  stat: string;
}

export const filterCategories = [
  'All',
  'AI/ML',
  'Frontend',
  'Backend',
  'Data',
  'DevOps',
  'Security',
  'Design',
  'Marketing',
  'Consulting'
];

export const expertDomains: DomainData[] = [
  {
    id: 'ai-ml',
    icon: Brain,
    title: 'AI/ML Engineering',
    category: 'AI/ML',
    description: 'Building production-ready ML pipelines, LLM applications, and intelligent automation systems.',
    tags: ['PyTorch / TensorFlow', 'LangChain & RAG', 'MLOps', 'Vector DBs', 'Model Fine-Tuning'],
    stat: '15+ AI Models Deployed'
  },
  {
    id: 'frontend',
    icon: Monitor,
    title: 'Frontend Engineering',
    category: 'Frontend',
    description: 'Crafting performant, accessible interfaces with modern component architectures.',
    tags: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'WebAssembly'],
    stat: '99/100 Lighthouse Scores'
  },
  {
    id: 'backend',
    icon: Server,
    title: 'Backend Engineering',
    category: 'Backend',
    description: 'Designing scalable APIs, microservices, and data infrastructure that power applications.',
    tags: ['Node.js / Python / Go', 'REST & GraphQL', 'PostgreSQL / MongoDB', 'Redis', 'Kafka'],
    stat: '10M+ Daily API Requests'
  },
  {
    id: 'data',
    icon: BarChart,
    title: 'Data Analytics',
    category: 'Data',
    description: 'Transforming raw data into decisions through pipelines, warehouses, and dashboards.',
    tags: ['SQL / dbt', 'Apache Spark', 'Tableau / PowerBI', 'Snowflake', 'Airflow'],
    stat: '50TB+ Data Managed'
  },
  {
    id: 'devops',
    icon: Cloud,
    title: 'DevOps & Cloud',
    category: 'DevOps',
    description: 'Building reliable cloud infrastructure with automated delivery and observability.',
    tags: ['AWS / GCP / Azure', 'Kubernetes', 'Terraform', 'CI/CD Pipelines', 'Datadog'],
    stat: '99.99% Uptime SLAs'
  },
  {
    id: 'security',
    icon: Shield,
    title: 'Cybersecurity',
    category: 'Security',
    description: 'Embedding security across the SDLC — from architecture to penetration testing.',
    tags: ['Penetration Testing', 'OWASP', 'IAM & Zero Trust', 'Compliance (SOC2)', 'Threat Modeling'],
    stat: 'Zero Major Breaches'
  },
  {
    id: 'design',
    icon: Palette,
    title: 'UI/UX Design',
    category: 'Design',
    description: 'Research-driven design that turns complex workflows into intuitive experiences.',
    tags: ['Figma & Prototyping', 'User Research', 'Design Systems', 'Interaction Design', 'Usability Testing'],
    stat: '40% Avg. Conversion Lift'
  },
  {
    id: 'marketing',
    icon: TrendingUp,
    title: 'Digital Marketing',
    category: 'Marketing',
    description: 'Growth systems powered by data, content, and performance marketing.',
    tags: ['SEO & Content', 'Paid Acquisition', 'Marketing Automation', 'A/B Testing', 'Growth Hacking'],
    stat: '3x Avg. ROI on Ad Spend'
  },
  {
    id: 'consulting',
    icon: Lightbulb,
    title: 'IT Consulting & R&D',
    category: 'Consulting',
    description: 'Translating complex business challenges into technology strategies and roadmaps.',
    tags: ['Technology Strategy', 'Digital Transformation', 'Vendor Selection', 'Architecture Review', 'Proof of Concepts'],
    stat: '50+ Strategic Roadmaps'
  }
];
