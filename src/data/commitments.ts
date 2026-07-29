export interface Commitment {
  id: string;
  title: string;
  description: string;
}

export const commitments: Commitment[] = [
  {
    id: 'transparent-communication',
    title: 'Transparent Communication',
    description: 'Weekly progress updates, shared dashboards, and no surprises — ever.'
  },
  {
    id: 'outcome-focused',
    title: 'Outcome-Focused Delivery',
    description: 'We measure success by your business results, not lines of code written.'
  },
  {
    id: 'security-privacy',
    title: 'Security & Privacy by Default',
    description: 'Every system we build is designed with data protection as a non-negotiable.'
  },
  {
    id: 'long-term-partnership',
    title: 'Long-Term Partnership',
    description: 'We don\'t disappear after launch — we\'re invested in your growth.'
  }
];
