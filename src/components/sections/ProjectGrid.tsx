"use client";

import React from 'react';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { Shield, Lock, Cpu, Globe, Zap, Database, Terminal, Link as LinkIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { projects } from '@/data/projects';


export const ProjectGrid = () => {
    return (
        <section id="projects" className="py-24 px-6 relative overflow-hidden scroll-mt-24">
            {/* Visual Accents */}
            <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/5 blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                            Elite Case <span className="text-primary italic">Studies.</span>
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Demonstrating real-world security capability, systems thinking, and production-grade engineering across diverse domains.
                        </p>
                    </div>
                    <div className="hidden md:flex gap-4">
                        {/* Filter buttons could go here */}
                        <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-primary">
                            All Security Domains
                        </span>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, idx) => (
                        <ProjectCard key={idx} {...project} />
                    ))}
                </motion.div>

                {/* Flagship CTA - Teaser for Live Simulation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 p-8 md:p-12 glass rounded-3xl border-primary/30 relative overflow-hidden group"
                >
                    <div className="absolute inset-0 bg-grid opacity-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-transparent" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                        <div className="w-24 h-24 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/40 group-hover:scale-110 transition-transform">
                            <Terminal className="w-12 h-12 text-primary" />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-2 block">Signature Project</span>
                            <h3 className="text-2xl md:text-4xl font-bold mb-4 italic">Live Threat Intelligence & Attack Simulation Platform</h3>
                            <p className="text-muted-foreground text-lg mb-4 max-w-2xl">
                                A real-time, interactive environment demonstrating active defensive maneuvers against live simulated threats.
                            </p>
                            <div className="mb-8 p-4 rounded-xl bg-primary/5 border border-primary/20 max-w-xl">
                                <span className="text-[10px] font-black uppercase text-primary tracking-widest block mb-2">Architecture Decision Record</span>
                                <p className="text-xs text-foreground/70 font-medium leading-relaxed italic">
                                    "Selected ELK Stack over standalone IDS for deeper historical correlation and MITRE ATT&CK mapping. Implemented Kafka-inspired buffer logic for high-velocity log ingestion during simulated attacks."
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-4">
                                <Link
                                    href="#interactive"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold hover:scale-105 transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                                >
                                    Enter Simulation Engine
                                    <Zap className="w-5 h-5 fill-current" />
                                </Link>
                                <a
                                    href="https://github.com/thebanjioflagos/SIEM-SOC-Portfolio"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass border-white/10 hover:border-primary/40 font-bold hover:scale-105 transition-all"
                                >
                                    View GitHub Repo
                                    <Globe className="w-5 h-5 text-primary" />
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
