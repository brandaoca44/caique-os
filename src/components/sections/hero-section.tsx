"use client";

import { motion } from "motion/react";
import {
  Cloud,
  Code2,
  Cog,
  Database,
  Download,
  Monitor,
  Server,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {
  SiCloudflare,
  SiDocker,
  SiFastapi,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedis,
} from "react-icons/si";
import { LiveRole } from "@/components/ui/live-role";

const architectureNodes = [
  {
    key: "web",
    eyebrow: "CLIENT",
    title: "WEB",
    detail: "Browser / Mobile / Desktop",
    icon: Monitor,
    className: "col-span-12 md:col-span-6 md:col-start-4",
  },
  {
    key: "frontend",
    eyebrow: "UI",
    title: "FRONTEND",
    detail: "React / Next.js / TypeScript",
    icon: Code2,
    className: "col-span-12 md:col-span-4",
  },
  {
    key: "backend",
    eyebrow: "API",
    title: "BACKEND",
    detail: "NestJS / FastAPI / Node.js",
    icon: Server,
    className: "col-span-12 md:col-span-4",
  },
  {
    key: "services",
    eyebrow: "INFRA",
    title: "SERVICES",
    detail: "REST / Auth / Storage",
    icon: Cog,
    className: "col-span-12 md:col-span-4",
  },
  {
    key: "data",
    eyebrow: "DATABASES",
    title: "DATA",
    detail: "PostgreSQL / Redis",
    icon: Database,
    className: "col-span-12 md:col-span-5 md:col-start-2",
  },
  {
    key: "cloud",
    eyebrow: "DEPLOY",
    title: "CLOUD",
    detail: "Docker / R2 / Railway",
    icon: Cloud,
    className: "col-span-12 md:col-span-5",
  },
];

const stack = [
  { name: "NestJS", type: "Backend", icon: SiNestjs },
  { name: "Python", type: "Backend", icon: SiPython },
  { name: "FastAPI", type: "Backend", icon: SiFastapi },
  { name: "React", type: "Frontend", icon: SiReact },
  { name: "Next.js", type: "Frontend", icon: SiNextdotjs },
  { name: "PostgreSQL", type: "Database", icon: SiPostgresql },
  { name: "Redis", type: "Cache", icon: SiRedis },
  { name: "Docker", type: "DevOps", icon: SiDocker },
  { name: "R2", type: "Storage", icon: SiCloudflare },
];

function FlowDot({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <motion.span
      className={`absolute z-10 h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)] ${className}`}
      animate={{ opacity: [0, 1, 0], scale: [0.7, 1.15, 0.7] }}
      transition={{
        duration: 2.2,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden border-b border-[var(--border)] bg-[var(--background)]"
    >
      <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-cols-1 lg:grid-cols-[0.95fr_1.2fr]">
        <div className="relative flex flex-col justify-center border-b border-[var(--border)] px-6 py-28 sm:px-10 lg:border-b-0 lg:border-r lg:px-12 xl:px-16">
          <div className="absolute left-6 top-8 hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.26em] text-[var(--text-muted)] sm:flex sm:left-10 lg:left-12 xl:left-16">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_10px_var(--accent)]" />
            <span>CB / SOFTWARE SYSTEMS</span>
            <span className="h-px w-24 bg-[var(--border-strong)]" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="max-w-[760px] text-[clamp(4rem,10vw,8.8rem)] font-semibold leading-[0.82] tracking-[-0.07em] text-[var(--text-primary)]">
              Caique
              <span className="block text-[var(--text-secondary-strong)]">
                Brandão
              </span>
            </h1>

            <LiveRole />

            <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
              Desenvolvo aplicações web, APIs e sistemas com foco em arquitetura
              sólida, organização e visão de produto, do levantamento de
              requisitos ao deploy em produção.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="/documents/caique-brandao-curriculo.pdf"
                className="inline-flex items-center gap-2 border border-[var(--accent)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[var(--accent)] hover:text-black"
              >
                Currículo
                <Download size={16} />
              </a>

              <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
                <span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
                Available for opportunities
              </div>
            </div>

            <div className="mt-12 flex items-center gap-6 border-t border-[var(--border)] pt-6">
              <a
                href="https://github.com/brandaoca44"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
              >
                <FaGithub size={17} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/caique-brandão-47319537b"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
              >
                <FaLinkedin size={17} />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.08 }}
          className="relative px-5 py-24 sm:px-8 lg:px-10 xl:px-12"
        >
          <div className="mb-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--text-muted)]">
            <span>System Architecture</span>
            <span className="text-[var(--accent)]">Build / 26.09</span>
          </div>

          <div className="border border-[var(--border-strong)] bg-[var(--surface)]">
            <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-4">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-[var(--accent)]">
                  SYSTEM MAP / 01
                </p>
                <h2 className="mt-1 text-sm font-semibold text-[var(--text-primary)]">
                  Full-stack application flow
                </h2>
              </div>

              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
                <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
                  06 nodes
                </span>
              </div>
            </div>

            <div className="relative p-5 sm:p-6">
              <div className="absolute left-1/2 top-5 hidden h-[calc(100%-2.5rem)] w-px -translate-x-1/2 bg-[var(--line)] md:block" />
              <div className="absolute left-[16.6%] right-[16.6%] top-[42%] hidden h-px bg-[var(--line)] md:block" />

              <FlowDot className="left-1/2 top-[27%] hidden -translate-x-1/2 md:block" />
              <FlowDot className="left-[32%] top-[42%] hidden md:block" delay={0.5} />
              <FlowDot className="right-[32%] top-[42%] hidden md:block" delay={1} />
              <FlowDot className="left-1/2 top-[69%] hidden -translate-x-1/2 md:block" delay={1.5} />

              <div className="relative grid grid-cols-12 gap-4">
                {architectureNodes.map((node, index) => {
                  const Icon = node.icon;

                  return (
                    <motion.div
                      key={node.key}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45, delay: 0.16 + index * 0.05 }}
                      whileHover={{ y: -4 }}
                      className={`${node.className} group relative min-h-[118px] overflow-hidden border border-[var(--border-strong)] bg-[var(--panel)] transition-colors duration-300 hover:border-[var(--accent)]`}
                    >
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[var(--accent-soft)] blur-2xl" />
                      </div>

                      <div className="relative flex h-full min-h-[118px] items-center gap-4 px-5 py-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-[var(--border-strong)] bg-[var(--background-secondary)] text-[var(--accent)] transition group-hover:border-[var(--accent)]">
                          <Icon size={22} strokeWidth={1.6} />
                        </div>

                        <div className="min-w-0">
                          <span className="font-mono text-[8px] uppercase tracking-[0.24em] text-[var(--text-muted)]">
                            {node.eyebrow}
                          </span>
                          <h3 className="mt-1 font-mono text-[12px] font-semibold tracking-[0.08em] text-[var(--text-primary)]">
                            {node.title}
                          </h3>
                          <p className="mt-1 text-xs leading-5 text-[var(--text-muted)]">
                            {node.detail}
                          </p>
                        </div>

                        <span className="absolute right-4 top-4 h-1.5 w-1.5 rounded-full bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="border-t border-[var(--border)] px-5 py-5">
              <div className="mb-4 flex items-center justify-between">
                <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-[var(--accent)]">
                  Tech stack
                </p>
                <p className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-[var(--text-muted)] sm:block">
                  Tools I work with
                </p>
              </div>

              <div className="grid grid-cols-3 gap-px overflow-hidden border border-[var(--border)] bg-[var(--border)] sm:grid-cols-5 lg:grid-cols-9">
                {stack.map((item) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.name}
                      whileHover={{ y: -3 }}
                      className="group flex min-h-[104px] flex-col items-center justify-center bg-[var(--panel)] px-2 py-3 text-center transition-colors hover:bg-[var(--background-secondary)]"
                    >
                      <Icon
                        size={22}
                        className="mb-3 text-[var(--text-secondary)] transition-colors group-hover:text-[var(--accent)]"
                      />
                      <div className="text-xs font-semibold text-[var(--text-primary)]">
                        {item.name}
                      </div>
                      <div className="mt-1 font-mono text-[7px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                        {item.type}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[9px] uppercase tracking-[0.24em] text-[var(--text-muted)]">
            <span className="text-[var(--accent)]">Architecture</span>
            <span>→</span>
            <span>Code</span>
            <span>→</span>
            <span>Product</span>
            <span>→</span>
            <span className="text-[var(--accent)]">Backend</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
