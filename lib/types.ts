export type ServiceSlug = "construction" | "interiors" | "electrical" | "waterproofing";

export type ProjectCategory = "building" | "roads-civil" | "waterproofing" | "interiors" | "electrical";

export type FAQ = { q: string; a: string };

export type Service = {
  slug: ServiceSlug;
  title: string;
  tagline: string;
  summary: string;
  description: string[];
  image: string;
  subServices: { name: string; description: string }[];
  faqs: FAQ[];
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  service: ServiceSlug;
  location: string;
  year?: number;
  client?: string;
  sector: "Government" | "Private";
  cover: string;
  gallery: string[];
  summary: string;
  scope: string[];
  featured?: boolean;
};

export type TeamMember = { name: string; role: string; featured?: boolean };
export type Machine = { name: string; detail: string; group: "machinery" | "people" };
export type Testimonial = { name: string; role: string; quote: string };
export type Value = { title: string; text: string };
export type Step = { title: string; text: string };
export type Stat = { value: string; label: string };
export type Client = { name: string; logo?: string };
