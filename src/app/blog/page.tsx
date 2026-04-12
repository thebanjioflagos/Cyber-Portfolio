"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';
import { ArrowLeft, Clock, Calendar, Tag, ArrowRight, Shield } from 'lucide-react';

export default function BlogLanding() {
    return (
        <main className="min-h-screen bg-background text-foreground py-24 px-6 relative overflow-hidden selection:bg-primary/30 selection:text-primary">
            {/* Visual Accents */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-primary font-bold mb-12 hover:gap-3 transition-all">
                    <ArrowLeft className="w-5 h-5" />
                    Back to Terminal
                </Link>

                <div className="max-w-3xl mb-20 text-center mx-auto md:text-left md:mx-0">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-widest text-primary mb-6">
                        <Shield className="w-3 h-3" />
                        Strategic Intelligence Feed
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight uppercase leading-none">
                        The <span className="text-primary italic">Security</span> Journal.
                    </h1>
                    <p className="text-muted-foreground text-xl leading-relaxed">
                        In-depth technical analysis, strategic defense patterns, and engineering insights for the modern threat landscape.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts.map((post, idx) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group p-8 glass rounded-[2.5rem] border-white/5 hover:border-primary/40 transition-all flex flex-col relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                            <Tag className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <span className="text-[10px] font-black uppercase tracking-widest text-primary block">{post.category}</span>
                                            <span className="text-[10px] font-bold text-muted-foreground uppercase">{post.date}</span>
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-bold text-muted-foreground uppercase flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {post.readTime}
                                    </span>
                                </div>

                                <h2 className="text-2xl md:text-3xl font-black mb-4 leading-tight group-hover:text-primary transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-muted-foreground text-sm font-medium leading-relaxed mb-8 flex-1">
                                    {post.excerpt}
                                </p>

                                <Link 
                                    href={`/blog/${post.slug}`}
                                    className="inline-flex items-center gap-2 text-primary text-xs font-black uppercase tracking-widest mt-auto group/btn"
                                >
                                    Read Intelligence
                                    <ArrowRight className="w-4 h-4 group-btn-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
