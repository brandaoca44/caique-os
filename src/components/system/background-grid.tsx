"use client";

import { useEffect, useRef } from "react";

export function BackgroundGrid() {
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!lightRef.current) return;
      lightRef.current.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="system-grid absolute inset-0 opacity-20" />

      <div
        ref={lightRef}
        className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full opacity-[0.07] blur-[120px] transition-transform duration-300 ease-out"
        style={{ background: "var(--primary)" }}
      />

      <div className="absolute left-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-[var(--primary)] opacity-10 blur-[140px]" />
      <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[var(--accent)] opacity-10 blur-[140px]" />

      {/* scanline sutil — reforça a leitura "tela de sistema" */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 3px)",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,var(--background)_85%)]" />
    </div>
  );
}