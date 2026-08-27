import {
  EducationItem,
  SkillCategory,
  ServiceItem,
  PublicationItem,
  ExperienceItem,
  ContactInfo
} from '../types';

export const personalData = {
  name: 'Maruf Hossain',
  title: 'B.Sc. Engg. Student in Chemical Engineering',
  department: 'Department of Applied Chemistry & Chemical Engineering',
  institution: 'University of Rajshahi',
  location: 'Rajshahi, Bangladesh',
  hometown: 'Kushtia, Bangladesh',
  shortIntro: 'Undergraduate student in Applied Chemistry & Chemical Engineering (B.Sc. Engg. in Chemical Engineering) at the University of Rajshahi with solid foundations in basic chemical laboratory techniques, qualitative analysis, process calculations, and material & energy balances.',
  bio: 'Maruf Hossain has completed his 1st year as an undergraduate engineering student at the Department of Applied Chemistry & Chemical Engineering, University of Rajshahi. Building on an outstanding academic background (GPA 5.00 in SSC and HSC), Maruf has gained practical laboratory competencies in qualitative chemical analysis and fundamental chemical engineering problem-solving.',
  academicJourney: 'Having completed the foundational 1st year of chemical engineering studies, Maruf is actively expanding his core competence in wet-bench laboratory techniques, qualitative analytical chemistry, material & energy balance formulations, and systematic engineering calculation methods.',
  currentFocusAreas: [
    'Basic Chemical Laboratory Techniques',
    'Qualitative Chemical Analysis',
    'Basic Process Calculations',
    'Material and Energy Balance Fundamentals',
    'Scientific Lab Report Writing & Data Plotting',
    'Laboratory Safety & PPE Standards'
  ]
};

