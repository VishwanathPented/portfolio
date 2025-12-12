"use client";

import React, { useState, useEffect } from "react";
import AdminService from "@/services/admin.service";
import DataService from "@/services/data.service";
import { Profile } from "@/types";
import { Save, Upload } from "lucide-react";
import api from "@/services/api";

export default function EditProfile() {
    const [formData, setFormData] = useState<Profile>({
        fullName: "",
        tagline: "",
        title: "",
        bio: "",
        profileImage: "",
        resumeUrl: "",
        email: "",
        phone: "",
        address: "",
    });
    const [loading, setLoading] = useState(true);
    const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "success" | "error">("idle");

    useEffect(() => {
        DataService.getPublicProfile()
            .then((res) => {
                if (res.data) setFormData(res.data);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, field: "profileImage" | "resumeUrl") => {
        if (!e.target.files?.[0]) return;
        const file = e.target.files[0];
        const data = new FormData();
        data.append("file", file);

        try {
            const res = await api.post("/upload", data, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            const fileName = res.data;
            const fileUrl = `http://localhost:8080/api/public/files/${fileName}`;
            setFormData({ ...formData, [field]: fileUrl });
        } catch (err) {
            console.error("Upload failed", err);
            alert("File upload failed");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaveStatus("saving");
        try {
            await AdminService.updateProfile(formData);
            setSaveStatus("success");
            setTimeout(() => setSaveStatus("idle"), 3000);
        } catch (err) {
            console.error(err);
            setSaveStatus("error");
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">Edit Profile</h2>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 max-w-4xl">
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Basic Info */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tagline (Hero Subtitle)</label>
                            <input
                                type="text"
                                name="tagline"
                                value={formData.tagline}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Job Title</label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Bio */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Bio / About Me</label>
                        <textarea
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            rows={6}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Images & Resume */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Profile Image</label>
                            <div className="flex items-center space-x-4">
                                {formData.profileImage && (
                                    <img src={formData.profileImage} alt="Profile" className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-sm" />
                                )}
                                <div className="relative">
                                    <input
                                        type="file"
                                        onChange={(e) => handleFileUpload(e, "profileImage")}
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    />
                                    <button type="button" className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600">
                                        Upload Image
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Resume PDF</label>
                            <div className="flex items-center space-x-4">
                                <div className="relative">
                                    <input
                                        type="file"
                                        onChange={(e) => handleFileUpload(e, "resumeUrl")}
                                        accept=".pdf"
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    />
                                    <button type="button" className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-600">
                                        Upload PDF
                                    </button>
                                </div>
                                {formData.resumeUrl && <span className="text-sm text-green-600">File uploaded</span>}
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <h3 className="text-xl font-bold dark:text-white pt-4">Contact Details</h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Address</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            disabled={saveStatus === "saving"}
                            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {saveStatus === "saving" ? "Saving..." : "Save Changes"}
                            <Save className="w-5 h-5" />
                        </button>
                        {saveStatus === "success" && (
                            <p className="text-green-600 mt-2 font-medium">Profile updated successfully!</p>
                        )}
                        {saveStatus === "error" && (
                            <p className="text-red-600 mt-2 font-medium">Failed to save profile.</p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}
