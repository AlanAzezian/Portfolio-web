"use client";

import { useEffect, useState } from "react";
import { Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(true);

  // When mounted on client, now we can show the UI
  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setIsDark(document.documentElement.classList.contains("dark"));
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  // Prevent hydration mismatch by rendering a placeholder
  if (!mounted) {
    return (
      <div className="w-16 h-8 rounded-full bg-zinc-200 dark:bg-zinc-800 animate-pulse" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex h-8 w-16 px-1 items-center rounded-full transition-colors duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ${
        isDark ? "bg-[#3b82f6]" : "bg-gray-300"
      }`}
      aria-label="Toggle Dark Mode"
    >
      <motion.div
        initial={false}
        animate={{
          x: isDark ? 32 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm"
      >
        <Moon className={`w-3.5 h-3.5 ${isDark ? "text-blue-500" : "text-gray-500"}`} />
      </motion.div>
    </button>
  );
}
