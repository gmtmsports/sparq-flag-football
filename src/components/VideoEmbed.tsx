"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "./ui";

export default function VideoEmbed({
  id,
  title = "SPARQ Talent ID Highlights",
  className,
}: {
  id: string;
  title?: string;
  className?: string;
}) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-2xl border border-white/15 bg-black shadow-2xl",
        className,
      )}
    >
      {active ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          onClick={() => setActive(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label={`Play video: ${title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
            alt={title}
            className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-100"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30" />
          <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-volt shadow-[0_0_50px_-5px_rgba(213,242,61,0.7)] transition-transform group-hover:scale-110">
            <Play className="ml-1 h-8 w-8 fill-black text-black" />
          </span>
          <span className="absolute bottom-5 left-6 text-left">
            <span className="block text-xs font-bold uppercase tracking-[0.2em] text-volt">
              Watch
            </span>
            <span className="block font-display text-xl font-bold text-white">
              {title}
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
