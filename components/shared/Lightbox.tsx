"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Media from "@/components/shared/Media";

export default function Lightbox({ images, title }: { images: string[]; title: string }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);

  const open = (n: number) => {
    setIndex(n);
    ref.current?.showModal();
  };
  const step = (d: number) => setIndex((i) => (i + d + images.length) % images.length);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, n) => (
          <button
            key={src + n}
            type="button"
            onClick={() => open(n)}
            className="group relative aspect-[4/3] cursor-zoom-in overflow-hidden rounded-[6px] border border-line"
            aria-label={`Open photo ${n + 1} of ${title}`}
          >
            <Media src={src} alt="" sizes="(min-width: 1024px) 33vw, 50vw" className="absolute inset-0 h-full w-full" label={title} />
          </button>
        ))}
      </div>

      <dialog
        ref={ref}
        aria-label={`${title} photos`}
        className="m-auto max-h-[92vh] max-w-[94vw] bg-transparent p-0 backdrop:bg-black/90"
        onClick={(e) => e.target === ref.current && ref.current?.close()}
      >
        <div className="relative h-[80vh] w-[94vw] max-w-6xl">
          <Image src={images[index]} alt={`${title} — photo ${index + 1}`} fill sizes="94vw" unoptimized={images[index].startsWith("http")} className="object-contain" />
        </div>
        <p className="mt-3 text-center text-sm text-white/80">
          {index + 1} / {images.length}
        </p>
        <button onClick={() => ref.current?.close()} className="fixed right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-white text-xl text-black" aria-label="Close">
          ×
        </button>
        {images.length > 1 && (
          <>
            <button onClick={() => step(-1)} className="fixed left-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-black" aria-label="Previous photo">
              ‹
            </button>
            <button onClick={() => step(1)} className="fixed right-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-black" aria-label="Next photo">
              ›
            </button>
          </>
        )}
      </dialog>
    </>
  );
}
