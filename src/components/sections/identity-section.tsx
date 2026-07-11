"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import {
  BrainCircuit,
  Code2,
  Database,
  MapPin,
  ServerCog,
} from "lucide-react";

const metrics = [
  { label: "PROJECTS", value: "04+" },
  { label: "TECHNOLOGIES", value: "15+" },
  { label: "REPOSITORIES", value: "08+" },
  { label: "STATUS", value: "ONLINE" },
];

const focusAreas = [
  {
    icon: Code2,
    title: "Software Development",
    description: "Web applications, APIs and scalable digital solutions.",
  },
  {
    icon: ServerCog,
    title: "Systems Analysis",
    description: "Requirements, architecture, documentation and processes.",
  },
  {
    icon: Database,
    title: "Data & Infrastructure",
    description: "Databases, Docker, cloud deployment and integrations.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description: "LLMs, intelligent workflows and process automation.",
  },
];


function AnimatedMetricValue({ value }: { value: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  const numeric = parseInt(value, 10);
  const suffix = value.replace(/^[0-9]+/, "");
  const isNumeric = !Number.isNaN(numeric);

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || !isNumeric) return;

    const duration = 900;
    const start = performance.now();

    let frameId: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.round(progress * numeric));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [inView, isNumeric, numeric]);

  return (
    <p ref={ref} className="mt-3 text-2xl font-semibold text-[var(--text-primary)]">
      {isNumeric ? `${display}${suffix}` : value}
    </p>
  );
}

export function IdentitySection() {
  return (
    <section id="identity" className="px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-[11px] tracking-[0.3em] text-[var(--accent)]">
            MODULE 01
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Identity Core
          </h2>

          <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
            Professional profile, technical direction and current areas of
            specialization.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl sm:p-8"
          >
           
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"
              animate={{
                opacity: [0, 0.8, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="flex items-center justify-between border-b border-[var(--border)] pb-5">
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] text-[var(--text-muted)]">
                  IDENTITY RECORD
                </p>

                <h3 className="mt-2 text-xl font-medium">Caique Brandão</h3>
              </div>

              <div className="flex items-center gap-2 rounded-md border border-[var(--border)] px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-[var(--success)] shadow-[0_0_8px_var(--success)]" />
                <span className="font-mono text-[10px] tracking-[0.15em] text-[var(--text-secondary)]">
                  VERIFIED
                </span>
              </div>
            </div>

            <div className="grid gap-6 pt-6 sm:grid-cols-2">
              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] text-[var(--text-muted)]">
                  LOCATION
                </p>

                <div className="mt-2 flex items-center gap-2 text-sm text-[var(--text-primary)]">
                  <MapPin size={15} className="text-[var(--accent)]" />
                  Salvador, Brazil
                </div>
              </div>

              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] text-[var(--text-muted)]">
                  AVAILABILITY
                </p>

                <p className="mt-2 text-sm text-[var(--text-primary)]">
                  Immediate
                </p>
              </div>

              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] text-[var(--text-muted)]">
                  PRIMARY ROLES
                </p>

                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                  Software Engineer
                  <br />
                  Full Stack Developer
                  <br />
                  Systems Analyst
                </p>
              </div>

              <div>
                <p className="font-mono text-[10px] tracking-[0.2em] text-[var(--text-muted)]">
                  CURRENT FOCUS
                </p>

                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                  Scalable systems
                  <br />
                  AI integration
                  <br />
                  Cloud applications
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 backdrop-blur-xl"
              >
                <p className="font-mono text-[9px] tracking-[0.18em] text-[var(--text-muted)]">
                  {metric.label}
                </p>

                <AnimatedMetricValue value={metric.value} />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            const moduleIndex = String(index + 1).padStart(2, "0");

            return (
              <motion.article
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-[var(--border-active)]"
              >
                <span className="absolute right-5 top-5 font-mono text-[10px] tracking-[0.15em] text-[var(--text-muted)] transition group-hover:text-[var(--accent)]">
                  {moduleIndex}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--background-secondary)] text-[var(--accent)]">
                  <Icon size={19} />
                </div>

                <h3 className="mt-5 font-medium text-[var(--text-primary)]">
                  {area.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                  {area.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
