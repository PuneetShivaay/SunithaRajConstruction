import { site } from "@/content/site";

export function whatsappLink(message = "Hello Sunitharaj Construction, I would like a quote.") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function enquiryMessage(topic: string) {
  return `Hello Sunitharaj Construction, I'm interested in ${topic}. Please share details.`;
}
