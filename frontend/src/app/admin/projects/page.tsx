"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import DataService from "@/services/data.service";
import AdminService from "@/services/admin.service";
import { Project } from "@/types";
import { Plus, Edit, Trash2 } from "lucide-react";

export default function AdminProjects() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = () => {
        DataService.getPublicProjects().then((res) => setProjects(res.data));
    };

    const handleDelete = async (id: number) => {
        if (confirm("Are you sure you want to delete this project?")) {
            await AdminService.deleteProject(id);
            fetchProjects();
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Manage Projects</h2>
                <Link
                    href="/admin/projects/create"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                    <Plus className="w-5 h-5" />
                    Add Project
                </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-gray-600 dark:text-gray-300">
                        <thead className="bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-gray-100 font-semibold">
                            <tr>
                                <th className="px-6 py-4">Thumbnail</th>
                                <th className="px-6 py-4">Title</th>
                                <th className="px-6 py-4">Technologies</th>
                                <th className="px-6 py-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {projects.map((project) => (
                                <tr key={project.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30">
                                    <td className="px-6 py-4">
                                        <img
                                            src={project.thumbnail}
                                            alt={project.title}
                                            className="w-12 h-12 rounded-lg object-cover bg-gray-100"
                                            onError={(e) => (e.currentTarget.src = "https://dummyimage.com/100x100/cccccc/000000&text=Img")}
                                        />
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{project.title}</td>
                                    <td className="px-6 py-4">{project.technologies}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center space-x-3">
                                            <Link
                                                href={`/admin/projects/edit/${project.id}`}
                                                className="text-blue-600 hover:text-blue-500"
                                            >
                                                <Edit className="w-5 h-5" />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(project.id!)}
                                                className="text-red-600 hover:text-red-500"
                                            >
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {projects.length === 0 && (
                                <tr>
                                    <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                                        No projects found. Create one to get started.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
