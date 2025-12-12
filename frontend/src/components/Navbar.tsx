"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { title: "Home", href: "/" },
        { title: "About", href: "#about" },
        { title: "Skills", href: "#skills" },
        { title: "Experience", href: "#experience" },
        { title: "Projects", href: "#projects" },
        { title: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                    >
                        VP
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                className="text-gray-600 hover:text-primary font-medium transition-colors"
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-600 focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    className="text-gray-600 hover:text-primary font-medium py-2 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.title}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
