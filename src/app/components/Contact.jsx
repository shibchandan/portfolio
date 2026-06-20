"use client";

import React, { useState } from "react";
import { Mail, Phone, Send, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./Icons";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, submitting, success, error
  const [logs, setLogs] = useState([]);

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/shibchandan", icon: <GithubIcon size={20} />, color: "hover:text-slate-900 dark:hover:text-white" },
    { name: "LinkedIn", href: "https://linkedin.com/in/shib-chandan-mistry-698455283", icon: <LinkedinIcon size={20} />, color: "hover:text-blue-600 dark:hover:text-neon-blue" },
    { name: "Instagram", href: "https://www.instagram.com/shibchandan11/", icon: <InstagramIcon size={20} />, color: "hover:text-purple-600 dark:hover:text-neon-purple" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");
    setLogs(["[*] Contact API gate activated...", "[*] Validating email parameters..."]);

    try {
      // Send data to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "", // Using env variable
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setLogs((prev) => [
          ...prev,
          "[+] Parameters verified. Name: " + formData.name,
          "[info] Establishing secure connection to Web3Forms...",
          "[+] Message packet sealed & dispatched."
        ]);
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || "Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setLogs((prev) => [
        ...prev,
        "[-] ERROR: Transmission failed. Check Web3Forms Key.",
      ]);
      setStatus("error");
      
      // Revert back to idle after 3 seconds so user can try again
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("shibchandan11@gmail.com");
    alert("Email copied to clipboard!");
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative Blur BG */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 dark:bg-neon-blue/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-2 text-slate-900 dark:text-white">
            Get In <span className="text-slate-500 dark:text-slate-400">Touch</span>
          </h2>
          <p className="text-slate-600 dark:text-subtext-gray text-sm md:text-base max-w-lg mt-2 font-mono">
            Have an opening or looking to build a high-performance system together? Let's connect.
          </p>
          <div className="w-12 h-1 bg-slate-300 dark:bg-slate-700 rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-mono">
              &gt; Direct Channels
            </h3>
            
            <p className="text-slate-600 dark:text-subtext-gray leading-relaxed text-sm md:text-base">
              I’m actively looking for full-time software engineering roles and systems development opportunities. Reach out via email, phone, or any of my social profiles.
            </p>

            {/* Info Cards */}
            <div className="space-y-4">
              {/* Email */}
              <div 
                onClick={handleCopyEmail}
                className="glass-card p-4 rounded-xl flex items-center gap-4 cursor-pointer hover:border-blue-300 dark:hover:border-neon-blue/35 transition-all group shadow-sm dark:shadow-none"
              >
                <div className="p-3 bg-blue-50 text-blue-600 group-hover:bg-blue-100 dark:bg-neon-blue/10 rounded-lg dark:text-neon-blue dark:group-hover:bg-neon-blue/20 transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-widest text-slate-500 dark:text-subtext-gray">Email (Click to copy)</div>
                  <div className="text-sm md:text-base font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-neon-blue transition-colors">
                    shibchandan11@gmail.com
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="glass-card p-4 rounded-xl flex items-center gap-4 hover:border-emerald-300 dark:hover:border-neon-green/35 transition-all group shadow-sm dark:shadow-none">
                <div className="p-3 bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100 dark:bg-neon-green/10 rounded-lg dark:text-neon-green dark:group-hover:bg-neon-green/20 transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono tracking-widest text-slate-500 dark:text-subtext-gray">Phone</div>
                  <div className="text-sm md:text-base font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-neon-green transition-colors">
                    +91 91237 17699
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white font-mono uppercase tracking-wider">
                &gt; Alternate Indexes
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 text-slate-500 dark:text-subtext-gray ${social.color} rounded-xl transition-all hover:scale-105 shadow-sm dark:shadow-md`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Side: Contact Form + Interactive Logs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 glass-card p-6 md:p-8 rounded-xl shadow-sm dark:shadow-none space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-mono flex items-center gap-2">
              <Terminal size={20} className="text-emerald-600 dark:text-neon-green" />
              Write Message
            </h3>

            {status !== "success" ? (
              <form onSubmit={handleFormSubmit} className="space-y-4 font-mono text-sm">
                <div>
                  <label htmlFor="name" className="block text-xs text-slate-600 dark:text-subtext-gray mb-1.5 uppercase tracking-wide">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your name"
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-text-light focus:outline-none focus:border-slate-500 dark:focus:border-white focus:bg-white dark:focus:bg-slate-900 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs text-slate-600 dark:text-subtext-gray mb-1.5 uppercase tracking-wide">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="name@company.com"
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-text-light focus:outline-none focus:border-slate-500 dark:focus:border-white focus:bg-white dark:focus:bg-slate-900 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs text-slate-600 dark:text-subtext-gray mb-1.5 uppercase tracking-wide">Message Payload</label>
                  <textarea
                    id="message"
                    name="message"
                    autoComplete="off"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Write detailed specifications..."
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-text-light focus:outline-none focus:border-slate-500 dark:focus:border-white focus:bg-white dark:focus:bg-slate-900 transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white dark:bg-white dark:hover:bg-slate-200 dark:text-slate-900 font-bold py-3 rounded-lg shadow-lg cursor-pointer transform active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                  <span>{status === "submitting" ? "Transmitting..." : "Send Secure Message"}</span>
                </button>
              </form>
            ) : (
              /* Success Terminal Log Visual */
              <div className="font-mono text-xs md:text-sm bg-slate-900 dark:bg-slate-950 border border-slate-700 dark:border-white/10 rounded-lg p-5 space-y-2 relative">
                <div className="absolute inset-0 pointer-events-none scanlines z-10 opacity-15"></div>
                
                {logs.map((log, idx) => (
                  <div key={idx} className={log.startsWith("[+") ? "text-neon-green" : log.startsWith("[info]") ? "text-neon-purple" : "text-subtext-gray"}>
                    {log}
                  </div>
                ))}
                
                <div className="text-white font-bold pt-4 text-center">
                  [+] Transmission Finished successfully!
                </div>
                
                <button
                  onClick={() => setStatus("idle")}
                  className="w-full mt-4 bg-slate-800 dark:bg-slate-900 border border-slate-700 dark:border-white/10 hover:border-emerald-500 hover:text-emerald-500 dark:hover:border-neon-green dark:hover:text-neon-green text-slate-300 dark:text-text-light py-2 rounded-lg transition-all cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
