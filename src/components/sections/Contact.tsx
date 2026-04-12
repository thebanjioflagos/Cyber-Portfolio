"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Linkedin, Shield, ArrowRight, Zap } from 'lucide-react';

const contactMethods = [
    {
        name: "Direct Email",
        value: "thebanjioflagos@gmail.com",
        href: "mailto:thebanjioflagos@gmail.com",
        icon: <Mail className="w-6 h-6 text-primary" />,
        label: "Primary Professional Line"
    },
    {
        name: "Secure WhatsApp",
        value: "Request Encrypted Line",
        href: "https://wa.me/2348077609209",
        icon: <MessageCircle className="w-6 h-6 text-primary" />,
        label: "Real-time Strategic Chat"
    },
    {
        name: "LinkedIn Professional",
        value: "thebanjioflagos",
        href: "https://linkedin.com/in/thebanjioflagos",
        icon: <Linkedin className="w-6 h-6 text-primary" />,
        label: "Identity & Verification"
    }
];

export const Contact = () => {
    return (
        <section id="contact" className="py-24 px-6 relative overflow-hidden scroll-mt-24">
            {/* Visual Accents */}
            <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto text-center">
                <div className="max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-widest text-primary mb-6">
                        <Shield className="w-3 h-3" />
                        Encrypted Connection Ready
                    </div>
                    <h2 className="text-3xl md:text-6xl font-black mb-6 tracking-tight uppercase">
                        Secure <span className="text-primary italic">Contact.</span>
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                        Ready to architect a secure future? Reach out via one of the verified channels below for strategic collaborations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contactMethods.map((method, idx) => (
                        <motion.a
                            key={method.name}
                            href={method.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="p-8 glass rounded-3xl border-white/5 hover:border-primary/40 transition-all flex flex-col items-center group"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {method.icon}
                            </div>
                            <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest mb-2">{method.label}</span>
                            <h3 className="text-xl font-bold mb-4">{method.name}</h3>
                            <p className="text-sm font-bold text-foreground mb-8 truncate w-full">{method.value}</p>

                            <div className="mt-auto flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest">
                                Connect Now
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Final Call to Action */}
                <div className="mt-24 p-12 glass rounded-[3rem] border-primary/20 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-4xl font-black mb-4">ENGINEERING THE NEXT GENERATION OF SECURITY.</h3>
                        <p className="text-muted-foreground font-bold mb-8 italic">Available for remote strategic roles and high-impact security audits.</p>
                        <a
                            href="mailto:thebanjioflagos@gmail.com"
                            className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-primary text-primary-foreground font-black hover:scale-105 transition-all shadow-[0_0_40px_rgba(59,130,245,0.4)] relative z-20 cursor-pointer"
                        >
                            <Zap className="w-5 h-5 fill-current" />
                            INITIALIZE HANDSHAKE
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
