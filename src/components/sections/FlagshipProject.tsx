"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Shield, AlertTriangle, Zap, Activity, Cpu, Globe, Search, ArrowRight, ShieldCheck, Lock, Play } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Threat {
    id: string;
    type: "Brute Force" | "Port Scan" | "DDoS" | "SQL Injection";
    severity: "Low" | "Medium" | "High" | "Critical";
    timestamp: string;
    origin: string;
    status: "Detected" | "Mitigated" | "Blocked";
}

export const FlagshipProject = () => {
    const [threats, setThreats] = useState<Threat[]>([]);
    const [activeSimulation, setActiveSimulation] = useState<string | null>(null);
    const [isEngineRunning, setIsEngineRunning] = useState(true);
    const scrollRef = useRef<HTMLDivElement>(null);

    const addThreat = (type?: Threat["type"]) => {
        const types: Threat["type"][] = ["Brute Force", "Port Scan", "DDoS", "SQL Injection"];
        const severities: Threat["severity"][] = ["Low", "Medium", "High", "Critical"];
        const origins = ["192.168.1.45", "45.128.2.11", "10.0.4.22", "88.192.4.1", "Unknown (Proxy)"];

        const newThreat: Threat = {
            id: Math.random().toString(36).substr(2, 9),
            type: type || types[Math.floor(Math.random() * types.length)],
            severity: severities[Math.floor(Math.random() * severities.length)],
            timestamp: new Date().toLocaleTimeString(),
            origin: origins[Math.floor(Math.random() * origins.length)],
            status: "Detected"
        };

        setThreats(prev => [newThreat, ...prev].slice(0, 50));

        // Auto-mitigate after 2 seconds
        setTimeout(() => {
            setThreats(prev => prev.map(t => t.id === newThreat.id ? { ...t, status: Math.random() > 0.5 ? "Mitigated" : "Blocked" } : t));
        }, 2000);
    };

    useEffect(() => {
        if (!isEngineRunning) return;
        const interval = setInterval(() => {
            if (Math.random() > 0.7) addThreat();
        }, 3000);
        return () => clearInterval(interval);
    }, [isEngineRunning]);

    const runSimulation = (type: Threat["type"]) => {
        setActiveSimulation(type);
        addThreat(type);
        setTimeout(() => setActiveSimulation(null), 3000);
    };

    return (
        <section id="interactive" className="py-24 px-6 relative bg-black overflow-hidden">
            {/* Background Matrix-like Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent)] opacity-50" />
            <div className="absolute inset-0 bg-grid opacity-10" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 items-start">

                    {/* Dashboard Title & Description */}
                    <div className="lg:w-1/3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-widest text-primary mb-6">
                            <Activity className="w-3 h-3 fill-primary animate-pulse" />
                            Live Network Simulation
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-none uppercase">
                            Threat <span className="text-primary italic">Intelligence</span> <br /> Dashboard.
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            A high-fidelity **Event-Driven Simulation Engine** demonstrating real-time detection logic, mitigation strategies, and defensive resilience.
                        </p>

                        <div className="space-y-4">
                            <div className="p-4 rounded-xl glass border-white/5 space-y-2">
                                <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest block">System Status</span>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-sm font-bold">Active Defense Engaged</span>
                                    </div>
                                    <span className="text-xs font-mono text-primary">v4.0.2-stable</span>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    onClick={() => setIsEngineRunning(!isEngineRunning)}
                                    className={cn(
                                        "p-4 rounded-xl border font-bold text-xs uppercase tracking-widest transition-all",
                                        isEngineRunning ? "bg-red-500/10 border-red-500/20 text-red-500" : "bg-green-500/10 border-green-500/20 text-green-500"
                                    )}
                                >
                                    {isEngineRunning ? "Stop Engine" : "Start Engine"}
                                </button>
                                <button
                                    onClick={() => setThreats([])}
                                    className="p-4 rounded-xl glass border-white/10 font-bold text-xs uppercase tracking-widest hover:bg-white/5 transition-all"
                                >
                                    Clear Logs
                                </button>
                            </div>
                        </div>

                        {/* Simulation Controls */}
                        <div className="mt-12 p-6 rounded-2xl glass border-primary/20">
                            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                                <Shield className="w-4 h-4 text-primary" />
                                Launch Attack Simulation
                            </h3>
                            <div className="grid grid-cols-1 gap-3">
                                {["Brute Force", "Port Scan", "DDoS", "SQL Injection"].map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => runSimulation(type as Threat["type"])}
                                        disabled={activeSimulation !== null}
                                        className={cn(
                                            "flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-bold transition-all",
                                            activeSimulation === type
                                                ? "bg-primary border-primary text-primary-foreground scale-[0.98]"
                                                : "bg-white/5 border-white/10 hover:border-primary/40 text-foreground"
                                        )}
                                    >
                                        {type}
                                        {activeSimulation === type ? <Activity className="w-4 h-4 animate-spin" /> : <Play className="w-4 h-4 opacity-40" />}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Interactive Dashboard Area */}
                    <div className="lg:w-2/3 w-full space-y-8">
                        {/* Visual Heatmap / Traffic Area (Simulated) */}
                        <div className="h-64 rounded-3xl glass border-white/10 relative overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 bg-blue-500/5" />

                            {/* Simulated Traffic Nodes */}
                            <div className="relative w-full h-full">
                                {isEngineRunning && [...Array(10)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ x: "0%", y: "40%", opacity: 0 }}
                                        animate={{
                                            x: ["0%", "100%"],
                                            opacity: [0, 1, 0],
                                            y: ["40%", `${Math.random() * 80}%`]
                                        }}
                                        transition={{
                                            duration: 2 + Math.random() * 3,
                                            repeat: Infinity,
                                            delay: i * 0.5,
                                            ease: "linear"
                                        }}
                                        className="absolute w-1 h-1 bg-primary rounded-full shadow-[0_0_10px_rgba(59,130,246,1)]"
                                    />
                                ))}

                                {/* Central Protected Node */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40 animate-pulse">
                                        <ShieldCheck className="w-12 h-12 text-primary" />
                                    </div>
                                </div>
                            </div>

                            {/* Overlay Metrics */}
                            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                <div className="flex gap-8">
                                    <div className="text-center">
                                        <span className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">MTTD (Avg)</span>
                                        <span className="text-xl font-mono font-bold tracking-tighter text-primary">42s</span>
                                    </div>
                                    <div className="text-center">
                                        <span className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Log Velocity</span>
                                        <span className="text-xl font-mono font-bold tracking-tighter">2.4k EPS</span>
                                    </div>
                                    <div className="text-center">
                                        <span className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Triage Rate</span>
                                        <span className="text-xl font-mono font-bold tracking-tighter text-green-500">98%</span>
                                    </div>
                                </div>
                                <div className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/40 font-mono text-[10px] font-bold text-green-500 uppercase tracking-widest shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                                    Zero Trust Engine: Verified
                                </div>
                            </div>
                        </div>

                        {/* Live Logs / Threat Feed */}
                        <div className="glass rounded-3xl border-white/10 overflow-hidden flex flex-col h-[500px]">
                            <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/5">
                                <div className="flex items-center gap-2">
                                    <Terminal className="w-4 h-4 text-primary" />
                                    <span className="text-xs font-bold uppercase tracking-widest">Real-Time Threat Detection Feed</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-bold text-muted-foreground">{threats.length} events logged</span>
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-xs">
                                <AnimatePresence initial={false}>
                                    {threats.map((threat) => (
                                        <motion.div
                                            key={threat.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className={cn(
                                                "p-4 rounded-xl border grid grid-cols-1 md:grid-cols-4 gap-4 items-center transition-all",
                                                threat.severity === "Critical" ? "bg-red-500/10 border-red-500/20" :
                                                    threat.severity === "High" ? "bg-orange-500/10 border-orange-500/20" :
                                                        "bg-white/5 border-white/5"
                                            )}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={cn(
                                                    "w-2 h-2 rounded-full",
                                                    threat.severity === "Critical" ? "bg-red-500" :
                                                        threat.severity === "High" ? "bg-orange-500" : "bg-primary"
                                                )} />
                                                <span className="font-bold uppercase">{threat.id}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-muted-foreground uppercase opacity-60">Threat Type</span>
                                                <span className="font-bold text-foreground">{threat.type}</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[10px] text-muted-foreground uppercase opacity-60">Origin IP</span>
                                                <span className="text-primary">{threat.origin}</span>
                                            </div>
                                            <div className="flex justify-end">
                                                <span className={cn(
                                                    "px-2 py-1 rounded text-[10px] font-black uppercase tracking-tighter",
                                                    threat.status === "Detected" ? "bg-blue-500/20 text-blue-500" :
                                                        threat.status === "Blocked" ? "bg-red-500/20 text-red-500" : "bg-green-500/20 text-green-500"
                                                )}>
                                                    {threat.status}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                                {threats.length === 0 && (
                                    <div className="h-full flex flex-col items-center justify-center opacity-20 py-20 translate-y-10">
                                        <Search className="w-12 h-12 mb-4" />
                                        <p className="font-bold uppercase tracking-widest text-center">Scanning Network for Anomalies...</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
