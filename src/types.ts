export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  scoreLabel: string;
  scoreValue: string;
  isCurrent?: boolean;
  statusBadge?: string;
  description: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  level?: string;
  category: 'technical' | 'computer' | 'soft' | 'languages';
  tag?: string;
  iconName?: string;
  description?: string;
}

export interface SkillCategory {
  id: 'technical' | 'computer' | 'soft' | 'languages';
  title: string;
  subtitle: string;
  skills: SkillItem[];
}

export interface ServiceItem {
  id: string;
  title: string;
  scopeBadge: string;
  description: string;
  deliverables: string[];
  toolsUsed: string[];
}

export interface PublicationItem {
  id: string;
  title: string;
  type: 'Research Article' | 'Academic Insight' | 'Conference Presentation' | 'Learning Experience';
  publicationVenue?: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  tags: string[];
  linkUrl?: string;
  isExternalLink?: boolean;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  location: string;
  period: string;
  type: 'Academic & Laboratory' | 'Tutoring & Mentorship' | 'Student Leadership' | 'Target Co-op / Internship';
  isCurrent?: boolean;
  description: string;
  responsibilities: string[];
  achievements: string[];
  skillsGained: string[];
}

export interface ContactInfo {
  type: string;
  label: string;
  value: string;
  isPlaceholder: boolean;
  actionUrl?: string;
  icon: string;
}
