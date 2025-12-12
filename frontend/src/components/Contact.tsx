"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Contact = () => {
    const profile = portfolioData.profile;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="py-32 relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">Let's Work <br /> Together</h2>
                        <p className="text-slate-400 text-lg mb-12">
                            Have a project in mind or want to discuss modern tech? I'm always open to new opportunities and interesting conversations.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="p-4 bg-slate-800 rounded-2xl group-hover:bg-primary/20 transition-colors text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 mb-1">Email Me</p>
                                    <a href={`mailto:${profile.email}`} className="text-xl font-medium text-white hover:text-primary transition-colors">
                                        {profile.email}
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="p-4 bg-slate-800 rounded-2xl group-hover:bg-primary/20 transition-colors text-primary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 mb-1">Call Me</p>
                                    <p className="text-xl font-medium text-white">{profile.phone}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 group">
                                <div className="p-4 bg-slate-800 rounded-2xl group-hover:bg-primary/20 transition-colors text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500 mb-1">Location</p>
                                    <p className="text-xl font-medium text-white">{profile.address}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 md:p-10 rounded-3xl border border-slate-700"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-white transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-white transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-white transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-white transition-all resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-primary to-accent text-white font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg"
                            >
                                Send Message <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
