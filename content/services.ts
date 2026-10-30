import type { Service } from "@/lib/types";
import { images } from "./images";

export const services: Service[] = [
  {
    slug: "construction",
    title: "Construction",
    tagline: "Civil works built to last",
    summary: "Residential, commercial and infrastructure construction — buildings, roads, piling and STP/WTP civil works.",
    description: [
      "From foundations to finishing, we deliver civil construction for homes, commercial complexes and public infrastructure across Lucknow and Uttar Pradesh.",
      "Our in-house machinery, engineers and site supervisors mean fewer handovers, tighter quality control and predictable timelines.",
    ],
    image: images.services.construction,
    subServices: [
      { name: "Building construction", description: "Residential houses, villas, apartments and commercial buildings." },
      { name: "Road construction", description: "PMGSY, internal and approach roads with compaction and finishing." },
      { name: "Piling works", description: "Bored and cast-in-situ piles for complexes and heavy structures." },
      { name: "STP & WTP civil works", description: "Tanks, chambers and structures for sewage and water treatment plants." },
      { name: "Renovations", description: "Structural repairs, extensions and complete makeovers." },
      { name: "Earthwork", description: "Excavation, filling, levelling and site preparation." },
    ],
    faqs: [
      { q: "Do you handle government projects?", a: "Yes. We execute both government and private projects, including roads and STP/WTP civil works." },
      { q: "Do you provide material and labour both?", a: "Yes — we can work on a turnkey basis or labour-only, depending on your requirement." },
    ],
  },
  {
    slug: "interiors",
    title: "Interiors",
    tagline: "Spaces designed around you",
    summary: "Design, concept and installation for homes and offices — kitchens, furniture, ceilings and finishes.",
    description: [
      "We take interiors from 2D and 3D concept to final installation, coordinating carpentry, ceilings, glass and finishes under one team.",
      "You see the design before we build it, and you get one point of contact through to handover.",
    ],
    image: images.services.interiors,
    subServices: [
      { name: "Modular kitchen", description: "Space-efficient kitchens with quality hardware and finishes." },
      { name: "Wooden work & furniture", description: "Wardrobes, beds, TV units and custom furniture." },
      { name: "False ceiling", description: "Gypsum and POP ceilings with integrated lighting." },
      { name: "PVC panels", description: "Durable, moisture-resistant wall and ceiling panels." },
      { name: "Glass work", description: "Partitions, shower enclosures and glass facades." },
      { name: "2D & 3D wallpaper", description: "Feature walls and premium wall finishes." },
    ],
    faqs: [
      { q: "Will I see a design before work starts?", a: "Yes. We share 2D layouts and 3D views so you can approve the design before execution." },
    ],
  },
  {
    slug: "electrical",
    title: "Electrical",
    tagline: "Safe power, from home to industry",
    summary: "Wiring and line work for homes, shops and industry — from conduit to HT lines.",
    description: [
      "Our licensed electrical team handles residential, commercial and industrial wiring along with LT/HT line work and specialised installations.",
      "Every installation is tested and documented before handover.",
    ],
    image: images.services.electrical,
    subServices: [
      { name: "Residential wiring", description: "Concealed wiring, DB setup and fittings for homes." },
      { name: "Commercial wiring", description: "Shops, offices and showrooms." },
      { name: "Industrial wiring", description: "Power distribution for factories and plants." },
      { name: "Conduit laying", description: "Planned conduit networks for clean, safe routing." },
      { name: "Meter installation", description: "New connections and meter setup." },
      { name: "Pole LT/HT line", description: "Overhead line erection and maintenance." },
      { name: "ICU setup", description: "Electrical setup for hospital ICUs and critical areas." },
    ],
    faqs: [
      { q: "Do you test installations before handover?", a: "Yes. All circuits are tested for safety and load before handover." },
    ],
  },
  {
    slug: "waterproofing",
    title: "Waterproofing",
    tagline: "Leak protection that lasts",
    summary: "Leak protection that keeps new and old structures dry — roofs, terraces and bathrooms.",
    description: [
      "We diagnose the cause of leakage first, then apply the right system — membrane, coating or chemical treatment — for long-term protection.",
      "We work with trusted brands like Dr. Fixit for reliable results.",
    ],
    image: images.services.waterproofing,
    subServices: [
      { name: "Roof waterproofing", description: "Membrane and coating systems for roofs." },
      { name: "Terrace waterproofing", description: "Terrace and terrace-garden protection." },
      { name: "Bathroom waterproofing", description: "Leak-proof wet areas without major demolition." },
    ],
    faqs: [
      { q: "Can you fix leakage without breaking tiles?", a: "In many cases, yes — chemical injection and coatings can treat leaks with minimal demolition." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
