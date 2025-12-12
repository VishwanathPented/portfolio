"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const ExperienceSection = () => {
    const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
    const experiences = portfolioData.experience;
    const education = portfolioData.education;

    return (
        <section id="experience" className="py-32 relative bg-slate-900/30">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-8">My Journey</h2>

                    <div className="inline-flex p-1 bg-slate-800 rounded-full border border-slate-700">
                        <button
                            onClick={() => setActiveTab('experience')}
                            className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'experience'
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'text-slate-400 hover:text-white'
                                }`}
                        >
                            <Briefcase size={16} /> Experience
                        </button>
                        <button
                            onClick={() => setActiveTab('education')}
                            className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === 'education'
                                    ? 'bg-primary text-white shadow-lg'
                                    : 'text-slate-400 hover:text-white'
                                }`}
                        >
                            <GraduationCap size={16} /> Education
                        </button>
                    </div>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-slate-800 md:-translate-x-1/2"></div>

                    <AnimatePresence mode="wait">
                        {activeTab === 'experience' ? (
                            <motion.div
                                key="experience"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="space-y-12"
                            >
                                {experiences.map((exp, index) => (
                                    <motion.div
                                        key={exp.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className={`flex flex-col md:flex-row gap-8 relative items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                    >
                                        <div className="w-full md:w-1/2"></div>

                                        {/* Dot */}
                                        <div className="absolute left-[11px] md:left-1/2 top-0 w-5 h-5 rounded-full bg-slate-900 border-4 border-primary z-10 md:-translate-x-1/2"></div>

                                        <div className="w-full md:w-1/2 pl-12 md:pl-0">
                                            <div className={`glass p-8 rounded-2xl border border-slate-800 hover:border-primary/30 transition-colors ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                                                    <Calendar size={12} /> {exp.duration}
                                                </span>
                                                <h3 className="text-xl font-bold text-white mb-1">{exp.jobTitle}</h3>
                                                <p className="text-secondary-foreground text-sm font-medium mb-4 text-accent">{exp.company}</p>
                                                <p className="text-slate-400 text-sm leading-relaxed">
                                                    {exp.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="education"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="space-y-12"
                            >
                                {education.map((edu, index) => (
                                    <motion.div
                                        key={edu.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className={`flex flex-col md:flex-row gap-8 relative items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                    >
                                        <div className="w-full md:w-1/2"></div>
                                        <div className="absolute left-[11px] md:left-1/2 top-0 w-5 h-5 rounded-full bg-slate-900 border-4 border-accent z-10 md:-translate-x-1/2"></div>

                                        <div className="w-full md:w-1/2 pl-12 md:pl-0">
                                            <div className={`glass p-8 rounded-2xl border border-slate-800 hover:border-accent/30 transition-colors ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold mb-3">
                                                    <Calendar size={12} /> {edu.timePeriod}
                                                </span>
                                                <h3 className="text-xl font-bold text-white mb-1">{edu.institutionName}</h3>
                                                <p className="text-secondary-foreground text-sm font-medium mb-4 text-sky-300">{edu.degree}</p>
                                                <p className="text-slate-400 text-sm leading-relaxed">
                                                    {edu.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
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
