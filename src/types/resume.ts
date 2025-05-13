
export interface PersonalInfo {
  firstName: string;
  lastName: string;
  jobTitle: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  linkedin: string;
  website: string;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa: string;
}

export interface Template {
  id: string;
  name: string;
  color: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: string[];
  sectionOrder: string[];
}
