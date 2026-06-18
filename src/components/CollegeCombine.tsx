"use client";

import { PlayCircle, ArrowRight } from "lucide-react";
import { Container, Eyebrow, Reveal } from "./ui";

const IG_POST = "https://www.instagram.com/p/DY5q70wD-t_/";

const colleges = [
  "Alabama State",
  "North Alabama",
  "West Alabama",
  "Wingate",
  "Spring Hill",
  "Wallace State",
  "LaGrange",
  "Freed-Hardeman",
  "Mount Olive",
  "Point University",
  "Bishop State CC",
  "Central Alabama CC",
];

export default function CollegeCombine() {
  return (
    <section id="uab" className="relative bg-ink py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-24 top-0 h-full w-1/2 skew-x-[12deg] bg-gradient-to-b from-volt/8 to-transparent" />
      <Container className="relative">
        <Reveal>
          <Eyebrow>SPARQ on Campus · UAB</Eyebrow>
          <h2 className="max-w-3xl font-display text-4xl font-black uppercase leading-[1.02] tracking-tight text-white sm:text-5xl">
            College programs are{" "}
            <span className="text-volt">already recruiting here.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">
            At our combine at UAB, athletes put up verified SPARQ scores in front of a
            dozen college flag football programs — seen live by the coaches who fill
            rosters and hand out spots.
          </p>
        </Reveal>

        {/* Instagram banner */}
        <Reveal delay={0.08}>
          <a
            href={IG_POST}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 block overflow-hidden rounded-2xl border border-white/12"
          >
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/combine-fieldhouse.png"
                alt="SPARQ combine at UAB"
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-volt">
                    <PlayCircle className="h-6 w-6 text-black" strokeWidth={2} />
                  </span>
                  <div>
                    <p className="font-display text-lg font-bold text-white">
                      UAB SPARQ Combine
                    </p>
                    <p className="text-sm text-white/60">See the event on Instagram</p>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-sm font-bold uppercase tracking-wide text-volt">
                  Watch <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
          </a>
        </Reveal>

        {/* College programs */}
        <Reveal delay={0.12}>
          <div className="mt-10 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/45">
              Confirmed programs in attendance
            </span>
            <span className="font-display text-sm font-black text-volt">
              {colleges.length} TEAMS
            </span>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {colleges.map((c) => (
              <div
                key={c}
                className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-panel/60 px-4 py-3.5 transition-colors hover:border-volt/40"
              >
                <span className="h-2 w-2 shrink-0 rounded-full bg-volt" />
                <span className="text-sm font-semibold text-white">{c}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
