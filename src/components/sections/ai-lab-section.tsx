"use client";

import { motion } from "motion/react";
import {
  Bot,
  Brain,
  Cpu,
  Sparkles,
  Workflow,
} from "lucide-react";

const modules = [
  {
    icon: Brain,
    title: "LLM Integration",
    description: "OpenAI APIs and intelligent assistants.",
  },
  {
    icon: Workflow,
    title: "Automation",
    description: "Workflow automation and AI-powered processes.",
  },
  {
    icon: Cpu,
    title: "Prompt Engineering",
    description: "Structured prompts focused on reliability and context.",
  },
  {
    icon: Sparkles,
    title: "Future Experiments",
    description: "Continuous exploration of emerging AI technologies.",
  },
];

export function AILabSection() {
  return (
    <section
      id="ai-lab"
      className="scroll-mt-28 px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-mono text-[11px] tracking-[0.3em] text-[var(--accent)]">
            MODULE 05
          </p>

          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            AI Lab
          </h2>

          <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
            Artificial Intelligence research, integrations and future
            software capabilities.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[420px_1fr]">

          <motion.div
            initial={{ opacity: 0, scale: .9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex aspect-square items-center justify-center rounded-3xl border border-[var(--border)] bg-[var(--surface)] backdrop-blur-xl"
          >

            
            <div className="absolute h-56 w-56 rounded-full bg-[var(--primary)] opacity-20 blur-[80px] sm:h-64 sm:w-64 sm:blur-[100px] lg:h-72 lg:w-72 lg:blur-[110px]" />

            <div className="absolute h-44 w-44 animate-[spin_18s_linear_infinite] rounded-full border border-dashed border-[var(--border-active)] sm:h-48 sm:w-48 lg:h-56 lg:w-56" />

            <div className="absolute h-32 w-32 animate-[spin_12s_linear_infinite_reverse] rounded-full border border-[var(--accent)] opacity-50 sm:h-36 sm:w-36 lg:h-44 lg:w-44" />

            <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[var(--border-active)] bg-[var(--surface)] shadow-[0_0_80px_rgba(139,92,246,.35)] sm:h-28 sm:w-28 lg:h-36 lg:w-36">

              <Bot
                size={32}
                className="text-[var(--accent)] sm:h-9 sm:w-9 lg:h-[42px] lg:w-[42px]"
              />

            </div>

          </motion.div>

          <div className="grid gap-5">

            {modules.map((module,index)=>{

              const Icon = module.icon;

              return(

                <motion.article
                  key={module.title}
                  initial={{opacity:0,x:20}}
                  whileInView={{opacity:1,x:0}}
                  viewport={{once:true}}
                  transition={{delay:index*.08}}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 backdrop-blur-xl"
                >

                  <div className="flex items-center justify-between gap-4">

                    <div className="flex items-center gap-4">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[var(--border)]">

                        <Icon size={20}/>

                      </div>

                      <div>

                        <h3 className="font-medium">
                          {module.title}
                        </h3>

                        <p className="mt-1 text-sm text-[var(--text-secondary)]">
                          {module.description}
                        </p>

                      </div>

                    </div>

                    <div className="shrink-0 font-mono text-[10px] tracking-[.15em] text-[var(--success)]">
                      ACTIVE
                    </div>

                  </div>

                </motion.article>

              )

            })}

          </div>

        </div>

      </div>
    </section>
  );
}
