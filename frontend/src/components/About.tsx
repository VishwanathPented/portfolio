"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const About = () => {
    const profile = portfolioData.profile;

    return (
        <section id="about" className="py-32 relative bg-slate-900/50">
            <div className="container mx-auto px-6">
                <div className="relative glass p-10 md:p-16 rounded-3xl border border-slate-800">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full md:w-1/3"
                        >
                            <h2 className="text-4xl font-bold font-display text-white mb-6">
                                Defining <br />
                                <span className="text-primary">Myself.</span>
                            </h2>
                            <div className="w-20 h-1 bg-primary rounded-full mb-8"></div>

                            <div className="space-y-4">
                                <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Experience</p>
                                    <p className="text-xl font-bold text-white">4+ Years</p>
                                </div>
                                <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Projects</p>
                                    <p className="text-xl font-bold text-white">50+ Completed</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="w-full md:w-2/3"
                        >
                            <p className="text-lg text-slate-300 leading-relaxed mb-8">
                                {profile.bio}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-slate-400">
                                <div className="space-y-4 border-l-2 border-slate-800 pl-6">
                                    <div>
                                        <p className="text-sm font-semibold text-white mb-1">Email</p>
                                        <p>{profile.email}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-white mb-1">Phone</p>
                                        <p>{profile.phone}</p>
                                    </div>
                                </div>
                                <div className="space-y-4 border-l-2 border-slate-800 pl-6">
                                    <div>
                                        <p className="text-sm font-semibold text-white mb-1">Location</p>
                                        <p>{profile.address}</p>
                                    </div>
                                    <div>
                                        <a href={profile.resumeUrl} className="text-accent hover:underline">Download Resume &rarr;</a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
