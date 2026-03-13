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
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-white">
          Alan Azezian
        </h1>
        <h2 className="text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400 mb-6 font-medium">
          {t.hero.subtitle}
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed max-w-xl">
          {t.hero.description}
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-full font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
          >
            <SearchCode size={18} />
            {t.hero.viewProjects}
          </Link>
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=agazezian@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white px-6 py-2.5 rounded-full font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
          >
            <Mail size={18} />
            {t.hero.contact}
          </Link>
          <Link
            href="https://github.com/AlanAzezian"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-zinc-100 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white px-6 py-2.5 rounded-full font-medium hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
          >
            <Github size={18} />
            {t.hero.github}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
