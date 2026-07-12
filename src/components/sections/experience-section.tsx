"use client";

import { motion } from "motion/react";

const logs = [
  {
    date: "2026.06",
    title: "Sentinel",
    status: "DEPLOYED",
    description:
      "Incident Management Platform built with Angular, NestJS and PostgreSQL.",
  },
  {
    date: "2026.05",
    title: "Moment",
    status: "IN PROGRESS",
    description:
      "Social platform with authentication, notifications and scalable backend.",
  },
  {
    date: "2026.04",
    title: "InfraForge",
    status: "COMPLETED",
    description:
      "Infrastructure monitoring system built with Go and PostgreSQL.",
  },
  {
  date: "2026.07",
  title: "SorteLab",
  status: "COMPLETED",
  description:
    "Modern online raffle platform with responsive interface, Pix payments and scalable deployment.",
},
];

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-28 px-6 py-28">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-[11px] tracking-[0.3em] text-[var(--accent)]">
            MODULE 05
          </p>

          <h2 className="mt-3 text-4xl font-semibold">
            Activity Log
          </h2>

          <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
            Chronological record of projects and professional evolution.
          </p>
        </motion.div>

        <div className="mt-14 border-l border-[var(--border)] pl-8">

          {logs.map((log, index) => (
            <motion.div
              key={log.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="relative mb-12"
            >
              <span className="absolute -left-[41px] top-2 h-3 w-3 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]" />

              <p className="font-mono text-xs tracking-[0.15em] text-[var(--accent)]">
                {log.date}
              </p>

              <h3 className="mt-2 text-2xl font-semibold">
                {log.title}
              </h3>

              <p className="mt-2 inline-flex rounded-md border border-[var(--border)] px-3 py-1 font-mono text-[10px] tracking-[0.15em] text-[var(--text-secondary)]">
                {log.status}
              </p>

              <p className="mt-4 max-w-3xl leading-7 text-[var(--text-secondary)]">
                {log.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}