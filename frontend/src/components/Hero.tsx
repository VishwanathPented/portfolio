"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DataService from "../services/data.service";
import { Profile } from "../types";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";

const Hero = () => {
    const [profile, setProfile] = useState<Profile | null>(null);

    useEffect(() => {
        DataService.getPublicProfile()
            .then((response) => {
                setProfile(response.data);
            })
            .catch((error) => {
                console.error("Error fetching profile:", error);
            });
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950 overflow-hidden pt-16">
            {/* Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-400/20 blur-3xl" />
                <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-purple-400/20 blur-3xl" />
            </div>

            <div className="container mx-auto px-4 z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    className="text-left"
                >
                    <motion.h2 variants={fadeInUp} className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-2">
                        {profile?.tagline || "Hello, I'm"}
                    </motion.h2>
                    <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                        {profile?.fullName || "Your Name"}
                    </motion.h1>
                    <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
                        {profile?.title || "Full Stack Developer"}
                    </motion.h3>
                    <motion.p variants={fadeInUp} className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
                        {profile?.bio?.slice(0, 150) + "..." || "Building digital experiences that matter."}
                    </motion.p>

                    <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                        <Link href="#contact" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-blue-500/30 flex items-center gap-2">
                            Hire Me <ArrowRight className="w-4 h-4" />
                        </Link>
                        {profile?.resumeUrl && (
                            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all flex items-center gap-2">
                                Download CV <Download className="w-4 h-4" />
                            </a>
                        )}
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl animate-pulse" />
                        <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                            {/* Placeholder Image or Profile Image */}
                            <img
                                src={profile?.profileImage || "https://dummyimage.com/600x600/cccccc/000000&text=Profile"}
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
