"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Clapperboard, MonitorPlay, BarChart3, Database, GraduationCap, ServerCog, CornerDownRight, FileCog, Network, ImageIcon, Ticket, PieChart, ChevronLeft, ChevronRight, X } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function TeatroChinoProject() {
  const [movieSlideIndex, setMovieSlideIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const movieSlides = [
    {
      title: "Movie Menu",
      description: "Screen of the movie management menu where the user can access system operations related to movies.",
      image: "/projects/teatro_chino/menu_peliculas.png",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Movie Registration",
      description: "Console form where the user inputs the necessary data to register a new movie in the system.",
      image: "/projects/teatro_chino/alta_peliculas.png",
      color: "from-emerald-500/20 to-teal-500/20"
    },
    {
      title: "Movie List",
      description: "Screen where the system displays all stored movies, allowing visualization of the registered information.",
      image: "/projects/teatro_chino/listado_peliculas.png",
      color: "from-rose-500/20 to-orange-500/20"
    }
  ];

  const handleNextMovie = () => {
    setMovieSlideIndex((prev) => (prev + 1) % movieSlides.length);
  };

  const handlePrevMovie = () => {
    setMovieSlideIndex((prev) => (prev === 0 ? movieSlides.length - 1 : prev - 1));
  };

  const [ticketSlideIndex, setTicketSlideIndex] = useState(0);

  const ticketSlides = [
    {
      title: "Ticket Sales",
      description: "Screen where the user selects the movie and the number of tickets to sell, initiating the registration process of a sale.",
      image: "/projects/teatro_chino/venta_entradas.png",
      color: "from-fuchsia-500/20 to-pink-500/20"
    },
    {
      title: "Sale Confirmation",
      description: "Screen where the system displays the transaction summary and confirms the registration of the completed sale.",
      image: "/projects/teatro_chino/confirmacion_venta.png",
      color: "from-sky-500/20 to-indigo-500/20"
    },
    {
      title: "Sales List",
      description: "Screen showing all sales registered in the system, allowing the user to view the stored operations.",
      image: "/projects/teatro_chino/listado_ventas.png",
      color: "from-amber-500/20 to-orange-500/20"
    }
  ];

  const handleNextTicket = () => {
    setTicketSlideIndex((prev) => (prev + 1) % ticketSlides.length);
  };

  const handlePrevTicket = () => {
    setTicketSlideIndex((prev) => (prev === 0 ? ticketSlides.length - 1 : prev - 1));
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen font-sans selection:bg-white/20">
      <div className="max-w-4xl mx-auto px-6 sm:px-12 md:px-24 py-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Teatro Chino TCL – Cinema Management System
          </h1>

          <div className="flex flex-wrap gap-3 mb-8">
            {["C++", "Object-Oriented Programming", "Binary Files", "Structured Programming"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 text-sm font-medium bg-white/5 text-zinc-200 rounded-full border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="text-lg text-zinc-400 leading-relaxed mb-6">
            This project is a cinema management system developed as a final project for a Programming II course. The system was designed to manage information related to movies, cinema rooms and ticket sales.
          </p>
          <p className="text-lg text-zinc-400 leading-relaxed mb-12">
            The program allows users to register movies, assign them to cinema rooms, manage ticket sales and generate operational reports. The system uses object-oriented programming and file-based data storage to simulate the management of a real cinema.
          </p>
        </motion.div>

        {/* Screenshots placeholders */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid gap-6 md:grid-cols-2 mb-16"
        >
          <div className="aspect-video bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-blue-500/10 opacity-50 group-hover:opacity-100 transition-opacity" />
            <Clapperboard className="w-12 h-12 text-zinc-600" />
          </div>
          <div className="aspect-video bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-red-500/10 opacity-50 group-hover:opacity-100 transition-opacity" />
            <MonitorPlay className="w-12 h-12 text-zinc-600" />
          </div>
        </motion.div>

        {/* Project Architecture */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <Network className="text-zinc-400" size={24} />
            <h2 className="text-2xl font-semibold">Project Architecture</h2>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-2xl mb-6">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Entities Layer */}
              <div className="flex flex-col gap-3 relative">
                <div className="text-sm font-mono text-zinc-500 mb-2 uppercase tracking-wider text-center">Core Entities</div>
                {['Movie', 'Room', 'Sale', 'Date'].map((entity, i) => (
                  <motion.div
                    key={entity}
                    whileHover={{ x: 5 }}
                    className="bg-zinc-900 border border-violet-500/30 p-3 rounded-lg flex items-center gap-3 shadow-md relative group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Database size={16} className="text-violet-400 relative z-10" />
                    <span className="text-zinc-200 font-medium relative z-10">{entity} Class</span>
                  </motion.div>
                ))}
              </div>

              {/* Connector for desktop */}
              <div className="hidden md:flex justify-center text-zinc-600">
                <div className="h-full w-px bg-white/10 relative">
                  <div className="absolute top-1/2 -translate-y-1/2 -right-[12px] bg-[#0a0a0a] border border-white/10 rounded-full p-1 text-zinc-500 font-mono text-xs">I/O</div>
                </div>
              </div>

              {/* Connector for mobile */}
              <div className="flex md:hidden justify-center text-zinc-600 py-4">
                <div className="w-full h-px bg-white/10 relative">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-[12px] bg-[#0a0a0a] border border-white/10 rounded-full p-1 px-2 text-zinc-500 font-mono text-xs">I/O</div>
                </div>
              </div>

              {/* Data Storage Layer */}
              <div className="flex flex-col gap-3 relative">
                <div className="text-sm font-mono text-zinc-500 mb-2 uppercase tracking-wider text-center">Data Storage</div>
                {['ArchivoPeliculas', 'ArchivoSalas', 'ArchivoVentas'].map((file, i) => (
                  <motion.div
                    key={file}
                    whileHover={{ x: -5 }}
                    className="bg-zinc-900 border border-rose-500/30 p-3 rounded-lg flex items-center gap-3 shadow-md relative group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-l from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <FileCog size={16} className="text-rose-400 relative z-10" />
                    <span className="text-zinc-200 font-mono text-sm relative z-10">{file}.dat</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-zinc-400 leading-relaxed bg-white/5 border border-white/10 p-6 rounded-2xl">
            The system achieves a clean separation of concerns by isolating business logic into object-oriented entity classes. These entities communicate with a dedicated file management layer responsible for reading and writing binary data to disk, ensuring that the core logic remains independent of the storage mechanism.
          </p>
        </motion.div>

        {/* System Functionality Gallery */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <ImageIcon className="text-zinc-400" size={24} />
            <h2 className="text-2xl font-semibold">System Operation</h2>
          </div>

          <div className="flex flex-col gap-12">
            {/* Main Menu Screenshot */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-b from-indigo-500/20 to-purple-500/20 rounded-3xl blur opacity-0 group-hover:opacity-50 transition duration-500" />
              <div className="relative bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                {/* Image Header with dots */}
                <div className="h-10 border-b border-white/5 bg-black/40 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  <div className="flex-1 text-center font-mono text-xs text-zinc-500 mr-12">Main Menu</div>
                </div>
                {/* Image */}
                <div
                  className="relative aspect-video cursor-pointer"
                  onClick={() => setSelectedImage("/projects/teatro_chino/menu_principal.png")}
                >
                  <Image
                    src="/projects/teatro_chino/menu_principal.png"
                    alt="Cinema System Main Menu"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Image Description */}
              <div className="mt-6 flex flex-col items-center text-center max-w-2xl mx-auto">
                <h3 className="text-xl font-medium text-zinc-200 mb-2">Main Menu</h3>
                <p className="text-zinc-500">
                  Initial screen of the C++ cinema management system. From this menu, the user can access features like movie management, ticket sales, queries, and report generation.
                </p>
              </div>
            </motion.div>

            {/* Movie Management Subsection */}
            <div className="mt-8">
              <div className="flex items-center gap-3 mb-8">
                <Clapperboard className="text-violet-400" size={20} />
                <h3 className="text-xl font-semibold text-zinc-100">Movie Management</h3>
              </div>

              {/* Carousel */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-b ${movieSlides[movieSlideIndex].color} rounded-3xl blur opacity-0 group-hover:opacity-50 transition duration-500`} />
                <div className="relative bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Header */}
                  <div className="h-10 border-b border-white/5 bg-black/40 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    <div className="flex-1 text-center font-mono text-xs text-zinc-500 mr-12">
                      {movieSlides[movieSlideIndex].title} ({movieSlideIndex + 1}/{movieSlides.length})
                    </div>
                  </div>

                  {/* Image Area with Nav Controls */}
                  <div
                    className="relative aspect-video group/nav cursor-pointer"
                    onClick={() => setSelectedImage(movieSlides[movieSlideIndex].image)}
                  >
                    <Image
                      src={movieSlides[movieSlideIndex].image}
                      alt={movieSlides[movieSlideIndex].title}
                      fill
                      className="object-cover"
                    />

                    {/* Left Button */}
                    <button
                      onClick={(e) => { e.stopPropagation(); handlePrevMovie(); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white/50 hover:text-white hover:bg-black/80 opacity-0 group-hover/nav:opacity-100 transition-all z-10"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    {/* Right Button */}
                    <button
                      onClick={(e) => { e.stopPropagation(); handleNextMovie(); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white/50 hover:text-white hover:bg-black/80 opacity-0 group-hover/nav:opacity-100 transition-all z-10"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {movieSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setMovieSlideIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${idx === movieSlideIndex ? "w-6 bg-zinc-300" : "w-1.5 bg-white/20 hover:bg-white/40"
                        }`}
                      aria-label={`Go to movie slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Description */}
                <div className="mt-4 flex flex-col items-center text-center max-w-2xl mx-auto h-24">
                  <h4 className="text-lg font-medium text-zinc-200 mb-2">{movieSlides[movieSlideIndex].title}</h4>
                  <p className="text-zinc-500 text-sm">
                    {movieSlides[movieSlideIndex].description}
                  </p>
                </div>
              </motion.div>
            </div>
            {/* End Movie Management Subsection */}

            {/* Ticket Sales Subsection */}
            <div className="mt-8">
              <div className="flex items-center gap-3 mb-8">
                <Ticket className="text-pink-400" size={20} />
                <h3 className="text-xl font-semibold text-zinc-100">Ticket Sales</h3>
              </div>

              {/* Carousel */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-b ${ticketSlides[ticketSlideIndex].color} rounded-3xl blur opacity-0 group-hover:opacity-50 transition duration-500`} />
                <div className="relative bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                  {/* Header */}
                  <div className="h-10 border-b border-white/5 bg-black/40 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    <div className="flex-1 text-center font-mono text-xs text-zinc-500 mr-12">
                      {ticketSlides[ticketSlideIndex].title} ({ticketSlideIndex + 1}/{ticketSlides.length})
                    </div>
                  </div>

                  {/* Image Area with Nav Controls */}
                  <div
                    className="relative aspect-video group/nav cursor-pointer"
                    onClick={() => setSelectedImage(ticketSlides[ticketSlideIndex].image)}
                  >
                    <Image
                      src={ticketSlides[ticketSlideIndex].image}
                      alt={ticketSlides[ticketSlideIndex].title}
                      fill
                      className="object-cover"
                    />

                    {/* Left Button */}
                    <button
                      onClick={(e) => { e.stopPropagation(); handlePrevTicket(); }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white/50 hover:text-white hover:bg-black/80 opacity-0 group-hover/nav:opacity-100 transition-all z-10"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    {/* Right Button */}
                    <button
                      onClick={(e) => { e.stopPropagation(); handleNextTicket(); }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white/50 hover:text-white hover:bg-black/80 opacity-0 group-hover/nav:opacity-100 transition-all z-10"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {ticketSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setTicketSlideIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${idx === ticketSlideIndex ? "w-6 bg-zinc-300" : "w-1.5 bg-white/20 hover:bg-white/40"
                        }`}
                      aria-label={`Go to ticket slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Description */}
                <div className="mt-4 flex flex-col items-center text-center max-w-2xl mx-auto h-24">
                  <h4 className="text-lg font-medium text-zinc-200 mb-2">{ticketSlides[ticketSlideIndex].title}</h4>
                  <p className="text-zinc-500 text-sm">
                    {ticketSlides[ticketSlideIndex].description}
                  </p>
                </div>
              </motion.div>
            </div>
            {/* End Ticket Sales Subsection */}

            {/* Reports Subsection */}
            <div className="mt-8">
              <div className="flex items-center gap-3 mb-8">
                <PieChart className="text-emerald-400" size={20} />
                <h3 className="text-xl font-semibold text-zinc-100">System Reports</h3>
              </div>

              <div className="grid gap-16">
                {/* Reports Menu */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-b from-teal-500/20 to-emerald-500/20 rounded-3xl blur opacity-0 group-hover:opacity-50 transition duration-500" />
                  <div className="relative bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                    <div className="h-10 border-b border-white/5 bg-black/40 flex items-center px-4 gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                      <div className="flex-1 text-center font-mono text-xs text-zinc-500 mr-12">Reports Menu</div>
                    </div>
                    <div
                      className="relative aspect-video cursor-pointer"
                      onClick={() => setSelectedImage("/projects/teatro_chino/menu_reportes.png")}
                    >
                      <Image
                        src="/projects/teatro_chino/menu_reportes.png"
                        alt="System Reports Menu"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col items-center text-center max-w-2xl mx-auto">
                    <h4 className="text-lg font-medium text-zinc-200 mb-2">Reports</h4>
                    <p className="text-zinc-500 text-sm">
                      Screen where the system displays information generated from stored data, allowing visualization of statistics, revenue performance, and ticket sales summaries.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            {/* End Reports Subsection */}

          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Features Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-10"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Database className="text-zinc-400" size={24} />
                <h2 className="text-2xl font-semibold">Main Features</h2>
              </div>
              <ul className="space-y-4">
                {[
                  "Movie registration and management",
                  "Cinema room administration",
                  "Ticket sales management",
                  "Assignment of movies to cinema rooms",
                  "Menu-based console interface"
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-400">
                    <CheckCircle2 size={20} className="text-zinc-500 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-6">
                <BarChart3 className="text-zinc-400" size={24} />
                <h2 className="text-2xl font-semibold">Reports Generated</h2>
              </div>
              <ul className="space-y-4">
                {[
                  "Revenue by time period",
                  "Revenue by movie title",
                  "Ticket sales by genre",
                  "Cinema room occupancy",
                  "Reports by room type",
                  "Popcorn sales report",
                  "List of movies projected in each room"
                ].map((report, i) => (
                  <li key={i} className="flex items-start gap-3 text-zinc-400">
                    <CheckCircle2 size={20} className="text-zinc-500 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{report}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Architecture & Status Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col gap-10"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <ServerCog className="text-zinc-400" size={24} />
                <h2 className="text-2xl font-semibold">System Architecture</h2>
              </div>
              <p className="text-zinc-400 leading-relaxed bg-white/5 border border-white/10 p-6 rounded-2xl">
                The system was designed using multiple classes representing the main cinema entities, including <strong>Movie, Room, Sale and Date</strong>. Additional classes were implemented to manage file storage for each entity.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Project Status</h2>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                <span className="text-sm font-medium">Completed academic project</span>
              </div>
              <p className="mt-3 text-sm text-zinc-500">
                Developed as the final assignment for the Programming II course.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#0a0a0a]/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors z-50"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="relative w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-2xl bg-zinc-900 border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Expanded view"
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
