"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, FileText, CheckCircle2, Award, Clock, Target, Code, Github, Linkedin, Mail, ChevronDown, Instagram, MessageCircle, Twitter, Star } from 'lucide-react';

const stats = [
    { label: "Systems Hardened", value: "50+" },
    { label: "Critical Vulnerabilities found", value: "200+" },
    { label: "Availability SLA", value: "99.99%" },
    { label: "Tech Stack", value: "12+ Tools" }
];

export const RecruiterMode = () => {
    return (
        <section id="recruiter-mode" className="py-24 px-6 relative bg-background border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Column - Core Profile */}
                    <div className="lg:col-span-1 space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-widest text-primary mb-4">
                                <Zap className="w-3 h-3 fill-primary" />
                                Fast Path for Recruiters
                            </div>
                            <h2 className="text-3xl font-black mb-2 tracking-tight uppercase">OKUNOLA OLABANJI</h2>
                            <p className="text-primary font-bold tracking-widest text-sm uppercase flex items-center gap-2">
                                Security Engineer & Fullstack Dev
                                <span className="px-2 py-0.5 rounded-md bg-green-500/10 border border-green-500/20 text-[8px] text-green-500">GLOBAL REMOTE READY</span>
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 p-4 rounded-xl glass border-white/10">
                                <Award className="w-5 h-5 text-primary" />
                                <div>
                                    <span className="text-[10px] font-bold uppercase text-muted-foreground block">Key Certifications</span>
                                    <span className="text-sm font-bold">OSCP, CompTIA Security+</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 rounded-xl glass border-white/10">
                                <Target className="w-5 h-5 text-primary" />
                                <div>
                                    <span className="text-[10px] font-bold uppercase text-muted-foreground block">Focus Area</span>
                                    <span className="text-sm font-bold">Detection, Threat Analysis & Offensive Security</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="relative group/cv">
                                <button className="w-full px-6 py-4 rounded-xl bg-primary text-primary-foreground font-black text-sm flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform">
                                    <FileText className="w-4 h-4" />
                                    Download CV
                                    <ChevronDown className="w-4 h-4" />
                                </button>

                                <div className="absolute top-full left-0 right-0 mt-2 p-2 glass border-white/10 rounded-2xl opacity-0 translate-y-2 pointer-events-none group-hover/cv:opacity-100 group-hover/cv:translate-y-0 group-hover/cv:pointer-events-auto transition-all z-20">
                                    {[
                                        // TIER 1: THE MASTER PATH
                                        { name: "Security Engineer / Architect (Master)", file: "security-engineer.pdf", tier: "primary", description: "SIEM, Detection & Policy" },

                                        // TIER 2: OFFENSIVE OPERATIONS
                                        { name: "Offensive Security (Red Team / OSCP)", file: "pentester.pdf", tier: "specialist", description: "Breach Simulation & PenTesting" },

                                        // TIER 3: INFRASTRUCTURE & AUTOMATION
                                        { name: "DevSecOps & Cloud Security", file: "devsecops.pdf", tier: "specialist", description: "CI/CD Hardening & IaC" },
                                    ].map((cv) => (
                                        <a
                                            key={cv.name}
                                            href={`/cv/${cv.file}`}
                                            download
                                            className={`group/item block px-4 py-3 rounded-xl hover:bg-white/5 transition-all mb-1 ${cv.tier === 'primary' ? 'bg-primary/10 border border-primary/20' : 'border border-white/5'
                                                }`}
                                        >
                                            <div className="flex items-center justify-between mb-1">
                                                <span className={`text-[11px] font-black uppercase ${cv.tier === 'primary' ? 'text-primary' : 'text-foreground'}`}>
                                                    {cv.name}
                                                </span>
                                                {cv.tier === 'primary' && <Star className="w-3 h-3 fill-primary" />}
                                            </div>
                                            <span className="text-[9px] text-muted-foreground block font-bold uppercase tracking-tight opacity-70">
                                                {cv.description}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <a href="https://github.com/thebanjioflagos" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glass border-white/10 flex items-center justify-center hover:text-primary transition-colors cursor-pointer" title="GitHub" aria-label="Visit my GitHub profile">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="https://linkedin.com/in/thebanjioflagos" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glass border-white/10 flex items-center justify-center hover:text-primary transition-colors cursor-pointer" title="LinkedIn" aria-label="Connect on LinkedIn">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="https://twitter.com/banjioflagos" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glass border-white/10 flex items-center justify-center hover:text-primary transition-colors cursor-pointer" title="Twitter" aria-label="Follow on Twitter">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="https://www.instagram.com/banjioflag/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glass border-white/10 flex items-center justify-center hover:text-primary transition-colors cursor-pointer" title="Instagram" aria-label="Follow on Instagram">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="/api/contact/whatsapp" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl glass border-white/10 flex items-center justify-center hover:text-primary transition-colors cursor-pointer" title="Secure WhatsApp Handshake" aria-label="Secure WhatsApp Handshake">
                                    <MessageCircle className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - High Density Data */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Stats Grid */}
                        <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-4">
                            {stats.map((stat, i) => (
                                <div key={i} className="p-6 rounded-2xl bg-secondary/50 border border-white/5 text-center">
                                    <span className="text-2xl md:text-3xl font-black text-primary block mb-1">{stat.value}</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Performance Summary */}
                        <div className="p-8 rounded-3xl glass border-white/10 space-y-6">
                            <h3 className="text-xl font-black flex items-center gap-2 uppercase tracking-tight">
                                <Shield className="w-5 h-5 text-primary" />
                                Security Baseline
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Zero-Trust Architecture implementation",
                                    "Automated Penetration Testing pipelines",
                                    "Real-time Threat Mitigation strategies",
                                    "SIEM/IDS deployment and management"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 items-start">
                                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-1 shrink-0" />
                                        <span className="text-sm font-semibold text-foreground/80">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Engineering Depth */}
                        <div className="p-8 rounded-3xl glass border-white/10 space-y-6">
                            <h3 className="text-xl font-black flex items-center gap-2 uppercase tracking-tight">
                                <Code className="w-5 h-5 text-primary" />
                                Remote-First Workflow
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    "Asynchronous collaboration (Slack/Discord)",
                                    "Global Timezone Overrides (GMT/EST/CET)",
                                    "Full Git/GitHub CI/CD Automation",
                                    "Document-driven Security Design (DDSD)"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 items-start">
                                        <Clock className="w-4 h-4 text-primary mt-1 shrink-0" />
                                        <span className="text-sm font-semibold text-foreground/80">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
