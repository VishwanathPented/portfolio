export interface User {
  id: number;
  username: string;
  roles: string[];
  token?: string;
}

export interface Project {
  id?: number;
  title: string;
  description: string;
  thumbnail: string;
  technologies: string;
  liveUrl: string;
  githubUrl: string;
  galleryImages?: string[];
}

export interface Skill {
  id?: number;
  name: string;
  category: string;
  icon: string;
  proficiency: number;
}

export interface Experience {
  id?: number;
  jobTitle: string;
  company: string;
  duration: string;
  description: string;
  companyLogo: string;
}

export interface Education {
  id?: number;
  institutionName: string;
  degree: string;
  timePeriod: string;
  description: string;
  institutionLogo: string;
}

export interface Certificate {
  id?: number;
  title: string;
  issuingOrganization: string;
  dateIssued: string;
  certificateImage: string;
  certificateUrl: string;
  description: string;
}

export interface Service {
  id?: number;
  title: string;
  icon: string;
  description: string;
}

export interface Testimonial {
  id?: number;
  clientName: string;
  designation: string;
  company: string;
  profilePicture: string;
  reviewText: string;
  rating: number;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Profile {
  id?: number;
  fullName: string;
  tagline: string;
  title: string;
  bio: string;
  profileImage: string;
  resumeUrl: string;
  email: string;
  phone: string;
  address: string;
  linkedinUrl?: string; // Keeping for backward compat if needed, but SocialLink is preferred
  facebookUrl?: string;
  instagramUrl?: string;
  twitterUrl?: string;
  githubUrl?: string;
  socialLinks?: SocialLink[];
}

export interface Inquiry {
  id?: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt?: string;
  read?: boolean;
}
