"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * next/image wrapper that falls back to a branded blueprint placeholder
 * when a photo is missing (real photos are dropped into /public/images later).
 */
export default function Media({
  src,
  alt,
  className,
  sizes = "100vw",
  priority,
  label,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  label?: string;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={cn("relative overflow-hidden bg-raised", className)}>
      {failed ? (
        <div className="grid-bg absolute inset-0 grid place-items-center opacity-80" role="img" aria-label={alt}>
          <span className="font-display text-2xl font-semibold text-steel/60">{label ?? alt}</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          // Remote (stock) photos load directly in the browser, like the preview page.
          // Local photos in /public still go through Next.js optimisation.
          unoptimized={src.startsWith("http")}
          className="object-cover"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
