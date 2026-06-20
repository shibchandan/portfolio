"use client";

import React, { useState } from "react";
import { skillsData } from "../data/skillsData";
import { motion } from "framer-motion";
import { Code, Server, Network, Brain, Laptop, BookOpen } from "lucide-react";

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Map category to icon and accent color class
  const categoryAssets = {
    "Languages": {
      icon: <Code size={20} className="text-blue-600 dark:text-neon-blue" />,
      border: "hover:neon-border-blue",
      accent: "text-blue-600 dark:text-neon-blue",
      glow: "bg-blue-100 dark:bg-neon-blue/10"
    },
    "Core Computer Science": {
      icon: <BookOpen size={20} className="text-purple-600 dark:text-neon-purple" />,
      border: "hover:neon-border-purple",
      accent: "text-purple-600 dark:text-neon-purple",
      glow: "bg-purple-100 dark:bg-neon-purple/10"
    },
    "Systems & Security": {
      icon: <Network size={20} className="text-blue-600 dark:text-neon-blue" />,
      border: "hover:neon-border-blue",
      accent: "text-blue-600 dark:text-neon-blue",
      glow: "bg-blue-100 dark:bg-neon-blue/10"
    },
    "AI & Infrastructure": {
      icon: <Brain size={20} className="text-purple-600 dark:text-neon-purple" />,
      border: "hover:neon-border-purple",
      accent: "text-purple-600 dark:text-neon-purple",
      glow: "bg-purple-100 dark:bg-neon-purple/10"
    },
    "Backend & Database": {
      icon: <Server size={20} className="text-emerald-600 dark:text-neon-green" />,
      border: "hover:neon-border-green",
      accent: "text-emerald-600 dark:text-neon-green",
      glow: "bg-emerald-100 dark:bg-neon-green/10"
    },
    "Frontend & Cloud": {
      icon: <Laptop size={20} className="text-emerald-600 dark:text-neon-green" />,
      border: "hover:neon-border-green",
      accent: "text-emerald-600 dark:text-neon-green",
      glow: "bg-emerald-100 dark:bg-neon-green/10"
    }
  };

  return (
    <section id="skills" className="py-24 bg-white/30 dark:bg-slate-900/35 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-slate-900 dark:text-white">
            Technical <span className="text-slate-500 dark:text-slate-400">Skills</span>
          </h2>
          <p className="text-slate-600 dark:text-subtext-gray text-sm md:text-base max-w-lg mt-2 font-mono">
            Systems engineering, dynamic query modeling, cryptographic protocols, and core algorithms.
          </p>
          <div className="w-12 h-1 bg-slate-300 dark:bg-slate-700 rounded-full mt-4"></div>
        </div>

        {/* Skills Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skillBlock, idx) => {
            const assets = categoryAssets[skillBlock.category] || categoryAssets["Languages"];
            const isHovered = hoveredIndex === idx;

            return (
              <motion.div
                key={skillBlock.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`glass-card p-6 rounded-xl border border-slate-200 dark:border-white/5 flex flex-col justify-between transition-all ${assets.border} h-full shadow-sm dark:shadow-none`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2.5 rounded-lg ${assets.glow}`}>
                      {assets.icon}
                    </div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg font-mono">
                      {skillBlock.category}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-subtext-gray mb-6 leading-relaxed">
                    {skillBlock.description}
                  </p>

                  {/* Skills Grid */}
                  <div className="flex flex-wrap gap-2">
                    {skillBlock.items.map((skill, sIdx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: sIdx * 0.05 }}
                        className="text-xs font-mono px-2.5 py-1 rounded-md border border-slate-200 dark:border-white/5 bg-white/80 dark:bg-slate-950/80 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600 transition-all cursor-default"
                      >
                        {skill.name}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
