import { z } from "zod";

export const serviceOptions = ["Construction", "Interiors", "Electrical", "Waterproofing", "Not sure yet"] as const;

export const quoteSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .regex(/^(\+?91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}$/, "Enter a valid 10-digit Indian mobile number"),
  email: z.union([z.literal(""), z.string().trim().email("Enter a valid email")]).optional(),
  service: z.enum(serviceOptions, { message: "Choose a service" }),
  location: z.string().trim().max(120).optional(),
  message: z.string().trim().max(1500).optional(),
  // Honeypot: must stay empty
  company: z.string().max(0).optional(),
});

export type QuoteInput = z.infer<typeof quoteSchema>;
