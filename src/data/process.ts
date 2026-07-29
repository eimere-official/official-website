export interface ProcessStepData {
  id: string;
  number: string;
  title: string;
  description: string;
  active?: boolean;
}

export const processSteps: ProcessStepData[] = [
  {
    id: 'discover',
    number: '01',
    title: 'Discover',
    description: 'Deep-dive into your business, industry context, and technical landscape.'
  },
  {
    id: 'strategize',
    number: '02',
    title: 'Strategize',
    description: 'Define the solution roadmap, architecture, and success metrics.'
  },
  {
    id: 'design',
    number: '03',
    title: 'Design',
    description: 'UI/UX research, wireframing, and prototyping to validate before building.'
  },
  {
    id: 'build',
    number: '04',
    title: 'Build',
    description: 'Full-stack development with AI, data, and cloud components integrated.',
    active: true
  },
  {
    id: 'secure-deploy',
    number: '05',
    title: 'Secure & Deploy',
    description: 'Security review, DevOps pipeline setup, and production deployment.'
  },
  {
    id: 'launch-market',
    number: '06',
    title: 'Launch & Market',
    description: 'Go-live support and data-driven growth marketing.'
  },
  {
    id: 'scale',
    number: '07',
    title: 'Scale',
    description: 'Continuous improvement, monitoring, and feature evolution.'
  }
];
