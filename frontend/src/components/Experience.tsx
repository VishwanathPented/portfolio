"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DataService from "../services/data.service";
import { Experience, Education } from "../types";

const ExperienceSection = () => {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [educations, setEducations] = useState<Education[]>([]);
    const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

    useEffect(() => {
        DataService.getPublicExperiences().then((res) => setExperiences(res.data));
        DataService.getPublicEducations().then((res) => setEducations(res.data));
    }, []);

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Resume</h2>
                    <div className="flex justify-center space-x-6 mb-8">
                        <button
                            onClick={() => setActiveTab('experience')}
                            className={`text-lg font-medium pb-2 border-b-2 transition-colors ${activeTab === 'experience' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                        >
                            Experience
                        </button>
                        <button
                            onClick={() => setActiveTab('education')}
                            className={`text-lg font-medium pb-2 border-b-2 transition-colors ${activeTab === 'education' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
                        >
                            Education
                        </button>
                    </div>
                </motion.div>

                <div className="space-y-8">
                    {activeTab === 'experience' && experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row gap-6"
                        >
                            <div className="md:w-1/4">
                                <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-2">
                                    {exp.duration}
                                </span>
                                <h4 className="font-bold text-gray-800 dark:text-white">{exp.company}</h4>
                            </div>
                            <div className="md:w-3/4">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{exp.jobTitle}</h3>
                                <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}

                    {activeTab === 'education' && educations.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row gap-6"
                        >
                            <div className="md:w-1/4">
                                <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium mb-2">
                                    {edu.timePeriod}
                                </span>
                                <h4 className="font-bold text-gray-800 dark:text-white">{edu.institutionName}</h4>
                            </div>
                            <div className="md:w-3/4">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
