"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Shield, Lock, Cpu, Globe, Zap, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ProjectCardProps {
    title: string;
    category: string;
    description: string;
    metrics: { label: string; value: string }[];
    tags: string[];
    icon: React.ReactNode;
    href: string;
}

export const ProjectCard = ({ title, category, description, metrics, tags, icon, href }: ProjectCardProps) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="group relative flex flex-col glass rounded-2xl border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden"
        >
            {/* Visual Header */}
            <div className="relative h-48 bg-white/5 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

                {/* Animated Icon */}
                <div className="relative z-10 w-20 h-20 rounded-2xl glass border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    {icon}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-primary px-2 py-1 rounded bg-primary/10 border border-primary/20">
                        {category}
                    </span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {title}
                </h3>

                <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                    {description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    {metrics.map((metric) => (
                        <div key={metric.label} className="flex flex-col gap-1 px-3 py-2 rounded-xl bg-white/5 border border-white/5 group-hover:border-white/10 transition-colors">
                            <span className="text-[10px] uppercase font-bold text-muted-foreground">{metric.label}</span>
                            <span className="text-sm font-bold text-foreground">{metric.value}</span>
                        </div>
                    ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-semibold px-2 py-1 rounded-md bg-secondary text-secondary-foreground">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <Link
                        href={href}
                        className="flex items-center gap-2 text-sm font-bold text-primary hover:underline group/btn"
                    >
                        Case Study
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                    <div className="flex gap-3">
                        <Github className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer" />
                        <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-foreground cursor-pointer" />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