export const educationList: EducationItem[] = [
  {
    id: 'bsc-chem-eng',
    degree: 'B.Sc. Engineering (B.Sc. Engg.) in Chemical Engineering',
    institution: 'Dept. of Applied Chemistry & Chemical Engineering, University of Rajshahi',
    year: 'Expected Graduation: 2029',
    scoreLabel: 'Status',
    scoreValue: 'Currently Enrolled (Undergraduate)',
    isCurrent: true,
    statusBadge: 'Primary Academic Focus',
    description: 'Pursuing foundational and core coursework in applied chemistry and chemical engineering principles, transport phenomena, thermodynamics, reaction kinetics, material balances, and standard laboratory analysis.',
    highlights: [
      'Comprehensive study of fundamental chemical engineering principles & thermodynamics',
      'Hands-on university wet-lab and volumetric analytical training in ACCE laboratories',
      'Focus on rigorous material & energy balance problem formulation',
      'Active preparation for undergraduate research & industrial training'
    ]
  },
  {
    id: 'hsc-science',
    degree: 'Higher Secondary Certificate — HSC',
    institution: 'Kushtia Government College',
    year: '2024',
    scoreLabel: 'GPA',
    scoreValue: '5.00 / 5.00',
    isCurrent: false,
    statusBadge: 'Highest Academic Distinction',
    description: 'Completed higher secondary education with a rigorous concentration in Science (Chemistry, Physics, Higher Mathematics, and Biology).',
    highlights: [
      'Achieved maximum Grade Point Average (GPA 5.00 / 5.00)',
      'Advanced secondary laboratory coursework in qualitative chemistry and physics',
      'Solidified analytical mathematics and calculus fundamentals'
    ]
  },
  {
    id: 'ssc-science',
    degree: 'Secondary School Certificate — SSC',
    institution: 'Kushtia Zilla School',
    year: '2022',
    scoreLabel: 'GPA',
    scoreValue: '5.00 / 5.00',
    isCurrent: false,
    statusBadge: 'Highest Academic Distinction',
    description: 'Graduated from one of the region’s premier historic academic institutions with an exemplary academic record in General Science.',
    highlights: [
      'Achieved perfect Grade Point Average (GPA 5.00 / 5.00)',
      'Strong academic foundation in science, mathematics, and analytical reasoning',
      'Active participation in school science exhibitions and academic contests'
    ]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'technical',
    title: 'Technical Skills',
    subtitle: '1st year chemical engineering foundations & wet-lab competencies',
    skills: [
      {
        name: 'Basic Chemical Laboratory Techniques',
        level: 'Lab Trained',
        category: 'technical',
        tag: 'Laboratory',
        description: 'Standard benchtop procedures, apparatus setup, laboratory safety protocols, reagent preparation, and precision glassware handling.'
      },
      {
        name: 'Qualitative Chemical Analysis',
        level: 'Practical',
        category: 'technical',
        tag: 'Analytical',
        description: 'Systematic identification of inorganic radicals/ions, salt analysis, flame tests, precipitate evaluations, and wet chemical tests.'
      },
      {
        name: 'Basic Process Calculations',
        level: 'Core Theory',
        category: 'technical',
        tag: 'Engineering',
        description: 'Unit conversions, stoichiometry, molar mass distributions, solution concentrations (molarity, normality, ppm), and ideal gas laws.'
      },
      {
        name: 'Material and Energy Balance Fundamentals',
        level: 'Core Theory',
        category: 'technical',
        tag: 'Engineering',
        description: 'Steady-state conservation equations, law of conservation of mass & energy, single-unit process balance formulations, and system boundaries.'
      }
    ]
  },
  {
    id: 'computer',
    title: 'Computer & Software Tools',
    subtitle: 'Essential software for lab reports, data plotting, and documentation',
    skills: [
      {
        name: 'Microsoft Excel',
        level: 'Proficient',
        category: 'computer',
        tag: 'Data Plotting',
        description: 'Tabular lab data organization, standard curve plotting, linear regression, and basic calculation formulas.'
      },
      {
        name: 'Microsoft Word',
        level: 'Proficient',
        category: 'computer',
        tag: 'Documentation',
        description: 'Lab report drafting, scientific document formatting, table structuring, and formal academic write-ups.'
      },
      {
        name: 'Microsoft PowerPoint',
        level: 'Proficient',
        category: 'computer',
        tag: 'Presentation',
        description: 'Academic presentation slide preparation, seminar visual walkthroughs, and clear scientific layout design.'
      },
      {
        name: 'Google Workspace',
        level: 'Proficient',
        category: 'computer',
        tag: 'Collaboration',
        description: 'Cloud collaboration using Google Docs, Google Sheets, Drive file management, and student group workflows.'
      }
    ]
  },
  {
    id: 'soft',
    title: 'Soft Skills & Attributes',
    subtitle: 'Interpersonal, communication, and laboratory teamwork strengths',
    skills: [
      {
        name: 'Laboratory Safety & Discipline',
        level: 'Practiced',
        category: 'soft',
        tag: 'Lab Ethics',
        description: 'Strict adherence to PPE protocols, chemical hazard awareness, waste disposal discipline, and workplace safety.'
      },
      {
        name: 'Collaborative Teamwork',
        level: 'Collaborative',
        category: 'soft',
        tag: 'Group Dynamics',
        description: 'Active collaboration in undergraduate lab groups, shared experimental execution, and peer study discussions.'
      },
      {
        name: 'Analytical Problem Solving',
        level: 'Analytical',
        category: 'soft',
        tag: 'Cognitive',
        description: 'Methodical approach to multi-step stoichiometry, process calculation homework, and error analysis in lab data.'
      },
      {
        name: 'Technical Communication',
        level: 'Developing',
        category: 'soft',
        tag: 'Communication',
        description: 'Structured scientific report writing, clear experimental observation recording, and active academic participation.'
      }
    ]
  },
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Linguistic proficiencies for academic & technical exchange',
    skills: [
      {
        name: 'Bengali',
        level: 'Native Speaker',
        category: 'languages',
        tag: 'Mother Tongue',
        description: 'Complete native fluency across oral, written, academic, and technical communication.'
      },
      {
        name: 'English',
        level: 'Working Proficiency',
        category: 'languages',
        tag: 'Academic Working',
        description: 'Capable comprehension of international engineering textbooks, scientific papers, technical reports, and academic lectures.'
      }
    ]
  }
];

