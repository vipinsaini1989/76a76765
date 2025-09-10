export type LinkItem = {
  label: string;
  url: string;
};

export type Contact = {
  email?: string;
  phone?: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  companyUrl: string;
  period?: string;
  location?: string;
  description?: string;
  highlights?: { heading: string; description: string; link: string }[];
};

export type EducationItem = {
  degree: string;
  school: string;
  period?: string;
  location?: string;
};

export type ProfileData = {
  name: string;
  title: string;
  company?: string;
  location?: string;
  avatar: string;
  aboutHtml?: string;
  contact?: Contact;
  links?: LinkItem[];
  skills: string[];
  experience: ExperienceItem[];
  education: EducationItem[];
};
