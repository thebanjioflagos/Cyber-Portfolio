"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Terminal, Zap, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
            {/* Background Grid & Ambient Glow */}
            <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none" />
            <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-purple-500/20 blur-[120px] rounded-full pointer-events-none" />

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
                            <span className="text-2xl font-bold text-foreground">100%</span>
                            <span className="text-xs uppercase tracking-wider font-semibold">Secure Delivery</span>
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
                    {/* Abstract Shield Visual */}
                    <div className="relative aspect-square max-w-[500px] mx-auto">
                        <div className="absolute inset-0 bg-primary/20 blur-[80px] rounded-full animate-pulse" />
                        <div className="relative w-full h-full flex items-center justify-center">
                            {/* Nested Rings */}
                            <div className="absolute w-[100%] h-[100%] rounded-full border border-primary/20 border-dashed animate-[spin_20s_linear_infinite]" />
                            <div className="absolute w-[80%] h-[80%] rounded-full border border-primary/40 border-dashed animate-[spin_15s_linear_infinite_reverse]" />
                            <div className="absolute w-[60%] h-[60%] rounded-full border border-primary/60 border-dashed animate-[spin_10s_linear_infinite]" />

                            {/* Central Icon */}
                            <div className="w-32 h-32 rounded-3xl glass flex items-center justify-center border-primary/40 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                                <ShieldCheck className="w-16 h-16 text-primary" />
                            </div>

                            {/* Floating Tech Elements */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute top-0 right-10 p-4 rounded-2xl glass border-white/10 flex items-center gap-3"
                            >
                                <Cpu className="w-6 h-6 text-primary" />
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-muted-foreground font-bold uppercase">Uptime</span>
                                    <span className="text-sm font-bold">99.99%</span>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                className="absolute bottom-10 left-0 p-4 rounded-2xl glass border-white/10 flex items-center gap-3"
                            >
                                <Lock className="w-6 h-6 text-primary" />
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-muted-foreground font-bold uppercase">Latent Threats</span>
                                    <span className="text-sm font-bold text-green-500">Zero Detected</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
