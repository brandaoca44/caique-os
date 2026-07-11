"use client";

import { useEffect, useState } from "react";

export function StatusBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString("pt-BR", { hour12: false }));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-[var(--border)] bg-[var(--background)]/70 px-6 py-2.5 backdrop-blur-xl">
      <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] text-[var(--accent)]">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)] shadow-[0_0_6px_var(--accent)]" />
        SYSTEM ONLINE
      </div>
      <div className="font-mono text-[11px] text-[var(--text-secondary)]">{time || "--:--:--"}</div>
    </div>
  );
}