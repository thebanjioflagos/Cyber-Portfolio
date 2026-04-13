"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Minimize2, Send, Shield, Zap, Sparkles, Command } from 'lucide-react';
import { aiKnowledge, terminalCommands } from '@/data/ai-knowledge';

export const SentinelTerminal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<{ type: 'user' | 'ai' | 'system', content: string }[]>([
        { type: 'system', content: 'SENTINEL OS v1.0.4 - SECURE CONNECTION ESTABLISHED' },
        { type: 'ai', content: 'Welcome, Operator. I am Sentinel-AI, your strategic concierge. How can I assist your audit today? Type /help for protocols.' }
    ]);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [history]);

    // Global Shortcut: Ctrl + K
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const processCommand = (cmd: string) => {
        const normalized = cmd.toLowerCase().trim();
        
        // 1. Check for specific commands
        if (normalized === '/help') {
            const helpText = terminalCommands.map(c => `${c.cmd}: ${c.desc}`).join('\n');
            return helpText;
        }
        if (normalized === '/clear') {
            setHistory([]);
            return null;
        }
        if (normalized === '/projects') {
            return "Displaying flagship deployments: \n- SIEM-Based Intrusion Detection (ELK)\n- ML Phishing Detection System (92% Accuracy)\n- Real-Time Network Security Dashboard (Python Dash)\n- PhishGuard Neural SaaS\n- Invisible Shield Steganography\n- Zero-Trust Identity & File Vault";
        }
        if (normalized === '/about') {
            return "Okunola Olabanji: Cybersecurity Engineer (Detection, Threat Analysis & Offensive Security). I build systems that detect threats, and I break systems to find them first.";
        }
        if (normalized === '/cv') {
            return "Role-specific CVs available in the 'Recruiter Mode' section. Specialized for Security Engineer, PenTester, and SOC Analyst roles.";
        }
        if (normalized === '/contact') {
            return "Direct Secure Line: banjhi001@gmail.com | WhatsApp: Secure API Enabled | LinkedIn: thebanjioflagos";
        }

        // 2. Fallback to Knowledge Base (Keyword matching)
        const match = aiKnowledge.find(node => 
            node.keywords.some(kw => normalized.includes(kw))
        );

        if (match) return match.response;

        return "Command/Query not recognized in current secure context. Try /help for valid protocols.";
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = input;
        setHistory(prev => [...prev, { type: 'user', content: userMsg }]);
        setInput('');

        // Simulate AI Thinking
        setTimeout(() => {
            const response = processCommand(userMsg);
            if (response) {
                setHistory(prev => [...prev, { type: 'ai', content: response }]);
            }
        }, 300);
    };

    return (
        <>
            {/* Minimal FAB (Floating Action Button) */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 right-8 w-14 h-14 rounded-2xl bg-primary text-primary-foreground shadow-[0_0_30px_rgba(59,130,245,0.5)] flex items-center justify-center z-50 group border border-white/10"
            >
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-background animate-pulse" />
                <Terminal className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            </motion.button>

            {/* Terminal Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.95 }}
                        className="fixed bottom-24 right-8 w-[90vw] md:w-[450px] h-[550px] glass rounded-3xl border border-white/10 shadow-2xl flex flex-col overflow-hidden z-[100]"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                                    <Shield className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-primary block">Sentinel OS</span>
                                    <span className="text-[8px] font-bold uppercase text-muted-foreground">Neural Concierge v1.0.4</span>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                                    <Minimize2 className="w-4 h-4 text-muted-foreground" />
                                </button>
                                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-red-500/20 rounded-lg group transition-colors">
                                    <X className="w-4 h-4 text-muted-foreground group-hover:text-red-500" />
                                </button>
                            </div>
                        </div>

                        {/* History / Buffer */}
                        <div 
                            ref={scrollRef}
                            className="flex-1 overflow-y-auto p-6 space-y-4 font-mono text-xs scrollbar-hide"
                        >
                            {history.map((msg, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`flex flex-col gap-1 ${msg.type === 'user' ? 'items-end' : 'items-start'}`}
                                >
                                    <div className={`px-4 py-2 rounded-2xl max-w-[85%] leading-relaxed ${
                                        msg.type === 'user' 
                                            ? 'bg-primary text-primary-foreground' 
                                            : msg.type === 'system'
                                            ? 'bg-white/5 text-primary border border-primary/20 italic'
                                            : 'bg-white/5 text-foreground/80'
                                    }`}>
                                        {msg.content.split('\n').map((line, i) => (
                                            <p key={i}>{line}</p>
                                        ))}
                                    </div>
                                    <span className="text-[8px] font-bold text-muted-foreground px-2">
                                        {msg.type === 'user' ? 'Operator' : 'Sentinel'} • {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSubmit} className="p-4 border-t border-white/5 bg-white/5 flex items-center gap-3">
                            <div className="flex-1 relative">
                                <Command className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground" />
                                <input 
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Execute protocol or ask Sentinel..."
                                    className="w-full bg-black/20 border border-white/5 rounded-xl py-3 pl-10 pr-4 text-xs font-bold focus:outline-none focus:border-primary/50 transition-all placeholder:text-muted-foreground/30"
                                />
                            </div>
                            <button 
                                type="submit"
                                className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground hover:scale-105 transition-transform shadow-lg shadow-primary/20"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </form>

                        {/* Footer Hints */}
                        <div className="px-6 py-2 bg-primary/5 flex items-center justify-between">
                            <span className="text-[7px] font-bold text-primary flex items-center gap-1">
                                <Zap className="w-2 h-2 fill-primary" />
                                AI-SYNC ENABLED
                            </span>
                            <span className="text-[7px] font-bold text-muted-foreground flex items-center gap-1 uppercase tracking-widest">
                                Press <span className="px-1 py-0.5 rounded bg-white/10">Ctrl+K</span> TO TOGGLE
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
