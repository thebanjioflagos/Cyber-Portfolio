"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Terminal, Zap, ShieldCheck, Cpu, Code, Database, Search, Activity, AlertTriangle } from 'lucide-react';

const skills = [
    { name: "Penetration Testing", items: ["Web Apps", "Network", "Mobile", "Cloud"], icon: <Search className="w-5 h-5" /> },
    { name: "Security Tools", items: ["Metasploit", "Burp Suite", "Wireshark", "Nmap", "Nessus"], icon: <ShieldCheck className="w-5 h-5" /> },
    { name: "Core Stack", items: ["Python", "Next.js", "PostgreSQL", "Tailwind"], icon: <Code className="w-5 h-5" /> },
    { name: "Infras & Cloud", items: ["AWS", "Azure", "GCP", "Kubernetes"], icon: <Cpu className="w-5 h-5" /> }
];

export const Expertise = () => {
    return (
        <section id="expertise" className="py-24 px-6 relative bg-secondary/30 scroll-mt-24">
            <div className="max-w-7xl mx-auto">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        Technical <span className="text-primary italic">Expertise.</span>
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Deep domain knowledge in security engineering, from low-level packet analysis to high-level system architecture.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-8 glass rounded-2xl border-white/5 hover:border-primary/20 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <div className="text-primary">
                                    {skill.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                            <ul className="space-y-3">
                                {skill.items.map((item, i) => (
                                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-primary/40" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Certifications Row */}
                <div className="mt-20 pt-12 border-t border-white/5">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground mb-8 block text-center">Industry Validated Certifications</span>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
                        {["OSCP", "CompTIA Security+"].map(cert => (
                            <span key={cert} className="text-xl md:text-2xl font-black tracking-tighter text-foreground/80 hover:text-primary transition-colors cursor-default">
                                {cert}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
