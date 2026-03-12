"use client";

import { motion } from "framer-motion";

import { Code2, MapPin, GraduationCap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-sm font-mono text-zinc-500 mb-8 uppercase tracking-wider">
          ~/ about me
        </h3>
        
        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 prose prose-invert max-w-none text-zinc-400 leading-relaxed text-lg space-y-6">
            <p>
              I am currently studying programming at <strong className="text-zinc-200 font-semibold">Universidad Tecnológica Nacional (UTN)</strong> in General Pacheco, Argentina. 
            </p>
            <p>
              I enjoy building software projects and solving problems through code. My goal is to continually grow as a developer, build efficient applications, and work in the software industry.
            </p>
          </div>

          {/* Developer Highlight Box */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col gap-4 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 text-zinc-300">
              <GraduationCap size={20} className="text-emerald-400" />
              <span className="text-sm font-medium">Programming Student</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-300">
              <MapPin size={20} className="text-blue-400" />
              <span className="text-sm font-medium">UTN General Pacheco</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-300">
              <Code2 size={20} className="text-purple-400" />
              <span className="text-sm font-medium">Software Development</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
