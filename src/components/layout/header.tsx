"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Identity", href: "#identity", index: "01" },
  { label: "Capabilities", href: "#capabilities", index: "02" },
  { label: "Projects", href: "#projects", index: "03" },
  { label: "Lab", href: "#ai-lab", index: "04" },
  { label: "Contact", href: "#contact", index: "05" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 sm:px-10 lg:px-12 xl:px-16">
        <a
          href="#top"
          className="font-mono text-[11px] uppercase tracking-[0.24em] text-[var(--text-primary)]"
        >
          CB <span className="text-[var(--accent)]">/</span> SOFTWARE SYSTEMS
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
            >
              <span className="text-[var(--accent)]">{link.index}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="border border-[var(--border-strong)] p-2 text-[var(--text-secondary)] md:hidden"
        >
          {open ? <X size={17} /> : <Menu size={17} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-[var(--border)] bg-[var(--background)] md:hidden"
          >
            <div className="flex flex-col px-6 py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 border-b border-[var(--border)] py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--text-secondary)]"
                >
                  <span className="text-[var(--accent)]">{link.index}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
