"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Hero = () => {
    const profile = portfolioData.profile;

    return (
        <section className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                        {profile.title}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
                        Hi, I'm <span className="text-primary">{profile.fullName}</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                        {profile.bio.substring(0, 150)}...
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25"
                        >
                            View Work
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-3 bg-white text-gray-900 border border-gray-200 font-medium rounded-lg hover:bg-gray-50 transition-all"
                        >
                            Contact Me
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
