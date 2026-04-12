import React from 'react';
import { Shield, Lock, Terminal } from 'lucide-react';

export const projects = [
    {
        title: "Real-Time Intrusion Detection System",
        category: "Cybersecurity / Networking",
        description: "Engineered a Python-based IDS capable of packet sniffing, traffic inspection, and detecting port scanning, DDoS patterns, ARP spoofing, and DNS poisoning. Integrated an automated alerting pipeline (Email, SMS, Dashboard).",
        metrics: [
            { label: "Detection Latency", value: "<1s" },
            { label: "Threat Coverage", value: "95%+" }
        ],
        tags: ["Python", "Socket Programming", "Scapy", "IDS/IPS"],
        icon: <Shield className="w-10 h-10 text-primary" />,
        href: "https://github.com/thebanjioflagos/SIEM-SOC-Portfolio/tree/main/detections"
    },
    {
        title: "Enterprise SOC & SIEM Deployment",
        category: "SOC Operations",
        description: "Deployed a production-grade ELK stack with custom Logstash pipelines and Kibana dashboards. Mapped detection rules to MITRE ATT&CK and implemented automated attack simulations.",
        metrics: [
            { label: "Visibility", value: "Full Stack" },
            { label: "Framework", value: "MITRE ATT&CK" }
        ],
        tags: ["ELK Stack", "Logstash", "Kibana", "Detection Engineering"],
        icon: <Terminal className="w-10 h-10 text-primary" />,
        href: "https://github.com/thebanjioflagos/SIEM-SOC-Portfolio"
    },
    {
        title: "Secure File Storage (Zero Trust)",
        category: "Backend / Security",
        description: "Developed a zero-trust file storage platform using Fernet E2EE, Bcrypt hashing, and RBAC. Eliminated plaintext data exposure and secured user file interactions with a Flask backend.",
        metrics: [
            { label: "Data Exposure", value: "0%" },
            { label: "Encryption", value: "AES-256" }
        ],
        tags: ["Flask", "PostgreSQL", "Cryptography", "RBAC"],
        icon: <Lock className="w-10 h-10 text-primary" />,
        href: "https://github.com/thebanjioflagos/SIEM-SOC-Portfolio"
    }
];
