"use client";

import { motion } from "motion/react";
import {
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const contacts = [
  {
    icon: Mail,
    title: "Email",
    value: "brandao.global@proton.me",
    href: "mailto:brandao.global@proton.me",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+55 (75) 99866-5796",
    href: "https://wa.me/5575998665796",
  },
];

const socials = [
  {
    icon: FaGithub,
    title: "GitHub",
    href: "https://github.com/brandaoca44",
  },
  {
    icon: FaLinkedin,
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/caique-brandão-47319537b",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
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

          <h2 className="mt-3 text-4xl font-semibold">
            Communication Hub
          </h2>

          <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">
            Let's build modern software together.
          </p>

        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 backdrop-blur-xl"
          >

            <div className="flex items-center gap-3">

              <Send
                size={22}
                className="text-[var(--accent)]"
              />

              <h3 className="text-2xl font-semibold">
                Open Communication Channel
              </h3>

            </div>

            <p className="mt-5 leading-8 text-[var(--text-secondary)]">
              Available for freelance projects, full-time opportunities,
              partnerships and innovative ideas.
            </p>

            <div className="mt-10 space-y-4">

              {contacts.map((contact)=>{

                const Icon = contact.icon;

                return(

                  <a
                    key={contact.title}
                    href={contact.href}
                    className="flex items-center justify-between rounded-xl border border-[var(--border)] p-5 transition hover:border-[var(--border-active)]"
                  >

                    <div className="flex items-center gap-4">

                      <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--border)]">

                        <Icon
                          size={20}
                          className="text-[var(--accent)]"
                        />

                      </div>

                      <div>

                        <p className="font-mono text-[10px] tracking-[.15em] text-[var(--text-muted)]">
                          {contact.title}
                        </p>

                        <p className="mt-1">
                          {contact.value}
                        </p>

                      </div>

                    </div>

                  </a>

                )

              })}

            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 backdrop-blur-xl"
          >

            <p className="font-mono text-[11px] tracking-[.2em] text-[var(--accent)]">
              NETWORK
            </p>

            <div className="mt-8 space-y-5">

              {socials.map((social)=>{

                const Icon = social.icon;

                return(

                  <a
                    key={social.title}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-[var(--border)] p-5 transition hover:border-[var(--border-active)]"
                  >

                    <Icon
                      size={22}
                    />

                    <span>
                      {social.title}
                    </span>

                  </a>

                )

              })}

            </div>

            <div className="mt-10 rounded-xl border border-[var(--border)] p-5">

              <p className="font-mono text-[10px] tracking-[.15em] text-[var(--text-muted)]">
                SYSTEM STATUS
              </p>

              <div className="mt-3 flex items-center gap-3">

                <span className="h-3 w-3 rounded-full bg-[var(--success)] animate-pulse" />

                <span>
                  AVAILABLE FOR OPPORTUNITIES
                </span>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}