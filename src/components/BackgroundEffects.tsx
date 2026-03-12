"use client";

import { useEffect, useState } from "react";

export default function BackgroundEffects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#0a0a0a]">
      {/* 
        Using simple static radial gradients instead of heavy blur filters.
        Browsers render radial-gradients much faster than wide-radius blurs.
      */}
      <div
        className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%]"
        style={{ 
          background: "radial-gradient(circle, rgba(30,58,138,0.15) 0%, rgba(10,10,10,0) 70%)",
        }}
      />
      <div
        className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%]"
        style={{ 
          background: "radial-gradient(circle, rgba(88,28,135,0.15) 0%, rgba(10,10,10,0) 70%)",
        }}
      />
      <div
        className="absolute top-[30%] left-[20%] w-[40%] h-[40%]"
        style={{ 
          background: "radial-gradient(circle, rgba(6,78,59,0.10) 0%, rgba(10,10,10,0) 70%)",
        }}
      />
    </div>
  );
}
