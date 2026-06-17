"use client";

import { Check } from "lucide-react";
import { Container, Eyebrow, Reveal, cn } from "./ui";

/* ---------- Visual: framed real product screenshot ---------- */

function Shot({
  src,
  alt,
  badge,
  glow = true,
}: {
  src: string;
  alt: string;
  badge?: string;
  glow?: boolean;
}) {
  return (
    <div className="relative">
      {glow && (
        <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-volt/10 blur-2xl" />
      )}
      <div className="overflow-hidden rounded-2xl border border-white/15 bg-ink-soft shadow-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="w-full" />
      </div>
      {badge && (
        <div className="absolute -bottom-3 left-4 flex items-center gap-2 rounded-full border border-volt/30 bg-ink px-3.5 py-1.5 shadow-lg">
          <span className="flex h-2 w-2 animate-pulse rounded-full bg-volt" />
          <span className="text-[11px] font-bold uppercase tracking-widest text-white">
            {badge}
          </span>
        </div>
      )}
    </div>
  );
}

/* ---------- Feature rows ---------- */

const features = [
  {
    eyebrow: "Real-time scoring",
    title: "A live video leaderboard at every combine",
    body: "Times post the second they happen. Athletes watch the board climb in real time on the big screen — every rep verified by video, not a clipboard.",
    points: ["Instant, on-screen rankings", "Every result video-verified", "Ranked by age, sex & sport"],
    visual: (
      <Shot
        src="/tv-leaderboard.png"
        alt="SPARQ live video leaderboard showing athlete rankings, times and video replay"
        badge="Live · 40 YD Dash"
      />
    ),
    flip: false,
  },
  {
    eyebrow: "On your phone",
    title: "Your videos and times, instantly",
    body: "Every athlete walks away with their drill clips, verified times, and a SPARQ score with national percentiles — right on their phone, ready to share.",
    points: ["Your drill videos, saved", "Verified score & percentiles", "Share to coaches in a tap"],
    visual: (
      <Shot
        src="/phone-results.png"
        alt="SPARQ mobile app showing an athlete's verified score, percentiles and capture tablet"
      />
    ),
    flip: true,
  },
  {
    eyebrow: "Get discovered",
    title: "Get seen by USA Football",
    body: "Standout scores get put in front of USA Football coaches who recruit by verified performance — the fast track to the National Team and the Olympic pathway.",
    points: ["Seen by national-team scouts", "Selected on merit, not connections", "A path to the 2028 Olympics"],
    visual: (
      <div className="relative mx-auto max-w-xs">
        <Shot
          src="/geraci-card.png"
          alt="Isabella Geraci — selected to the U.S. Women's Flag Football National Team via SPARQ"
          glow
        />
        <p className="mt-6 text-center text-sm text-white/55">
          <span className="font-semibold text-white">Isabella Geraci</span> — discovered
          on GMTM, selected to the U.S. Women&apos;s Flag National Team.
        </p>
      </div>
    ),
    flip: false,
  },
];

export default function Features() {
  return (
    <section id="how" className="relative bg-ink py-20 sm:py-24">
      <Container>
        <div className="space-y-24 sm:space-y-32">
          {features.map((f) => (
            <div
              key={f.title}
              className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
            >
              <Reveal className={cn(f.flip && "lg:order-2")}>
                <Eyebrow>{f.eyebrow}</Eyebrow>
                <h2 className="font-display text-3xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-4xl">
                  {f.title}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-white/65">{f.body}</p>
                <ul className="mt-6 space-y-3">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-white/80">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-volt/15">
                        <Check className="h-3.5 w-3.5 text-volt" strokeWidth={3} />
                      </span>
                      <span className="font-medium">{p}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={0.12} className={cn("px-2 sm:px-4", f.flip && "lg:order-1")}>
                {f.visual}
              </Reveal>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
