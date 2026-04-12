"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { blogPosts } from '@/data/blog-posts';
import { ArrowLeft, Clock, Calendar, Shield, Share2, MessageCircle, Lightbulb } from 'lucide-react';
import { useEffect, useState } from 'react';
import { BlogSchema } from '@/components/seo/BlogSchema';

export default function BlogPostPage() {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background text-foreground uppercase tracking-widest font-black">
                404 | Intel Not Found
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-background text-foreground py-24 px-6 relative selection:bg-primary/30 selection:text-primary">
            <BlogSchema post={post} />
            <div className="max-w-4xl mx-auto relative z-10">
                <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-bold mb-12 hover:gap-3 transition-all">
                    <ArrowLeft className="w-5 h-5" />
                    Back to Intelligence Feed
                </Link>

                <div className="mb-16">
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-widest text-primary">
                            {post.category}
                        </span>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase">
                           <Calendar className="w-3 h-3" />
                           {post.date}
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase">
                           <Clock className="w-3 h-3" />
                           {post.readTime}
                        </div>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tight uppercase leading-[0.95]">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-4 p-6 rounded-3xl glass border-white/5 bg-white/5">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center border border-primary/40">
                            <Shield className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground block">Verified Author</span>
                            <span className="text-sm font-bold">{post.author}</span>
                        </div>
                    </div>
                </div>

                {/* AI-Optimized Quick Summary */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12 p-8 rounded-[2rem] border border-primary/20 bg-primary/5 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Lightbulb className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        Strategic Takeaways (AI Summary)
                    </h3>
                    <p className="text-sm font-bold text-foreground leading-relaxed italic">
                        {post.excerpt}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="prose prose-invert max-w-none"
                >
                    {post.content}
                </motion.div>

                <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex gap-4">
                        <button className="flex items-center gap-2 px-6 py-3 rounded-xl glass border-white/10 hover:border-primary/40 transition-all font-bold text-xs uppercase">
                            <Share2 className="w-4 h-4" />
                            Share Intel
                        </button>
                        <a 
                            href="https://wa.me/2348077609209"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 rounded-xl glass border-white/10 hover:border-primary/40 transition-all font-bold text-xs uppercase"
                        >
                            <MessageCircle className="w-4 h-4" />
                            Discuss Post
                        </a>
                    </div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                        End of Transmission
                    </div>
                </div>
            </div>
        </main>
    );
}
