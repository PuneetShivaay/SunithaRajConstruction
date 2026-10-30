// Contact details taken from the current live site. TODO(client): confirm office hours.
export const site = {
  name: "Sunitharaj Construction",
  shortName: "Sunitharaj",
  tagline: "Construction, interiors, electrical & waterproofing — one team, concept to commissioning.",
  description:
    "Sunitharaj Construction, Gomti Nagar, Lucknow. Civil construction, interior design, electrical works and waterproofing for government and private clients.",
  phone: "+91 98393 73331",
  phoneHref: "tel:+919839373331",
  whatsappDisplay: "+91 88743 63616",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "918874363616",
  email: "sunitharajconst@gmail.com",
  instagram: { handle: "@sunitharajconstructions", url: "https://www.instagram.com/sunitharajconstructions/" },
  address: {
    street: "Husariya, Gomti Nagar",
    city: "Lucknow",
    region: "Uttar Pradesh",
    postalCode: "226010",
    full: "Husariya, Gomti Nagar, Lucknow 226010",
  },
  mapEmbed: "https://www.google.com/maps?q=Husariya,+Gomti+Nagar,+Lucknow+226010&output=embed",
  hours: "Mon – Sat, 9:00 AM – 7:00 PM",
  openingHoursSchema: "Mo-Sa 09:00-19:00",
  areaServed: ["Lucknow", "Uttar Pradesh"],
  nav: [
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
