"use client";

import React from 'react';

const Footer = () => {
    return (
        <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center">
            <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} Vishwanath Pented. Built with Next.js & Tailwind CSS.
            </p>
        </footer>
    );
};

export default Footer;
