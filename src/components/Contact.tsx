"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <footer id="contact" className="py-20 border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row justify-between items-center gap-8"
      >
        <div className="text-center md:text-left">
          <h3 className="text-sm font-mono text-zinc-500 mb-4 uppercase tracking-wider">
            ~/ say hi
          </h3>
          <p className="text-zinc-400">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=agazezian@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
          >
            <Mail size={20} />
            <span className="hidden sm:inline">Email</span>
          </Link>
          <Link
            href="https://github.com/AlanAzezian"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
          >
            <Github size={20} />
            <span className="hidden sm:inline">GitHub</span>
          </Link>
          <Link
            href="#"
            className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
          >
            <Linkedin size={20} />
            <span className="hidden sm:inline">LinkedIn</span>
          </Link>
        </div>
      </motion.div>
      
      <div className="mt-20 text-center text-sm text-zinc-600">
        <p>© {new Date().getFullYear()} Alan Azezian. All rights reserved.</p>
      </div>
    </footer>
  );
}
