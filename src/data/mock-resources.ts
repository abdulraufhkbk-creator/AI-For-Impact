export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
  is_verified: boolean;
  upvotes: number;
}

export const mockResources: Resource[] = [
  {
    id: 'res-001',
    title: 'Khan Academy',
    description: 'Free world-class education for anyone, anywhere. Courses in math, science, computing, and more.',
    url: 'https://www.khanacademy.org',
    category: 'education',
    tags: ['free', 'online-learning', 'math', 'science'],
    is_verified: true,
    upvotes: 245,
  },
  {
    id: 'res-002',
    title: 'freeCodeCamp',
    description: 'Learn to code for free. Build projects and earn certifications in web development.',
    url: 'https://www.freecodecamp.org',
    category: 'education',
    tags: ['free', 'coding', 'web-development'],
    is_verified: true,
    upvotes: 198,
  },
  {
    id: 'res-003',
    title: 'USA Jobs',
    description: 'The official job site of the United States federal government.',
    url: 'https://www.usajobs.gov',
    category: 'career',
    tags: ['jobs', 'government', 'employment'],
    is_verified: true,
    upvotes: 87,
  },
  {
    id: 'res-004',
    title: 'HRSA Health Center Finder',
    description: 'Find a health center near you that offers free or reduced-cost care.',
    url: 'https://findahealthcenter.hrsa.gov',
    category: 'health',
    tags: ['free', 'healthcare', 'clinics'],
    is_verified: true,
    upvotes: 156,
  },
  {
    id: 'res-005',
    title: 'Legal Aid Society',
    description: 'Free legal services for low-income individuals and families.',
    url: 'https://www.legalaidnyc.org',
    category: 'legal',
    tags: ['free', 'legal-aid', 'rights'],
    is_verified: true,
    upvotes: 112,
  },
  {
    id: 'res-006',
    title: '211.org — Community Resources',
    description: 'Connect with local resources for food, housing, utilities, and more.',
    url: 'https://www.211.org',
    category: 'community',
    tags: ['food', 'housing', 'utilities', 'assistance'],
    is_verified: true,
    upvotes: 203,
  },
];
