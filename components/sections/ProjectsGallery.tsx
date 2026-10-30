"use client";

import { useState } from "react";
import ProjectCard from "@/components/sections/ProjectCard";
import { categories } from "@/content/projects";
import type { Project, ProjectCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function ProjectsGallery({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);
  const available = categories.filter((c) => c.value === "all" || projects.some((p) => p.category === c.value));

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {available.map((c) => (
          <button
            key={c.value}
            type="button"
            aria-pressed={filter === c.value}
            onClick={() => setFilter(c.value)}
            className={cn(
              "rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors",
              filter === c.value ? "border-gold bg-gold text-[#0e0f11]" : "border-line text-text/80 hover:border-gold/60"
            )}
          >
            {c.label}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} projects
      </p>
      <div className="grid auto-rows-[300px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <ProjectCard key={p.slug} project={p} className="h-full" />
        ))}
      </div>
    </>
  );
}
