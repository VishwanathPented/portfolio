"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { title: "Home", href: "/" },
        { title: "About", href: "#about" },
        { title: "Skills", href: "#skills" },
        { title: "Experience", href: "#experience" },
        { title: "Projects", href: "#projects" },
        { title: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 py-4"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-2xl font-bold font-display bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                    >
                        VP.
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.title}
                                href={link.href}
                                className="text-slate-300 hover:text-white font-medium transition-colors text-sm tracking-wide"
                            >
                                {link.title}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="px-5 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 text-sm font-medium"
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white focus:outline-none"
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
                        className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.title}
                                    href={link.href}
                                    className="text-slate-300 hover:text-primary font-medium text-lg transition-colors"
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
