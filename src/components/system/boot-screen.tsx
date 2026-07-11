"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const bootMessages = [
  "LOADING IDENTITY",
  "LOADING CAPABILITIES",
  "LOADING PROJECTS",
  "CONNECTING AI CORE",
  "SYSTEM READY",
];

export function BootScreen() {
  const [visible, setVisible] = useState(true);
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const alreadyBooted = sessionStorage.getItem("portfolio-booted");

    if (alreadyBooted) {
      setVisible(false);
      return;
    }

    const messageInterval = window.setInterval(() => {
      setCurrentMessage((current) => {
        if (current >= bootMessages.length - 1) {
          window.clearInterval(messageInterval);
          return current;
        }

        return current + 1;
      });
    }, 420);

    const closeTimeout = window.setTimeout(() => {
      sessionStorage.setItem("portfolio-booted", "true");
      setVisible(false);
    }, 2600);

    return () => {
      window.clearInterval(messageInterval);
      window.clearTimeout(closeTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--background)]"
        >
          <div className="w-full max-w-md px-8">
            <div className="mb-8 flex items-center justify-between">
              <span className="font-mono text-xs tracking-[0.28em] text-[var(--accent)]">
                DIGITAL IDENTITY
              </span>

              <span className="h-2 w-2 animate-pulse rounded-full bg-[var(--success)] shadow-[0_0_10px_var(--success)]" />
            </div>

            <div className="relative h-px overflow-hidden bg-[var(--border)]">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2.1, ease: "easeInOut" }}
                className="absolute inset-0 origin-left bg-gradient-to-r from-[var(--primary)] to-[var(--accent)]"
              />
            </div>

            <div className="mt-6 h-6">
              <AnimatePresence mode="wait">
                <motion.p
                  key={bootMessages[currentMessage]}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="font-mono text-[11px] tracking-[0.2em] text-[var(--text-secondary)]"
                >
                  {bootMessages[currentMessage]}
                  <span className="ml-1 animate-pulse text-[var(--accent)]">
                    _
                  </span>
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}