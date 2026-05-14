"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { contact, profile } from "@/lib/data";

const easeOut = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const stagger = (i: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay: 0.06 * i, ease: easeOut },
        };

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[92vh] items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-grid" aria-hidden />
      <div
        className="absolute left-1/2 top-1/3 -z-10 h-[480px] w-[680px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--accent), transparent)",
        }}
        aria-hidden
      />
      <div className="mx-auto w-full max-w-5xl px-6 pt-28 pb-20">
        <motion.div
          {...stagger(0)}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-subtle/60 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          Open to new opportunities
        </motion.div>

        <motion.h1
          {...stagger(1)}
          className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          {...stagger(2)}
          className="mt-4 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl"
        >
          <span className="text-foreground">{profile.role}</span> · {profile.yearsExperience}+ years building web
          apps, DApps, and complex UI systems. {profile.tagline}
        </motion.p>

        <motion.div
          {...stagger(3)}
          className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"
        >
          <MapPin className="h-4 w-4" aria-hidden />
          {profile.location}
        </motion.div>

        <motion.div
          {...stagger(4)}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#experience"
            className="group inline-flex h-11 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background transition-all hover:opacity-90 active:scale-[0.98]"
          >
            View work
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden />
          </a>
          <a
            href={contact.resumeUrl}
            download
            className="inline-flex h-11 items-center gap-2 rounded-full border border-border bg-subtle/60 px-5 text-sm font-medium text-foreground transition-all hover:border-foreground/30 active:scale-[0.98]"
          >
            <Download className="h-4 w-4" aria-hidden />
            Resume
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex h-11 items-center gap-2 rounded-full px-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" aria-hidden />
            {contact.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
