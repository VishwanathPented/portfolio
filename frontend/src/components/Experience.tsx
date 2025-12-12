"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const ExperienceSection = () => {
    const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

    // Use static data
    const experiences = portfolioData.experience;
    const education = portfolioData.education;

    return (
        <section id="experience" className="py-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="flex justify-center mb-12">
                    <div className="bg-gray-100 p-1 rounded-full inline-flex">
                        <button
                            onClick={() => setActiveTab('experience')}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'experience'
                                    ? 'bg-white text-primary shadow-sm'
                                    : 'text-gray-500 hover:text-gray-900'
                                }`}
                        >
                            Experience
                        </button>
                        <button
                            onClick={() => setActiveTab('education')}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'education'
                                    ? 'bg-white text-primary shadow-sm'
                                    : 'text-gray-500 hover:text-gray-900'
                                }`}
                        >
                            Education
                        </button>
                    </div>
                </div>

                <div className="relative min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {activeTab === 'experience' ? (
                            <motion.div
                                key="experience"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-8"
                            >
                                {experiences.map((exp) => (
                                    <div key={exp.id} className="relative pl-8 border-l-2 border-gray-200">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm"></div>
                                        <div className="mb-1 flex items-center justify-between">
                                            <h3 className="text-xl font-bold text-gray-900">{exp.jobTitle}</h3>
                                            <span className="text-sm text-gray-500 font-mono bg-gray-50 px-2 py-1 rounded">{exp.duration}</span>
                                        </div>
                                        <p className="text-primary font-medium mb-3">{exp.company}</p>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            {exp.description}
                                        </p>
                                    </div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="education"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-8"
                            >
                                {education.map((edu) => (
                                    <div key={edu.id} className="relative pl-8 border-l-2 border-gray-200">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm"></div>
                                        <div className="mb-1 flex items-center justify-between">
                                            <h3 className="text-xl font-bold text-gray-900">{edu.institutionName}</h3>
                                            <span className="text-sm text-gray-500 font-mono bg-gray-50 px-2 py-1 rounded">{edu.timePeriod}</span>
                                        </div>
                                        <p className="text-primary font-medium mb-3">{edu.degree}</p>
                                        <p className="text-gray-600 leading-relaxed text-sm">
                                            {edu.description}
                                        </p>
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
