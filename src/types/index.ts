export interface User {
  username: string;
  password: string;
  token: string;
}

export interface Profile {
  brand_name: string;
  name: string;
  role: string;
  role_description: string;
  self_description: string;
  image_hero: string;
  image_about: string;
  cv: string;
}

export interface Contact {
  email: string;
  phone: string;
  address: string;
  social_media: {
    label: string;
    link: string;
    icon: string;
  }[];
}

export interface Ability {
  ability_id: string;
  ability_name: string;
  icon: string;
}

export interface Abilities {
  skill_expertise: Ability[];
  language_framework: Ability[];
  tools: Ability[];
}

export interface WorkExperience {
  experience_id: string;
  company_name: string;
  position: string;
  start_date: string;
  end_date: string;
  work_type: string;
  technologies: string[];
  description: string;
}

export interface OrganizationExperience {
  organization_id: string;
  organization_name: string;
  position: string;
  start_date: string;
  end_date: string;
  description: string;
  image: string;
  "e-certificate": string;
}

export interface Education {
  education_id: string;
  institution_name: string;
  level: string;
  major: string;
  location: string;
  start_date: string;
  end_date: string;
  gpa: string;
  image: string;
  description: string;
}

export interface Project {
  project_id: string;
  project_name: string;
  description: string;
  image: string;
  url: string;
  tech_stack: string[];
  role: string;
}

export interface Certification {
  certification_id: string;
  title: string;
  issuer: string;
  date: string;
  certificate_url: string;
}

export interface Testimonial {
  testimonial_id: string;
  name: string;
  position: string;
  organization: string;
  feedback: string;
}

export interface PortfolioData {
  user: User;
  profile: Profile;
  contact: Contact;
  abilities: Abilities;
  work_experience: WorkExperience[];
  organization_experience: OrganizationExperience[];
  education: Education[];
  projects: Project[];
  certifications: Certification[];
  testimonials: Testimonial[];
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: "success" | "error";
}
