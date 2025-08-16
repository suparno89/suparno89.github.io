export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  description: string[];
  category: 'current' | 'senior' | 'research' | 'previous';
  color: string;
  icon: string;
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  institution: string;
  period: string;
  grade: string;
  thesis?: string;
  focus?: string;
  color: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  category: 'healthcare' | 'ml' | 'systems';
  award?: string;
  color: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: number;
  description: string;
  icon: string;
  color: string;
}

export interface Skill {
  name: string;
  category: 'ai-ml' | 'cloud' | 'programming';
}

export interface Language {
  name: string;
  level: string;
  proficiency: string;
  icon: string;
  color: string;
}

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Manager Data Science',
    company: 'AstraZeneca',
    location: 'Hamburg, Germany',
    period: 'September 2025 - Future',
    current: false,
    description: [
      'Will lead data science initiatives developing AI/ML solutions for pharmaceutical research and drug discovery',
      'Expected to drive strategic partnerships between data science and other units to accelerate therapeutic innovation'
    ],
    category: 'current',
    color: 'bg-accent',
    icon: 'fas fa-calendar-alt'
  },
  {
    id: '2',
    title: 'Tech Lead Data Science',
    company: 'Fresenius Medical Care',
    location: 'Berlin, Germany',
    period: 'March 2024 - July 2025',
    current: true,
    description: [
      'Leading cross-functional team developing optimization-based hemoglobin management solution',
      'Architecting Azure platform solutions for FDA submission readiness',
      'Implementing predictive models for patient outcomes and hospital readmission reduction',
      'Providing mentorship and technical guidance to junior team members'
    ],
    category: 'senior',
    color: 'bg-primary',
    icon: 'fas fa-briefcase'
  },
  {
    id: '2',
    title: 'Senior Data and Applied Scientist',
    company: 'Microsoft',
    location: 'Berlin, Germany',
    period: 'June 2021 - February 2024',
    current: false,
    description: [
      'Engineered and deployed LLM-based applications for business and research needs',
      'Implemented RAG techniques for context-aware systems',
      'Designed solutions for querying structured data using LLMs',
      'Won RISE award 2023 for outstanding team accomplishment'
    ],
    category: 'senior',
    color: 'bg-secondary',
    icon: 'fas fa-code'
  },
  {
    id: '3',
    title: 'Research Assistant, PhD Candidate',
    company: 'Hasso Plattner Institute',
    location: 'Potsdam, Germany',
    period: 'May 2018 - May 2021',
    current: false,
    description: [
      'Combined EHR, wearable sensor data, and genomic data for patient outcome prediction',
      'Developed CNNs for continuous blood pressure prediction from PPG signals',
      'Supervised master thesis students and research projects',
      'Delivered lectures on machine learning and deep learning topics'
    ],
    category: 'research',
    color: 'bg-purple-600',
    icon: 'fas fa-graduation-cap'
  },
  {
    id: '4',
    title: 'Data Scientist',
    company: 'Scout24',
    location: 'Munich, Germany',
    period: 'December 2017 - May 2018',
    current: false,
    description: [
      'Developed price prediction models for used cars',
      'Built automatic email classification system using word2vec'
    ],
    category: 'previous',
    color: 'bg-muted',
    icon: 'fas fa-car'
  },
  {
    id: '5',
    title: 'Data Scientist',
    company: 'ZeroG GmbH (Lufthansa Systems)',
    location: 'Frankfurt, Germany',
    period: 'May 2016 - November 2017',
    current: false,
    description: [
      'Designed ML models for customer affinity prediction',
      'Implemented collaborative filtering for destination recommendation',
      'Developed statistical tests for campaign success measurement'
    ],
    category: 'previous',
    color: 'bg-muted',
    icon: 'fas fa-plane'
  },
  {
    id: '6',
    title: 'Data Scientist',
    company: 'TeamViewer GmbH',
    location: 'Göppingen, Germany',
    period: 'June 2015 - April 2016',
    current: false,
    description: [
      'Time series modeling for revenue prediction',
      'Customer cohort analysis and churn rate prediction',
      'Developed scalable data processing methods'
    ],
    category: 'previous',
    color: 'bg-muted',
    icon: 'fas fa-desktop'
  }
];

