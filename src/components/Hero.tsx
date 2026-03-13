"use client";

import { motion } from "framer-motion";
import { Github, Mail, SearchCode } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent pb-1">
          Alan Azezian
        </h1>
        <h2 className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-300 mb-8 font-medium">
          {t.hero.subtitle}
        </h2>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed max-w-xl">
          {t.hero.description}
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-7 py-3 rounded-full font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-900/20 dark:hover:shadow-white/20 transition-all duration-300"
          >
            <SearchCode size={18} />
            {t.hero.viewProjects}
          </Link>
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=agazezian@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white px-7 py-3 rounded-full font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-200 dark:hover:shadow-none transition-all duration-300"
          >
            <Mail size={18} />
            {t.hero.contact}
          </Link>
          <Link
            href="https://github.com/AlanAzezian"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white px-7 py-3 rounded-full font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:-translate-y-1 hover:shadow-lg hover:shadow-zinc-200 dark:hover:shadow-none transition-all duration-300"
          >
            <Github size={18} />
            {t.hero.github}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
