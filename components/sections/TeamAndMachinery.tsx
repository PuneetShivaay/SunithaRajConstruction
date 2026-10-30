import Container from "@/components/shared/Container";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { machinery, team } from "@/content/company";
import { cn } from "@/lib/utils";

const initials = (n: string) =>
  n
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

export function Team() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Our people" title="The team behind" highlight="every site." />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <li
              key={m.name}
              className={cn(
                "flex items-center gap-4 border p-5",
                m.featured ? "border-gold bg-gold-grad text-black sm:col-span-2" : "border-line bg-surface"
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "grid h-14 w-14 shrink-0 place-items-center rounded-full font-display text-lg font-semibold",
                  m.featured ? "bg-black text-gold" : "bg-raised text-steel"
                )}
              >
                {initials(m.name)}
              </span>
              <span>
                <b className="block font-semibold">{m.name}</b>
                <span className={cn("text-sm", m.featured ? "text-black/70" : "text-muted")}>{m.role}</span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

export function Machinery() {
  const half = Math.ceil(machinery.length / 2);
  const cols = [machinery.slice(0, half), machinery.slice(half)];
  return (
    <section className="border-y border-line bg-surface py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Resources"
          title="Our own machinery,"
          highlight="tools and crews."
          lede="We plan equipment and people project by project, so the site gets what it needs."
        />
        <Reveal className="grid gap-x-12 md:grid-cols-2">
          {cols.map((col, c) => (
            <ul key={c} className={cn("border-t border-line", c === 1 && "max-md:border-t-0")}>
              {col.map((m) => (
                <li key={m.name} className="flex items-center justify-between gap-6 border-b border-line py-4">
                  <b className="font-semibold">{m.name}</b>
                  <span className="text-right text-muted">{m.detail}</span>
                </li>
              ))}
            </ul>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
