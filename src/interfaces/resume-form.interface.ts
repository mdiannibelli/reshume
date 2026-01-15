import type { LanguageLevel } from "@/types";
import type { TemplateStyles, DecoratorType } from "@/interfaces";

export interface PersonalInfo {
  name: string;
  lastName: string;
  professionalTitle: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  website?: string;
  linkedin?: string;
  github?: string;
  behance?: string;
  professionalSummary: string;
}

export interface Education {
  id: string;
  institution: string;
  title: string;
  startDate: string;
  endDate?: string;
  inProgress: boolean;
  description?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  inProgress: boolean;
  description?: string;
  achievements?: string[];
}

export interface Skill {
  id: string;
  name: string;
}

export interface Language {
  name: string;
  level: LanguageLevel;
}

export interface SelectedTemplate {
  id: string;
  name: string;
  description: string;
  styles: TemplateStyles;
  decorator?: DecoratorType;
  tag?: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  languages: Language[];
  selectedCvLanguage: string;
  template: SelectedTemplate;
  wantIcons?: boolean;
  clearFieldsAfterGeneration?: boolean;
}
