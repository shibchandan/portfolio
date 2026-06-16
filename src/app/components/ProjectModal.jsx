"use client";

import React, { useEffect } from "react";
import { X, ExternalLink, ShieldAlert, Settings, Cpu } from "lucide-react";
import { GithubIcon } from "./Icons";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, isOpen, onClose }) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          ></motion.div>

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-full max-w-4xl bg-slate-950 border border-white/10 rounded-2xl shadow-2xl relative z-10 overflow-hidden max-h-[90vh] flex flex-col font-sans"
          >
            {/* Header banner glow */}
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green"></div>

            {/* Modal Header */}
            <div className="p-6 border-b border-white/5 flex items-start justify-between bg-slate-900/40">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-widest text-neon-blue bg-neon-blue/10 px-2 py-0.5 rounded border border-neon-blue/20">
                  {project.category}
                </span>
                <h3 className="text-3xl font-extrabold text-white mt-1">{project.title}</h3>
                <p className="text-sm font-mono text-neon-green">{project.subtitle}</p>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 hover:bg-slate-800 text-subtext-gray hover:text-white rounded-lg transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8 select-text">
              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-sm uppercase font-mono tracking-wider text-white flex items-center gap-2">
                  <Cpu size={16} className="text-neon-blue" />
                  Project Overview
                </h4>
                <p className="text-base text-subtext-gray leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Core Features */}
              <div className="space-y-3">
                <h4 className="text-sm uppercase font-mono tracking-wider text-white flex items-center gap-2">
                  <Settings size={16} className="text-neon-purple" />
                  Core Features
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-4 list-none text-subtext-gray text-sm leading-relaxed">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-neon-purple mt-1">&gt;</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Challenges (PROBLEM & MITIGATION) */}
              <div className="space-y-4">
                <h4 className="text-sm uppercase font-mono tracking-wider text-white flex items-center gap-2">
                  <ShieldAlert size={16} className="text-neon-green" />
                  Engineering Deep Dive: Challenges & Solutions
                </h4>
                
                <div className="space-y-4">
                  {project.challenges.map((challenge, i) => (
                    <div
                      key={i}
                      className="bg-slate-900/60 border border-white/5 rounded-xl p-5 space-y-3 relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 h-full w-[2px] bg-neon-green"></div>
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono text-neon-green uppercase tracking-wider">
                          Challenge {i + 1}
                        </span>
                        <p className="text-sm font-semibold text-white">
                          {challenge.problem}
                        </p>
                      </div>
                      <div className="space-y-1 text-sm text-subtext-gray leading-relaxed">
                        <strong className="text-slate-300 font-mono">Mitigation: </strong>
                        <span>{challenge.solution}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learnings */}
              <div className="space-y-3">
                <h4 className="text-sm uppercase font-mono tracking-wider text-white">
                  &gt; Key Takeaways
                </h4>
                <ul className="space-y-2 text-sm text-subtext-gray leading-relaxed pl-2 list-none">
                  {project.learnings.map((learning, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-neon-blue font-bold">-</span>
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Footer */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono bg-slate-900/80 text-neon-blue px-3 py-1 rounded-md border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Footer / CTAs */}
            <div className="p-4 border-t border-white/5 bg-slate-900/40 flex flex-col sm:flex-row gap-3 items-center justify-between">
              <span className="text-xs font-mono text-subtext-gray">
                Recruiter Proof Mode: Verified Architecture
              </span>
              <div className="flex gap-3 w-full sm:w-auto">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 border border-white/10 text-white px-5 py-2.5 rounded-lg text-sm font-mono transition-all"
                >
                  <GithubIcon size={16} />
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
