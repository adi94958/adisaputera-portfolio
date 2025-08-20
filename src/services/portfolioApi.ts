import apiClient from './apiClient';
import type {
  User,
  Profile,
  Contact,
  Abilities,
  WorkExperience,
  OrganizationExperience,
  Education,
  Project,
  Certification,
  Testimonial
} from '../types';

export const portfolioApi = {
  // User endpoints
  getUser: async (): Promise<User> => {
    const response = await apiClient.get<User>('/user');
    return response.data;
  },

  // Profile endpoints
  getProfile: async (): Promise<Profile> => {
    const response = await apiClient.get<Profile>('/profile');
    return response.data;
  },

  // Contact endpoints
  getContact: async (): Promise<Contact> => {
    const response = await apiClient.get<Contact>('/contact');
    return response.data;
  },

  // Abilities endpoints
  getAbilities: async (): Promise<Abilities> => {
    const response = await apiClient.get<Abilities>('/abilities');
    return response.data;
  },

  // Work Experience endpoints
  getWorkExperience: async (): Promise<WorkExperience[]> => {
    const response = await apiClient.get<WorkExperience[]>('/work_experience');
    return response.data;
  },

  // Organization Experience endpoints
  getOrganizationExperience: async (): Promise<OrganizationExperience[]> => {
    const response = await apiClient.get<OrganizationExperience[]>('/organization_experience');
    return response.data;
  },

  // Education endpoints
  getEducation: async (): Promise<Education[]> => {
    const response = await apiClient.get<Education[]>('/education');
    return response.data;
  },

  // Projects endpoints
  getProjects: async (): Promise<Project[]> => {
    const response = await apiClient.get<Project[]>('/projects');
    return response.data;
  },

  // Certifications endpoints
  getCertifications: async (): Promise<Certification[]> => {
    const response = await apiClient.get<Certification[]>('/certifications');
    return response.data;
  },

  // Testimonials endpoints
  getTestimonials: async (): Promise<Testimonial[]> => {
    const response = await apiClient.get<Testimonial[]>('/testimonials');
    return response.data;
  },
};

export default portfolioApi;
