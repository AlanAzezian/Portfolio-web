"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Gamepad2, Code2, Cpu, GraduationCap, Repeat, CornerRightDown } from "lucide-react";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function GreedProject() {
  const { t } = useLanguage();
  const project = t.projects.details.greed;

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
            {t.projects.items.greed.title}
          </h1>
          
          <div className="flex flex-wrap gap-3 mb-8">
            {["C++", "Algorithms", "Structured Programming"].map((tech) => (
              <span 
                key={tech} 
                className="px-4 py-1.5 text-sm font-medium bg-zinc-200/50 dark:bg-white/5 text-zinc-700 dark:text-zinc-200 rounded-full border border-zinc-300 dark:border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
            {project.p1}
          </p>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-zinc-200">{project.responsibilitiesTitle}</h3>
            <ul className="space-y-3">
              {project.responsibilities?.map((resp: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-zinc-600 dark:text-zinc-400">
                  <span className="text-zinc-400 dark:text-zinc-500 font-bold mt-0.5">•</span>
                  <span className="leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>
          </div>
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
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-orange-500/10 opacity-50 group-hover:opacity-100 transition-opacity" />
            <Gamepad2 className="w-12 h-12 text-zinc-400 dark:text-zinc-600" />
          </div>
          <div className="aspect-video bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden group shadow-sm dark:shadow-none">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-amber-500/10 opacity-50 group-hover:opacity-100 transition-opacity" />
            <Code2 className="w-12 h-12 text-zinc-400 dark:text-zinc-600" />
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
            <Repeat className="text-zinc-500 dark:text-zinc-400" size={24} />
            <h2 className="text-2xl font-semibold">{project.architecture}</h2>
          </div>
          
          <div className="bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 p-8 rounded-2xl mb-6 shadow-sm dark:shadow-none">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative">
              {/* Connection lines for desktop */}
              <div className="hidden md:block absolute top-[45%] left-[10%] right-[10%] h-0.5 bg-zinc-200 dark:bg-white/10 z-0" />
              
              {/* Player Input */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-zinc-50 dark:bg-zinc-900 border border-orange-200 dark:border-orange-500/20 p-5 rounded-xl text-center shadow-lg relative z-10 group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent group-hover:opacity-100 transition-opacity rounded-xl" />
                <div className="text-orange-600 dark:text-orange-400 font-semibold mb-2 relative z-10 text-sm md:text-base">Player Input</div>
                <div className="text-xs text-orange-600/70 dark:text-orange-500/70 font-mono relative z-10">Console (scanf)</div>
              </motion.div>

              {/* Mobile connector */}
              <div className="md:hidden absolute top-[15%] left-1/2 -translate-x-1/2 text-zinc-400 dark:text-white/20">
                <CornerRightDown size={20} />
              </div>

              {/* Game Logic */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-zinc-50 dark:bg-zinc-900 border border-yellow-200 dark:border-yellow-500/20 p-5 rounded-xl text-center shadow-lg relative z-10 group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent group-hover:opacity-100 transition-opacity rounded-xl" />
                <div className="text-yellow-600 dark:text-yellow-400 font-semibold mb-2 relative z-10 text-sm md:text-base">Game Logic</div>
                <div className="text-xs text-yellow-600/70 dark:text-yellow-500/70 font-mono relative z-10">Algorithms</div>
              </motion.div>

               {/* Mobile connector */}
               <div className="md:hidden absolute top-[40%] left-1/2 -translate-x-1/2 text-zinc-400 dark:text-white/20">
                <CornerRightDown size={20} />
              </div>

              {/* State Update */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-zinc-50 dark:bg-zinc-900 border border-emerald-200 dark:border-emerald-500/20 p-5 rounded-xl text-center shadow-lg relative z-10 group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent group-hover:opacity-100 transition-opacity rounded-xl" />
                <div className="text-emerald-600 dark:text-emerald-400 font-semibold mb-2 relative z-10 text-sm md:text-base">State Update</div>
                <div className="text-xs text-emerald-600/70 dark:text-emerald-500/70 font-mono relative z-10">Variables</div>
              </motion.div>

               {/* Mobile connector */}
               <div className="md:hidden absolute top-[65%] left-1/2 -translate-x-1/2 text-zinc-400 dark:text-white/20">
                <CornerRightDown size={20} />
              </div>

              {/* Output */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-zinc-50 dark:bg-zinc-900 border border-sky-200 dark:border-sky-500/20 p-5 rounded-xl text-center shadow-lg relative z-10 group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-sky-500/5 to-transparent group-hover:opacity-100 transition-opacity rounded-xl" />
                <div className="text-sky-600 dark:text-sky-400 font-semibold mb-2 relative z-10 text-sm md:text-base">Console Output</div>
                <div className="text-xs text-sky-600/70 dark:text-sky-500/70 font-mono relative z-10">printf Render</div>
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
              <Cpu className="text-zinc-500 dark:text-zinc-400" size={24} />
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20">
                <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400 animate-pulse" />
                <span className="text-sm font-medium">{t.statusTags.completed}</span>
              </div>
              <p className="mt-3 text-sm text-zinc-500">
                {t.statusTags.greedDetail}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
