"use client";

import { ArrowRight } from "lucide-react";
import { Container, Reveal, VoltButton } from "./ui";

export default function CTA() {
  return (
    <section id="cta" className="relative overflow-hidden bg-volt py-24 text-black">
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 -skew-x-12 bg-black/10" />
      <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 -skew-x-12 bg-black/10" />
      <Container className="relative text-center">
        <Reveal>
          <p className="text-sm font-extrabold uppercase tracking-[0.25em] text-black/60">
            Benchmark · Develop · Dominate
          </p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-black uppercase leading-[1.0] tracking-tight sm:text-6xl">
            Get your verified SPARQ score.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg font-medium text-black/70">
            The same standard trusted by Team USA and USA Football is open to your
            athlete. Find a combine, get tested, and get on the board.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://gmtm.com"
              className="group inline-flex items-center justify-center gap-2 skew-tab bg-black px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-volt transition-transform hover:scale-[1.02]"
            >
              Find a Combine
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <VoltButton
              href="https://gmtm.com"
              variant="outline"
              className="border-black/30 text-black hover:border-black hover:text-black"
            >
              Create Athlete Profile
            </VoltButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
