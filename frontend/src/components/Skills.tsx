"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DataService from "../services/data.service";
import { Skill } from "../types";

const Skills = () => {
    const [skills, setSkills] = useState<Skill[]>([]);

    useEffect(() => {
        DataService.getPublicSkills().then((res) => setSkills(res.data));
    }, []);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Professional Skills</h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.id}
                            variants={item}
                            className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center group"
                        >
                            <div className="mb-4 text-4xl text-gray-400 group-hover:text-blue-500 transition-colors flex justify-center">
                                {/* If using icon libraries/URLs differently, render here */}
                                {skill.icon && <i className={skill.icon}></i> /* Simple icon wrapper */}
                                {!skill.icon && <div className="w-12 h-12 bg-gray-200 rounded-full" />}
                            </div>
                            <h3 className="font-semibold text-gray-800 dark:text-gray-100">{skill.name}</h3>
                            <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-600">
                                <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: `${skill.proficiency}%` }}></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
