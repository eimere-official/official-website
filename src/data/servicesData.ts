import { 
  Code2, 
  Bot, 
  BarChart3, 
  Cloud, 
  ShieldCheck, 
  Palette, 
  TrendingUp, 
  Briefcase, 
  Workflow, 
  Wrench, 
  Rocket,
  type LucideIcon 
} from 'lucide-react';

export interface SubService {
  title: string;
  description?: string;
  isPopular?: boolean;
}

export interface ServiceCategory {
  id: string;
  title: string;
  badge?: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  color: string; // Tailwind color accent
  bgGradient: string;
  items: SubService[];
  keyBenefits: string[];
  techStack?: string[];
  isFeatured?: boolean;
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'development',
    title: 'Development',
    badge: 'Core Engine',
    tagline: 'Custom engineering built for speed, security, and scale.',
    description: 'We architect and build robust digital products from high-performing web platforms to mission-critical mobile applications and enterprise software systems.',
    icon: Code2,
    color: 'from-blue-500 to-indigo-600',
    bgGradient: 'bg-gradient-to-br from-blue-50/50 to-indigo-50/30 dark:from-blue-950/20 dark:to-indigo-950/10',
    items: [
      { title: 'Website Development', description: 'Blazing-fast, SEO-optimized corporate websites and web portals engineered to scale.' },
      { title: 'Web Application Development', description: 'Interactive web applications powered by React, Next.js, and Node.js.' },
      { title: 'Mobile App Development (Android & iOS)', description: 'Native-quality iOS and Android apps built with Flutter and React Native.' },
      { title: 'Custom Software Development', description: 'Tailor-made backend architecture and enterprise business platforms.' },
      { title: 'E-commerce Solutions', description: 'High-converting online stores built on Shopify, WooCommerce, or headless storefronts.' },
      { title: 'SaaS Product Development', description: 'End-to-end multi-tenant SaaS architecture, subscription engines, and analytics dashboards.' },
      { title: 'API Development & Integration', description: 'RESTful & GraphQL APIs with secure endpoints and third-party integrations.' }
    ],
    keyBenefits: [
      'Modular architecture ready for enterprise scaling',
      'Optimized performance (90+ Google Lighthouse performance score guaranteed)',
      'Clean, maintainable codebases with comprehensive API documentation'
    ],
    techStack: ['React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'Flutter', 'PostgreSQL']
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    badge: 'Next-Gen',
    tagline: 'Supercharge your operations with intelligent autonomous AI.',
    description: 'From custom RAG pipelines to autonomous AI agents and fine-tuned machine learning models, we implement AI that solves real operational bottlenecks.',
    icon: Bot,
    color: 'from-purple-500 to-violet-600',
    bgGradient: 'bg-gradient-to-br from-purple-50/50 to-violet-50/30 dark:from-purple-950/20 dark:to-violet-950/10',
    isFeatured: true,
    items: [
      { title: 'AI Chatbots', description: 'Conversational AI assistants integrated into web, WhatsApp, and internal systems.', isPopular: true },
      { title: 'RAG-Based Applications', description: 'Retrieval-Augmented Generation connecting LLMs to your private document vaults.' },
      { title: 'AI Agents', description: 'Autonomous agents capable of tool-use, browser navigation, and complex workflows.' },
      { title: 'Workflow Automation', description: 'AI-driven task execution to reduce manual operational workload by up to 80%.' },
      { title: 'Machine Learning Models', description: 'Custom classification, regression, and clustering models tailored to your data.' },
      { title: 'Deep Learning Models', description: 'Neural networks for advanced pattern recognition and complex predictions.' },
      { title: 'Computer Vision Solutions', description: 'Image processing, object detection, and visual inspection algorithms.' },
      { title: 'Natural Language Processing (NLP)', description: 'Text extraction, sentiment analysis, entity extraction, and automated doc parsing.' },
      { title: 'Predictive Analytics', description: 'Forecast demand, churn, and revenue with high-precision statistical models.' },
      { title: 'Recommendation Systems', description: 'Personalized content and product recommendation algorithms.' }
    ],
    keyBenefits: [
      'Custom tuned to your domain and proprietary dataset',
      'Strict enterprise data privacy and local LLM deployment support',
      'Seamless API integration into existing workflows'
    ],
    techStack: ['OpenAI API', 'LangChain', 'LlamaIndex', 'PyTorch', 'Python', 'Pinecone', 'FastAPI']
  },
  {
    id: 'data-analytics',
    title: 'Data & Analytics',
    badge: 'Intelligence',
    tagline: 'Transform raw data clutter into actionable revenue growth.',
    description: 'We construct reliable data pipelines, automated ETL workflows, and real-time interactive dashboards that empower executive decision making.',
    icon: BarChart3,
    color: 'from-amber-500 to-orange-600',
    bgGradient: 'bg-gradient-to-br from-amber-50/50 to-orange-50/30 dark:from-amber-950/20 dark:to-orange-950/10',
    items: [
      { title: 'Data Analytics', description: 'Exploratory analysis uncovering trends, anomalies, and operational insights.' },
      { title: 'Business Intelligence', description: 'Unified BI strategies enabling data-driven organizational cultures.' },
      { title: 'Interactive Dashboards', description: 'Live executive dashboards in Tableau, Power BI, or custom React interfaces.' },
      { title: 'Data Engineering', description: 'Scalable data warehouse architectures designed for high-concurrency querying.' },
      { title: 'Reporting & Visualization', description: 'Automated recurring reports delivered straight to Slack, Email, or Web.' }
    ],
    keyBenefits: [
      'Real-time streaming data ingestion',
      'Unified single-source-of-truth analytics warehouse',
      'Intuitive visual charts optimized for leadership insights'
    ],
    techStack: ['Snowflake', 'BigQuery', 'dbt', 'PowerBI', 'Tableau', 'Apache Airflow', 'Python']
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    badge: 'Infrastructure',
    tagline: 'Unshakable uptime, automated deployments, and cost efficiency.',
    description: 'We design and maintain scalable cloud infrastructure across AWS, Azure, and Google Cloud while setting up zero-downtime CI/CD automation.',
    icon: Cloud,
    color: 'from-sky-500 to-cyan-600',
    bgGradient: 'bg-gradient-to-br from-sky-50/50 to-cyan-50/30 dark:from-sky-950/20 dark:to-cyan-950/10',
    items: [
      { title: 'Cloud Migration', description: 'Seamless, zero-downtime cloud migration strategies from on-premise or cloud-to-cloud.' },
      { title: 'AWS / Azure / Google Cloud', description: 'Multi-cloud & hybrid cloud setup tailored to compliance and budget.' },
      { title: 'Infrastructure Setup', description: 'Infrastructure as Code (IaC) using Terraform for reproducible environments.' },
      { title: 'CI/CD Pipelines', description: 'Automated testing, building, and deployment pipelines (GitHub Actions, GitLab).' },
      { title: 'Docker & Kubernetes', description: 'Microservices containerization and automated cluster orchestration.' },
      { title: 'Server Management', description: '24/7 server health monitoring, patching, and OS maintenance.' },
      { title: 'Monitoring & Maintenance', description: 'Real-time alerting via Datadog, Prometheus, Grafana, and PagerDuty.' }
    ],
    keyBenefits: [
      'Up to 40% reduction in cloud infrastructure spending',
      '99.99% high availability SLA guarantee',
      'Instant rollback and automated vulnerability scanning'
    ],
    techStack: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions']
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity',
    badge: 'Protection',
    tagline: 'Protect systems, client data, and brand reputation.',
    description: 'Comprehensive security audits, vulnerability assessments, and penetration testing to safeguard your cloud infrastructure and applications.',
    icon: ShieldCheck,
    color: 'from-emerald-500 to-teal-600',
    bgGradient: 'bg-gradient-to-br from-emerald-50/50 to-teal-50/30 dark:from-emerald-950/20 dark:to-teal-950/10',
    items: [
      { title: 'Security Audits', description: 'Comprehensive code and architecture reviews to spot security vulnerabilities.' },
      { title: 'Vulnerability Assessment', description: 'Automated & manual scanning of systems for potential attack vectors.' },
      { title: 'Penetration Testing', description: 'Simulated cyberattacks testing your perimeter defenses.' },
      { title: 'Secure Application Development', description: 'OWASP-compliant secure coding standards enforced at every layer.' },
      { title: 'Compliance Support', description: 'SOC 2, ISO 27001, GDPR, and HIPAA compliance readiness.' },
      { title: 'Identity & Access Management', description: 'Zero-trust architecture, OAuth, SAML, and granular role permissions.' }
    ],
    keyBenefits: [
      'Proactive defense stopping breaches before they occur',
      'Full compliance documentation for enterprise audits',
      'Immediate patch recommendations and remediation assistance'
    ],
    techStack: ['OWASP', 'Burp Suite', 'SonarQube', 'Auth0', 'AWS IAM', 'Vault']
  },
  {
    id: 'design',
    title: 'UI/UX & Brand Design',
    badge: 'Visual Experience',
    tagline: 'Visually stunning design crafted for delight and conversions.',
    description: 'We craft human-centric UI/UX design, brand identities, design systems, and motion graphics that make your brand stand out instantly.',
    icon: Palette,
    color: 'from-pink-500 to-rose-600',
    bgGradient: 'bg-gradient-to-br from-pink-50/50 to-rose-50/30 dark:from-pink-950/20 dark:to-rose-950/10',
    items: [
      { title: 'UI/UX Design', description: 'User-centered interfaces crafted after extensive research and wireframing.' },
      { title: 'Logo Design', description: 'Memorable, modern logos that communicate your core brand ethos.' },
      { title: 'Brand Identity', description: 'Complete brand style guides including typography, color palettes, and assets.' },
      { title: 'Product Design', description: 'End-to-end design for web apps, SaaS dashboards, and mobile products.' },
      { title: 'Landing Pages', description: 'High-converting landing pages built for visual impact and speed.' },
      { title: 'Design Systems', description: 'Scalable UI kit component libraries for consistent team collaboration.' }
    ],
    keyBenefits: [
      'Research-backed user interfaces that increase conversion rates',
      'Pixel-perfect component handoffs for developers',
      'Unified brand identity across all touchpoints'
    ],
    techStack: ['Figma', 'Adobe CC', 'Lottie', 'Framermotion', 'Storybook']
  },
  {
    id: 'marketing',
    title: 'Growth & Marketing',
    badge: 'Scale',
    tagline: 'Data-driven marketing campaigns that compound revenue.',
    description: 'Accelerate acquisition and retention through SEO, performance marketing, content creation, and targeted email strategies.',
    icon: TrendingUp,
    color: 'from-emerald-500 to-green-600',
    bgGradient: 'bg-gradient-to-br from-emerald-50/50 to-green-50/30 dark:from-emerald-950/20 dark:to-green-950/10',
    items: [
      { title: 'Digital Marketing', description: 'Multi-channel digital strategies tailored to your target demographic.' },
      { title: 'Search Engine Optimization (SEO)', description: 'Technical & on-page SEO strategies to rank top on Google search results.' },
      { title: 'Social Media Marketing', description: 'Engaging content distribution and community management.' },
      { title: 'Performance Marketing', description: 'ROI-focused Google Ads, Meta Ads, and LinkedIn campaign management.' },
      { title: 'Content Marketing', description: 'Authority-building blog posts, whitepapers, and customer case studies.' },
      { title: 'Email Marketing', description: 'Automated lifecycle emails, newsletters, and drip campaigns.' },
      { title: 'Brand Growth Strategy', description: 'Comprehensive positioning and strategic market entry playbooks.' }
    ],
    keyBenefits: [
      'Measurable CAC (Customer Acquisition Cost) reduction',
      'Transparent analytics and weekly ROI reporting',
      'Long-term organic SEO value compounding over time'
    ],
    techStack: ['Google Analytics 4', 'Ahrefs', 'Semrush', 'HubSpot', 'Klaviyo', 'Meta Business']
  },
  {
    id: 'business-consulting',
    title: 'Business Consulting',
    badge: 'Strategy',
    tagline: 'Strategic leadership to navigate complex tech transitions.',
    description: 'Expert technology consulting, startup advisory, and fractional CTO leadership to align tech investments with concrete business goals.',
    icon: Briefcase,
    color: 'from-indigo-500 to-blue-600',
    bgGradient: 'bg-gradient-to-br from-indigo-50/50 to-blue-50/30 dark:from-indigo-950/20 dark:to-blue-950/10',
    items: [
      { title: 'Technology Consulting', description: 'Architecture reviews and tech stack evaluation for efficiency.' },
      { title: 'Digital Transformation', description: 'Modernizing legacy processes with cloud and digital tools.' },
      { title: 'Product Strategy', description: 'Roadmap planning, feature prioritization, and market fit validation.' },
      { title: 'Startup Consulting', description: 'Advising early-stage founders on MVP scope, pitch decks, and tech choices.' },
      { title: 'CTO as a Service', description: 'Fractional executive tech leadership without the full-time overhead.' },
      { title: 'Process Optimization', description: 'Streamlining team operational workflows to boost velocity.' }
    ],
    keyBenefits: [
      'Avoid costly architectural mistakes early on',
      'Fractional CTO guidance tailored to your growth stage',
      'Clear tech roadmaps tied to investor milestones'
    ],
    techStack: ['Agile/Scrum', 'Product Architecture', 'Jira', 'Miro', 'OKRs Framework']
  },
  {
    id: 'automation',
    title: 'Business Automation',
    badge: 'Efficiency',
    tagline: 'Eliminate repetitive manual tasks with smart automations.',
    description: 'We connect your CRM, messaging apps, email systems, and internal tools into seamless automated workflows that run 24/7.',
    icon: Workflow,
    color: 'from-amber-500 to-yellow-600',
    bgGradient: 'bg-gradient-to-br from-amber-50/50 to-yellow-50/30 dark:from-amber-950/20 dark:to-yellow-950/10',
    items: [
      { title: 'Business Process Automation', description: 'Automate multi-departmental operations and data syncing.' },
      { title: 'CRM Automation', description: 'Lead routing, deal tracking, and automated pipeline updates.' },
      { title: 'WhatsApp Automation', description: 'Automated customer support, broadcast messaging, and order alerts.' },
      { title: 'Email Automation', description: 'Smart triggers sending personalized emails based on user behavior.' },
      { title: 'AI Workflow Automation', description: 'Leverage LLMs to parse incoming lead emails, generate responses, and summarize docs.' },
      { title: 'Custom Business Automations', description: 'Bespoke webhooks and script automation connecting disparate apps.' }
    ],
    keyBenefits: [
      'Save dozens of hours of manual data entry every week',
      'Instant customer response times boosting satisfaction',
      'Zero human error in data transfers between software'
    ],
    techStack: ['Make.com', 'Zapier', 'WhatsApp Cloud API', 'Python', 'Webhooks', 'n8n']
  },
  {
    id: 'additional-services',
    title: 'Managed & Additional Services',
    badge: 'Support & Ops',
    tagline: 'Ongoing maintenance, legal partner support, and event tech.',
    description: 'Keep your digital infrastructure updated, secure, and running smooth with dedicated maintenance plans and specialized solutions.',
    icon: Wrench,
    color: 'from-slate-600 to-gray-800',
    bgGradient: 'bg-gradient-to-br from-slate-50/50 to-gray-50/30 dark:from-slate-950/20 dark:to-gray-950/10',
    items: [
      { title: 'Branding', description: 'Rebranding assets, brand collateral, and presentation decks.' },
      { title: 'Cloud Solutions', description: 'Managed cloud hosting, server optimization, and backup strategies.' },
      { title: 'Legal Assistance (through partners)', description: 'Privacy policy, Terms of Service, and software licensing partner network.' },
      { title: 'Event Technology Solutions', description: 'Interactive registration, custom event apps, and live streaming setups.' },
      { title: 'Website Maintenance', description: 'Regular security updates, bug fixes, speed tuning, and content updates.' },
      { title: 'App Maintenance', description: 'OS version compatibility updates, store updates, and performance monitoring.' },
      { title: 'Technical Support & Managed Services', description: 'Dedicated SLA support team ready to assist 24/7.' }
    ],
    keyBenefits: [
      'Peace of mind with guaranteed response time SLAs',
      'Regular security updates keeping your apps safe',
      'One single trusted technical partner for all operations'
    ]
  }
];

export const startupLaunchPack = {
  id: 'startup-launch-pack',
  title: '🚀 Startup Launch Pack',
  badge: 'All-In-One Solution',
  tagline: 'Everything you need to launch and scale your business from Day 1.',
  description: 'A comprehensive turn-key launch ecosystem tailored for founders. We handle your branding, web, mobile, marketing foundation, AI chatbot, and hosting setup in one unified execution.',
  icon: Rocket,
  deliverables: [
    'Logo & Brand Identity',
    'Business Website (High Performance)',
    'Domain & Hosting Setup',
    'Professional Email Setup',
    'Social Media Setup (Branded graphics & templates)',
    'Marketing Strategy & Positioning',
    'SEO Foundation Setup',
    'Business Profile & Company Portfolio',
    'AI Chatbot Integration',
    'Ongoing Technical Support'
  ],
  idealFor: 'Founders, early-stage startups, spin-offs, and businesses launching a new division.'
};