export const education: Education[] = [
  {
    id: '1',
    degree: 'Dr. rer. nat.',
    field: 'Computer Science',
    institution: 'Hasso Plattner Institute, University of Potsdam',
    period: '2018-2024',
    grade: 'Magna Cum Laude',
    thesis: 'Machine Learning for Early Detection, Management and Prognosis of Hypertension',
    color: 'primary'
  },
  {
    id: '2',
    degree: 'MSc',
    field: 'Media Informatics',
    institution: 'RWTH Aachen',
    period: '2012-2015',
    grade: '1.5',
    focus: 'Machine Learning, Data Mining, Pattern Recognition',
    color: 'secondary'
  },
  {
    id: '3',
    degree: 'B.Tech',
    field: 'Computer Science & Engineering',
    institution: 'Heritage Institute of Technology',
    period: '2007-2011',
    grade: '8.2/10',
    focus: 'Data Structures, Algorithms, DBMS',
    color: 'accent'
  }
];

export const publications: Publication[] = [
  {
    id: '1',
    title: 'Predicting hypertension onset from longitudinal electronic health records with deep learning',
    authors: 'Datta S, Morassi Sasso A, Kiwit N, Bose S, Nadkarni G, Miotto R, Böttinger EP',
    venue: 'JAMIA Open, 2022',
    year: 2022,
    category: 'healthcare', 'ml',
    color: 'primary'
  },
  {
    id: '2',
    title: 'Unsupervised Learning to Subphenotype Heart Failure Patients from Electronic Health Records',
    authors: 'Hackl M, Datta S, Bottinger E',
    venue: 'AIME 2021',
    year: 2021,
    category: 'healthcare', 'ml',
    color: 'secondary'
  },
  {
    id: '3',
    title: 'FIBER: enabling flexible retrieval of electronic health records data for clinical predictive modeling',
    authors: 'Datta S, Sachs JP, Cruz HF, Martensen T, Bode P, Sasso AM, Glicksberg BS, Böttinger E',
    venue: 'JAMIA Open, 2021',
    year: 2021,
    category: 'healthcare', 'systems',
    color: 'accent'
  },
  {
    id: '4',
    title: 'HYPE: Predicting Blood Pressure from Photoplethysmograms in a Hypertensive Population',
    authors: 'Sasso AM, Datta S, Jeitler M, Steckhan N, Kessler CS, Michalsen A, Arnrich B, Boettinger E',
    venue: 'AIME 2020',
    year: 2020,
    category: 'healthcare', 'ml',
    award: 'Best Paper Award',
    color: 'purple'
  },
  {
    id: '5',
    title: 'A Machine Learning Approach for Non-Invasive Diagnosis of Metabolic Syndrome',
    authors: 'Datta S, Schraplau A, Da Cruz HF, Sachs JP, Mayer F, Böttinger E',
    venue: 'IEEE BIBE 2019',
    year: 2019,
    category: 'healthcare', 'ml',
    color: 'primary'
  },
  {
    id: '6',
    title: 'Circle formation by asynchronous transparent fat robots',
    authors: 'Datta S, Dutta A, Chaudhuri SG, Mukhopadhyaya K',
    venue: 'ICDCIT 2013',
    year: 2013,
    category: 'systems',
    color: 'accent'
  }
];

