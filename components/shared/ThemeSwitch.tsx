"use client";

import { useEffect, useState } from "react";
import { THEME_KEY, type Theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

function applyTheme(t: Theme) {
  document.documentElement.dataset.theme = t;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", t === "light" ? "#f5f3ee" : "#0e0f11");
  try {
    localStorage.setItem(THEME_KEY, t);
  } catch {}
}

function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);
  const set = (t: Theme) => {
    setTheme(t);
    applyTheme(t);
  };
  return { theme, set };
}

/** Compact icon button for the header. */
export function ThemeSwitch({ className }: { className?: string }) {
  const { theme, set } = useTheme();
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      onClick={() => set(next)}
      aria-label={`Switch to ${next === "light" ? "Stone Light" : "Gold & Steel"} theme`}
      title={next === "light" ? "Stone Light" : "Gold & Steel"}
      className={cn(
        "grid h-10 w-10 place-items-center rounded-[4px] border border-line text-text transition-colors hover:border-gold hover:text-gold",
        className
      )}
    >
      {theme === "dark" ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[18px] w-[18px]" aria-hidden>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[18px] w-[18px]" aria-hidden>
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
        </svg>
      )}
    </button>
  );
}

/** Labelled two-option switch (used in the mobile menu). */
export function ThemeSegmented() {
  const { theme, set } = useTheme();
  return (
    <div className="flex items-center gap-1 rounded-full border border-line p-1 text-sm font-semibold" role="group" aria-label="Theme">
      {(["dark", "light"] as const).map((t) => (
        <button
          key={t}
          type="button"
          aria-pressed={theme === t}
          onClick={() => set(t)}
          className={cn("flex-1 rounded-full px-4 py-2.5 transition", theme === t ? "bg-gold-grad text-black" : "text-muted")}
        >
          {t === "dark" ? "Gold & Steel" : "Stone Light"}
        </button>
      ))}
    </div>
  );
}
