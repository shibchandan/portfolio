"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, FileDown, ArrowRight } from "lucide-react";
import Terminal from "./Terminal";

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(59,130,246,0.1),rgba(255,255,255,0))]"
    >
      {/* Background Decorative Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [-webkit-mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Branding / Intro */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-6 text-center lg:text-left"
        >
          {/* Welcome Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-300 dark:border-white/5 bg-white/60 dark:bg-slate-900/60 text-xs font-mono text-neon-blue select-none shadow-sm dark:shadow-none">
            <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse"></span>
            Full Stack Software Developer
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Hi, I'm <br className="hidden md:inline" />
            <span className="bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent filter drop-shadow-sm select-all">
              Shib Chandan Mistry
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl font-mono text-emerald-600 dark:text-neon-green font-semibold">
            &gt; Building High-Performance Architectures
          </p>

          {/* Intro Description */}
          <p className="text-base md:text-lg text-slate-600 dark:text-subtext-gray max-w-xl leading-relaxed select-text">
            Third-year B.Tech CSE student at <strong className="text-slate-900 dark:text-white">MNNIT Allahabad</strong>. 
            Designing kernel-level analyzers, hardware-signed P2P transaction gateways, and custom index vector search engines to solve real-world system bottlenecks.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start pt-2">
            <button
              onClick={scrollToProjects}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-neon-blue hover:bg-blue-600 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 font-bold px-6 py-3 rounded-lg shadow-lg cursor-pointer transform hover:scale-[1.02] active:scale-95 transition-all"
            >
              View Projects
              <ArrowRight size={18} />
            </button>
            
            <a
              href="/resume.pdf"
              download
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/20 text-slate-800 dark:text-text-light px-6 py-3 rounded-lg font-mono text-sm tracking-wide shadow-sm dark:shadow-none transition-all"
            >
              <FileDown size={18} />
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* Right Side: Terminal Simulation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center w-full"
        >
          <Terminal />
        </motion.div>

      </div>
    </section>
  );
}
