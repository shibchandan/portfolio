import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-white/5 bg-white/40 dark:bg-slate-950/40 select-none">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <div className="text-xs text-slate-600 dark:text-subtext-gray font-mono">
          © {new Date().getFullYear()} Shib Chandan Mistry. All rights reserved.
        </div>
        
        {/* Engineering Info */}
        <div className="text-[10px] md:text-xs text-slate-500 dark:text-subtext-gray/80 font-mono text-center md:text-right">
          Designed & Built from scratch. Optimized for performance and security.
        </div>
      </div>
    </footer>
  );
}
