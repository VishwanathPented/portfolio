import api from './api';
import { Project, Skill, Experience, Education, Certificate, Service, Testimonial, Profile } from '../types';

// Projects
const createProject = (data: Project) => api.post<Project>('/projects', data);
const updateProject = (id: number, data: Project) => api.put<Project>(`/projects/${id}`, data);
const deleteProject = (id: number) => api.delete(`/projects/${id}`);
const getProject = (id: number) => api.get<Project>(`/public/projects/${id}`); // Reuse public endpoint or create specific admin one

// Skills
const createSkill = (data: Skill) => api.post<Skill>('/skills', data);
const updateSkill = (id: number, data: Skill) => api.put<Skill>(`/skills/${id}`, data);
const deleteSkill = (id: number) => api.delete(`/skills/${id}`);

// Profile
const updateProfile = (data: Profile) => api.post<Profile>('/profile', data); // Upsert

// ... Add others as needed

const AdminService = {
    createProject,
    updateProject,
    deleteProject,
    getProject,
    createSkill,
    updateSkill,
    deleteSkill,
    updateProfile,
};

export default AdminService;
