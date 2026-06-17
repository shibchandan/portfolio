"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function ProjectCard({ project, onOpen }) {
  // Select hover border style based on category
  const borderStyles = {
    "Systems & Security": "hover:border-slate-500",
    "AI & Infrastructure": "hover:border-slate-500",
    "Full Stack Platform": "hover:border-slate-500"
  };

  const accentColors = {
    "Systems & Security": "text-slate-300",
    "AI & Infrastructure": "text-slate-300",
    "Full Stack Platform": "text-slate-300"
  };

  const categoryStyle = borderStyles[project.category] || "hover:border-slate-500";
  const accentColor = accentColors[project.category] || "text-slate-300";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`glass-card p-6 rounded-xl border border-white/5 flex flex-col justify-between h-full group ${categoryStyle} cursor-pointer`}
      onClick={() => onOpen(project)}
    >
      <div className="space-y-4">
        {/* Category Header */}
        <div className="flex justify-between items-center">
          <span className="text-[10px] uppercase font-mono tracking-widest text-subtext-gray bg-slate-900 px-2.5 py-1 rounded border border-white/5">
            {project.category}
          </span>
          <ArrowUpRight size={16} className="text-subtext-gray group-hover:text-white transition-colors" />
        </div>

        {/* Title */}
        <div>
          <h3 className="text-2xl font-bold text-white group-hover:text-slate-300 transition-colors">
            {project.title}
          </h3>
          <p className={`text-xs font-mono mt-1 ${accentColor}`}>{project.subtitle}</p>
        </div>

        {/* Description */}
        <p className="text-sm text-subtext-gray leading-relaxed select-text">
          {project.shortDescription}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono bg-slate-950/60 text-slate-300 px-2 py-0.5 rounded border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex gap-4 items-center pt-6 mt-auto">
        <button
          onClick={(e) => {
            e.stopPropagation(); // Avoid opening modal
            onOpen(project);
          }}
          className="flex-1 bg-slate-900 border border-white/10 hover:bg-white hover:text-slate-900 text-white font-bold font-mono text-xs py-2 px-3 rounded-md transition-all text-center select-none"
        >
          Deep Dive &gt;
        </button>

        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="p-2 bg-slate-950 hover:bg-slate-900 border border-white/5 text-subtext-gray hover:text-white rounded-md transition-all"
          title="Source Code"
        >
          <GithubIcon size={16} />
        </a>
        {project.demoLink && !project.demoLink.includes("youtube.com") && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-2 bg-slate-950 hover:bg-slate-900 border border-white/5 text-subtext-gray hover:text-neon-blue rounded-md transition-all"
            title="Live Website"
          >
            <ExternalLink size={16} />
          </a>
        )}

      </div>
    </motion.div>
  );
}
