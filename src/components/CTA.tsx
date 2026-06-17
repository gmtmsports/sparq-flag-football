"use client";

import { Container, Reveal } from "./ui";

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
            This is why today matters.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg font-medium text-black/70">
            One verified score, captured on video, ranked against the nation. It&apos;s
            the same standard trusted by Team USA and USA Football — and it&apos;s how
            athletes get discovered. Every rep counts.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
