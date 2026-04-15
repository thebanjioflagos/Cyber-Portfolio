import React from 'react';
import { Shield, Lock, Terminal, Zap, ArrowRight, Cpu } from 'lucide-react';

export interface Project {
    title: string;
    category: string;
    description: string;
    metrics: { label: string; value: string }[];
    tags: string[];
    icon: React.ReactNode;
    href: string;
    type: 'Security' | 'Fullstack';
}

export const projects: Project[] = [
    {
        title: "SIEM-Based Intrusion Detection & Threat Monitoring System",
        category: "Detection Engineering / SOC",
        description: "Built a production-grade ELK Stack SIEM pipeline ingesting Sysmon logs and live network traffic. Implemented Sigma detection rules for brute force and privilege escalation.",
        metrics: [
            { label: "Detection Latency", value: "-30%" },
            { label: "Threat Coverage", value: "95%+" }
        ],
        tags: ["ELK Stack", "Sysmon", "Sigma Rules", "MITRE ATT&CK"],
        icon: <Shield className="w-10 h-10 text-primary" />,
        href: "https://github.com/thebanjioflagos/SIEM-SOC-Portfolio",
        type: 'Security'
    },
    {
        title: "Machine Learning Phishing Detection System",
        category: "AI / Offensive Security",
        description: "Developed a phishing URL classifier using URL feature extraction and NLP techniques. Achieved 92% detection accuracy. Integrated into a simulated email gateway.",
        metrics: [
            { label: "Accuracy", value: "92%" },
            { label: "Risk Reduction", value: "40%" }
        ],
        tags: ["Python", "Scikit-Learn", "NLP", "Threat Intel"],
        icon: <Terminal className="w-10 h-10 text-primary" />,
        href: "https://github.com/thebanjioflagos/PhishGuard-ML",
        type: 'Security'
    },
    {
        title: "Real-Time Network Security Monitoring Dashboard",
        category: "Security Operations",
        description: "Built using Python Dash with live packet capture backend. Displays active connections, threat event feeds, and anomaly scores. Designed for SOC-style monitoring.",
        metrics: [
            { label: "Manual Effort", value: "-50%" },
            { label: "Live Ingestion", value: "True" }
        ],
        tags: ["Python Dash", "Scapy", "Network Security", "Visual Analytics"],
        icon: <Lock className="w-10 h-10 text-primary" />,
        href: "https://github.com/thebanjioflagos/NetSentinel-Dash",
        type: 'Security'
    },
    {
        title: "PhishGuard: Neural Security SaaS",
        category: "Security Engineering / SaaS",
        description: "A production-ready SaaS platform for real-time phishing detection. Features a FastAPI backend, JWT-based RBAC, and a glassmorphism dashboard.",
        metrics: [
            { label: "Confidence", value: "High-Fidelity" },
            { label: "Auth", value: "JWT-Secure" }
        ],
        tags: ["FastAPI", "Next.js", "Redis", "Security-as-a-Service"],
        icon: <Zap className="w-10 h-10 text-primary" />,
        href: "https://github.com/thebanjioflagos/PhishGuard-SaaS",
        type: 'Security'
    },
    {
        title: "Invisible Shield: Cryptographic Steganography",
        category: "Cryptography / Privacy",
        description: "Air-gapped, high-performance steganography engine utilizing AES-256 and pixel-scattering logic for covert data storage. Zero-dependency implementation.",
        metrics: [
            { label: "Security", value: "Air-Gapped" },
            { label: "Cipher", value: "AES-256-CBC" }
        ],
        tags: ["Python", "Cryptography", "Steganography", "PIL"],
        icon: <Lock className="w-10 h-10 text-primary" />,
        href: "https://github.com/thebanjioflagos/Invisible-Shield",
        type: 'Security'
    },
    {
        title: "Zero-Trust Identity & File Vault",
        category: "Infrastructure Security",
        description: "Secure lifecycle-managed file storage platform using E2EE and strict RBAC. Eliminates plaintext data exposure through Fernet orchestration.",
        metrics: [
            { label: "Exposure", value: "0.0%" },
            { label: "Hardening", value: "Top-Tier" }
        ],
        tags: ["Flask", "PostgreSQL", "RBAC", "E2EE"],
        icon: <Shield className="w-10 h-10 text-primary" />,
        href: "https://github.com/thebanjioflagos/Zero-Trust-Vault",
        type: 'Security'
    },
    {
        title: "NairaSwift: Global Remittance SaaS",
        category: "Fintech / Fullstack",
        description: "Bank-grade international remittance platform with real-time currency conversion and multi-layer RBAC. Engineered for low-latency transactions.",
        metrics: [
            { label: "SLA", value: "99.99%" },
            { label: "Stack", value: "Next.js/Supabase" }
        ],
        tags: ["Next.js", "Supabase", "TypeScript", "Fintech"],
        icon: <ArrowRight className="w-10 h-10 text-primary" />,
        href: "#contact",
        type: 'Fullstack'
    },
    {
        title: "OmniLocal: Enterprise SaaS Platform",
        category: "Fullstack / Cloud Infrastructure",
        description: "A high-performance Next.js 14 platform with Supabase integration, featuring Sentry monitoring and advanced RBAC for local commerce orchestration.",
        metrics: [
            { label: "Uptime", value: "99.9%" },
            { label: "Architecture", value: "Next.js 14" }
        ],
        tags: ["Next.js", "Supabase", "Sentry", "TypeScript"],
        icon: <Cpu className="w-10 h-10 text-primary" />,
        href: "#contact",
        type: 'Fullstack'
    },
    {
        title: "Agentic-Sales: AI Orchestration Engine",
        category: "AI / Fullstack Automation",
        description: "Autonomous AI sales orchestration platform built with React and Supabase. Leverages agentic workflows to automate lead qualification.",
        metrics: [
            { label: "Automation", value: "Full-Cycle" },
            { label: "Logic", value: "Agentic" }
        ],
        tags: ["React", "AI Agents", "Supabase", "Automation"],
        icon: <Zap className="w-10 h-10 text-primary" />,
        href: "#contact",
        type: 'Fullstack'
    }
];

