"use client";

import { motion } from "framer-motion";
import { BookOpen, Gamepad2, HeartPulse, PlaySquare } from "lucide-react";

export default function Timeline() {
  const timelineEvents = [
    {
      title: "Start Programming Studies",
      organization: "UTN General Pacheco",
      description: "Began my journey into software development, learning foundational concepts.",
      icon: BookOpen,
      color: "bg-blue-500",
      glow: "shadow-[0_0_15px_rgba(59,130,246,0.5)]"
    },
    {
      title: "Developed GREED Game Project",
      organization: "Academic Project",
      description: "Applied logical thinking and control structures in C to build a functional console game.",
      icon: Gamepad2,
      color: "bg-purple-500",
      glow: "shadow-[0_0_15px_rgba(168,85,247,0.5)]"
    },
    {
      title: "Developed Teatro Chino System",
      organization: "Final Course Project (Programming II)",
      description: "Built a cinema management system using C++, Object-Oriented Programming, and File Management.",
      icon: PlaySquare,
      color: "bg-rose-500",
      glow: "shadow-[0_0_15px_rgba(244,63,94,0.5)]"
    },
    {
      title: "Developed NeoVida Management System",
      organization: "Academic Project",
      description: "Structured relational databases with SQL Server and connected them via C# logic.",
      icon: HeartPulse,
      color: "bg-emerald-500",
      glow: "shadow-[0_0_15px_rgba(16,185,129,0.5)]"
    }
  ];

  return (
    <section id="timeline" className="py-20 border-t border-zinc-200 dark:border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-sm font-mono text-zinc-500 mb-12 uppercase tracking-wider">
          ~/ journey
        </h3>

        <div className="relative border-l border-zinc-200 dark:border-white/10 ml-4 md:ml-6 space-y-12">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Timeline dot */}
              <div 
                className={`absolute w-4 h-4 rounded-full ${event.color} ${event.glow} -left-[8.5px] top-6 border-4 border-zinc-50 dark:border-[#0a0a0a] group-hover:scale-125 transition-transform`} 
              />
              
              <div className="bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 p-6 rounded-2xl hover:bg-zinc-200 dark:hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <event.icon className="text-zinc-500 dark:text-zinc-400" size={20} />
                  <h4 className="text-xl font-semibold text-zinc-900 dark:text-zinc-200">
                    {event.title}
                  </h4>
                </div>
                <div className="text-sm font-medium text-zinc-500 mb-4 font-mono">
                  {event.organization}
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
