"use client";

import { motion } from "framer-motion";
import { FolderGit2, Blocks, Building2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    {
      label: t.stats.projectsTitle,
      value: "3",
      icon: FolderGit2,
      color: "text-blue-400",
      bg: "bg-blue-400/10",
      border: "border-blue-400/20"
    },
    {
      label: t.stats.techTitle,
      value: "6+",
      icon: Blocks,
      color: "text-purple-400",
      bg: "bg-purple-400/10",
      border: "border-purple-400/20"
    },
    {
      label: t.stats.studyTitle,
      value: "UTN",
      subtext: t.stats.studySub,
      icon: Building2,
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
      border: "border-emerald-400/20"
    }
  ];

  return (
    <section className="py-12 border-t border-zinc-200 dark:border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="flex flex-col items-center sm:items-start p-6 rounded-2xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors group"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} ${stat.border} border group-hover:scale-110 transition-transform`}>
                <stat.icon size={24} />
              </div>
              <h3 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
                {stat.value}
              </h3>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 font-medium">
              {stat.label}
            </p>
            {stat.subtext && (
              <p className="text-xs text-zinc-500 mt-1">
                {stat.subtext}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