export const awards: Award[] = [
  {
    id: '1',
    title: 'Best Student Paper Award',
    organization: 'Artificial Intelligence in Medicine (AIME) 2020',
    year: 2020,
    description: 'Recognized for outstanding research contribution in predicting blood pressure from photoplethysmograms.',
    icon: 'fas fa-trophy',
    color: 'yellow-400'
  },
  {
    id: '2',
    title: 'Microsoft RISE Award',
    organization: 'Microsoft Corporation',
    year: 2023,
    description: 'Outstanding team accomplishment and cross-team collaboration in developing innovative AI solutions.',
    icon: 'fas fa-award',
    color: 'primary'
  },
  {
    id: '3',
    title: 'Most Innovative Student Project',
    organization: 'Indian National Academy of Engineering (INAE)',
    year: 2011,
    description: 'Bachelor\'s project "Circle Formation by Asynchronous Transparent Fat Robots" recognized as the most innovative student project at the bachelor\'s level.',
    icon: 'fas fa-lightbulb',
    color: 'accent'
  }
];

export const skills: Record<string, Skill[]> = {
  'ai-ml': [
    { name: 'Machine Learning', category: 'ai-ml' },
    { name: 'Deep Learning', category: 'ai-ml' },
    { name: 'LLMs', category: 'ai-ml' },
    { name: 'RAG', category: 'ai-ml' },
    { name: 'CNNs', category: 'ai-ml' },
    { name: 'LSTMs', category: 'ai-ml' },
    { name: 'XGBoost', category: 'ai-ml' },
    { name: 'LightGBM', category: 'ai-ml' }
  ],
  'cloud': [
    { name: 'Azure ML', category: 'cloud' },
    { name: 'Azure DevOps', category: 'cloud' },
    { name: 'Docker', category: 'cloud' },
    { name: 'Hadoop', category: 'cloud' },
    { name: 'Spark', category: 'cloud' },
    { name: 'SAP HANA', category: 'cloud' }
  ],
  'programming': [
    { name: 'Python', category: 'programming' },
    { name: 'R', category: 'programming' },
    { name: 'SQL', category: 'programming' },
    { name: 'PyTorch', category: 'programming' },
    { name: 'Keras', category: 'programming' },
    { name: 'LangChain', category: 'programming' },
    { name: 'Tableau', category: 'programming' },
    { name: 'Java', category: 'programming' }
  ]
};

export const languages: Language[] = [
  {
    name: 'Bengali',
    level: 'Native Speaker',
    proficiency: 'Mother Tongue',
    icon: 'fas fa-home',
    color: 'orange-500'
  },
  {
    name: 'English',
    level: 'C2 - Proficient',
    proficiency: 'Professional Working',
    icon: 'fas fa-globe',
    color: 'primary'
  },
  {
    name: 'German',
    level: 'B2 - Independent',
    proficiency: 'Professional Working',
    icon: 'fas fa-flag',
    color: 'secondary'
  }
];

export const personalInfo = {
  name: 'Suparno Datta, PhD',
  title: 'Manager Data Science | AI/ML Expert | PhD in Computer Science',
  email: 'suparno.datta@gmail.com',
  phone: '(+49) 17632433883',
  location: 'Berlin, Germany',
  address: 'Pasewalker Straße 72, 13127, Berlin, Germany',
  linkedIn: 'https://linkedin.com/in/suparno-datta-70573a2a',
  googleScholar: 'https://scholar.google.de/citations?hl=en&user=v6xGwm8AAAAJ',
  github: 'https://github.com/suparno89',
  dateOfBirth: '12/12/1989',
  nationality: 'German',
  summary: 'Tech Lead Data Science at Fresenius Medical Care with a PhD in Computer Science and 8+ years of experience applying AI/ML in healthcare, technology, and automotive domains. Starting September 2025, I will join AstraZeneca as Manager Data Science in Hamburg. I have led cross-functional teams to design and deploy predictive models, optimization algorithms, and LLM-based solutions, focusing on improving patient outcomes and enabling data-driven decision making. My background includes developing FDA-ready AI systems and building scalable ML applications at Microsoft. I combine hands-on technical expertise with strong leadership, taking ideas from proof-of-concept to practical, scalable solutions that deliver real-world impact and business ROI.'
};
