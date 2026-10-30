// Placeholder mark inspired by the logo's three towers (final logo comes later)
export default function SkylineMark({ className = "h-8" }: { className?: string }) {
  return (
    <span className={`inline-flex items-end gap-[3px] ${className}`} aria-hidden>
      <span className="bar-rise block h-[55%] w-[6px] bg-gold-grad" style={{ animationDelay: "0ms" }} />
      <span className="bar-rise block h-full w-[8px] bg-gold-grad" style={{ animationDelay: "120ms" }} />
      <span className="bar-rise block h-[85%] w-[8px] bg-steel" style={{ animationDelay: "240ms" }} />
      <span className="bar-rise block h-[45%] w-[6px] bg-steel" style={{ animationDelay: "360ms" }} />
    </span>
  );
}
