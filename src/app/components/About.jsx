"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap, Trophy, BarChart2, Star } from "lucide-react";

export default function About() {
  const [liveStats, setLiveStats] = useState({
    leetcode: { rating: 1703, solved: 923 },
    codeforces: { rating: 1380, solved: 138 },
    codingNinjas: { level: 8, solved: 240 }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/stats")
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("Stats API failed");
      })
      .then((data) => {
        if (data) {
          setLiveStats(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Using fallback statistics due to API error:", err);
        setLoading(false);
      });
  }, []);

  const stats = [
    {
      title: "LeetCode",
      metric: `${liveStats.leetcode.rating} Rating`,
      sub: `${liveStats.leetcode.solved}+ Solved`,
      desc: "Algorithm mastery, dynamic programming & graph traversals.",
      icon: <Trophy className="text-yellow-500" size={20} />,
      link: "https://leetcode.com/u/shib11/"
    },
    {
      title: "Codeforces",
      metric: `${liveStats.codeforces.rating} Rating`,
      sub: `${liveStats.codeforces.solved}+ Solved`,
      desc: "Advanced math, string algorithms & flow optimization.",
      icon: <BarChart2 className="text-red-500" size={20} />,
      link: "https://codeforces.com/profile/shibchandan11"
    },
    {
      title: "Coding Ninjas",
      metric: `Level ${liveStats.codingNinjas.level}`,
      sub: `${liveStats.codingNinjas.solved}+ Solved`,
      desc: "Top academic ranks in data structures & problem-solving.",
      icon: <Star className="text-orange-500" size={20} />,
      link: "https://www.naukri.com/code360/profile/shibu11"
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-900/35 relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2">
            About <span className="text-slate-400">Me</span>
          </h2>
          <div className="w-12 h-1 bg-slate-700 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Avatar Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex justify-center"
          >
            <div className="relative group w-64 h-64 md:w-72 md:h-72">
              {/* Background glowing frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-neon-green to-neon-blue rounded-2xl opacity-40 blur-xl group-hover:opacity-75 transition-opacity duration-500"></div>
              
              {/* Image Container */}
              <div className="w-full h-full relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900 group-hover:border-slate-500/50 transition-all duration-300">
                <Image
                  src="/myPhoto.png"
                  alt="Shib Chandan Mistry"
                  fill
                  sizes="(max-width: 768px) 256px, 288px"
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  priority={false}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Side: Education & Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 space-y-6"
          >
            <h3 className="text-2xl font-bold text-white font-mono">
              &gt; Engineering Credential
            </h3>
            
            <p className="text-subtext-gray leading-relaxed text-base">
              I am a Computer Science undergraduate with a passion for designing secure protocols, high-concurrency systems, and AI search systems. My foundation is built on rigorous coursework and competitive programming, translating theoretical computer science directly into robust software.
            </p>

            {/* Education Timeline */}
            <div className="glass-card p-6 rounded-xl border border-white/5 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-neon-blue/10 rounded-lg text-neon-blue">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">
                    Motilal Nehru National Institute of Technology (MNNIT)
                  </h4>
                  <p className="text-sm text-neon-blue font-mono">Allahabad, India • 2023 - 2027</p>
                  <p className="text-base text-slate-200 mt-1 font-semibold">
                    Bachelor of Technology in Computer Science & Engineering
                  </p>
                </div>
              </div>
            </div>

            {/* Achievements / Profiles Title */}
            <h4 className="text-lg font-bold text-white font-mono pt-2">
              &gt; Competitive Programming Statistics
            </h4>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stats.map((stat, idx) => (
                <a
                  href={stat.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={idx}
                  className="glass-card p-5 rounded-xl border border-white/5 hover:border-slate-500/30 hover:bg-slate-900/50 transition-all group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-bold text-white group-hover:text-slate-300 transition-colors">
                      {stat.title}
                    </span>
                    <div className="text-subtext-gray group-hover:text-white transition-colors">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="font-mono text-slate-300 text-sm font-semibold">{stat.metric}</div>
                  <div className="text-xs text-slate-500 font-mono mb-2 group-hover:text-neon-blue transition-colors">{stat.sub}</div>
                  <p className="text-xs text-subtext-gray leading-relaxed">{stat.desc}</p>
                </a>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
