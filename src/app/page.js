"use client";

import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      {/* Sticky Glassmorphic Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Landing Branding & CLI Terminal */}
        <Hero />

        {/* Credentials & CP Statistics */}
        <About />

        {/* Core Projects Showcase (Layer 1 Recruiter + Layer 2 Engineering Deep Dive) */}
        <Projects />

        {/* Technical Competency Matrix */}
        <Skills />

        {/* Contact form & Direct channels */}
        <Contact />
      </main>

      {/* System Footer metadata */}
      <Footer />
    </>
  );
}
