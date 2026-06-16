"use client";

import React, { useState } from "react";
import { projectsData } from "../data/projectsData";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ["All", "Systems & Security", "AI & Infrastructure", "Full Stack Platform"];

  const filteredProjects = projectsData.filter(
    (project) => filter === "All" || project.category === filter
  );

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
            Engineering <span className="text-slate-400">Projects</span>
          </h2>
          <p className="text-subtext-gray text-sm md:text-base max-w-lg mt-2 font-mono">
            Click any project to inspect its architecture, design patterns, and low-level code mechanics.
          </p>
          <div className="w-12 h-1 bg-slate-700 rounded-full mt-4"></div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`font-mono text-xs px-4 py-2 rounded-lg border transition-all cursor-pointer select-none ${
                filter === category
                  ? "bg-white text-slate-900 border-white shadow-md shadow-white/5 font-bold"
                  : "bg-slate-900/50 text-subtext-gray border-white/5 hover:border-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {filteredProjects.map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard project={project} onOpen={handleOpenModal} />
            </div>
          ))}
        </div>

      </div>

      {/* Deep Dive Specifications Modal Overlay */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
