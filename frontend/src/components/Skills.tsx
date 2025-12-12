"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Skills = () => {
    const skills = portfolioData.skills;

    // Group skills by category
    const categories = Array.from(new Set(skills.map(s => s.category)));

    return (
        <section id="skills" className="py-32 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">Technical Arsenal</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">The tools and technologies I use to bring ideas to life.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="glass p-8 rounded-2xl border border-slate-800"
                        >
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-primary"></span>
                                {category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.filter(s => s.category === category).map((skill) => (
                                    <div
                                        key={skill.id}
                                        className="px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-primary/50 transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="text-slate-300 text-sm font-medium group-hover:text-white">{skill.name}</span>
                                        <div className="w-16 h-1 bg-slate-700 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-primary"
                                                style={{ width: `${skill.proficiency}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
