"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Database, Layout, Server, GraduationCap, ArrowDown } from "lucide-react";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function NeoVidaProject() {
  const { t } = useLanguage();
  const project = t.projects.details.neovida;

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-[#0a0a0a] text-zinc-900 dark:text-[#ededed] font-sans selection:bg-blue-500/20 dark:selection:bg-white/20 transition-colors duration-300">
      <div className="glow-overlay opacity-0 dark:opacity-100 transition-opacity duration-500" />
      
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
            className="inline-flex items-center gap-2 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            {t.backToProjects}
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {t.projects.items.neovida.title}
          </h1>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {["C#", "SQL Server", "Visual Studio", "Relational Databases"].map((tech) => (
              <span 
                key={tech} 
                className="px-4 py-1.5 text-sm font-medium bg-zinc-200/50 dark:bg-white/5 text-zinc-700 dark:text-zinc-200 rounded-full border border-zinc-300 dark:border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-12">
            {project.p1}
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
            <div className="aspect-video bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden group shadow-sm dark:shadow-none">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-50 group-hover:opacity-100 transition-opacity" />
              <Layout className="w-12 h-12 text-zinc-400 dark:text-zinc-600" />
            </div>
            <div className="aspect-video bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden group shadow-sm dark:shadow-none">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-50 group-hover:opacity-100 transition-opacity" />
              <Database className="w-12 h-12 text-zinc-400 dark:text-zinc-600" />
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
            <Server className="text-zinc-500 dark:text-zinc-400" size={24} />
            <h2 className="text-2xl font-semibold">{project.architecture}</h2>
          </div>
          
          <div className="bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 p-8 rounded-2xl mb-6 shadow-sm dark:shadow-none">
            <div className="flex flex-col items-center justify-center gap-4 max-w-sm mx-auto">
              {/* UI */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/50 p-4 rounded-xl text-center shadow-lg"
              >
                <div className="text-zinc-800 dark:text-zinc-200 font-semibold mb-1">User Interface</div>
                <div className="text-xs text-zinc-500 font-mono">WinForms / XAML</div>
              </motion.div>

              <ArrowDown className="text-zinc-400 dark:text-zinc-500 animate-bounce" size={24} />

              {/* Logic */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-full bg-zinc-50 dark:bg-zinc-900 border border-emerald-500/20 p-4 rounded-xl text-center shadow-lg relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 group-hover:opacity-100 transition-opacity" />
                <div className="text-emerald-600 dark:text-emerald-400 font-semibold mb-1 relative z-10">Application Logic</div>
                <div className="text-xs text-emerald-600/70 dark:text-emerald-500/70 font-mono relative z-10">C# Processing</div>
              </motion.div>

              <ArrowDown className="text-zinc-400 dark:text-zinc-500 animate-bounce" size={24} />

              {/* Database */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-full bg-zinc-50 dark:bg-zinc-900 border border-blue-500/20 p-4 rounded-xl text-center shadow-lg relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 group-hover:opacity-100 transition-opacity" />
                <div className="text-blue-600 dark:text-blue-400 font-semibold mb-1 relative z-10">SQL Server Database</div>
                <div className="text-xs text-blue-600/70 dark:text-blue-500/70 font-mono relative z-10">Relational Data</div>
              </motion.div>
            </div>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 p-6 rounded-2xl shadow-sm dark:shadow-none">
            {project.architectureDesc}
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
              <Server className="text-zinc-500 dark:text-zinc-400" size={24} />
              <h2 className="text-2xl font-semibold">{project.featuresTitle}</h2>
            </div>
            <ul className="space-y-4">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                  <CheckCircle2 size={20} className="text-zinc-400 dark:text-zinc-500 mt-0.5 shrink-0" />
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
                <GraduationCap className="text-zinc-500 dark:text-zinc-400" size={24} />
                <h2 className="text-2xl font-semibold">{project.learningsTitle}</h2>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 p-6 rounded-2xl shadow-sm dark:shadow-none">
                {project.learningsDesc}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">{project.statusTitle}</h2>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">
                <div className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                <span className="text-sm font-medium">{t.statusTags.completed}</span>
              </div>
              <p className="mt-3 text-sm text-zinc-500">
                {t.statusTags.neovidaDetail}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
