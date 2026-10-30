"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const set = (t: "dark" | "light") => {
    setTheme(t);
    document.documentElement.dataset.theme = t;
  };

  return (
    <div className="fixed bottom-5 left-1/2 z-[60] -translate-x-1/2 flex items-center gap-1 rounded-full border border-line bg-surface/90 p-1 text-xs font-semibold shadow-2xl backdrop-blur">
      <span className="px-3 text-muted">Preview theme</span>
      {(["dark", "light"] as const).map((t) => (
        <button
          key={t}
          onClick={() => set(t)}
          className={`rounded-full px-4 py-2 transition ${
            theme === t ? "bg-gold-grad text-black" : "text-text hover:bg-raised"
          }`}
        >
          {t === "dark" ? "Gold & Steel" : "Stone Light"}
        </button>
      ))}
    </div>
  );
}
