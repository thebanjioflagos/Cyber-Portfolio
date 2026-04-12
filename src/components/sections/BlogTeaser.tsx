"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';
import { ArrowRight, Clock, Shield } from 'lucide-react';

export const BlogTeaser = () => {
    // Show only the latest 3 posts
    const latestPosts = blogPosts.slice(0, 3);

    return (
        <section className="py-24 px-6 relative bg-secondary/10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-widest text-primary mb-4">
                            <Shield className="w-3 h-3" />
                            Knowledge Terminal
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase">
                            Recent <span className="text-primary italic">Intelligence.</span>
                        </h2>
                    </div>
                    <Link 
                        href="/blog" 
                        className="px-6 py-3 rounded-xl glass border-white/10 hover:border-primary/40 transition-all font-bold text-xs uppercase tracking-widest flex items-center gap-2 group"
                    >
                        View Full Feed
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {latestPosts.map((post, idx) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group p-8 rounded-3xl glass border-white/5 hover:border-primary/20 transition-all flex flex-col h-full"
                        >
                            <div className="flex items-center justify-between mb-6 text-[10px] font-black uppercase tracking-widest">
                                <span className="text-primary">{post.category}</span>
                                <span className="text-muted-foreground flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {post.readTime}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                                {post.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-8 line-clamp-3 leading-relaxed">
                                {post.excerpt}
                            </p>

                            <Link 
                                href={`/blog/${post.slug}`}
                                className="mt-auto text-primary text-[10px] font-black uppercase tracking-widest flex items-center gap-2 group/btn"
                            >
                                Access Data
                                <ArrowRight className="w-3 h-3 group-btn-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
