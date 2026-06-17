"use client";

import { useEffect, useState } from "react";
import { Container, cn } from "./ui";

const links = [
  { label: "Watch", href: "#video" },
  { label: "How It Works", href: "#how" },
  { label: "Athletes Selected", href: "#selected" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-ink/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/sparq-wordmark-green.png"
            alt="SPARQ"
            className="h-5 w-auto sm:h-6"
          />
          <span className="hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45 sm:inline">
            / USA Football
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-volt"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          className="skew-tab bg-volt px-5 py-2.5 text-xs font-extrabold uppercase tracking-wide text-black transition-colors hover:bg-volt-bright"
        >
          Get Tested
        </a>
      </Container>
    </header>
  );
}
