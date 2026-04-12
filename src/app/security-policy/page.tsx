"use client";

import React from 'react';
import { Shield, Lock, AlertTriangle, Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SecurityPolicy() {
    return (
        <main className="min-h-screen bg-background text-foreground py-24 px-6 selection:bg-primary/30 selection:text-primary">
            <div className="max-w-4xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-primary font-bold mb-12 hover:gap-3 transition-all">
                    <ArrowLeft className="w-5 h-5" />
                    Back to Terminal
                </Link>

                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-widest text-primary mb-6">
                        <Lock className="w-3 h-3" />
                        Official VDP v1.0
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase">
                        Vulnerability <span className="text-primary italic">Disclosure</span> Policy.
                    </h1>
                    <p className="text-muted-foreground text-xl leading-relaxed">
                        I am committed to ensuring the security of my systems and the data I handle. I welcome responsible disclosure from security researchers.
                    </p>
                </div>

                <div className="space-y-12">
                    <section className="glass p-8 rounded-3xl border-white/5">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                            <Shield className="w-6 h-6 text-primary" />
                            Promise to Researchers
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            If you conduct your security research in good faith and follow this policy, I promise:
                        </p>
                        <ul className="space-y-4 text-sm text-foreground/80">
                            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> No legal action will be initiated for discovery or research conducted within scope.</li>
                            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> I will work with you to understand and validate your findings.</li>
                            <li className="flex gap-3"><div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> Proper attribution will be given for valid, non-duplicate reports.</li>
                        </ul>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-bold flex items-center gap-3">
                            <AlertTriangle className="w-6 h-6 text-orange-500" />
                            Guidelines
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-secondary/50 border border-white/5">
                                <h3 className="font-bold mb-2">Rule 1: No Damage</h3>
                                <p className="text-xs text-muted-foreground">Do not attempt to access user data, disrupt services, or execute destructive commands.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-secondary/50 border border-white/5">
                                <h3 className="font-bold mb-2">Rule 2: Confidentiality</h3>
                                <p className="text-xs text-muted-foreground">Keep findings confidential until I have had a reasonable time to address them (90 days standard).</p>
                            </div>
                        </div>
                    </section>

                    <section className="glass p-8 rounded-3xl border-primary/20 bg-primary/5">
                        <h2 className="text-2xl font-bold mb-6">How to Report</h2>
                        <p className="text-muted-foreground leading-relaxed mb-8">
                            Please send a detailed report including steps to reproduce to my secure inbox:
                        </p>
                        <a 
                            href="mailto:banjhi001@gmail.com" 
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-black hover:scale-105 transition-all"
                        >
                            <Mail className="w-5 h-5" />
                            SUBMIT SECURITY REPORT
                        </a>
                    </section>
                </div>

                <div className="mt-24 pt-12 border-t border-white/5 text-center">
                    <p className="text-xs text-muted-foreground uppercase font-black tracking-widest">
                        SECURE BY DESIGN | OLABANJI OKUNOLA
                    </p>
                </div>
            </div>
        </main>
    );
}
