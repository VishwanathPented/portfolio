"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
    const skills = portfolioData.skills;

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Skills</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-semibold text-lg text-gray-800">{skill.name}</h3>
                                <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                                    {skill.category}
                                </span>
                            </div>

                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <motion.div
                                    className="bg-primary h-2.5 rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.proficiency}%` }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                ></motion.div>
                            </div>
                            <div className="mt-2 text-right text-sm text-gray-500">
                                {skill.proficiency}%
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
