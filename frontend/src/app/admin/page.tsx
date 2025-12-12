"use client";

import React, { useEffect, useState } from "react";
import DataService from "@/services/data.service";
import { Folder, User, Mail, Award } from "lucide-react";

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        projects: 0,
        skills: 0,
        messages: 0,
    });

    useEffect(() => {
        // Ideally create a dashboard stats endpoint, but we can fetch list lengths for now
        Promise.all([
            DataService.getPublicProjects(),
            DataService.getPublicSkills(),
            DataService.getAllInquiries().catch(() => ({ data: [] })) // Handle error if not admin
        ]).then(([projectsRes, skillsRes, messagesRes]) => {
            setStats({
                projects: projectsRes.data.length,
                skills: skillsRes.data.length,
                messages: messagesRes.data.length,
            });
        });
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Dashboard Overview</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex items-center space-x-4">
                    <div className="p-4 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                        <Folder className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Total Projects</p>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stats.projects}</h3>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex items-center space-x-4">
                    <div className="p-4 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                        <Award className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Total Skills</p>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stats.skills}</h3>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 flex items-center space-x-4">
                    <div className="p-4 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                        <Mail className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Messages</p>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stats.messages}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
