"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const roles = [
  "Software Engineer",
  "Full Stack Developer",
  "Systems Analyst",
  "Backend Developer",
  "Frontend Developer",
];

export function LiveRole() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentRole((current) => (current + 1) % roles.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div
      className="mt-5 flex h-6 items-center font-mono text-[13px] tracking-[0.08em]"
      aria-live="polite"
    >
      <span className="mr-3 text-[var(--text-muted)]">&gt;</span>

      <AnimatePresence mode="wait">
        <motion.span
          key={roles[currentRole]}
          initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
          transition={{ duration: 0.35 }}
          className="text-[var(--text-primary)]"
        >
          {roles[currentRole]}
        </motion.span>
      </AnimatePresence>

      <span className="ml-1 animate-pulse text-[var(--accent)]">_</span>
    </div>
  );
}