"use client";

import React, { useState } from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProjectGrid } from "@/components/sections/ProjectGrid";
import { Expertise } from "@/components/sections/Expertise";
import { Offers } from "@/components/sections/Offers";
import { FlagshipProject } from "@/components/sections/FlagshipProject";
import { RecruiterMode } from "@/components/sections/RecruiterMode";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { Contact } from "@/components/sections/Contact";
import { AIEO_FAQ } from "@/components/sections/AIEO_FAQ";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Home() {
  const [immersiveMode, setImmersiveMode] = useState(false);

  return (
    <main className={cn(
      "min-h-screen bg-background text-foreground transition-colors duration-1000 selection:bg-primary/30 selection:text-primary",
      immersiveMode ? "bg-black" : "bg-background"
    )}>
      <Navbar />

      {/* Immersive Overlay Toggle */}
      <div className="fixed bottom-8 left-8 z-[60]">
        <button
          onClick={() => setImmersiveMode(!immersiveMode)}
          className={cn(
            "group flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-500",
            immersiveMode
              ? "bg-primary text-primary-foreground border-primary shadow-[0_0_30px_rgba(59,130,246,0.5)]"
              : "glass border-white/10 hover:border-primary/40 text-foreground"
          )}
        >
          {immersiveMode ? <X className="w-5 h-5" /> : <Sparkles className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />}
          <span className="text-sm font-black uppercase tracking-widest whitespace-nowrap">
            {immersiveMode ? "Exit Interactive" : "Enter Interactive Experience"}
          </span>
        </button>
      </div>

      {/* Immersive Background Effects (Skipped if not in immersive mode) */}
      <AnimatePresence>
        {immersiveMode && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
          >
            {/* Floating particles or complex grid can go here */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent)]" />
            <div className="absolute inset-0 bg-grid opacity-20 bg-[length:60px_60px]" />

            {/* Floating Glows */}
            <motion.div
              animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary/20 blur-[150px] rounded-full"
            />
            <motion.div
              animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/20 blur-[200px] rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10">
        <Hero />
        <ProjectGrid />
        <FlagshipProject />
        <Expertise />
        <Offers />
        <BlogTeaser />
        <RecruiterMode />
        <Contact />
        <AIEO_FAQ />
      </div>

      <Footer />

      {/* Default Ambient Effects (Subtle) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full" />
      </div>
    </main>
  );
}
