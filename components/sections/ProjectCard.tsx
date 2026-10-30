import Link from "next/link";
import Media from "@/components/shared/Media";
import type { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function ProjectCard({ project, className, large }: { project: Project; className?: string; large?: boolean }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn("group relative block overflow-hidden rounded-[6px] border border-line", className)}
    >
      <Media
        src={project.cover}
        alt={`${project.title}, ${project.location}`}
        sizes={large ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
        className="absolute inset-0 h-full w-full [&_img]:transition-transform [&_img]:duration-700 group-hover:[&_img]:scale-105"
        label={project.title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-hi">
          {project.sector} · {project.location}
        </span>
        <h3 className={cn("mt-2 font-display font-semibold text-white", large ? "text-3xl md:text-4xl" : "text-2xl")}>
          {project.title}
        </h3>
      </div>
      <span className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-white/30 text-white opacity-0 transition-opacity group-hover:opacity-100">
        →
      </span>
    </Link>
  );
}
