export type LinkItem = {
  label: string;
  url: string;
};

export type Contact = {
  email?: string;
  phone?: string;
};

export type Highlight = {
  heading: string;
  description: string;
  link?: string;
};

export type ExperienceItem = {
  role: string;
  company: string;
  companyUrl?: string;
  period?: string;
  location?: string;
  description?: string;
  highlights?: Highlight[];
};

export type ProjectItem = {
  name: string;
  url?: string;
  context?: string;
  period?: string;
  description: string;
  tech?: string[];
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type EducationItem = {
  degree: string;
  school: string;
  period?: string;
  location?: string;
};

export type ProfileFrontMatter = {
  name?: string;
  title?: string;
  company?: string;
  location?: string;
  avatar?: string;
  resume?: string;
  contact?: Contact;
  links?: LinkItem[];
  skills?: SkillGroup[];
  experience?: ExperienceItem[];
  projects?: ProjectItem[];
  education?: EducationItem[];
};

export type ProfileData = {
  name: string;
  title: string;
  company?: string;
  location?: string;
  avatar: string;
  resume?: string;
  aboutHtml?: string;
  contact?: Contact;
  links?: LinkItem[];
  skills: SkillGroup[];
  experience: ExperienceItem[];
  projects: ProjectItem[];
  education: EducationItem[];
};