export const servicesList: ServiceItem[] = [
  {
    id: 'laboratory-assistance',
    title: 'Laboratory Assistance',
    scopeBadge: 'Student-Level Laboratory Support',
    description: 'Provide assistance with basic laboratory activities, chemical analysis, titration, volumetric analysis, and related academic laboratory work within the scope of current university training.',
    deliverables: [
      'Glassware preparation and benchtop arrangement according to safety protocols',
      'Assistance in standard acid-base and redox titration runs',
      'Observation logging, qualitative reagent testing, and sample tracking',
      'Maintenance of clean, organized, and compliant lab environments'
    ],
    toolsUsed: ['Burettes & Pipettes', 'Analytical Balances', 'pH Meters', 'Standard Glassware', 'Lab Safety Protocol']
  },
  {
    id: 'technical-writing',
    title: 'Technical Writing',
    scopeBadge: 'Student-Level Documentation',
    description: 'Assist with structured technical and academic writing, documentation, laboratory reports, and technical content preparation.',
    deliverables: [
      'Comprehensive laboratory report drafting with methodology & observations',
      'Structuring background literature and theory summaries',
      'Formatting mathematical equations, diagrams, and tabular data',
      'Proofreading technical documents for clarity and scientific consistency'
    ],
    toolsUsed: ['Microsoft Word', 'Google Docs', 'Equation Editor', 'Academic Referencing', 'Excel Chart Integration']
  },
  {
    id: 'research-assistance',
    title: 'Research Assistance',
    scopeBadge: 'Student-Level Research Support',
    description: 'Provide basic research assistance involving literature-oriented work, experimental data organization, analysis, and academic research support.',
    deliverables: [
      'Preliminary scientific literature searches and cataloging academic papers',
      'Experimental data entry, spreadsheet cleaning, and tabulation',
      'Plotting experimental curves and calculating basic summary statistics',
      'Supporting faculty or senior student research teams with administrative lab tasks'
    ],
    toolsUsed: ['Google Scholar', 'Microsoft Excel', 'Data Tabulation', 'Scientific Spreadsheets', 'Google Workspace']
  }
];

export const publicationsList: PublicationItem[] = [];

export const experiencesList: ExperienceItem[] = [
  {
    id: 'exp-undergraduate-lab-training',
    organization: 'Department of Applied Chemistry & Chemical Engineering, University of Rajshahi',
    role: 'Undergraduate Student & Laboratory Trainee',
    location: 'Rajshahi, Bangladesh',
    period: '2024 – Present',
    type: 'Academic & Laboratory',
    isCurrent: true,
    description: 'Active undergraduate coursework, laboratory experimentation, and analytical chemistry practice under ACCE departmental faculty guidance.',
    responsibilities: [
      'Execute wet-bench chemical experiments including volumetric titrations, qualitative inorganic analysis, and thermodynamic measurements.',
      'Maintain rigorous laboratory notebooks documenting sample preparation, experimental protocols, observations, and raw data.',
      'Perform glassware calibration, reagent standardizations, and adhere strictly to laboratory safety and waste disposal standards.',
      'Collaborate with laboratory group partners to formulate detailed experimental reports with statistical error evaluations.'
    ],
    achievements: [
      'Maintained consistent high accuracy in unknown acid/base volumetric concentrations across course laboratory practicals.',
      'Prepared comprehensive laboratory write-ups commended for structured error analysis and clear data tables.'
    ],
    skillsGained: ['Volumetric Titration', 'Chemical Safety Protocols', 'Error Analysis', 'Technical Lab Documentation', 'Collaborative Teamwork']
  },
  {
    id: 'exp-science-peer-mentor',
    organization: 'Academic Mentorship & Peer Study Groups',
    role: 'Science & Mathematics Peer Mentor / Tutor',
    location: 'Kushtia / Rajshahi, Bangladesh',
    period: '2023 – 2024',
    type: 'Tutoring & Mentorship',
    isCurrent: false,
    description: 'Guided secondary and higher secondary science students in mastering core concepts in Chemistry, Physics, and Higher Mathematics.',
    responsibilities: [
      'Conducted interactive study sessions explaining chemical stoichiometry, atomic structure, organic reaction mechanisms, and calculus.',
      'Created structured problem sets and practice quizzes to prepare students for national board examinations (SSC & HSC).',
      'Assisted students with understanding scientific laboratory procedures, practical apparatus setups, and data tabulation.'
    ],
    achievements: [
      'Mentored multiple secondary students who achieved GPA 5.00 in their board examinations in Science.',
      'Strengthened personal mastery of foundational scientific concepts through teaching and clear pedagogical communication.'
    ],
    skillsGained: ['Pedagogical Communication', 'Concept Simplification', 'Mentorship', 'Interpersonal Skills', 'Active Listening']
  },
  {
    id: 'exp-future-industrial-coop',
    organization: 'Chemical Process Industry & Research Institutes',
    role: 'Target Industrial Trainee / Co-op Candidate',
    location: 'Bangladesh / Regional Facilities',
    period: 'Upcoming Target (2027 – 2028)',
    type: 'Target Co-op / Internship',
    isCurrent: false,
    description: 'Planned industrial training placements in chemical processing plants, fertilizer complexes, petrochemical facilities, or environmental testing laboratories.',
    responsibilities: [
      'Observe real-world plant unit operations, including continuous distillation columns, heat exchanger networks, and catalytic reactors.',
      'Assist plant chemical engineers with routine quality control sampling, process parameter monitoring, and mass balance logging.',
      'Participate in industrial occupational health, safety, and environmental (HSE) compliance audits.',
      'Draft formal industrial training reports correlating theoretical university coursework with live industrial plant equipment.'
    ],
    achievements: [
      'Actively building technical competencies in process simulation, chemical analysis, and data modeling in preparation for selection.'
    ],
    skillsGained: ['Plant Operations Awareness', 'Industrial Process Monitoring', 'HSE Compliance', 'Quality Control Analysis']
  }
];

