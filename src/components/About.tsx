"use client";

import { motion } from "framer-motion";

import { Code2, MapPin, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 border-t border-zinc-200 dark:border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-sm font-mono text-zinc-500 mb-8 uppercase tracking-wider">
          {t.about.title}
        </h3>
        
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 prose prose-invert max-w-none text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg space-y-6">
            <p>
              {t.about.p1_start} <strong className="text-zinc-900 dark:text-zinc-200 font-semibold">{t.about.p1_strong}</strong> {t.about.p1_end}
            </p>
            <p>
              {t.about.p2}
            </p>
          </div>

          {/* Developer Highlight Box */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 p-6 rounded-2xl flex flex-col gap-4 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
              <GraduationCap size={20} className="text-emerald-400" />
              <span className="text-sm font-medium">{t.about.student}</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
              <MapPin size={20} className="text-blue-400" />
              <span className="text-sm font-medium">{t.about.university}</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
              <Code2 size={20} className="text-purple-400" />
              <span className="text-sm font-medium">{t.about.development}</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
