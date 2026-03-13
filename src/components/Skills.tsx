"use client";

import { motion } from "framer-motion";

import { Code2, Database, Terminal, Layout, FileJson, Braces, BookOpen } from "lucide-react";

const skills = [
  { name: "C", icon: Terminal, color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
  { name: "C#", icon: Code2, color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20" },
  { name: "SQL Server", icon: Database, color: "text-red-400", bg: "bg-red-400/10", border: "border-red-400/20" },
  { name: "Visual Studio", icon: Braces, color: "text-violet-400", bg: "bg-violet-400/10", border: "border-violet-400/20" },
  { name: "HTML", icon: Layout, color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/20" },
  { name: "CSS", icon: BookOpen, color: "text-sky-400", bg: "bg-sky-400/10", border: "border-sky-400/20" },
  { name: "JavaScript", icon: FileJson, color: "text-yellow-400", bg: "bg-yellow-400/10", border: "border-yellow-400/20" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-zinc-200 dark:border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-sm font-mono text-zinc-500 mb-12 uppercase tracking-wider">
          ~/ skills
        </h3>
        
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
                type: "spring",
                stiffness: 100,
              }}
              className={`flex items-center gap-3 px-6 py-4 bg-zinc-100/80 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-white/10 rounded-2xl text-zinc-700 dark:text-zinc-300 font-medium hover:bg-zinc-200 dark:hover:bg-white/5 transition-all cursor-default select-none shadow-sm`}
            >
              <div className={`p-2 rounded-lg ${skill.bg} ${skill.color} ${skill.border} border`}>
                <skill.icon size={20} />
              </div>
              <span className="text-sm md:text-base">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
