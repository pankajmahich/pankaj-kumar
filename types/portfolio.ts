export interface SettingsConfig {
  enableCommandPalette?: boolean;
  enableTestimonials?: boolean;
  enableServices?: boolean;
  enableStats?: boolean;
  enableExperience?: boolean;
  enable3DHero?: boolean;
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  shortBio: string;
  email: string;
  phone?: string;
  location: string;
  availability: {
    status: string;
    isAvailable: boolean;
  };
  resumeUrl: string;
  profileImage: string;
  avatarFallback: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  portfolio?: string;
  discord?: string;
  youtube?: string;
  [key: string]: string | undefined;
}

export interface HeroData {
  badge: string;
  greeting: string;
  headlinePrefix?: string;
  headlineHighlight: string;
  headlineSuffix?: string;
  description: string;
  primaryCta: {
    text: string;
    href: string;
  };
  secondaryCta: {
    text: string;
    href: string;
  };
}

export interface AboutHighlight {
  label: string;
  value: string;
}

export interface AboutData {
  title: string;
  subtitle: string;
  paragraphs: string[];
  highlights: AboutHighlight[];
}

export interface StatItem {
  label: string;
  value: string;
}

export interface SkillItem {
  name: string;
  level: "Beginner" | "Intermediate" | "Proficient" | "Expert";
  icon: string;
}

export interface SkillsData {
  [category: string]: SkillItem[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  companyUrl?: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  featured: boolean;
  description: string;
  problemSolved?: string;
  image?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  avatar?: string;
  content: string;
  rating?: number;
}

export interface ContactData {
  title: string;
  subtitle: string;
  formLabels: {
    name: string;
    email: string;
    subject?: string;
    message: string;
    submitButton: string;
    sendingButton: string;
    successMessage: string;
    errorMessage: string;
  };
}

export interface PortfolioData {
  settings: SettingsConfig;
  personal: PersonalInfo;
  socialLinks: SocialLinks;
  hero: HeroData;
  about: AboutData;
  stats?: StatItem[];
  skills: SkillsData;
  experience?: ExperienceItem[];
  services?: ServiceItem[];
  projects: ProjectItem[];
  testimonials?: TestimonialItem[];
  contact: ContactData;
}
