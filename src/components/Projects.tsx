"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "NeoVida – Medical Management System",
    description: "A medical management system developed as an academic project to organize and manage patient information using a structured database.",
    technologies: ["C#", "SQL Server", "Visual Studio"],
    githubUrl: "#", // Replace with actual URL later
    link: "/projects/neovida"
  },
  {
    title: "Teatro Chino TCL – Cinema Management System",
    description: "A cinema management system developed as a final project for a Programming II course, designed to manage movies, cinema rooms, and ticket sales.",
    technologies: ["C++", "Object-Oriented Programming", "File Management"],
    githubUrl: "#", // Replace with actual URL later
    link: "/projects/teatro_chino"
  },
  {
    title: "GREED – Game Development Project",
    description: "A game developed as part of a programming assignment focused on logic, algorithms and control structures.",
    technologies: ["C Programming Language", "Algorithms", "Game Logic"],
    githubUrl: "#", // Replace with actual URL later
    link: "/projects/greed"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-zinc-200 dark:border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-sm font-mono text-zinc-500 mb-12 uppercase tracking-wider">
          ~/ projects
        </h3>
        
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative p-6 flex flex-col rounded-2xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:bg-zinc-200 dark:hover:bg-white/10 hover:shadow-[0_0_30px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] transition-all"
            >
              <div className="flex justify-between items-start gap-4 mb-4">
                <h4 className="text-xl font-semibold text-zinc-900 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">
                  {project.title}
                </h4>
                <div className="flex gap-3 text-zinc-500 dark:text-zinc-400">
                  <Link 
                    href={project.githubUrl}
                    className="hover:text-zinc-900 dark:hover:text-white transition-colors p-1"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <Github size={20} />
                  </Link>
                  <Link 
                    href="#"
                    className="hover:text-zinc-900 dark:hover:text-white transition-colors p-1"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <ExternalLink size={20} />
                  </Link>
                </div>
              </div>
              
              <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1 text-xs font-medium bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full border border-zinc-300 dark:border-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {(project as any).link && (
                <div className="mt-auto pt-4 border-t border-zinc-200 dark:border-white/10 flex justify-end">
                  <Link 
                    href={(project as any).link}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white dark:text-zinc-900 bg-zinc-900 dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 rounded-lg transition-colors"
                  >
                    View Project
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
