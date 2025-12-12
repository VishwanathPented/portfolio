"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
    const profile = portfolioData.profile;

    const socialIcons = {
        GitHub: Github,
        LinkedIn: Linkedin,
        Twitter: Twitter
    };

    return (
        <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20 animate-pulse delay-1000"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block py-1 px-3 rounded-full bg-slate-800/50 border border-slate-700 text-accent font-medium text-sm mb-6"
                        >
                            Currently available for work
                        </motion.span>

                        <h1 className="text-5xl md:text-7xl font-bold font-display text-white mb-6 leading-tight">
                            Building <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                                Digital Magic
                            </span>
                        </h1>

                        <p className="text-lg text-slate-400 max-w-lg mb-10 leading-relaxed">
                            {profile.bio}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <a
                                href="#projects"
                                className="px-8 py-3.5 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 flex items-center gap-2 group"
                            >
                                View My Work
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-3.5 bg-transparent text-white border border-slate-700 font-medium rounded-full hover:bg-slate-800 transition-all"
                            >
                                Contact Me
                            </a>
                        </div>

                        <div className="mt-12 flex items-center gap-6">
                            {profile.socialLinks?.map((link, i) => {
                                // @ts-ignore
                                const Icon = socialIcons[link.platform] || Github;
                                return (
                                    <a
                                        key={i}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-slate-400 hover:text-white transition-colors transform hover:scale-110 duration-200"
                                    >
                                        <Icon size={24} />
                                    </a>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-[500px] h-[600px] mx-auto">
                            {/* Abstract Image container with glitch/overlay effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-20 rounded-2xl rotate-3"></div>
                            <img
                                src={profile.profileImage}
                                alt={profile.fullName}
                                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl border border-slate-700/50 grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
