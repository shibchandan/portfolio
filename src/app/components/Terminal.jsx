"use client";

import React, { useState, useEffect, useRef } from "react";

export default function Terminal() {
  const [visibleLines, setVisibleLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [stats, setStats] = useState({ leetCodeRating: 1703, problemsSolved: "920+" });
  const containerRef = useRef(null);

  useEffect(() => {
    fetch(`/api/stats?t=${Date.now()}`)
      .then((res) => {
        if (res.ok) return res.json();
      })
      .then((data) => {
        if (data && data.leetcode) {
          setStats({
            leetCodeRating: data.leetcode.rating,
            problemsSolved: data.leetcode.solved + "+"
          });
        }
      })
      .catch((err) => console.error("Terminal stats fetch error:", err));
  }, []);

  const terminalLines = [
    { text: "shibchandan@mnnit:~$ whoami", delay: 500, type: "input" },
    { text: "Shib Chandan Mistry | Full Stack Software Developer (MNNIT Allahabad)", delay: 800, type: "output" },
    { text: "shibchandan@mnnit:~$ cat config.json", delay: 600, type: "input" },
    { text: `{\n  "focus": "Systems Programming, AI Infra, Network Security",\n  "languages": ["C++", "Java", "JavaScript", "SQL"],\n  "leetCodeRating": ${stats.leetCodeRating},\n  "problemsSolved": "${stats.problemsSolved}"\n}`, delay: 1200, type: "output-code" },
    { text: "shibchandan@mnnit:~$ ./validate_crypto_gates", delay: 500, type: "input" },
    { text: "[*] Initializing Windows CNG module...", delay: 300, type: "output" },
    { text: "[+] AES-256-GCM cipher initialized", delay: 200, type: "output-success" },
    { text: "[+] RSA-2048 keypair generated successfully", delay: 200, type: "output-success" },
    { text: "[+] Sealed transaction metadata. No double-spending detected.", delay: 400, type: "output-success" },
    { text: "shibchandan@mnnit:~$ ./run_dpi_engine --file=traffic.pcap", delay: 600, type: "input" },
    { text: "[info] Capturing raw packets via kernel BPF...", delay: 300, type: "output" },
    { text: "[info] Grouping streams into 5-tuple sessions...", delay: 400, type: "output" },
    { text: "[info] Inspected 2,492 TCP frames. Found 0 network anomalies.", delay: 500, type: "output" },
    { text: "shibchandan@mnnit:~$ ./run_pragna_search --query=\"RAG embeddings\"", delay: 700, type: "input" },
    { text: "Traversing HNSW layers... Dynamic node insertion completed.", delay: 400, type: "output" },
    { text: "Nearest neighbor found! Cosine Similarity: 0.9412", delay: 500, type: "output-success" },
    { text: "shibchandan@mnnit:~$ clear", delay: 1000, type: "input" }
  ];

  useEffect(() => {
    if (currentLineIndex >= terminalLines.length) {
      // Loop the terminal animation
      const timeout = setTimeout(() => {
        setVisibleLines([]);
        setCurrentLineIndex(0);
        setTypedText("");
      }, 5000);
      return () => clearTimeout(timeout);
    }

    const currentLine = terminalLines[currentLineIndex];

    if (currentLine.type === "input") {
      // Simulate typing command
      let charIndex = 0;
      setTypedText("");
      
      const typingInterval = setInterval(() => {
        if (charIndex < currentLine.text.length) {
          setTypedText((prev) => prev + currentLine.text[charIndex]);
          charIndex++;
        } else {
          clearInterval(typingInterval);
          // Add typed line to visible output
          setVisibleLines((prev) => [...prev, { text: currentLine.text, type: "input" }]);
          setTypedText("");
          setCurrentLineIndex((prev) => prev + 1);
        }
      }, 40);

      return () => clearInterval(typingInterval);
    } else {
      // Simulate output rendering with a delay
      const outputTimeout = setTimeout(() => {
        setVisibleLines((prev) => [...prev, currentLine]);
        setCurrentLineIndex((prev) => prev + 1);
      }, currentLine.delay);

      return () => clearTimeout(outputTimeout);
    }
  }, [currentLineIndex]);

  useEffect(() => {
    // Scroll terminal container to bottom directly without affecting page scroll position
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [visibleLines, typedText]);

  return (
    <div className="w-full max-w-2xl glass-panel border border-white/40 dark:border-white/10 rounded-xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-2xl font-mono text-xs md:text-sm h-[320px] md:h-[400px] flex flex-col relative select-none backdrop-blur-xl">
      {/* Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none scanlines z-10 opacity-30"></div>

      {/* Terminal Titlebar */}
      <div className="terminal-header px-4 py-2 flex items-center justify-between z-20">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="text-slate-500 dark:text-subtext-gray/80 text-[10px] md:text-xs">shibchandan@mnnit: ~</div>
        <div className="w-4"></div>
      </div>

      {/* Terminal Console Output */}
      <div ref={containerRef} className="flex-1 overflow-y-auto p-4 md:p-6 space-y-2.5 z-20">
        {visibleLines.map((line, idx) => {
          if (line.type === "input") {
            return (
              <div key={idx} className="flex text-blue-600 dark:text-neon-blue">
                <span className="text-emerald-600 dark:text-neon-green mr-2">shibchandan@mnnit:~$</span>
                <span>{line.text.replace("shibchandan@mnnit:~$ ", "")}</span>
              </div>
            );
          } else if (line.type === "output-code") {
            return (
              <pre key={idx} className="text-purple-700 dark:text-purple-300 pl-4 whitespace-pre overflow-x-auto select-text leading-relaxed">
                {line.text}
              </pre>
            );
          } else if (line.type === "output-success") {
            return (
              <div key={idx} className="text-emerald-600 dark:text-neon-green pl-4 leading-relaxed flex items-start">
                <span className="mr-2">&gt;&gt;</span>
                <span className="select-text">{line.text}</span>
              </div>
            );
          } else {
            return (
              <div key={idx} className="text-slate-700 dark:text-slate-300 pl-4 leading-relaxed select-text">
                {line.text}
              </div>
            );
          }
        })}

        {/* Typing Line */}
        {currentLineIndex < terminalLines.length && terminalLines[currentLineIndex].type === "input" && (
          <div className="flex text-blue-600 dark:text-neon-blue">
            <span className="text-emerald-600 dark:text-neon-green mr-2">shibchandan@mnnit:~$</span>
            <span>{typedText.replace("shibchandan@mnnit:~$ ", "")}</span>
            <span className="w-2 h-4 bg-blue-600 dark:bg-neon-blue animate-pulse ml-0.5"></span>
          </div>
        )}

      </div>
    </div>
  );
}
