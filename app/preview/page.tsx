import SkylineMark from "@/components/SkylineMark";
import ThemeToggle from "@/components/ThemeToggle";

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const services = [
  {
    no: "01",
    title: "Civil Construction",
    text: "Residential, commercial, roads, piling, STP/WTP and infrastructure — engineered to last.",
    tags: ["Buildings", "Roads", "Piling", "Earthwork"],
    image: img("photo-1541888946425-d81bb19240f5", 1000),
  },
  {
    no: "02",
    title: "Interiors",
    text: "Concept to installation — modular kitchens, woodwork, false ceilings and finishes.",
    tags: ["Modular kitchen", "False ceiling", "Woodwork"],
    image: img("photo-1618221195710-dd6b41faaea6", 1000),
  },
  {
    no: "03",
    title: "Electrical",
    text: "Residential, commercial and industrial wiring, metering, LT lines and ICU setups.",
    tags: ["Wiring", "Pole / LT line", "ICU setup"],
    image: img("photo-1621905251189-08b45d6a269e", 1000),
  },
  {
    no: "04",
    title: "Waterproofing",
    text: "Roof, terrace and bathroom systems that keep new and old structures dry.",
    tags: ["Roof", "Terrace", "Bathroom"],
    image: img("photo-1504307651254-35680f356dfd", 1000),
  },
];

const projects = [
  { t: "Residential Tower", c: "Construction · Gomti Nagar", i: img("photo-1545324418-cc1a3fa10c00", 1400), big: true },
  { t: "PMGSY Road", c: "Road construction", i: img("photo-1621544402532-78c290378588", 900) },
  { t: "Commercial Complex", c: "Piling works", i: img("photo-1503387762-592deb58ef4e", 900) },
  { t: "STP Project", c: "Civil works", i: img("photo-1581094794329-c8112a89af12", 900) },
  { t: "Terrace Garden", c: "Waterproofing", i: img("photo-1600585154340-be6161a56a0c", 900) },
];

const stats = [
  ["15+", "Years of experience"],
  ["200+", "Projects delivered"],
  ["17", "Machines owned"],
  ["21", "Specialised services"],
];

const steps = ["Design", "Concept", "Implementation", "Installation", "Commissioning", "Maintenance"];

