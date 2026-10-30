import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  lede,
  className,
  align = "left",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  lede?: string;
  className?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  return (
    <Reveal className={cn("mb-12 md:mb-16", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <span className="eyebrow mb-5">{eyebrow}</span>}
      <Tag
        className={cn(
          "font-display font-semibold leading-[1.02] tracking-tight",
          Tag === "h1" ? "text-[clamp(44px,7vw,96px)]" : "text-[clamp(32px,5vw,64px)]",
          align === "center" ? "mx-auto max-w-[18ch]" : "max-w-[20ch]"
        )}
      >
        {title} {highlight && <span className="text-gold-grad">{highlight}</span>}
      </Tag>
      {lede && (
        <p className={cn("mt-5 max-w-[42rem] text-lg text-muted", align === "center" && "mx-auto")}>{lede}</p>
      )}
    </Reveal>
  );
}
