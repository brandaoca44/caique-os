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
    <div className="mt-10 flex items-center gap-4">
      <span className="h-px w-10 bg-[var(--accent)]" />
      <span className="font-mono text-[10px] tracking-[0.22em] text-[var(--text-muted)]">
        01
      </span>

      <AnimatePresence mode="wait">
        <motion.span
          key={roles[currentRole]}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="text-base font-semibold text-[var(--text-primary)] sm:text-lg"
        >
          {roles[currentRole]}
        </motion.span>
      </AnimatePresence>

      <span className="h-4 w-px bg-[var(--accent)]" />
    </div>
  );
}