export const DEFAULT_PROFILE_PHOTO = 'https://i.ibb.co.com/XxQDs7qP/file-000000001f60821192080fa1c1c68404.png';
export const RESUME_DRIVE_LINK = 'https://drive.google.com/file/d/1tf4Q2jj9ajfUFKNERJ0uKR1xYuqILIc0/view?usp=drivesdk';

export interface SocialLinkItem {
  id: string;
  name: string;
  url: string;
  icon: string;
  color: string;
  hoverBg: string;
  label: string;
}

export const socialLinks: SocialLinkItem[] = [
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:marufruacce@gmail.com',
    icon: 'Mail',
    color: '#EA4335',
    hoverBg: 'hover:bg-red-50 dark:hover:bg-red-950/40 hover:text-red-600 hover:border-red-300 dark:hover:border-red-800',
    label: 'marufruacce@gmail.com'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/maruf-hossain-1a45b4431',
    icon: 'Linkedin',
    color: '#0A66C2',
    hoverBg: 'hover:bg-sky-50 dark:hover:bg-sky-950/40 hover:text-[#0A66C2] hover:border-sky-300 dark:hover:border-sky-800',
    label: 'in/maruf-hossain'
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/marufruacce-web',
    icon: 'Github',
    color: '#24292F',
    hoverBg: 'hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600',
    label: 'github.com/marufruacce-web'
  },
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://www.facebook.com/share/1DNmU9cnEg/',
    icon: 'Facebook',
    color: '#1877F2',
    hoverBg: 'hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-[#1877F2] hover:border-blue-300 dark:hover:border-blue-800',
    label: 'facebook.com/maruf'
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    url: 'https://wa.me/8801924004024',
    icon: 'MessageCircle',
    color: '#25D366',
    hoverBg: 'hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-[#25D366] hover:border-emerald-300 dark:hover:border-emerald-800',
    label: '+880 1924-004024'
  },
  {
    id: 'cv',
    name: "Maruf Hossain's cv",
    url: 'https://drive.google.com/file/d/1tf4Q2jj9ajfUFKNERJ0uKR1xYuqILIc0/view?usp=drivesdk',
    icon: 'FileText',
    color: '#2563EB',
    hoverBg: 'hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 hover:border-blue-300 dark:hover:border-blue-800',
    label: "Maruf Hossain's cv"
  }
];

export const contactPlaceholders: ContactInfo[] = [
  {
    type: 'Email',
    label: 'Email Address',
    value: 'marufruacce@gmail.com',
    isPlaceholder: false,
    icon: 'Mail'
  },
  {
    type: 'LinkedIn',
    label: 'LinkedIn Profile',
    value: 'linkedin.com/in/maruf-hossain-1a45b4431',
    isPlaceholder: false,
    icon: 'Linkedin'
  },
  {
    type: 'GitHub',
    label: 'GitHub Repository',
    value: 'github.com/marufruacce-web',
    isPlaceholder: false,
    icon: 'Github'
  },
  {
    type: 'Facebook',
    label: 'Facebook Profile',
    value: 'facebook.com/share/1DNmU9cnEg/',
    isPlaceholder: false,
    icon: 'Facebook'
  },
  {
    type: 'WhatsApp',
    label: 'WhatsApp Contact',
    value: '+880 1924-004024 (Wa.me)',
    isPlaceholder: false,
    icon: 'MessageCircle'
  },
  {
    type: 'Location',
    label: 'Current Academic Base',
    value: 'Rajshahi / Kushtia, Bangladesh',
    isPlaceholder: false,
    icon: 'MapPin'
  },
  {
    type: 'Affiliation',
    label: 'University Department',
    value: 'Dept. of Applied Chemistry & Chemical Engineering, University of Rajshahi',
    isPlaceholder: false,
    icon: 'Building'
  }
];
