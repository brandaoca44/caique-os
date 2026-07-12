"use client";

import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LiveRole } from "@/components/ui/live-role";

const particles = [
  { x: "-42%", y: "-12%", size: 3, duration: 8 },
  { x: "38%", y: "-24%", size: 2, duration: 10 },
  { x: "-34%", y: "28%", size: 2, duration: 9 },
  { x: "43%", y: "18%", size: 3, duration: 11 },
  { x: "-12%", y: "-43%", size: 2, duration: 7 },
  { x: "15%", y: "42%", size: 2, duration: 12 },
];

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
              opacity: [0.13, 0.3, 0.13],
              scale: [0.9, 1.12, 0.9],
            }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-[58%] w-[58%] rounded-full bg-[var(--primary)] blur-[90px]"
          />

          <motion.div
            animate={{
              opacity: [0.06, 0.18, 0.06],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 3.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute h-[42%] w-[42%] rounded-full bg-[var(--accent)] blur-[80px]"
          />

          {particles.map((particle, index) => (
            <motion.span
              key={`${particle.x}-${particle.y}`}
              className="absolute z-30 rounded-full bg-white"
              style={{
                left: `calc(50% + ${particle.x})`,
                top: `calc(50% + ${particle.y})`,
                width: particle.size,
                height: particle.size,
                boxShadow: "0 0 8px rgba(255,255,255,0.8)",
              }}
              animate={{
                rotate: 360,
                opacity: [0.15, 0.9, 0.15],
                scale: [0.7, 1.3, 0.7],
              }}
              transition={{
                rotate: {
                  duration: particle.duration,
                  repeat: Infinity,
                  ease: "linear",
                },
                opacity: {
                  duration: 2.4,
                  repeat: Infinity,
                  delay: index * 0.2,
                },
                scale: {
                  duration: 2.4,
                  repeat: Infinity,
                  delay: index * 0.2,
                },
              }}
            />
          ))}

          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ perspective: "1000px" }}
          >
            <div
              className="relative h-[76%] w-[76%]"
              style={{
                transform: "rotateX(77deg) rotateZ(-7deg)",
                transformStyle: "preserve-3d",
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 20deg, transparent 0deg, rgba(34,211,238,0.2) 22deg, rgba(255,255,255,0.95) 48deg, var(--accent) 72deg, var(--primary) 135deg, transparent 195deg, rgba(139,92,246,0.7) 254deg, rgba(255,255,255,0.65) 302deg, transparent 360deg)",
                  filter: "blur(2px)",
                  opacity: 0.95,
                }}
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[7%] rounded-full"
                style={{
                  background:
                    "conic-gradient(from 180deg, transparent 0deg, rgba(139,92,246,0.8) 45deg, rgba(34,211,238,0.95) 95deg, rgba(255,255,255,0.8) 135deg, transparent 210deg, rgba(139,92,246,0.6) 290deg, transparent 360deg)",
                  filter: "blur(5px)",
                  opacity: 0.75,
                }}
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[14%] rounded-full"
                style={{
                  background:
                    "conic-gradient(from 80deg, transparent, rgba(255,255,255,0.8), var(--accent), transparent 45%, var(--primary), transparent)",
                  filter: "blur(8px)",
                  opacity: 0.55,
                }}
              />
            </div>
          </div>

          <motion.div
            animate={{
              boxShadow: [
                "0 0 42px 10px rgba(139,92,246,0.22), inset 0 0 36px rgba(0,0,0,1)",
                "0 0 72px 15px rgba(34,211,238,0.3), inset 0 0 42px rgba(0,0,0,1)",
                "0 0 42px 10px rgba(139,92,246,0.22), inset 0 0 36px rgba(0,0,0,1)",
              ],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute z-10 rounded-full"
            style={{
              width: "36.5%",
              height: "36.5%",
              background:
                "radial-gradient(circle at 38% 30%, #090b12 0%, #010102 42%, #000 72%, #000 100%)",
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
                "conic-gradient(from 30deg, rgba(255,255,255,0.9), var(--accent), var(--primary), transparent, var(--accent), rgba(255,255,255,0.8))",
              opacity: 0.95,
              filter: "blur(0.25px)",
            }}
          >
            <div className="h-full w-full rounded-full bg-black" />
          </motion.div>

          <div
            className="absolute z-30 overflow-hidden rounded-full"
            style={{
              width: "47%",
              height: "6.5%",
              top: "calc(50% - 24%)",
            }}
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 6.5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="aspect-square w-full"
              style={{
                marginTop: "-43%",
                borderRadius: "50%",
                background:
                  "conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.9) 35deg, var(--accent) 80deg, var(--primary) 145deg, transparent 230deg)",
                filter: "blur(4px)",
                opacity: 0.95,
              }}
            />
          </div>

          <div
            className="absolute z-20 overflow-hidden rounded-full opacity-60"
            style={{
              width: "42%",
              height: "4.5%",
              bottom: "calc(50% - 23%)",
              transform: "rotate(180deg)",
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="aspect-square w-full"
              style={{
                marginTop: "-45%",
                borderRadius: "50%",
                background:
                  "conic-gradient(from 180deg, transparent, var(--primary), var(--accent), transparent 60%)",
                filter: "blur(5px)",
              }}
            />
          </div>

          <motion.div
            animate={{ opacity: [0.72, 1, 0.72] }}
            transition={{
              duration: 2.3,
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