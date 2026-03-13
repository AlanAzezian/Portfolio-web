"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t.projects.items.neovida.title,
      description: t.projects.items.neovida.desc,
      technologies: ["C#", "SQL Server", "Visual Studio"],
      githubUrl: "#", // Replace with actual URL later
      link: "/projects/neovida",
      image: "/projects/neovida/cover.png"
    },
    {
      title: t.projects.items.teatro.title,
      description: t.projects.items.teatro.desc,
      technologies: ["C++", "Object-Oriented Programming", "File Management"],
      githubUrl: "#", // Replace with actual URL later
      link: "/projects/teatro_chino",
      image: "/projects/teatro_chino/menu_principal.png"
    },
    {
      title: t.projects.items.greed.title,
      description: t.projects.items.greed.desc,
      technologies: ["C Programming Language", "Algorithms", "Game Logic"],
      githubUrl: "#", // Replace with actual URL later
      link: "/projects/greed",
      image: "/projects/greed/cover.png"
    }
  ];

  return (
    <section id="projects" className="py-20 border-t border-zinc-200 dark:border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-sm font-mono text-zinc-500 mb-12 uppercase tracking-wider">
          {t.projects.title}
        </h3>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative flex flex-col rounded-2xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 hover:bg-zinc-200 dark:hover:bg-white/10 hover:shadow-xl hover:shadow-zinc-300 dark:hover:shadow-black/50 overflow-hidden transition-all duration-300"
            >
              {/* Project Image Box */}
              <Link href={project.link || "#"} className="relative aspect-video w-full overflow-hidden bg-zinc-300 dark:bg-zinc-800 focus:outline-none">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out" 
                />
              </Link>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h4 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title.split(" – ")[0]}
                  </h4>
                  <div className="flex gap-3 text-zinc-500 dark:text-zinc-400">
                    <Link 
                      href={project.githubUrl}
                      className="hover:text-zinc-900 dark:hover:text-white hover:scale-110 transition-all p-1"
                      aria-label={`GitHub repository for ${project.title}`}
                    >
                      <Github size={20} />
                    </Link>
                    <Link 
                      href={project.link || "#"}
                      className="hover:text-zinc-900 dark:hover:text-white hover:scale-110 transition-all p-1"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </Link>
                  </div>
                </div>
                
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-xs font-semibold bg-zinc-200/50 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 rounded-full border border-zinc-300/50 dark:border-zinc-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {(project as any).link && (
                  <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-white/10 flex justify-end">
                    <Link 
                      href={(project as any).link}
                      className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white dark:text-zinc-900 bg-zinc-900 dark:bg-white hover:bg-zinc-800 dark:hover:bg-zinc-200 rounded-lg transition-colors duration-300"
                    >
                      {t.projects.viewProject}
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
