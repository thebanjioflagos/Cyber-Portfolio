"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Terminal, Zap, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
            {/* Background Image HUD Overlay */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.15 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0 bg-[url('/og-image.png')] bg-cover bg-center"
                />
            </div>

            {/* Background Grid & Ambient Glow */}
            <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
            <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-primary mb-6">
                        <Zap className="w-3 h-3 fill-primary" />
                        <span>Available for Strategic Security Roles</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
                        Neutralizing <span className="text-primary italic">Threats.</span> <br />
                        Engineering <span className="text-glow underline decor-primary/30">Detection.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
                        Cybersecurity Engineer (Detection, Threat Analysis & Offensive Security). <span className="text-foreground font-bold italic">I build systems that detect threats, and I break systems to find them first.</span>
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link
                            href="#projects"
                            className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold flex items-center gap-2 hover:scale-[1.02] transition-transform group shadow-[0_0_20px_oklch(0.6_0.2_250_/_0.3)]"
                        >
                            View Case Studies
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#recruiter-mode"
                            className="px-8 py-4 rounded-xl glass border-white/10 font-bold flex items-center gap-2 hover:bg-white/5 transition-all"
                        >
                            Technical Path (CTOs)
                        </Link>
                    </div>

                    {/* Social Proof / Trust Indicators */}
                    <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-8 text-muted-foreground">
                        <div className="flex flex-col gap-1">
                            <span className="text-2xl font-bold text-foreground">5+</span>
                            <span className="text-xs uppercase tracking-wider font-semibold">Years Experience</span>
                        </div>
                        <div className="w-[1px] h-10 bg-white/10" />
                        <div className="flex flex-col gap-1">
                            <span className="text-2xl font-bold text-foreground">50+</span>
                            <span className="text-xs uppercase tracking-wider font-semibold">Systems Hardened</span>
                        </div>
                        <div className="w-[1px] h-10 bg-white/10" />
                        <div className="flex flex-col gap-1">
                            <span className="text-2xl font-bold text-foreground">99.9%</span>
                            <span className="text-xs uppercase tracking-wider font-semibold">Resilient Delivery</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Content - Visual Representation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="relative hidden lg:block"
                >
                    {/* Premium HUD Visual Container */}
                    <div className="relative aspect-video max-w-[600px] mx-auto group">
                        <div className="absolute inset-0 bg-primary/30 blur-[60px] rounded-full group-hover:bg-primary/40 transition-colors" />

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10 glass shadow-2xl"
                        >
                            <img
                                src="/og-image.png"
                                alt="Security HUD"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                        </motion.div>

                        {/* Floating Tech Elements Overlay */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -top-6 -right-6 p-4 rounded-2xl glass border-white/10 flex items-center gap-3 shadow-xl backdrop-blur-md z-20"
                        >
                            <Cpu className="w-5 h-5 text-primary" />
                            <div className="flex flex-col">
                                <span className="text-[10px] text-muted-foreground font-bold uppercase">System Integrity</span>
                                <span className="text-xs font-bold font-mono">99.99% VERIFIED</span>
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                            className="absolute -bottom-6 -left-6 p-4 rounded-2xl glass border-white/10 flex items-center gap-3 shadow-xl backdrop-blur-md z-20"
                        >
                            <ShieldCheck className="w-5 h-5 text-primary" />
                            <div className="flex flex-col">
                                <span className="text-[10px] text-muted-foreground font-bold uppercase">Threat Shield</span>
                                <span className="text-xs font-bold text-green-500 font-mono">ACTIVE MONITORING</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
