"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, MessageSquare, Zap, ShieldQuestion } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
    {
        question: "How do you ensure zero-trust in distributed systems?",
        answer: "I implement strict identity-based access control (RBAC), end-to-end encryption for all data-in-transit and at-rest, and continuous verification of every request, regardless of whether it originates from inside or outside the network boundary.",
        cto_view: "Logic: Multi-factor authentication at the service mesh layer, mutual TLS (mTLS) for service-to-service communication, and granular policy enforcement using OPA (Open Policy Agent)."
    },
    {
        question: "What is your approach to real-time threat mitigation?",
        answer: "My approach focuses on early detection through anomaly-based IDS and automated response pipelines. I build systems that can identify brute-force or DDoS patterns in seconds and trigger immediate firewall rules or account lockouts to prevent escalation.",
        cto_view: "Stack: Scapy for raw packet inspection, Redis for high-frequency state tracking, and WebSockets for low-latency alerting and visualization."
    },
    {
        question: "How do you balance performance and security?",
        answer: "Security shouldn't be a bottleneck. I optimize encryption algorithms (e.g., using ChaCha20-Poly1305 over AES if hardware acceleration isn't available) and implement asynchronous security logging to ensure that the user experience remains fast while maintaining a high security posture.",
        cto_view: "Technique: Offloading cryptographic operations to dedicated workers, implementing read-through/write-through caching with integrity checks, and using non-blocking I/O for security middleware."
    }
];

export const AIEO_FAQ = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    return (
        <section className="py-24 px-6 relative bg-secondary/20">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-4 block">SEO + AIEO Knowledge Core</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight uppercase">
                        Systems <span className="text-primary italic">Deep Dive.</span>
                    </h2>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Structured insights optimized for technical leaders and AI search engines.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="glass rounded-3xl border-white/5 overflow-hidden transition-all">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <ShieldQuestion className="w-5 h-5 text-primary shrink-0" />
                                    <span className="text-lg font-bold tracking-tight">{faq.question}</span>
                                </div>
                                {openIndex === idx ? <Minus className="w-5 h-5 text-primary" /> : <Plus className="w-5 h-5 text-primary" />}
                            </button>

                            <motion.div
                                initial={false}
                                animate={{ height: openIndex === idx ? 'auto' : 0, opacity: openIndex === idx ? 1 : 0 }}
                                className="overflow-hidden"
                            >
                                <div className="px-8 pb-8 space-y-6 pt-2 border-t border-white/5">
                                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                                        <div className="md:col-span-3 space-y-2">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground block">The Strategy</span>
                                            <p className="text-foreground/80 leading-relaxed font-medium">{faq.answer}</p>
                                        </div>
                                        <div className="md:col-span-2 p-6 rounded-2xl bg-primary/5 border border-primary/20 space-y-2">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Zap className="w-4 h-4 text-primary fill-primary" />
                                                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Explain like I'm a CTO</span>
                                            </div>
                                            <p className="text-xs font-mono text-primary/80 leading-relaxed font-bold">{faq.cto_view}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Structured Data Teaser for AIEO */}
                <div className="mt-16 p-8 rounded-3xl border border-dashed border-white/10 text-center opacity-40 hover:opacity-100 transition-opacity">
                    <p className="text-xs font-mono uppercase tracking-widest mb-4">JSON-LD / Schema.org Enabled</p>
                    <div className="flex flex-wrap justify-center gap-6 text-[10px] font-bold uppercase">
                        <span>Person</span>
                        <span>SoftwareSourceCode</span>
                        <span>JobPosting</span>
                        <span>SolutionStack</span>
                    </div>
                </div>
            </div>
        </section>
    );
};
