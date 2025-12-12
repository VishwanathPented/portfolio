"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = portfolioData.projects;

    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="h-48 overflow-hidden bg-gray-200 relative">
                                {project.thumbnail ? (
                                    <img
                                        src={project.thumbnail}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                ) : (
                                    <div className="flex items-center justify-center h-full text-gray-400">
                                        No Image
                                    </div>
                                )}
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4 line-clamp-3 text-sm">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.split(',').map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md"
                                        >
                                            {tech.trim()}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors text-sm font-medium"
                                        >
                                            <Github size={18} /> Code
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors text-sm font-medium"
                                        >
                                            <ExternalLink size={18} /> Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
