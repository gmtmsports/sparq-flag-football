"use client";

import { motion } from "framer-motion";
import { Container } from "./ui";
import VideoEmbed from "./VideoEmbed";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-ink pt-16">
      {/* field-house backdrop */}
      <div className="pointer-events-none absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/combine-fieldhouse.png"
          alt=""
          className="h-full w-full object-cover opacity-[0.14]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/85 to-ink" />
      </div>
      <div className="pointer-events-none absolute -right-24 top-0 h-full w-1/2 skew-x-[-14deg] bg-gradient-to-b from-volt/15 via-volt/5 to-transparent blur-2xl" />
      <div className="pointer-events-none absolute inset-0 grain opacity-50" />

      <Container className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-volt/30 bg-volt/10 py-1.5 pl-2 pr-4 text-xs font-bold uppercase tracking-[0.18em] text-volt"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/sparq-icon-green.png" alt="" className="h-5 w-5" />
            The Standard for Athletic Performance
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-5xl font-black uppercase leading-[0.92] tracking-tight text-white sm:text-7xl"
          >
            Get scored. Get seen.{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-black">Get selected.</span>
              <span className="absolute inset-x-[-8px] bottom-1 top-1 -z-0 -skew-x-6 bg-volt" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70"
          >
            Here&apos;s what&apos;s happening today. Every drill is scored on video and
            ranked in real time. Your times and clips land on your phone — and the best
            performances get seen by the coaches who matter.
          </motion.p>
        </div>

        <motion.div
          id="video"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] as const }}
          className="mx-auto mt-14 max-w-4xl scroll-mt-24"
        >
          <VideoEmbed id="6rB1x2u1nAk" title="Houston Talent ID Event" />
        </motion.div>
      </Container>
    </section>
  );
}
