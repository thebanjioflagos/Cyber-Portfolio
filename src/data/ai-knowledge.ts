export interface KnowledgeNode {
    keywords: string[];
    response: string;
}

export const aiKnowledge: KnowledgeNode[] = [
    {
        keywords: ["who", "olabanji", "about", "identity"],
        response: "Okunola Olabanji is a Cybersecurity Engineer and Fullstack Developer specializing in Defensive Architecture and Secure Systems. He is the lead architect behind the Sentinel OS ecosystem."
    },
    {
        keywords: ["skills", "stack", "tech", "tools"],
        response: "Technical Arsenal: Next.js 15, React, Tailwind CSS, TypeScript, Splunk, ELK Stack, Sigma Rules, Sysmon, Python (Security Automation), and Cloud Security (AWS/Azure)."
    },
    {
        keywords: ["projects", "work", "portfolio", "case studies"],
        response: "Flagship deployments include: 1. Live SIEM Dashboard (Threat Hunting), 2. Secure E-Portfolio Platform, 3. PhishGuard Security SaaS, and 4. Secure Steganography Systems. Type '/projects' to see details."
    },
    {
        keywords: ["contact", "email", "reach out", "hire"],
        response: "Direct Line: banjhi001@gmail.com. You can also trigger a secure handshake in the Contact section or via my LinkedIn: 'thebanjioflagos'."
    },
    {
        keywords: ["vdp", "security", "bug", "reporting"],
        response: "Vulnerability Disclosure: I welcome responsible research. Refer to /security-policy for scope and submission guidelines."
    },
    {
        keywords: ["cv", "resume", "download"],
        response: "CV Access: Use the 'Recruiter Mode' section above to download role-specific CVs (Security Engineer, PenTester, etc.)."
    },
    {
        keywords: ["agent", "sentinel", "ai", "bot"],
        response: "I am Sentinel-AI, a secure concierge built by Olabanji. I help recruiters and auditors navigate this intelligence terminal efficiently."
    }
];

export const terminalCommands = [
    { cmd: "/about", desc: "Display architect profile" },
    { cmd: "/projects", desc: "List flagship deployments" },
    { cmd: "/cv", desc: "Quick-access CV downloads" },
    { cmd: "/contact", desc: "Show secure communication channels" },
    { cmd: "/clear", desc: "Clear terminal buffer" },
    { cmd: "/help", desc: "Show available command protocols" }
];
