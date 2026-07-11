"use client";

import { motion } from "motion/react";
import {
  Bot,
  Braces,
  CloudCog,
  GitBranch,
  Network,
} from "lucide-react";

const capabilities = [
  {
    icon: Braces,
    code: "DEV_CORE",
    title: "Development",
    description:
      "Construction of modern applications, APIs and complete digital products.",
    items: [
      "Web Applications",
      "REST APIs",
      "Frontend Development",
      "Backend Development",
      "Software Architecture",
    ],
  },
  {
    icon: Network,
    code: "SYS_ANALYSIS",
    title: "Systems Analysis",
    description:
      "Analysis and organization of technical and business requirements.",
    items: [
      "Requirements Analysis",
      "Business Rules",
      "UML Diagrams",
      "Technical Documentation",
      "Process Modeling",
    ],
  },
  {
    icon: CloudCog,
    code: "DATA_CLOUD",
    title: "Data & Cloud",
    description:
      "Data modeling, infrastructure and cloud application deployment.",
    items: [
      "PostgreSQL",
      "Prisma ORM",
      "Docker",
      "Cloud Deployments",
      "Storage Integrations",
    ],
  },
  {
    icon: Bot,
    code: "AI_AUTOMATION",
    title: "AI & Automation",
    description:
      "Intelligent integrations and workflows focused on productivity.",
    items: [
      "LLM Integration",
      "Prompt Engineering",
      "OpenAI APIs",
      "Workflow Automation",
      "Intelligent Systems",
    ],
  },
  {
    icon: GitBranch,
    code: "ENGINEERING",
    title: "Engineering Practices",
    description:
      "Practices focused on quality, maintenance and software evolution.",
    items: [
      "Git & GitHub",
      "Clean Code",
      "SOLID Principles",
      "API Documentation",
      "Testing Foundations",
    ],
  },
];

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="scroll-mt-28 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-[11px] tracking-[0.3em] text-[var(--accent)]">
            MODULE 02
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Capabilities
          </h2>

          <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
            Technical and analytical capabilities applied throughout the
            software development lifecycle.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <motion.article
                key={capability.code}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[var(--border-active)]"
              >
                <motion.div
                  aria-hidden="true"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.08 }}
                  className="absolute bottom-0 left-0 top-0 w-px origin-bottom bg-gradient-to-t from-[var(--primary)] via-[var(--accent)] to-transparent"
                />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--background-secondary)] text-[var(--accent)]">
                    <Icon size={20} />
                  </div>

                  <div className="flex items-center gap-2 font-mono text-[9px] tracking-[0.15em] text-[var(--success)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--success)] shadow-[0_0_6px_var(--success)]" />
                    LOADED
                  </div>
                </div>

                <p className="mt-6 font-mono text-[9px] tracking-[0.2em] text-[var(--text-muted)]">
                  {capability.code}
                </p>

                <h3 className="mt-2 text-xl font-medium text-[var(--text-primary)]">
                  {capability.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                  {capability.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {capability.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-[var(--border)] bg-[var(--background-secondary)] px-2.5 py-1.5 font-mono text-[10px] text-[var(--text-secondary)] transition group-hover:border-[var(--border-active)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}