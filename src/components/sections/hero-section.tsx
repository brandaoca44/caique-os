"use client";

import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LiveRole } from "@/components/ui/live-role";

export function HeroSection() {
  return (
    <section
      id="top"
      className="flex min-h-screen items-center px-6 pb-16 pt-32 sm:pb-24 sm:pt-36 lg:pt-40"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--accent)] shadow-[0_0_6px_var(--accent)]" />

            <span className="font-mono text-[11px] tracking-[0.18em] text-[var(--text-secondary)]">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>

          <p className="mb-3 font-mono text-[11px] font-medium tracking-[0.3em] text-[var(--accent)]">
            DIGITAL IDENTITY
          </p>

          <h1
            className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-[5rem]"
            style={{
              background:
                "linear-gradient(180deg, var(--text-primary) 45%, var(--text-secondary))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Caique Brandão
          </h1>

          <LiveRole />

          <p className="mt-7 max-w-xl text-base leading-7 text-[var(--text-secondary)] sm:text-[17px] sm:leading-8">
            Desenvolvo aplicações web, APIs e sistemas com foco em arquitetura
            sólida, organização e visão de produto, do levantamento de
            requisitos ao deploy em produção.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white transition hover:brightness-110"
            >
              Ver projetos
              <ArrowRight size={16} />
            </a>

            <a
              href="/documents/caique-brandao-curriculo.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-medium backdrop-blur-xl transition hover:border-[var(--border-active)]"
            >
              Currículo
              <Download size={16} />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 border-t border-[var(--border)] pt-6">
            <a
              href="https://github.com/brandaoca44"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[13px] text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
            >
              <FaGithub size={16} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/caique-brandão-47319537b"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[13px] text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
            >
              <FaLinkedin size={16} />
              LinkedIn
            </a>
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          whileHover={{ scale: 1.025 }}
          className="group relative mx-auto flex aspect-square w-full max-w-[300px] items-center justify-center sm:max-w-[380px] lg:max-w-[460px]"
        >
          <motion.div
            animate={{
              opacity: [0.14, 0.28, 0.14],
              scale: [0.92, 1.08, 0.92],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-40 w-40 rounded-full bg-[var(--primary)] blur-[70px] sm:h-52 sm:w-52 sm:blur-[90px] lg:h-64 lg:w-64 lg:blur-[100px]"
          />

          <motion.div
            animate={{
              opacity: [0.06, 0.16, 0.06],
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-28 w-28 rounded-full bg-[var(--accent)] blur-[60px] sm:h-36 sm:w-36 sm:blur-[75px] lg:h-44 lg:w-44 lg:blur-[90px]"
          />

          
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ perspective: "900px" }}
          >
            <div
              className="relative"
              style={{
                width: "74%",
                height: "74%",
                transform: "rotateX(78deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="h-full w-full rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, var(--accent) 35deg, var(--primary) 110deg, transparent 190deg, transparent 250deg, var(--accent) 310deg, transparent 360deg)",
                  filter: "blur(3px)",
                  opacity: 0.9,
                }}
              />
            </div>
          </div>

          
          <motion.div
            animate={{
              boxShadow: [
                "0 0 40px 8px rgba(139,92,246,0.22), inset 0 0 34px rgba(0,0,0,0.95)",
                "0 0 62px 12px rgba(34,211,238,0.3), inset 0 0 34px rgba(0,0,0,0.95)",
                "0 0 40px 8px rgba(139,92,246,0.22), inset 0 0 34px rgba(0,0,0,0.95)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute z-10 rounded-full"
            style={{
              width: "36.5%",
              height: "36.5%",
              background:
                "radial-gradient(circle at 35% 30%, #0a0a12 0%, #000000 55%, #000000 100%)",
            }}
          />

          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute z-20 rounded-full p-[1.5px]"
            style={{
              width: "37.4%",
              height: "37.4%",
              background:
                "conic-gradient(var(--accent), var(--primary), var(--accent), var(--primary), var(--accent))",
              opacity: 0.85,
              filter: "blur(0.3px)",
            }}
          >
            <div
              className="h-full w-full rounded-full"
              style={{ background: "#000" }}
            />
          </motion.div>

         
          <div
            className="absolute z-30 overflow-hidden rounded-full"
            style={{
              width: "45.7%",
              height: "5.7%",
              top: "calc(50% - 22.8%)",
            }}
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear",
              }}
              className="aspect-square"
              style={{
                width: "100%",
                marginTop: "-43.8%",
                borderRadius: "50%",
                background:
                  "conic-gradient(from 0deg, transparent, var(--accent), var(--primary), transparent 60%)",
                filter: "blur(4px)",
                opacity: 0.95,
              }}
            />
          </div>

          <motion.div
            animate={{ opacity: [0.75, 1, 0.75] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative z-40 flex flex-col items-center gap-1"
          >
            <span className="font-mono text-[9px] tracking-[0.2em] text-[var(--accent)] sm:text-[10px]">
              AI CORE
            </span>

            <span className="font-mono text-xs text-white sm:text-sm">
              ONLINE
            </span>

            <span className="mt-2 font-mono text-[8px] text-[var(--text-muted)] sm:text-[9px]">
              SALVADOR • BRAZIL
            </span>

            <div className="mt-2 flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--success)] shadow-[0_0_7px_var(--success)]" />

              <span className="font-mono text-[7px] tracking-[0.12em] text-[var(--text-muted)] sm:text-[8px]">
                SIGNAL 98%
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
