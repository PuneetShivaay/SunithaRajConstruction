"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Fail-safe scroll reveal.
 * Content is VISIBLE by default (server HTML, no JS, errors). It is only hidden
 * once JS confirms the element is below the fold, then animates in when scrolled to.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"static" | "hidden" | "shown">("static");

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Already in view on load: leave it visible, no animation.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    setState("hidden");
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setState("shown");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    // Safety net: never leave content hidden.
    const t = setTimeout(() => setState("shown"), 4000);
    return () => {
      io.disconnect();
      clearTimeout(t);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        state !== "static" && "transition-[opacity,transform] duration-700 ease-[cubic-bezier(.2,.8,.2,1)]",
        state === "hidden" && "translate-y-6 opacity-0",
        className
      )}
      style={state === "shown" ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
