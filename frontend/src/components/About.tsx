"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DataService from "../services/data.service";
import { Profile } from "../types";

const About = () => {
    const [profile, setProfile] = useState<Profile | null>(null);

    useEffect(() => {
        DataService.getPublicProfile().then((res) => setProfile(res.data));
    }, []);

    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">About Me</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {profile?.profileImage && (
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex justify-center md:justify-end"
                        >
                            <img
                                src={profile.profileImage}
                                alt="About Me"
                                className="rounded-2xl shadow-2xl w-full max-w-md object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </motion.div>
                    )}

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={!profile?.profileImage ? "md:col-span-2 max-w-3xl mx-auto text-center" : ""}
                    >
                        <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
                            {profile?.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed whitespace-pre-wrap">
                            {profile?.bio}
                        </p>

                        <div className="grid grid-cols-2 gap-6 mt-8">
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <h4 className="font-bold text-xl text-blue-600 dark:text-blue-400 mb-1">5+</h4>
                                <p className="text-sm text-gray-500">Years Experience</p>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <h4 className="font-bold text-xl text-purple-600 dark:text-purple-400 mb-1">50+</h4>
                                <p className="text-sm text-gray-500">Projects Completed</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
