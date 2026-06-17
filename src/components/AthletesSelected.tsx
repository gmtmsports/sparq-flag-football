"use client";

import { BadgeCheck } from "lucide-react";
import { Container, Eyebrow, Reveal } from "./ui";

const athletes = [
  { name: "London Jenkins", team: "USA Football National Team", initials: "LJ" },
  { name: "Isabella Geraci", team: "Flag Football National Team", initials: "IG" },
  { name: "Tyler Davis", team: "USA Football National Team", initials: "TD" },
  { name: "Anderson Lee", team: "Team USA · National Team", initials: "AL" },
];

export default function AthletesSelected() {
  return (
    <section id="selected" className="relative bg-ink-soft py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 grain opacity-40" />
      <Container className="relative">
        <Reveal className="text-center">
          <Eyebrow>
            <span className="mx-auto">Athletes selected</span>
          </Eyebrow>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-black uppercase leading-[1.02] tracking-tight text-white sm:text-5xl">
            They got tested.{" "}
            <span className="text-volt">USA Football called.</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {athletes.map((a, i) => (
            <Reveal key={a.name} delay={i * 0.07}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-panel to-ink p-6 transition-all hover:-translate-y-1 hover:border-volt/50">
                <div className="flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-volt font-display text-xl font-black text-black">
                    {a.initials}
                  </div>
                  <BadgeCheck className="h-6 w-6 text-volt" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-white">
                  {a.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-volt">{a.team}</p>
                <p className="mt-3 text-xs uppercase tracking-widest text-white/40">
                  Selected via SPARQ
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-sm text-white/40">
            Athlete photos to be added — swap the initials for real headshots in{" "}
            <code className="text-white/55">AthletesSelected.tsx</code>.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
