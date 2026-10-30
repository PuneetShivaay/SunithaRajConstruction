import Container from "@/components/shared/Container";
import { clients } from "@/content/company";

// TODO(client): add logo files under /public/images/clients and set `logo` in content.
export default function ClientStrip() {
  return (
    <section className="py-14">
      <Container>
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.3em] text-muted">
          Brands and programmes we have worked with
        </p>
        <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((c) => (
            <li key={c.name} className="grid h-24 place-items-center bg-bg px-4 text-center font-display text-lg font-semibold text-steel/70 transition-colors hover:text-gold">
              {c.name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
