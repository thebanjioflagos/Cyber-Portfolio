"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Server, FileSearch, ShieldAlert, ArrowRight, Zap, CheckCircle2, Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const offers = [
    {
        title: "Web App Security Audit",
        scope: "Full-spectrum pentest including OWASP Top 10, API security, and logic flaws.",
        outcome: "Comprehensive vulnerability report + remediation roadmap.",
        icon: <Search className="w-6 h-6 text-primary" />,
        cta: "Request Audit"
    },
    {
        title: "Secure Backend Development",
        scope: "Building robust, scalable backends with 'security-by-default' architecture.",
        outcome: "Production-ready, hardened API with E2EE and strict auth.",
        icon: <Server className="w-6 h-6 text-primary" />,
        cta: "Discuss Project"
    },
    {
        title: "Threat Detection Setup",
        scope: "Implementation of real-time IDS, SIEM, and automated alerting pipelines.",
        outcome: "24/7 visibility into network threats and anomalous behavior.",
        icon: <ShieldAlert className="w-6 h-6 text-primary" />,
        cta: "Get Started"
    },
    {
        title: "Incident Response & Hardening",
        scope: "Rapid response to breaches and post-incident system hardening.",
        outcome: "System recovery, root cause analysis, and long-term resilience.",
        icon: <Shield className="w-6 h-6 text-primary" />,
        cta: "Emergency Support"
    }
];

export const Offers = () => {
    return (
        <section id="offers" className="py-24 px-6 relative overflow-hidden scroll-mt-24">
            {/* Background Accents */}
            <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-4 block">Productized Services</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                        Strategic <span className="text-primary italic">Solutions.</span>
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Directly applicable expertise to solve your most critical security and development challenges.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {offers.map((offer, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            className="p-8 glass rounded-3xl border-white/5 hover:border-primary/40 transition-all flex flex-col group relative"
                        >
                            {/* Highlight Glow */}
                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500 rounded-3xl pointer-events-none" />

                            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-primary/40 transition-colors">
                                {offer.icon}
                            </div>

                            <h3 className="text-xl font-bold mb-4">{offer.title}</h3>

                            <div className="flex-1 space-y-6">
                                <div className="space-y-2">
                                    <span className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest block">Scope</span>
                                    <p className="text-sm text-foreground/80 leading-relaxed">{offer.scope}</p>
                                </div>

                                <div className="space-y-2">
                                    <span className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest block">Outcome</span>
                                    <div className="flex gap-2 items-start">
                                        <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                                        <p className="text-sm text-foreground font-semibold">{offer.outcome}</p>
                                    </div>
                                </div>
                            </div>

                            <button className="mt-10 px-6 py-3 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all">
                                {offer.cta}
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* Global CTA */}
                <div className="mt-20 p-12 rounded-3xl bg-primary flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(59,130,246,0.3)]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)]" />
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-black text-primary-foreground mb-2">Need a custom security strategy?</h3>
                        <p className="text-primary-foreground/80 font-medium">Let's architect a secure future for your organization.</p>
                    </div>
                    <Link
                        href="#contact"
                        className="relative z-10 px-8 py-4 rounded-xl bg-white text-primary font-black flex items-center justify-center gap-2 hover:scale-105 transition-all"
                    >
                        Start Consultation
                        <Zap className="w-5 h-5 fill-current" />
                    </Link>
                </div>
            </div>
        </section>
    );
};
