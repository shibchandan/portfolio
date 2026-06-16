"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" }
  ];

  useEffect(() => {
    let tick = false;
    const handleScroll = () => {
      if (!tick) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled((prev) => (prev !== isScrolled ? isScrolled : prev));

          const scrollPosition = window.scrollY + 120;
          for (const item of navItems) {
            const el = document.getElementById(item.id);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPosition >= top && scrollPosition < top + height) {
                setActiveSection((prev) => (prev !== item.id ? item.id : prev));
              }
            }
          }
          tick = false;
        });
        tick = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "glass-panel shadow-lg border-b border-white/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Prompt */}
        <div 
          onClick={() => scrollTo("home")}
          className="font-mono text-lg font-bold text-neon-blue cursor-pointer flex items-center gap-1 group select-none"
        >
          <span className="text-neon-green">shib</span>
          <span>@</span>
          <span className="text-neon-purple">mnnit</span>
          <span className="text-white">:~$</span>
          <span className="w-2 h-4 bg-white/80 animate-pulse group-hover:bg-neon-blue"></span>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`font-mono text-sm tracking-wider hover:text-neon-blue transition-colors cursor-pointer relative py-1 ${
                activeSection === item.id ? "text-neon-blue" : "text-subtext-gray"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-neon-blue rounded-full"></span>
              )}
            </button>
          ))}
          
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 bg-slate-900 border border-white/10 hover:border-neon-blue hover:text-neon-blue text-text-light px-4 py-1.5 rounded-md text-sm font-mono tracking-wide transition-all"
          >
            <FileText size={16} />
            Resume
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden text-text-light hover:text-neon-blue transition-colors cursor-pointer"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-panel border-b border-white/10 flex flex-col py-4 px-6 gap-4 animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`font-mono text-left py-2 text-base transition-colors ${
                activeSection === item.id ? "text-neon-blue font-bold" : "text-subtext-gray"
              }`}
            >
              &gt; {item.label}
            </button>
          ))}
          <a
            href="/resume.pdf"
            download
            className="flex items-center justify-center gap-2 bg-slate-900 border border-white/10 hover:border-neon-blue text-text-light py-2 rounded-md font-mono text-sm transition-all"
          >
            <FileText size={16} />
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
