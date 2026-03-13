"use client";

import { useEffect, useState } from "react";

export default function BackgroundEffects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-0 dark:opacity-100 transition-opacity duration-500">
      {/* 
        Ultra-subtle background gradients for a clean, professional dark mode.
      */}
      <div
        className="absolute top-0 w-full h-full"
        style={{ 
          background: "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.03) 0%, rgba(10,10,10,0) 60%)",
        }}
      />
    </div>
  );
}
