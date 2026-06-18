"use client";

import { BadgeCheck } from "lucide-react";
import { Container, Eyebrow, Reveal } from "./ui";

type Athlete = {
  name: string;
  team: string;
  img: string;
  /** polished pre-made card graphic (has its own name/badges baked in) */
  polished?: boolean;
  objectPosition?: string;
};

const athletes: Athlete[] = [
  { name: "London Jenkins", team: "U.S. Women's Flag National Team", img: "/athlete-london.png", objectPosition: "object-top" },
  { name: "Isabella Geraci", team: "U.S. Women's Flag National Team", img: "/geraci-card.png", polished: true },
  { name: "Tyler Davis", team: "USA Football National Team", img: "/athlete-tyler.png", objectPosition: "object-top" },
  { name: "Anderson Lee", team: "U.S. Boys' Flag National Team", img: "/athlete-anderson.png", objectPosition: "object-top" },
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
              <div className="group relative aspect-[4/5] h-full overflow-hidden rounded-xl border border-white/10 transition-all hover:-translate-y-1 hover:border-volt/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={a.img}
                  alt={a.name}
                  className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${a.objectPosition ?? "object-center"}`}
                />
                {!a.polished && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                    <BadgeCheck className="absolute right-3 top-3 h-6 w-6 text-volt drop-shadow" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-volt">
                        Selected via SPARQ
                      </p>
                      <h3 className="mt-1 font-display text-lg font-bold leading-tight text-white">
                        {a.name}
                      </h3>
                      <p className="mt-0.5 text-xs font-semibold text-white/70">{a.team}</p>
                    </div>
                  </>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-sm text-white/45">
            Real athletes discovered through SPARQ combines — now on USA Football national
            teams, chasing the 2028 Olympics.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
