"use client";

import { Container, Reveal } from "./ui";

// Live GMTM event pages (verified 2026-09-03; /events/{id} is a 404 on gmtm.com).
const JUNIOR_COMBINE_URL =
  "https://gmtm.com/virtuals/1317/2027-u-s-flag-national-team-junior-digital-combine-2";
const ADULT_COMBINE_URL =
  "https://gmtm.com/virtuals/1318/2027-u-s-flag-national-team-adult-digital-combine-2";

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
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <a
              href={JUNIOR_COMBINE_URL}
              className="skew-tab inline-flex items-center justify-center gap-2 bg-black px-8 py-4 text-sm font-extrabold uppercase tracking-wide text-volt transition-colors duration-200 hover:bg-black/85"
            >
              Submit to the 2027 Digital Combine
            </a>
            <a
              href={ADULT_COMBINE_URL}
              className="text-sm font-bold text-black/70 underline underline-offset-4 transition-colors hover:text-black"
            >
              Adult combine
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
