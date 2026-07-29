export interface Stat {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  badge: string;
  industry: string;
  title: string;
  description: string;
  tags: string[];
  stats: Stat[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'ai-demand-forecasting',
    badge: 'Concept Project',
    industry: 'Retail & E-commerce',
    title: 'AI Demand Forecasting Dashboard',
    description: 'Built an ML-powered demand forecasting platform integrating POS, weather, and external market signals. Delivered real-time SKU-level predictions via an interactive dashboard.',
    tags: ['Python', 'XGBoost', 'Apache Airflow', 'React', 'FastAPI', 'PostgreSQL'],
    stats: [
      { value: '23%', label: 'Inventory cost reduction' },
      { value: '91%', label: 'Forecast accuracy' },
      { value: '6wk', label: 'Time to production' },
      { value: '4.1×', label: 'ROI in year one' }
    ]
  },
  {
    id: 'conversational-ai',
    badge: 'Concept Project',
    industry: 'E-commerce',
    title: 'Conversational AI Support Agent',
    description: 'Deployed an LLM-powered chatbot with RAG over the product catalog and order management system. Escalates complex issues to human agents with full context handoff.',
    tags: ['GPT-4o', 'LangChain', 'Pinecone', 'Node.js', 'React', 'AWS'],
    stats: [
      { value: '72%', label: 'Query resolution without humans' },
      { value: '< 3s', label: 'Average response time' },
      { value: '$140K', label: 'Annual support cost savings' },
      { value: '4.7★', label: 'Customer satisfaction score' }
    ]
  },
  {
    id: 'cloud-migration',
    badge: 'Concept Project',
    industry: 'Manufacturing',
    title: 'Cloud Migration & DevOps Transformation',
    description: 'Migrated 40+ services to AWS using containerized microservices architecture. Implemented CI/CD pipelines, infrastructure-as-code, and 24/7 monitoring with automated alerting.',
    tags: ['AWS EKS', 'Terraform', 'GitHub Actions', 'Datadog', 'Docker', 'Python'],
    stats: [
      { value: '99.95%', label: 'Uptime after migration' },
      { value: '8×', label: 'Faster deployment cycles' },
      { value: '38%', label: 'Infrastructure cost reduction' },
      { value: '0', label: 'Unplanned outages in 6 months' }
    ]
  }
];
