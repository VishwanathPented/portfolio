import api from './api';
import { Project, Skill, Experience, Education, Certificate, Service, Testimonial, Profile, Inquiry } from '../types';

// Generic CRUD helper can be made, but let's be explicit for clarity
const getPublicProjects = () => api.get<Project[]>('/public/projects');
const getPublicSkills = () => api.get<Skill[]>('/public/skills');
const getPublicExperiences = () => api.get<Experience[]>('/public/experiences');
const getPublicEducations = () => api.get<Education[]>('/public/educations');
const getPublicCertificates = () => api.get<Certificate[]>('/public/certificates');
const getPublicServices = () => api.get<Service[]>('/public/services');
const getPublicTestimonials = () => api.get<Testimonial[]>('/public/testimonials');
const getPublicProfile = () => api.get<Profile>('/public/profile');

const getAllInquiries = () => api.get<Inquiry[]>('/inquiries'); // Admin
const createInquiry = (data: Inquiry) => api.post('/public/inquiries', data);

const DataService = {
    getPublicProjects,
    getPublicSkills,
    getPublicExperiences,
    getPublicEducations,
    getPublicCertificates,
    getPublicServices,
    getPublicTestimonials,
    getPublicProfile,
    getAllInquiries,
    createInquiry,
};

export default DataService;
