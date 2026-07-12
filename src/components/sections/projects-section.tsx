"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Sentinel",
    category: "Incident Management Platform",
    description:
      "Full stack platform for incident management with audit logs, filters, validation and documented REST APIs.",
    stack: ["Angular", "NestJS", "PostgreSQL", "Docker"],
    status: "COMPLETED",
    github: "https://github.com/brandaoca44/project-sentinel",
    deploy: "#",
  },
  {
    name: "Moment",
    category: "Social Platform",
    description:
      "Social network with authentication, posts, media upload, notifications, moderation and scalable backend architecture.",
    stack: ["React", "NestJS", "Prisma", "Cloudflare R2"],
    status: "IN DEVELOPMENT",
    github: "https://github.com/brandaoca44/moment-backend",
    deploy: "#",
  },
  {
    name: "InfraForge",
    category: "Infrastructure Monitoring",
    description:
      "HTTP service monitoring system with health checks, persistent storage and periodic verification workers.",
    stack: ["Go", "PostgreSQL", "Docker", "Gin"],
    status: "COMPLETED",
    github: "https://github.com/brandaoca44/infraforge",
    deploy: "#",
  },
  {
  name: "SorteLab",
  category: "Online Raffle Platform",
  description:
    "Modern raffle platform with responsive interface, secure number selection, Pix payments and scalable architecture.",
  stack: ["Next.js", "TypeScript", "PostgreSQL", "Vercel"],
  status: "COMPLETED",
  github: "https://github.com/brandaoca44/sortelab",
  deploy: "https://sortelab.vercel.app/",
},
];

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-28 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-[11px] tracking-[0.3em] text-[var(--accent)]">
            MODULE 03
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Projects
          </h2>

          <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
            Selected projects that demonstrate technical execution, systems
            thinking and product development.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[var(--border-active)] sm:p-7"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-[var(--primary)] opacity-5 blur-2xl transition group-hover:opacity-10" />

              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[9px] tracking-[0.18em] text-[var(--text-muted)]">
                    PROJECT_{String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">
                    {project.name}
                  </h3>

                  <p className="mt-1 text-sm text-[var(--accent)]">
                    {project.category}
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-md border border-[var(--border)] px-3 py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--success)] shadow-[0_0_6px_var(--success)]" />

                  <span className="font-mono text-[9px] tracking-[0.12em] text-[var(--text-secondary)]">
                    {project.status}
                  </span>
                </div>
              </div>

              <p className="mt-6 text-sm leading-7 text-[var(--text-secondary)]">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-[var(--border)] bg-[var(--background-secondary)] px-2.5 py-1.5 font-mono text-[10px] text-[var(--text-secondary)]"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex items-center gap-4 border-t border-[var(--border)] pt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] transition hover:text-white"
                >
                  <FaGithub size={16} />
                  Repository
                </a>

                <a
                  href={project.deploy}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)] transition hover:text-white"
                >
                  <ArrowUpRight size={16} />
                  Open project
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}