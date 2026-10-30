import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Container from "@/components/shared/Container";

/** Compact hero used by inner pages */
export default function PageHero({
  eyebrow,
  title,
  highlight,
  lede,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  lede?: string;
  crumbs: { name: string; path: string }[];
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line pb-16 pt-36 md:pb-24 md:pt-44">
      <div className="grid-bg absolute inset-0 opacity-25 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <Container className="relative">
        <Breadcrumbs items={crumbs} />
        <span className="eyebrow mb-6">{eyebrow}</span>
        <h1 className="max-w-[18ch] font-display text-[clamp(44px,7vw,96px)] font-semibold leading-[0.98] tracking-tight">
          {title} {highlight && <span className="text-gold-grad">{highlight}</span>}
        </h1>
        {lede && <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">{lede}</p>}
        {children}
      </Container>
    </section>
  );
}
