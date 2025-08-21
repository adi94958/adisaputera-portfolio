import apiClient from './apiClient';
import { API_ENDPOINTS } from '../constants';
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
    const response = await apiClient.get<User>(API_ENDPOINTS.USER);
    return response.data;
  },

  // Profile endpoints
  getProfile: async (): Promise<Profile> => {
    const response = await apiClient.get<Profile>(API_ENDPOINTS.PROFILE);
    return response.data;
  },

  // Contact endpoints
  getContact: async (): Promise<Contact> => {
    const response = await apiClient.get<Contact>(API_ENDPOINTS.CONTACT);
    return response.data;
  },

  // Abilities endpoints
  getAbilities: async (): Promise<Abilities> => {
    const response = await apiClient.get<Abilities>(API_ENDPOINTS.ABILITIES);
    return response.data;
  },

  // Work Experience endpoints
  getWorkExperience: async (): Promise<WorkExperience[]> => {
    const response = await apiClient.get<WorkExperience[]>(API_ENDPOINTS.WORK_EXPERIENCE);
    return response.data;
  },

  // Organization Experience endpoints
  getOrganizationExperience: async (): Promise<OrganizationExperience[]> => {
    const response = await apiClient.get<OrganizationExperience[]>(API_ENDPOINTS.ORGANIZATION_EXPERIENCE);
    return response.data;
  },

  // Education endpoints
  getEducation: async (): Promise<Education[]> => {
    const response = await apiClient.get<Education[]>(API_ENDPOINTS.EDUCATION);
    return response.data;
  },

  // Projects endpoints
  getProjects: async (): Promise<Project[]> => {
    const response = await apiClient.get<Project[]>(API_ENDPOINTS.PROJECTS);
    return response.data;
  },

  // Certifications endpoints
  getCertifications: async (): Promise<Certification[]> => {
    const response = await apiClient.get<Certification[]>(API_ENDPOINTS.CERTIFICATIONS);
    return response.data;
  },

  // Testimonials endpoints
  getTestimonials: async (): Promise<Testimonial[]> => {
    const response = await apiClient.get<Testimonial[]>(API_ENDPOINTS.TESTIMONIALS);
    return response.data;
  },
};

export default portfolioApi;
