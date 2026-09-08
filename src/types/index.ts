export interface Project {
  slug: string;
  title: string;
  tagline: string;
  tech: string[];
  description: string;
  highlightMetric?: string;
  problem: string;
  solution: string;
  architectureDetails: string[];
  technicalHighlights: {
    title: string;
    description: string;
  }[];
  codeSnippet?: {
    language: string;
    filename: string;
    code: string;
  };
  results: string[];
  futureConsiderations?: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  techStack: string[];
}

export interface SkillCategory {
  title: string;
  categoryTag: string;
  description: string;
  skills: string[];
  icon: string;
}

export interface PublicationItem {
  title: string;
  conferenceOrJournal: string;
  year: string;
  authors: string;
  abstract: string;
  topics: string[];
  url?: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  gpa: string;
  location: string;
  coursework?: string[];
}

export interface ProfileData {
  name: string;
  role: string;
  domain: string;
  location: string;
  heroHeadline: string;
  heroSecondary: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
}
