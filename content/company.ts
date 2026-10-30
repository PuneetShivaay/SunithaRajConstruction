import type { Client, FAQ, Machine, Stat, Step, TeamMember, Testimonial, Value } from "@/lib/types";

// TODO(client): verify stats.
export const stats: Stat[] = [
  { value: "4", label: "Service lines under one roof" },
  { value: "21+", label: "Services, from piling to modular kitchens" },
  { value: "10", label: "Leaders & specialists on the team" },
  { value: "17", label: "Machines & tools in our own fleet" },
];

export const steps: Step[] = [
  { title: "Design", text: "We understand your requirement and shape the plan in 2D and 3D where it helps." },
  { title: "Concept", text: "The plan becomes a clear concept, costed and scheduled." },
  { title: "Implementation", text: "Engineers, supervisors and crews take the work onto site." },
  { title: "Installation", text: "Fittings, wiring, finishes and fixtures are installed and checked." },
  { title: "Testing & commissioning", text: "Survey and testing tools confirm the work before handover." },
  { title: "Maintenance", text: "We stay available after handover." },
];

export const values: Value[] = [
  { title: "Expertise", text: "Experience across many construction disciplines." },
  { title: "Quality craftsmanship", text: "Rigorous attention to detail at every stage." },
  { title: "Modern methods", text: "Technology that offers creative solutions." },
  { title: "Sustainability", text: "Eco-friendly solutions on site." },
  { title: "Adaptability", text: "Projects of any scale or complexity." },
  { title: "Supplier network", text: "Materials sourced cost-effectively." },
];

export const team: TeamMember[] = [
  { name: "Rajkumar Sharma", role: "Founder", featured: true },
  { name: "Rajat Sharma", role: "Managing Director" },
  { name: "Vishal Vishwakarma", role: "Director, Civil Engineering" },
  { name: "Sanjay Sharma", role: "Head, Furniture and Wood" },
  { name: "Arpit Shukla", role: "Civil Site Engineer" },
  { name: "Shani Sharma", role: "Site Engineer" },
  { name: "Prashant Sharma", role: "Assistant Engineer" },
  { name: "Shekhar Sharma", role: "Consultant" },
  { name: "Puneet Kumar", role: "IT Head" },
  { name: "Chetan Sharma", role: "Legal Advisor" },
];

export const machinery: Machine[] = [
  { name: "Excavator", detail: "JCB 3DX", group: "machinery" },
  { name: "Backhoe loader", detail: "JCB 2DX, 3DX", group: "machinery" },
  { name: "Vibro roller", detail: "ACE", group: "machinery" },
  { name: "Earth compactor", detail: "Shakti", group: "machinery" },
  { name: "Transit mixer", detail: "Ajax, on hire", group: "machinery" },
  { name: "Farana 15T crane", detail: "ACE, on hire", group: "machinery" },
  { name: "Forklift, 3 ton", detail: "JCB", group: "machinery" },
  { name: "Total station", detail: "Sokkia", group: "machinery" },
  { name: "Auto level", detail: "Sokkia", group: "machinery" },
  { name: "CTM machine, cube moulds", detail: "ISI mark", group: "machinery" },
  { name: "Project managers", detail: "B.Tech, Civil and Electrical", group: "people" },
  { name: "Engineers", detail: "B.Tech or Diploma", group: "people" },
  { name: "Site supervisors", detail: "ITI, Electrician and Fitter", group: "people" },
  { name: "Safety stewards", detail: "On every site team", group: "people" },
];

// TODO(client): replace with real testimonials.
export const testimonials: Testimonial[] = [
  { name: "Homeowner", role: "Gomti Nagar, Lucknow", quote: "From the foundation to the interiors, one team handled everything. Clear communication and work delivered as promised." },
  { name: "Commercial client", role: "Lucknow", quote: "Their piling and site management were professional and on schedule. We would work with them again." },
  { name: "Residential client", role: "Lucknow", quote: "Our terrace leakage was fixed properly the first time. Two monsoons later, still completely dry." },
];

export const clients: Client[] = [
  { name: "Dr. Fixit" },
  { name: "Godrej" },
  { name: "ACC" },
  { name: "Bayer" },
  { name: "Blue Wing" },
  { name: "Orient" },
];

export const faqs: FAQ[] = [
  { q: "Do you handle construction and interiors together?", a: "Yes. Civil and residential construction, interiors, electrical works and waterproofing sit under one team, so one point of contact takes you from design to handover." },
  { q: "Do you take government as well as private work?", a: "Yes. We have delivered PMGSY roads, STP and WTP civil works as well as private homes and commercial complexes." },
  { q: "Do you have your own equipment?", a: "Yes. We own excavators, backhoe loaders, rollers, compactors, survey and testing equipment, and hire heavy cranes and mixers as needed." },
  { q: "How do I get a quote?", a: "Send us your requirement on WhatsApp or through the quote form. We'll discuss it, visit the site if needed, and share an estimate." },
  { q: "What are your quality, safety and environment policies?", a: "Every site has a safety steward, materials are tested (cube tests and more), and we prefer eco-friendly methods wherever possible." },
  { q: "Where are you based?", a: "We are based in Gomti Nagar, Lucknow, and work across Uttar Pradesh." },
];

export const marquee = ["Earthwork", "Piling", "Roads", "Civil construction", "Interiors", "Electrical", "Waterproofing", "STP & WTP"];
