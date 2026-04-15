import React from 'react';
import { Shield, Lock, Terminal, Zap } from 'lucide-react';

export const projects = [
    {
        title: "SIEM-Based Intrusion Detection & Threat Monitoring System",
        category: "Detection Engineering / SOC",
        description: "Built a production-grade ELK Stack SIEM pipeline ingesting Sysmon logs and live network traffic. Implemented Sigma detection rules for brute force (T1110), privilege escalation (T1068), and anomalous network activity. Simulated attacks using Metasploit, Hydra, and Nmap.",
        metrics: [
            { label: "Detection Latency", value: "-30%" },
            { label: "Threat Coverage", value: "95%+" }
        ],
        tags: ["ELK Stack", "Sysmon", "Sigma Rules", "MITRE ATT&CK"],
        icon: <Shield className="w-10 h-10 text-primary" />,
        href: "https://github.com/thebanjioflagos/SIEM-SOC-Portfolio"
    },
    {
        title: "Machine Learning Phishing Detection System",
        category: "AI / Offensive Security",
        description: "Developed a phishing URL classifier using URL feature extraction and NLP techniques. Achieved 92% detection accuracy. Integrated into a simulated email gateway for real-time alerting and analyst triage workflows.",
        metrics: [
            { label: "Accuracy", value: "92%" },
            { label: "Risk Reduction", value: "40%" }
        ],
        tags: ["Python", "Scikit-Learn", "NLP", "Threat Intel"],
        icon: <Terminal className="w-10 h-10 text-primary" />,
        href: "https://github.com/thebanjioflagos/PhishGuard-ML"
    },
    {
        title: "Real-Time Network Security Monitoring Dashboard",
        category: "Security Operations",
        description: "Built using Python Dash with live packet capture backend. Displays active connections, threat event feeds, and anomaly scores. Designed for SOC-style single-screen monitoring and rapid incident response.",
        metrics: [
            { label: "Manual Effort", value: "-50%" },
            { label: "Live Ingestion", value: "True" }
        ],
        tags: ["Python Dash", "Scapy", "Network Security", "Visual Analytics"],
        icon: <Lock className="w-10 h-10 text-primary" />,
        href: "https://github.com/thebanjioflagos/NetSentinel-Dash"
    },
    {
        title: "PhishGuard: Neural Security SaaS",
        category: "Security Engineering / SaaS",
        description: "A production-ready SaaS platform for real-time phishing detection. Features a FastAPI backend, JWT-based RBAC, and a glassmorphism dashboard visualizing live threat vectors.",
        metrics: [
            { label: "Confidence", value: "High-Fidelity" },
            { label: "Auth", value: "JWT-Secure" }
        ],
        tags: ["FastAPI", "Next.js", "Redis", "Security-as-a-Service"],
        icon: <Zap className="w-10 h-10 text-primary" />,
        href: "https://github.com/thebanjioflagos/PhishGuard-SaaS"
    },
    {
        title: "Invisible Shield: Cryptographic Steganography",
        category: "Cryptography / Privacy",
        description: "Air-gapped, high-performance steganography engine utilizing AES-256 and pixel-scattering logic for covert data storage. Zero-dependency cryptographic implementation.",
        metrics: [
            { label: "Security", value: "Air-Gapped" },
            { label: "Cipher", value: "AES-256-CBC" }
        ],
        tags: ["Python", "Cryptography", "Steganography", "PIL"],
        icon: <Lock className="w-10 h-10 text-primary" />,
        href: "https://github.com/thebanjioflagos/Invisible-Shield"
    },
    {
        title: "Zero-Trust Identity & File Vault",
        category: "Infrastructure Security",
        description: "Secure lifecycle-managed file storage platform using E2EE and strict RBAC. Eliminates plaintext data exposure through Fernet orchestration and secure-by-design architecture.",
        metrics: [
            { label: "Exposure", value: "0.0%" },
            { label: "Hardening", value: "Top-Tier" }
        ],
        tags: ["Flask", "PostgreSQL", "RBAC", "E2EE"],
        icon: <Shield className="w-10 h-10 text-primary" />,
        href: "https://github.com/thebanjioflagos/Zero-Trust-Vault"
    }
];
