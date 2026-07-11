"use client";

import { motion } from "motion/react";
import { Cpu } from "lucide-react";

export function AICore() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      whileHover={{ scale: 1.03 }}
      className="group relative mx-auto flex aspect-square w-full max-w-[460px] items-center justify-center"
    >
      <motion.div
        animate={{
          opacity: [0.12, 0.28, 0.12],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-72 w-72 rounded-full bg-[var(--primary)] blur-[110px]"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute h-[78%] w-[78%] rounded-full border border-dashed border-[var(--border-active)]"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute h-[60%] w-[60%] rounded-full border border-[var(--accent)] opacity-40"
      />

      <motion.div
        animate={{
          scale: [1, 1.06, 1],
          boxShadow: [
            "0 0 45px rgba(139,92,246,0.25)",
            "0 0 90px rgba(34,211,238,0.4)",
            "0 0 45px rgba(139,92,246,0.25)",
          ],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 flex h-44 w-44 flex-col items-center justify-center rounded-full border border-[var(--border-active)] bg-black/80 backdrop-blur-2xl"
      >
        <Cpu
          size={30}
          className="mb-3 text-[var(--accent)] transition group-hover:scale-110"
        />

        <span className="font-mono text-[9px] tracking-[0.25em] text-[var(--text-muted)]">
          AI CORE
        </span>

        <span className="mt-1 font-mono text-sm tracking-[0.15em] text-white">
          ONLINE
        </span>

        <div className="mt-3 flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--success)] shadow-[0_0_7px_var(--success)]" />

          <span className="font-mono text-[8px] tracking-[0.12em] text-[var(--text-muted)]">
            SIGNAL 98%
          </span>
        </div>
      </motion.div>

      {Array.from({ length: 6 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-[var(--accent)]"
          animate={{
            rotate: 360,
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            rotate: {
              duration: 8 + index,
              repeat: Infinity,
              ease: "linear",
            },
            opacity: {
              duration: 2,
              repeat: Infinity,
              delay: index * 0.25,
            },
          }}
          style={{
            width: 3 + (index % 2),
            height: 3 + (index % 2),
            transformOrigin: `${90 + index * 15}px 0`,
          }}
        />
      ))}
    </motion.div>
  );
}