export interface ExperienceDetailDTO {
  role: string;
  company: string;
  location: string;
  dates: string;
  points: string[];
  images?: string[];
}

export const experiences: ExperienceDetailDTO[] = [
  {
    role: 'Software Engineer (Frontend)',
    company: 'Nio Inc.',
    location: 'Beijing, China',
    dates: 'July 2024 - August 2025',
    points: [
      'Built a platform supporting the full lifecycle of autonomous driving development, enabling data collection, annotation, model training, and deployment workflows for large-scale systems.',
      'Developed an H5 web application used by 4000+ users, enabling real-time vehicle computing power sharing, reward systems, and security warnings.',
    ],
  },
  {
    role: 'Full Stack Software Developer',
    company: 'Knowlecy',
    location: 'Toronto, Canada',
    dates: 'September 2023 - July 2024',
    points: [
      'Led end-to-end development of an AI research assistant based on the ChatGPT API, designing and building the backend and frontend from scratch while contributing over 80% of the code.',
      'Optimized system architecture for performance and maintainability, supporting production-level scalability and reliability.',
      'Collaborated with stakeholders to gather requirements and deliver features aligned with business objectives.',
    ],
  },
  {
    role: 'Intern Full Stack Software Developer',
    company: 'Leadvisor',
    location: 'Hybrid',
    dates: 'December 2023 - July 2024',
    points: [
      'Developed and maintained full-stack features for the company web platform, including authentication, forum systems, and asset management modules.',
      'Improved system performance by designing optimized data structures, reducing query time complexity to O(n).',
      'Launched an autonomous legal service platform, supporting early-stage product deployment with legal professionals.',
    ],
  },
  {
    role: 'Intern Data Analyst',
    company: 'Shopee',
    location: 'Shanghai, China',
    dates: 'June 2023 - September 2023',
    points: [
      'Analyzed large-scale global datasets on Orders, Promotions, and Checkout (OPC) to identify business opportunities and guide product strategy.',
      'Detected data inconsistencies and implemented monitoring processes to reduce business risk and improve data reliability.',
      'Produced 4 in-depth analytical reports, each with 600+ lines of SQL, covering user behavior, A/B testing, and product performance.',
    ],
  },
];