export default function PreviewPage() {
  return (
    <main className="overflow-x-clip">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-bg/70 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center gap-10 px-6">
          <a href="#" className="flex items-center gap-3">
            <SkylineMark className="h-8" />
            <span className="leading-none">
              <span className="block font-display text-lg font-semibold tracking-[0.25em] text-gold-grad">SUNITHARAJ</span>
              <span className="block text-[10px] tracking-[0.45em] text-muted">CONSTRUCTION</span>
            </span>
          </a>
          <nav className="ml-auto hidden gap-8 text-sm font-medium text-muted lg:flex">
            {["Services", "Projects", "About", "Process", "Contact"].map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} className="transition hover:text-gold">{n}</a>
            ))}
          </nav>
          <a href="#contact" className="bg-gold-grad ml-auto px-5 py-3 text-sm font-semibold text-black lg:ml-0">
            Get a Quote
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center pt-20">
        <img src={img("photo-1486406146926-c627a92ad1ab", 2000)} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        <div className="grid-bg absolute inset-0 opacity-20" />
        <div className="relative mx-auto w-full max-w-7xl px-6">
          <span className="eyebrow">Gomti Nagar · Lucknow</span>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-[104px]">
            Building <span className="text-gold-grad">ambitions</span> into landmarks.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted">
            Civil construction, interiors, electrical and waterproofing — one accountable team from first sketch to final handover.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="bg-gold-grad px-7 py-4 font-semibold text-black">Start Your Project →</a>
            <a href="#projects" className="border border-steel/40 px-7 py-4 font-semibold transition hover:border-gold hover:text-gold">View Our Work</a>
          </div>
        </div>
        <div className="absolute bottom-8 right-6 hidden border-l-2 border-gold bg-surface/80 px-5 py-4 backdrop-blur md:block">
          <div className="font-display text-sm font-semibold">Now building</div>
          <div className="text-xs text-muted">Residential tower, Gomti Nagar</div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 lg:grid-cols-4">
          {stats.map(([n, l], i) => (
            <div key={l} className={`py-10 ${i ? "lg:border-l lg:border-line lg:pl-10" : ""}`}>
              <div className="font-display text-5xl font-semibold text-gold-grad">{n}</div>
              <div className="mt-2 text-sm uppercase tracking-[0.2em] text-muted">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-b border-line py-6">
        <div className="marquee flex w-max gap-12 whitespace-nowrap font-display text-4xl font-semibold text-steel/60">
          {[...Array(2)].flatMap((_, k) =>
            ["Civil Construction", "Piling", "Roads", "Interiors", "Electrical", "Waterproofing", "STP / WTP", "Earthwork"].map((w) => (
              <span key={w + k} className="flex items-center gap-12">{w}<span className="text-gold">◆</span></span>
            ))
          )}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">What we do</span>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-tight sm:text-6xl">
              One crew for the <span className="text-gold-grad">whole build.</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted">Four disciplines under one roof — fewer handovers, tighter timelines, single accountability.</p>
        </div>
        <div className="mt-16 grid gap-px bg-line md:grid-cols-2">
          {services.map((s) => (
            <article key={s.no} className="group relative overflow-hidden bg-bg">
              <div className="relative h-64 overflow-hidden">
                <img src={s.image} alt={s.title} className="h-full w-full object-cover grayscale-[40%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent" />
              </div>
              <div className="relative -mt-12 p-8">
                <span className="font-display text-sm text-gold">{s.no}</span>
                <h3 className="mt-2 font-display text-3xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-muted">{s.text}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="border border-line px-3 py-1.5 text-xs text-muted">{t}</span>
                  ))}
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                  Explore service <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </div>
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gold-grad transition duration-500 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="border-t border-line bg-surface py-28">
        <div className="mx-auto max-w-7xl px-6">
          <span className="eyebrow">Selected work</span>
          <h2 className="mt-5 font-display text-4xl font-semibold sm:text-6xl">
            Recent <span className="text-gold-grad">projects</span>
          </h2>
          <div className="mt-14 grid auto-rows-[280px] gap-4 md:grid-cols-3">
            {projects.map((p) => (
              <figure key={p.t} className={`group relative overflow-hidden ${p.big ? "md:col-span-2 md:row-span-2" : ""}`}>
                <img src={p.i} alt={p.t} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <figcaption className="absolute bottom-0 p-6 text-white">
                  <div className="text-xs uppercase tracking-[0.25em] text-gold-hi">{p.c}</div>
                  <div className="mt-1 font-display text-2xl font-semibold">{p.t}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT — contrast band */}
      <section id="about" className="bg-alt-bg py-28 text-alt-text">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Why Sunitharaj</span>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Built on sincerity, delivered with precision.
            </h2>
            <p className="mt-6 text-alt-muted">
              Our holistic approach — matched by solutions customised to each client — sets the ground for long-term
              relationships. We build infrastructure for government and private projects with durability, efficiency
              and timely delivery.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {["Own machinery fleet", "Govt. & private projects", "Certified engineers", "Safety-first sites"].map((f) => (
                <div key={f} className="border-t-2 border-gold pt-4 font-semibold">{f}</div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={img("photo-1504307651254-35680f356dfd", 1200)} alt="" className="aspect-[4/5] w-full object-cover" />
            <div className="bg-gold-grad absolute -bottom-6 -left-6 p-8 text-black">
              <div className="font-display text-5xl font-semibold">15+</div>
              <div className="text-sm font-medium">years building Lucknow</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="mx-auto max-w-7xl px-6 py-28">
        <span className="eyebrow">How we work</span>
        <h2 className="mt-5 font-display text-4xl font-semibold sm:text-6xl">
          Concept to <span className="text-gold-grad">commissioning.</span>
        </h2>
        <ol className="mt-16 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-6">
          {steps.map((s, i) => (
            <li key={s} className="group bg-bg p-6 transition hover:bg-surface">
              <span className="font-display text-4xl font-semibold text-steel/30 transition group-hover:text-gold">0{i + 1}</span>
              <div className="mt-6 font-display text-lg font-semibold">{s}</div>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-gold-grad py-24 text-black">
        <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-10 px-6">
          <h2 className="max-w-3xl font-display text-5xl font-semibold leading-[0.95] sm:text-7xl">
            Let&apos;s build something that lasts.
          </h2>
          <div className="flex flex-wrap gap-4">
            <a href="https://wa.me/" className="bg-wa px-7 py-4 font-semibold text-white">WhatsApp Us</a>
            <a href="#" className="bg-black px-7 py-4 font-semibold text-white">Request a Quote →</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-bg pt-20 pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <SkylineMark className="h-8" />
              <span className="font-display text-lg font-semibold tracking-[0.25em] text-gold-grad">SUNITHARAJ</span>
            </div>
            <p className="mt-5 max-w-sm text-sm text-muted">Gomti Nagar, Lucknow, Uttar Pradesh. Civil, interiors, electrical and waterproofing.</p>
          </div>
          <div className="text-sm">
            <div className="mb-4 font-semibold">Services</div>
            {services.map((s) => <div key={s.no} className="py-1 text-muted">{s.title}</div>)}
          </div>
          <div className="text-sm">
            <div className="mb-4 font-semibold">Company</div>
            {["About", "Projects", "Team", "Careers", "Contact"].map((x) => <div key={x} className="py-1 text-muted">{x}</div>)}
          </div>
        </div>
        <div className="outline-text mt-16 select-none text-center font-display text-[15vw] font-semibold leading-none tracking-tight">
          SUNITHARAJ
        </div>
      </footer>

      <ThemeToggle />
    </main>
  );
}
