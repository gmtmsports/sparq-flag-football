"use client";

import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import clsx, { type ClassValue } from "clsx";
import type { ReactNode } from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-volt">
      <span className="h-px w-6 bg-volt" />
      {children}
    </div>
  );
}

const reveal = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function VoltButton({
  children,
  href,
  variant = "solid",
  className,
}: {
  children: ReactNode;
  href: string;
  variant?: "solid" | "outline";
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide transition-all duration-200 skew-tab",
        variant === "solid"
          ? "bg-volt text-black hover:bg-volt-bright hover:shadow-[0_10px_40px_-8px_rgba(213,242,61,0.6)]"
          : "border border-white/25 text-white hover:border-volt hover:text-volt",
        className,
      )}
    >
      {children}
    </a>
  );
}
