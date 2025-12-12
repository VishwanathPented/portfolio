"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const Projects = () => {
    const projects = portfolioData.projects;

    return (
        <section id="projects" className="py-32 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">Selected Works</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
                        >
                            <div className="h-60 overflow-hidden relative">
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center gap-4 backdrop-blur-sm">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform"
                                        >
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white rounded-full text-slate-900 hover:scale-110 transition-transform"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                                    {project.title}
                                    <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1 translate-x-1" />
                                </h3>
                                <p className="text-slate-400 mb-6 line-clamp-3 text-sm leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.split(',').map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-slate-800/50 border border-slate-700 text-slate-300 text-xs font-medium rounded-full"
                                        >
                                            {tech.trim()}
                                        </span>
                                    ))}
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
