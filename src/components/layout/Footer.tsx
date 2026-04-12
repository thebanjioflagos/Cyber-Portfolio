"use client";

import React from 'react';
import { Shield, Github, Linkedin, Mail, Twitter, Instagram, MessageCircle } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="py-12 px-6 border-t border-white/5 bg-secondary/20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                        <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <span className="font-bold text-lg block leading-none">OLABANJI</span>
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Cybersecurity Engineer</span>
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-end gap-4">
                    <div className="flex gap-6">
                        <a href="https://github.com/thebanjioflagos" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="GitHub Profile">
                            <Github className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                        </a>
                        <a href="https://linkedin.com/in/thebanjioflagos" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn Profile">
                            <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                        </a>
                        <a href="https://twitter.com/banjioflagos" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Twitter Profile">
                            <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                        </a>
                        <a href="https://www.instagram.com/banjioflag/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Instagram Profile">
                            <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                        </a>
                        <a href="/api/contact/whatsapp" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Secure WhatsApp Handshake">
                            <MessageCircle className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                        </a>
                        <a href="mailto:banjhi001@gmail.com" className="hover:text-primary transition-colors" aria-label="Email Me">
                            <Mail className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                        </a>
                    </div>
                    <div className="flex gap-4 items-center">
                        <a href="/security-policy" className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground hover:text-primary transition-colors">Vulnerability Disclosure Policy</a>
                        <span className="text-white/10">|</span>
                        <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                            &copy; {new Date().getFullYear()} - Secure by Design. Built with Next.js
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
