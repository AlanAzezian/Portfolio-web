"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Database, Layout, Server, GraduationCap, ArrowDown } from "lucide-react";
import React from "react";

export default function NeoVidaProject() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-sans selection:bg-white/20">
      <div className="glow-overlay" />
      
      <div className="max-w-4xl mx-auto px-6 sm:px-12 md:px-24 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            NeoVida – Medical Management System
          </h1>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {["C#", "SQL Server", "Visual Studio", "Relational Databases"].map((tech) => (
              <span 
                key={tech} 
                className="px-4 py-1.5 text-sm font-medium bg-white/5 text-zinc-200 rounded-full border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-lg text-zinc-400 leading-relaxed mb-12">
            NeoVida is a management system developed as an academic project with the goal of organizing and managing medical information within a healthcare environment. 
            The system allows users to register, consult and update patient information while storing data in a structured database.
          </p>
        </motion.div>

        {/* Screenshots placeholders */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-2 mb-16"
        >
          <div className="aspect-video bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-50 group-hover:opacity-100 transition-opacity" />
            <Layout className="w-12 h-12 text-zinc-600" />
          </div>
          <div className="aspect-video bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-50 group-hover:opacity-100 transition-opacity" />
            <Database className="w-12 h-12 text-zinc-600" />
          </div>
        </motion.div>

        {/* Project Architecture */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Server className="text-zinc-400" size={24} />
            <h2 className="text-2xl font-semibold">Project Architecture</h2>
          </div>
          
          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl mb-6">
            <div className="flex flex-col items-center justify-center gap-4 max-w-sm mx-auto">
              {/* UI */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-full bg-zinc-900 border border-zinc-700/50 p-4 rounded-xl text-center shadow-lg"
              >
                <div className="text-zinc-200 font-semibold mb-1">User Interface</div>
                <div className="text-xs text-zinc-500 font-mono">WinForms / XAML</div>
              </motion.div>

              <ArrowDown className="text-zinc-500 animate-bounce" size={24} />

              {/* Logic */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-full bg-zinc-900 border border-emerald-500/20 p-4 rounded-xl text-center shadow-lg relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 group-hover:opacity-100 transition-opacity" />
                <div className="text-emerald-400 font-semibold mb-1 relative z-10">Application Logic</div>
                <div className="text-xs text-emerald-500/70 font-mono relative z-10">C# Processing</div>
              </motion.div>

              <ArrowDown className="text-zinc-500 animate-bounce" size={24} />

              {/* Database */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-full bg-zinc-900 border border-blue-500/20 p-4 rounded-xl text-center shadow-lg relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 group-hover:opacity-100 transition-opacity" />
                <div className="text-blue-400 font-semibold mb-1 relative z-10">SQL Server Database</div>
                <div className="text-xs text-blue-500/70 font-mono relative z-10">Relational Data</div>
              </motion.div>
            </div>
          </div>
          <p className="text-zinc-400 leading-relaxed bg-white/5 border border-white/10 p-6 rounded-2xl">
            The application interacts heavily with a relational database to store and retrieve patient profiles, medical histories, and system configurations. The structured C# logic layer acts as a bridge ensuring safe query execution and data validation before displaying it on the interface.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Features */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Server className="text-zinc-400" size={24} />
              <h2 className="text-2xl font-semibold">Main Features</h2>
            </div>
            <ul className="space-y-4">
              {[
                "Patient registration",
                "Medical data consultation",
                "Data update and modification",
                "Database-based data organization",
                "Interaction between the application and SQL Server"
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-400">
                  <CheckCircle2 size={20} className="text-zinc-500 mt-0.5 shrink-0" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Learnings */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <GraduationCap className="text-zinc-400" size={24} />
                <h2 className="text-2xl font-semibold">What I Learned</h2>
              </div>
              <p className="text-zinc-400 leading-relaxed bg-white/5 border border-white/10 p-6 rounded-2xl">
                During the development of NeoVida I learned how to design and structure relational databases, 
                connect an application with SQL Server and organize the logic behind a management system. 
                This project helped strengthen my programming and data management skills.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Project Status</h2>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium">Completed academic project</span>
              </div>
              <p className="mt-3 text-sm text-zinc-500">
                Can continue evolving with new features and improvements.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
