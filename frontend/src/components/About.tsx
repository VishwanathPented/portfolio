"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const About = () => {
    const profile = portfolioData.profile;

    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Me</h2>

                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="w-48 h-48 relative flex-shrink-0">
                            <img
                                src={profile.profileImage || "/placeholder-profile.png"}
                                alt={profile.fullName}
                                className="w-full h-full object-cover rounded-full shadow-lg"
                            />
                        </div>

                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{profile.fullName}</h3>
                            <p className="text-primary font-medium mb-4">{profile.tagline}</p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {profile.bio}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <p className="text-gray-600"><span className="font-semibold text-gray-900">Email:</span> {profile.email}</p>
                                    <p className="text-gray-600"><span className="font-semibold text-gray-900">Phone:</span> {profile.phone}</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-gray-600"><span className="font-semibold text-gray-900">Location:</span> {profile.address}</p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <a
                                    href={profile.resumeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
                                >
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
